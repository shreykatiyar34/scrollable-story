import { RefreshCw, Play, ChevronRight } from "lucide-react";

interface ActionButtonProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const ActionButton = ({ icon, title, description, onClick }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-card rounded-xl p-4 border border-border flex items-center justify-between hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
          {icon}
        </div>
        <div className="text-left">
          <h4 className="text-foreground font-medium">{title}</h4>
          <p className="text-muted-foreground text-xs">{description}</p>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground" />
    </button>
  );
};

interface TestActionsProps {
  onRetake: () => void;
  onNext: () => void;
}

const TestActions = ({ onRetake, onNext }: TestActionsProps) => {
  return (
    <div className="space-y-3 mb-6">
      <ActionButton
        icon={<RefreshCw className="w-5 h-5 text-pink-400" />}
        title="Retake Test"
        description="Try again to improve"
        onClick={onRetake}
      />
      <ActionButton
        icon={<Play className="w-5 h-5 text-primary" />}
        title="Next Test"
        description="Continue learning"
        onClick={onNext}
      />
    </div>
  );
};

export default TestActions;
