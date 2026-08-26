import React, { useState } from 'react';
import { Award, Trophy, CheckCircle2, Sparkles, ExternalLink, ShieldCheck, Eye, X, FileText, CheckCircle, Calendar, Building2 } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

export default function Certifications() {
  const { data } = usePortfolioData();
  const certList = data.certifications || [];
  const competitions = data.competitions || [];

  const [selectedItem, setSelectedItem] = useState(null);

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
        <div className="neomorph-btn font-mono text-xs text-theme-muted px-3.5 py-1.5 rounded-xl flex items-center gap-2 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>9 Verified Credentials</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {/* Certifications Deck (5 Items) */}
        <div className="neomorph-card rounded-3xl p-5 sm:p-6 theme-transition flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-theme-border/60 font-mono text-xs text-theme-accent font-semibold">
              <div className="flex items-center gap-2">
                <div className="neomorph-btn p-1.5 rounded-xl text-theme-accent flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <span>Professional Certifications</span>
              </div>
              <span className="neomorph-inset font-mono text-[10px] text-theme-muted px-2.5 py-0.5 rounded-lg font-bold">5 Credentials</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {certList.map((c, idx) => (
                <div
                  key={idx}
                  className="neomorph-card p-3 sm:p-3.5 rounded-2xl flex items-center justify-between gap-3 group transition-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="neomorph-btn p-2 rounded-xl text-theme-accent flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-theme-text group-hover:text-theme-accent transition-colors block text-xs truncate">
                        {c.name}
                      </span>
                      <span className="text-[10px] text-theme-muted font-body block truncate">{c.issuer}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="neomorph-inset text-[9px] font-mono text-theme-accent px-2 py-1 rounded-xl hidden sm:inline-block font-semibold">
                      {c.tag}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedItem({ ...c, type: 'Certification' })}
                      className="neomorph-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-theme-accent text-[11px] font-bold transition-all cursor-pointer group-hover:border-theme-accent/60"
                      title="View Certificate Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hackathons & Competitions Deck (4 Items) */}
        <div className="neomorph-card rounded-3xl p-5 sm:p-6 theme-transition flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-theme-border/60 font-mono text-xs text-theme-accent-cyan font-semibold">
              <div className="flex items-center gap-2">
                <div className="neomorph-btn p-1.5 rounded-xl text-theme-accent-cyan flex items-center justify-center">
                  <Trophy className="w-4 h-4" />
                </div>
                <span>Hackathons &amp; Technical Summits</span>
              </div>
              <span className="neomorph-inset font-mono text-[10px] text-theme-muted px-2.5 py-0.5 rounded-lg font-bold">4 Summits</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {competitions.map((ev, idx) => (
                <div
                  key={idx}
                  className="neomorph-card p-3 sm:p-3.5 rounded-2xl flex items-center justify-between gap-3 group transition-all"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="neomorph-btn p-2 rounded-xl text-theme-accent-cyan flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-theme-text group-hover:text-theme-accent-cyan transition-colors text-xs truncate">
                        {ev.name}
                      </div>
                      <div className="text-[10px] text-theme-muted font-body mt-0.5 truncate">{ev.org}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`neomorph-inset text-[9px] font-mono font-bold px-2 py-1 rounded-xl hidden sm:inline-block ${ev.color}`}>
                      {ev.badge}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedItem({ ...ev, issuer: ev.org, tag: ev.badge, type: 'Hackathon / Summit' })}
                      className="neomorph-btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-theme-accent-cyan text-[11px] font-bold transition-all cursor-pointer group-hover:border-theme-accent-cyan/60"
                      title="View Summit Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate / Credential View Modal (Neomorphic Soft UI Dialog) */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg neomorph-card rounded-3xl p-6 sm:p-7 shadow-2xl border border-theme-border animate-scaleUp">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 neomorph-btn p-2.5 rounded-2xl text-theme-muted hover:text-theme-text transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Stamp */}
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-theme-border/60">
              <div className="neomorph-btn p-3 rounded-2xl text-theme-accent flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="neomorph-inset font-mono text-[10px] font-bold uppercase text-theme-accent px-2.5 py-0.5 rounded-lg">
                  {selectedItem.type}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-theme-text mt-1">
                  {selectedItem.name}
                </h3>
              </div>
            </div>

            {/* Modal Body / Credential Verification Card */}
            <div className="space-y-3.5 font-mono text-xs">
              <div className="neomorph-inset p-3.5 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-theme-muted">Issuing Organization:</span>
                  <span className="text-theme-text font-bold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-theme-accent" />
                    <span>{selectedItem.issuer}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-theme-muted">Credential Domain:</span>
                  <span className="text-theme-accent font-bold">{selectedItem.tag || selectedItem.badge}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-theme-muted">Verification Status:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>100% Authentic &amp; Verified</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-theme-muted">Candidate:</span>
                  <span className="text-theme-text font-bold">Pugazhenthi S (B.E CSE)</span>
                </div>
              </div>

              {/* Verified Badge Highlight Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-theme-accent/15 via-theme-accent-cyan/10 to-theme-accent-purple/15 border border-theme-accent/30 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-theme-accent flex-shrink-0" />
                <div className="text-[11px] font-body text-theme-text">
                  This credential is part of Pugazhenthi's verified academic &amp; technical achievements portfolio.
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="neomorph-btn px-5 py-2.5 rounded-2xl text-theme-muted hover:text-theme-text font-semibold cursor-pointer"
                >
                  Close
                </button>
                {selectedItem.link ? (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass-btn-primary px-5 py-2.5 rounded-2xl font-bold inline-flex items-center gap-2"
                  >
                    <span>Verify External Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="liquid-glass-btn-primary px-5 py-2.5 rounded-2xl font-bold inline-flex items-center gap-2 cursor-pointer"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Done</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
