import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowScrollTop(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
        showScrollTop
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-8 scale-90 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative group p-3.5 rounded-2xl glass-card bg-theme-surface/90 border border-theme-border hover:border-theme-accent text-theme-text hover:text-theme-accent shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        {/* Circular scroll progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r="19" fill="none" stroke="currentColor" strokeWidth="2" className="text-theme-border/40" />
          <circle
            cx="22" cy="22" r="19" fill="none"
            stroke="var(--accent)" strokeWidth="2.5"
            strokeDasharray="119.38"
            strokeDashoffset={119.38 - (119.38 * scrollProgress) / 100}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>
        <ArrowUp className="w-4 h-4 text-theme-text group-hover:text-theme-accent transition-transform group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}
