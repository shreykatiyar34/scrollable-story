import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

interface ReviewSummaryProps {
  correct: number;
  partial: number;
  wrong: number;
}

const ReviewSummary = ({ correct, partial, wrong }: ReviewSummaryProps) => {
  return (
    <div className="bg-card rounded-xl p-5 border border-border mb-4">
      <h3 className="text-muted-foreground text-xs uppercase font-semibold mb-3">Summary</h3>
      <div className="space-y-2">
        <div className="flex items-center justify-between bg-primary/20 rounded-lg px-4 py-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-foreground text-sm">Correct</span>
          </div>
          <span className="text-primary font-semibold">{correct}</span>
        </div>
        <div className="flex items-center justify-between bg-amber-500/20 rounded-lg px-4 py-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <span className="text-foreground text-sm">Partial</span>
          </div>
          <span className="text-amber-500 font-semibold">{partial}</span>
        </div>
        <div className="flex items-center justify-between bg-destructive/20 rounded-lg px-4 py-3">
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-destructive" />
            <span className="text-foreground text-sm">Wrong</span>
          </div>
          <span className="text-destructive font-semibold">{wrong}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
