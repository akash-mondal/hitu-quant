import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface Props {
  variant: "subtopic" | "topic" | "milestone";
  message?: string;
  onDone: () => void;
}

const CONFIG = {
  subtopic: {
    emoji: "🎉",
    title: "Subtopic Complete!",
    subtitle: "+30 XP Bonus",
    accentColor: "#22C55E",
    glowColor: "rgba(34, 197, 94, 0.15)",
    duration: 3500,
  },
  topic: {
    emoji: "🏆",
    title: "Topic Mastered!",
    subtitle: "+100 XP Bonus",
    accentColor: "#FFB020",
    glowColor: "rgba(255, 176, 32, 0.2)",
    duration: 4500,
  },
  milestone: {
    emoji: "🔥",
    title: "",
    subtitle: "Keep going!",
    accentColor: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.15)",
    duration: 3000,
  },
};

export default function CompletionCelebration({
  variant,
  message,
  onDone,
}: Props) {
  const cfg = CONFIG[variant];
  const firedRef = useRef(false);
  const title = variant === "milestone" ? (message ?? "Nice!") : cfg.title;

  const safeDone = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    onDone();
  };

  useEffect(() => {
    // Confetti
    if (variant === "topic") {
      const colors = [
        "#FFB020",
        "#E69A00",
        "#FFD700",
        "#22C55E",
        "#3B82F6",
      ];
      confetti({
        particleCount: 120,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors,
        gravity: 0.7,
        ticks: 200,
      });
      setTimeout(
        () =>
          confetti({
            particleCount: 150,
            spread: 100,
            origin: { x: 0.5, y: 0.4 },
            colors,
            gravity: 0.6,
            ticks: 200,
          }),
        300
      );
      setTimeout(
        () =>
          confetti({
            particleCount: 120,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors,
            gravity: 0.7,
            ticks: 200,
          }),
        600
      );
    } else {
      confetti({
        particleCount: variant === "subtopic" ? 80 : 50,
        spread: 70,
        origin: { y: 0.5, x: 0.5 },
        colors: ["#FFB020", "#22C55E", "#3B82F6", "#FFD700"],
        gravity: 0.8,
        ticks: 120,
      });
    }

    const timer = setTimeout(safeDone, cfg.duration);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={safeDone}
      style={{ cursor: "pointer" }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background:
            variant === "topic"
              ? "radial-gradient(ellipse at center, rgba(255,176,32,0.12) 0%, rgba(0,0,0,0.55) 100%)"
              : "radial-gradient(ellipse at center, rgba(34,197,94,0.08) 0%, rgba(0,0,0,0.5) 100%)",
          backdropFilter: "blur(8px)",
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-5">
        {/* Pulsing ring (topic only) */}
        {variant === "topic" && (
          <motion.div
            className="absolute w-52 h-52 rounded-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [0.5, 1.4, 1.6],
              opacity: [0, 0.4, 0],
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              border: `3px solid ${cfg.accentColor}`,
              boxShadow: `0 0 60px ${cfg.glowColor}`,
            }}
          />
        )}

        {/* Emoji badge */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.1,
          }}
        >
          <div
            className="w-28 h-28 rounded-[28px] flex items-center justify-center text-6xl shadow-2xl"
            style={{
              background: `linear-gradient(145deg, white, ${cfg.accentColor}15)`,
              border: `3px solid ${cfg.accentColor}40`,
              boxShadow: `0 8px 40px ${cfg.glowColor}, 0 0 80px ${cfg.glowColor}`,
            }}
          >
            {cfg.emoji}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="font-display text-[2.2rem] text-white text-center leading-tight max-w-sm"
          style={{ textShadow: `0 2px 20px ${cfg.glowColor}` }}
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-mono font-bold text-[1rem] px-4 py-2 rounded-xl"
          style={{
            color: cfg.accentColor,
            background: `${cfg.accentColor}20`,
            boxShadow: `0 0 20px ${cfg.accentColor}15`,
          }}
        >
          {cfg.subtitle}
        </motion.div>

        {/* Tap to dismiss */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2 }}
          className="font-body text-[0.75rem] text-white/40 mt-2"
        >
          Tap anywhere to continue
        </motion.p>
      </div>
    </motion.div>
  );
}
