
import image from "@/assets/image.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingNavbar = () => {
  const navigate = useNavigate();
  return (
  <nav className="fixed top-0 left-0 right-0 z-100 bg-black border-none" style={{ fontFamily: 'poppins', boxShadow: '0 4px 16px 0 rgba(128,128,128,0.15)' }}>
      <div className="w-full flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center text-white text-2xl font-bold tracking-tight">
          <span style={{ marginRight: 1 }}>ky</span>
          <img
            src={image}
            alt="logo"
            style={{ width: 32, height: 32, margin: "0 2px" }}
          />
          <span style={{ marginLeft: 1 }}>rious.ai</span>
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
            style={{ fontFamily: 'Unbounded, sans-serif' }}
          >
            Start Free Test
          </button>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;