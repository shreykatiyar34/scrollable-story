import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">
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
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-[var(--accent-color)]/20 via-[var(--accent-color)]/10 to-[var(--bg-secondary)] border border-[var(--accent-color)]/30 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--accent-color)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[var(--accent-color)]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
              Practice Smarter and Score Better
            </h2>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              With <span className="text-[var(--accent-color)]">Kyoorious.ai</span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
              Join students who started scoring better through consistent practice with Kyoorious.ai
            </p>
            <Button 
              onClick={() => navigate("/test")}
              className="bg-[var(--accent-color)] text-[var(--bg-primary)] hover:bg-[var(--accent-color)]/90 font-medium px-8 py-6 text-base"
            >
              Start Free Test
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
