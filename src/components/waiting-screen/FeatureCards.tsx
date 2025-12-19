import { Bot, Target, Map } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  label: string;
  title: string;
}

const FeatureCard = ({ icon, label, title }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border flex flex-col items-center text-center">
      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3">
        {icon}
      </div>
      <span className="text-muted-foreground text-xs mb-1">{label}</span>
      <span className="text-foreground font-semibold text-sm">{title}</span>
    </div>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: <Bot className="w-5 h-5 text-muted-foreground" />,
      label: "AI-Powered",
      title: "Analysis",
    },
    {
      icon: <Target className="w-5 h-5 text-pink-400" />,
      label: "Personalized",
      title: "Feedback",
    },
    {
      icon: <Map className="w-5 h-5 text-primary" />,
      label: "Improvement",
      title: "Roadmap",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeatureCards;
