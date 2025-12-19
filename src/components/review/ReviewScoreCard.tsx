import { Badge } from "@/components/ui/badge";
import { Trophy, Clock } from "lucide-react";

interface ReviewScoreCardProps {
  score: number;
  totalMarks: number;
  timeTaken: string;
  passed: boolean;
  passPercentage: number;
}

const ReviewScoreCard = ({ score, totalMarks, timeTaken, passed, passPercentage }: ReviewScoreCardProps) => {
  return (
    <div className="bg-card rounded-xl p-5 border border-border mb-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground text-xs uppercase">Your Score</span>
          </div>
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl font-bold text-foreground">{score}</span>
            <span className="text-muted-foreground text-lg">/ {totalMarks}</span>
          </div>
          <Badge className={`${passed ? 'bg-primary' : 'bg-destructive'} text-primary-foreground text-xs`}>
            {passed ? 'PASS' : 'FAIL'} • {passPercentage}%
          </Badge>
        </div>
        <div className="bg-muted/50 rounded-lg px-4 py-3 border border-border">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <div>
              <p className="text-muted-foreground text-xs">Time Taken</p>
              <p className="text-foreground font-semibold">{timeTaken}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewScoreCard;
