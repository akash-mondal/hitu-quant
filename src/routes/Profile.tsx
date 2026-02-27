import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from "framer-motion";
import { getXPProgress } from "../../convex/lib/constants";

const tierColors: Record<string, string> = {
  bronze: "#CD7F32",
  silver: "#C0C0C0",
  gold: "#FFD700",
  sapphire: "#0F52BA",
  ruby: "#E0115F",
  emerald: "#50C878",
  amethyst: "#9966CC",
  pearl: "#F0EAD6",
  obsidian: "#3D3635",
  diamond: "#B9F2FF",
};

const tierEmoji: Record<string, string> = {
  bronze: "🥉",
  silver: "🥈",
  gold: "🥇",
  sapphire: "💠",
  ruby: "♦️",
  emerald: "🟢",
  amethyst: "🔮",
  pearl: "🤍",
  obsidian: "🖤",
  diamond: "💎",
};

export default function Profile() {
  const profile = useQuery(api.users.getCurrentProfile);

  if (!profile) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 rounded-full border-[3px] border-cream-200" />
          <div className="absolute inset-0 rounded-full border-[3px] border-gold-500 border-t-transparent animate-spin" />
        </div>
      </div>
    );
  }

  const xp = getXPProgress(profile.totalXP);
  const tierColor = tierColors[profile.currentLeagueTier] || tierColors.bronze;

  const stats = [
    { icon: "⚡", value: profile.totalXP.toLocaleString(), label: "Total XP" },
    { icon: "🔥", value: `${profile.currentStreak}`, label: "Streak" },
    { icon: "🏆", value: `${profile.longestStreak}`, label: "Best Streak" },
    { icon: "📚", value: `${profile.totalResourcesCompleted}`, label: "Resources" },
    { icon: "⭐", value: `${profile.totalTopicsCompleted}`, label: "Topics" },
    { icon: "💎", value: `${profile.gems}`, label: "Gems" },
  ];

  const badges = [
    { emoji: "🔥", name: "Streak 3" },
    { emoji: "💯", name: "Century" },
    { emoji: "⭐", name: "Topic Tamer" },
    { emoji: "⚡", name: "Power" },
    { emoji: "🏆", name: "Trophy" },
    { emoji: "👑", name: "Crown" },
  ];

  return (
    <motion.div
      className="max-w-lg mx-auto pb-24 lg:pb-4"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Main Profile Card ── */}
      <div className="rounded-2xl overflow-hidden shadow-lg shadow-charcoal-900/10">
        {/* ▬ Dark Header ▬ */}
        <div className="relative bg-charcoal-900 pt-6 pb-16">
          {/* Gold accent bar at very top */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${tierColor}, var(--color-gold-500), ${tierColor}, transparent)`,
            }}
          />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />
          {/* Subtle glow behind avatar area */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-20 rounded-full blur-3xl opacity-20"
            style={{ background: tierColor }}
          />
        </div>

        {/* ▬ White Body ▬ */}
        <div className="relative bg-white px-6 pt-16 pb-6">
          {/* ── Avatar — bridging dark/white ── */}
          <motion.div
            className="absolute -top-14 left-1/2 -translate-x-1/2"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 18 }}
          >
            <div
              className="w-[108px] h-[108px] rounded-full p-[4px]"
              style={{
                background: `linear-gradient(135deg, var(--color-gold-400), ${tierColor})`,
                boxShadow: `0 0 0 4px var(--color-charcoal-900), 0 8px 24px rgba(0,0,0,0.25)`,
              }}
            >
              <div className="w-full h-full rounded-full bg-charcoal-800 flex items-center justify-center overflow-hidden">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.displayName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-mono font-bold text-[1.1rem] text-gold-400 tracking-widest uppercase">
                    {profile.displayName.slice(0, 5)}
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Name & Tier ── */}
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-display text-[1.6rem] text-charcoal-900 leading-tight">
              {profile.displayName}
            </h1>
            <p className="font-body text-[0.78rem] text-charcoal-600/50 mt-0.5">
              {profile.email}
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-[0.72rem] font-mono font-bold"
                style={{
                  background: `var(--color-gold-500)`,
                  color: "var(--color-charcoal-900)",
                }}
              >
                Lv. {xp.currentLevel}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[0.72rem] font-mono font-semibold capitalize"
                style={{
                  background: `${tierColor}12`,
                  color: tierColor,
                  border: `1.5px solid ${tierColor}25`,
                }}
              >
                {tierEmoji[profile.currentLeagueTier] || "🥉"}{" "}
                {profile.currentLeagueTier} League
              </span>
            </div>
          </motion.div>

          {/* ── XP Progress Bar ── */}
          <motion.div
            className="border-t border-cream-200/80 pt-4 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-body font-semibold text-[0.78rem] text-charcoal-800">
                Level {xp.currentLevel} → {xp.currentLevel + 1}
              </span>
              <span className="font-mono text-[0.72rem] text-charcoal-600/50">
                {xp.xpInLevel}/{xp.xpNeeded} XP
              </span>
            </div>
            <div className="w-full h-2.5 bg-cream-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-gold-600), var(--color-gold-400))",
                }}
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.max(xp.progressPercent, xp.progressPercent > 0 ? 3 : 0)}%`,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </motion.div>

          {/* ── Stats Grid ── */}
          <div className="grid grid-cols-3 border border-cream-200 rounded-xl overflow-hidden">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className={`flex flex-col items-center py-3.5 px-2 ${
                  idx < 3 ? "border-b border-cream-200" : ""
                } ${
                  idx % 3 !== 2 ? "border-r border-cream-200" : ""
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.06 }}
              >
                <span className="text-base leading-none">{stat.icon}</span>
                <span className="font-mono font-bold text-[1rem] text-charcoal-900 mt-1.5 leading-tight">
                  {stat.value}
                </span>
                <span className="font-body text-[0.6rem] text-charcoal-600/45 mt-0.5 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Badges Section ── */}
      <motion.div
        className="mt-4 rounded-2xl bg-white border border-cream-200 p-5 shadow-sm"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-[1.05rem] text-charcoal-900">
            Badges
          </h2>
          <span className="font-mono text-[0.65rem] text-charcoal-600/35">
            0 / {badges.length}
          </span>
        </div>
        <p className="font-body text-[0.72rem] text-charcoal-600/45 mb-4">
          Complete resources to unlock badges and earn bonus XP
        </p>
        <div className="grid grid-cols-6 gap-2">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              className="aspect-square rounded-xl bg-cream-100 border border-cream-200/60 flex flex-col items-center justify-center opacity-30"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.04 }}
            >
              <span className="text-lg">{badge.emoji}</span>
              <span className="font-body text-[0.45rem] text-charcoal-600/50 mt-0.5 truncate max-w-full px-1">
                {badge.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
