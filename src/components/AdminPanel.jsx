import React, { useState } from 'react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import {
  Lock, KeyRound, X, Plus, Trash2, Edit3, Check, RefreshCw,
  FolderGit2, Briefcase, Code2, Award, Quote, Settings, Eye,
  AlertTriangle, ShieldCheck, Download, Upload, LogOut, CheckCircle2, ChevronRight
} from 'lucide-react';

const ADMIN_PASS = 'Pugazhalfiya';

export default function AdminPanel({ isOpen, onClose }) {
  const {
    data,
    updateProfile,
    addProject,
    updateProject,
    deleteProject,
    addExperience,
    updateExperience,
    deleteExperience,
    updateSkill,
    addSkillToCategory,
    deleteSkillFromCategory,
    addCertification,
    updateCertification,
    deleteCertification,
    addCompetition,
    updateCompetition,
    deleteCompetition,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    resetToDefault,
  } = usePortfolioData();

  const [passwordInput, setPasswordInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState('projects');
  const [toastMsg, setToastMsg] = useState('');

  // Editing state
  const [editingProject, setEditingProject] = useState(null);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: '', subtitle: '', category: 'Full Stack', tagBadge: 'Full Stack',
    tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    description: '', highlights: '', tech: '', github: '', liveUrl: ''
  });

  const [editingExp, setEditingExp] = useState(null);
  const [isAddingExp, setIsAddingExp] = useState(false);
  const [isTrainingExp, setIsTrainingExp] = useState(false);
  const [expForm, setExpForm] = useState({
    role: '', company: '', location: '', period: '', type: 'Corporate',
    color: 'bg-teal-400', badge: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
    achievements: '', tech: ''
  });

  const [newSkillForm, setNewSkillForm] = useState({ categoryIdx: 0, name: '', level: 75 });
  const [newCertForm, setNewCertForm] = useState({ name: '', issuer: '', code: 'CERT-01', tag: 'Specialization' });
  const [newCompForm, setNewCompForm] = useState({ name: '', org: '', badge: 'Hackathon', color: 'text-teal-400 bg-teal-500/10' });
  const [newTestimonialForm, setNewTestimonialForm] = useState({ name: '', title: '', company: '', quote: '', initials: 'GM', stars: 5, color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' });

  const [profileForm, setProfileForm] = useState({
    statusBadge: data.profile?.statusBadge || '',
    email: data.profile?.email || '',
    phone: data.profile?.phone || '',
    cgpa: data.profile?.cgpa || '',
    college: data.profile?.college || '',
    githubUrl: data.profile?.githubUrl || '',
    linkedinUrl: data.profile?.linkedinUrl || '',
  });

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASS) {
      setIsAuthenticated(true);
      setAuthError('');
      setPasswordInput('');
      showToast('Welcome Pugazhenthi! Admin mode unlocked.');
    } else {
      setAuthError('Incorrect password. Access denied.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed top-6 right-6 z-[10000] bg-emerald-500 text-black px-4 py-2.5 rounded-xl font-mono text-xs font-bold shadow-2xl flex items-center gap-2 animate-slideDown">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* 1. AUTHENTICATION MODAL */}
      {!isAuthenticated ? (
        <div className="w-full max-w-md glass-card bg-theme-surface border border-theme-accent/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-theme-muted hover:text-theme-text hover:bg-theme-surface-2 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-theme-accent/15 border border-theme-accent/40 flex items-center justify-center text-theme-accent shadow-lg shadow-theme-accent/20">
            <Lock className="w-7 h-7" />
          </div>

          <h3 className="font-display font-bold text-xl text-theme-text mb-1">
            Admin Authentication
          </h3>
          <p className="font-mono text-xs text-theme-muted mb-6">
            Enter master key to manage projects, experience, skills &amp; credentials directly.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 font-mono text-xs text-left">
            <div>
              <label className="block text-theme-muted text-[11px] mb-1.5 font-semibold">Master Password</label>
              <div className="relative">
                <input
                  type="password"
                  autoFocus
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setAuthError('');
                  }}
                  placeholder="Enter admin password..."
                  className="w-full bg-theme-surface-2 border border-theme-border rounded-xl px-4 py-3 text-theme-text placeholder:text-theme-muted/40 focus:outline-none focus:border-theme-accent transition-colors font-mono text-sm"
                />
                <KeyRound className="w-4 h-4 text-theme-muted absolute right-3.5 top-3.5" />
              </div>
              {authError && (
                <div className="text-rose-400 text-[11px] mt-1.5 flex items-center gap-1 font-mono">
                  <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{authError}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full font-mono text-xs font-bold py-3.5 rounded-xl bg-theme-accent text-[var(--btn-primary-text)] hover:brightness-110 shadow-lg shadow-theme-accent/25 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Unlock Admin Dashboard</span>
            </button>
          </form>
        </div>
      ) : (
        /* 2. ADMIN DASHBOARD MODAL */
        <div className="w-full max-w-5xl h-[90vh] max-h-[850px] glass-card bg-theme-surface border border-theme-accent/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden relative">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-theme-border/70 flex items-center justify-between bg-theme-surface-2/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-theme-accent/20 border border-theme-accent/40 text-theme-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display font-bold text-base sm:text-lg text-theme-text flex items-center gap-2">
                  <span>Portfolio Control Hub</span>
                  <span className="font-mono text-[10px] text-theme-accent bg-theme-accent/15 px-2 py-0.5 rounded-full border border-theme-accent/30">
                    Live Mode
                  </span>
                </div>
                <div className="font-mono text-[11px] text-theme-muted">
                  Instant live edit &amp; delete without touching codebase
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleLogout}
                className="font-mono text-xs text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Lock & Exit"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Lock</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-theme-muted hover:text-theme-text hover:bg-theme-surface-2 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 px-4 py-2.5 border-b border-theme-border/60 bg-theme-surface overflow-x-auto scrollbar-none font-mono text-xs">
            {[
              { id: 'projects', label: 'Projects', icon: FolderGit2, count: data.projects.length },
              { id: 'experience', label: 'Experience', icon: Briefcase, count: data.experiences.length + data.additionalTraining.length },
              { id: 'skills', label: 'Skills', icon: Code2 },
              { id: 'certs', label: 'Certifications', icon: Award, count: data.certifications.length + data.competitions.length },
              { id: 'testimonials', label: 'Mentors', icon: Quote, count: data.testimonials.length },
              { id: 'profile', label: 'Profile & Status', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-theme-accent text-[var(--btn-primary-text)] font-bold shadow-md'
                      : 'text-theme-muted hover:text-theme-text hover:bg-theme-surface-2'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeTab === tab.id ? 'bg-black/20' : 'bg-theme-surface-2'}`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Body Content (Scrollable) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

            {/* TAB 1: PROJECTS */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-lg text-theme-text">Manage Projects</h4>
                  <button
                    onClick={() => {
                      setIsAddingProject(true);
                      setEditingProject(null);
                      setProjectForm({
                        title: '', subtitle: '', category: 'Full Stack', tagBadge: 'Full Stack',
                        tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
                        description: '', highlights: '', tech: '', github: '', liveUrl: ''
                      });
                    }}
                    className="font-mono text-xs font-bold px-3.5 py-2 rounded-xl bg-theme-accent text-[var(--btn-primary-text)] hover:brightness-110 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Project</span>
                  </button>
                </div>

                {/* Add / Edit Project Form */}
                {(isAddingProject || editingProject) && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface-2 border-2 border-theme-accent/50 space-y-3 font-mono text-xs animate-fadeIn">
                    <div className="flex justify-between items-center pb-2 border-b border-theme-border">
                      <span className="font-bold text-theme-accent">
                        {editingProject ? `Edit: ${editingProject.title}` : 'Add New Project'}
                      </span>
                      <button
                        onClick={() => { setIsAddingProject(false); setEditingProject(null); }}
                        className="text-theme-muted hover:text-theme-text"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Project Title *</label>
                        <input
                          type="text"
                          value={projectForm.title}
                          onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                          placeholder="e.g. AgriSync WMS Core"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Subtitle</label>
                        <input
                          type="text"
                          value={projectForm.subtitle}
                          onChange={(e) => setProjectForm({ ...projectForm, subtitle: e.target.value })}
                          placeholder="e.g. Agricultural Warehouse Management"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Category (Filter Tab)</label>
                        <select
                          value={projectForm.category}
                          onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        >
                          <option value="Full Stack">Full Stack</option>
                          <option value="AI">AI</option>
                          <option value="Python">Python</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Badge Tag</label>
                        <input
                          type="text"
                          value={projectForm.tagBadge}
                          onChange={(e) => setProjectForm({ ...projectForm, tagBadge: e.target.value })}
                          placeholder="e.g. Full Stack WMS"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Badge Color Theme</label>
                        <select
                          value={projectForm.tagColor}
                          onChange={(e) => setProjectForm({ ...projectForm, tagColor: e.target.value })}
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        >
                          <option value="text-teal-400 bg-teal-500/10 border-teal-500/30">Teal</option>
                          <option value="text-sky-400 bg-sky-500/10 border-sky-500/30">Sky Blue</option>
                          <option value="text-purple-400 bg-purple-500/10 border-purple-500/30">Purple</option>
                          <option value="text-amber-400 bg-amber-500/10 border-amber-500/30">Amber</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-theme-muted text-[10px] mb-1">Description *</label>
                      <textarea
                        rows="2"
                        value={projectForm.description}
                        onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                        placeholder="Brief summary of the project architecture and results..."
                        className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text resize-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Highlights (comma separated)</label>
                        <input
                          type="text"
                          value={projectForm.highlights}
                          onChange={(e) => setProjectForm({ ...projectForm, highlights: e.target.value })}
                          placeholder="Live asset telemetry, Deployed on Vercel"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Tech Stack (comma separated)</label>
                        <input
                          type="text"
                          value={projectForm.tech}
                          onChange={(e) => setProjectForm({ ...projectForm, tech: e.target.value })}
                          placeholder="React.js, Tailwind CSS, Python, REST APIs"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">GitHub Repo URL</label>
                        <input
                          type="text"
                          value={projectForm.github}
                          onChange={(e) => setProjectForm({ ...projectForm, github: e.target.value })}
                          placeholder="https://github.com/apugazh61-debug/..."
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Live Demo URL (optional)</label>
                        <input
                          type="text"
                          value={projectForm.liveUrl}
                          onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                          placeholder="https://your-project.vercel.app"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        if (!projectForm.title.trim()) return alert('Title is required');
                        const projData = {
                          title: projectForm.title,
                          subtitle: projectForm.subtitle,
                          category: projectForm.category,
                          tagBadge: projectForm.tagBadge || projectForm.category,
                          tagColor: projectForm.tagColor,
                          description: projectForm.description,
                          highlights: projectForm.highlights ? projectForm.highlights.split(',').map((s) => s.trim()).filter(Boolean) : [],
                          tech: projectForm.tech ? projectForm.tech.split(',').map((s) => s.trim()).filter(Boolean) : [],
                          github: projectForm.github || 'https://github.com/apugazh61-debug',
                          liveUrl: projectForm.liveUrl,
                        };

                        if (editingProject) {
                          updateProject(editingProject.id, projData);
                          showToast(`Updated "${projData.title}"`);
                        } else {
                          addProject(projData);
                          showToast(`Added "${projData.title}"`);
                        }
                        setIsAddingProject(false);
                        setEditingProject(null);
                      }}
                      className="w-full py-2.5 rounded-xl bg-theme-accent text-[var(--btn-primary-text)] font-bold hover:brightness-110 transition-all cursor-pointer"
                    >
                      {editingProject ? 'Save Changes' : 'Create Project'}
                    </button>
                  </div>
                )}

                {/* Project List */}
                <div className="space-y-3 font-mono text-xs">
                  {data.projects.map((p) => (
                    <div
                      key={p.id}
                      className="p-4 rounded-2xl bg-theme-surface-2/70 border border-theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-theme-accent/50 transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-theme-text text-sm">{p.title}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${p.tagColor}`}>
                            {p.category}
                          </span>
                        </div>
                        <div className="text-[11px] text-theme-muted line-clamp-1 mt-0.5">{p.description}</div>
                        <div className="text-[10px] text-theme-muted/70 mt-1">Tech: {p.tech.join(', ')}</div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                        <button
                          onClick={() => {
                            setEditingProject(p);
                            setIsAddingProject(false);
                            setProjectForm({
                              title: p.title,
                              subtitle: p.subtitle || '',
                              category: p.category,
                              tagBadge: p.tagBadge || p.category,
                              tagColor: p.tagColor || 'text-teal-400 bg-teal-500/10 border-teal-500/30',
                              description: p.description,
                              highlights: (p.highlights || []).join(', '),
                              tech: (p.tech || []).join(', '),
                              github: p.github || '',
                              liveUrl: p.liveUrl || ''
                            });
                          }}
                          className="p-2 rounded-xl bg-theme-surface border border-theme-border text-theme-accent hover:bg-theme-accent hover:text-[var(--btn-primary-text)] transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete project "${p.title}"?`)) {
                              deleteProject(p.id);
                              showToast(`Deleted "${p.title}"`);
                            }
                          }}
                          className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: EXPERIENCE */}
            {activeTab === 'experience' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-bold text-lg text-theme-text">Manage Experience &amp; Internships</h4>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setIsAddingExp(true);
                        setIsTrainingExp(false);
                        setEditingExp(null);
                        setExpForm({
                          role: '', company: '', location: '', period: '', type: 'Corporate',
                          color: 'bg-teal-400', badge: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
                          achievements: '', tech: ''
                        });
                      }}
                      className="font-mono text-xs font-bold px-3 py-1.5 rounded-xl bg-theme-accent text-[var(--btn-primary-text)] hover:brightness-110 flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Corporate</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsAddingExp(true);
                        setIsTrainingExp(true);
                        setEditingExp(null);
                        setExpForm({
                          role: '', company: '', location: '', period: '', type: 'Training',
                          color: 'bg-purple-400', badge: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
                          achievements: '', tech: ''
                        });
                      }}
                      className="font-mono text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/40 hover:bg-purple-500 hover:text-white flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Training</span>
                    </button>
                  </div>
                </div>

                {/* Form */}
                {(isAddingExp || editingExp) && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface-2 border-2 border-theme-accent/50 space-y-3 font-mono text-xs animate-fadeIn">
                    <div className="flex justify-between items-center pb-2 border-b border-theme-border">
                      <span className="font-bold text-theme-accent">
                        {editingExp ? `Edit: ${editingExp.company}` : `Add New ${isTrainingExp ? 'Training' : 'Corporate'} Experience`}
                      </span>
                      <button
                        onClick={() => { setIsAddingExp(false); setEditingExp(null); }}
                        className="text-theme-muted hover:text-theme-text"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Role Title *</label>
                        <input
                          type="text"
                          value={expForm.role}
                          onChange={(e) => setExpForm({ ...expForm, role: e.target.value })}
                          placeholder="e.g. AI Development Intern"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Company *</label>
                        <input
                          type="text"
                          value={expForm.company}
                          onChange={(e) => setExpForm({ ...expForm, company: e.target.value })}
                          placeholder="e.g. Blaze Wings Technology Pvt Ltd"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Period</label>
                        <input
                          type="text"
                          value={expForm.period}
                          onChange={(e) => setExpForm({ ...expForm, period: e.target.value })}
                          placeholder="e.g. Jul 2026 – Dec 2026"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Location</label>
                        <input
                          type="text"
                          value={expForm.location}
                          onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
                          placeholder="e.g. Salem / Remote"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                      <div>
                        <label className="block text-theme-muted text-[10px] mb-1">Badge Type</label>
                        <input
                          type="text"
                          value={expForm.type}
                          onChange={(e) => setExpForm({ ...expForm, type: e.target.value })}
                          placeholder="Corporate or Training"
                          className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-theme-muted text-[10px] mb-1">Achievements (One per line or separate by semicolon)</label>
                      <textarea
                        rows="3"
                        value={expForm.achievements}
                        onChange={(e) => setExpForm({ ...expForm, achievements: e.target.value })}
                        placeholder="Bullet 1&#10;Bullet 2&#10;Bullet 3"
                        className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-theme-muted text-[10px] mb-1">Tech Stack (comma separated)</label>
                      <input
                        type="text"
                        value={expForm.tech}
                        onChange={(e) => setExpForm({ ...expForm, tech: e.target.value })}
                        placeholder="React.js, Python, REST APIs, Git"
                        className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text"
                      />
                    </div>

                    <button
                      onClick={() => {
                        if (!expForm.role.trim() || !expForm.company.trim()) return alert('Role & Company are required');
                        const expData = {
                          role: expForm.role,
                          company: expForm.company,
                          location: expForm.location || 'Office Premises',
                          period: expForm.period || '2026',
                          type: expForm.type || (isTrainingExp ? 'Training' : 'Corporate'),
                          color: isTrainingExp ? 'bg-purple-400' : 'bg-teal-400',
                          badge: isTrainingExp ? 'text-purple-400 bg-purple-500/10 border-purple-500/30' : 'text-teal-400 bg-teal-500/10 border-teal-500/30',
                          achievements: expForm.achievements ? expForm.achievements.split('\n').map((s) => s.trim()).filter(Boolean) : [],
                          tech: expForm.tech ? expForm.tech.split(',').map((s) => s.trim()).filter(Boolean) : [],
                        };

                        if (editingExp) {
                          updateExperience(editingExp.id, expData, editingExp._isTraining);
                          showToast(`Updated "${expData.company}"`);
                        } else {
                          addExperience(expData, isTrainingExp);
                          showToast(`Added "${expData.company}"`);
                        }
                        setIsAddingExp(false);
                        setEditingExp(null);
                      }}
                      className="w-full py-2.5 rounded-xl bg-theme-accent text-[var(--btn-primary-text)] font-bold hover:brightness-110 transition-all cursor-pointer"
                    >
                      {editingExp ? 'Save Changes' : 'Create Experience'}
                    </button>
                  </div>
                )}

                {/* Experience Cards */}
                <div className="space-y-4">
                  <div className="font-bold text-xs text-theme-accent font-mono">1. Corporate Internships</div>
                  <div className="space-y-2.5 font-mono text-xs">
                    {data.experiences.map((exp) => (
                      <div key={exp.id} className="p-3.5 rounded-2xl bg-theme-surface-2 border border-theme-border flex items-center justify-between gap-3">
                        <div>
                          <div className="font-bold text-theme-text text-sm">{exp.company} — <span className="text-theme-accent font-normal">{exp.role}</span></div>
                          <div className="text-[11px] text-theme-muted mt-0.5">{exp.period} · {exp.location}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingExp({ ...exp, _isTraining: false });
                              setIsAddingExp(false);
                              setExpForm({
                                role: exp.role,
                                company: exp.company,
                                location: exp.location,
                                period: exp.period,
                                type: exp.type,
                                color: exp.color,
                                badge: exp.badge,
                                achievements: (exp.achievements || []).join('\n'),
                                tech: (exp.tech || []).join(', ')
                              });
                            }}
                            className="p-1.5 rounded-lg bg-theme-surface border border-theme-border text-theme-accent hover:bg-theme-accent hover:text-[var(--btn-primary-text)] cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete "${exp.company}"?`)) {
                                deleteExperience(exp.id, false);
                                showToast(`Deleted "${exp.company}"`);
                              }
                            }}
                            className="p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="font-bold text-xs text-purple-400 font-mono pt-2">2. Training Internships (More Training &amp; Internship section)</div>
                  <div className="space-y-2.5 font-mono text-xs">
                    {data.additionalTraining.map((exp) => (
                      <div key={exp.id} className="p-3.5 rounded-2xl bg-theme-surface-2 border border-theme-border flex items-center justify-between gap-3">
                        <div>
                          <div className="font-bold text-theme-text text-sm">{exp.company} — <span className="text-purple-400 font-normal">{exp.role}</span></div>
                          <div className="text-[11px] text-theme-muted mt-0.5">{exp.period} · {exp.location}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setEditingExp({ ...exp, _isTraining: true });
                              setIsAddingExp(false);
                              setExpForm({
                                role: exp.role,
                                company: exp.company,
                                location: exp.location,
                                period: exp.period,
                                type: exp.type,
                                color: exp.color,
                                badge: exp.badge,
                                achievements: (exp.achievements || []).join('\n'),
                                tech: (exp.tech || []).join(', ')
                              });
                            }}
                            className="p-1.5 rounded-lg bg-theme-surface border border-theme-border text-theme-accent hover:bg-theme-accent hover:text-[var(--btn-primary-text)] cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete "${exp.company}"?`)) {
                                deleteExperience(exp.id, true);
                                showToast(`Deleted "${exp.company}"`);
                              }
                            }}
                            className="p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: SKILLS & PERCENTAGES */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <h4 className="font-display font-bold text-lg text-theme-text">Live Skills &amp; Percentage Control</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.skills.map((deck, catIdx) => (
                    <div key={deck.id || catIdx} className="glass-card bg-theme-surface-2 border border-theme-border rounded-2xl p-4 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-theme-border font-mono text-xs font-bold text-theme-text">
                        <span>{deck.title} ({deck.category})</span>
                      </div>

                      <div className="space-y-3 font-mono text-xs">
                        {deck.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-theme-text font-semibold">{skill.name}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-theme-accent font-bold">{skill.level}%</span>
                                <button
                                  onClick={() => {
                                    if (window.confirm(`Delete skill "${skill.name}"?`)) {
                                      deleteSkillFromCategory(catIdx, sIdx);
                                      showToast(`Removed "${skill.name}"`);
                                    }
                                  }}
                                  className="text-rose-400/60 hover:text-rose-400 p-1"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                            <input
                              type="range"
                              min="1"
                              max="100"
                              value={skill.level}
                              onChange={(e) => updateSkill(catIdx, sIdx, { level: parseInt(e.target.value, 10) })}
                              className="w-full h-1.5 bg-theme-surface rounded-lg appearance-none cursor-pointer accent-teal-400"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Add Skill to this Category */}
                      <div className="pt-2 border-t border-theme-border flex gap-2 font-mono text-xs">
                        <input
                          type="text"
                          placeholder="New skill name..."
                          id={`new-skill-${catIdx}`}
                          className="flex-1 bg-theme-surface border border-theme-border rounded-lg px-2.5 py-1 text-theme-text text-[11px]"
                        />
                        <button
                          onClick={() => {
                            const input = document.getElementById(`new-skill-${catIdx}`);
                            if (input && input.value.trim()) {
                              addSkillToCategory(catIdx, { name: input.value.trim(), level: 75 });
                              showToast(`Added "${input.value.trim()}" to ${deck.title}`);
                              input.value = '';
                            }
                          }}
                          className="px-2.5 py-1 rounded-lg bg-theme-accent text-[var(--btn-primary-text)] font-bold text-[11px] cursor-pointer"
                        >
                          + Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: CERTIFICATIONS & COMPETITIONS */}
            {activeTab === 'certs' && (
              <div className="space-y-6">
                <h4 className="font-display font-bold text-lg text-theme-text">Manage Certifications &amp; Hackathons</h4>
                
                {/* 1. Certifications */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="font-bold text-theme-accent">1. Professional Certifications ({data.certifications.length})</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {data.certifications.map((c) => (
                      <div key={c.id} className="p-3 rounded-xl bg-theme-surface-2 border border-theme-border flex items-center justify-between gap-2">
                        <div>
                          <div className="font-bold text-theme-text text-xs">{c.name}</div>
                          <div className="text-[10px] text-theme-muted">{c.issuer} · {c.tag}</div>
                        </div>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete certification "${c.name}"?`)) {
                              deleteCertification(c.id);
                              showToast(`Deleted "${c.name}"`);
                            }
                          }}
                          className="p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add Cert Form */}
                  <div className="p-3 rounded-xl bg-theme-surface-2/60 border border-theme-border flex flex-wrap items-center gap-2">
                    <input
                      type="text" placeholder="Cert Name..."
                      value={newCertForm.name}
                      onChange={(e) => setNewCertForm({ ...newCertForm, name: e.target.value })}
                      className="flex-1 min-w-[150px] bg-theme-surface border border-theme-border rounded-lg px-2.5 py-1.5 text-theme-text text-xs"
                    />
                    <input
                      type="text" placeholder="Issuer (e.g. AWS)..."
                      value={newCertForm.issuer}
                      onChange={(e) => setNewCertForm({ ...newCertForm, issuer: e.target.value })}
                      className="w-36 bg-theme-surface border border-theme-border rounded-lg px-2.5 py-1.5 text-theme-text text-xs"
                    />
                    <button
                      onClick={() => {
                        if (!newCertForm.name.trim()) return alert('Name required');
                        addCertification({ ...newCertForm, tag: newCertForm.issuer });
                        showToast(`Added cert "${newCertForm.name}"`);
                        setNewCertForm({ name: '', issuer: '', code: 'CERT-01', tag: 'Specialization' });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-theme-accent text-[var(--btn-primary-text)] font-bold text-xs cursor-pointer"
                    >
                      + Add Cert
                    </button>
                  </div>
                </div>

                {/* 2. Hackathons */}
                <div className="space-y-3 font-mono text-xs pt-4 border-t border-theme-border">
                  <div className="font-bold text-theme-accent-cyan">2. Hackathons &amp; Summits ({data.competitions.length})</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {data.competitions.map((comp) => (
                      <div key={comp.id} className="p-3 rounded-xl bg-theme-surface-2 border border-theme-border flex items-center justify-between gap-2">
                        <div>
                          <div className="font-bold text-theme-text text-xs">{comp.name}</div>
                          <div className="text-[10px] text-theme-muted">{comp.org} · {comp.badge}</div>
                        </div>
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete "${comp.name}"?`)) {
                              deleteCompetition(comp.id);
                              showToast(`Deleted "${comp.name}"`);
                            }
                          }}
                          className="p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add Comp Form */}
                  <div className="p-3 rounded-xl bg-theme-surface-2/60 border border-theme-border flex flex-wrap items-center gap-2">
                    <input
                      type="text" placeholder="Hackathon/Summit Name..."
                      value={newCompForm.name}
                      onChange={(e) => setNewCompForm({ ...newCompForm, name: e.target.value })}
                      className="flex-1 min-w-[150px] bg-theme-surface border border-theme-border rounded-lg px-2.5 py-1.5 text-theme-text text-xs"
                    />
                    <input
                      type="text" placeholder="Organizer..."
                      value={newCompForm.org}
                      onChange={(e) => setNewCompForm({ ...newCompForm, org: e.target.value })}
                      className="w-36 bg-theme-surface border border-theme-border rounded-lg px-2.5 py-1.5 text-theme-text text-xs"
                    />
                    <button
                      onClick={() => {
                        if (!newCompForm.name.trim()) return alert('Name required');
                        addCompetition(newCompForm);
                        showToast(`Added "${newCompForm.name}"`);
                        setNewCompForm({ name: '', org: '', badge: 'Hackathon', color: 'text-teal-400 bg-teal-500/10' });
                      }}
                      className="px-3 py-1.5 rounded-lg bg-theme-accent-cyan text-[var(--btn-primary-text)] font-bold text-xs cursor-pointer"
                    >
                      + Add Hackathon
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: TESTIMONIALS */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <h4 className="font-display font-bold text-lg text-theme-text">Manage Mentors &amp; Testimonials</h4>
                <div className="space-y-3 font-mono text-xs">
                  {data.testimonials.map((t) => (
                    <div key={t.id} className="p-4 rounded-2xl bg-theme-surface-2 border border-theme-border flex items-start justify-between gap-3">
                      <div>
                        <div className="font-bold text-theme-text text-sm">{t.name} <span className="text-theme-muted text-xs font-normal">({t.company})</span></div>
                        <p className="text-xs text-theme-muted italic mt-1 font-body">"{t.quote}"</p>
                      </div>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete quote by "${t.name}"?`)) {
                            deleteTestimonial(t.id);
                            showToast(`Deleted quote by "${t.name}"`);
                          }
                        }}
                        className="p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 hover:bg-rose-500 hover:text-white cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}

                  {/* Add Testimonial Form */}
                  <div className="p-4 rounded-2xl bg-theme-surface-2/60 border border-theme-border space-y-2.5">
                    <div className="font-bold text-theme-accent">Add Mentor Recommendation</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text" placeholder="Mentor Name (e.g. Mr. Gokul M)"
                        value={newTestimonialForm.name}
                        onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, name: e.target.value })}
                        className="bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text text-xs"
                      />
                      <input
                        type="text" placeholder="Company / Role"
                        value={newTestimonialForm.company}
                        onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, company: e.target.value })}
                        className="bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text text-xs"
                      />
                    </div>
                    <textarea
                      rows="2"
                      placeholder="Enter mentor recommendation quote..."
                      value={newTestimonialForm.quote}
                      onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, quote: e.target.value })}
                      className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text text-xs resize-none"
                    />
                    <button
                      onClick={() => {
                        if (!newTestimonialForm.name.trim() || !newTestimonialForm.quote.trim()) return alert('Name and Quote required');
                        const initials = newTestimonialForm.name.split(' ').map((s) => s[0]).join('').slice(0, 2).toUpperCase() || 'M';
                        addTestimonial({ ...newTestimonialForm, initials, title: 'Mentor' });
                        showToast(`Added quote by "${newTestimonialForm.name}"`);
                        setNewTestimonialForm({ name: '', title: '', company: '', quote: '', initials: 'GM', stars: 5, color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' });
                      }}
                      className="py-2 px-4 rounded-xl bg-theme-accent text-[var(--btn-primary-text)] font-bold text-xs cursor-pointer"
                    >
                      + Add Mentor Quote
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: PROFILE & GLOBAL SETTINGS */}
            {activeTab === 'profile' && (
              <div className="space-y-6 font-mono text-xs">
                <h4 className="font-display font-bold text-lg text-theme-text">Profile &amp; Status Settings</h4>
                <div className="p-4 sm:p-5 rounded-2xl bg-theme-surface-2 border border-theme-border space-y-4">
                  <div>
                    <label className="block text-theme-muted text-[10px] mb-1">Hero Status Badge ("Currently working on...")</label>
                    <input
                      type="text"
                      value={profileForm.statusBadge}
                      onChange={(e) => setProfileForm({ ...profileForm, statusBadge: e.target.value })}
                      className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-theme-muted text-[10px] mb-1">Contact Email</label>
                      <input
                        type="text"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-theme-muted text-[10px] mb-1">Contact Phone</label>
                      <input
                        type="text"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-theme-muted text-[10px] mb-1">B.E CSE CGPA</label>
                      <input
                        type="text"
                        value={profileForm.cgpa}
                        onChange={(e) => setProfileForm({ ...profileForm, cgpa: e.target.value })}
                        className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-theme-muted text-[10px] mb-1">College Name</label>
                      <input
                        type="text"
                        value={profileForm.college}
                        onChange={(e) => setProfileForm({ ...profileForm, college: e.target.value })}
                        className="w-full bg-theme-surface border border-theme-border rounded-lg px-3 py-2 text-theme-text text-xs"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      updateProfile(profileForm);
                      showToast('Profile and settings updated live!');
                    }}
                    className="w-full py-2.5 rounded-xl bg-theme-accent text-[var(--btn-primary-text)] font-bold cursor-pointer hover:brightness-110"
                  >
                    Save Profile Settings
                  </button>
                </div>

                {/* Danger Zone: Reset Defaults */}
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between gap-3">
                  <div>
                    <div className="font-bold text-rose-400">Reset to Defaults</div>
                    <div className="text-[11px] text-theme-muted mt-0.5">Restore all original hardcoded projects and experience data.</div>
                  </div>
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to reset all portfolio data to defaults?')) {
                        resetToDefault();
                        showToast('Reset portfolio data to default!');
                      }
                    }}
                    className="px-3 py-1.5 rounded-xl bg-rose-500 text-white font-bold cursor-pointer hover:bg-rose-600 transition-colors flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset Data</span>
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="p-3.5 border-t border-theme-border bg-theme-surface-2/60 flex items-center justify-between font-mono text-xs text-theme-muted">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All changes automatically saved to LocalStorage</span>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-theme-surface border border-theme-border text-theme-text hover:border-theme-accent transition-colors cursor-pointer"
            >
              Done &amp; Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
