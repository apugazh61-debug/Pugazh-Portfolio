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

          {/* Main Headline */}
          <div className="space-y-3">
            {/* Name & Title Badge (Skeuomorphic Tactile 3D Strip) */}
            <div className="skeuomorph-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl font-mono text-xs sm:text-sm tracking-wider uppercase font-bold self-start select-none">
              <span className="skeuomorph-led w-2 h-2 rounded-full flex-shrink-0"></span>
              <span>Pugazhenthi S — Software Engineer</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-theme-text leading-[1.08]">
              Building modern <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-accent-purple">
                full stack apps &amp;
              </span> <br />
              autonomous AI engines.
            </h1>
          </div>

          {/* Dynamic Role Subtitle (Skeuomorphic Recessed LCD Terminal Well) */}
          <div className="skeuomorph-terminal font-mono text-sm sm:text-base lg:text-lg min-h-[38px] flex items-center gap-2.5 px-4 py-3 rounded-2xl overflow-hidden">
            <span className="text-theme-accent font-extrabold text-base flex-shrink-0 drop-shadow-[0_0_6px_rgba(45,212,191,0.5)]">&gt;</span>
            <span className="text-theme-text font-bold tracking-wide truncate">{typedRole}</span>
            <span className="inline-block w-2.5 h-5 bg-theme-accent animate-cursor-blink flex-shrink-0 shadow-[0_0_10px_#2DD4BF]"></span>
          </div>

          {/* Bio Description */}
          <p className="font-body text-theme-muted text-base sm:text-lg max-w-[65ch] leading-relaxed">
            Software Engineer specializing in scalable full stack architectures, distributed backend APIs, and applied AI systems. Proven production delivery across <strong className="text-theme-text font-semibold">React.js, FastAPI, Python, Java (Spring Boot)</strong> and <strong className="text-theme-text font-semibold">Computer Vision</strong>.
          </p>

          {/* Action CTAs (Liquid Glass Aesthetic - Responsive Mobile Layout) */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-2">
            <a
              href="#projects"
              className="liquid-glass-btn-primary font-mono text-xs sm:text-sm font-bold px-5 sm:px-6 py-3.5 rounded-2xl inline-flex items-center justify-center gap-2.5 group cursor-pointer flex-1 sm:flex-initial min-w-[140px]"
            >
              <span>Explore Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download="Pugazhenthi_S_Resume.pdf"
              className="liquid-glass-btn font-mono text-xs sm:text-sm font-semibold px-4 sm:px-5 py-3.5 rounded-2xl text-theme-accent inline-flex items-center justify-center gap-2 group cursor-pointer flex-1 sm:flex-initial min-w-[110px]"
              title="Download Resume"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 group-hover:scale-110 transition-all text-theme-accent" />
              <span>Resume</span>
            </a>

            {/* Direct Mailto Email */}
            <a
              href={`mailto:${profile.email || 'jayapugazh947@gmail.com'}?subject=Engineering%20Inquiry%20%2F%20Collaboration`}
              className="liquid-glass-btn font-mono text-xs sm:text-sm font-semibold px-4 sm:px-5 py-3.5 rounded-2xl text-theme-text hover:text-theme-accent inline-flex items-center justify-center gap-2 group cursor-pointer flex-1 sm:flex-initial min-w-[120px]"
              title="Send Email Directly"
            >
              <Mail className="w-4 h-4 text-theme-accent group-hover:scale-110 transition-transform" />
              <span>Email Me</span>
            </a>

            {/* Social Icon Pills (Liquid Glass) */}
            <div className="flex items-center gap-2.5">
              <a
                href={profile.githubUrl || "https://github.com/apugazh61-debug"}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-btn p-3.5 rounded-2xl text-theme-text flex items-center justify-center group"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 group-hover:scale-110 group-hover:text-theme-accent transition-all duration-200" />
              </a>
              <a
                href={profile.linkedinUrl || "https://www.linkedin.com/in/pugazhenthi-s-920556331"}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-btn p-3.5 rounded-2xl text-theme-text flex items-center justify-center group"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 group-hover:text-theme-accent transition-all duration-200" />
              </a>
            </div>
          </div>

          {/* Quick Metrics HUD (Neomorphism Inset Wells) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-4 border-t border-theme-border/70">
            <div className="neomorph-inset p-3.5 rounded-2xl">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-theme-accent">3+</div>
              <div className="font-mono text-[11px] text-theme-muted uppercase tracking-wider font-semibold">Industry Roles</div>
            </div>
            <div className="neomorph-inset p-3.5 rounded-2xl">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-theme-accent-cyan">10+</div>
              <div className="font-mono text-[11px] text-theme-muted uppercase tracking-wider font-semibold">GitHub Projects</div>
            </div>
            <div className="neomorph-inset p-3.5 rounded-2xl">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-theme-warm">{profile.cgpa || '7.5'}</div>
              <div className="font-mono text-[11px] text-theme-muted uppercase tracking-wider font-semibold">B.E CSE CGPA</div>
            </div>
            <div className="neomorph-inset p-3.5 rounded-2xl">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-emerald-400">100%</div>
              <div className="font-mono text-[11px] text-theme-muted uppercase tracking-wider font-semibold">Production Focus</div>
            </div>
          </div>
        </div>

        {/* Right Column (Neomorphism Profile Card) — visible on mobile & desktop */}
        <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0 w-full">
          <div className="absolute -inset-6 bg-gradient-to-tr from-theme-accent/20 via-theme-accent-cyan/15 to-theme-accent-purple/20 rounded-3xl blur-3xl opacity-60 pointer-events-none"></div>
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] neomorph-card p-4 sm:p-7 rounded-3xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-theme-border/60 font-mono text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <a
                href={profile.githubUrl || "https://github.com/apugazh61-debug"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-theme-muted hover:text-theme-accent transition-colors flex items-center gap-1.5 font-semibold group/gh cursor-pointer"
                title="View GitHub (@apugazh61-debug)"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="group-hover/gh:underline decoration-theme-accent">apugazh61_debug</span>
              </a>
            </div>
            <div className="neomorph-inset p-2 rounded-2xl overflow-hidden aspect-[4/4.2] group">
              <img
                src="/profile.jpg"
                alt="Pugazhenthi S — Full Stack & AI Engineer"
                className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ objectPosition: 'center 12%' }}
              />
            </div>
            <div className="neomorph-inset p-3.5 rounded-2xl flex items-center justify-between">
              <div>
                <div className="font-mono text-sm font-bold text-theme-text flex items-center gap-1.5">
                  <span>Pugazhenthi S</span>
                  <span className="text-[10px] text-theme-accent bg-theme-accent/15 border border-theme-accent/30 px-1.5 py-0.5 rounded font-mono font-semibold">CSE</span>
                </div>
                <div className="font-mono text-xs text-theme-muted mt-0.5 font-medium">{profile.college || 'Gnanamani College of Tech'}</div>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-xl border border-emerald-500/20 font-bold">
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
