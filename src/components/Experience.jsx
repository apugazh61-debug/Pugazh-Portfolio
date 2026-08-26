import React, { useState } from 'react';
import { Building2, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: 'App Dev & AI Development Intern',
    company: 'Blaze Wings Technology Pvt Ltd',
    location: 'Office Premises',
    period: 'Jul 2026 – Dec 2026',
    type: 'Corporate',
    color: 'bg-teal-400',
    badge: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    achievements: [
      'Gaining hands-on exposure in application development and artificial intelligence technologies in a production team environment.',
      'Building and deploying full-stack application features under the mentorship of Mr. Gokul M, contributing to real business workflows.',
      'Developing AI-integrated modules contributing to end-to-end application lifecycle from design to deployment.',
    ],
    tech: ['Application Development', 'AI Development', 'React.js', 'Python', 'REST APIs', 'Git'],
  },
  {
    role: 'Python Web App Development Intern',
    company: 'Dev Technology Solutions',
    location: 'Salem, Tamil Nadu',
    period: 'Jul 2025 – Aug 2025',
    type: 'Corporate',
    color: 'bg-sky-400',
    badge: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    achievements: [
      'Architected and deployed scalable web application micro-endpoints in Python and Flask, ensuring smooth client-server data flow.',
      'Integrated complex frontend requirements with backend services, resolving critical integration bottlenecks in production builds.',
      'Conducted exhaustive test suites and debugging cycles, elevating system stability and minimizing application downtime.',
    ],
    tech: ['Python', 'Flask', 'REST APIs', 'Postman', 'Debugging', 'Agile Methodologies'],
  },
];

const additionalTraining = [
  {
    role: 'Full Stack Development Intern',
    company: 'Novi Tech R&D Pvt Ltd',
    location: 'Salem / Remote',
    period: 'Sep 2024 – Nov 2024',
    type: 'Training',
    color: 'bg-purple-400',
    badge: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    achievements: [
      'Engineered dynamic full stack features using React.js and Python (Flask), powering high-responsiveness web modules.',
      'Designed and optimized database schemas with MongoDB & MySQL, cutting down query latency by over 30% via indexed lookups.',
      'Participated in agile sprint cycles, delivering bug fixes and feature releases consistently ahead of schedule.',
    ],
    tech: ['React.js', 'Flask', 'MySQL', 'MongoDB', 'REST APIs', 'JWT', 'Git'],
  },
];

function ExperienceCard({ exp }) {
  return (
    <div className="glass-card bg-theme-surface border border-theme-border rounded-2xl p-4 sm:p-5 theme-transition hover:border-theme-accent/40 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-theme-accent/5 rounded-full blur-2xl pointer-events-none" />

      {/* Top row: role + badges */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
        <div className="flex items-start gap-2.5 min-w-0">
          <span className={`w-2 h-2 rounded-full ${exp.color} mt-1.5 flex-shrink-0`} />
          <div className="min-w-0">
            <h3 className="font-display font-bold text-base sm:text-lg text-theme-text group-hover:text-theme-accent transition-colors leading-tight">
              {exp.role}
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 font-mono text-[11px] text-theme-muted">
              <span className="flex items-center gap-1 text-theme-accent font-semibold">
                <Building2 className="w-3 h-3" />{exp.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />{exp.location}
              </span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2 flex-shrink-0 flex-wrap sm:flex-nowrap">
          <span className="font-mono text-[10px] flex items-center gap-1 px-2.5 py-1 rounded-lg bg-theme-surface-2 border border-theme-border text-theme-muted">
            <Calendar className="w-3 h-3 text-theme-accent" />{exp.period}
          </span>
          <span className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-lg border ${exp.badge}`}>
            {exp.type}
          </span>
        </div>
      </div>

      {/* Achievements */}
      <div className="space-y-1.5 mb-3 pl-4">
        {exp.achievements.map((ach, i) => (
          <div key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-theme-muted font-body leading-relaxed">
            <CheckCircle2 className="w-3.5 h-3.5 text-theme-accent flex-shrink-0 mt-0.5" />
            <span>{ach}</span>
          </div>
        ))}
      </div>

      {/* Tech chips */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-theme-border/50">
        {exp.tech.map((t, i) => (
          <span key={i} className="font-mono text-[10px] text-theme-muted bg-theme-surface-2/80 px-2 py-0.5 rounded-md border border-theme-border">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const [showTraining, setShowTraining] = useState(false);

  return (
    <section id="experience" className="border-t border-theme-border pt-10 sm:pt-14 theme-transition">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-3">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
          Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-theme-accent-cyan">Experience</span>
        </h2>
        <div className="font-mono text-xs text-theme-muted bg-theme-surface-2/80 px-3 py-1.5 rounded-xl border border-theme-border flex items-center gap-2 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Verified Corporate Internships</span>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-3">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} />
        ))}
      </div>

      {/* More Training Toggle */}
      <div className="mt-4">
        <button
          onClick={() => setShowTraining((prev) => !prev)}
          className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 py-4 rounded-2xl border-2 border-theme-accent/40 bg-gradient-to-r from-theme-accent/10 via-theme-surface-2/80 to-theme-accent-cyan/10 hover:border-theme-accent/70 hover:from-theme-accent/20 hover:to-theme-accent-cyan/20 transition-all duration-300 group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-theme-accent/15 border border-theme-accent/40 group-hover:bg-theme-accent/25 transition-colors flex-shrink-0">
              <GraduationCap className="w-4 h-4 text-theme-accent" />
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-theme-text text-sm group-hover:text-theme-accent transition-colors">
                More Training &amp; Internship
              </div>
              <div className="font-mono text-[10px] text-theme-muted mt-0.5">
                {showTraining ? '↑ Click to collapse' : '1 additional training internship · Click to expand ↓'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[11px] font-semibold text-theme-accent bg-theme-accent/10 border border-theme-accent/40 px-3 py-1.5 rounded-xl group-hover:bg-theme-accent group-hover:text-[var(--btn-primary-text)] transition-all duration-300 flex-shrink-0">
            {showTraining ? (
              <><ChevronUp className="w-3.5 h-3.5" /><span className="hidden sm:inline">Collapse</span></>
            ) : (
              <><ChevronDown className="w-3.5 h-3.5" /><span className="hidden sm:inline">Expand</span></>
            )}
          </div>
        </button>

        {/* Collapsible */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showTraining ? 'max-h-[2000px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-theme-border" />
              <span className="font-mono text-[10px] text-theme-muted uppercase tracking-widest px-3 py-1 rounded-full bg-theme-surface-2 border border-theme-border">
                Training Internship
              </span>
              <div className="h-px flex-1 bg-theme-border" />
            </div>
            {additionalTraining.map((exp, idx) => (
              <ExperienceCard key={idx} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
