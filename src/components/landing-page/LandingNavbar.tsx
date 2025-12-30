import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-[var(--accent-color)] font-bold text-xl tracking-tight">
          kyoorious<span className="text-[var(--text-primary)]">.ai</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
            How it Works
          </a>
          <a href="#testimonials" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
            Stories
          </a>
          <a href="#faq" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
            FAQ
          </a>
          <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">
            Login
          </a>
        </div>

        <Button 
          onClick={() => navigate("/test")}
          className="bg-[var(--accent-color)] text-[var(--bg-primary)] hover:bg-[var(--accent-color)]/90 font-medium px-5"
        >
          Start Test
        </Button>
      </div>
    </nav>
  );
};

export default LandingNavbar;
