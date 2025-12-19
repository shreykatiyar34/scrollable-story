import { AlertCircle, BookOpen, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface WeakConcept {
  title: string;
  description: string;
  masteryPercentage: number;
}

interface WeakConceptsProps {
  concepts: WeakConcept[];
  onStudy: (title: string) => void;
  onPractice: (title: string) => void;
}

const WeakConcepts = ({ concepts, onStudy, onPractice }: WeakConceptsProps) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-500" />
          <h3 className="text-foreground font-semibold">Weak Concepts Identified</h3>
        </div>
        <Badge variant="outline" className="text-primary border-primary">
          {concepts.length} Topics
        </Badge>
      </div>
      <p className="text-muted-foreground text-xs mb-3">Topics that need more practice</p>

      <div className="space-y-3">
        {concepts.map((concept, index) => (
          <div key={index} className="bg-card rounded-xl p-4 border border-border">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5">
                <AlertCircle className="w-3 h-3 text-amber-500" />
              </div>
              <div className="flex-1">
                <h4 className="text-foreground font-medium text-sm">{concept.title}</h4>
                <p className="text-muted-foreground text-xs">{concept.description}</p>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-muted-foreground text-xs">Current Mastery</span>
                <span className="text-destructive text-xs font-semibold">{concept.masteryPercentage}%</span>
              </div>
              <Progress value={concept.masteryPercentage} className="h-1.5 bg-muted [&>div]:bg-destructive" />
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs"
                onClick={() => onStudy(concept.title)}
              >
                <BookOpen className="w-3 h-3 mr-1" />
                Study Now
              </Button>
              <Button
                size="sm"
                className="flex-1 text-xs bg-primary text-primary-foreground"
                onClick={() => onPractice(concept.title)}
              >
                <Dumbbell className="w-3 h-3 mr-1" />
                Practice Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeakConcepts;
