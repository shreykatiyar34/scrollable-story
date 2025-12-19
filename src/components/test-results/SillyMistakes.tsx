import { Lightbulb, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SillyMistake {
  title: string;
  description: string;
  occurrences: number;
}

interface SillyMistakesProps {
  mistakes: SillyMistake[];
  onPractice: (title: string) => void;
}

const SillyMistakes = ({ mistakes, onPractice }: SillyMistakesProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-pink-400" />
          <h3 className="text-foreground font-semibold">Silly Mistakes Identified</h3>
        </div>
        <Badge variant="outline" className="text-pink-400 border-pink-400">
          {mistakes.length} Types
        </Badge>
      </div>
      <p className="text-muted-foreground text-xs mb-3">Common errors to avoid</p>

      <div className="space-y-3">
        {mistakes.map((mistake, index) => (
          <div key={index} className="bg-card rounded-xl p-4 border border-border">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center mt-0.5">
                <Lightbulb className="w-3 h-3 text-pink-400" />
              </div>
              <div className="flex-1">
                <h4 className="text-foreground font-medium text-sm">{mistake.title}</h4>
                <p className="text-muted-foreground text-xs">{mistake.description}</p>
                <Badge className="mt-2 bg-destructive/20 text-destructive border-0 text-xs">
                  Occurred {mistake.occurrences} times
                </Badge>
              </div>
            </div>

            <Button
              size="sm"
              className="w-full text-xs bg-primary text-primary-foreground"
              onClick={() => onPractice(mistake.title)}
            >
              <Dumbbell className="w-3 h-3 mr-1" />
              Practice Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SillyMistakes;
