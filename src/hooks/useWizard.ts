import { useState, useCallback } from "react";

export function useWizard(totalSteps: number) {
  const [stepIndex, setStepIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goNext = useCallback(() => {
    setDirection(1);
    setStepIndex((i) => Math.min(i + 1, totalSteps - 1));
  }, [totalSteps]);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setStepIndex((i) => Math.max(i - 1, 0));
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > stepIndex ? 1 : -1);
      setStepIndex(Math.max(0, Math.min(idx, totalSteps - 1)));
    },
    [stepIndex, totalSteps]
  );

  return {
    stepIndex,
    direction,
    goNext,
    goPrev,
    goTo,
    isFirst: stepIndex === 0,
    isLast: stepIndex === totalSteps - 1,
    progress: totalSteps > 0 ? ((stepIndex + 1) / totalSteps) * 100 : 0,
  };
}
