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
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Java', level: 'Advanced' },
      { name: 'JavaScript ES6+', level: 'Advanced' },
      { name: 'HTML5 / Modern CSS', level: 'Expert' },
      { name: 'C / C++', level: 'Proficient' },
      { name: 'SQL', level: 'Advanced' },
    ],
  },
  {
    title: 'Frameworks & Full Stack',
    category: 'Application Engines',
    icon: Server,
    accentColor: 'text-sky-400',
    borderColor: 'hover:border-sky-500/50',
    glowColor: 'bg-sky-500/10',
    skills: [
      { name: 'React.js 18', level: 'Advanced' },
      { name: 'FastAPI', level: 'Advanced' },
      { name: 'Spring Boot', level: 'Proficient' },
      { name: 'Flask', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Vite / Webpack', level: 'Advanced' },
    ],
  },
  {
    title: 'Databases & Security',
    category: 'Architecture & Cloud',
    icon: Database,
    accentColor: 'text-amber-400',
    borderColor: 'hover:border-amber-500/50',
    glowColor: 'bg-amber-500/10',
    skills: [
      { name: 'MongoDB (Aggregations)', level: 'Advanced' },
      { name: 'MySQL (JPA / Indexing)', level: 'Advanced' },
      { name: 'JWT & RBAC Security', level: 'Expert' },
      { name: 'RESTful API Architecture', level: 'Expert' },
      { name: 'AWS Cloud (EC2 / S3)', level: 'Practitioner' },
      { name: 'Hibernate / ORM', level: 'Advanced' },
    ],
  },
  {
    title: 'AI, Vision & DevOps',
    category: 'Intelligence & Tooling',
    icon: Brain,
    accentColor: 'text-purple-400',
    borderColor: 'hover:border-purple-500/50',
    glowColor: 'bg-purple-500/10',
    skills: [
      { name: 'OpenCV (Video / CV)', level: 'Proficient' },
      { name: 'Pandas & NumPy', level: 'Advanced' },
      { name: 'Git / GitHub CI', level: 'Advanced' },
      { name: 'Postman Test Suites', level: 'Expert' },
      { name: 'Linux / Shell Scripting', level: 'Advanced' },
      { name: 'Computer Vision ML', level: 'Proficient' },
    ],
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
          <span>20+ Production Technologies</span>
        </div>
      </div>

      {/* Compact 4-Card Grid */}
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

                {/* Compact Skills Badges Grid */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {deck.skills.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-2.5 py-1.5 rounded-lg bg-theme-surface-2/80 border border-theme-border/80 hover:border-theme-accent/60 hover:bg-theme-surface transition-all flex items-center justify-between gap-2 w-full"
                    >
                      <span className="text-xs font-semibold text-theme-text flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-theme-accent"></span>
                        <span>{s.name}</span>
                      </span>
                      <span className="text-[9px] font-mono uppercase text-theme-muted tracking-wider bg-theme-surface px-1.5 py-0.5 rounded border border-theme-border/60">
                        {s.level}
                      </span>
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


