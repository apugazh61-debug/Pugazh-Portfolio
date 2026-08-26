import React, { useEffect, useRef, useState } from 'react';
import { Code2, Server, Database, Brain } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

const iconMap = {
  Code2, Server, Database, Brain
};

function AnimatedBar({ level, barColor, animate }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="neomorph-inset flex-1 h-2 rounded-full overflow-hidden p-0.5">
        <div
          className={`h-full ${barColor} rounded-full transition-all duration-1000 ease-out shadow-sm`}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
      <span className="font-mono text-[10px] text-theme-muted font-bold w-7 text-right flex-shrink-0">{level}%</span>
    </div>
  );
}

export default function Skills() {
  const { data } = usePortfolioData();
  const skillDecks = data.skills || [];
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
        <div className="neomorph-btn font-mono text-xs text-theme-muted px-3.5 py-1.5 rounded-xl flex items-center gap-2 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse"></span>
          <span>Core Engineering Stack</span>
        </div>
      </div>

      {/* 4-Card Grid with Animated Bars (Neomorphism) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {skillDecks.map((deck, idx) => {
          const Icon = iconMap[deck.iconName] || deck.icon || Code2;
          return (
            <div
              key={idx}
              className={`neomorph-card rounded-3xl p-5 theme-transition ${deck.borderColor} group relative overflow-hidden flex flex-col gap-4`}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${deck.glowColor} rounded-full blur-2xl pointer-events-none`}></div>

              {/* Header */}
              <div className="flex items-center gap-3 pb-2.5 border-b border-theme-border/60">
                <div className={`neomorph-btn p-2.5 rounded-2xl ${deck.accentColor} flex items-center justify-center`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-theme-text group-hover:text-theme-accent transition-colors">{deck.title}</h3>
                  <div className="text-[10px] font-mono text-theme-muted font-medium">{deck.category}</div>
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
