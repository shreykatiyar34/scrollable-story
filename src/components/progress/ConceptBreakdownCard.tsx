import { Info } from "lucide-react";

type ConceptStatus = "processing" | "mastered" | "needFocus";

interface ConceptBreakdownCardProps {
  title: string;
  description: string;
  status: ConceptStatus;
  category?: string;
  progress: number;
}

const ConceptBreakdownCard = ({
  title,
  description,
  status,
  category,
  progress,
}: ConceptBreakdownCardProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "processing":
        return {
          label: "Processing Progress",
          color: "text-yellow-400",
          barColor: "bg-yellow-400",
        };
      case "mastered":
        return {
          label: "Mastered",
          color: "text-[var(--accent-color)]",
          barColor: "bg-[var(--accent-color)]",
        };
      case "needFocus":
        return {
          label: "Need Focus",
          color: "text-red-400",
          barColor: "bg-red-400",
        };
    }
  };

  const config = getStatusConfig();

  return (
    <div className="p-5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl mb-4">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-6 h-6 bg-[var(--bg-tertiary)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <Info className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">
            {title}
          </h3>
          <p className="text-xs text-[var(--text-tertiary)]">
            {description}
          </p>
        </div>
      </div>

      {/* Status & Category */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-sm font-medium ${config.color}`}>
          {config.label}
        </span>
        {category && (
          <>
            <span className="text-[var(--text-muted)]">•</span>
            <span className="text-sm text-[var(--text-tertiary)]">{category}</span>
          </>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-2">
        <div className="w-full h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
          <div
            className={`h-full ${config.barColor} rounded-full transition-all duration-300`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Percentage */}
      <span className="text-lg font-bold text-[var(--text-primary)]">
        {progress}%
      </span>
    </div>
  );
};

export default ConceptBreakdownCard;
