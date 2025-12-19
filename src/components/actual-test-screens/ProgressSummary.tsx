import { CheckCircle, Flag, Circle } from "lucide-react";

interface ProgressSummaryProps {
  answered: number;
  forReview: number;
  unanswered: number;
}

const ProgressSummary = ({ answered, forReview, unanswered }: ProgressSummaryProps) => {
  const items = [
    {
      icon: <CheckCircle className="w-4 h-4" />,
      label: "Answered",
      count: answered,
      bgColor: "bg-primary/20",
      textColor: "text-primary",
    },
    {
      icon: <Flag className="w-4 h-4" />,
      label: "For Review",
      count: forReview,
      bgColor: "bg-amber-500/20",
      textColor: "text-amber-500",
    },
    {
      icon: <Circle className="w-4 h-4" />,
      label: "Unanswered",
      count: unanswered,
      bgColor: "bg-muted",
      textColor: "text-muted-foreground",
    },
  ];

  return (
    <div className="bg-card rounded-xl p-4 border border-border">
      <h3 className="text-foreground font-semibold mb-3">Progress Summary</h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} rounded-lg px-4 py-2.5 flex items-center justify-between`}
          >
            <div className={`flex items-center gap-2 ${item.textColor}`}>
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </div>
            <span className={`font-semibold ${item.textColor}`}>{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressSummary;
