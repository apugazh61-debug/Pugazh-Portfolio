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
import AIAssistantWidget from './components/AIAssistantWidget';
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
    link.type = 'image/jpeg';
    link.href = '/profile.jpg';
  }, []);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('from-bottom', 'from-top');
          entry.target.classList.add('is-visible');
          // Once revealed, keep it smoothly visible to eliminate any jitter/flickering
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.05,
      rootMargin: '0px 0px 40px 0px',
    });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
        el.classList.add('is-visible');
      } else {
        el.classList.add('from-bottom');
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <PortfolioDataProvider>
      <div className="min-h-screen bg-theme-bg text-theme-text font-body theme-transition selection:bg-theme-accent selection:text-[#051313] relative overflow-hidden">
        {/* Dynamic Ambient Background Aura */}
        <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-theme-accent/15 via-theme-accent-cyan/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-aurora-glow"></div>
        <div className="fixed top-1/3 -right-40 w-[600px] h-[600px] bg-theme-accent-purple/10 blur-[150px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-10 -left-40 w-[600px] h-[600px] bg-theme-accent/10 blur-[150px] pointer-events-none -z-10"></div>

        {/* Global Controls & Widgets */}
        <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />
        <BackToTop />
        <AIAssistantWidget />
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


