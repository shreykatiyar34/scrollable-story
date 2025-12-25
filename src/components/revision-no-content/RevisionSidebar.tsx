import { CircleDot, PenLine, LayoutList } from "lucide-react";

const RevisionSidebar = () => {
  const navItems = [
    { icon: CircleDot, active: false },
    { icon: PenLine, active: true },
    { icon: LayoutList, active: false },
  ];

  return (
    <aside className="w-14 flex flex-col items-center py-4 gap-2">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
            item.active
              ? "bg-[var(--accent-color)] text-[var(--bg-primary)]"
              : "text-[var(--text-tertiary)] hover:bg-[var(--bg-hover)]"
          }`}
        >
          <item.icon className="w-5 h-5" />
        </button>
      ))}
    </aside>
  );
};

export default RevisionSidebar;
