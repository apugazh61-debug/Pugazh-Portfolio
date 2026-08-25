/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'theme-bg': 'var(--bg)',
        'theme-surface': 'var(--surface)',
        'theme-surface-2': 'var(--surface-2)',
        'theme-surface-3': 'var(--surface-3)',
        'theme-text': 'var(--text)',
        'theme-muted': 'var(--text-muted)',
        'theme-accent': 'var(--accent)',
        'theme-accent-dim': 'var(--accent-dim)',
        'theme-accent-cyan': 'var(--accent-cyan)',
        'theme-accent-purple': 'var(--accent-purple)',
        'theme-warm': 'var(--warm)',
        'theme-border': 'var(--border)',
        'theme-border-glow': 'var(--border-glow)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.2s infinite',
        'cursor-blink': 'blink 1s steps(1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'aurora-glow': 'aurora 10s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(79, 209, 197, 0.6)' },
          '70%': { boxShadow: '0 0 0 10px rgba(79, 209, 197, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(79, 209, 197, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}

