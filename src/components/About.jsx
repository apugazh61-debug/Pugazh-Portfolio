import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-13 border-t border-theme-border theme-transition">
      <div className="font-mono text-[13px] text-theme-muted mb-5 flex items-center gap-2">
        <span className="text-theme-accent font-semibold">$</span>
        <span className="text-theme-warm">cat</span> about.md
      </div>
      <h2 className="font-mono text-[22px] font-bold text-theme-text mb-1.5">
        Career objective
      </h2>
      <p className="text-theme-muted text-[15.5px] max-w-[64ch] leading-relaxed">
        <strong className="text-theme-text font-semibold">Final-year Computer Science student</strong> with hands-on experience in full stack web development and AI-integrated applications. Comfortable across <strong className="text-theme-text font-semibold">React.js, Python, FastAPI, Flask, and MongoDB</strong>, with practical work in computer vision, machine learning, and real-time web systems. Looking for a <strong className="text-theme-text font-semibold">Full Stack / AI Developer</strong> role to build AI-powered, scalable products in a fast-paced, real-world environment.
      </p>
    </section>
  );
}
