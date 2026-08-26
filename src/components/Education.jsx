import React, { useState } from 'react';
import { GraduationCap, MapPin, Calendar, Award, Sparkles, CheckCircle2, TrendingUp, Star, ShieldCheck } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

export default function Education() {
  const { data } = usePortfolioData();
  const cgpaValue = data?.profile?.cgpa || '7.5';
  const [isTouched, setIsTouched] = useState(false);

  return (
    <section id="education" className="border-t border-theme-border pt-10 sm:pt-14 theme-transition">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-warm">Foundation</span>
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted font-body mt-0.5">
            Formal engineering degree, core computer science specialization, and academic track record.
          </p>
        </div>
        <div className="neomorph-btn font-mono text-xs text-theme-muted px-3.5 py-1.5 rounded-xl flex items-center gap-2 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse"></span>
          <span>B.E Computer Science</span>
        </div>
      </div>

      {/* Neomorphic Academic Card */}
      <div className="neomorph-card rounded-3xl p-5 sm:p-7 theme-transition relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-theme-accent/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* Left Column: Degree & Major (Span 7) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-theme-accent font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>Bachelor of Engineering (B.E)</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-theme-text">
              Computer Science &amp; Engineering
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-theme-muted">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-theme-accent" />
                <span className="text-theme-text font-medium">Gnanamani College of Technology</span>
                <span className="text-[11px] text-theme-muted">(Namakkal, TN)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                <span className="text-theme-text font-medium">Batch 2023 – 2027</span>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">Final Year</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive GPA Transformation Card (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-start lg:justify-end">
            <div
              onClick={() => setIsTouched((prev) => !prev)}
              onMouseEnter={() => setIsTouched(true)}
              onMouseLeave={() => setIsTouched(false)}
              className={`neomorph-card w-full sm:w-[280px] p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden group select-none ${
                isTouched ? 'ring-2 ring-theme-accent shadow-xl -translate-y-1' : ''
              }`}
              title="Click or hover to reveal score details"
            >
              {/* Glowing Background Splash on Touch/Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-theme-accent/15 via-theme-accent-cyan/10 to-theme-accent-purple/15 transition-opacity duration-300 pointer-events-none ${
                isTouched ? 'opacity-100' : 'opacity-0'
              }`} />

              {/* State 1: Default GPA View */}
              {!isTouched ? (
                <div className="relative z-10 flex items-center gap-4">
                  <div className="neomorph-btn p-3 rounded-2xl text-theme-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-theme-muted uppercase tracking-wider font-semibold flex items-center gap-1">
                      <span>Cumulative GPA</span>
                      <Sparkles className="w-3 h-3 text-theme-accent animate-pulse" />
                    </div>
                    <div className="font-display font-extrabold text-2xl text-theme-accent leading-tight mt-0.5">
                      {cgpaValue} <span className="text-xs font-mono text-theme-muted font-normal">/ 10.0</span>
                    </div>
                    <div className="text-[9px] font-mono text-theme-accent/80 mt-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-ping"></span>
                      <span>Tap to reveal details 👆</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* State 2: Interactive Transformed Detailed View on Touch/Hover */
                <div className="relative z-10 space-y-2.5 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] text-theme-accent font-bold">
                      <TrendingUp className="w-3.5 h-3.5 text-theme-accent" />
                      <span>Academic Performance</span>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.5 rounded font-bold">
                      First Class
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    <div className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-theme-accent-cyan">
                      75.0% <span className="text-[11px] font-mono text-theme-text font-semibold">Aggregate</span>
                    </div>
                    <div className="font-mono text-[11px] text-theme-muted">
                      ({cgpaValue} CGPA)
                    </div>
                  </div>

                  {/* Micro Progress Bar */}
                  <div className="neomorph-inset h-2 rounded-full overflow-hidden p-0.5">
                    <div
                      className="h-full bg-gradient-to-r from-theme-accent to-theme-accent-cyan rounded-full transition-all duration-700 shadow-sm"
                      style={{ width: '75%' }}
                    />
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[10px] font-mono text-theme-muted border-t border-theme-border/60">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <ShieldCheck className="w-3 h-3" />
                      <span>0 Standing Arrears</span>
                    </span>
                    <span className="text-theme-accent font-semibold">Top Tier</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


