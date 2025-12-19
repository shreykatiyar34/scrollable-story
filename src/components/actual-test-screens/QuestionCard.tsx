import { Badge } from "@/components/ui/badge";
import { Maximize2 } from "lucide-react";

interface QuestionCardProps {
  section: string;
  questionNumber: number;
  totalQuestions: number;
  marks: number;
  question: string;
  hasImage?: boolean;
  imageUrl?: string;
}

const QuestionCard = ({
  section,
  questionNumber,
  totalQuestions,
  marks,
  question,
  hasImage = false,
}: QuestionCardProps) => {
  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge className="bg-primary text-primary-foreground px-3 py-1">
            {section}
          </Badge>
          <span className="text-muted-foreground text-sm">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        <Badge variant="outline" className="bg-muted border-border text-foreground">
          <span className="w-2 h-2 rounded-full bg-primary mr-2" />
          {marks} Mark
        </Badge>
      </div>

      {/* Question Content */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-start gap-3">
          <span className="w-6 h-6 rounded bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
            {questionNumber}
          </span>
          <p className="text-foreground flex-1">{question}</p>
        </div>

        {/* Image Placeholder */}
        {hasImage && (
          <div className="mt-4 relative">
            <div className="bg-white rounded-lg p-4 inline-block">
              {/* Geometry Diagram Placeholder */}
              <svg viewBox="0 0 200 150" className="w-48 h-36">
                {/* Circle */}
                <circle cx="100" cy="85" r="40" fill="none" stroke="black" strokeWidth="1.5" />
                {/* Quadrilateral ABCD */}
                <polygon
                  points="60,30 160,50 150,130 40,120"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                />
                {/* Labels */}
                <text x="55" y="125" fontSize="12" fontWeight="bold">A</text>
                <text x="95" y="20" fontSize="12" fontWeight="bold">B</text>
                <text x="160" y="60" fontSize="12" fontWeight="bold">C</text>
                <text x="145" y="140" fontSize="12" fontWeight="bold">D</text>
              </svg>
            </div>
            <button className="absolute top-2 right-2 p-2 bg-muted/80 rounded-lg hover:bg-muted transition-colors">
              <Maximize2 className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
