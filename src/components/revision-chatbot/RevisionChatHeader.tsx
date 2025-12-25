import { Sun, RefreshCw } from "lucide-react";

const RevisionChatHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[var(--accent-color)] rounded-xl flex items-center justify-center">
          <div className="flex items-center gap-0.5">
            <div className="w-2 h-2 bg-[var(--bg-primary)] rounded-full" />
            <div className="w-2 h-2 bg-[var(--bg-primary)] rounded-full" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-[var(--accent-color)]">
          <RefreshCw className="w-4 h-4" />
          <span className="text-sm font-medium">Revise</span>
        </div>
      </div>
      <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[var(--bg-hover)] transition-colors">
        <Sun className="w-5 h-5 text-[var(--accent-color)]" />
      </button>
    </header>
  );
};

export default RevisionChatHeader;
