import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CATEGORY_META: Record<
  string,
  { label: string; color: string; emoji: string; gradient: string }
> = {
  quantitative: {
    label: "Quantitative Aptitude",
    color: "#FFB020",
    emoji: "🧮",
    gradient: "linear-gradient(135deg, #FFB020, #E69A00)",
  },
  logical: {
    label: "Logical Reasoning",
    color: "#0F52BA",
    emoji: "🧠",
    gradient: "linear-gradient(135deg, #3B82F6, #0F52BA)",
  },
  puzzles: {
    label: "Puzzles & Brain Teasers",
    color: "#E0115F",
    emoji: "🧩",
    gradient: "linear-gradient(135deg, #F43F5E, #E0115F)",
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.04 } },
};

export default function LearningPath() {
  const topicsWithProgress = useQuery(api.topics.listTopics);

  if (topicsWithProgress === undefined) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-[3px] border-cream-200" />
          <div className="absolute inset-0 rounded-full border-[3px] border-gold-500 border-t-transparent animate-spin" />
        </div>
      </div>
    );
  }

  const categories = (["quantitative", "logical", "puzzles"] as const).map(
    (cat) => ({
      key: cat,
      ...CATEGORY_META[cat],
      topics: topicsWithProgress.filter((t) => t.category === cat),
    })
  );

  // Overall stats
  const totalCompleted = topicsWithProgress.filter(
    (t) => t.progress?.isCompleted
  ).length;

  return (
    <motion.div
      className="max-w-5xl mx-auto pb-24 lg:pb-4"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="mb-10">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="font-display text-[2.2rem] lg:text-[2.8rem] text-charcoal-900 leading-tight tracking-tight">
              Learning Path
            </h1>
            <p className="font-body text-[1rem] text-charcoal-600 mt-2">
              {totalCompleted} of 33 topics completed
            </p>
          </div>
          {/* Overall progress pill */}
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-cream-200 shrink-0">
            <div className="w-28 h-2.5 bg-cream-200 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-700"
                style={{
                  width: `${Math.max(Math.round((totalCompleted / 33) * 100), totalCompleted > 0 ? 3 : 0)}%`,
                }}
              />
            </div>
            <span className="font-mono font-bold text-[0.85rem] text-charcoal-800 tabular-nums">
              {Math.round((totalCompleted / 33) * 100)}%
            </span>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      {categories.map((category, catIdx) => {
        const catCompleted = category.topics.filter(
          (t) => t.progress?.isCompleted
        ).length;

        return (
          <motion.div
            key={category.key}
            variants={fadeUp}
            transition={{ delay: catIdx * 0.08 }}
            className="mb-12"
          >
            {/* Category header */}
            <div className="flex items-center gap-4 mb-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-sm"
                style={{ background: category.gradient }}
              >
                <span className="drop-shadow-sm">
                  {category.emoji}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="font-display text-[1.25rem] lg:text-[1.4rem] text-charcoal-900">
                  {category.label}
                </h2>
              </div>
              <span
                className="font-mono font-bold text-[0.82rem] px-3 py-1.5 rounded-xl"
                style={{
                  color: category.color,
                  background: `${category.color}10`,
                }}
              >
                {catCompleted}/{category.topics.length}
              </span>
            </div>

            {/* Topic grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {category.topics.map((topic) => {
                const isCompleted = topic.progress?.isCompleted === true;
                const isUnlocked = !topic.isLocked || isCompleted;
                const progress = topic.progress?.progressPercent ?? 0;
                const hasProgress =
                  topic.progress && topic.progress.resourcesCompleted > 0;

                if (!isUnlocked) {
                  return (
                    <div
                      key={topic._id}
                      className="relative rounded-2xl border border-cream-200/80 bg-cream-100/50 p-5 opacity-50"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-11 h-11 rounded-xl bg-cream-200/80 flex items-center justify-center text-lg shrink-0">
                          🔒
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-body font-semibold text-[0.92rem] text-charcoal-700/70 truncate">
                            {topic.name}
                          </h3>
                          {topic.totalResources > 0 && (
                            <p className="font-body text-[0.75rem] text-charcoal-600/40 mt-0.5">
                              {topic.totalResources} resources
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={topic._id}
                    to={`/learn/${topic.slug}`}
                    className="group relative rounded-2xl bg-white p-5 transition-all duration-250 hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      border: isCompleted
                        ? "2px solid #22C55E"
                        : hasProgress
                          ? `2px solid ${topic.color}50`
                          : "1.5px solid var(--color-cream-200)",
                      boxShadow: isCompleted
                        ? "0 2px 12px rgba(34, 197, 94, 0.1)"
                        : hasProgress
                          ? `0 2px 12px ${topic.color}10`
                          : "0 1px 4px rgba(0,0,0,0.02)",
                    }}
                  >
                    {/* Completed badge */}
                    {isCompleted && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-success flex items-center justify-center shadow-md shadow-success/30">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M3 7L6 10L11 4"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}

                    <div className="flex items-center gap-3.5">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{
                          background: isCompleted
                            ? "#22C55E12"
                            : `${topic.color}12`,
                        }}
                      >
                        {topic.iconEmoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-body font-semibold text-[0.92rem] text-charcoal-900 truncate group-hover:text-charcoal-800">
                          {topic.name}
                        </h3>
                        <p className="font-body text-[0.75rem] text-charcoal-600/60 mt-0.5">
                          {isCompleted
                            ? "Completed"
                            : hasProgress
                              ? `${progress}% · ${topic.progress!.resourcesCompleted}/${topic.totalResources} resources`
                              : topic.totalResources > 0
                                ? `${topic.totalResources} resources`
                                : "Coming soon"}
                        </p>
                      </div>
                    </div>

                    {/* Progress bar */}
                    {hasProgress && !isCompleted && (
                      <div className="mt-3.5 w-full h-1.5 bg-cream-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${Math.max(progress, 4)}%`,
                            background: topic.color,
                          }}
                        />
                      </div>
                    )}

                    {isCompleted && (
                      <div className="mt-3.5 w-full h-1.5 bg-success/20 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-success w-full" />
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
