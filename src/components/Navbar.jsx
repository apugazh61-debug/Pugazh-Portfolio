import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Search, Terminal, Sparkles, Github, ExternalLink } from 'lucide-react';

export default function Navbar({ onOpenPalette }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 bg-[var(--nav-bg)] backdrop-blur-2xl border-b border-theme-border theme-transition">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 2xl:px-16 py-3.5 flex items-center justify-between">
        {/* Brand Logo with Live Status Indicator */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="flex items-center gap-2.5 font-mono font-bold text-base sm:text-lg text-theme-text tracking-wide group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-theme-surface-2 border border-theme-border group-hover:border-theme-accent transition-colors duration-200 shadow-inner">
              <Terminal className="w-4 h-4 text-theme-accent group-hover:scale-110 transition-transform duration-200" />
            </div>
            <span>
              pugazhenthi<span className="text-theme-accent">.dev</span>
            </span>
          </a>

          {/* Quick System Badge */}
          <div className="hidden xl:inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-theme-surface-2/60 border border-theme-border text-[11px] font-mono text-theme-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM v2.5 • ONLINE</span>
          </div>
        </div>

        {/* Center / Right Menu */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 font-mono text-[13px] text-theme-muted">
            <a href="#overview" className="transition-all duration-150 hover:text-theme-accent hover:translate-y-[-1px]">
              // overview
            </a>
            <a href="#projects" className="transition-all duration-150 hover:text-theme-accent hover:translate-y-[-1px]">
              // projects
            </a>
            <a href="#skills" className="transition-all duration-150 hover:text-theme-accent hover:translate-y-[-1px]">
              // skills
            </a>
            <a href="#experience" className="transition-all duration-150 hover:text-theme-accent hover:translate-y-[-1px]">
              // experience
            </a>
            <a href="#certs" className="transition-all duration-150 hover:text-theme-accent hover:translate-y-[-1px]">
              // credentials
            </a>
            <a
              href="#contact"
              className="px-3 py-1 rounded-md bg-theme-accent/10 border border-theme-accent/30 text-theme-accent hover:bg-theme-accent hover:text-[var(--btn-primary-text)] transition-all duration-200 font-semibold"
            >
              contact
            </a>
          </nav>

          {/* Quick Command Palette Trigger */}
          <button
            onClick={onOpenPalette}
            className="flex items-center gap-2 bg-theme-surface-2/90 border border-theme-border text-theme-muted px-3 py-1.5 rounded-xl font-mono text-xs hover:border-theme-accent hover:text-theme-text transition-all duration-200 shadow-sm"
            title="Open Command Palette (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-theme-accent" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline bg-theme-surface border border-theme-border text-[10px] px-1.5 py-0.5 rounded text-theme-muted font-sans font-semibold">
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            title="Toggle theme"
            className="bg-theme-surface-2 border border-theme-border text-theme-text p-2 sm:px-3 sm:py-1.5 rounded-xl font-mono text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer select-none hover:border-theme-accent hover:text-theme-accent transition-all duration-200"
          >
            {theme === 'dark' ? (
              <Moon className="w-3.5 h-3.5 text-theme-accent" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-theme-accent" />
            )}
            <span className="hidden sm:inline">{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

