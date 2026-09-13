import { ArrowDown, Github, Sparkles, Brain, Cpu, Globe } from "lucide-react";
import { AIPipelineVisualizer } from "./AIPipelineVisualizer";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Silicon Valley Lab Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/5 dark:bg-zinc-900/80 border border-zinc-300/80 dark:border-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 shadow-sm opacity-0 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">STATUS: ONLINE &bull; AVAILABLE FOR AI/ML &amp; FULL STACK ROLES</span>
          </div>

          {/* Main Title - Silicon Valley Laboratory Proportions */}
          <div className="space-y-2">
            <div className="font-mono text-xs uppercase tracking-widest text-violet-700 dark:text-violet-400 font-bold opacity-0 animate-fade-in-delay-1">
              // APPLIED DEEP LEARNING &amp; DISTRIBUTED SYSTEMS
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              <span className="block opacity-0 animate-fade-in-delay-1">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 dark:from-violet-400 dark:to-indigo-400">Sowmajit</span> Kar
              </span>
              <span className="block mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-indigo-600 to-cyan-600 dark:from-cyan-400 dark:via-violet-400 dark:to-fuchsia-400 opacity-0 animate-fade-in-delay-2">
                AI/ML + Full Stack Engineer
              </span>
            </h1>
          </div>

          {/* Subheading - Refined Inter Typography */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed font-normal">
            Architecting intelligent systems and production-grade web applications.
            Specializing in <span className="text-foreground font-semibold">Deep Learning</span>,{" "}
            <span className="text-foreground font-semibold">Autonomous LLM Agents</span>, and{" "}
            <span className="text-foreground font-semibold">high-performance Full Stack</span> infrastructure.
          </p>

          {/* Interactive Tech Pills (Vintage Monospace Ligature-Ready) */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 pb-1 opacity-0 animate-fade-in-delay-3 font-mono text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:border-violet-500/50 hover:text-foreground transition-all shadow-sm">
              <Brain size={13} className="text-violet-600 dark:text-violet-400" /> PyTorch &amp; Computer Vision
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:border-cyan-500/50 hover:text-foreground transition-all shadow-sm">
              <Sparkles size={13} className="text-cyan-600 dark:text-cyan-400" /> CrewAI Multi-Agents &amp; LLMs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:border-emerald-500/50 hover:text-foreground transition-all shadow-sm">
              <Globe size={13} className="text-emerald-600 dark:text-emerald-400" /> React 19 &amp; Modern Full Stack
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 hover:border-purple-500/50 hover:text-foreground transition-all shadow-sm">
              <Cpu size={13} className="text-purple-600 dark:text-purple-400" /> Python, Flask &amp; Node.js
            </span>
          </div>

          {/* CTA Buttons - Premium SaaS / Lab Layout */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button w-full sm:w-auto text-xs sm:text-sm font-semibold">
              Explore Featured Projects
            </a>
            <a
              href="https://github.com/Sowmajit-Kar"
              target="_blank"
              rel="noreferrer"
              className="cosmic-button-outline w-full sm:w-auto font-mono text-xs sm:text-sm"
            >
              <Github size={16} />
              github.com/Sowmajit-Kar
            </a>
            <a href="#contact" className="px-4 py-2.5 text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 hover:text-foreground transition-colors">
              Contact / Inquiries &rarr;
            </a>
          </div>

          {/* Live AI Pipeline Visualizer Component */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <AIPipelineVisualizer />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex flex-col items-center">
          <a
            href="#about"
            className="flex flex-col items-center text-xs text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll to About"
          >
            <span className="mb-1">Scroll Down</span>
            <ArrowDown className="h-4 w-4 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};
