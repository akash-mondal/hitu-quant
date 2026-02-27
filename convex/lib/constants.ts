// ===== XP Rules =====
export const XP_RULES = {
  // Per-resource XP is defined on each resource record (5-15 XP)
  // These are the BONUS rewards:
  subtopicComplete: 30,
  topicComplete: 100,
  streakDay3: 10,
  streakDay7: 25,
  streakDay14: 50,
  streakDay30: 100,
  streakDay100: 500,
  allQuestsComplete: 30,
} as const;

// ===== Level Thresholds =====
// Formula: threshold(n) = Math.floor(50 * n * (n + 1) / 2)
export function getLevelThreshold(level: number): number {
  return Math.floor((50 * level * (level + 1)) / 2);
}

export function getLevelFromXP(totalXP: number): number {
  let level = 1;
  while (getLevelThreshold(level + 1) <= totalXP) {
    level++;
  }
  return level;
}

export function getXPProgress(totalXP: number) {
  const currentLevel = getLevelFromXP(totalXP);
  const currentThreshold = getLevelThreshold(currentLevel);
  const nextThreshold = getLevelThreshold(currentLevel + 1);
  const xpInLevel = totalXP - currentThreshold;
  const xpRange = nextThreshold - currentThreshold;
  return {
    currentLevel,
    xpInLevel,
    xpNeeded: xpRange,
    progressPercent: Math.min(100, (xpInLevel / xpRange) * 100),
  };
}

// ===== League Tiers =====
export const LEAGUE_TIERS = [
  "bronze",
  "silver",
  "gold",
  "sapphire",
  "ruby",
  "emerald",
  "amethyst",
  "pearl",
  "obsidian",
  "diamond",
] as const;

export type LeagueTier = (typeof LEAGUE_TIERS)[number];

export function getNextTier(tier: LeagueTier): LeagueTier | null {
  const idx = LEAGUE_TIERS.indexOf(tier);
  return idx < LEAGUE_TIERS.length - 1 ? LEAGUE_TIERS[idx + 1] : null;
}

export function getPreviousTier(tier: LeagueTier): LeagueTier | null {
  const idx = LEAGUE_TIERS.indexOf(tier);
  return idx > 0 ? LEAGUE_TIERS[idx - 1] : null;
}

// ===== Gem Costs =====
export const GEM_COSTS = {
  streakFreeze: 200,
} as const;

// ===== Badge Definitions =====
export const BADGE_DEFINITIONS = [
  // Streak
  {
    slug: "streak-3",
    name: "Getting Started",
    description: "Maintain a 3-day streak",
    iconEmoji: "🔥",
    category: "streak" as const,
    rarity: "common" as const,
    triggerType: "streak_count",
    triggerValue: 3,
    xpReward: 10,
    gemReward: 5,
  },
  {
    slug: "streak-7",
    name: "Week Warrior",
    description: "Maintain a 7-day streak",
    iconEmoji: "🔥",
    category: "streak" as const,
    rarity: "common" as const,
    triggerType: "streak_count",
    triggerValue: 7,
    xpReward: 25,
    gemReward: 15,
  },
  {
    slug: "streak-30",
    name: "Monthly Master",
    description: "Maintain a 30-day streak",
    iconEmoji: "🔥",
    category: "streak" as const,
    rarity: "rare" as const,
    triggerType: "streak_count",
    triggerValue: 30,
    xpReward: 100,
    gemReward: 50,
  },
  {
    slug: "streak-100",
    name: "Streak Legend",
    description: "Maintain a 100-day streak",
    iconEmoji: "💎",
    category: "streak" as const,
    rarity: "legendary" as const,
    triggerType: "streak_count",
    triggerValue: 100,
    xpReward: 500,
    gemReward: 200,
  },
  // Milestones (resources completed)
  {
    slug: "completed-10",
    name: "First Steps",
    description: "Complete 10 resources",
    iconEmoji: "📚",
    category: "milestone" as const,
    rarity: "common" as const,
    triggerType: "resources_completed",
    triggerValue: 10,
    xpReward: 10,
    gemReward: 5,
  },
  {
    slug: "completed-50",
    name: "Bookworm",
    description: "Complete 50 resources",
    iconEmoji: "📖",
    category: "milestone" as const,
    rarity: "rare" as const,
    triggerType: "resources_completed",
    triggerValue: 50,
    xpReward: 50,
    gemReward: 25,
  },
  {
    slug: "completed-200",
    name: "Knowledge Seeker",
    description: "Complete 200 resources",
    iconEmoji: "🏆",
    category: "milestone" as const,
    rarity: "epic" as const,
    triggerType: "resources_completed",
    triggerValue: 200,
    xpReward: 200,
    gemReward: 100,
  },
  {
    slug: "completed-500",
    name: "Grand Scholar",
    description: "Complete 500 resources",
    iconEmoji: "👑",
    category: "milestone" as const,
    rarity: "legendary" as const,
    triggerType: "resources_completed",
    triggerValue: 500,
    xpReward: 500,
    gemReward: 250,
  },
  // Mastery (topics completed)
  {
    slug: "topic-first",
    name: "Topic Tamer",
    description: "Complete your first topic",
    iconEmoji: "⭐",
    category: "mastery" as const,
    rarity: "common" as const,
    triggerType: "topics_completed",
    triggerValue: 1,
    xpReward: 50,
    gemReward: 20,
  },
  {
    slug: "topic-10",
    name: "Multi-Master",
    description: "Complete 10 topics",
    iconEmoji: "🌟",
    category: "mastery" as const,
    rarity: "epic" as const,
    triggerType: "topics_completed",
    triggerValue: 10,
    xpReward: 300,
    gemReward: 150,
  },
  {
    slug: "topic-all",
    name: "Placement Ready",
    description: "Complete all 33 topics",
    iconEmoji: "🎓",
    category: "mastery" as const,
    rarity: "legendary" as const,
    triggerType: "topics_completed",
    triggerValue: 33,
    xpReward: 1000,
    gemReward: 500,
  },
  // Consistency
  {
    slug: "early-bird",
    name: "Early Bird",
    description: "Study before 8 AM IST",
    iconEmoji: "🌅",
    category: "consistency" as const,
    rarity: "common" as const,
    triggerType: "early_practice",
    triggerValue: 1,
    xpReward: 10,
    gemReward: 5,
  },
  {
    slug: "night-owl",
    name: "Night Owl",
    description: "Study after 11 PM IST",
    iconEmoji: "🦉",
    category: "consistency" as const,
    rarity: "common" as const,
    triggerType: "late_practice",
    triggerValue: 1,
    xpReward: 10,
    gemReward: 5,
  },
  // League
  {
    slug: "league-gold",
    name: "Gold League",
    description: "Reach Gold League",
    iconEmoji: "🥇",
    category: "social" as const,
    rarity: "rare" as const,
    triggerType: "league_tier",
    triggerValue: 3,
    xpReward: 50,
    gemReward: 25,
  },
  {
    slug: "league-diamond",
    name: "Diamond League",
    description: "Reach Diamond League",
    iconEmoji: "💎",
    category: "social" as const,
    rarity: "legendary" as const,
    triggerType: "league_tier",
    triggerValue: 10,
    xpReward: 500,
    gemReward: 250,
  },
];
