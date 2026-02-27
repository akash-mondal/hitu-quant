import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

// ===== Types =====

type ToastType = "xp" | "subtopic" | "topic" | "levelup";

interface Toast {
  id: number;
  type: ToastType;
  message: string;
  accent?: string;
}

interface ToastContextValue {
  showXP: (amount: number) => void;
  showSubtopicComplete: () => void;
  showTopicComplete: () => void;
  showLevelUp: (level: number) => void;
}

// ===== Context =====

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

// ===== Provider =====

let nextId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const push = useCallback((toast: Omit<Toast, "id">) => {
    const id = ++nextId;
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2400);
  }, []);

  const showXP = useCallback(
    (amount: number) => {
      push({ type: "xp", message: `+${amount} XP` });
    },
    [push]
  );

  const showSubtopicComplete = useCallback(() => {
    push({
      type: "subtopic",
      message: "Subtopic Complete!",
      accent: "#22C55E",
    });
  }, [push]);

  const showTopicComplete = useCallback(() => {
    push({ type: "topic", message: "Topic Complete!", accent: "#FFB020" });
  }, [push]);

  const showLevelUp = useCallback(
    (level: number) => {
      push({
        type: "levelup",
        message: `Level ${level}!`,
        accent: "#9966CC",
      });
    },
    [push]
  );

  return (
    <ToastContext.Provider
      value={{ showXP, showSubtopicComplete, showTopicComplete, showLevelUp }}
    >
      {children}

      {/* Toast container — fixed bottom center */}
      <div className="fixed bottom-24 lg:bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none">
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <ToastBubble key={toast.id} toast={toast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

// ===== Toast Bubble =====

function ToastBubble({ toast }: { toast: Toast }) {
  if (toast.type === "xp") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="px-4 py-2 rounded-full bg-gold-500 shadow-lg shadow-gold-500/30"
      >
        <span className="font-mono font-bold text-[0.85rem] text-charcoal-900">
          {toast.message}
        </span>
      </motion.div>
    );
  }

  // Celebration toasts (subtopic, topic, levelup)
  const emoji =
    toast.type === "subtopic"
      ? "🎉"
      : toast.type === "topic"
        ? "🏆"
        : "⬆️";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 350, damping: 22 }}
      className="px-5 py-3 rounded-2xl bg-white border-2 shadow-xl flex items-center gap-2.5"
      style={{
        borderColor: toast.accent,
        boxShadow: `0 8px 30px ${toast.accent}25`,
      }}
    >
      <span className="text-xl">{emoji}</span>
      <span
        className="font-display text-[1rem]"
        style={{ color: toast.accent }}
      >
        {toast.message}
      </span>
    </motion.div>
  );
}
