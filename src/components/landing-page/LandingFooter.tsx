import { Instagram } from "lucide-react";

const LandingFooter = () => {
  return (
    <footer className="pt-12 pb-4 px-6 bg-[#0b0e08]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Social Links */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gray-300 text-lg font-normal">Follow us:</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-8 h-8 rounded" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-8 h-8 rounded-full" />
            </a>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full border-t border-gray-700 mb-4" />
        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center">
          © Copyright 2026, All Rights Reserved by Futuristic Pedagogy Solutions Private Limited
        </p>
      </div>
    </footer>
  );
};

export default LandingFooter;
