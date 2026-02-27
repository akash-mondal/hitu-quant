import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ========== USER PROFILE (linked to Clerk identity) ==========
  userProfiles: defineTable({
    clerkUserId: v.string(),
    displayName: v.string(),
    avatarUrl: v.optional(v.string()),
    email: v.string(),

    // Onboarding
    onboardingCompleted: v.boolean(),
    targetCompanyType: v.optional(
      v.union(
        v.literal("product"),
        v.literal("service"),
        v.literal("startup"),
        v.literal("any")
      )
    ),
    selfAssessedLevel: v.optional(
      v.union(
        v.literal("beginner"),
        v.literal("intermediate"),
        v.literal("advanced")
      )
    ),
    placementQuizScore: v.optional(v.number()),
    assignedLevel: v.optional(
      v.union(
        v.literal("beginner"),
        v.literal("intermediate"),
        v.literal("advanced")
      )
    ),

    // Gamification aggregates
    totalXP: v.number(),
    currentLevel: v.number(),
    currentStreak: v.number(),
    longestStreak: v.number(),
    lastPracticeDate: v.optional(v.string()), // "YYYY-MM-DD" in IST
    gems: v.number(),

    // League
    currentLeagueTier: v.union(
      v.literal("bronze"),
      v.literal("silver"),
      v.literal("gold"),
      v.literal("sapphire"),
      v.literal("ruby"),
      v.literal("emerald"),
      v.literal("amethyst"),
      v.literal("pearl"),
      v.literal("obsidian"),
      v.literal("diamond")
    ),
    currentLeagueId: v.optional(v.id("leagueInstances")),

    // Stats
    totalResourcesCompleted: v.number(),
    totalTopicsCompleted: v.number(),
    totalSubtopicsCompleted: v.number(),

    createdAt: v.number(),
  })
    .index("by_clerkUserId", ["clerkUserId"])
    .index("by_totalXP", ["totalXP"])
    .index("by_currentLevel", ["currentLevel"])
    .index("by_currentStreak", ["currentStreak"]),

  // ========== TOPICS ==========
  topics: defineTable({
    name: v.string(),
    slug: v.string(),
    category: v.union(
      v.literal("quantitative"),
      v.literal("logical"),
      v.literal("puzzles")
    ),
    description: v.string(),
    iconEmoji: v.string(),
    order: v.number(),
    color: v.string(),
    totalResources: v.number(),
    estimatedMinutes: v.number(),
    prerequisiteTopicIds: v.array(v.id("topics")),
    isLocked: v.boolean(),
  })
    .index("by_category", ["category"])
    .index("by_order", ["order"])
    .index("by_slug", ["slug"]),

  // ========== SUBTOPICS ==========
  subtopics: defineTable({
    topicId: v.id("topics"),
    name: v.string(),
    slug: v.string(),
    order: v.number(),
    description: v.string(),
    resourceCount: v.number(),
    xpReward: v.number(),
  })
    .index("by_topicId", ["topicId"])
    .index("by_topicId_order", ["topicId", "order"]),

  // ========== RESOURCES (external links) ==========
  resources: defineTable({
    topicId: v.id("topics"),
    subtopicId: v.id("subtopics"),
    title: v.string(),
    url: v.string(),
    type: v.union(
      v.literal("video"),
      v.literal("article"),
      v.literal("practice"),
      v.literal("book"),
      v.literal("website")
    ),
    source: v.string(),
    description: v.optional(v.string()),
    estimatedMinutes: v.number(),
    difficulty: v.optional(
      v.union(
        v.literal("beginner"),
        v.literal("intermediate"),
        v.literal("advanced")
      )
    ),
    xpReward: v.number(),
    order: v.number(),
    tags: v.optional(v.array(v.string())),
  })
    .index("by_topicId", ["topicId"])
    .index("by_subtopicId", ["subtopicId"])
    .index("by_subtopicId_order", ["subtopicId", "order"]),

  // ========== USER RESOURCE PROGRESS (per-resource completion) ==========
  userResourceProgress: defineTable({
    clerkUserId: v.string(),
    resourceId: v.id("resources"),
    subtopicId: v.id("subtopics"),
    topicId: v.id("topics"),
    isCompleted: v.boolean(),
    completedAt: v.optional(v.number()),
    xpEarned: v.number(),
  })
    .index("by_clerkUserId_resourceId", ["clerkUserId", "resourceId"])
    .index("by_clerkUserId_subtopicId", ["clerkUserId", "subtopicId"])
    .index("by_clerkUserId_topicId", ["clerkUserId", "topicId"])
    .index("by_clerkUserId", ["clerkUserId"]),

  // ========== USER TOPIC PROGRESS ==========
  userTopicProgress: defineTable({
    clerkUserId: v.string(),
    topicId: v.id("topics"),
    resourcesCompleted: v.number(),
    totalResources: v.number(),
    progressPercent: v.number(),
    isCompleted: v.boolean(),
    completedAt: v.optional(v.number()),
    xpEarned: v.number(),
  })
    .index("by_clerkUserId", ["clerkUserId"])
    .index("by_clerkUserId_topicId", ["clerkUserId", "topicId"]),

  // ========== USER SUBTOPIC PROGRESS ==========
  userSubtopicProgress: defineTable({
    clerkUserId: v.string(),
    subtopicId: v.id("subtopics"),
    topicId: v.id("topics"),
    resourcesCompleted: v.number(),
    totalResources: v.number(),
    progressPercent: v.number(),
    isCompleted: v.boolean(),
    completedAt: v.optional(v.number()),
  })
    .index("by_clerkUserId_subtopicId", ["clerkUserId", "subtopicId"])
    .index("by_clerkUserId_topicId", ["clerkUserId", "topicId"]),

  // ========== XP TRANSACTIONS ==========
  xpTransactions: defineTable({
    clerkUserId: v.string(),
    amount: v.number(),
    source: v.union(
      v.literal("resourceComplete"),
      v.literal("subtopicComplete"),
      v.literal("topicComplete"),
      v.literal("dailyQuestComplete"),
      v.literal("streakBonus"),
      v.literal("badgeReward")
    ),
    referenceId: v.optional(v.string()),
    description: v.string(),
    timestamp: v.number(),
  })
    .index("by_clerkUserId", ["clerkUserId"])
    .index("by_clerkUserId_timestamp", ["clerkUserId", "timestamp"]),

  // ========== STREAKS ==========
  streakHistory: defineTable({
    clerkUserId: v.string(),
    date: v.string(), // "YYYY-MM-DD" in IST
    resourcesCompleted: v.number(),
    xpEarned: v.number(),
    streakMaintained: v.boolean(),
    freezeUsed: v.boolean(),
  })
    .index("by_clerkUserId_date", ["clerkUserId", "date"])
    .index("by_clerkUserId", ["clerkUserId"]),

  streakFreezes: defineTable({
    clerkUserId: v.string(),
    quantity: v.number(),
  }).index("by_clerkUserId", ["clerkUserId"]),

  // ========== DAILY QUESTS ==========
  dailyQuests: defineTable({
    clerkUserId: v.string(),
    date: v.string(),
    quests: v.array(
      v.object({
        id: v.string(),
        type: v.union(
          v.literal("completeN"),
          v.literal("completeTopic"),
          v.literal("completeSubtopic"),
          v.literal("completeVideo"),
          v.literal("completeArticle")
        ),
        description: v.string(),
        target: v.number(),
        current: v.number(),
        isCompleted: v.boolean(),
        xpReward: v.number(),
        gemReward: v.number(),
        topicId: v.optional(v.id("topics")),
      })
    ),
    allCompleted: v.boolean(),
    bonusXP: v.number(),
  })
    .index("by_clerkUserId_date", ["clerkUserId", "date"])
    .index("by_clerkUserId", ["clerkUserId"]),

  // ========== BADGES ==========
  badges: defineTable({
    slug: v.string(),
    name: v.string(),
    description: v.string(),
    iconEmoji: v.string(),
    category: v.union(
      v.literal("streak"),
      v.literal("mastery"),
      v.literal("consistency"),
      v.literal("social"),
      v.literal("milestone")
    ),
    rarity: v.union(
      v.literal("common"),
      v.literal("rare"),
      v.literal("epic"),
      v.literal("legendary")
    ),
    triggerType: v.string(),
    triggerValue: v.number(),
    xpReward: v.number(),
    gemReward: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"]),

  userBadges: defineTable({
    clerkUserId: v.string(),
    badgeId: v.id("badges"),
    earnedAt: v.number(),
    seen: v.boolean(),
  })
    .index("by_clerkUserId", ["clerkUserId"])
    .index("by_clerkUserId_badgeId", ["clerkUserId", "badgeId"]),

  // ========== GEM TRANSACTIONS ==========
  gemTransactions: defineTable({
    clerkUserId: v.string(),
    amount: v.number(),
    source: v.union(
      v.literal("dailyQuest"),
      v.literal("badge"),
      v.literal("purchase_streakFreeze"),
      v.literal("dailyBonus")
    ),
    description: v.string(),
    timestamp: v.number(),
  })
    .index("by_clerkUserId", ["clerkUserId"])
    .index("by_clerkUserId_timestamp", ["clerkUserId", "timestamp"]),

  // ========== LEAGUES ==========
  leagueInstances: defineTable({
    tier: v.union(
      v.literal("bronze"),
      v.literal("silver"),
      v.literal("gold"),
      v.literal("sapphire"),
      v.literal("ruby"),
      v.literal("emerald"),
      v.literal("amethyst"),
      v.literal("pearl"),
      v.literal("obsidian"),
      v.literal("diamond")
    ),
    weekStartDate: v.string(),
    weekEndDate: v.string(),
    memberUserIds: v.array(v.string()),
    isFinalized: v.boolean(),
  })
    .index("by_tier_weekStart", ["tier", "weekStartDate"])
    .index("by_weekStartDate", ["weekStartDate"]),

  leagueScores: defineTable({
    leagueInstanceId: v.id("leagueInstances"),
    clerkUserId: v.string(),
    weeklyXP: v.number(),
    rank: v.optional(v.number()),
    promoted: v.optional(v.boolean()),
    demoted: v.optional(v.boolean()),
    stayed: v.optional(v.boolean()),
  })
    .index("by_leagueInstanceId", ["leagueInstanceId"])
    .index("by_leagueInstanceId_weeklyXP", [
      "leagueInstanceId",
      "weeklyXP",
    ])
    .index("by_clerkUserId", ["clerkUserId"]),

  // ========== NOTIFICATIONS ==========
  notifications: defineTable({
    clerkUserId: v.string(),
    type: v.union(
      v.literal("badgeEarned"),
      v.literal("streakReminder"),
      v.literal("leagueResult"),
      v.literal("levelUp"),
      v.literal("questComplete"),
      v.literal("streakAtRisk"),
      v.literal("subtopicComplete"),
      v.literal("topicComplete")
    ),
    title: v.string(),
    message: v.string(),
    data: v.optional(v.string()),
    read: v.boolean(),
    createdAt: v.number(),
  })
    .index("by_clerkUserId", ["clerkUserId"])
    .index("by_clerkUserId_read", ["clerkUserId", "read"]),
});
