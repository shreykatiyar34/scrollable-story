import { TrendingUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReadyToImproveProps {
  onStartPractice: () => void;
  onViewReport: () => void;
}

const ReadyToImprove = ({ onStartPractice, onViewReport }: ReadyToImproveProps) => {
  return (
    <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
      <div className="flex items-start gap-3 mb-4">
        <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
        <div>
          <h3 className="text-foreground font-semibold">Ready to Improve?</h3>
          <p className="text-muted-foreground text-sm">
            We've identified specific areas where focused practice can boost your performance. 
            Start with the weak concepts and track your progress!
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Button onClick={onStartPractice} className="bg-foreground text-background hover:bg-foreground/90">
          Start Practice →
        </Button>
        <Button variant="outline" onClick={onViewReport}>
          <FileText className="w-4 h-4 mr-2" />
          View Full Report
        </Button>
      </div>
    </div>
  );
};

export default ReadyToImprove;
