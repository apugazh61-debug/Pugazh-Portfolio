import React from 'react';
import { Code2, Server, Database, Brain, Sparkles, Terminal, Wrench, Shield, Check } from 'lucide-react';

const skillMatrix = [
  {
    title: 'Core Languages & Paradigms',
    category: 'Languages',
    icon: Code2,
    accentColor: 'text-teal-400',
    borderColor: 'group-hover:border-teal-500/50',
    glowColor: 'bg-teal-500/10',
    skills: [
      { name: 'Python', level: 'Advanced', desc: 'Async, FastAPI, Flask, Data' },
      { name: 'Java', level: 'Advanced', desc: 'Spring Boot, OOP, JPA/Hibernate' },
      { name: 'JavaScript / ES6+', level: 'Advanced', desc: 'React, Async/Await, Web APIs' },
      { name: 'HTML5 & Modern CSS3', level: 'Expert', desc: 'Tailwind, Grid, Animations' },
      { name: 'C / C++', level: 'Proficient', desc: 'Memory Management & Data Structures' },
    ],
  },
  {
    title: 'Frameworks & Full Stack Engine',
    category: 'Frameworks',
    icon: Server,
    accentColor: 'text-sky-400',
    borderColor: 'group-hover:border-sky-500/50',
    glowColor: 'bg-sky-500/10',
    skills: [
      { name: 'React.js 18', level: 'Advanced', desc: 'State Architecture, Custom Hooks' },
      { name: 'FastAPI', level: 'Advanced', desc: 'High-Throughput Async REST APIs' },
      { name: 'Spring Boot', level: 'Proficient', desc: 'Enterprise Microservices & Security' },
      { name: 'Flask', level: 'Advanced', desc: 'Lightweight REST Endpoints' },
      { name: 'Tailwind CSS', level: 'Expert', desc: 'Design Systems & Dynamic Themes' },
    ],
  },
  {
    title: 'Data Architecture & Security',
    category: 'Databases & Cloud',
    icon: Database,
    accentColor: 'text-amber-400',
    borderColor: 'group-hover:border-amber-500/50',
    glowColor: 'bg-amber-500/10',
    skills: [
      { name: 'MongoDB', level: 'Advanced', desc: 'Aggregations, Pipelines & Indexing' },
      { name: 'MySQL', level: 'Advanced', desc: 'Schema Optimization, Relational Integrity' },
      { name: 'JWT & Role Auth', level: 'Advanced', desc: 'Access Control, Token Invalidation' },
      { name: 'RESTful API Design', level: 'Expert', desc: 'Scalable Microservices Architecture' },
      { name: 'AWS Cloud', level: 'Practitioner', desc: 'EC2, S3, IAM, Cloud Deployment' },
    ],
  },
  {
    title: 'AI, Vision & Developer Arsenal',
    category: 'AI & Tools',
    icon: Brain,
    accentColor: 'text-purple-400',
    borderColor: 'group-hover:border-purple-500/50',
    glowColor: 'bg-purple-500/10',
    skills: [
      { name: 'OpenCV', level: 'Proficient', desc: 'Image Processing & Stream Detection' },
      { name: 'Pandas & NumPy', level: 'Advanced', desc: 'Data Analytics & Metric Computation' },
      { name: 'Git & GitHub', level: 'Advanced', desc: 'Branch Workflows & Team CI' },
      { name: 'Postman & Thunder', level: 'Expert', desc: 'Automated API Test Suites' },
      { name: 'Linux & VS Code', level: 'Advanced', desc: 'Development & Shell Scripting' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-theme-border pt-12 sm:pt-16 theme-transition">
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
        <div>
          <div className="font-mono text-xs text-theme-accent uppercase tracking-widest font-semibold mb-1.5 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-theme-text tracking-tight">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-warm">Arsenal &amp; Stack</span>
          </h2>
        </div>
        <div className="font-mono text-xs text-theme-muted bg-theme-surface-2/80 px-3 py-1.5 rounded-xl border border-theme-border flex items-center gap-2 self-start sm:self-auto">
          <span>20+ Mastered Technologies</span>
        </div>
      </div>

      {/* 2-Column or 4-Card Widescreen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {skillMatrix.map((matrix, idx) => {
          const Icon = matrix.icon;
          return (
            <div
              key={idx}
              className={`glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-6 sm:p-7 theme-transition ${matrix.borderColor} group relative overflow-hidden`}
            >
              {/* Corner Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${matrix.glowColor} rounded-full blur-2xl pointer-events-none`}></div>

              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-theme-border/60">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl bg-theme-surface-2 border border-theme-border ${matrix.accentColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-theme-text">
                      {matrix.title}
                    </h3>
                    <div className="text-[11px] font-mono text-theme-muted">{matrix.category}</div>
                  </div>
                </div>
              </div>

              {/* Skill Items List */}
              <div className="space-y-3 font-mono">
                {matrix.skills.map((s, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-theme-surface-2/70 border border-theme-border/70 hover:border-theme-accent/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-theme-accent"></div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-theme-text">{s.name}</div>
                        <div className="text-[11px] text-theme-muted font-body">{s.desc}</div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-theme-surface border border-theme-border text-theme-accent self-start sm:self-center">
                      {s.level}
                    </span>
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

