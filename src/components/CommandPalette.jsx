import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Search, Sparkles, FolderGit2, Briefcase, GraduationCap, Mail, Phone, Moon, Sun, Github, Linkedin, X, Terminal } from 'lucide-react';

export default function CommandPalette({ isOpen, onClose }) {
  const { theme, toggleTheme } = useTheme();
  const [search, setSearch] = useState('');
  const [copiedText, setCopiedText] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(`${label} copied!`);
    setTimeout(() => {
      setCopiedText('');
      onClose();
    }, 1200);
  };

  const actions = [
    { label: 'Featured Projects', icon: FolderGit2, href: '#projects', category: 'Navigation' },
    { label: 'Technical Skills Matrix', icon: Sparkles, href: '#skills', category: 'Navigation' },
    { label: 'Work Experience & Internships', icon: Briefcase, href: '#experience', category: 'Navigation' },
    { label: 'Education & Certifications', icon: GraduationCap, href: '#certs', category: 'Navigation' },
    { label: 'Contact & Direct Message', icon: Mail, href: '#contact', category: 'Navigation' },
    {
      label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      icon: theme === 'dark' ? Sun : Moon,
      onClick: () => { toggleTheme(); onClose(); },
      category: 'Actions'
    },
    {
      label: 'Copy Email (jayapugazh947@gmail.com)',
      icon: Mail,
      onClick: () => copyToClipboard('jayapugazh947@gmail.com', 'Email'),
      category: 'Actions'
    },
    {
      label: 'Copy Phone (+91 9943205075)',
      icon: Phone,
      onClick: () => copyToClipboard('+919943205075', 'Phone number'),
      category: 'Actions'
    },
    {
      label: 'Visit GitHub (@apugazh61-debug)',
      icon: Github,
      onClick: () => { window.open('https://github.com/apugazh61-debug', '_blank'); onClose(); },
      category: 'External'
    },
    {
      label: 'Visit LinkedIn (Pugazhenthi S)',
      icon: Linkedin,
      onClick: () => { window.open('https://www.linkedin.com/in/pugazhenthi-s-920556331', '_blank'); onClose(); },
      category: 'External'
    },
  ];

  const filteredActions = actions.filter(action =>
    action.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-lg bg-theme-surface border border-theme-border rounded-xl shadow-2xl overflow-hidden glass-card theme-transition"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-theme-border bg-theme-surface-2/50">
          <Search className="w-4 h-4 text-theme-accent" />
          <input
            type="text"
            placeholder="Type a command or search sections..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-sm text-theme-text placeholder:text-theme-muted/70 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-theme-muted hover:text-theme-text hover:bg-theme-surface"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 font-mono text-xs">
          {copiedText && (
            <div className="p-2 mb-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded text-center">
              ✓ {copiedText}
            </div>
          )}

          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-theme-muted">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick();
                    } else if (item.href) {
                      const el = document.querySelector(item.href);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      onClose();
                    }
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-theme-text hover:bg-theme-surface-2 hover:text-theme-accent cursor-pointer transition-colors duration-150 group"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-theme-muted group-hover:text-theme-accent transition-colors" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] text-theme-muted/60 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2 border-t border-theme-border bg-theme-surface-2/30 flex items-center justify-between text-[11px] font-mono text-theme-muted">
          <span>Tip: Navigate quickly with shortcuts</span>
          <span className="bg-theme-surface-2 border border-theme-border px-1.5 py-0.5 rounded text-[10px]">ESC to close</span>
        </div>
      </div>
    </div>
  );
}
