import { CheckCircle, XCircle, Target, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => {
  return (
    <div className="bg-card rounded-xl p-4 border border-border">
      <div className="mb-2">{icon}</div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-muted-foreground text-xs">{label}</div>
    </div>
  );
};

interface StatsGridProps {
  correctAnswers: number;
  incorrectAnswers: number;
  accuracyRate: number;
  grade: string;
}

const StatsGrid = ({ correctAnswers, incorrectAnswers, accuracyRate, grade }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      <StatItem
        icon={<CheckCircle className="w-5 h-5 text-primary" />}
        value={correctAnswers}
        label="Correct Answers"
      />
      <StatItem
        icon={<XCircle className="w-5 h-5 text-destructive" />}
        value={incorrectAnswers}
        label="Incorrect Answers"
      />
      <StatItem
        icon={<Target className="w-5 h-5 text-amber-500" />}
        value={`${accuracyRate}%`}
        label="Accuracy Rate"
      />
      <StatItem
        icon={<Award className="w-5 h-5 text-primary" />}
        value={grade}
        label="Grade"
      />
    </div>
  );
};

export default StatsGrid;
