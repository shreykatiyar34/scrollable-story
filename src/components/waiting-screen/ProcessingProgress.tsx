import { CheckCircle, Bot, Target, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type StepStatus = "completed" | "in-progress" | "pending";

interface ProcessingStep {
  id: string;
  label: string;
  status: StepStatus;
  icon: React.ReactNode;
}

interface ProcessingProgressProps {
  progress: number;
  steps: ProcessingStep[];
}

const ProcessingProgress = ({ progress, steps }: ProcessingProgressProps) => {
  const getStepStyles = (status: StepStatus) => {
    switch (status) {
      case "completed":
        return "bg-primary/20 border-primary text-primary";
      case "in-progress":
        return "bg-purple-500/20 border-purple-500 text-purple-400";
      case "pending":
        return "bg-muted border-border text-muted-foreground";
    }
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-primary/30 mb-6">
      {/* Progress header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-muted-foreground text-sm">Processing Progress</span>
        <span className="text-primary font-bold">{progress}%</span>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <Progress value={progress} className="h-2" />
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center justify-between p-3 rounded-lg border ${getStepStyles(step.status)}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-background/20 flex items-center justify-center">
                {step.icon}
              </div>
              <span className="text-sm font-medium">{step.label}</span>
            </div>
            {step.status === "completed" && (
              <CheckCircle className="w-5 h-5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessingProgress;
