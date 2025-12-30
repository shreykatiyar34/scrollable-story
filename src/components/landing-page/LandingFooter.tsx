import { Instagram, Youtube } from "lucide-react";

const LandingFooter = () => {
  return (
    <footer className="py-8 px-6 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
            <span>Follow us</span>
            <a href="#" className="w-8 h-8 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center hover:bg-[var(--bg-tertiary)] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center hover:bg-[var(--bg-tertiary)] transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[var(--text-secondary)] text-xs text-center">
            © Copyright 2024. All Rights Reserved By Ishi Enterprises Pvt. Ltd (Reg. Wise Education)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
