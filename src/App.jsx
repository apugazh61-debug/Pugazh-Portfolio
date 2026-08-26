import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import BackToTop from './components/BackToTop';
import AdminPanel from './components/AdminPanel';
import { PortfolioDataProvider } from './context/PortfolioDataContext';

export default function App() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    document.title = 'Pugazhenthi S | Software Engineer';
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232DD4BF' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='4 17 10 11 4 5'%3E%3C/polyline%3E%3Cline x1='12' y1='19' x2='20' y2='19'%3E%3C/line%3E%3C/svg%3E";
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const observerCallback = (entries) => {
      const isScrollingDown = window.scrollY >= lastScrollY;
      lastScrollY = window.scrollY;

      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.remove('from-bottom', 'from-top');
          el.classList.add('is-visible');
        } else {
          el.classList.remove('is-visible');
          // Prepare next entrance direction based on scroll motion
          if (isScrollingDown) {
            el.classList.add('from-bottom');
            el.classList.remove('from-top');
          } else {
            el.classList.add('from-top');
            el.classList.remove('from-bottom');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => {
      // First section (Hero) is immediately visible, other sections animate
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        el.classList.add('from-bottom');
      }
      observer.observe(el);
    });

    const onScroll = () => {
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <PortfolioDataProvider>
      <div className="min-h-screen bg-theme-bg text-theme-text font-body theme-transition selection:bg-theme-accent selection:text-[#051313] relative overflow-hidden">
        {/* Floating Back-To-Top Button */}
        <BackToTop />

        {/* Dynamic Ambient Background Aura */}
        <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-theme-accent/15 via-theme-accent-cyan/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-aurora-glow"></div>
        <div className="fixed top-1/3 -right-40 w-[600px] h-[600px] bg-theme-accent-purple/10 blur-[150px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-10 -left-40 w-[600px] h-[600px] bg-theme-accent/10 blur-[150px] pointer-events-none -z-10"></div>

        {/* Interactive Command Palette Modal (Ctrl + K) */}
        <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />

        {/* Secret Master Admin Panel */}
        <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

        {/* Navigation Header */}
        <Navbar onOpenPalette={() => setIsPaletteOpen(true)} />

        {/* Full-width Widescreen Main Container with Bidirectional Scroll Reveals */}
        <main className="w-full max-w-[1600px] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 2xl:px-16 space-y-16 sm:space-y-24 py-6 sm:py-8">
          <div className="scroll-reveal">
            <Hero />
          </div>
          <div className="scroll-reveal">
            <Projects />
          </div>
          <div className="scroll-reveal">
            <Skills />
          </div>
          <div className="scroll-reveal">
            <Experience />
          </div>
          <div className="scroll-reveal">
            <Education />
          </div>
          <div className="scroll-reveal">
            <Certifications />
          </div>
          <div className="scroll-reveal">
            <Testimonials />
          </div>
          <div className="scroll-reveal">
            <Footer onOpenAdmin={() => setIsAdminOpen(true)} />
          </div>
        </main>
      </div>
    </PortfolioDataProvider>
  );
}


