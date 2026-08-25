import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-theme-bg text-theme-text font-body theme-transition selection:bg-theme-accent selection:text-[#051313] relative overflow-hidden">
      {/* Laser Scroll Progress Bar & Floating Back-To-Top Button */}
      <ScrollProgress />

      {/* Dynamic Ambient Background Aura */}
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-theme-accent/15 via-theme-accent-cyan/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-aurora-glow"></div>
      <div className="fixed top-1/3 -right-40 w-[600px] h-[600px] bg-theme-accent-purple/10 blur-[150px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-10 -left-40 w-[600px] h-[600px] bg-theme-accent/10 blur-[150px] pointer-events-none -z-10"></div>

      {/* Interactive Command Palette Modal (Ctrl + K) */}
      <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />

      {/* Navigation Header */}
      <Navbar onOpenPalette={() => setIsPaletteOpen(true)} />

      {/* Full-width Widescreen Main Container */}
      <main className="w-full max-w-[1600px] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 2xl:px-16 space-y-16 sm:space-y-24 py-6 sm:py-8">
        <Hero />
        <BentoGrid />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Footer />
      </main>
    </div>
  );
}

