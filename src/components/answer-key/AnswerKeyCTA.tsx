import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const AnswerKeyCTA = () => {
  return (
    <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-4 mx-4 mb-4 rounded-xl border border-primary/20">
      <p className="text-center text-muted-foreground text-sm mb-3">
        Review these solutions carefully to understand the concepts better and improve your performance in future tests.
      </p>
      <div className="flex justify-center">
        <Button className="gap-2 bg-primary hover:bg-primary/90">
          <BookOpen className="w-4 h-4" />
          Practice Similar Questions
        </Button>
      </div>
    </div>
  );
};

export default AnswerKeyCTA;
