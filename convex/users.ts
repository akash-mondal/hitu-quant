import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { getAuthenticatedUser, getClerkUserId } from "./lib/helpers";

export const getCurrentProfile = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_clerkUserId", (q) =>
        q.eq("clerkUserId", identity.subject)
      )
      .unique();

    return profile;
  },
});

export const createProfile = mutation({
  handler: async (ctx) => {
    const identity = await getAuthenticatedUser(ctx);
    const clerkUserId = identity.subject;

    // Check if profile already exists
    const existing = await ctx.db
      .query("userProfiles")
      .withIndex("by_clerkUserId", (q) => q.eq("clerkUserId", clerkUserId))
      .unique();

    if (existing) return existing._id;

    const profileId = await ctx.db.insert("userProfiles", {
      clerkUserId,
      displayName: identity.name || "Student",
      avatarUrl: identity.pictureUrl,
      email: identity.email || "",
      onboardingCompleted: false,
      totalXP: 0,
      currentLevel: 1,
      currentStreak: 0,
      longestStreak: 0,
      gems: 50, // Starting bonus
      currentLeagueTier: "bronze",
      totalResourcesCompleted: 0,
      totalTopicsCompleted: 0,
      totalSubtopicsCompleted: 0,
      createdAt: Date.now(),
    });

    // Initialize streak freeze inventory
    await ctx.db.insert("streakFreezes", {
      clerkUserId,
      quantity: 1, // Start with 1 free streak freeze
    });

    return profileId;
  },
});

export const completeOnboarding = mutation({
  args: {
    targetCompanyType: v.union(
      v.literal("product"),
      v.literal("service"),
      v.literal("startup"),
      v.literal("any")
    ),
    selfAssessedLevel: v.union(
      v.literal("beginner"),
      v.literal("intermediate"),
      v.literal("advanced")
    ),
    placementQuizScore: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const clerkUserId = await getClerkUserId(ctx);

    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_clerkUserId", (q) => q.eq("clerkUserId", clerkUserId))
      .unique();

    if (!profile) throw new Error("Profile not found");

    // Determine assigned level based on quiz score or self-assessment
    let assignedLevel: "beginner" | "intermediate" | "advanced" =
      args.selfAssessedLevel;
    if (args.placementQuizScore !== undefined) {
      if (args.placementQuizScore >= 70) assignedLevel = "advanced";
      else if (args.placementQuizScore >= 40) assignedLevel = "intermediate";
      else assignedLevel = "beginner";
    }

    await ctx.db.patch(profile._id, {
      onboardingCompleted: true,
      targetCompanyType: args.targetCompanyType,
      selfAssessedLevel: args.selfAssessedLevel,
      placementQuizScore: args.placementQuizScore,
      assignedLevel,
    });
  },
});
