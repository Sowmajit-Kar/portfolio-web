import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Sparkles, Brain, Globe, Layers, Sliders, Activity, ShieldAlert, Users, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Interactive Slider State for ChronoCloud Card
  const [epochs, setEpochs] = useState(65);

  // Interactive Tab State for ResearchMIND AI Card
  const [researchTab, setResearchTab] = useState("gist");

  // Dynamic calculations based on slider
  const psnr = (28.4 + (epochs / 100) * 11.2).toFixed(1);
  const ssim = (0.835 + (epochs / 100) * 0.148).toFixed(3);
  const latency = (12.0 + (epochs / 100) * 7.5).toFixed(1);

  const filters = [
    { id: "all", label: "All Showcases", icon: Layers },
    { id: "aiml", label: "AI & Deep Learning", icon: Brain },
    { id: "genai", label: "GenAI & Agents", icon: Sparkles },
    { id: "fullstack", label: "Full Stack Web", icon: Globe },
  ];

  const matchesFilter = (category) => activeFilter === "all" || activeFilter === category;

  return (
    <section id="projects" className="py-16 sm:py-24 px-3 sm:px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-zinc-900/5 dark:bg-zinc-900/80 border border-zinc-300/80 dark:border-zinc-800 text-[11px] sm:text-xs font-mono text-violet-700 dark:text-violet-400 mb-2.5 font-bold">
            <Activity size={12} />
            <span>// 02. INTERACTIVE SYSTEMS SHOWCASE</span>
          </div>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-indigo-600 to-cyan-600 dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-400">Architectural Bento Grid</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-xs sm:text-base font-normal leading-relaxed">
            Engineered systems with live telemetry controls, temporal model sliders, multi-agent orchestration, and reactive architecture.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          {filters.map((f) => {
            const Icon = f.icon;
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                    : "bg-card/70 text-muted-foreground hover:text-foreground border-border hover:border-primary/40 hover:bg-card"
                )}
              >
                <Icon size={13} />
                <span>{f.label}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* ================= CARD 1: CHRONOCLOUD (LARGE HERO BENTO) ================= */}
          {matchesFilter("aiml") && (
            <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-card/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4.5 sm:p-7 border border-border/90 shadow-xl flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-violet-500/15 text-violet-400 border border-violet-500/30">
                      Satellite Vision Research
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">Python &bull; PyTorch &bull; Optical Flow</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/Sowmajit-Kar/ChronoCloud"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-secondary hover:bg-primary/10 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      <span>Source</span>
                    </a>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  ChronoCloud: Satellite Frame Interpolation AI
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mt-2 leading-relaxed">
                  Deep optical flow temporal frame synthesis for geostationary meteorological satellites (GOES/Himawari/INSAT).
                  Upsamples satellite observation rates for real-time tracking of extreme storms, wildfires, and floods.
                </p>

                {/* LIVE INTERACTIVE METRICS SLIDER WIDGET */}
                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-secondary/40 border border-border/80">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <Sliders size={16} className="text-primary" />
                      <span className="text-xs font-bold text-foreground">Interactive Training &amp; Accuracy Slider</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-primary px-2.5 py-0.5 rounded-md bg-primary/10 border border-primary/20">
                      Epoch {epochs} / 100
                    </span>
                  </div>

                  {/* Range Slider */}
                  <input
                    type="range"
                    min="10"
                    max="100"
                    step="5"
                    value={epochs}
                    onChange={(e) => setEpochs(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer h-2 bg-secondary rounded-lg mb-4"
                  />

                  {/* Live SVG Waveform / Metrics Bar */}
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-3 text-center pt-1">
                    <div className="p-2 sm:p-2.5 rounded-xl bg-card border border-border/60">
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono text-muted-foreground block truncate">PSNR</span>
                      <span className="text-sm sm:text-lg font-extrabold text-violet-400 font-mono">{psnr}</span>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-card border border-border/60">
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono text-muted-foreground block truncate">SSIM</span>
                      <span className="text-sm sm:text-lg font-extrabold text-cyan-400 font-mono">{ssim}</span>
                    </div>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-card border border-border/60">
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono text-muted-foreground block truncate">Latency</span>
                      <span className="text-sm sm:text-lg font-extrabold text-emerald-400 font-mono">{latency}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-5 pt-3 border-t border-border/40">
                {["PyTorch", "Optical Flow", "GOES-16 Telemetry", "Computer Vision", "CUDA"].map((tag, i) => (
                  <span key={i} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-secondary/80 text-secondary-foreground border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ================= CARD 2: CAMPUSCART (LIVE E-COMMERCE STREAM) ================= */}
          {matchesFilter("fullstack") && (
            <div className="col-span-1 bg-card/90 backdrop-blur-md rounded-3xl p-6 border border-border/90 shadow-xl flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Production Live
                  </span>
                  <a
                    href="https://campuscart-iota-one.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-primary hover:bg-primary/10 transition-colors"
                    title="Open live app"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  CampusCart — Student E-Commerce
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mt-1.5">
                  Hyperlocal campus marketplace enabling college students to buy, rent, or exchange instruments, lab gear, cycles, and notes.
                </p>

                {/* Simulated Live Transaction Stream Widget */}
                <div className="mt-4 p-3.5 rounded-2xl bg-secondary/50 border border-border text-xs font-mono space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground border-b border-border/60 pb-1.5">
                    <span>Verified Trade Feed</span>
                    <span className="text-emerald-400 font-bold">&bull; Real-Time</span>
                  </div>
                  <div className="text-[11px] text-foreground/90 space-y-1">
                    <div className="truncate">&gt; Engineering Drafter booked @ NIT</div>
                    <div className="truncate text-muted-foreground">&gt; CASIO fx-991EX rented for 3 days</div>
                    <div className="truncate text-muted-foreground">&gt; @college.edu email auth verified</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-border/40 mt-4">
                <a
                  href="https://github.com/Sowmajit-Kar/CAMPUSCART"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-primary"
                >
                  <Github size={14} />
                  <span>Repo</span>
                </a>
                <a
                  href="https://campuscart-iota-one.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <span>Launch App</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          )}

          {/* ================= CARD 3: RESEARCHMIND AI (GENAI DOCUMENT INTELLIGENCE) ================= */}
          {matchesFilter("genai") && (
            <div className="col-span-1 bg-card/90 backdrop-blur-md rounded-3xl p-6 border border-border/90 shadow-xl flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    GenAI &bull; Gemini API
                  </span>
                  <a
                    href="https://github.com/Sowmajit-Kar/ResearchMIND_AI"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  ResearchMIND AI: PDF Analyst
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mt-1.5">
                  AI document intelligence assistant parsing complex research publications into digestible insights, gists, and study flashcards.
                </p>

                {/* Interactive Simulated Extraction Tabs */}
                <div className="mt-4 p-3.5 rounded-2xl bg-secondary/50 border border-border text-xs">
                  <div className="flex gap-1.5 mb-2.5 border-b border-border/60 pb-2">
                    {["gist", "flashcard", "qa"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setResearchTab(tab)}
                        className={cn(
                          "px-2.5 py-1 rounded-lg text-[10px] font-bold capitalize transition-all cursor-pointer",
                          researchTab === tab
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="font-mono text-[11px] text-foreground/90 min-h-[52px]">
                    {researchTab === "gist" && (
                      <p className="text-muted-foreground">"Identified transformer attention bottleneck; proposed matrix-sparse quantization."</p>
                    )}
                    {researchTab === "flashcard" && (
                      <p className="text-cyan-400">Q: What is the primary novelty? &rarr; A: Latency reduced by 42% via optical flow interpolation.</p>
                    )}
                    {researchTab === "qa" && (
                      <p className="text-violet-400">&gt; Grounded answer generated using Gemini 1.5 with 0 context hallucinations.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-border/40 mt-4 text-xs font-mono">
                <span className="text-muted-foreground">Python &bull; RAG</span>
                <a
                  href="https://github.com/Sowmajit-Kar/ResearchMIND_AI"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-primary hover:underline"
                >
                  View Code &rarr;
                </a>
              </div>
            </div>
          )}

          {/* ================= CARD 4: DEEPFAKE DETECTION (CV FORENSICS) ================= */}
          {matchesFilter("aiml") && (
            <div className="col-span-1 bg-card/90 backdrop-blur-md rounded-3xl p-6 border border-border/90 shadow-xl flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-pink-500/15 text-pink-400 border border-pink-500/30 flex items-center gap-1">
                    <ShieldAlert size={12} />
                    Computer Vision Forensics
                  </span>
                  <a
                    href="https://github.com/Sowmajit-Kar/Deep_Fake_Detection_model"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  DeepFake Video Forensic Classifier
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mt-1.5">
                  Deep convolutional network detecting frame-level manipulation artifacts and frequency-domain synthetic anomalies.
                </p>

                {/* Laser Scan Gauge Preview */}
                <div className="mt-4 p-3.5 rounded-2xl bg-secondary/50 border border-border text-xs space-y-2.5">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-muted-foreground">Authenticity Score</span>
                    <span className="text-emerald-400 font-bold">99.1% Confidence</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full w-[99%]" />
                  </div>
                  <p className="text-[10px] font-mono text-muted-foreground truncate">
                    Spatial gradient: 0.04 | Temporal jitter: Normal
                  </p>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-border/40 mt-4 text-xs font-mono">
                <span className="text-muted-foreground">PyTorch &bull; OpenCV</span>
                <a
                  href="https://github.com/Sowmajit-Kar/Deep_Fake_Detection_model"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-primary hover:underline"
                >
                  View Model &rarr;
                </a>
              </div>
            </div>
          )}

          {/* ================= CARD 5: SCRIPTORIA (CREWAI MULTI-AGENT STUDIO) ================= */}
          {matchesFilter("genai") && (
            <div className="col-span-1 bg-card/90 backdrop-blur-md rounded-3xl p-6 border border-border/90 shadow-xl flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30 flex items-center gap-1">
                    <Users size={12} />
                    CrewAI Multi-Agents
                  </span>
                  <a
                    href="https://github.com/Sowmajit-Kar/-Scriptoria"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Scriptoria: Multi-Agent Studio
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mt-1.5">
                  Autonomous multi-agent orchestration synthesizing video transcripts, generating structured long-form articles, and performing translation.
                </p>

                {/* Micro Agent Pipeline Preview */}
                <div className="mt-4 p-3.5 rounded-2xl bg-secondary/50 border border-border text-xs font-mono space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground border-b border-border/60 pb-1.5">
                    <span>Active Agent Swarm</span>
                    <span className="text-purple-400 font-bold">3 Agents Online</span>
                  </div>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">1. Researcher Agent</span>
                      <span className="text-emerald-400 text-[10px]">Browsing</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">2. Synthesizer Agent</span>
                      <span className="text-violet-400 text-[10px]">Drafting</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">3. Translator Agent</span>
                      <span className="text-cyan-400 text-[10px]">Ready</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-border/40 mt-4 text-xs font-mono">
                <span className="text-muted-foreground">CrewAI &bull; Python</span>
                <a
                  href="https://github.com/Sowmajit-Kar/-Scriptoria"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-primary hover:underline"
                >
                  Explore Studio &rarr;
                </a>
              </div>
            </div>
          )}

          {/* ================= CARD 6: JOB PORTAL & AGGREGATOR ================= */}
          {matchesFilter("fullstack") && (
            <div className="col-span-1 bg-card/90 backdrop-blur-md rounded-3xl p-6 border border-border/90 shadow-xl flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                    <Search size={12} />
                    Flask Full Stack
                  </span>
                  <a
                    href="https://github.com/Sowmajit-Kar/Job_searching_app"
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Job Search Aggregator &amp; Engine
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mt-1.5">
                  Dynamic job board engine utilizing web scrapers, automated keyword matching algorithms, and filtering for technical roles.
                </p>

                {/* Scraper Stats Preview */}
                <div className="mt-4 p-3.5 rounded-2xl bg-secondary/50 border border-border text-xs font-mono space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground border-b border-border/60 pb-1.5">
                    <span>Scraper Throughput</span>
                    <span className="text-amber-400 font-bold">Active</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-foreground/90">
                    <span>Indexed Listings:</span>
                    <span className="font-bold">4,280+ Roles</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px] text-muted-foreground">
                    <span>Match Rate:</span>
                    <span className="text-emerald-400 font-bold">96.4%</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-border/40 mt-4 text-xs font-mono">
                <span className="text-muted-foreground">Flask &bull; Python</span>
                <a
                  href="https://github.com/Sowmajit-Kar/Job_searching_app"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-primary hover:underline"
                >
                  View Code &rarr;
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Sowmajit-Kar"
          >
            <span>Explore All 20+ Open-Source Repositories</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

