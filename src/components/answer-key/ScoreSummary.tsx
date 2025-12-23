import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ScoreSummaryProps {
  score: number;
  total: number;
  percentage: number;
  totalQuestions: number;
  passed: boolean;
}

const ScoreSummary = ({ score, total, percentage, totalQuestions, passed }: ScoreSummaryProps) => {
  return (
    <div className="bg-card rounded-xl p-4 border border-border mx-4 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Your Score</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-foreground">{score}</span>
              <span className="text-muted-foreground">/ {total}</span>
              <Badge 
                className={`ml-2 ${passed ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
              >
                {passed ? 'PASS' : 'FAIL'} - {percentage}%
              </Badge>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xs text-muted-foreground">Total Questions</span>
          <p className="text-2xl font-bold text-foreground">{totalQuestions}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;
