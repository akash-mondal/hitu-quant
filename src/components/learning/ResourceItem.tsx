import { Id } from "../../../convex/_generated/dataModel";

const TYPE_META: Record<string, { icon: string; label: string; color: string }> =
  {
    video: { icon: "▶", label: "Video", color: "#EF4444" },
    article: { icon: "📄", label: "Article", color: "#3B82F6" },
    practice: { icon: "🎯", label: "Practice", color: "#22C55E" },
    book: { icon: "📕", label: "Book", color: "#F59E0B" },
    website: { icon: "🌐", label: "Website", color: "#8B5CF6" },
  };

interface ResourceItemProps {
  resource: {
    _id: Id<"resources">;
    title: string;
    url: string;
    type: "video" | "article" | "practice" | "book" | "website";
    source: string;
    description?: string;
    estimatedMinutes: number;
    xpReward: number;
    isCompleted: boolean;
  };
  onToggle: () => void;
}

export default function ResourceItem({ resource, onToggle }: ResourceItemProps) {
  const meta = TYPE_META[resource.type] ?? TYPE_META.website;

  return (
    <div
      className={`flex items-start gap-3 py-3.5 border-b border-cream-100 last:border-0 transition-opacity ${
        resource.isCompleted ? "opacity-60" : ""
      }`}
    >
      {/* Checkbox */}
      <button
        onClick={onToggle}
        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 ${
          resource.isCompleted
            ? "bg-success border-success text-white"
            : "border-cream-300 hover:border-gold-400 hover:bg-gold-400/5"
        }`}
      >
        {resource.isCompleted && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M2.5 6L5 8.5L9.5 3.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Type pill + source */}
        <div className="flex items-center gap-2 mb-1">
          <span
            className="inline-flex items-center gap-1 text-[0.65rem] font-mono font-semibold px-1.5 py-0.5 rounded-md"
            style={{
              background: `${meta.color}12`,
              color: meta.color,
            }}
          >
            {meta.icon} {meta.label}
          </span>
          <span className="text-[0.65rem] font-body text-charcoal-600/50">
            {resource.source}
          </span>
        </div>

        {/* Title as external link */}
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-body font-semibold text-[0.85rem] transition-colors inline-flex items-center gap-1 ${
            resource.isCompleted
              ? "line-through text-charcoal-600"
              : "text-charcoal-900 hover:text-gold-600"
          }`}
        >
          {resource.title}
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            className="shrink-0 opacity-40"
          >
            <path
              d="M3.5 1.5H10.5V8.5M10.5 1.5L1.5 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Description */}
        {resource.description && (
          <p className="text-[0.72rem] font-body text-charcoal-600 mt-0.5 line-clamp-2">
            {resource.description}
          </p>
        )}

        {/* Meta row */}
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-[0.65rem] font-body text-charcoal-600/50">
            ~{resource.estimatedMinutes}m
          </span>
          <span className="text-[0.65rem] font-mono font-semibold text-gold-600">
            +{resource.xpReward} XP
          </span>
        </div>
      </div>
    </div>
  );
}
