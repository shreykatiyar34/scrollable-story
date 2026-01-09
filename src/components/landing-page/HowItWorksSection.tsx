import { BookOpen, Brain, Zap, TrendingUp } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Test",
      description: "Take a short chapter wise test",
      color: "text-pink-400",
      bgColor: "bg-black",
      borderColor: "border-gray-700"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Diagnose",
      description: "kyoori instantly identifies your weak concepts",
      color: "text-lime-400",
      bgColor: "bg-black",
      borderColor: "border-gray-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Revise",
      description: "Get simple explanations with targeted practice",
      color: "text-yellow-400",
      bgColor: "bg-black",
      borderColor: "border-gray-700"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Progress",
      description: "Track progress and build chapter mastery",
      color: "text-purple-400",
      bgColor: "bg-black",
      borderColor: "border-gray-700"
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-black overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(132, 204, 22, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(132, 204, 22, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 0
        }}
      />
      
      {/* Radial gradient overlay for fade effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.8) 70%, black 100%)',
          zIndex: 1
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How it Works
          </h2>
          <p className="text-gray-400 text-lg font-light">
            From chapter learning to chapter mastery in 4 simple steps
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[1px]" 
               style={{
                 background: 'linear-gradient(to right, rgba(244, 114, 182, 0.3) 0%, rgba(163, 230, 53, 0.3) 33%, rgba(250, 204, 21, 0.3) 66%, rgba(167, 139, 250, 0.3) 100%)'
               }}
          />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className={`w-24 h-24 rounded-2xl ${step.bgColor} border ${step.borderColor} ${step.color} flex items-center justify-center mx-auto mb-6 backdrop-blur-sm`}>
                  {step.icon}
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;