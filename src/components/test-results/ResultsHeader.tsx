import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

interface ResultsHeaderProps {
  testName: string;
  chapterName: string;
}

const ResultsHeader = ({ testName, chapterName }: ResultsHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-foreground font-bold text-lg">Test Results</h1>
          <Badge className="bg-primary/20 text-primary border-0 text-xs">
            <Sparkles className="w-3 h-3 mr-1" />
            TEST
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm">{chapterName} • {testName}</p>
      </div>
      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
        A
      </div>
    </div>
  );
};

export default ResultsHeader;
