import { useQuery, useMutation } from "convex/react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../convex/_generated/api";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback } from "react";
import { Id } from "../../convex/_generated/dataModel";
import { useCelebration } from "../components/feedback/CelebrationProvider";
import { useWizard } from "../hooks/useWizard";
import { useSoundEffects } from "../hooks/useSoundEffects";
import ResourceCardRouter from "../components/learning/ResourceCardRouter";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

export default function TopicDetail() {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const data = useQuery(
    api.topics.getTopicBySlug,
    topicSlug ? { slug: topicSlug } : "skip"
  );
  const toggleResourceMutation = useMutation(
    api.progress.toggleResourceComplete
  );
  const { celebrate } = useCelebration();
  const { playComplete, playSubtopic, playTopic, playLevelUp } =
    useSoundEffects();

  const subtopicCount = data?.subtopics?.length ?? 1;
  const wizard = useWizard(subtopicCount);

  const handleToggle = useCallback(
    async (resourceId: Id<"resources">) => {
      const result = await toggleResourceMutation({ resourceId });
      if (result.action === "completed") {
        playComplete();

        // Always show XP
        celebrate({ type: "xp", amount: result.xpChange });

        // Subtopic just completed → full celebration
        if (result.subtopicJustCompleted) {
          celebrate({ type: "subtopicComplete" });
          playSubtopic();
        }

        // Topic just completed → big celebration
        if (result.topicJustCompleted) {
          celebrate({ type: "topicComplete" });
          playTopic();
        }

        // Leveled up → epic celebration
        if (result.leveledUp && result.newLevel) {
          celebrate({ type: "levelUp", level: result.newLevel! });
          playLevelUp();
        }

        // Progress milestones (halfway through a subtopic)
        if (
          !result.subtopicJustCompleted &&
          !result.topicJustCompleted &&
          data
        ) {
          const st = data.subtopics[wizard.stepIndex];
          if (st) {
            const doneCount =
              st.resources.filter((r) => r.isCompleted).length + 1;
            const total = st.resources.length;
            if (total >= 3 && doneCount === Math.ceil(total / 2)) {
              celebrate({
                type: "milestone",
                message: "Halfway there!",
              });
            }
          }
        }
      }
    },
    [
      toggleResourceMutation,
      celebrate,
      playComplete,
      playSubtopic,
      playTopic,
      playLevelUp,
      data,
      wizard.stepIndex,
    ]
  );

  if (data === undefined) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 rounded-full border-[3px] border-cream-200" />
          <div className="absolute inset-0 rounded-full border-[3px] border-gold-500 border-t-transparent animate-spin" />
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-20">
        <h1 className="font-display text-2xl text-charcoal-900 mb-2">
          Topic Not Found
        </h1>
        <Link
          to="/learn"
          className="font-body text-gold-600 hover:underline"
        >
          &larr; Back to Learning Path
        </Link>
      </div>
    );
  }

  const { topic, topicProgress, subtopics } = data;
  const overallProgress = topicProgress?.progressPercent ?? 0;
  const currentSubtopic = subtopics[wizard.stepIndex];
  if (!currentSubtopic) return null;

  const currentCompleted = currentSubtopic.resources.filter(
    (r) => r.isCompleted
  ).length;
  const currentTotal = currentSubtopic.resources.length;
  const isSubtopicDone = currentSubtopic.progress?.isCompleted === true;

  const totalResourcesDone = subtopics.reduce(
    (sum, st) => sum + st.resources.filter((r) => r.isCompleted).length,
    0
  );

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto pb-24 lg:pb-4"
      variants={stagger}
      initial="initial"
      animate="animate"
    >
      {/* Back link */}
      <motion.div variants={fadeUp}>
        <Link
          to="/learn"
          className="inline-flex items-center gap-1.5 font-body text-[0.82rem] text-charcoal-600 hover:text-charcoal-900 transition-colors mb-5"
        >
          &larr; Back to Learning Path
        </Link>
      </motion.div>

      {/* ── Topic Header — compact ── */}
      <motion.div variants={fadeUp} className="card p-4 mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
            style={{ background: `${topic.color}15` }}
          >
            {topic.iconEmoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-display text-[1.15rem] text-charcoal-900 leading-tight truncate">
                {topic.name}
              </h1>
              <span
                className="text-[0.6rem] font-body font-semibold uppercase tracking-wider px-1.5 py-px rounded shrink-0"
                style={{ color: topic.color, background: `${topic.color}12` }}
              >
                {topic.category === "quantitative"
                  ? "Quant"
                  : topic.category === "logical"
                    ? "Logic"
                    : "Puzzles"}
              </span>
              {topicProgress?.isCompleted && (
                <span className="text-[0.6rem] font-body font-semibold text-success bg-success/10 px-1.5 py-px rounded shrink-0">
                  Completed
                </span>
              )}
            </div>
            <p className="font-body text-[0.75rem] text-charcoal-600/60 mt-0.5 line-clamp-1">
              {topic.description}
            </p>
          </div>
          <div className="text-right shrink-0">
            <span
              className="font-mono font-bold text-[0.9rem]"
              style={{ color: topic.color }}
            >
              {overallProgress}%
            </span>
            <p className="font-body text-[0.6rem] text-charcoal-600/40">
              {totalResourcesDone}/{topic.totalResources}
            </p>
          </div>
        </div>
        <div className="w-full h-1.5 bg-cream-200 rounded-full overflow-hidden mt-3">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${Math.max(overallProgress, overallProgress > 0 ? 3 : 0)}%`,
              background: topic.color,
            }}
          />
        </div>
      </motion.div>

      {/* ── Subtopic Tabs ── */}
      <motion.div variants={fadeUp} className="mb-4">
        <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 px-1">
          {subtopics.map((st, idx) => {
            const done = st.progress?.isCompleted === true;
            const active = idx === wizard.stepIndex;
            return (
              <button
                key={st._id}
                onClick={() => wizard.goTo(idx)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.72rem] font-body font-medium transition-all duration-200 ${
                  active
                    ? "text-white"
                    : done
                      ? "bg-success/8 text-success border border-success/15"
                      : "bg-white text-charcoal-600 border border-cream-200 hover:border-cream-300"
                }`}
                style={
                  active
                    ? { background: topic.color }
                    : undefined
                }
              >
                {done && !active ? (
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className={`font-mono text-[0.65rem] font-bold ${active ? "text-white/60" : "text-charcoal-600/30"}`}>
                    {idx + 1}
                  </span>
                )}
                <span className="truncate max-w-[120px]">{st.name}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ── Current Subtopic Content ── */}
      <AnimatePresence mode="wait" custom={wizard.direction}>
        <motion.div
          key={currentSubtopic._id}
          custom={wizard.direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Subtopic info — compact inline */}
          <div className="flex items-center gap-2.5 mb-3">
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-[0.7rem] shrink-0 ${
                isSubtopicDone
                  ? "bg-success/15 text-success"
                  : "text-white"
              }`}
              style={
                !isSubtopicDone ? { background: topic.color } : undefined
              }
            >
              {isSubtopicDone ? "✓" : wizard.stepIndex + 1}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-body font-bold text-[0.95rem] text-charcoal-900 leading-tight">
                {currentSubtopic.name}
              </h2>
              <p className="font-body text-[0.72rem] text-charcoal-600/50 line-clamp-1">
                {currentSubtopic.description}
                {currentTotal > 0 && (
                  <> · <span className="font-semibold">{currentCompleted}/{currentTotal}</span> done</>
                )}
              </p>
            </div>
            {isSubtopicDone && (
              <span className="shrink-0 text-[0.7rem] font-body font-semibold text-success bg-success/8 px-2 py-1 rounded-lg border border-success/15">
                Completed
              </span>
            )}
          </div>

          {/* Resource Cards */}
          {currentTotal === 0 ? (
            <div className="card py-12 text-center">
              <span className="text-3xl mb-3 block">📭</span>
              <p className="font-body text-[0.88rem] text-charcoal-600/60 mb-1">
                No resources added yet
              </p>
              <p className="font-body text-[0.72rem] text-charcoal-600/40">
                Resources for this subtopic will be added soon.
                Move to the next subtopic for now.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {currentSubtopic.resources.map((resource, idx) => (
                <motion.div
                  key={resource._id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <ResourceCardRouter
                    resource={resource}
                    onToggle={() =>
                      handleToggle(resource._id as Id<"resources">)
                    }
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Navigation ── */}
      <div className="flex items-center justify-between mt-5 gap-4">
        <button
          onClick={wizard.goPrev}
          disabled={wizard.isFirst}
          className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body font-semibold text-[0.85rem] transition-all duration-200 ${
            wizard.isFirst
              ? "opacity-0 pointer-events-none"
              : "text-charcoal-800 bg-white border border-cream-200 hover:border-cream-300 hover:shadow-md"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 4L6 8L10 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {!wizard.isFirst && (
            <span className="hidden sm:inline truncate max-w-[120px]">
              {subtopics[wizard.stepIndex - 1]?.name ?? "Previous"}
            </span>
          )}
          <span className="sm:hidden">Previous</span>
        </button>

        <span className="font-mono text-[0.75rem] text-charcoal-600/40 tabular-nums">
          {wizard.stepIndex + 1} / {subtopics.length}
        </span>

        {wizard.isLast ? (
          <Link
            to="/learn"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body font-semibold text-[0.85rem] text-white transition-all duration-200 hover:shadow-md"
            style={{
              background: topic.color,
              boxShadow: `0 2px 10px ${topic.color}30`,
            }}
          >
            Back to Topics
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ) : (
          <button
            onClick={wizard.goNext}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body font-semibold text-[0.85rem] text-white transition-all duration-200 hover:shadow-md"
            style={{
              background: topic.color,
              boxShadow: `0 2px 10px ${topic.color}30`,
            }}
          >
            <span className="hidden sm:inline truncate max-w-[120px]">
              {subtopics[wizard.stepIndex + 1]?.name ?? "Next"}
            </span>
            <span className="sm:hidden">Next</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  );
}
