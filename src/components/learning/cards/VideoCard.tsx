import { useState } from "react";
import {
  extractYouTubeId,
  getYouTubeThumbnail,
  getYouTubeEmbedUrl,
} from "../../../lib/youtube";

interface Props {
  resource: {
    title: string;
    url: string;
    source: string;
    description?: string;
    estimatedMinutes: number;
    xpReward: number;
    isCompleted: boolean;
  };
  onToggle: () => void;
}

export default function VideoCard({ resource, onToggle }: Props) {
  const [playing, setPlaying] = useState(false);
  const videoId = extractYouTubeId(resource.url);

  return (
    <div
      className={`card overflow-hidden transition-all duration-200 ${
        resource.isCompleted ? "bg-success/[0.02]" : ""
      }`}
    >
      {/* Compact row */}
      <div className="flex items-center gap-4 p-4">
        {/* Thumbnail */}
        <button
          onClick={() =>
            videoId ? setPlaying(!playing) : window.open(resource.url, "_blank")
          }
          className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 group cursor-pointer bg-charcoal-900"
        >
          {videoId ? (
            <img
              src={getYouTubeThumbnail(videoId)}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-xl">🎬</span>
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors">
            <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M8 5.5V18.5L19 12L8 5.5Z" fill="#EF4444" />
              </svg>
            </div>
          </div>
          <span className="absolute bottom-0.5 right-0.5 px-1 py-px rounded bg-black/70 font-mono text-[0.55rem] text-white leading-tight">
            {resource.estimatedMinutes}m
          </span>
        </button>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[0.65rem] font-body font-semibold px-1.5 py-px rounded bg-cream-200/60 text-charcoal-600">
              Video
            </span>
            <span className="text-[0.65rem] font-body text-charcoal-600/40 truncate">
              {resource.source}
            </span>
          </div>
          <h4
            className={`font-body font-semibold text-[0.88rem] leading-snug truncate ${
              resource.isCompleted ? "text-charcoal-600" : "text-charcoal-900"
            }`}
          >
            {resource.title}
          </h4>
          {resource.description && (
            <p className="text-[0.72rem] font-body text-charcoal-600/50 mt-0.5 line-clamp-1">
              {resource.description}
            </p>
          )}
        </div>

        {/* Mark complete */}
        <button
          onClick={onToggle}
          className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.75rem] font-body font-semibold transition-all duration-200 ${
            resource.isCompleted
              ? "bg-success/10 text-success border border-success/30"
              : "bg-gold-500 text-charcoal-900 hover:bg-gold-400 shadow-sm"
          }`}
        >
          {resource.isCompleted ? (
            <>
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Done
            </>
          ) : (
            <>+{resource.xpReward} XP</>
          )}
        </button>
      </div>

      {/* Expandable video embed */}
      {playing && videoId && (
        <div className="px-4 pb-4">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-charcoal-900">
            <iframe
              src={getYouTubeEmbedUrl(videoId)}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={resource.title}
            />
          </div>
        </div>
      )}
    </div>
  );
}
