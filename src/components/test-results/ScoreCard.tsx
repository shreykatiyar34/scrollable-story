import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

interface ScoreCardProps {
  score: number;
  totalMarks: number;
  percentage: number;
  passed: boolean;
  message: string;
  description: string;
  onReviewAnswers: () => void;
  onAnswerKey: () => void;
}

const ScoreCard = ({
  score,
  totalMarks,
  percentage,
  passed,
  message,
  description,
  onReviewAnswers,
  onAnswerKey,
}: ScoreCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border mb-4">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Trophy className="w-4 h-4 text-primary" />
          <span className="text-primary text-xs font-semibold uppercase tracking-wide">Your Score</span>
        </div>
        
        <h2 className="text-2xl font-bold text-foreground mb-2">
          {message} 🎯
        </h2>
        
        <p className="text-muted-foreground text-sm mb-4 max-w-xs mx-auto">
          {description}
        </p>

        <div className="flex items-center justify-center gap-3 mb-6">
          <Button onClick={onReviewAnswers} className="bg-primary text-primary-foreground">
            Review Answers →
          </Button>
          <Button variant="outline" onClick={onAnswerKey}>
            Answer Key
          </Button>
        </div>

        {/* Circular Score */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${percentage * 2.83} 283`}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-foreground">{score}</span>
            <span className="text-muted-foreground text-sm">/{totalMarks}</span>
            <span className="text-primary text-xs">{percentage}%</span>
          </div>
        </div>

        <Badge className={`${passed ? 'bg-primary' : 'bg-destructive'} text-primary-foreground px-4 py-1`}>
          {passed ? 'PASS' : 'FAIL'}
        </Badge>
      </div>
    </div>
  );
};

export default ScoreCard;
