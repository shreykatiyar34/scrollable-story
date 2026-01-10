import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles, Focus, Target } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>
      ),
      title: "Clarity",
      description: "Know exactly which concepts you are weak at"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center">
          <Target className="w-5 h-5 text-blue-400" />
        </div>
      ),
      title: "Focus",
      description: "Stop wasting time. Fix only what matters to boost your score"
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500/20 to-lime-600/20 border border-lime-500/30 flex items-center justify-center">
          <svg className="w-5 h-5 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      ),
      title: "Confidence",
      description: "Enter crucial exams confident, with every gap covered"
    }
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 bg-black overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(132, 204, 22, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(132, 204, 22, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Radial gradient overlay for fade effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.8) 70%, black 100%)'
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-black/40 border border-lime-500/40 rounded-full px-5 py-2.5 mb-12 backdrop-blur-sm">
          <svg className="w-4 h-4 text-lime-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="text-gray-300 text-sm font-normal">Build for effective daily practice</span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight" style={{ lineHeight: '1.1' }}>
          Get Smart With
        </h1>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight" style={{ 
          background: 'linear-gradient(to right, #9dff00ff, #e9ffc8ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: '1.1'
        }}>
          Every Test
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          After you finish a chapter in school, take short exam focused tests on Kyoorious.ai to get instant feedback, your weak areas, and easy revisions
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <button
            onClick={() => navigate("/test")}
            className="bg-lime-400 text-black hover:bg-lime-500 font-semibold px-8 py-4 text-base rounded-full transition-all duration-200 flex items-center gap-2"
          >
            Start Free Test <span>→</span>
          </button>
          <button
            className="bg-transparent border-2 border-gray-700 text-white hover:bg-gray-900/50 px-8 py-4 text-base rounded-full transition-all duration-200"
          >
            View Demo
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-12 mb-20">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-lime-400 bg-black flex items-center justify-center text-lime-400 font-bold text-sm">U1</div>
              <div className="w-10 h-10 rounded-full border-2 border-lime-400 bg-black flex items-center justify-center text-lime-400 font-bold text-sm">U1</div>
              <div className="w-10 h-10 rounded-full border-2 border-lime-400 bg-black flex items-center justify-center text-lime-400 font-bold text-sm">U1</div>
              <div className="w-10 h-10 rounded-full border-2 border-lime-400 bg-black flex items-center justify-center text-lime-400 font-bold text-sm">U1</div>
            </div>
            <span className="text-gray-400 text-lg font-normal">500+ Students</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            <span className="text-gray-400 text-base font-light">80% Score Jump</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
            <span className="text-gray-400 text-base font-light">Better conceptual clarity</span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="border border-gray-800/50 rounded-2xl p-8 text-left backdrop-blur-md hover:border-gray-700/50 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #131414ff 0%, #000000ff 100%)' }}
            >
              {feature.icon}
              <h3 className="text-white text-xl font-semibold mt-6 mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;