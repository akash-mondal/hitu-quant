import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getClerkUserId, getISTDate } from "./lib/helpers";
import { XP_RULES, getLevelFromXP } from "./lib/constants";

// ===== Toggle a resource as complete/incomplete =====
export const toggleResourceComplete = mutation({
  args: {
    resourceId: v.id("resources"),
  },
  handler: async (ctx, args) => {
    const clerkUserId = await getClerkUserId(ctx);

    const resource = await ctx.db.get(args.resourceId);
    if (!resource) throw new Error("Resource not found");

    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_clerkUserId", (q) => q.eq("clerkUserId", clerkUserId))
      .unique();
    if (!profile) throw new Error("Profile not found");

    // Check if already completed
    const existing = await ctx.db
      .query("userResourceProgress")
      .withIndex("by_clerkUserId_resourceId", (q) =>
        q.eq("clerkUserId", clerkUserId).eq("resourceId", args.resourceId)
      )
      .unique();

    const now = Date.now();

    if (existing && existing.isCompleted) {
      // === UNDO completion ===
      await ctx.db.patch(existing._id, {
        isCompleted: false,
        completedAt: undefined,
        xpEarned: 0,
      });

      const newTotalXP = Math.max(0, profile.totalXP - existing.xpEarned);
      await ctx.db.patch(profile._id, {
        totalXP: newTotalXP,
        currentLevel: getLevelFromXP(newTotalXP),
        totalResourcesCompleted: Math.max(
          0,
          profile.totalResourcesCompleted - 1
        ),
      });

      await recalculateSubtopicProgress(
        ctx,
        clerkUserId,
        resource.subtopicId,
        resource.topicId
      );
      await recalculateTopicProgress(ctx, clerkUserId, resource.topicId);

      return { action: "unmarked" as const, xpChange: -existing.xpEarned };
    }

    // === MARK COMPLETE ===
    const xpEarned = resource.xpReward;

    if (existing) {
      await ctx.db.patch(existing._id, {
        isCompleted: true,
        completedAt: now,
        xpEarned,
      });
    } else {
      await ctx.db.insert("userResourceProgress", {
        clerkUserId,
        resourceId: args.resourceId,
        subtopicId: resource.subtopicId,
        topicId: resource.topicId,
        isCompleted: true,
        completedAt: now,
        xpEarned,
      });
    }

    // Award XP
    const newTotalXP = profile.totalXP + xpEarned;
    const newLevel = getLevelFromXP(newTotalXP);
    const leveledUp = newLevel > profile.currentLevel;

    await ctx.db.patch(profile._id, {
      totalXP: newTotalXP,
      currentLevel: newLevel,
      totalResourcesCompleted: profile.totalResourcesCompleted + 1,
    });

    // XP transaction
    await ctx.db.insert("xpTransactions", {
      clerkUserId,
      amount: xpEarned,
      source: "resourceComplete",
      referenceId: args.resourceId,
      description: `Completed: ${resource.title}`,
      timestamp: now,
    });

    // Recalculate progress (may trigger bonuses)
    const subtopicResult = await recalculateSubtopicProgress(
      ctx,
      clerkUserId,
      resource.subtopicId,
      resource.topicId
    );
    const topicResult = await recalculateTopicProgress(
      ctx,
      clerkUserId,
      resource.topicId
    );

    // Update streak for today
    await updateStreakForToday(ctx, clerkUserId, xpEarned);

    return {
      action: "completed" as const,
      xpChange: xpEarned,
      subtopicJustCompleted: subtopicResult.justCompleted,
      topicJustCompleted: topicResult.justCompleted,
      leveledUp,
      newLevel,
    };
  },
});

// ===== Get resource completion status for a subtopic =====
export const getSubtopicResourceProgress = query({
  args: {
    subtopicId: v.id("subtopics"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];

    const clerkUserId = identity.subject;

    const completions = await ctx.db
      .query("userResourceProgress")
      .withIndex("by_clerkUserId_subtopicId", (q) =>
        q.eq("clerkUserId", clerkUserId).eq("subtopicId", args.subtopicId)
      )
      .collect();

    return completions;
  },
});

// ===== Helper: recalculate subtopic progress =====
async function recalculateSubtopicProgress(
  ctx: any,
  clerkUserId: string,
  subtopicId: any,
  topicId: any
) {
  const allResources = await ctx.db
    .query("resources")
    .withIndex("by_subtopicId", (q: any) => q.eq("subtopicId", subtopicId))
    .collect();

  const completedResources = await ctx.db
    .query("userResourceProgress")
    .withIndex("by_clerkUserId_subtopicId", (q: any) =>
      q.eq("clerkUserId", clerkUserId).eq("subtopicId", subtopicId)
    )
    .collect();

  const completedCount = completedResources.filter(
    (r: any) => r.isCompleted
  ).length;
  const totalCount = allResources.length;
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isCompleted = completedCount >= totalCount && totalCount > 0;

  const existing = await ctx.db
    .query("userSubtopicProgress")
    .withIndex("by_clerkUserId_subtopicId", (q: any) =>
      q.eq("clerkUserId", clerkUserId).eq("subtopicId", subtopicId)
    )
    .unique();

  let justCompleted = false;

  if (existing) {
    justCompleted = isCompleted && !existing.isCompleted;
    await ctx.db.patch(existing._id, {
      resourcesCompleted: completedCount,
      totalResources: totalCount,
      progressPercent,
      isCompleted,
      completedAt: justCompleted ? Date.now() : existing.completedAt,
    });
  } else {
    justCompleted = isCompleted;
    await ctx.db.insert("userSubtopicProgress", {
      clerkUserId,
      subtopicId,
      topicId,
      resourcesCompleted: completedCount,
      totalResources: totalCount,
      progressPercent,
      isCompleted,
      completedAt: isCompleted ? Date.now() : undefined,
    });
  }

  // Subtopic completion bonus
  if (justCompleted) {
    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_clerkUserId", (q: any) =>
        q.eq("clerkUserId", clerkUserId)
      )
      .unique();
    if (profile) {
      const newXP = profile.totalXP + XP_RULES.subtopicComplete;
      await ctx.db.patch(profile._id, {
        totalXP: newXP,
        currentLevel: getLevelFromXP(newXP),
        totalSubtopicsCompleted: profile.totalSubtopicsCompleted + 1,
      });
      await ctx.db.insert("xpTransactions", {
        clerkUserId,
        amount: XP_RULES.subtopicComplete,
        source: "subtopicComplete",
        referenceId: subtopicId,
        description: "Subtopic completed bonus!",
        timestamp: Date.now(),
      });
    }
  }

  return { justCompleted };
}

// ===== Helper: recalculate topic progress =====
async function recalculateTopicProgress(
  ctx: any,
  clerkUserId: string,
  topicId: any
) {
  const allSubtopics = await ctx.db
    .query("subtopics")
    .withIndex("by_topicId", (q: any) => q.eq("topicId", topicId))
    .collect();

  const subtopicProgress = await ctx.db
    .query("userSubtopicProgress")
    .withIndex("by_clerkUserId_topicId", (q: any) =>
      q.eq("clerkUserId", clerkUserId).eq("topicId", topicId)
    )
    .collect();

  let totalResources = 0;
  let completedResources = 0;

  for (const sp of subtopicProgress) {
    totalResources += sp.totalResources;
    completedResources += sp.resourcesCompleted;
  }

  // Count resources for subtopics with no progress yet
  const progressSubtopicIds = new Set(
    subtopicProgress.map((sp: any) => sp.subtopicId.toString())
  );
  for (const sub of allSubtopics) {
    if (!progressSubtopicIds.has(sub._id.toString())) {
      totalResources += sub.resourceCount;
    }
  }

  const progressPercent =
    totalResources > 0
      ? Math.round((completedResources / totalResources) * 100)
      : 0;
  const allSubtopicsCompleted =
    subtopicProgress.length >= allSubtopics.length &&
    subtopicProgress.every((sp: any) => sp.isCompleted);
  const isCompleted = allSubtopicsCompleted;

  const existing = await ctx.db
    .query("userTopicProgress")
    .withIndex("by_clerkUserId_topicId", (q: any) =>
      q.eq("clerkUserId", clerkUserId).eq("topicId", topicId)
    )
    .unique();

  let justCompleted = false;

  if (existing) {
    justCompleted = isCompleted && !existing.isCompleted;
    await ctx.db.patch(existing._id, {
      resourcesCompleted: completedResources,
      totalResources,
      progressPercent,
      isCompleted,
      completedAt: justCompleted ? Date.now() : existing.completedAt,
      xpEarned: completedResources,
    });
  } else {
    justCompleted = isCompleted;
    await ctx.db.insert("userTopicProgress", {
      clerkUserId,
      topicId,
      resourcesCompleted: completedResources,
      totalResources,
      progressPercent,
      isCompleted,
      completedAt: isCompleted ? Date.now() : undefined,
      xpEarned: completedResources,
    });
  }

  // Topic completion bonus
  if (justCompleted) {
    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_clerkUserId", (q: any) =>
        q.eq("clerkUserId", clerkUserId)
      )
      .unique();
    if (profile) {
      const newXP = profile.totalXP + XP_RULES.topicComplete;
      await ctx.db.patch(profile._id, {
        totalXP: newXP,
        currentLevel: getLevelFromXP(newXP),
        totalTopicsCompleted: profile.totalTopicsCompleted + 1,
      });
      await ctx.db.insert("xpTransactions", {
        clerkUserId,
        amount: XP_RULES.topicComplete,
        source: "topicComplete",
        referenceId: topicId,
        description: "Topic completed bonus!",
        timestamp: Date.now(),
      });
    }
  }

  return { justCompleted };
}

// ===== Helper: update streak for today =====
async function updateStreakForToday(
  ctx: any,
  clerkUserId: string,
  xpEarned: number
) {
  const today = getISTDate();

  const existing = await ctx.db
    .query("streakHistory")
    .withIndex("by_clerkUserId_date", (q: any) =>
      q.eq("clerkUserId", clerkUserId).eq("date", today)
    )
    .unique();

  if (existing) {
    await ctx.db.patch(existing._id, {
      resourcesCompleted: existing.resourcesCompleted + 1,
      xpEarned: existing.xpEarned + xpEarned,
      streakMaintained: true,
    });
  } else {
    await ctx.db.insert("streakHistory", {
      clerkUserId,
      date: today,
      resourcesCompleted: 1,
      xpEarned,
      streakMaintained: true,
      freezeUsed: false,
    });

    // Update profile streak
    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_clerkUserId", (q: any) =>
        q.eq("clerkUserId", clerkUserId)
      )
      .unique();

    if (profile) {
      const yesterday = getISTDate(-1);
      const isConsecutive = profile.lastPracticeDate === yesterday;
      const newStreak = isConsecutive ? profile.currentStreak + 1 : 1;
      const newLongest = Math.max(newStreak, profile.longestStreak);

      await ctx.db.patch(profile._id, {
        currentStreak: newStreak,
        longestStreak: newLongest,
        lastPracticeDate: today,
      });
    }
  }
}
