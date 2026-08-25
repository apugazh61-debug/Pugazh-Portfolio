import React from 'react';
import { GraduationCap, MapPin, Calendar, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Education() {
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
        <div className="font-mono text-xs text-theme-muted bg-theme-surface-2/80 px-3 py-1.5 rounded-xl border border-theme-border flex items-center gap-2 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse"></span>
          <span>B.E Computer Science</span>
        </div>
      </div>

      {/* Compact Smart Academic Card */}
      <div className="glass-card bg-theme-surface border border-theme-border rounded-2xl p-5 sm:p-6 theme-transition relative overflow-hidden">
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
                <span className="text-theme-text">Gnanamani College of Technology</span>
                <span className="text-[11px] text-theme-muted">(Namakkal, TN)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                <span className="text-theme-text">Batch 2023 – 2027</span>
                <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Final Year</span>
              </div>
            </div>
          </div>

          {/* Right Column: CGPA Metric Card (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-start lg:justify-end">
            <div className="p-4 rounded-xl bg-theme-surface-2/90 border border-theme-border flex items-center gap-4 w-full sm:w-auto">
              <div className="p-3 rounded-xl bg-theme-surface border border-theme-border text-theme-accent">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-theme-muted uppercase tracking-wider">Cumulative GPA</div>
                <div className="font-display font-extrabold text-2xl text-theme-accent">
                  7.5 <span className="text-xs font-mono text-theme-muted font-normal">/ 10.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


