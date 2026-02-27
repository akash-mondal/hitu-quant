import { mutation, query } from "./_generated/server";
import { getClerkUserId } from "./lib/helpers";
import { GEM_COSTS } from "./lib/constants";

// ===== Purchase a streak freeze with gems =====
export const purchaseStreakFreeze = mutation({
  handler: async (ctx) => {
    const clerkUserId = await getClerkUserId(ctx);

    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_clerkUserId", (q) => q.eq("clerkUserId", clerkUserId))
      .unique();
    if (!profile) throw new Error("Profile not found");

    if (profile.gems < GEM_COSTS.streakFreeze) {
      throw new Error(
        `Not enough gems. Need ${GEM_COSTS.streakFreeze}, have ${profile.gems}.`
      );
    }

    await ctx.db.patch(profile._id, {
      gems: profile.gems - GEM_COSTS.streakFreeze,
    });

    const freezeRecord = await ctx.db
      .query("streakFreezes")
      .withIndex("by_clerkUserId", (q) => q.eq("clerkUserId", clerkUserId))
      .unique();

    if (freezeRecord) {
      await ctx.db.patch(freezeRecord._id, {
        quantity: freezeRecord.quantity + 1,
      });
    } else {
      await ctx.db.insert("streakFreezes", {
        clerkUserId,
        quantity: 1,
      });
    }

    await ctx.db.insert("gemTransactions", {
      clerkUserId,
      amount: -GEM_COSTS.streakFreeze,
      source: "purchase_streakFreeze",
      description: "Purchased a streak freeze",
      timestamp: Date.now(),
    });

    return true;
  },
});

// ===== Get current gem balance =====
export const getGemBalance = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const clerkUserId = identity.subject;

    const profile = await ctx.db
      .query("userProfiles")
      .withIndex("by_clerkUserId", (q) => q.eq("clerkUserId", clerkUserId))
      .unique();

    return profile?.gems ?? 0;
  },
});

// ===== Get gem transaction history (last 50) =====
export const getGemHistory = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return [];

    const clerkUserId = identity.subject;

    const transactions = await ctx.db
      .query("gemTransactions")
      .withIndex("by_clerkUserId_timestamp", (q) =>
        q.eq("clerkUserId", clerkUserId)
      )
      .order("desc")
      .take(50);

    return transactions;
  },
});
