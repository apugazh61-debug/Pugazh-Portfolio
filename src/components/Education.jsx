import React from 'react';
import { Award, Trophy, GraduationCap, MapPin, Calendar, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';

const certs = [
  { name: 'Full Stack Development Certification', issuer: 'Novi Tech R&D', code: 'CERT-NTRD-2024' },
  { name: 'Python Web Development Certification', issuer: 'Dev Technologies', code: 'CERT-DEV-2025' },
  { name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', code: 'FCC-JS-VERIFIED' },
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Skill Builder', code: 'AWS-CLOUD-2025' },
  { name: 'Intro to Machine Learning & Pipelines', issuer: 'Kaggle Learn', code: 'KAGGLE-ML-2025' },
];

const events = [
  { name: 'Microsoft AI Innovation Day', org: 'TechNexus Community, Microsoft Chennai', date: 'Oct 2025', badge: 'AI & Cloud', color: 'text-sky-400 bg-sky-500/10' },
  { name: 'Agentic AI Connect & Hack', org: 'Chennai AI Developer Community', date: 'Dec 2025', badge: 'GenAI & Agents', color: 'text-purple-400 bg-purple-500/10' },
  { name: 'National Hackathon Series', org: 'VIT College', date: 'Oct 2025', badge: 'Hackathon', color: 'text-teal-400 bg-teal-500/10' },
  { name: 'State Level Debugging Contest', org: 'K.S.R College of Engineering', date: 'Oct 2025', badge: 'Competition', color: 'text-amber-400 bg-amber-500/10' },
  { name: 'Inter-College Code Debugging', org: 'Bharathiyar Inst of Engg for Women', date: 'Apr 2025', badge: 'Competition', color: 'text-rose-400 bg-rose-500/10' },
  { name: 'Emerging Cybersecurity & Cloud', org: 'K.S.R College of Engineering', date: 'Sep 2024', badge: 'Workshop', color: 'text-emerald-400 bg-emerald-500/10' },
];

export default function Education() {
  return (
    <section id="certs" className="border-t border-theme-border pt-12 sm:pt-16 theme-transition">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <div className="font-mono text-xs text-theme-accent uppercase tracking-widest font-semibold mb-1.5 flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-theme-accent" />
            <span>Credentials &amp; Recognition</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-theme-text tracking-tight">
            Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-warm">Certifications</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-6">
        {/* Verified Certifications (Span 7) */}
        <div className="lg:col-span-7 glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-6 sm:p-7 theme-transition">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-theme-border/60">
            <div className="flex items-center gap-2 font-mono text-xs text-theme-accent uppercase tracking-wider font-semibold">
              <Award className="w-4 h-4" />
              <span>Verified Industry Certifications</span>
            </div>
            <span className="font-mono text-[11px] text-theme-muted">5 Badges</span>
          </div>

          <div className="space-y-3">
            {certs.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 rounded-xl bg-theme-surface-2/70 border border-theme-border/70 hover:border-theme-accent/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-theme-surface border border-theme-border text-theme-accent group-hover:scale-105 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs sm:text-sm font-bold text-theme-text group-hover:text-theme-accent transition-colors">
                      {cert.name}
                    </div>
                    <div className="text-[11px] text-theme-muted font-body mt-0.5">{cert.issuer}</div>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md font-semibold hidden sm:inline">
                  Verified
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Degree Card (Span 5) */}
        <div className="lg:col-span-5 glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-6 sm:p-7 theme-transition flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-theme-accent/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-theme-accent uppercase tracking-wider font-semibold mb-4 pb-3 border-b border-theme-border/60">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Engineering Degree</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-theme-text mb-1">
              Bachelor of Engineering (B.E)
            </h3>
            <div className="font-mono text-sm sm:text-base text-theme-accent font-semibold mb-4">
              Computer Science &amp; Engineering
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-theme-muted font-body mb-6">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-theme-surface-2/70 border border-theme-border/60">
                <MapPin className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-theme-text block">Gnanamani College of Technology</span>
                  <span className="text-[11px] text-theme-muted">Namakkal, Tamil Nadu, India</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-theme-surface-2/70 border border-theme-border/60">
                <Calendar className="w-4 h-4 text-theme-accent flex-shrink-0" />
                <div>
                  <span className="font-semibold text-theme-text block">Graduation Batch: 2023 – 2027</span>
                  <span className="text-[11px] text-emerald-400 font-mono">Final Year CSE Candidate</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-theme-surface-2 border border-theme-border flex items-center justify-between font-mono text-xs mt-auto">
            <div>
              <span className="text-theme-muted block text-[11px]">Cumulative Grade</span>
              <span className="text-theme-text font-bold">Academic CGPA</span>
            </div>
            <span className="font-mono font-extrabold text-base text-theme-accent bg-theme-accent/15 border border-theme-accent/30 px-3.5 py-1.5 rounded-xl">
              7.5 / 10.0
            </span>
          </div>
        </div>
      </div>

      {/* Hackathons, Contests & Tech Events */}
      <div className="glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-6 sm:p-7 theme-transition">
        <div className="flex items-center justify-between pb-3 mb-5 border-b border-theme-border/60">
          <div className="flex items-center gap-2 font-mono text-xs text-theme-accent uppercase tracking-wider font-semibold">
            <Trophy className="w-4 h-4" />
            <span>Hackathons, Contests &amp; Technical Summits</span>
          </div>
          <span className="font-mono text-[11px] text-theme-muted">6 Key Events</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-theme-surface-2/70 border border-theme-border/70 hover:border-theme-accent/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-white/5 ${ev.color}`}>
                    {ev.badge}
                  </span>
                  <span className="font-mono text-[10px] text-theme-muted">{ev.date}</span>
                </div>
                <div className="font-mono text-xs sm:text-sm font-bold text-theme-text group-hover:text-theme-accent transition-colors mb-1">
                  {ev.name}
                </div>
                <div className="text-[11px] text-theme-muted font-body">{ev.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

