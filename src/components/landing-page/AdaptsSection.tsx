import { BookOpen } from "lucide-react";

const AdaptsSection = () => {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden" style={{ fontFamily: 'Unbounded, sans-serif' }}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(132, 204, 22, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(132, 204, 22, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 0
        }}
      />
      {/* Radial gradient overlay for fade effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, rgba(0, 0, 0, 0.8) 70%, black 100%)',
          zIndex: 1
        }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
  <div className="border border-gray-800/50 rounded-3xl p-12 backdrop-blur-sm" style={{ background: 'radial-gradient(circle at center, transparent 20%, rgba(17, 17, 17, 0.8) 70%, black 100%)' }}>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Adapts to Your<br />Goal
              </h2>
              <p className="text-gray-400 text-base mb-10 leading-relaxed">
                Kyoorious.ai adapts based on whether you're strengthening a specific chapter or preparing for the full syllabus
              </p>

              {/* Mode Cards */}
              <div className="space-y-4">
                {/* Learning Mode - Active */}
                <div className="bg-gray-900/60 border-2 border-gray-900 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-lime-400 bg-lime-400 mt-1 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-black"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-xl font-semibold mb-2">Learning Mode</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Prepare for periodic exams with chapter-wise mastery
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exam Mode - Inactive */}
                <div className="bg-gray-900/40 border-2 border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-600 mt-1"></div>
                    <div className="flex-1">
                      <h4 className="text-white text-xl font-semibold mb-2">Exam Mode</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Prepare for final exams with full-syllabus practice, speed, and confidence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Browser/Phone Mockup */}
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                {/* Browser chrome */}
                <div className="bg-gray-900 rounded-t-2xl border border-gray-800 p-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-gray-800 rounded px-4 py-1 text-gray-500 text-xs">
                      dashboard
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="bg-black border-x border-b border-gray-800 rounded-b-2xl p-8">
                  {/* Book Icon Circle */}
                  <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full border-2 border-gray-700 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-lime-400" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white text-center text-xl font-semibold mb-6">
                    Surface Area and<br />Volumes
                  </h3>
                  
                  {/* Status and Time */}
                  <div className="flex items-center justify-center gap-4 mb-6 text-sm">
                    <span className="text-teal-400 bg-teal-400/20 px-3 py-1 rounded-full font-medium">
                      Conceptual
                    </span>
                    <span className="text-gray-400">15 min remaining</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full"
                        style={{
                          width: '75%',
                          background: 'linear-gradient(to right, #fb923c, #fbbf24)'
                        }}
                      />
                    </div>
                    <div className="text-center text-gray-500 text-sm">
                      Mastery: 75%
                    </div>
                  </div>
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