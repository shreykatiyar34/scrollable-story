import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface TestHeaderProps {
  timeRemaining: string;
  onSubmit: () => void;
}

const TestHeader = ({ timeRemaining, onSubmit }: TestHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Badge variant="outline" className="bg-muted border-border text-foreground px-3 py-1">
          <Clock className="w-3 h-3 mr-1" />
          TEST
        </Badge>
        <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-lg">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="font-mono font-semibold text-foreground">{timeRemaining}</span>
        </div>
      </div>
      <Button onClick={onSubmit} className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
        Submit
      </Button>
    </div>
  );
};

export default TestHeader;
