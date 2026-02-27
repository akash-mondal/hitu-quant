import { Id } from "../../../convex/_generated/dataModel";
import VideoCard from "./cards/VideoCard";
import ArticleCard from "./cards/ArticleCard";
import PracticeCard from "./cards/PracticeCard";
import WebsiteCard from "./cards/WebsiteCard";

export interface ResourceData {
  _id: Id<"resources">;
  title: string;
  url: string;
  type: "video" | "article" | "practice" | "book" | "website";
  source: string;
  description?: string;
  estimatedMinutes: number;
  xpReward: number;
  isCompleted: boolean;
}

interface Props {
  resource: ResourceData;
  onToggle: () => void;
}

export default function ResourceCardRouter({ resource, onToggle }: Props) {
  switch (resource.type) {
    case "video":
      return <VideoCard resource={resource} onToggle={onToggle} />;
    case "article":
      return <ArticleCard resource={resource} onToggle={onToggle} />;
    case "practice":
      return <PracticeCard resource={resource} onToggle={onToggle} />;
    case "book":
    case "website":
      return <WebsiteCard resource={resource} onToggle={onToggle} />;
    default:
      return <ArticleCard resource={resource} onToggle={onToggle} />;
  }
}
