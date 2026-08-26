import React from 'react';
import { Quote, Star, Building2 } from 'lucide-react';

const testimonials = [
  {
    quote: "Pugazhenthi is a highly motivated and dedicated intern who consistently delivers quality work. His grasp of application development and AI technologies is impressive for someone at his stage.",
    name: 'Mr. Gokul M',
    title: 'Mentor & Reporting Manager',
    company: 'Blaze Wings Technology Pvt Ltd',
    initials: 'GM',
    color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    stars: 5,
  },
  {
    quote: "A sharp problem-solver who integrated complex frontend requirements with backend services seamlessly. He brings both technical depth and a professional attitude to every task.",
    name: 'Dev Technology Solutions',
    title: 'Supervisor',
    company: 'Dev Technology Solutions',
    initials: 'DT',
    color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-theme-border pt-10 sm:pt-14 theme-transition">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-warm">Mentors Say</span>
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted font-body mt-0.5">
            Recommendations from managers and mentors I've worked with.
          </p>
        </div>
        <div className="font-mono text-xs text-theme-muted bg-theme-surface-2/80 px-3 py-1.5 rounded-xl border border-theme-border flex items-center gap-2 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span>Professional References</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="glass-card bg-theme-surface border border-theme-border rounded-2xl p-5 sm:p-6 theme-transition hover:border-theme-accent/40 group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-theme-accent/5 rounded-full blur-2xl pointer-events-none"></div>

            {/* Stars */}
            <div className="flex items-center gap-0.5 mb-4">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <div className="relative mb-5">
              <Quote className="w-6 h-6 text-theme-accent/30 absolute -top-1 -left-1" />
              <p className="font-body text-theme-muted text-sm leading-relaxed pl-5 italic">
                "{t.quote}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-theme-border/60">
              <div className={`w-10 h-10 rounded-xl border font-mono text-sm font-bold flex items-center justify-center flex-shrink-0 ${t.color}`}>
                {t.initials}
              </div>
              <div>
                <div className="font-display font-bold text-sm text-theme-text">{t.name}</div>
                <div className="font-mono text-[10px] text-theme-muted flex items-center gap-1.5 mt-0.5">
                  <Building2 className="w-3 h-3" />
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
