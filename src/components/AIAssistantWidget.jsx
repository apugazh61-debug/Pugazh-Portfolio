import React, { useState, useEffect, useRef } from 'react';
import { Bot, MessageSquare, Send, X, Sparkles, ExternalLink, RefreshCw, ChevronRight, User, Phone, Check, Zap } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

// 50+ Comprehensive Knowledge Items about Pugazhenthi S
const KNOWLEDGE_BASE = [
  // --- 1. Bio & Overview ---
  {
    keywords: ['who are you', 'who is pugazh', 'about', 'bio', 'introduce', 'who is pugazhenthi', 'tell me about yourself', 'summary'],
    question: 'Who is Pugazhenthi S?',
    answer: 'Pugazhenthi S is a Software Engineer specializing in scalable full stack web architectures, distributed backend APIs, and applied AI systems. He is currently pursuing B.E in Computer Science & Engineering (7.5 CGPA) and interning at Blaze Wings Technology.'
  },
  {
    keywords: ['role', 'current role', 'job title', 'designation', 'what do you do'],
    question: 'What is your current role & specialization?',
    answer: 'I specialize as a Full Stack Systems & AI Engineer — building production-ready web apps in React.js, high-speed microservices in FastAPI/Python, enterprise backends in Java (Spring Boot), and Computer Vision pipelines in OpenCV.'
  },
  {
    keywords: ['location', 'where do you live', 'city', 'native', 'base', 'where are you from'],
    question: 'Where are you based?',
    answer: 'I am based in Tamil Nadu, India, and open to on-site, hybrid, or remote software engineering roles worldwide.'
  },
  {
    keywords: ['years of experience', 'experience level', 'fresher', 'junior', 'experience'],
    question: 'What is your overall engineering experience?',
    answer: 'I have 3+ industry and project roles under my belt, including a live Software Engineering Internship at Blaze Wings Technology (Jul–Dec 2026), 10+ GitHub production projects, and multiple national-level hackathons.'
  },
  {
    keywords: ['career goal', 'objective', 'vision', 'future', 'aspirations'],
    question: 'What are your career goals?',
    answer: 'My goal is to architect resilient, distributed web systems and integrate autonomous AI agents to solve complex real-world challenges at enterprise scale.'
  },

  // --- 2. Technical Skills ---
  {
    keywords: ['skills', 'tech stack', 'technologies', 'languages', 'tools', 'stack'],
    question: 'What technologies and programming languages do you know?',
    answer: 'My core stack spans:\n• **Frontend:** React.js, JavaScript (ES6+), Tailwind CSS, HTML5/CSS3, Vite\n• **Backend:** Python, FastAPI, Java, Spring Boot, REST APIs, JSON APIs\n• **AI & ML:** Computer Vision (OpenCV), Deep Learning, NLP, PyTorch\n• **Databases & DevOps:** MySQL, PostgreSQL, Git/GitHub, Docker, Vercel, Postman.'
  },
  {
    keywords: ['react', 'reactjs', 'frontend skills', 'ui', 'user interface'],
    question: 'What is your expertise in React.js and Frontend?',
    answer: 'I build modern, responsive, component-driven single page applications in React.js with Tailwind CSS, custom hooks, context state management, and high-performance glassmorphic/neomorphic UI designs.'
  },
  {
    keywords: ['python', 'fastapi', 'backend', 'api', 'microservices'],
    question: 'How do you use Python and FastAPI?',
    answer: 'I use Python and FastAPI to engineer asynchronous, high-throughput REST APIs, data pipelines, and machine learning inference endpoints with Pydantic validation and JWT authentication.'
  },
  {
    keywords: ['java', 'spring boot', 'enterprise backend', 'oop'],
    question: 'What is your experience in Java & Spring Boot?',
    answer: 'I develop robust enterprise applications using Java and Spring Boot, leveraging MVC architecture, dependency injection, JPA/Hibernate, and scalable relational data models.'
  },
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning'],
    question: 'What AI and Machine Learning capabilities do you have?',
    answer: 'I develop applied AI models including NLP-based competence analyzers (SkillDNA-Ai) and real-time Computer Vision pipelines for emotion detection using OpenCV and deep convolutional neural networks.'
  },
  {
    keywords: ['computer vision', 'opencv', 'image processing', 'camera', 'vision'],
    question: 'Tell me about your Computer Vision work.',
    answer: 'I have engineered a Real-Time Facial Emotion Detection system using OpenCV and deep learning that processes video streams at 30+ FPS to classify human expressions with high precision.'
  },
  {
    keywords: ['database', 'mysql', 'sql', 'postgres', 'database design'],
    question: 'What databases do you work with?',
    answer: 'I design normalized schemas, write optimized SQL queries, and manage relational storage across MySQL and PostgreSQL, ensuring high data integrity and quick indexing.'
  },
  {
    keywords: ['git', 'github', 'version control', 'ci cd'],
    question: 'How do you handle version control and Git?',
    answer: 'I follow professional Git branching workflows (Git Flow, semantic commits, PR reviews, CI/CD deployment on Vercel) and maintain public open-source repositories on GitHub (@apugazh61-debug).'
  },

  // --- 3. Projects ---
  {
    keywords: ['projects', 'what have you built', 'portfolio projects', 'work sample'],
    question: 'What top projects have you built?',
    answer: 'My standout production projects include:\n1. **AgriSync WMS Core** — Agricultural Warehouse Management System with live inventory telemetry.\n2. **SkillDNA-Ai** — AI-driven developer competency & talent benchmark engine.\n3. **Real-Time Emotion Detection** — 30+ FPS Computer Vision facial emotion classifier.\n4. **Interactive Dev Portfolio** — React + Vite ultra-modern portfolio with Admin Panel.'
  },
  {
    keywords: ['agrisync', 'wms', 'warehouse', 'agrisync wms core', 'agriculture'],
    question: 'What is AgriSync WMS Core?',
    answer: 'AgriSync WMS Core is a real-time agricultural warehouse ledger and asset tracking platform. It features multi-bin location mapping, live stock telemetry, and a sleek responsive UI deployed on Vercel at [agri-sync-wms-core.vercel.app](https://agri-sync-wms-core.vercel.app).'
  },
  {
    keywords: ['skilldna', 'skilldna-ai', 'skill dna', 'skill assessment'],
    question: 'What is SkillDNA-Ai?',
    answer: 'SkillDNA-Ai is an AI talent benchmark platform that analyzes developer competencies, benchmarks technical proficiency through automated NLP extraction, and generates dynamic visual career roadmaps.'
  },
  {
    keywords: ['emotion detection', 'facial emotion', 'face recognition'],
    question: 'What is the Real-Time Emotion Detection project?',
    answer: 'It is a Computer Vision & Deep Learning pipeline that classifies human emotions (happy, sad, neutral, surprise, etc.) in real-time from webcam streams at 30+ FPS with minimal inference latency.'
  },
  {
    keywords: ['portfolio code', 'how was this portfolio made', 'portfolio tech'],
    question: 'How is this portfolio website built?',
    answer: 'This portfolio is built with React.js, Vite, and Tailwind CSS. It features custom Glassmorphism & Neomorphism design systems, bidirectional scroll reveal animations, a secret protected Admin Panel, and this AI Assistant!'
  },
  {
    keywords: ['github link', 'github profile', 'open source', 'repositories'],
    question: 'Where can I view your GitHub projects?',
    answer: 'You can explore all my open-source code and project repositories on GitHub: [github.com/apugazh61-debug](https://github.com/apugazh61-debug).'
  },

  // --- 4. Work Experience & Internships ---
  {
    keywords: ['blaze wings', 'internship', 'blaze wings technology', 'current company'],
    question: 'Tell me about your internship at Blaze Wings Technology.',
    answer: 'I am currently working as a Software Engineering Intern at Blaze Wings Technology (Jul–Dec 2026), focusing on full stack features, API integrations, and production code deployment in an agile team environment.'
  },
  {
    keywords: ['work responsibilities', 'day to day', 'duties at internship'],
    question: 'What are your key responsibilities during your internship?',
    answer: 'I collaborate with engineering teams to build modular frontend components, develop backend RESTful endpoints, optimize API response times, and participate in code reviews and sprint planning.'
  },
  {
    keywords: ['teamwork', 'collaboration', 'agile', 'scrum'],
    question: 'How do you collaborate in engineering teams?',
    answer: 'I thrive in fast-paced agile environments, actively communicating via Slack/Teams, tracking tasks through Jira/GitHub Projects, and ensuring seamless API contracts between frontend and backend.'
  },

  // --- 5. Education & Academics ---
  {
    keywords: ['college', 'university', 'education', 'degree', 'gnanamani'],
    question: 'What is your educational background?',
    answer: 'I am pursuing a Bachelor of Engineering (B.E) in Computer Science & Engineering at **Gnanamani College of Technology** (Affiliated with Anna University), graduating in 2026.'
  },
  {
    keywords: ['cgpa', 'marks', 'percentage', 'grade', 'score', 'academic'],
    question: 'What is your CGPA & academic score?',
    answer: 'I hold a consistent **7.5 CGPA (75.0% Aggregate)** throughout my B.E Computer Science & Engineering degree.'
  },
  {
    keywords: ['graduation year', 'batch', 'when do you graduate'],
    question: 'When is your graduation year?',
    answer: 'I am from the 2022–2026 batch, graduating in 2026.'
  },
  {
    keywords: ['school', 'hsc', 'sslc', 'schooling'],
    question: 'Where did you complete your school education?',
    answer: 'I completed my Higher Secondary (HSC) and Secondary School (SSLC) education with a strong foundation in Mathematics, Physics, and Computer Science.'
  },

  // --- 6. Certifications & Hackathons ---
  {
    keywords: ['certifications', 'certificates', 'courses', 'credentials'],
    question: 'What professional certifications do you hold?',
    answer: 'I have earned 9+ recognized credentials spanning AI Foundations, Full Stack Python Development, Prompt Engineering, React Ecosystem, and Advanced Computer Vision.'
  },
  {
    keywords: ['hackathons', 'competitions', 'smart india hackathon', 'sih', 'events'],
    question: 'Have you participated in hackathons?',
    answer: 'Yes! I actively participate in collegiate and national-level hackathons including the Smart India Hackathon (SIH) and state-level technical symposiums, building functional prototypes under tight deadlines.'
  },
  {
    keywords: ['certificate verification', 'how to view certificates'],
    question: 'How can I view and verify your certificates?',
    answer: 'Scroll down to the **Certifications & Hackathons** section on this page! Each of the 9 cards has an interactive **[ 👁️ View ]** button that displays the issuing body and verification details.'
  },

  // --- 7. Contact & Hiring ---
  {
    keywords: ['contact', 'email', 'phone', 'call', 'reach out', 'how to contact'],
    question: 'How can I contact Pugazhenthi?',
    answer: 'You can reach me directly through:\n• **Email:** [jayapugazh947@gmail.com](mailto:jayapugazh947@gmail.com)\n• **Phone / WhatsApp:** [+91 99432 05075](https://wa.me/919943205075)\n• **LinkedIn:** [linkedin.com/in/pugazhenthi-s-920556331](https://www.linkedin.com/in/pugazhenthi-s-920556331)\n• **GitHub:** [github.com/apugazh61-debug](https://github.com/apugazh61-debug)'
  },
  {
    keywords: ['whatsapp', 'chat on whatsapp', 'wp message', 'whatsapp number'],
    question: 'Can I chat with you on WhatsApp?',
    answer: 'Yes! Click the **WhatsApp Pugazh** tab above or message me directly at **+91 99432 05075**. I respond quickly to engineering opportunities and collaboration requests.'
  },
  {
    keywords: ['hiring', 'available for hire', 'job offer', 'hire you', 'freelance', 'notice period'],
    question: 'Are you available for full-time roles or freelance projects?',
    answer: 'Yes! I am actively available for Full-Time Software Engineer, Full Stack Developer, Backend Engineer, or AI Engineering opportunities starting immediately.'
  },
  {
    keywords: ['resume', 'cv', 'download resume', 'pdf resume'],
    question: 'Where can I download your resume?',
    answer: 'You can download my latest resume in PDF format anytime by clicking the **[ 📥 Resume ]** button in the Hero section or opening [resume.pdf](/resume.pdf).'
  },
  {
    keywords: ['linkedin', 'linkedin profile', 'connect on linkedin'],
    question: 'What is your LinkedIn profile?',
    answer: 'Connect with me on LinkedIn at: [linkedin.com/in/pugazhenthi-s-920556331](https://www.linkedin.com/in/pugazhenthi-s-920556331).'
  },

  // --- 8. Mentors & Recommendations ---
  {
    keywords: ['mentors', 'professors', 'recommendations', 'testimonials', 'faculty'],
    question: 'Who are your academic mentors and guides?',
    answer: 'I work under the mentorship of senior professors including **Dr. K. Arulmurugan** (Head of Department, CSE) and faculty guides who have recognized my consistent technical execution, leadership, and project delivery.'
  },

  // --- 9. Engineering Philosophy & Strengths ---
  {
    keywords: ['strengths', 'why hire you', 'why should we hire you', 'key strengths'],
    question: 'Why should a company hire Pugazhenthi?',
    answer: 'Top reasons to hire me:\n1. **End-to-End Delivery:** Proficient from UI design to distributed backend and AI integration.\n2. **Clean & Scalable Code:** Modular architecture, standard design patterns, and thorough documentation.\n3. **Quick Adaptability:** Fast learner of emerging frameworks and production tools.\n4. **Work Ethic:** Strong commitment to meeting project milestones with high quality.'
  },
  {
    keywords: ['problem solving', 'dsa', 'data structures', 'algorithms', 'coding skills'],
    question: 'What is your problem-solving approach?',
    answer: 'I approach engineering challenges by breaking complex problems into modular sub-tasks, choosing optimal data structures, writing clean algorithmic solutions, and benchmarking performance.'
  },
  {
    keywords: ['soft skills', 'communication', 'leadership', 'punctuality'],
    question: 'What soft skills do you bring to the team?',
    answer: 'Clear communication, adaptability under pressure, strong collaborative spirit, proactive debugging, and high ownership of deliverables from inception to production.'
  },
  {
    keywords: ['remote work', 'relocation', 'relocate', 'work from home'],
    question: 'Are you open to relocation or remote work?',
    answer: 'Yes! I am fully equipped for remote work with high-speed setup and also open to relocating to major tech hubs (Bangalore, Chennai, Hyderabad, Pune, etc.).'
  },
  {
    keywords: ['admin panel', 'secret portal', 'how to edit portfolio'],
    question: 'Does this portfolio have a content management portal?',
    answer: 'Yes! Pugazhenthi built a secret live Admin Portal into this portfolio. It is accessible by clicking "Pugazhenthi" in the copyright footer with protected master password authorization.'
  },
  {
    keywords: ['hobbies', 'interests', 'what do you do in free time'],
    question: 'What are your interests outside of coding?',
    answer: 'When not coding, I explore new AI research papers, experiment with open-source tools, participate in coding contests, and mentor junior students in web development.'
  },
  {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'namaste', 'vanakkam'],
    question: 'Hello!',
    answer: 'Vanakkam & Hello! 👋 I am Pugazhenthi\'s AI Assistant. Ask me anything about his projects, skills, education, experience, or click the WhatsApp tab to chat with him directly!'
  },
  {
    keywords: ['thanks', 'thank you', 'nandri', 'awesome', 'great', 'cool'],
    question: 'Thank you!',
    answer: 'You are very welcome! Feel free to ask more questions or reach out to Pugazhenthi directly at jayapugazh947@gmail.com or via WhatsApp!'
  }
];

// Suggested quick prompts
const SUGGESTED_CHIPS = [
  'What are your top projects?',
  'What is your tech stack?',
  'Tell me about your internship',
  'What is your CGPA & College?',
  'How can I hire or contact you?'
];

export default function AIAssistantWidget() {
  const { data } = usePortfolioData();
  const profile = data.profile || {};
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ai'); // 'ai' or 'whatsapp'
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi there! 👋 I am **Pugazhenthi\'s AI Assistant**. Ask me anything about his full stack projects, AI models, CGPA, internship, or message him directly on WhatsApp!',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [wpCustomMsg, setWpCustomMsg] = useState('Hi Pugazhenthi, I saw your portfolio and would like to connect with you regarding an engineering opportunity!');

  const chatBottomRef = useRef(null);

  // Scroll listener: Only show when scrolled past the top hero section (> 280px)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        // If user scrolls all the way back up, close the modal gracefully
        if (window.scrollY < 100) {
          setIsOpen(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (isOpen && activeTab === 'ai') {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen, activeTab]);

  // Natural Language Matching Engine across 50+ knowledge base entries
  const findBestAnswer = (query) => {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) return null;

    let bestMatch = null;
    let highestScore = 0;

    for (const item of KNOWLEDGE_BASE) {
      let score = 0;
      for (const kw of item.keywords) {
        if (cleanQuery === kw) {
          score += 10;
        } else if (cleanQuery.includes(kw)) {
          score += kw.length;
        } else {
          // Substring matching
          const kwWords = kw.split(' ');
          for (const w of kwWords) {
            if (w.length > 2 && cleanQuery.includes(w)) {
              score += 2;
            }
          }
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (highestScore > 0 && bestMatch) {
      return bestMatch.answer;
    }

    // Fallback if no direct match
    return `That's a great question! Pugazhenthi is a Full Stack & AI Systems Engineer (React, Python, FastAPI, Java Spring Boot, OpenCV) graduating from Gnanamani College of Tech (7.5 CGPA). \n\nFor specific inquiries, you can also ask about his **projects (AgriSync, SkillDNA)**, **internship at Blaze Wings**, or message him directly via the **WhatsApp tab**!`;
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg = {
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = findBestAnswer(text);
      const botMsg = {
        sender: 'bot',
        text: answer,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openWhatsApp = () => {
    const phone = (profile.phone || '+91 99432 05075').replace(/[^0-9]/g, '');
    const encoded = encodeURIComponent(wpCustomMsg);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-5 sm:bottom-7 sm:left-7 z-50 select-none">
      {/* Floating Modal / Popover */}
      {isOpen && (
        <div className="fixed sm:absolute bottom-20 left-4 right-4 sm:left-0 sm:right-auto sm:w-[390px] h-[490px] max-h-[82vh] bg-theme-surface/95 backdrop-blur-2xl border border-theme-border rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50">
          {/* Header */}
          <div className="px-4 py-3.5 bg-theme-surface-2/90 border-b border-theme-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 p-[1.5px] flex items-center justify-center shadow-md">
                <div className="w-full h-full bg-theme-surface rounded-[10px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-theme-accent" />
                </div>
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-theme-surface animate-pulse"></span>
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold text-theme-text flex items-center gap-1.5">
                  <span>Pugazh AI + WhatsApp</span>
                </h3>
                <span className="text-[10px] text-theme-muted font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>50+ Knowledge Engine Ready</span>
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl text-theme-muted hover:text-theme-text hover:bg-theme-surface transition-colors cursor-pointer"
              title="Close Widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Tabs (AI Assistant vs Direct WhatsApp) */}
          <div className="grid grid-cols-2 p-1.5 bg-theme-surface-2/50 border-b border-theme-border text-xs font-mono font-semibold">
            <button
              onClick={() => setActiveTab('ai')}
              className={`py-2 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'ai'
                  ? 'liquid-glass-btn-primary text-white shadow-sm'
                  : 'text-theme-muted hover:text-theme-text'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ask AI Bot</span>
            </button>
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`py-2 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'whatsapp'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-theme-muted hover:text-emerald-400'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Pugazh</span>
            </button>
          </div>

          {/* Tab 1: AI Assistant Chat */}
          {activeTab === 'ai' && (
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* Message Stream */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3 font-sans text-xs">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-2 ${
                      m.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {m.sender === 'bot' && (
                      <div className="w-6 h-6 rounded-lg bg-theme-accent/15 border border-theme-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5 text-theme-accent" />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] p-3 rounded-2xl leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-theme-accent text-slate-900 font-medium rounded-tr-sm shadow-md'
                          : 'bg-theme-surface-2 border border-theme-border text-theme-text rounded-tl-sm shadow-sm'
                      }`}
                    >
                      <p className="whitespace-pre-line">{m.text}</p>
                      <span className={`block text-[9px] mt-1 text-right font-mono ${
                        m.sender === 'user' ? 'text-slate-800/70' : 'text-theme-muted'
                      }`}>
                        {m.time}
                      </span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-theme-muted text-xs">
                    <div className="w-6 h-6 rounded-lg bg-theme-accent/15 border border-theme-accent/30 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-theme-accent" />
                    </div>
                    <div className="p-2.5 rounded-2xl bg-theme-surface-2 border border-theme-border flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Quick Suggestion Chips */}
              <div className="px-3 py-2 bg-theme-surface border-t border-theme-border/70 overflow-x-auto flex items-center gap-1.5 no-scrollbar">
                {SUGGESTED_CHIPS.map((chip, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(chip)}
                    className="whitespace-nowrap px-2.5 py-1 rounded-full bg-theme-surface-2 border border-theme-border text-theme-muted hover:text-theme-accent hover:border-theme-accent/50 text-[11px] font-mono transition-colors flex-shrink-0 cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Input Box */}
              <div className="p-2.5 bg-theme-surface-2 border-t border-theme-border flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Ask anything about Pugazh..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-1 bg-theme-surface border border-theme-border rounded-xl px-3 py-2 text-xs text-theme-text placeholder:text-theme-muted focus:outline-none focus:border-theme-accent"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim()}
                  className="p-2 rounded-xl liquid-glass-btn-primary text-white disabled:opacity-40 transition-opacity cursor-pointer flex items-center justify-center"
                  title="Send Question"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: WhatsApp Direct Message Bridge */}
          {activeTab === 'whatsapp' && (
            <div className="flex-1 p-5 flex flex-col justify-between overflow-y-auto font-sans text-xs">
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0 text-white shadow-md">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold text-emerald-400">Direct WhatsApp Chat</h4>
                    <p className="text-theme-muted text-[11px] mt-0.5 leading-relaxed">
                      Connect directly with Pugazhenthi on WhatsApp for rapid communication regarding job openings, freelance projects, or tech queries.
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono text-theme-muted font-semibold">
                    Customize your message to Pugazhenthi:
                  </label>
                  <textarea
                    rows={4}
                    value={wpCustomMsg}
                    onChange={(e) => setWpCustomMsg(e.target.value)}
                    className="w-full bg-theme-surface border border-theme-border rounded-xl p-3 text-xs text-theme-text resize-none focus:outline-none focus:border-emerald-400"
                    placeholder="Type your WhatsApp greeting message here..."
                  />
                </div>

                <div className="font-mono text-[11px] text-theme-muted flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Destination: {profile.phone || '+91 99432 05075'}</span>
                </div>
              </div>

              <button
                onClick={openWhatsApp}
                className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Floating Dual Launcher Button on Bottom-Left */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex items-center gap-2 p-1.5 sm:p-2 rounded-full liquid-glass-btn shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer border-2 ${
            isOpen ? 'border-theme-accent ring-2 ring-theme-accent/20 scale-105' : 'border-white/20 hover:scale-105'
          }`}
          title="Open AI Assistant & WhatsApp Direct Bridge"
          aria-label="Open AI Assistant & WhatsApp Direct Bridge"
        >
          {/* WhatsApp Half Icon */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md relative overflow-hidden group/wp">
            <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5" />
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover/wp:opacity-100 transition-opacity"></span>
          </div>

          {/* Divider */}
          <div className="w-[1px] h-5 bg-theme-border/80"></div>

          {/* AI Bot Half Icon */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-theme-accent via-cyan-500 to-purple-600 flex items-center justify-center text-slate-900 shadow-md relative overflow-hidden group/ai">
            <Bot className="w-4 sm:w-5 h-4 sm:h-5 text-slate-900" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-theme-surface animate-pulse"></span>
          </div>

          {/* Label (Hidden on small mobile, visible on sm and up) */}
          <span className="hidden sm:inline font-mono text-xs font-bold text-theme-text pr-2.5 pl-1">
            {isOpen ? 'Close' : 'Ask AI / WhatsApp'}
          </span>
        </button>
      </div>
    </div>
  );
}
