import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, Sparkles, CheckCircle2, AlertCircle, MessageSquare, Copy, Check, Terminal, Globe } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

export default function Footer({ onOpenAdmin }) {
  const { data } = usePortfolioData();
  const profile = data?.profile || {};
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState('');
  const [messageText, setMessageText] = useState('');

  const quickPrompts = [
    '💼 Let’s discuss a Software Engineer role',
    '🚀 Have an engineering project / opening',
    '💬 Let’s connect and collaborate',
  ];

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/xjkvknzw', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('SUCCESS');
        form.reset();
        setMessageText('');
      } else {
        setStatus('ERROR');
      }
    } catch {
      setStatus('ERROR');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="border-t border-theme-border pt-12 sm:pt-16 pb-14">
      <div className="glass-card bg-theme-surface border border-theme-border rounded-3xl sm:rounded-[36px] p-6 sm:p-10 lg:p-12 theme-transition shadow-2xl relative overflow-hidden">
        {/* Ambient Corner Aurora Lights */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-theme-accent/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-theme-accent-cyan/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative z-10">
          {/* Left Column: Direct Info & Quick Channels (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Available for Software Engineering Roles</span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-theme-text tracking-tight mb-3">
                Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-accent-purple">extraordinary.</span>
              </h2>

              <p className="text-theme-muted text-sm sm:text-base leading-relaxed font-body">
                Software Engineer specialized in <strong className="text-theme-text font-semibold">React, FastAPI, Python, Java Spring Boot &amp; Computer Vision</strong>. Open to exciting engineering challenges and high-impact product teams.
              </p>
            </div>

            {/* Direct Contact Cards with 1-Click Copy (Neomorphism) */}
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="neomorph-card flex items-center justify-between p-3.5 sm:p-4 rounded-2xl transition-all">
                <div className="flex items-center gap-3">
                  <div className="neomorph-btn p-2.5 rounded-xl text-theme-accent flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-theme-muted font-semibold">Direct Email Address</div>
                    <a href="mailto:jayapugazh947@gmail.com" className="font-bold text-theme-text hover:text-theme-accent transition-colors">
                      jayapugazh947@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('jayapugazh947@gmail.com', 'email')}
                  className="neomorph-btn p-2.5 rounded-xl text-theme-muted hover:text-theme-accent transition-colors cursor-pointer flex items-center justify-center"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="neomorph-card flex items-center justify-between p-3.5 sm:p-4 rounded-2xl transition-all">
                <div className="flex items-center gap-3">
                  <div className="neomorph-btn p-2.5 rounded-xl text-theme-accent flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-theme-muted font-semibold">Call or WhatsApp</div>
                    <a href="tel:+919943205075" className="font-bold text-theme-text hover:text-theme-accent transition-colors">
                      +91 99432 05075
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy('+919943205075', 'phone')}
                  className="neomorph-btn p-2.5 rounded-xl text-theme-muted hover:text-theme-accent transition-colors cursor-pointer flex items-center justify-center"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social & Portfolio Links (Liquid Glass Style) */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-2 font-mono text-xs">
              <a
                href={profile.portfolioUrl || "https://pugazh-portfolio-pearl.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-btn flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-theme-accent font-medium min-w-0 group"
                title="View Pearl Portfolio"
              >
                <Globe className="w-4 h-4 flex-shrink-0 text-theme-accent group-hover:rotate-12 transition-transform" />
                <span>Pearl Portfolio ↗</span>
              </a>
              <a
                href={profile.githubUrl || "https://github.com/apugazh61-debug?tab=overview&from=2026-08-01&to=2026-08-26"}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-btn flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-theme-text font-medium min-w-0 group"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 flex-shrink-0 group-hover:scale-110 group-hover:text-theme-accent transition-all duration-200" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedinUrl || "https://www.linkedin.com/in/pugazhenthi-s-920556331?utm_source=share_via&utm_content=profile&utm_medium=member_android"}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass-btn flex items-center gap-2 px-3.5 py-2.5 rounded-2xl text-theme-text font-medium min-w-0 group"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 flex-shrink-0 group-hover:scale-110 group-hover:text-theme-accent transition-all duration-200" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Dispatch Terminal (Span 6) */}
          <div className="lg:col-span-6 glass-card bg-theme-surface-2/70 border border-theme-border rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-theme-border/60">
              <div className="flex items-center gap-2 font-mono text-[11px] text-theme-accent uppercase tracking-wider font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>Direct Dispatch Hub</span>
              </div>
              <span className="font-mono text-[10px] text-theme-muted">Instant Forwarding</span>
            </div>

            {/* Quick Template Prompts */}
            <div className="mb-3">
              <div className="font-mono text-[10px] text-theme-muted mb-1.5">Quick Templates:</div>
              <div className="flex flex-wrap gap-1">
                {quickPrompts.map((p, pIdx) => (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => setMessageText(p)}
                    className="text-[10px] font-mono text-left px-2 py-1 rounded-lg bg-theme-surface border border-theme-border text-theme-muted hover:border-theme-accent hover:text-theme-accent transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5 font-mono text-xs">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-theme-muted text-[10px] mb-1">Name *</label>
                  <input type="text" name="name" required placeholder="e.g. Minnu"
                    className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text placeholder:text-theme-muted/40 focus:outline-none focus:border-theme-accent transition-colors font-body text-[11px]"
                  />
                </div>
                <div>
                  <label className="block text-theme-muted text-[10px] mb-1">Email *</label>
                  <input type="email" name="email" required placeholder="minnu@company.com"
                    className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text placeholder:text-theme-muted/40 focus:outline-none focus:border-theme-accent transition-colors font-body text-[11px]"
                  />
                </div>
              </div>

              {/* Row 2: Company + Phone */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-theme-muted text-[10px] mb-1">Company</label>
                  <input type="text" name="company" placeholder="Google, Startup..."
                    className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text placeholder:text-theme-muted/40 focus:outline-none focus:border-theme-accent transition-colors font-body text-[11px]"
                  />
                </div>
                <div>
                  <label className="block text-theme-muted text-[10px] mb-1">Phone</label>
                  <input type="tel" name="phone" placeholder="+91 98765 43210"
                    className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text placeholder:text-theme-muted/40 focus:outline-none focus:border-theme-accent transition-colors font-body text-[11px]"
                  />
                </div>
              </div>

              {/* Row 3: Location */}
              <div>
                <label className="block text-theme-muted text-[10px] mb-1">Location / City</label>
                <input type="text" name="location" placeholder="Chennai, Bangalore, Remote"
                  className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text placeholder:text-theme-muted/40 focus:outline-none focus:border-theme-accent transition-colors font-body text-[11px]"
                />
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-theme-muted text-[10px] mb-1">Message *</label>
                <textarea name="message" rows="3" required
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Share your opportunity or inquiry..."
                  className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text placeholder:text-theme-muted/40 focus:outline-none focus:border-theme-accent transition-colors resize-none font-body text-[11px]"
                />
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full font-mono text-xs font-semibold py-3 rounded-xl bg-theme-accent text-[var(--btn-primary-text)] border border-theme-accent hover:brightness-110 shadow-md shadow-theme-accent/20 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? <span>Dispatching...</span> : (
                  <><Send className="w-3.5 h-3.5" /><span>Send Message to Pugazhenthi</span></>
                )}
              </button>

              {status === 'SUCCESS' && (
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-center flex items-center justify-center gap-2 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Message dispatched successfully!</span>
                </div>
              )}
              {status === 'ERROR' && (
                <div className="p-2.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 rounded-xl text-center flex items-center justify-center gap-2 text-[11px]">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Failed — email jayapugazh947@gmail.com directly</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>


      {/* Bottom Copyright Bar */}
      <div className="mt-8 text-center font-mono text-xs text-theme-muted flex items-center justify-center px-4">
        <div>
          © 2026{' '}
          <button
            type="button"
            onClick={onOpenAdmin}
            className="hover:text-theme-accent transition-colors underline decoration-transparent hover:decoration-theme-accent cursor-pointer inline font-medium"
            title="Master Admin Portal"
          >
            Pugazhenthi
          </button>{' '}
          S. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

