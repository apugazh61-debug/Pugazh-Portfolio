import React, { useEffect, useRef, useState } from 'react';
import { Code2, Server, Database, Brain } from 'lucide-react';

const skillDecks = [
  {
    title: 'Languages',
    category: 'Core Programming',
    icon: Code2,
    accentColor: 'text-teal-400',
    barColor: 'bg-teal-400',
    borderColor: 'hover:border-teal-500/50',
    glowColor: 'bg-teal-500/10',
    skills: [
      { name: 'Python', level: 65 },
      { name: 'JavaScript', level: 66 },
      { name: 'TypeScript', level: 44 },
      { name: 'HTML5 & CSS3', level: 85 },
    ],
  },
  {
    title: 'Frameworks & Full Stack',
    category: 'Application Engines',
    icon: Server,
    accentColor: 'text-sky-400',
    barColor: 'bg-sky-400',
    borderColor: 'hover:border-sky-500/50',
    glowColor: 'bg-sky-500/10',
    skills: [
      { name: 'React.js', level: 66 },
      { name: 'FastAPI', level: 78 },
      { name: 'Flask', level: 80 },
      { name: 'Tailwind CSS', level: 66 },
    ],
  },
  {
    title: 'Databases & Cloud',
    category: 'Data & Architecture',
    icon: Database,
    accentColor: 'text-amber-400',
    barColor: 'bg-amber-400',
    borderColor: 'hover:border-amber-500/50',
    glowColor: 'bg-amber-500/10',
    skills: [
      { name: 'MongoDB', level: 78 },
      { name: 'MySQL', level: 75 },
      { name: 'REST APIs', level: 87 },
      { name: 'AWS Cloud', level: 60 },
    ],
  },
  {
    title: 'AI, Vision & Tooling',
    category: 'Intelligence & DevOps',
    icon: Brain,
    accentColor: 'text-purple-400',
    barColor: 'bg-purple-400',
    borderColor: 'hover:border-purple-500/50',
    glowColor: 'bg-purple-500/10',
    skills: [
      { name: 'OpenCV', level: 76 },
      { name: 'Deep Learning', level: 55 },
      { name: 'Pandas & NumPy', level: 82 },
      { name: 'Git & GitHub', level: 88 },
    ],
  },
];

function AnimatedBar({ level, barColor, animate }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-theme-surface-2 rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
      <span className="font-mono text-[10px] text-theme-muted w-7 text-right flex-shrink-0">{level}%</span>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="border-t border-theme-border pt-10 sm:pt-14 theme-transition" ref={ref}>
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

      {/* 4-Card Grid with Animated Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {skillDecks.map((deck, idx) => {
          const Icon = deck.icon;
          return (
            <div
              key={idx}
              className={`glass-card bg-theme-surface border border-theme-border rounded-2xl p-5 theme-transition ${deck.borderColor} group relative overflow-hidden flex flex-col gap-4`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${deck.glowColor} rounded-full blur-2xl pointer-events-none`}></div>

              {/* Header */}
              <div className="flex items-center gap-3 pb-2.5 border-b border-theme-border/60">
                <div className={`p-2 rounded-xl bg-theme-surface-2 border border-theme-border ${deck.accentColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-theme-text group-hover:text-theme-accent transition-colors">{deck.title}</h3>
                  <div className="text-[10px] font-mono text-theme-muted">{deck.category}</div>
                </div>
              </div>

              {/* Skill Bars */}
              <div className="space-y-3">
                {deck.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-[11px] text-theme-text font-semibold">{skill.name}</span>
                    </div>
                    <AnimatedBar level={skill.level} barColor={deck.barColor} animate={animate} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
