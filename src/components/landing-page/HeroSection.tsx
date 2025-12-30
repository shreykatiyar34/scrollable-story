import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, TrendingUp, Target } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <div className="w-10 h-10 rounded-lg bg-[var(--accent-color)]/20 flex items-center justify-center"><div className="w-4 h-4 bg-[var(--accent-color)] rounded-sm" /></div>,
      title: "Clarity",
      description: "It's very exactly which concept you are weak on"
    },
    {
      icon: <div className="w-10 h-10 rounded-lg bg-[var(--accent-color)]/20 flex items-center justify-center"><div className="w-4 h-4 bg-[var(--accent-color)] rounded-full" /></div>,
      title: "Focus",
      description: "Stop wasting time, this only what it takes to boost your score"
    },
    {
      icon: <div className="w-10 h-10 rounded-lg bg-[var(--accent-color)]/20 flex items-center justify-center"><Target className="w-4 h-4 text-[var(--accent-color)]" /></div>,
      title: "Confidence",
      description: "Show up to exams confident with every gap covered"
    }
  ];

  return (
    <section className="pt-32 pb-20 px-6 bg-[var(--bg-primary)]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full px-4 py-2 mb-8">
          <span className="text-[var(--accent-color)]">⚡</span>
          <span className="text-[var(--text-secondary)] text-sm">Built for today's daily practice</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
          Get Smart With
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--accent-color)] mb-6">
          Every Test
        </h1>

        {/* Subtext */}
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto mb-8">
          After you finish a chapter in school, take short exam-focused tests on kyoorious.ai to get instant feedback, your weak areas, and easy revisions
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <Button 
            onClick={() => navigate("/test")}
            className="bg-[var(--accent-color)] text-[var(--bg-primary)] hover:bg-[var(--accent-color)]/90 font-medium px-6 py-6 text-base"
          >
            Start Free Test →
          </Button>
          <Button 
            variant="outline"
            className="bg-transparent border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] px-6 py-6 text-base"
          >
            View Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-xs">⭐</div>
            </div>
            <span className="text-[var(--text-secondary)] text-sm">6000+ students</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[var(--accent-color)]" />
            <span className="text-[var(--text-secondary)] text-sm">30% Score Jump</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[var(--accent-color)]" />
            <span className="text-[var(--text-secondary)] text-sm">Better data/spot clarity</span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl p-6 text-left"
            >
              {feature.icon}
              <h3 className="text-[var(--text-primary)] font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
