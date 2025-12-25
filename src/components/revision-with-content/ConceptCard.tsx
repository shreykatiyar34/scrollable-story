import { Play, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConceptCardProps {
  title: string;
  description: string;
  status: "Learning" | "Improving";
  mastery: number;
  timeSpent: string;
  nextTarget: number;
  hasProgress: boolean;
}

const ConceptCard = ({
  title,
  description,
  status,
  mastery,
  timeSpent,
  nextTarget,
  hasProgress,
}: ConceptCardProps) => {
  const getStatusColor = () => {
    if (status === "Learning") return "bg-[var(--accent-color)]/20 text-[var(--accent-color)]";
    return "bg-orange-500/20 text-orange-400";
  };

  const getProgressColor = () => {
    if (status === "Learning") return "bg-[var(--accent-color)]";
    return "bg-orange-500";
  };

  return (
    <div className="p-5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          {title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor()}`}>
          <Sparkles className="w-3 h-3" />
          {status}
        </span>
      </div>
      
      <p className="text-sm text-[var(--text-tertiary)] mb-4">
        {description}
      </p>

      {/* Mastery */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[var(--text-tertiary)]">Mastery</span>
          <span className={`text-sm font-medium ${status === "Learning" ? "text-[var(--accent-color)]" : "text-orange-400"}`}>
            {mastery}%
          </span>
        </div>
        <div className="w-full h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
          <div
            className={`h-full ${getProgressColor()} rounded-full transition-all duration-300`}
            style={{ width: `${mastery}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-center">
          <p className="text-xs text-[var(--text-tertiary)] mb-1">Time Spent</p>
          <p className="text-base font-semibold text-[var(--text-primary)]">{timeSpent}</p>
        </div>
        <div className="p-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-lg text-center">
          <p className="text-xs text-[var(--text-tertiary)] mb-1">Next Target</p>
          <p className="text-base font-semibold text-[var(--accent-color)]">{nextTarget}%</p>
        </div>
      </div>

      {/* Action Button */}
      <Button
        className="w-full bg-[var(--accent-color)] text-[var(--bg-primary)] hover:bg-[var(--accent-color)]/90 font-medium"
      >
        {hasProgress ? (
          <>
            <RefreshCw className="w-4 h-4 mr-2" />
            Resume
          </>
        ) : (
          <>
            <Play className="w-4 h-4 mr-2" />
            Start
          </>
        )}
      </Button>
    </div>
  );
};

export default ConceptCard;
