import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MasteryBannerProps {
  masteryPercent: number;
  masteredTopic: string;
  needsAttentionTopic: string;
}

const MasteryBanner = ({ masteryPercent, masteredTopic, needsAttentionTopic }: MasteryBannerProps) => {
  const navigate = useNavigate();
  
  // Calculate the stroke dasharray for the circular progress
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (masteryPercent / 100) * circumference;

  return (
    <div className="p-6 bg-gradient-to-r from-[var(--accent-color)]/10 to-transparent border border-[var(--accent-color)]/30 rounded-xl mb-8">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
            Keep Pushing!
          </h2>
          <p className="text-sm text-[var(--text-tertiary)] mb-4">
            You've mastered <span className="text-[var(--text-primary)] font-semibold">{masteredTopic}</span>, but{" "}
            <span className="text-red-400 font-semibold">{needsAttentionTopic}</span> needs attention.
          </p>
          <Button
            onClick={() => navigate("/review")}
            className="bg-[var(--accent-color)] text-[var(--bg-primary)] hover:bg-[var(--accent-color)]/90 font-medium"
          >
            Review Answers &gt;
          </Button>
        </div>

        {/* Circular Progress */}
        <div className="relative w-28 h-28 flex-shrink-0">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="var(--bg-tertiary)"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="var(--accent-color)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-[var(--text-primary)]">{masteryPercent}%</span>
            <span className="text-xs text-[var(--text-tertiary)]">Mastery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasteryBanner;
