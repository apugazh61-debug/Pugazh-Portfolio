import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: 'Application Development & AI Development Intern',
    company: 'Blaze Wings Technology Pvt Ltd',
    location: 'Office Premises',
    period: 'Jul 2026 – Dec 2026',
    type: 'Corporate Internship',
    achievements: [
      'Gaining hands-on exposure in application development and artificial intelligence technologies in a production team environment.',
      'Building and deploying full-stack application features under the mentorship of Mr. Gokul M, contributing to real business workflows.',
      'Developing AI-integrated modules and contributing to end-to-end application lifecycle from design to deployment.',
      'Working in a structured 8-hour/day, Monday–Friday schedule, ensuring consistent delivery and professional discipline.',
    ],
    tech: ['Application Development', 'AI Development', 'React.js', 'Python', 'REST APIs', 'Git'],
  },
  {
    role: 'Python Web App Development Intern',
    company: 'Dev Technology Solutions',
    location: 'Salem, Tamil Nadu',
    period: 'Jul 2025 – Aug 2025',
    type: 'Corporate Internship',
    achievements: [
      'Architected and deployed scalable web application micro-endpoints in Python and Flask, ensuring smooth client-server data flow.',
      'Integrated complex frontend requirements with backend services, resolving critical integration bottlenecks in production builds.',
      'Conducted exhaustive test suites and debugging cycles, elevating system stability and minimizing application downtime.',
      'Collaborated seamlessly within cross-functional teams, actively contributing in sprint stand-ups and code review sessions.',
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
    type: 'Training Internship',
    achievements: [
      'Engineered and delivered dynamic full stack features using React.js and Python (Flask/Node.js), powering high-responsiveness web modules.',
      'Designed and optimized database schemas with MongoDB & MySQL, cutting down query latency by over 30% via indexed lookups.',
      'Constructed role-based access control (RBAC) and JWT token validation workflows, significantly enhancing endpoint security.',
      'Participated in fast-paced agile sprint cycles, delivering bug fixes and feature releases consistently ahead of schedule.',
    ],
    tech: ['React.js', 'Flask', 'MySQL', 'MongoDB', 'REST APIs', 'JWT', 'Git'],
  },
];

function ExperienceCard({ exp }) {
  return (
    <div className="glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 theme-transition hover:border-theme-accent/50 group relative overflow-hidden">
      {/* Ambient Glow */}
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

        <div className="flex flex-wrap items-center gap-2 self-start lg:self-center font-mono text-xs">
          <span className="px-3 py-1.5 rounded-xl bg-theme-surface-2 border border-theme-border text-theme-text flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-theme-accent flex-shrink-0" />
            {exp.period}
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
            {exp.type}
          </span>
        </div>
      </div>

      {/* Achievements */}
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
  );
}

export default function Experience() {
  const [showTraining, setShowTraining] = useState(false);

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

      {/* Main Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} />
        ))}
      </div>

      {/* More Training & Internship Toggle */}
      <div className="mt-6">
        <button
          onClick={() => setShowTraining((prev) => !prev)}
          className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 rounded-2xl border-2 border-theme-accent/40 bg-gradient-to-r from-theme-accent/10 via-theme-surface-2/80 to-theme-accent-cyan/10 hover:border-theme-accent/80 hover:from-theme-accent/20 hover:to-theme-accent-cyan/20 transition-all duration-300 group cursor-pointer shadow-md hover:shadow-theme-accent/20"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-theme-accent/15 border border-theme-accent/40 group-hover:bg-theme-accent/25 transition-colors flex-shrink-0">
              <GraduationCap className="w-5 h-5 text-theme-accent" />
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-theme-text text-base group-hover:text-theme-accent transition-colors">
                More Training &amp; Internship
              </div>
              <div className="font-mono text-[11px] text-theme-muted mt-0.5">
                {showTraining ? '↑ Click to collapse' : '1 additional training internship · Click to expand ↓'}
              </div>
            </div>
          </div>
          <div className={`flex items-center gap-2 font-mono text-xs font-semibold text-theme-accent bg-theme-accent/10 border border-theme-accent/40 px-3 py-2 rounded-xl group-hover:bg-theme-accent group-hover:text-[var(--btn-primary-text)] transition-all duration-300 flex-shrink-0`}>
            {showTraining ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span className="hidden sm:inline">Collapse</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span className="hidden sm:inline">Expand</span>
              </>
            )}
          </div>
        </button>

        {/* Collapsible Training Section */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showTraining ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="space-y-6">
            {/* Section label */}
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-theme-border"></div>
              <span className="font-mono text-[11px] text-theme-muted uppercase tracking-widest px-3 py-1 rounded-full bg-theme-surface-2 border border-theme-border">
                Training Internship
              </span>
              <div className="h-px flex-1 bg-theme-border"></div>
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
