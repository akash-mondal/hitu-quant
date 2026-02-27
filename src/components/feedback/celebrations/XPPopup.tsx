import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Props {
  amount: number;
  onDone: () => void;
}

export default function XPPopup({ amount, onDone }: Props) {
  const firedRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!firedRef.current) {
        firedRef.current = true;
        onDone();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Big centered XP badge */}
      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 18,
        }}
      >
        {/* Gold circle with bolt */}
        <motion.div
          className="w-24 h-24 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(145deg, #FFD700, #FFB020, #E69A00)",
            boxShadow:
              "0 0 40px rgba(255,176,32,0.5), 0 0 80px rgba(255,176,32,0.25), inset 0 -3px 0 rgba(0,0,0,0.1)",
          }}
          animate={{
            boxShadow: [
              "0 0 40px rgba(255,176,32,0.5), 0 0 80px rgba(255,176,32,0.25)",
              "0 0 60px rgba(255,176,32,0.7), 0 0 120px rgba(255,176,32,0.35)",
              "0 0 40px rgba(255,176,32,0.5), 0 0 80px rgba(255,176,32,0.25)",
            ],
          }}
          transition={{ duration: 1.2, repeat: 1 }}
        >
          <span className="text-5xl">⚡</span>
        </motion.div>

        {/* XP amount */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 300 }}
          className="font-mono font-black text-[2.8rem] leading-none tabular-nums text-center"
          style={{
            background: "linear-gradient(135deg, #FFB020, #FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 4px 16px rgba(255,176,32,0.6))",
          }}
        >
          +{amount} XP
        </motion.div>

        {/* Fade out */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1] }}
          transition={{ duration: 1.5, times: [0, 0.7, 1] }}
          className="font-body text-[0.8rem] text-charcoal-600/50"
        >
          Nice work!
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
