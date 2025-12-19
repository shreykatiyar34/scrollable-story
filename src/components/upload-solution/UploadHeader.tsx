import { ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface UploadHeaderProps {
  questionNumber: number;
  marks: number;
  onBack: () => void;
}

const UploadHeader = ({ questionNumber, marks, onBack }: UploadHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-sm">Back to Question</span>
      </button>
      <div className="flex items-center gap-2">
        <Badge className="bg-primary text-primary-foreground px-3 py-1">
          Question {questionNumber}
        </Badge>
        <Badge className="bg-pink-600 text-white px-3 py-1">
          {marks} Marks
        </Badge>
      </div>
    </div>
  );
};

export default UploadHeader;
