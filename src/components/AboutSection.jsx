import { Brain, Cpu, Layers, Sparkles, Terminal, FileText } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center font-mono text-xs uppercase tracking-widest text-violet-700 dark:text-violet-400 font-bold mb-2">
          // 01. RESEARCH &amp; ARCHITECTURAL PROFILE
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 text-center text-foreground">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 dark:from-violet-400 dark:to-indigo-400">Sowmajit Kar</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-normal">
          Engineering at the synthesis of cutting-edge Deep Learning research and robust Full Stack systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground">
              Building the Future with <span className="text-primary">React</span>,{" "}
              <span className="text-primary">Python</span> &amp;{" "}
              <span className="text-primary">LLMs</span>
            </h3>
            
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I am an AI/ML and Full Stack Engineer based in Kolkata, India.
              My work focuses on pushing the boundaries of what is possible with deep neural networks—such
              as temporal optical flow interpolation for geostationary satellite telemetry and deepfake forensic detection—while
              architecting scalable, responsive web platforms that deliver these capabilities to end users.
            </p>

            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Whether orchestrating autonomous multi-agent pipelines with CrewAI, integrating Gemini API for document reasoning,
              or deploying production e-commerce platforms like <span className="text-foreground font-semibold">CampusCart</span>,
              I thrive on turning complex research into reliable, performant software.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Let's Collaborate
              </a>
              <a
                href="https://github.com/Sowmajit-Kar"
                target="_blank"
                rel="noreferrer"
                className="cosmic-button-outline"
              >
                <Terminal size={16} />
                View Repositories
              </a>
            </div>
          </div>

          {/* Right Column: Skill Focus Cards */}
          <div className="grid grid-cols-1 gap-5">
            {/* Card 1: AI / Computer Vision */}
            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 shrink-0">
                  <Brain className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">Computer Vision &amp; Deep Learning</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Temporal optical flow for satellite imagery (ChronoCloud), deepfake video classification, PyTorch, CNNs &amp; OpenCV.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: GenAI & Multi-Agents */}
            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">Generative AI &amp; Agentic Systems</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Multi-agent orchestrations with CrewAI, document intelligence with Google Gemini API, RAG, and prompt optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Full Stack & Distributed Web */}
            <div className="gradient-border p-5 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                  <Layers className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-foreground">Full Stack Web Engineering</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Modern React, Node.js, Express, Flask, REST APIs, MongoDB, and responsive interactive Motion UI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};