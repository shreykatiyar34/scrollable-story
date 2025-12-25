import { MessageSquare } from "lucide-react";

interface TopicBannerProps {
  topic: string;
  description: string;
}

const TopicBanner = ({ topic, description }: TopicBannerProps) => {
  return (
    <div className="p-5 bg-gradient-to-r from-[var(--accent-color)]/20 to-[var(--accent-color)]/5 border border-[var(--accent-color)]/30 rounded-xl mb-6">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 bg-[var(--accent-color)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <MessageSquare className="w-4 h-4 text-[var(--accent-color)]" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-[var(--text-primary)] mb-1">
            {topic}
          </h1>
          <p className="text-sm text-[var(--text-tertiary)]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopicBanner;
