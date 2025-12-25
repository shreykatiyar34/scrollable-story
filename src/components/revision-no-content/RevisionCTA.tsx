import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RevisionCTA = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      <div className="relative p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
        {/* Corner accent */}
        <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-[var(--accent-color)] rounded-tr-2xl" />
        
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 bg-[var(--accent-color)]/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-4 h-4 text-[var(--accent-color)]" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
              Ready to Start Revising?
            </h3>
            <p className="text-sm text-[var(--text-tertiary)] mb-4">
              Taking tests regularly and revising weak concepts leads to focused practice and better recall in exams. This improves your scores in exams.
            </p>
            <Button
              onClick={() => navigate("/test")}
              className="bg-[var(--accent-color)] text-[var(--bg-primary)] hover:bg-[var(--accent-color)]/90 font-medium px-6"
            >
              Take Your Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevisionCTA;
