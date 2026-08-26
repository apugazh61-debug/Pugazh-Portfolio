import React from 'react';
import { Award, Trophy, CheckCircle2, Sparkles, ExternalLink, ShieldCheck } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

export default function Certifications() {
  const { data } = usePortfolioData();
  const certList = data.certifications || [];
  const competitions = data.competitions || [];
  return (
    <section id="certifications" className="border-t border-theme-border pt-10 sm:pt-14 theme-transition">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-warm">Certifications &amp; Hackathons</span>
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted font-body mt-0.5">
            Industry accreditations, technical competitions, and developer summits.
          </p>
        </div>
        <div className="font-mono text-xs text-theme-muted bg-theme-surface-2/80 px-3 py-1.5 rounded-xl border border-theme-border flex items-center gap-2 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Verified Credentials</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        {/* Certifications Deck */}
        <div className="glass-card bg-theme-surface border border-theme-border rounded-2xl p-5 theme-transition">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-theme-border/60 font-mono text-xs text-theme-accent font-semibold">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Professional Certifications</span>
            </div>
            <span className="text-[10px] text-theme-muted">5 Badges</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {certList.map((c, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-theme-surface-2/80 border border-theme-border/80 hover:border-theme-accent/50 transition-all flex items-center justify-between gap-2 group"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-theme-accent flex-shrink-0" />
                  <div>
                    <span className="font-bold text-theme-text group-hover:text-theme-accent transition-colors block text-xs">
                      {c.name}
                    </span>
                    <span className="text-[10px] text-theme-muted font-body">{c.issuer}</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-theme-accent bg-theme-surface px-2 py-0.5 rounded border border-theme-border flex-shrink-0">
                  {c.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathons & Competitions Deck */}
        <div className="glass-card bg-theme-surface border border-theme-border rounded-2xl p-5 theme-transition">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-theme-border/60 font-mono text-xs text-theme-accent-cyan font-semibold">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>Hackathons &amp; Technical Summits</span>
            </div>
            <span className="text-[10px] text-theme-muted">Key Summits</span>
          </div>

          <div className="space-y-2 font-mono text-xs">
            {competitions.map((ev, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-theme-surface-2/80 border border-theme-border/80 hover:border-theme-accent-cyan/50 transition-all flex items-center justify-between gap-2 group"
              >
                <div>
                  <div className="font-bold text-theme-text group-hover:text-theme-accent-cyan transition-colors text-xs">
                    {ev.name}
                  </div>
                  <div className="text-[10px] text-theme-muted font-body mt-0.5">{ev.org}</div>
                </div>
                <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border border-white/5 flex-shrink-0 ${ev.color}`}>
                  {ev.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
