import { AlertCircle } from "lucide-react";

interface StatItem {
  label: string;
  value: number;
  color: string;
}

interface StatsCardsProps {
  stats: StatItem[];
}

const StatsCards = ({ stats }: StatsCardsProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className={`w-4 h-4 ${stat.color}`} />
            <span className={`text-sm ${stat.color}`}>{stat.label}</span>
          </div>
          <p className="text-2xl font-bold text-[var(--text-primary)]">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
