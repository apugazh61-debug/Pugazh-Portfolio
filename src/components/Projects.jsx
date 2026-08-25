import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, CheckCircle2, Database, Server, Cpu, Layers, Sparkles, ArrowUpRight, Code, Shield } from 'lucide-react';

const projects = [
  {
    title: 'AgriSync WMS Core — Enterprise Warehouse Management',
    period: 'Production Project',
    category: 'Full Stack',
    tagBadge: 'React + Glassmorphism + Asset WMS',
    tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    description:
      'Comprehensive Warehouse Management System (WMS) tailored for the agricultural sector, featuring real-time asset monitoring, live stock ledger tracking, and modern glassmorphic interface.',
    features: [
      'Interactive executive dashboard with real-time stock audits and multi-bin location mapping',
      'Optimized inventory tracking pipeline designed to maximize agricultural supply chain productivity',
      'Deployed live on Vercel with responsive architecture across mobile and widescreen desktop viewports',
    ],
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Vercel'],
    github: 'https://github.com/apugazh61-debug/AgriSync-WMS-Core',
    liveUrl: 'https://agri-sync-wms-core.vercel.app',
  },
  {
    title: 'SkillDNA-Ai — AI Skill Assessment & Intelligence Platform',
    period: 'AI Platform',
    category: 'AI & NLP',
    tagBadge: 'AI Engine + Skill Intelligence',
    tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
    description:
      'Intelligent AI-driven skill evaluation and DNA mapping engine that analyzes technical competencies, predicts skill gaps, and generates structured career progression roadmaps.',
    features: [
      'Automated competency extraction and skill matrix benchmarking against industry roles',
      'Interactive visual skill graph generation for technical talent evaluation and mentoring',
      'Reactive user interface with instant AI assessment scoring and milestone tracking',
    ],
    tech: ['React.js', 'JavaScript ES6+', 'AI Algorithms', 'Tailwind CSS', 'REST APIs'],
    github: 'https://github.com/apugazh61-debug/SkillDNA-Ai',
  },
  {
    title: 'Real-Time Facial Emotion Detection & Vision Pipeline',
    period: 'Computer Vision',
    category: 'AI & Computer Vision',
    tagBadge: 'Python + OpenCV + Deep Learning',
    tagColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    description:
      'High-throughput computer vision engine processing live camera feeds to detect facial landmarks and classify human emotional states in real-time with sub-50ms inference.',
    features: [
      'Real-time OpenCV video stream capture with Haar-cascade / neural face localization',
      'Multi-class facial emotion classification model with dynamic confidence thresholding',
      'Visual HUD overlay rendering real-time sentiment distribution and emotion probabilities',
    ],
    tech: ['Python', 'OpenCV', 'Deep Learning', 'NumPy', 'Computer Vision'],
    github: 'https://github.com/apugazh61-debug/Real-Time-Emotion-Detection',
  },
  {
    title: 'cashFlow-Pilot — Financial Modeling & Forecasting Engine',
    period: 'Analytics & Systems',
    category: 'Full Stack',
    tagBadge: 'Python + Cashflow Forecasting',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    description:
      'Autonomous financial forecasting and liquidity modeling engine designed to analyze cash inflows/outflows, simulate business burn rate runway, and automate financial telemetry.',
    features: [
      'Predictive time-series algorithms for multi-quarter cash flow forecast simulations',
      'Automated income statement ledger reconciliation and anomaly detection',
      'Clean analytics visualizer for executive budgeting decisions and runway alerts',
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Data Modeling', 'Algorithms', 'FastAPI'],
    github: 'https://github.com/apugazh61-debug/cashFlow-Pilot',
  },
];

const categories = ['All', 'Full Stack', 'AI & Computer Vision', 'AI & NLP'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="border-t border-theme-border pt-12 sm:pt-16 theme-transition">
      {/* Section Header with Category Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
        <div>
          <div className="font-mono text-xs text-theme-accent uppercase tracking-widest font-semibold mb-1.5 flex items-center gap-2">
            <FolderGit2 className="w-3.5 h-3.5 text-theme-accent" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-theme-text tracking-tight">
            Production-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-accent-purple">Projects</span>
          </h2>
        </div>

        {/* Filter Categories Pill Menu */}
        <div className="flex flex-wrap items-center gap-1.5 bg-theme-surface-2/90 p-1.5 rounded-2xl border border-theme-border self-start lg:self-auto font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl transition-all font-semibold cursor-pointer ${
                activeCategory === cat
                  ? 'bg-theme-accent text-[var(--btn-primary-text)] shadow-md shadow-theme-accent/20'
                  : 'text-theme-muted hover:text-theme-text hover:bg-theme-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Large Widescreen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {filteredProjects.map((proj, idx) => (
          <div
            key={idx}
            className="glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between theme-transition hover:-translate-y-1 hover:border-theme-accent/50 group relative overflow-hidden"
          >
            {/* Ambient Card Corner Glow */}
            <div className="absolute -top-16 -right-16 w-36 h-36 bg-theme-accent/10 rounded-full blur-2xl group-hover:bg-theme-accent/20 transition-all pointer-events-none"></div>

            <div>
              {/* Category & Date Bar */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`font-mono text-xs font-semibold px-3 py-1 rounded-full border ${proj.tagColor}`}>
                  {proj.tagBadge}
                </span>
                <span className="font-mono text-xs text-theme-muted">
                  {proj.period}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-theme-text group-hover:text-theme-accent transition-colors duration-200 leading-snug mb-3">
                {proj.title}
              </h3>

              {/* Description */}
              <p className="text-theme-muted text-sm sm:text-base leading-relaxed mb-5 font-body">
                {proj.description}
              </p>

              {/* Key Architecture Features */}
              <div className="space-y-2 mb-6 p-4 rounded-2xl bg-theme-surface-2/60 border border-theme-border/70">
                <div className="font-mono text-xs font-semibold text-theme-text mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
                  <span>Key Architecture &amp; Delivery:</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-theme-muted font-body">
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Chips & GitHub Action Footer */}
            <div className="pt-4 border-t border-theme-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-xs text-theme-text bg-theme-surface-2/90 px-2.5 py-1 rounded-lg border border-theme-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs sm:text-sm font-semibold text-theme-accent bg-theme-accent/10 border border-theme-accent/30 hover:bg-theme-accent hover:text-[var(--btn-primary-text)] inline-flex items-center gap-1.5 transition-all px-3 py-1.5 rounded-lg shadow-sm"
                    title="Open Live Application"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs sm:text-sm font-semibold text-theme-text hover:text-theme-accent inline-flex items-center gap-2 transition-colors px-3 py-1.5 rounded-lg bg-theme-surface-2 border border-theme-border hover:border-theme-accent shadow-sm"
                  title="View Code Repository"
                >
                  <Github className="w-4 h-4" />
                  <span>Source Code ↗</span>
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


