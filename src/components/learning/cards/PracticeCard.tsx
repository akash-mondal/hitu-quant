import { getFaviconUrl } from "../../../lib/favicon";

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

export default function PracticeCard({ resource, onToggle }: Props) {
  const favicon = getFaviconUrl(resource.url, 64);

  return (
    <div
      className={`card overflow-hidden transition-all duration-200 ${
        resource.isCompleted ? "bg-success/[0.02]" : ""
      }`}
    >
      <div className="flex items-center gap-4 p-4">
        {/* Favicon */}
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 overflow-hidden hover:opacity-80 transition-opacity"
          style={{ background: "#1a1a1a08", border: "1.5px solid #1a1a1a10" }}
        >
          <img
            src={favicon}
            alt=""
            className="w-5 h-5"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).parentElement!.innerHTML =
                '<span class="text-base">🎯</span>';
            }}
          />
        </a>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[0.65rem] font-body font-semibold px-1.5 py-px rounded bg-cream-200/60 text-charcoal-600">
              Practice
            </span>
            <span className="text-[0.65rem] font-body text-charcoal-600/40 truncate">
              {resource.source} · {resource.estimatedMinutes}m
            </span>
          </div>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-body font-semibold text-[0.88rem] leading-snug truncate block hover:underline ${
              resource.isCompleted ? "text-charcoal-600" : "text-charcoal-900"
            }`}
          >
            {resource.title}
          </a>
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
    </div>
  );
}
