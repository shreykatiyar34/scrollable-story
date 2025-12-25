import { FileText, Grid3X3, BookOpen, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Take a Test",
    description: "Complete a chapter test to assess your weak concepts",
    iconBg: "bg-[var(--accent-color)]/20",
    iconColor: "text-[var(--accent-color)]",
  },
  {
    number: 2,
    icon: Grid3X3,
    title: "Kyoori Analyzes Results",
    description: "Kyoori identifies your weak concepts",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    number: 3,
    icon: BookOpen,
    title: "Revise Weak Areas",
    description: "Get personalized revision sessions for only the concepts you need",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Improve & Repeat",
    description: "Take more tests to track progress and unlock new revision sessions",
    iconBg: "bg-[var(--accent-color)]/20",
    iconColor: "text-[var(--accent-color)]",
  },
];

const HowItWorksSteps = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
          How Kyoori Works
        </h3>
        <p className="text-sm text-[var(--text-tertiary)]">
          Your journey to personalized revision session in 4 simple steps
        </p>
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.number} className="relative">
            {/* Step number badge */}
            <div className="absolute -left-3 top-4 w-6 h-6 bg-[var(--accent-color)] rounded-full flex items-center justify-center text-xs font-bold text-[var(--bg-primary)] z-10">
              {step.number}
            </div>
            
            {/* Card */}
            <div className="ml-4 p-4 bg-[var(--bg-secondary)] border border-[var(--accent-color)]/30 rounded-xl">
              <div className={`w-10 h-10 ${step.iconBg} rounded-lg flex items-center justify-center mb-3`}>
                <step.icon className={`w-5 h-5 ${step.iconColor}`} />
              </div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                {step.title}
              </h4>
              <p className="text-xs text-[var(--text-tertiary)]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksSteps;
