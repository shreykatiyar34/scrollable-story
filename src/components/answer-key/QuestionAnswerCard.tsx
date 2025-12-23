import { FileText, CheckCircle, Lightbulb, List, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface QuestionOption {
  label: string;
  text: string;
  isCorrect?: boolean;
}

interface SolutionStep {
  step: number;
  content: string;
}

interface QuestionAnswerCardProps {
  questionNumber: number;
  type: "MCQ" | "Short Answer" | "Long Answer";
  marks: number;
  question: string;
  options?: QuestionOption[];
  correctAnswer: string;
  solutionSteps?: SolutionStep[];
  conceptExplanation: string;
}

const QuestionAnswerCard = ({
  questionNumber,
  type,
  marks,
  question,
  options,
  correctAnswer,
  solutionSteps,
  conceptExplanation,
}: QuestionAnswerCardProps) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Answer copied to clipboard",
    });
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Question Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-bold text-foreground">Q{questionNumber}</span>
          <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/30">
            {type}
          </Badge>
          <Badge variant="outline" className="text-xs bg-amber-500/10 text-amber-400 border-amber-500/30">
            {marks} Mark{marks > 1 ? 's' : ''}
          </Badge>
        </div>

        {/* Question */}
        <div className="flex items-start gap-2">
          <FileText className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <div>
            <span className="text-xs text-muted-foreground">Question</span>
            <p className="text-foreground mt-1">{question}</p>
          </div>
        </div>

        {/* MCQ Options */}
        {options && options.length > 0 && (
          <div className="mt-4 space-y-2 ml-6">
            {options.map((option, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${
                  option.isCorrect
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "bg-muted/30 border-border text-muted-foreground"
                }`}
              >
                {option.label} {option.text}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Correct Answer */}
      <div className="p-4 bg-green-500/5 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-400">Correct Answer</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-foreground"
            onClick={() => handleCopy(correctAnswer)}
          >
            <Copy className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-foreground mt-2 ml-6">{correctAnswer}</p>
      </div>

      {/* Step-by-Step Solution */}
      {solutionSteps && solutionSteps.length > 0 && (
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2 mb-3">
            <List className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Step-by-Step Solution</span>
          </div>
          <div className="ml-6 space-y-1 font-mono text-sm">
            {solutionSteps.map((step) => (
              <div key={step.step} className="text-muted-foreground">
                <span className="text-foreground mr-2">{step.step}.</span>
                {step.content}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Concept Explanation */}
      <div className="p-4 bg-amber-500/5">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-amber-400">Concept Explanation</span>
        </div>
        <p className="text-muted-foreground ml-6 text-sm">{conceptExplanation}</p>
      </div>
    </div>
  );
};

export default QuestionAnswerCard;
