import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const ReviewCTA = () => {
  return (
    <div className="bg-card rounded-xl p-5 border border-border">
      <div className="flex items-start gap-3">
        <div className="bg-primary/20 rounded-lg p-2">
          <TrendingUp className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-foreground font-semibold mb-1">Ready to Improve Your Score?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Focus on the questions you got wrong or partially correct. Practice similar problems to master these concepts.
          </p>
          <div className="flex items-center gap-3">
            <Button className="bg-primary text-primary-foreground">
              Start Practice ✎
            </Button>
            <Button variant="outline">
              View Full Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCTA;
