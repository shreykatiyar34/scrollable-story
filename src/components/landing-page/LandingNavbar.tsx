import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingNavbar = () => {
  const navigate = useNavigate();
  return (
  <nav className="fixed top-0 left-0 right-0 z-100 bg-black border-none" style={{ fontFamily: 'poppins', boxShadow: '0 4px 16px 0 rgba(128,128,128,0.15)' }}>
      <div className="w-full flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center text-white text-2xl font-bold tracking-tight">
          <span>ky</span>
          <span className="inline-flex flex-col items-center mx-[-2px]">
            {/* Antenna */}
            <span className="inline-block w-2 h-2 rounded-full bg-lime-500 mb-[-2px] z-10"></span>
            
            {/* Robot body */}
            <span className="inline-flex items-center justify-center gap-1 bg-lime-500 rounded-lg px-2 py-1">
              {/* Left eye */}
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white">
                <span className="inline-block w-2 h-2.5 rounded-full bg-black"></span>
              </span>
              
              {/* Right eye */}
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white">
                <span className="inline-block w-2 h-2.5 rounded-full bg-black"></span>
              </span>
            </span>
          </span>
          <span>rious.ai</span>
        </div>

        {/* Navigation Links and Start Free Test Button */}
        <div className="flex items-center gap-8">
          <div className="flex gap-8 text-gray-300 text-base font-normal">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Stories</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="#" className="hover:text-white transition-colors font-semibold">Login</a>
          </div>
          <button
            onClick={() => navigate("/test")}
            className="bg-lime-400 text-black font-bold px-6 py-2 rounded-md hover:bg-lime-500 transition-colors text-base whitespace-nowrap"
          >
            Start Free Test
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;