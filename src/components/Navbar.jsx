import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Search, Terminal, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenPalette }) {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: '// projects' },
    { href: '#skills',   label: '// skills'   },
    { href: '#experience', label: '// experience' },
    { href: '#certs',    label: '// credentials' },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[var(--nav-bg)] backdrop-blur-2xl border-b border-theme-border theme-transition">
      <div className="w-full max-w-[1600px] 2xl:max-w-[1780px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 2xl:px-16 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="flex items-center gap-2.5 font-mono font-bold text-base sm:text-lg text-theme-text tracking-wide group"
            onClick={closeMobile}
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-theme-surface-2 border border-theme-border group-hover:border-theme-accent transition-colors duration-200 shadow-inner">
              <Terminal className="w-4 h-4 text-theme-accent group-hover:scale-110 transition-transform duration-200" />
            </div>
            <span>
              pugazhenthi<span className="text-theme-accent">.dev</span>
            </span>
          </a>
        </div>

        {/* Center / Right Menu */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 font-mono text-[13px] text-theme-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-all duration-150 hover:text-theme-accent hover:translate-y-[-1px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-3 py-1 rounded-md bg-theme-accent/10 border border-theme-accent/30 text-theme-accent hover:bg-theme-accent hover:text-[var(--btn-primary-text)] transition-all duration-200 font-semibold"
            >
              contact
            </a>
          </nav>

          {/* Search / Command Palette */}
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

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-xl bg-theme-surface-2 border border-theme-border text-theme-text hover:border-theme-accent hover:text-theme-accent transition-all duration-200"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-theme-border bg-[var(--nav-bg)] backdrop-blur-2xl px-4 py-4 flex flex-col gap-1 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="px-4 py-3 rounded-xl text-theme-muted hover:text-theme-accent hover:bg-theme-surface-2 transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className="mt-2 px-4 py-3 rounded-xl bg-theme-accent/10 border border-theme-accent/30 text-theme-accent hover:bg-theme-accent hover:text-[var(--btn-primary-text)] transition-all duration-200 font-semibold text-center"
          >
            contact
          </a>
        </div>
      )}
    </header>
  );
}
