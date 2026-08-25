import React from 'react';
import { Code2, Server, Database, Brain, Sparkles, Terminal, Wrench, Shield, Check, Cpu } from 'lucide-react';

const skillDecks = [
  {
    title: 'Languages',
    category: 'Core Programming',
    icon: Code2,
    accentColor: 'text-teal-400',
    borderColor: 'hover:border-teal-500/50',
    glowColor: 'bg-teal-500/10',
    skills: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5 & CSS3'],
  },
  {
    title: 'Frameworks & Full Stack',
    category: 'Application Engines',
    icon: Server,
    accentColor: 'text-sky-400',
    borderColor: 'hover:border-sky-500/50',
    glowColor: 'bg-sky-500/10',
    skills: ['React.js', 'FastAPI', 'Flask', 'Tailwind CSS', 'Next.js', 'Vite'],
  },
  {
    title: 'Databases & Cloud',
    category: 'Data & Architecture',
    icon: Database,
    accentColor: 'text-amber-400',
    borderColor: 'hover:border-amber-500/50',
    glowColor: 'bg-amber-500/10',
    skills: ['MongoDB', 'MySQL', 'JWT & RBAC Auth', 'REST APIs', 'AWS Cloud'],
  },
  {
    title: 'AI, Vision & Tooling',
    category: 'Intelligence & DevOps',
    icon: Brain,
    accentColor: 'text-purple-400',
    borderColor: 'hover:border-purple-500/50',
    glowColor: 'bg-purple-500/10',
    skills: ['OpenCV', 'Deep Learning', 'Pandas & NumPy', 'Git & GitHub', 'Postman', 'Linux'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-theme-border pt-10 sm:pt-14 theme-transition">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-theme-text tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-warm">Arsenal &amp; Skills</span>
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted font-body mt-0.5">
            Core technologies and engineering stack leveraged across production systems.
          </p>
        </div>
        <div className="font-mono text-xs text-theme-muted bg-theme-surface-2/80 px-3 py-1.5 rounded-xl border border-theme-border flex items-center gap-2 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse"></span>
          <span>Core Engineering Stack</span>
        </div>
      </div>

      {/* Clean & Smart 4-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {skillDecks.map((deck, idx) => {
          const Icon = deck.icon;
          return (
            <div
              key={idx}
              className={`glass-card bg-theme-surface border border-theme-border rounded-2xl p-5 theme-transition ${deck.borderColor} group relative overflow-hidden flex flex-col justify-between`}
            >
              {/* Top Corner Glow */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${deck.glowColor} rounded-full blur-2xl pointer-events-none`}></div>

              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 pb-2.5 border-b border-theme-border/60">
                  <div className={`p-2 rounded-xl bg-theme-surface-2 border border-theme-border ${deck.accentColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-theme-text group-hover:text-theme-accent transition-colors">
                      {deck.title}
                    </h3>
                    <div className="text-[10px] font-mono text-theme-muted">{deck.category}</div>
                  </div>
                </div>

                {/* Minimalist Smart Chips */}
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {deck.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-theme-surface-2/90 border border-theme-border hover:border-theme-accent/60 hover:bg-theme-surface transition-all flex items-center gap-1.5 shadow-sm text-theme-text group/chip cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-theme-accent group-hover/chip:scale-125 transition-transform"></span>
                      <span className="font-semibold text-xs">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}



