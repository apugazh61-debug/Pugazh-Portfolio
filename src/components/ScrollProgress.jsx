import React, { useState, useEffect } from 'react';
import { ChevronUp, ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
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

    // Setup Intersection Observer for automatic scroll animations
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    });

    const revealElements = document.querySelectorAll('section, .glass-card, .scroll-reveal');
    revealElements.forEach((el) => {
      el.classList.add('scroll-reveal-item');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Laser Neon Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3.5px] bg-theme-surface-2/40 z-[9999] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-accent-purple transition-all duration-150 ease-out shadow-[0_0_12px_rgba(45,212,191,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Floating Animated Scroll-To-Top Button */}
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
          {/* Subtle Circular Progress Indicator SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-theme-border/40"
            />
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeDasharray="119.38"
              strokeDashoffset={119.38 - (119.38 * scrollProgress) / 100}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>

          <ArrowUp className="w-4 h-4 text-theme-text group-hover:text-theme-accent transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </>
  );
}
