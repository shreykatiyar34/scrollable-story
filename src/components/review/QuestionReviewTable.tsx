import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, XCircle, ChevronDown, ChevronUp, Lightbulb, FileText } from "lucide-react";

interface Question {
  id: string;
  type: string;
  totalMarks: number;
  yourMarks: number;
  status: "correct" | "partial" | "wrong";
  remarks: string;
  detailedFeedback: string;
  improvementTip: string;
}

interface QuestionReviewTableProps {
  questions: Question[];
}

const StatusBadge = ({ status }: { status: "correct" | "partial" | "wrong" }) => {
  const config = {
    correct: { icon: CheckCircle, text: "Correct", className: "bg-primary/20 text-primary" },
    partial: { icon: AlertCircle, text: "Partial", className: "bg-amber-500/20 text-amber-500" },
    wrong: { icon: XCircle, text: "Wrong", className: "bg-destructive/20 text-destructive" },
  };
  const { icon: Icon, text, className } = config[status];
  return (
    <Badge className={`${className} border-0 gap-1`}>
      <Icon className="w-3 h-3" />
      {text}
    </Badge>
  );
};

const QuestionReviewTable = ({ questions }: QuestionReviewTableProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(questions[0]?.id || null);

  return (
    <div className="bg-card rounded-xl border border-border mb-4 overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-border text-xs text-muted-foreground uppercase font-semibold">
        <div className="col-span-2">Question</div>
        <div className="col-span-2 text-center">Total Marks</div>
        <div className="col-span-2 text-center">Your Marks</div>
        <div className="col-span-2 text-center">Status</div>
        <div className="col-span-4">Remarks</div>
      </div>

      {/* Rows */}
      {questions.map((q) => (
        <div key={q.id} className="border-b border-border last:border-0">
          <div
            className="grid grid-cols-12 gap-2 px-4 py-3 items-center cursor-pointer hover:bg-muted/30 transition-colors"
            onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
          >
            <div className="col-span-2 flex items-center gap-2">
              <span className="bg-muted rounded px-2 py-1 text-xs font-semibold text-foreground">{q.id}</span>
              <span className="text-muted-foreground text-xs">{q.type}</span>
            </div>
            <div className="col-span-2 text-center text-foreground">{q.totalMarks}</div>
            <div className="col-span-2 text-center text-foreground">{q.yourMarks}</div>
            <div className="col-span-2 text-center">
              <StatusBadge status={q.status} />
            </div>
            <div className="col-span-3 text-muted-foreground text-sm truncate">{q.remarks}</div>
            <div className="col-span-1 flex justify-end">
              {expandedId === q.id ? (
                <ChevronUp className="w-4 h-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
          </div>

          {/* Expanded Content */}
          {expandedId === q.id && (
            <div className="px-4 pb-4 space-y-3">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-semibold text-sm">Detailed Feedback</span>
                </div>
                <p className="text-muted-foreground text-sm">{q.detailedFeedback}</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span className="text-foreground font-semibold text-sm">Improvement Tip</span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{q.improvementTip}</p>
                <Button size="sm" className="bg-primary text-primary-foreground">
                  ✎ Practice Similar
                </Button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionReviewTable;
