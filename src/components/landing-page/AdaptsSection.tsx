               

import React, { useState } from "react";
import { BookOpen } from "lucide-react";

const AdaptsSection = () => {
  const [selectedMode, setSelectedMode] = useState<'learning' | 'exam'>('learning');
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
                {/* Learning Mode Card */}
                <div
                  className="border-2 rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                  style={selectedMode === 'learning'
                    ? { backgroundColor: 'rgba(12, 12, 12, 0.6)', borderColor: '#414141ff' }
                    : { backgroundColor: 'rgba(45, 45, 45, 0.4)', borderColor: '#313131ff' }
                  }
                  onClick={() => setSelectedMode('learning')}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center"
                      style={selectedMode === 'learning'
                        ? { borderColor: '#a3e635', backgroundColor: '#a3e635' }
                        : { borderColor: '#4b5563', backgroundColor: '#4b5563' }
                      }
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#000' }}></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#fff' }}>Learning Mode</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
                        Prepare for periodic exams with chapter-wise mastery
                      </p>
                    </div>
                  </div>
                </div>

                {/* Exam Mode Card */}
                <div
                  className="border-2 rounded-2xl p-6 transition-all duration-300 cursor-pointer"
                  style={selectedMode === 'exam'
                    ? { backgroundColor: 'rgba(12, 12, 12, 0.6)', borderColor: '#414141ff' }
                    : { backgroundColor: 'rgba(45, 45, 45, 0.4)', borderColor: '#313131ff' }
                  }
                  onClick={() => setSelectedMode('exam')}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-5 h-5 rounded-full border-2 mt-1 flex items-center justify-center"
                      style={selectedMode === 'exam'
                        ? { borderColor: '#a3e635', backgroundColor: '#a3e635' }
                        : { borderColor: '#4b5563', backgroundColor: '#4b5563' }
                      }
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#000' }}></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2" style={{ color: '#fff' }}>Exam Mode</h4>
                      <p className="text-sm leading-relaxed" style={{ color: '#9ca3af' }}>
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
                <div
                  className="rounded-t-2xl border p-3 flex items-center gap-2"
                  style={{ backgroundColor: '#060606', borderColor: '#3c4045' }}
                >
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#323334' }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#323334' }}></div>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#323334' }}></div>
                  </div>
                  <div className="flex-1 ml-4">
                    <div
                        className="rounded px-4 py-1 text-xs"
                        style={{ backgroundColor: '#1f2123', color: '#fff' }}
                    >
                      dashboard
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div
                  className="border-x border-b border-gray-800 rounded-b-2xl p-8"
                  style={{ background: 'linear-gradient(135deg, #050505ff 0%, #171717ff 100%)' }}
                >                  {/* Book Icon Circle */}
                  <div className="flex justify-center mb-8">
                    <div
                      className="w-32 h-32 rounded-full border-2 flex items-center justify-center"
                      style={{ borderColor: '#303234ff' /* gray-700 */, backgroundColor: 'transparent' }}
                    >
                      <BookOpen className="w-12 h-12" strokeWidth={2} style={{ color: '#a3e635' /* lime-400 */ }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-center text-xl font-semibold mb-6"
                    style={{ color: '#fff' }}
                  >
                    Surface Area and<br />Volumes
                  </h3>

                  {/* Status and Time */}
                  <div className="flex items-center justify-center gap-4 mb-6 text-sm">
                    <span
                      className="px-3 py-1 rounded-full font-medium"
                      style={{ color: '#2dd4bf', backgroundColor: 'rgba(45, 212, 191, 0.125)' }}
                    >
                      Conceptual
                    </span>
                    <span style={{ color: '#9ca3af' /* gray-400 */ }}>15 min remaining</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: '#1f2937' /* gray-800 */ }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: '75%',
                          background: 'linear-gradient(to right, #fb923c, #fbbf24)'
                        }}
                      />
                    </div>
                    <div className="text-center text-sm" style={{ color: '#6b7280' /* gray-500 */ }}>
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