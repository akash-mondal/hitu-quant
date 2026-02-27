import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import { AnimatePresence } from "framer-motion";
import XPPopup from "./celebrations/XPPopup";
import CompletionCelebration from "./celebrations/CompletionCelebration";
import LevelUpCelebration from "./celebrations/LevelUpCelebration";

// ===== Types =====

export type CelebrationEvent =
  | { type: "xp"; amount: number }
  | { type: "subtopicComplete" }
  | { type: "topicComplete" }
  | { type: "levelUp"; level: number }
  | { type: "milestone"; message: string };

interface CelebrationContextValue {
  celebrate: (event: CelebrationEvent) => void;
}

// ===== Context =====

const CelebrationContext = createContext<CelebrationContextValue | null>(null);

export function useCelebration() {
  const ctx = useContext(CelebrationContext);
  if (!ctx)
    throw new Error(
      "useCelebration must be used within CelebrationProvider"
    );
  return ctx;
}

// ===== Provider =====

export function CelebrationProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<(CelebrationEvent & { _id: number }) | null>(null);
  const queueRef = useRef<CelebrationEvent[]>([]);
  const processingRef = useRef(false);
  const doneCalledRef = useRef(false);
  const idCounter = useRef(0);

  const processNext = useCallback(() => {
    if (queueRef.current.length === 0) {
      processingRef.current = false;
      setCurrent(null);
      return;
    }
    doneCalledRef.current = false;
    const next = queueRef.current.shift()!;
    idCounter.current += 1;
    setCurrent({ ...next, _id: idCounter.current });
  }, []);

  // Guard: only advance the queue once per celebration
  const handleDone = useCallback(() => {
    if (doneCalledRef.current) return;
    doneCalledRef.current = true;
    // Small delay to let exit animation start cleanly
    setTimeout(() => processNext(), 50);
  }, [processNext]);

  const celebrate = useCallback(
    (event: CelebrationEvent) => {
      queueRef.current.push(event);
      if (!processingRef.current) {
        processingRef.current = true;
        doneCalledRef.current = false;
        processNext();
      }
    },
    [processNext]
  );

  return (
    <CelebrationContext.Provider value={{ celebrate }}>
      {children}

      <AnimatePresence mode="wait">
        {current?.type === "xp" && (
          <XPPopup
            key={`xp-${current._id}`}
            amount={current.amount}
            onDone={handleDone}
          />
        )}
        {current?.type === "subtopicComplete" && (
          <CompletionCelebration
            key={`subtopic-${current._id}`}
            variant="subtopic"
            onDone={handleDone}
          />
        )}
        {current?.type === "topicComplete" && (
          <CompletionCelebration
            key={`topic-${current._id}`}
            variant="topic"
            onDone={handleDone}
          />
        )}
        {current?.type === "levelUp" && (
          <LevelUpCelebration
            key={`levelup-${current._id}`}
            level={current.level}
            onDone={handleDone}
          />
        )}
        {current?.type === "milestone" && (
          <CompletionCelebration
            key={`milestone-${current._id}`}
            variant="milestone"
            message={current.message}
            onDone={handleDone}
          />
        )}
      </AnimatePresence>
    </CelebrationContext.Provider>
  );
}
