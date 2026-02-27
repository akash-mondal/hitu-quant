import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface Props {
  level: number;
  onDone: () => void;
}

export default function LevelUpCelebration({ level, onDone }: Props) {
  const sprayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firedRef = useRef(false);

  const safeDone = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    onDone();
  };

  useEffect(() => {
    const end = Date.now() + 2000;
    const colors = [
      "#FFB020",
      "#E69A00",
      "#FFD700",
      "#22C55E",
      "#3B82F6",
      "#9966CC",
      "#F43F5E",
    ];

    function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
        gravity: 0.6,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
        gravity: 0.6,
      });
      if (Date.now() < end) {
        sprayRef.current = setTimeout(frame, 40);
      }
    }
    frame();

    const timer = setTimeout(safeDone, 4500);
    return () => {
      clearTimeout(timer);
      if (sprayRef.current) clearTimeout(sprayRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const letters = "LEVEL UP".split("");

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
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,176,32,0.15) 0%, rgba(10,10,10,0.85) 100%)",
          backdropFilter: "blur(12px)",
        }}
      />

      <div className="relative flex flex-col items-center gap-6">
        {/* Radiating rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 200 + i * 80,
              height: 200 + i * 80,
              border: "2px solid rgba(255, 176, 32, 0.2)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0.3, 1.2, 1.5],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              delay: 0.2 + i * 0.3,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Level number */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 12,
            delay: 0.15,
          }}
        >
          <div
            className="w-36 h-36 rounded-full flex items-center justify-center shadow-2xl"
            style={{
              background: "linear-gradient(145deg, #FFD700, #FFB020, #E69A00)",
              boxShadow:
                "0 0 60px rgba(255,176,32,0.4), 0 0 120px rgba(255,176,32,0.2), inset 0 -4px 0 rgba(0,0,0,0.15)",
            }}
          >
            <span className="font-mono font-black text-[3.5rem] text-charcoal-900 leading-none tabular-nums">
              {level}
            </span>
          </div>
        </motion.div>

        {/* "LEVEL UP" letter-by-letter */}
        <div className="flex gap-1">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.4 + i * 0.06,
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              className="font-display text-[2rem] leading-none"
              style={{
                color: letter === " " ? "transparent" : "#FFD700",
                textShadow:
                  letter === " "
                    ? "none"
                    : "0 0 30px rgba(255,215,0,0.5), 0 2px 4px rgba(0,0,0,0.3)",
                minWidth: letter === " " ? "0.5rem" : undefined,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="font-body text-[0.9rem] text-white/60"
        >
          Keep it up! You&apos;re unstoppable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.8 }}
          className="font-body text-[0.72rem] text-white/30 mt-1"
        >
          Tap anywhere to continue
        </motion.p>
      </div>
    </motion.div>
  );
}
