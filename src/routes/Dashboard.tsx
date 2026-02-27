import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getXPProgress } from "../../convex/lib/constants";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
};

const CATEGORY_META: Record<
  string,
  { label: string; color: string; emoji: string; bg: string }
> = {
  quantitative: {
    label: "Quantitative Aptitude",
    color: "#FFB020",
    emoji: "🧮",
    bg: "linear-gradient(135deg, #FFF8F0, #FFF0DC)",
  },
  logical: {
    label: "Logical Reasoning",
    color: "#0F52BA",
    emoji: "🧠",
    bg: "linear-gradient(135deg, #EEF2FF, #DBEAFE)",
  },
  puzzles: {
    label: "Puzzles & Brain Teasers",
    color: "#E0115F",
    emoji: "🧩",
    bg: "linear-gradient(135deg, #FFF1F2, #FFE4E6)",
  },
};

export default function Dashboard() {
  const profile = useQuery(api.users.getCurrentProfile);
  const topics = useQuery(api.topics.listTopics);

  if (!profile || topics === undefined) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-[3px] border-cream-200" />
          <div className="absolute inset-0 rounded-full border-[3px] border-gold-500 border-t-transparent animate-spin" />
        </div>
      </div>
    );
  }

  const xp = getXPProgress(profile.totalXP);

  const inProgressTopic = topics.find(
    (t) =>
      t.progress &&
      !t.progress.isCompleted &&
      t.progress.resourcesCompleted > 0
  );
  const nextUnlockedTopic = topics.find(
    (t) => !t.isLocked && (!t.progress || !t.progress.isCompleted)
  );
  const continueTopic = inProgressTopic || nextUnlockedTopic;

  const categories = (["quantitative", "logical", "puzzles"] as const).map(
    (cat) => {
      const catTopics = topics.filter((t) => t.category === cat);
      const completed = catTopics.filter(
        (t) => t.progress?.isCompleted
      ).length;
      const total = catTopics.length;
      const meta = CATEGORY_META[cat];
      return { ...meta, completed, total, key: cat };
    }
  );

  const totalResourcesInSystem = topics.reduce(
    (sum, t) => sum + t.totalResources,
    0
  );

  return (
    <motion.div
      className="max-w-5xl mx-auto pb-24 lg:pb-4"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {/* ═══ Hero: Greeting + Streak ═══ */}
      <motion.div variants={fadeUp} className="mb-10 lg:mb-12">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-display text-[2.6rem] lg:text-[3.4rem] text-charcoal-900 leading-[1.05] tracking-tight">
              Hey, {profile.displayName.split(" ")[0]}!
            </h1>
            <p className="font-body text-[1.05rem] lg:text-[1.15rem] text-charcoal-600 mt-3 max-w-md">
              {profile.currentStreak > 0
                ? "Your streak is alive. Let's keep the momentum."
                : "Start studying today to build your streak."}
            </p>
          </div>

          {/* Streak badge */}
          {profile.currentStreak > 0 && (
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-charcoal-900 shrink-0">
              <span className="text-2xl">🔥</span>
              <div>
                <div className="font-mono font-bold text-[1.6rem] text-cream-50 leading-none tabular-nums">
                  {profile.currentStreak}
                </div>
                <div className="font-body text-[0.7rem] text-cream-200/50 mt-0.5">
                  day streak
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* ═══ Continue Learning — the hero CTA ═══ */}
      {continueTopic && (
        <motion.div variants={fadeUp} className="mb-10">
          <Link
            to={`/learn/${continueTopic.slug}`}
            className="group block relative overflow-hidden rounded-[20px] p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-400/15 hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${continueTopic.color}08, ${continueTopic.color}18)`,
              border: `2px solid ${continueTopic.color}30`,
            }}
          >
            {/* Decorative corner glow */}
            <div
              className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 blur-3xl pointer-events-none"
              style={{ background: continueTopic.color }}
            />

            <div className="relative flex items-center gap-6 lg:gap-8">
              <div
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-[18px] flex items-center justify-center text-[2.5rem] lg:text-[3rem] shrink-0 shadow-sm"
                style={{
                  background: `linear-gradient(145deg, white, ${continueTopic.color}10)`,
                  border: `1px solid ${continueTopic.color}20`,
                }}
              >
                {continueTopic.iconEmoji}
              </div>

              <div className="flex-1 min-w-0">
                <div
                  className="font-body text-[0.75rem] lg:text-[0.8rem] font-bold uppercase tracking-[0.15em] mb-2"
                  style={{ color: continueTopic.color }}
                >
                  {inProgressTopic ? "Continue where you left off" : "Up next"}
                </div>
                <h2 className="font-display text-[1.6rem] lg:text-[2rem] text-charcoal-900 leading-tight">
                  {continueTopic.name}
                </h2>
                {continueTopic.progress &&
                continueTopic.progress.resourcesCompleted > 0 ? (
                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex-1 h-3 bg-white/60 rounded-full overflow-hidden max-w-[300px] backdrop-blur-sm">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: continueTopic.color }}
                        initial={{ width: 0 }}
                        animate={{
                          width: `${Math.max(continueTopic.progress.progressPercent, 4)}%`,
                        }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      />
                    </div>
                    <span className="font-mono font-bold text-[0.9rem] text-charcoal-700">
                      {continueTopic.progress.progressPercent}%
                    </span>
                  </div>
                ) : (
                  <p className="font-body text-[0.9rem] text-charcoal-600/60 mt-2">
                    {continueTopic.totalResources} resources to explore
                  </p>
                )}
              </div>

              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg"
                style={{
                  background: continueTopic.color,
                  boxShadow: `0 4px 20px ${continueTopic.color}40`,
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M5.25 3.5L9.75 7L5.25 10.5"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* ═══ Bento Stats Grid ═══ */}
      <motion.div
        variants={fadeUp}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
      >
        {/* Resources */}
        <div className="card p-6 lg:p-7">
          <div className="text-2xl mb-3">📚</div>
          <div className="font-mono font-bold text-[2.2rem] text-charcoal-900 tabular-nums leading-none">
            {profile.totalResourcesCompleted}
            {totalResourcesInSystem > 0 && (
              <span className="text-[1rem] text-charcoal-600/25 font-normal">
                /{totalResourcesInSystem}
              </span>
            )}
          </div>
          <div className="font-body text-[0.82rem] text-charcoal-600/50 mt-2">
            Resources completed
          </div>
        </div>

        {/* Topics */}
        <div className="card p-6 lg:p-7">
          <div className="text-2xl mb-3">⭐</div>
          <div className="font-mono font-bold text-[2.2rem] text-charcoal-900 tabular-nums leading-none">
            {profile.totalTopicsCompleted}
            <span className="text-[1rem] text-charcoal-600/25 font-normal">
              /33
            </span>
          </div>
          <div className="font-body text-[0.82rem] text-charcoal-600/50 mt-2">
            Topics mastered
          </div>
        </div>

        {/* XP */}
        <div className="card p-6 lg:p-7 relative overflow-hidden">
          <div
            className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-15 pointer-events-none"
            style={{ background: "#FFB020" }}
          />
          <div className="text-2xl mb-3">⚡</div>
          <div className="font-mono font-bold text-[2.2rem] text-gold-600 tabular-nums leading-none relative">
            {profile.totalXP.toLocaleString()}
          </div>
          <div className="font-body text-[0.82rem] text-charcoal-600/50 mt-2">
            Total XP earned
          </div>
        </div>

        {/* Level */}
        <div className="card p-6 lg:p-7">
          <div className="text-2xl mb-3">🏅</div>
          <div className="font-mono font-bold text-[2.2rem] text-charcoal-900 tabular-nums leading-none">
            Lv {xp.currentLevel}
          </div>
          <div className="font-body text-[0.82rem] text-charcoal-600/50 mt-2">
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-2 bg-cream-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${xp.progressPercent}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <span className="font-mono text-[0.7rem] text-charcoal-600/40 tabular-nums">
                {xp.xpInLevel}/{xp.xpNeeded}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ Category Progress ═══ */}
      <motion.div variants={fadeUp}>
        <h2 className="font-display text-[1.5rem] lg:text-[1.7rem] text-charcoal-900 mb-6">
          Your Progress
        </h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {categories.map((cat) => {
            const pct =
              cat.total > 0
                ? Math.round((cat.completed / cat.total) * 100)
                : 0;
            return (
              <Link
                key={cat.key}
                to="/learn"
                className="group block rounded-[18px] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  background: cat.bg,
                  border: `1.5px solid ${cat.color}20`,
                }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl">{cat.emoji}</span>
                  <span
                    className="font-mono font-bold text-[0.82rem] px-2.5 py-1 rounded-lg"
                    style={{
                      color: cat.color,
                      background: `${cat.color}12`,
                    }}
                  >
                    {cat.completed}/{cat.total}
                  </span>
                </div>

                <h3
                  className="font-body font-bold text-[1.05rem] mb-3"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </h3>

                <div className="w-full h-2.5 bg-white/60 rounded-full overflow-hidden backdrop-blur-sm">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${Math.max(pct, pct > 0 ? 3 : 0)}%`,
                      background: cat.color,
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
