import { BookOpen, GraduationCap, ChevronRight } from "lucide-react";

const AdaptsSection = () => {
  return (
    <section className="py-20 px-6 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Adapts to Your<br />Goal
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Kyoorious.ai adapts based on whether you're strengthening a specific chapter or preparing for the full syllabus
            </p>

            {/* Mode Cards */}
            <div className="space-y-4">
              <div className="bg-[var(--bg-primary)] border border-[var(--accent-color)] rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-color)]/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[var(--accent-color)]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[var(--text-primary)] font-medium">Learning Mode</h4>
                  <p className="text-[var(--text-secondary)] text-sm">Prepare for particular chapters with chapter-wise mastery</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[var(--text-secondary)]" />
              </div>

              <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[var(--text-secondary)]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[var(--text-primary)] font-medium">Exam Mode</h4>
                  <p className="text-[var(--text-secondary)] text-sm">Prepare for final exams with full syllabus coverage equally across and entire exams</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[var(--text-secondary)]" />
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center">
            <div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-3xl p-6 w-72 shadow-2xl">
              <div className="bg-[var(--bg-secondary)] rounded-2xl p-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-color)]/20 flex items-center justify-center mb-3">
                  <div className="w-6 h-6 border-2 border-[var(--accent-color)] rounded" />
                </div>
                <h4 className="text-[var(--text-primary)] font-medium mb-1">Surface Area and Volume</h4>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[var(--accent-color)] bg-[var(--accent-color)]/20 px-2 py-0.5 rounded">Unlocked</span>
                  <span className="text-[var(--text-secondary)]">15 new questions</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">Mastery</span>
                  <span className="text-[var(--accent-color)]">78%</span>
                </div>
                <div className="h-2 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-[var(--accent-color)] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaptsSection;
