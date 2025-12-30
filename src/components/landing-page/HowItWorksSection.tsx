import { FileText, Search, Sparkles, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Test",
      description: "Take a short chapter-wise test",
      color: "text-red-400",
      bgColor: "bg-red-400/20"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Diagnose",
      description: "Kyoori instantly identifies your weak concepts",
      color: "text-[var(--accent-color)]",
      bgColor: "bg-[var(--accent-color)]/20"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Revise",
      description: "Get simple explanations with targeted practice",
      color: "text-[var(--accent-color)]",
      bgColor: "bg-[var(--accent-color)]/20"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Improve",
      description: "Track progress and build chapter mastery",
      color: "text-[var(--text-primary)]",
      bgColor: "bg-[var(--bg-tertiary)]"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            How it Works
          </h2>
          <p className="text-[var(--text-secondary)]">
            From chapter learning to chapter mastery in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-14 h-14 rounded-xl ${step.bgColor} ${step.color} flex items-center justify-center mx-auto mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-[var(--text-primary)] font-semibold mb-2">{step.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Connecting line */}
        <div className="hidden md:block relative mt-[-120px] mb-20">
          <div className="absolute top-7 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-red-400 via-[var(--accent-color)] to-[var(--bg-tertiary)]" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
