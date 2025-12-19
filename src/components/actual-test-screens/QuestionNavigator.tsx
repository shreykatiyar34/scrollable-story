import { Clock } from "lucide-react";

interface QuestionNavigatorProps {
  currentQuestion: number;
  totalQuestions: number;
}

const QuestionNavigator = ({ currentQuestion, totalQuestions }: QuestionNavigatorProps) => {
  const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  return (
    <div className="fixed left-0 top-0 h-full w-12 bg-card border-r border-border flex flex-col items-center py-4 gap-2">
      {/* Logo/Initial */}
      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm mb-4">
        k
      </div>

      {/* Question Numbers */}
      {questions.map((num) => (
        <button
          key={num}
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
            num === currentQuestion
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {num}
        </button>
      ))}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Timer Icon */}
      <button className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-muted/80">
        <Clock className="w-4 h-4" />
      </button>
    </div>
  );
};

export default QuestionNavigator;
