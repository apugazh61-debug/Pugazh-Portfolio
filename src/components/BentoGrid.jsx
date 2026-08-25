import React, { useState, useEffect } from 'react';
import { Layers, Cpu, Sparkles, MapPin, Briefcase, Zap, CheckCircle2, ArrowUpRight, Terminal, Globe, Clock, ShieldCheck, Activity, Database, Flame } from 'lucide-react';

const codeSnippets = {
  fastapi: {
    lang: 'Python / FastAPI',
    code: `@app.post("/api/v1/analyze")
async def analyze_pipeline(data: Payload, user = Depends(auth)):
    # High-throughput asynchronous ML inference
    result = await cv_engine.predict_stream(data.tensor)
    await db.analytics.insert_one({"user": user.id, "res": result})
    return {"status": "success", "latency_ms": 18.4, "data": result}`,
  },
  react: {
    lang: 'React.js / Hook',
    code: `const useSystemStream = (endpoint) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const ws = new WebSocket(endpoint);
    ws.onmessage = (e) => setData(JSON.parse(e.data));
    return () => ws.close();
  }, [endpoint]);
  return data;
};`,
  },
  springboot: {
    lang: 'Java / Spring Boot',
    code: `@RestController
@RequestMapping("/api/v2/warehouse")
public class InventoryController {
  @Autowired private StockService stockService;

  @PostMapping("/audit/batch")
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<AuditReport> processBatch(@RequestBody List<Item> items) {
    return ResponseEntity.ok(stockService.syncLedger(items));
  }
}`,
  },
  ai: {
    lang: 'Python / OpenCV',
    code: `def process_video_frame(frame, threshold=0.85):
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    detections = model.detect_objects(rgb)
    filtered = [d for d in detections if d.confidence > threshold]
    return draw_bounding_boxes(frame, filtered)`,
  },
};

export default function BentoGrid() {
  const [activeTab, setActiveTab] = useState('fastapi');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="overview" className="border-t border-theme-border pt-12 sm:pt-16 theme-transition">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-theme-text tracking-tight">
          Full-Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-accent via-theme-accent-cyan to-theme-accent-purple">System Architecture</span>
        </h2>
        <p className="text-sm text-theme-muted font-body mt-1">
          High-performance distributed backend services, real-time reactive clients, and applied AI models.
        </p>
      </div>

      {/* 12-Column Responsive Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
        {/* Bento Tile 1: Interactive Live Code Sandbox (Span 6) */}
        <div className="lg:col-span-6 glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-60 h-60 bg-theme-accent/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-theme-border/60">
              <div className="flex items-center gap-2.5 font-mono text-xs font-semibold text-theme-accent">
                <Terminal className="w-4 h-4" />
                <span>Production Code Arsenal</span>
              </div>
              {/* Code Tabs */}
              <div className="flex items-center gap-1 bg-theme-surface-2 p-1 rounded-lg border border-theme-border">
                {Object.keys(codeSnippets).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`font-mono text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md transition-all uppercase font-semibold cursor-pointer ${
                      activeTab === key
                        ? 'bg-theme-accent text-[var(--btn-primary-text)] shadow-sm'
                        : 'text-theme-muted hover:text-theme-text'
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Display Window */}
            <div className="rounded-xl bg-[#060A0F] border border-theme-border/80 p-4 font-mono text-xs text-slate-200 overflow-x-auto shadow-inner">
              <div className="flex items-center justify-between text-[11px] text-theme-muted pb-2 mb-2 border-b border-white/5 font-mono">
                <span className="text-theme-accent font-semibold">{codeSnippets[activeTab].lang}</span>
                <span className="text-[10px] text-emerald-400 font-mono">● Active Production Pattern</span>
              </div>
              <pre className="text-[11.5px] leading-relaxed font-mono whitespace-pre text-teal-300/90 selection:bg-theme-accent selection:text-black">
                {codeSnippets[activeTab].code}
              </pre>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-theme-border/60 font-mono text-[11px]">
            <span className="px-2.5 py-1 rounded-md bg-theme-surface-2 text-theme-text border border-theme-border">
              ⚡ Async I/O Optimized
            </span>
            <span className="px-2.5 py-1 rounded-md bg-theme-surface-2 text-theme-text border border-theme-border">
              🔒 JWT &amp; Role Security
            </span>
            <span className="px-2.5 py-1 rounded-md bg-theme-surface-2 text-theme-text border border-theme-border">
              ⚙️ Low Latency Execution
            </span>
          </div>
        </div>

        {/* Bento Tile 2: Live Architecture Pipeline (Span 6) */}
        <div className="lg:col-span-6 glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-theme-accent-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center gap-2 text-theme-accent-cyan mb-3 font-mono text-xs font-semibold">
              <Layers className="w-4 h-4" />
              <span>Full Stack Execution Pipeline</span>
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-theme-text mb-2">
              From Reactive Frontend to Resilient Cloud APIs &amp; AI
            </h3>
            <p className="text-theme-muted text-xs sm:text-sm leading-relaxed mb-4 font-body">
              Engineering synchronized client-server communication using modern REST APIs and microservice patterns, backed by optimized indexing on MongoDB &amp; MySQL.
            </p>

            {/* Architecture Visual Diagram */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5 my-3">
              <div className="p-3 rounded-xl bg-theme-surface-2/90 border border-theme-border text-center">
                <div className="font-mono text-xs font-bold text-theme-accent">01. React UI</div>
                <div className="text-[10px] text-theme-muted mt-1">Dynamic State &amp; Tailwind</div>
              </div>
              <div className="p-3 rounded-xl bg-theme-surface-2/90 border border-theme-border text-center">
                <div className="font-mono text-xs font-bold text-theme-accent-cyan">02. API Gateway</div>
                <div className="text-[10px] text-theme-muted mt-1">FastAPI / Flask / Spring</div>
              </div>
              <div className="p-3 rounded-xl bg-theme-surface-2/90 border border-theme-border text-center">
                <div className="font-mono text-xs font-bold text-theme-accent-purple">03. AI &amp; Logic</div>
                <div className="text-[10px] text-theme-muted mt-1">OpenCV, NLP &amp; Pandas</div>
              </div>
              <div className="p-3 rounded-xl bg-theme-surface-2/90 border border-theme-border text-center">
                <div className="font-mono text-xs font-bold text-theme-warm">04. Data Layer</div>
                <div className="text-[10px] text-theme-muted mt-1">MongoDB &amp; MySQL</div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-theme-border/60 flex items-center justify-between font-mono text-xs text-theme-muted">
            <span>High-Throughput • Resilient</span>
            <span className="text-emerald-400 font-semibold">99.9% Uptime Design</span>
          </div>
        </div>

        {/* Bento Tile 3: Experience & Internships (Span 4) */}
        <div className="lg:col-span-4 glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-theme-accent mb-3 font-mono text-xs font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>Production Track Record</span>
            </div>
            <div className="font-display font-bold text-xl sm:text-2xl text-theme-text mb-1">
              3+ Industry Roles
            </div>
            <div className="text-xs text-theme-muted mb-4 font-body">
              Production engineering &amp; full stack delivery
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 rounded-xl bg-theme-surface-2/80 border border-theme-border hover:border-theme-accent/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-theme-text">Novi Tech R&amp;D</span>
                  <span className="text-[10px] text-theme-muted">2024</span>
                </div>
                <div className="text-[11px] text-theme-accent mt-0.5">Full Stack Development Intern</div>
              </div>
              <div className="p-3 rounded-xl bg-theme-surface-2/80 border border-theme-border hover:border-theme-accent/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-theme-text">Dev Technology Solutions</span>
                  <span className="text-[10px] text-theme-muted">2025</span>
                </div>
                <div className="text-[11px] text-theme-accent mt-0.5">Python Web App Developer Intern</div>
              </div>
            </div>
          </div>

          <a
            href="#experience"
            className="inline-flex items-center gap-1 text-xs font-mono text-theme-accent hover:underline pt-4 mt-2"
          >
            Explore detailed achievements <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bento Tile 4: Technical Arsenal & Core Stack (Span 5) */}
        <div className="lg:col-span-5 glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-theme-warm mb-3 font-mono text-xs font-semibold">
              <Flame className="w-4 h-4" />
              <span>Core Engineering Strengths</span>
            </div>
            <div className="font-display font-bold text-xl text-theme-text mb-3">
              Polyglot Developer Toolkit
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-theme-surface-2 border border-theme-border text-center">
                <div className="text-theme-accent font-bold">Python</div>
                <div className="text-[10px] text-theme-muted">FastAPI / Flask</div>
              </div>
              <div className="p-2.5 rounded-lg bg-theme-surface-2 border border-theme-border text-center">
                <div className="text-theme-accent-cyan font-bold">React.js</div>
                <div className="text-[10px] text-theme-muted">Tailwind / Hooks</div>
              </div>
              <div className="p-2.5 rounded-lg bg-theme-surface-2 border border-theme-border text-center">
                <div className="text-amber-400 font-bold">Java</div>
                <div className="text-[10px] text-theme-muted">Spring Boot</div>
              </div>
              <div className="p-2.5 rounded-lg bg-theme-surface-2 border border-theme-border text-center">
                <div className="text-purple-400 font-bold">OpenCV &amp; AI</div>
                <div className="text-[10px] text-theme-muted">Vision / NLP</div>
              </div>
              <div className="p-2.5 rounded-lg bg-theme-surface-2 border border-theme-border text-center">
                <div className="text-emerald-400 font-bold">MongoDB</div>
                <div className="text-[10px] text-theme-muted">Aggregations</div>
              </div>
              <div className="p-2.5 rounded-lg bg-theme-surface-2 border border-theme-border text-center">
                <div className="text-sky-400 font-bold">MySQL</div>
                <div className="text-[10px] text-theme-muted">RDBMS Indexing</div>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-2 border-t border-theme-border/60 flex items-center justify-between text-xs font-mono text-theme-muted">
            <span>Clean Code &amp; SOLID Principles</span>
            <span className="text-theme-accent">Git VCS Ready</span>
          </div>
        </div>

        {/* Bento Tile 5: Live Clock, Location & Relocation HUD (Span 3) */}
        <div className="lg:col-span-3 glass-card bg-theme-surface border border-theme-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-theme-accent mb-3 font-mono text-xs font-semibold">
              <Clock className="w-4 h-4" />
              <span>Live System Time</span>
            </div>
            
            {/* Live Clock Display */}
            <div className="p-3.5 rounded-xl bg-theme-surface-2 border border-theme-border text-center mb-4">
              <div className="font-mono text-lg sm:text-xl font-extrabold text-theme-accent tracking-wider">
                {currentTime || '12:00:00 PM IST'}
              </div>
              <div className="font-mono text-[10px] text-theme-muted mt-0.5">India Standard Time (UTC+5:30)</div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2 rounded-lg bg-theme-surface-2/60">
                <span className="text-theme-muted">Base Location</span>
                <span className="font-bold text-theme-text">Namakkal / Tirukovilur</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-theme-surface-2/60">
                <span className="text-theme-muted">Relocation</span>
                <span className="font-bold text-emerald-400">Open Pan-India</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Software Engineering Roles</span>
          </div>
        </div>
      </div>
    </section>
  );
}

