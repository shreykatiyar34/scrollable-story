import { Lock, Sparkles, Zap } from "lucide-react";

const LockIcon = () => {
  return (
    <div className="relative flex items-center justify-center mb-6">
      {/* Sparkle decorations */}
      <Sparkles className="absolute -top-2 -left-8 w-5 h-5 text-[var(--accent-color)]" />
      <Sparkles className="absolute -top-2 right-[-32px] w-5 h-5 text-[#ff6b6b]" />
      
      {/* Main lock container */}
      <div className="w-24 h-24 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl flex items-center justify-center">
        <Lock className="w-10 h-10 text-[var(--text-tertiary)]" />
      </div>
      
      {/* Zap icon */}
      <div className="absolute -bottom-3 right-[-8px] w-8 h-8 bg-[var(--accent-color)] rounded-full flex items-center justify-center">
        <Zap className="w-4 h-4 text-[var(--bg-primary)] fill-current" />
      </div>
    </div>
  );
};

export default LockIcon;
