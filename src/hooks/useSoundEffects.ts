import useSound from "use-sound";

export function useSoundEffects() {
  const [playComplete] = useSound("/sounds/complete.mp3", { volume: 0.5 });
  const [playSubtopic] = useSound("/sounds/subtopic.mp3", { volume: 0.55 });
  const [playTopic] = useSound("/sounds/topic.mp3", { volume: 0.6 });
  const [playLevelUp] = useSound("/sounds/levelup.mp3", { volume: 0.65 });

  return { playComplete, playSubtopic, playTopic, playLevelUp };
}
