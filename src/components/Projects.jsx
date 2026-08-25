import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, CheckCircle2, Database, Server, Cpu, Layers, Sparkles, ArrowUpRight, Code, Shield } from 'lucide-react';

const projects = [
  {
    title: 'AgriSync WMS Core',
    subtitle: 'Agricultural Warehouse Management System',
    category: 'Full Stack',
    tagBadge: 'Full Stack WMS',
    tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    description:
      'Real-time agricultural asset tracking system with live inventory ledger audits, multi-bin location mapping, and modern glassmorphic dashboard.',
    highlights: ['Live asset telemetry & stock audits', 'Deployed on Vercel with responsive UI'],
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/apugazh61-debug/AgriSync-WMS-Core',
    liveUrl: 'https://agri-sync-wms-core.vercel.app',
  },
  {
    title: 'SkillDNA-Ai',
    subtitle: 'AI Skill Assessment & Intelligence Engine',
    category: 'AI & NLP',
    tagBadge: 'AI & NLP',
    tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    description:
      'AI-driven skill evaluation platform that analyzes developer competencies, benchmarks technical talent, and generates visual career roadmaps.',
    highlights: ['Automated competency extraction', 'Dynamic talent benchmark scoring'],
    tech: ['React.js', 'JavaScript ES6+', 'AI Models', 'Tailwind CSS'],
    github: 'https://github.com/apugazh61-debug/SkillDNA-Ai',
  },
  {
    title: 'Real-Time Emotion Detection',
    subtitle: 'Computer Vision & Deep Learning Pipeline',
    category: 'AI & Computer Vision',
    tagBadge: 'Computer Vision',
    tagColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    description:
      'High-throughput facial landmark detection and sentiment classification engine processing live camera feeds with sub-50ms inference.',
    highlights: ['Sub-50ms OpenCV video capture', 'Real-time emotion probability HUD'],
    tech: ['Python', 'OpenCV', 'Deep Learning', 'NumPy'],
    github: 'https://github.com/apugazh61-debug/Real-Time-Emotion-Detection',
  },
  {
    title: 'cashFlow-Pilot',
    subtitle: 'Financial Modeling & Forecasting Engine',
    category: 'Full Stack',
    tagBadge: 'Financial Systems',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    description:
      'Autonomous financial forecasting engine simulating business burn-rate runway, cash inflows/outflows, and liquidity telemetry.',
    highlights: ['Predictive time-series simulation', 'Automated ledger anomaly detection'],
    tech: ['Python', 'Pandas', 'NumPy', 'FastAPI'],
    github: 'https://github.com/apugazh61-debug/cashFlow-Pilot',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-theme-border pt-10 sm:pt-14 theme-transition">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-accent-purple">Engineering Projects</span>
        </h2>
        <p className="text-xs sm:text-sm text-theme-muted font-body mt-0.5">
          Production-tested applications, computer vision models, and distributed systems.
        </p>
      </div>

      {/* 2-Column Compact Widescreen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="glass-card bg-theme-surface border border-theme-border rounded-2xl p-5 sm:p-6 flex flex-col justify-between theme-transition hover:-translate-y-0.5 hover:border-theme-accent/50 group relative overflow-hidden"
          >
            {/* Ambient Card Corner Glow */}
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-theme-accent/10 rounded-full blur-2xl group-hover:bg-theme-accent/20 transition-all pointer-events-none"></div>

            <div>
              {/* Header: Title & Category Pill */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-theme-text group-hover:text-theme-accent transition-colors leading-tight">
                    {proj.title}
                  </h3>
                  <div className="text-xs text-theme-muted font-body mt-0.5">{proj.subtitle}</div>
                </div>
                <span className={`font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${proj.tagColor} flex-shrink-0`}>
                  {proj.tagBadge}
                </span>
              </div>

              {/* Description */}
              <p className="text-theme-muted text-xs sm:text-sm leading-relaxed mb-3.5 font-body">
                {proj.description}
              </p>

              {/* Compact Highlight Badges */}
              <div className="flex flex-wrap gap-2 mb-4 font-mono text-[11px]">
                {proj.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-theme-surface-2/90 border border-theme-border/80 text-theme-text"
                  >
                    <CheckCircle2 className="w-3 h-3 text-theme-accent flex-shrink-0" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Chips & GitHub Action Footer */}
            <div className="pt-3 border-t border-theme-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[11px] text-theme-muted bg-theme-surface-2 px-2 py-0.5 rounded-md border border-theme-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs font-semibold text-theme-accent bg-theme-accent/10 border border-theme-accent/30 hover:bg-theme-accent hover:text-[var(--btn-primary-text)] inline-flex items-center gap-1.5 transition-all px-2.5 py-1.5 rounded-lg shadow-sm"
                    title="Open Live Application"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                )}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold text-theme-text hover:text-theme-accent inline-flex items-center gap-1.5 transition-colors px-2.5 py-1.5 rounded-lg bg-theme-surface-2 border border-theme-border hover:border-theme-accent shadow-sm"
                  title="View Code Repository"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code ↗</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prominent "More Projects" Action Banner */}
      <div className="mt-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl glass-card bg-theme-surface border border-theme-border/80 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-theme-accent/10 to-transparent pointer-events-none"></div>

        <div className="flex items-center gap-4 relative z-10 text-center sm:text-left">
          <div className="p-3.5 rounded-2xl bg-theme-surface-2 border border-theme-border text-theme-accent hidden sm:flex items-center justify-center">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-lg sm:text-xl text-theme-text">
              Want to see more repositories &amp; open source code?
            </h4>
            <p className="text-xs sm:text-sm text-theme-muted font-body mt-0.5">
              Explore algorithm implementations, full stack microservices, and AI experiments on GitHub.
            </p>
          </div>
        </div>

        <a
          href="https://github.com/apugazh61-debug"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 font-mono text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl bg-theme-accent text-[var(--btn-primary-text)] hover:brightness-110 shadow-lg shadow-theme-accent/25 hover:shadow-theme-accent/40 transition-all duration-200 inline-flex items-center gap-2.5 flex-shrink-0 cursor-pointer"
        >
          <Github className="w-4 h-4" />
          <span>More Projects on GitHub ↗</span>
        </a>
      </div>
    </section>
  );
}


