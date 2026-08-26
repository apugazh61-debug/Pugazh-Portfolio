import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Github, Linkedin, Sparkles, Check, Copy, ExternalLink, Zap, Download, Hammer } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

export default function Hero() {
  const { data } = usePortfolioData();
  const profile = data.profile || {};
  const [typedRole, setTypedRole] = useState('');
  const [copied, setCopied] = useState(false);
  const roles = [
    'Full Stack Systems Engineer (React + FastAPI + Python)',
    'AI & Computer Vision Developer (OpenCV + ML)',
    'Enterprise Backend Architect (Java + Spring Boot)',
    'High-Performance Distributed API Designer',
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let charIdx = 0;
    const targetText = roles[roleIndex];

    const interval = setInterval(() => {
      if (!isDeleting) {
        currentText = targetText.slice(0, charIdx + 1);
        setTypedRole(currentText);
        charIdx++;
        if (charIdx === targetText.length) {
          setTimeout(() => { isDeleting = true; }, 2000);
        }
      } else {
        currentText = targetText.slice(0, charIdx - 1);
        setTypedRole(currentText);
        charIdx--;
        if (charIdx === 0) {
          clearInterval(interval);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 25 : 55);

    return () => clearInterval(interval);
  }, [roleIndex]);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email || 'jayapugazh947@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-4 sm:pt-8 pb-10" id="top">
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] xl:grid-cols-[1.35fr_0.65fr] gap-8 lg:gap-14 items-center">
        {/* Left Column */}
        <div className="space-y-6 sm:space-y-7">

          {/* Currently Working On badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-accent/10 border border-theme-accent/30 font-mono text-xs text-theme-accent">
            <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse flex-shrink-0"></span>
            <Hammer className="w-3 h-3 flex-shrink-0" />
            <span>{profile.statusBadge || 'Currently interning @ Blaze Wings Technology · Jul–Dec 2026'}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <div className="font-mono text-xs sm:text-sm text-theme-accent tracking-widest uppercase font-semibold flex items-center gap-2">
              <span className="w-6 h-[2px] bg-theme-accent inline-block"></span>
              <span>Pugazhenthi S — Software Engineer</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-theme-text leading-[1.08]">
              Architecting <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-accent-purple">
                intelligent, scalable
              </span> <br />
              web &amp; AI systems.
            </h1>
          </div>

          {/* Dynamic Role Subtitle */}
          <div className="font-mono text-sm sm:text-base lg:text-lg text-theme-muted min-h-[32px] flex items-center gap-2.5 p-3 rounded-xl bg-theme-surface-2/60 border border-theme-border/80 overflow-hidden">
            <span className="text-theme-accent font-bold text-base flex-shrink-0">&gt;</span>
            <span className="text-theme-text font-medium truncate">{typedRole}</span>
            <span className="inline-block w-2.5 h-5 bg-theme-accent animate-cursor-blink flex-shrink-0"></span>
          </div>

          {/* Bio Description */}
          <p className="font-body text-theme-muted text-base sm:text-lg max-w-[65ch] leading-relaxed">
            Software Engineer specializing in scalable full stack architectures, distributed backend APIs, and applied AI systems. Proven production delivery across <strong className="text-theme-text font-semibold">React.js, FastAPI, Python, Java (Spring Boot)</strong> and <strong className="text-theme-text font-semibold">Computer Vision</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-2">
            <a
              href="#projects"
              className="font-mono text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl bg-theme-accent text-[var(--btn-primary-text)] border border-theme-accent hover:brightness-110 shadow-lg shadow-theme-accent/25 hover:shadow-theme-accent/40 transition-all duration-200 inline-flex items-center gap-2.5 group"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download="Pugazhenthi_S_Resume.pdf"
              className="font-mono text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl border border-theme-accent/50 bg-theme-accent/10 text-theme-accent hover:bg-theme-accent hover:text-[var(--btn-primary-text)] transition-all duration-200 inline-flex items-center gap-2 shadow-sm group"
              title="Download Resume"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>

            <button
              onClick={copyEmail}
              className="font-mono text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl border border-theme-border bg-theme-surface-2/90 text-theme-text hover:border-theme-accent hover:text-theme-accent transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-sm"
              title="Copy Email Address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4 text-theme-accent" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              className="font-mono text-xs sm:text-sm font-semibold px-5 py-3.5 rounded-xl border border-theme-border/80 bg-theme-surface/80 text-theme-text hover:border-theme-accent-cyan hover:text-theme-accent-cyan transition-all duration-200 inline-flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-theme-accent-cyan" />
              <span>Get In Touch</span>
            </a>

            {/* Social Icon Pills */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/apugazh61-debug"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-theme-border bg-theme-surface-2/90 text-theme-text hover:border-theme-accent hover:text-theme-accent transition-all duration-200 shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/pugazhenthi-s-920556331"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-theme-border bg-theme-surface-2/90 text-theme-text hover:border-theme-accent hover:text-theme-accent transition-all duration-200 shadow-sm"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Metrics HUD */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-4 border-t border-theme-border/70">
            <div className="p-3.5 rounded-xl bg-theme-surface-2/60 border border-theme-border/80">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-theme-accent">3+</div>
              <div className="font-mono text-[11px] text-theme-muted uppercase tracking-wider">Industry Roles</div>
            </div>
            <div className="p-3.5 rounded-xl bg-theme-surface-2/60 border border-theme-border/80">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-theme-accent-cyan">10+</div>
              <div className="font-mono text-[11px] text-theme-muted uppercase tracking-wider">GitHub Projects</div>
            </div>
            <div className="p-3.5 rounded-xl bg-theme-surface-2/60 border border-theme-border/80">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-theme-warm">7.5</div>
              <div className="font-mono text-[11px] text-theme-muted uppercase tracking-wider">B.E CSE CGPA</div>
            </div>
            <div className="p-3.5 rounded-xl bg-theme-surface-2/60 border border-theme-border/80">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-emerald-400">100%</div>
              <div className="font-mono text-[11px] text-theme-muted uppercase tracking-wider">Production Focus</div>
            </div>
          </div>
        </div>

        {/* Right Column — hidden on mobile */}
        <div className="relative hidden lg:flex justify-end">
          <div className="absolute -inset-6 bg-gradient-to-tr from-theme-accent/25 via-theme-accent-cyan/20 to-theme-accent-purple/25 rounded-3xl blur-3xl opacity-70 pointer-events-none"></div>
          <div className="relative w-full max-w-[420px] glass-card bg-theme-surface/90 border border-theme-border p-4 sm:p-6 rounded-3xl shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-theme-border/60 font-mono text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="text-[11px] text-theme-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>PUGAZ_ID.sys</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/4.2] border border-theme-border/80 group">
              <img
                src="/profile.jpg"
                alt="Pugazhenthi S — Full Stack & AI Engineer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ objectPosition: 'center 12%' }}
              />
            </div>
            <div className="p-3.5 rounded-2xl bg-theme-surface-2/90 border border-theme-border flex items-center justify-between shadow-sm">
              <div>
                <div className="font-mono text-sm font-bold text-theme-text flex items-center gap-1.5">
                  <span>Pugazhenthi S</span>
                  <span className="text-[10px] text-theme-accent bg-theme-accent/15 border border-theme-accent/30 px-1.5 py-0.5 rounded font-mono font-semibold">CSE</span>
                </div>
                <div className="font-mono text-xs text-theme-muted mt-0.5">Gnanamani College of Tech</div>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
