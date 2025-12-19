import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReviewHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-muted-foreground hover:text-foreground">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-foreground font-bold text-lg">Review</h1>
            <Badge className="bg-primary text-primary-foreground text-xs">
              ✎ ANSWER REVIEW
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm">Detailed feedback on your performance</p>
        </div>
      </div>
      <button className="text-muted-foreground hover:text-foreground">
        <Sun className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ReviewHeader;
