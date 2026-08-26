import React, { createContext, useContext, useState, useEffect } from 'react';

const STORAGE_KEY = 'pugazh_portfolio_data_v3';

const defaultData = {
  profile: {
    statusBadge: '',
    email: 'jayapugazh947@gmail.com',
    phone: '+91 99432 05075',
    cgpa: '7.5',
    college: 'Gnanamani College of Tech',
    githubUrl: 'https://github.com/apugazh61-debug',
    linkedinUrl: 'https://www.linkedin.com/in/pugazhenthi-s-920556331',
  },
  projects: [
    {
      id: 'proj-1',
      title: 'AgriSync WMS Core',
      subtitle: 'Agricultural Warehouse Management System',
      category: 'Full Stack',
      tagBadge: 'Full Stack WMS',
      tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
      description: 'Real-time agricultural asset tracking system with live inventory ledger audits, multi-bin location mapping, and modern glassmorphic dashboard.',
      highlights: ['Live asset telemetry & stock audits', 'Deployed on Vercel with responsive UI'],
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
      github: 'https://github.com/apugazh61-debug/AgriSync-WMS-Core',
      liveUrl: 'https://agri-sync-wms-core.vercel.app',
    },
    {
      id: 'proj-2',
      title: 'SkillDNA-Ai',
      subtitle: 'AI Skill Assessment & Intelligence Engine',
      category: 'AI',
      tagBadge: 'AI & NLP',
      tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      description: 'AI-driven skill evaluation platform that analyzes developer competencies, benchmarks technical talent, and generates visual career roadmaps.',
      highlights: ['Automated competency extraction', 'Dynamic talent benchmark scoring'],
      tech: ['React.js', 'JavaScript ES6+', 'AI Models', 'Tailwind CSS'],
      github: 'https://github.com/apugazh61-debug/SkillDNA-Ai',
      liveUrl: '',
    },
    {
      id: 'proj-3',
      title: 'Real-Time Emotion Detection',
      subtitle: 'Computer Vision & Deep Learning Pipeline',
      category: 'AI',
      tagBadge: 'Computer Vision',
      tagColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
      description: 'High-throughput facial landmark detection and sentiment classification engine processing live camera feeds with sub-50ms inference.',
      highlights: ['Sub-50ms OpenCV video capture', 'Real-time emotion probability HUD'],
      tech: ['Python', 'OpenCV', 'Deep Learning', 'NumPy'],
      github: 'https://github.com/apugazh61-debug/Real-Time-Emotion-Detection',
      liveUrl: '',
    },
    {
      id: 'proj-4',
      title: 'cashFlow-Pilot',
      subtitle: 'Financial Modeling & Forecasting Engine',
      category: 'Python',
      tagBadge: 'Financial Systems',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      description: 'Autonomous financial forecasting engine simulating business burn-rate runway, cash inflows/outflows, and liquidity telemetry.',
      highlights: ['Predictive time-series simulation', 'Automated ledger anomaly detection'],
      tech: ['Python', 'Pandas', 'NumPy', 'FastAPI'],
      github: 'https://github.com/apugazh61-debug/cashFlow-Pilot',
      liveUrl: '',
    },
  ],
  experiences: [
    {
      id: 'exp-1',
      role: 'App Dev & AI Development Intern',
      company: 'Blaze Wings Technology Pvt Ltd',
      location: 'Office Premises',
      period: 'Jul 2026 – Dec 2026',
      type: 'Corporate',
      color: 'bg-teal-400',
      badge: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
      achievements: [
        'Gaining hands-on exposure in application development and artificial intelligence technologies in a production team environment.',
        'Building and deploying full-stack application features under the mentorship of Mr. Gokul M, contributing to real business workflows.',
        'Developing AI-integrated modules contributing to end-to-end application lifecycle from design to deployment.',
      ],
      tech: ['Application Development', 'AI Development', 'React.js', 'Python', 'REST APIs', 'Git'],
    },
    {
      id: 'exp-2',
      role: 'Python Web App Development Intern',
      company: 'Dev Technology Solutions',
      location: 'Salem, Tamil Nadu',
      period: 'Jul 2025 – Aug 2025',
      type: 'Corporate',
      color: 'bg-sky-400',
      badge: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
      achievements: [
        'Architected and deployed scalable web application micro-endpoints in Python and Flask, ensuring smooth client-server data flow.',
        'Integrated complex frontend requirements with backend services, resolving critical integration bottlenecks in production builds.',
        'Conducted exhaustive test suites and debugging cycles, elevating system stability and minimizing application downtime.',
      ],
      tech: ['Python', 'Flask', 'REST APIs', 'Postman', 'Debugging', 'Agile Methodologies'],
    },
  ],
  additionalTraining: [
    {
      id: 'train-1',
      role: 'Full Stack Development Intern',
      company: 'Novi Tech R&D Pvt Ltd',
      location: 'Salem / Remote',
      period: 'Sep 2024 – Nov 2024',
      type: 'Training',
      color: 'bg-purple-400',
      badge: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      achievements: [
        'Engineered dynamic full stack features using React.js and Python (Flask), powering high-responsiveness web modules.',
        'Designed and optimized database schemas with MongoDB & MySQL, cutting down query latency by over 30% via indexed lookups.',
        'Participated in agile sprint cycles, delivering bug fixes and feature releases consistently ahead of schedule.',
      ],
      tech: ['React.js', 'Flask', 'MySQL', 'MongoDB', 'REST APIs', 'JWT', 'Git'],
    },
  ],
  skills: [
    {
      id: 'cat-1',
      title: 'Languages',
      category: 'Core Programming',
      iconName: 'Code2',
      accentColor: 'text-teal-400',
      barColor: 'bg-teal-400',
      borderColor: 'hover:border-teal-500/50',
      glowColor: 'bg-teal-500/10',
      skills: [
        { name: 'Python', level: 65 },
        { name: 'JavaScript', level: 66 },
        { name: 'TypeScript', level: 44 },
        { name: 'HTML5 & CSS3', level: 85 },
      ],
    },
    {
      id: 'cat-2',
      title: 'Frameworks & Full Stack',
      category: 'Application Engines',
      iconName: 'Server',
      accentColor: 'text-sky-400',
      barColor: 'bg-sky-400',
      borderColor: 'hover:border-sky-500/50',
      glowColor: 'bg-sky-500/10',
      skills: [
        { name: 'React.js', level: 66 },
        { name: 'FastAPI', level: 78 },
        { name: 'Flask', level: 80 },
        { name: 'Tailwind CSS', level: 66 },
      ],
    },
    {
      id: 'cat-3',
      title: 'Databases & Cloud',
      category: 'Data & Architecture',
      iconName: 'Database',
      accentColor: 'text-amber-400',
      barColor: 'bg-amber-400',
      borderColor: 'hover:border-amber-500/50',
      glowColor: 'bg-amber-500/10',
      skills: [
        { name: 'MongoDB', level: 78 },
        { name: 'MySQL', level: 75 },
        { name: 'REST APIs', level: 87 },
        { name: 'AWS Cloud', level: 60 },
      ],
    },
    {
      id: 'cat-4',
      title: 'AI, Vision & Tooling',
      category: 'Intelligence & DevOps',
      iconName: 'Brain',
      accentColor: 'text-purple-400',
      barColor: 'bg-purple-400',
      borderColor: 'hover:border-purple-500/50',
      glowColor: 'bg-purple-500/10',
      skills: [
        { name: 'OpenCV', level: 76 },
        { name: 'Deep Learning', level: 55 },
        { name: 'Pandas & NumPy', level: 82 },
        { name: 'Git & GitHub', level: 88 },
      ],
    },
  ],
  certifications: [
    { id: 'cert-1', name: 'Application Development & AI Development', issuer: 'Blaze Wings Technology Pvt Ltd', code: 'CERT-BWT', tag: 'App Dev & AI' },
    { id: 'cert-2', name: 'Python Web Development', issuer: 'Dev Technologies', code: 'CERT-DEV', tag: 'Backend' },
    { id: 'cert-3', name: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', code: 'FCC-JS', tag: 'Core JS' },
    { id: 'cert-4', name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Skill Builder', code: 'AWS-ESSENTIALS', tag: 'Cloud' },
    { id: 'cert-5', name: 'Machine Learning Pipelines', issuer: 'Kaggle Learn', code: 'KAGGLE-ML', tag: 'AI / ML' },
  ],
  competitions: [
    { id: 'comp-1', name: 'Microsoft AI Innovation Day', org: 'TechNexus Community, Microsoft Chennai', badge: 'AI & Cloud', color: 'text-sky-400 bg-sky-500/10' },
    { id: 'comp-2', name: 'Agentic AI Connect & Hack', org: 'Chennai AI Developer Community', badge: 'GenAI & Agents', color: 'text-purple-400 bg-purple-500/10' },
    { id: 'comp-3', name: 'National Hackathon Series', org: 'VIT College', badge: 'Hackathon', color: 'text-teal-400 bg-teal-500/10' },
    { id: 'comp-4', name: 'State Level Debugging Contest', org: 'K.S.R College of Engineering', badge: 'Competition', color: 'text-amber-400 bg-amber-500/10' },
  ],
  testimonials: [
    {
      id: 'test-1',
      quote: "Pugazhenthi is a highly motivated and dedicated intern who consistently delivers quality work. His grasp of application development and AI technologies is impressive for someone at his stage.",
      name: 'Mr. Gokul M',
      title: 'Mentor & Reporting Manager',
      company: 'Blaze Wings Technology Pvt Ltd',
      initials: 'GM',
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
      stars: 5,
    },
    {
      id: 'test-2',
      quote: "A sharp problem-solver who integrated complex frontend requirements with backend services seamlessly. He brings both technical depth and a professional attitude to every task.",
      name: 'Dev Technology Solutions',
      title: 'Supervisor',
      company: 'Dev Technology Solutions',
      initials: 'DT',
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      stars: 5,
    },
  ],
};

const PortfolioDataContext = createContext(null);

export function PortfolioDataProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...defaultData, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Error loading portfolio data from localStorage:', e);
    }
    return defaultData;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving portfolio data:', e);
    }
  }, [data]);

  // Profile
  const updateProfile = (updates) => {
    setData((prev) => ({ ...prev, profile: { ...prev.profile, ...updates } }));
  };

  // Projects CRUD
  const addProject = (project) => {
    setData((prev) => ({
      ...prev,
      projects: [{ id: 'proj-' + Date.now(), ...project }, ...prev.projects],
    }));
  };

  const updateProject = (id, updated) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...updated } : p)),
    }));
  };

  const deleteProject = (id) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
  };

  // Experience CRUD
  const addExperience = (exp, isTraining = false) => {
    const key = isTraining ? 'additionalTraining' : 'experiences';
    setData((prev) => ({
      ...prev,
      [key]: [{ id: (isTraining ? 'train-' : 'exp-') + Date.now(), ...exp }, ...prev[key]],
    }));
  };

  const updateExperience = (id, updated, isTraining = false) => {
    const key = isTraining ? 'additionalTraining' : 'experiences';
    setData((prev) => ({
      ...prev,
      [key]: prev[key].map((item) => (item.id === id ? { ...item, ...updated } : item)),
    }));
  };

  const deleteExperience = (id, isTraining = false) => {
    const key = isTraining ? 'additionalTraining' : 'experiences';
    setData((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item.id !== id),
    }));
  };

  // Skills CRUD
  const updateSkill = (categoryIndex, skillIndex, updated) => {
    setData((prev) => {
      const newSkills = [...prev.skills];
      newSkills[categoryIndex].skills[skillIndex] = {
        ...newSkills[categoryIndex].skills[skillIndex],
        ...updated,
      };
      return { ...prev, skills: newSkills };
    });
  };

  const addSkillToCategory = (categoryIndex, skill) => {
    setData((prev) => {
      const newSkills = [...prev.skills];
      newSkills[categoryIndex].skills.push(skill);
      return { ...prev, skills: newSkills };
    });
  };

  const deleteSkillFromCategory = (categoryIndex, skillIndex) => {
    setData((prev) => {
      const newSkills = [...prev.skills];
      newSkills[categoryIndex].skills.splice(skillIndex, 1);
      return { ...prev, skills: newSkills };
    });
  };

  // Certifications CRUD
  const addCertification = (cert) => {
    setData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, { id: 'cert-' + Date.now(), ...cert }],
    }));
  };

  const updateCertification = (id, updated) => {
    setData((prev) => ({
      ...prev,
      certifications: prev.certifications.map((c) => (c.id === id ? { ...c, ...updated } : c)),
    }));
  };

  const deleteCertification = (id) => {
    setData((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id),
    }));
  };

  // Competitions CRUD
  const addCompetition = (comp) => {
    setData((prev) => ({
      ...prev,
      competitions: [...prev.competitions, { id: 'comp-' + Date.now(), ...comp }],
    }));
  };

  const updateCompetition = (id, updated) => {
    setData((prev) => ({
      ...prev,
      competitions: prev.competitions.map((c) => (c.id === id ? { ...c, ...updated } : c)),
    }));
  };

  const deleteCompetition = (id) => {
    setData((prev) => ({
      ...prev,
      competitions: prev.competitions.filter((c) => c.id !== id),
    }));
  };

  // Testimonials CRUD
  const addTestimonial = (testimonial) => {
    setData((prev) => ({
      ...prev,
      testimonials: [...prev.testimonials, { id: 'test-' + Date.now(), ...testimonial }],
    }));
  };

  const updateTestimonial = (id, updated) => {
    setData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((t) => (t.id === id ? { ...t, ...updated } : t)),
    }));
  };

  const deleteTestimonial = (id) => {
    setData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((t) => t.id !== id),
    }));
  };

  // Bulk save methods
  const saveSkills = (newSkills) => {
    setData((prev) => ({ ...prev, skills: newSkills }));
  };

  const saveCertificationsAndCompetitions = (newCerts, newComps) => {
    setData((prev) => ({ ...prev, certifications: newCerts, competitions: newComps }));
  };

  const saveTestimonials = (newTestimonials) => {
    setData((prev) => ({ ...prev, testimonials: newTestimonials }));
  };

  // Reset & Import
  const resetToDefault = () => {
    setData(defaultData);
    localStorage.removeItem(STORAGE_KEY);
  };

  const importData = (jsonData) => {
    try {
      const parsed = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;
      setData(parsed);
      return true;
    } catch (e) {
      console.error('Invalid import JSON:', e);
      return false;
    }
  };

  return (
    <PortfolioDataContext.Provider
      value={{
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
        saveSkills,
        addCertification,
        updateCertification,
        deleteCertification,
        addCompetition,
        updateCompetition,
        deleteCompetition,
        saveCertificationsAndCompetitions,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        saveTestimonials,
        resetToDefault,
        importData,
      }}
    >
      {children}
    </PortfolioDataContext.Provider>
  );
}

export function usePortfolioData() {
  const context = useContext(PortfolioDataContext);
  if (!context) {
    throw new Error('usePortfolioData must be used within a PortfolioDataProvider');
  }
  return context;
}
