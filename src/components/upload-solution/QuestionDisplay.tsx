import { FileText } from "lucide-react";

interface QuestionDisplayProps {
  question: string;
}

const QuestionDisplay = ({ question }: QuestionDisplayProps) => {
  return (
    <div className="bg-card rounded-xl p-4 border border-border mb-6">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <FileText className="w-4 h-4 text-primary" />
        </div>
        <div>
          <span className="text-xs text-muted-foreground uppercase tracking-wide">Question</span>
          <p className="text-foreground mt-1">{question}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionDisplay;
