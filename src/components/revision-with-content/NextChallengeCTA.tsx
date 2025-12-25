import { CheckCircle, Play } from "lucide-react";

const NextChallengeCTA = () => {
  return (
    <div className="mt-10 p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-8 h-8 bg-[var(--accent-color)]/20 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-4 h-4 text-[var(--accent-color)]" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
            Ready for new challenge?
          </h3>
          <p className="text-sm text-[var(--text-tertiary)]">
            I've revised my weak concepts and mistakes and would like to take the next test now
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="flex items-center gap-3 px-6 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-xl hover:bg-[var(--bg-hover)] transition-colors">
          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <Play className="w-5 h-5 text-purple-400 fill-current" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-[var(--text-primary)]">Next Test</p>
            <p className="text-xs text-[var(--text-tertiary)]">Continue Learning</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NextChallengeCTA;
