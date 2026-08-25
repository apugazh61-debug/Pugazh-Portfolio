import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Development Intern',
    company: 'Novi Tech R&D Pvt Ltd',
    location: 'Salem / Remote',
    period: 'Sep 2024 – Nov 2024',
    type: 'Corporate Internship',
    accent: 'border-teal-500/30 text-teal-400',
    achievements: [
      'Engineered and delivered dynamic full stack features using React.js and Python (Flask/Node.js), powering high-responsiveness web modules.',
      'Designed and optimized database schemas with MongoDB & MySQL, cutting down query latency by over 30% via indexed lookups.',
      'Constructed role-based access control (RBAC) and JWT token validation workflows, significantly enhancing endpoint security.',
      'Participated in fast-paced agile sprint cycles, delivering bug fixes and feature releases consistently ahead of schedule.',
    ],
    tech: ['React.js', 'Flask', 'MySQL', 'MongoDB', 'REST APIs', 'JWT', 'Git'],
  },
  {
    role: 'Python Web App Development Intern',
    company: 'Dev Technology Solutions',
    location: 'Salem, Tamil Nadu',
    period: 'Jul 2025 – Aug 2025',
    type: 'Corporate Internship',
    accent: 'border-sky-500/30 text-sky-400',
    achievements: [
      'Architected and deployed scalable web application micro-endpoints in Python and Flask, ensuring smooth client-server data flow.',
      'Integrated complex frontend requirements with backend services, resolving critical integration bottlenecks in production builds.',
      'Conducted exhaustive test suites and debugging cycles, elevating system stability and minimizing application downtime.',
      'Collaborated seamlessly within cross-functional teams, actively contributing in sprint stand-ups and code review sessions.',
    ],
    tech: ['Python', 'Flask', 'REST APIs', 'Postman', 'Debugging', 'Agile Methodologies'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-theme-border pt-12 sm:pt-16 theme-transition">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <div className="font-mono text-xs text-theme-accent uppercase tracking-widest font-semibold mb-1.5 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5 text-theme-accent" />
            <span>Career Milestones</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-theme-text tracking-tight">
            Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent to-theme-accent-cyan">Experience</span>
          </h2>
        </div>
        <div className="font-mono text-xs text-theme-muted bg-theme-surface-2/80 px-3 py-1.5 rounded-xl border border-theme-border flex items-center gap-2 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Verified Corporate Internships</span>
        </div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 theme-transition hover:border-theme-accent/50 group relative overflow-hidden"
          >
            {/* Ambient Background Node Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-theme-accent/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header: Role & Company */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5 pb-4 border-b border-theme-border/60">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse"></span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-theme-text group-hover:text-theme-accent transition-colors duration-200">
                    {exp.role}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-theme-muted">
                  <span className="text-theme-accent font-semibold flex items-center gap-1.5">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-theme-muted" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start lg:self-center font-mono text-xs">
                <span className="px-3.5 py-1.5 rounded-xl bg-theme-surface-2 border border-theme-border text-theme-text flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-theme-accent" />
                  {exp.period}
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Achievements Bullet List */}
            <div className="space-y-2.5 mb-6">
              {exp.achievements.map((ach, aIdx) => (
                <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-theme-muted font-body leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>

            {/* Tech Chips */}
            <div className="pt-4 border-t border-theme-border/60 flex flex-wrap gap-2">
              {exp.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono text-xs text-theme-text bg-theme-surface-2/90 px-3 py-1 rounded-lg border border-theme-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
