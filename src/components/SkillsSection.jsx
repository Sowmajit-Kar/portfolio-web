import { useState } from "react";
import { cn } from "@/lib/utils";
import { Brain, Sparkles, Code2, Database, Terminal } from "lucide-react";

const skills = [
  // AI & Deep Learning
  { name: "PyTorch & Deep Learning", level: 90, category: "aiml", highlight: "CNNs, Backprop, Frame Modeling" },
  { name: "Computer Vision & OpenCV", level: 88, category: "aiml", highlight: "Optical Flow, Video Analysis" },
  { name: "Satellite Imagery & Interpolation", level: 85, category: "aiml", highlight: "GOES/Himawari Telemetry" },
  { name: "DeepFake Detection Models", level: 84, category: "aiml", highlight: "Forensic Video Classification" },
  { name: "NumPy & Scientific Python", level: 90, category: "aiml", highlight: "Tensors & Array Computing" },

  // Generative AI & Autonomous Agents
  { name: "CrewAI Multi-Agent Systems", level: 92, category: "genai", highlight: "Autonomous Workflows & Tools" },
  { name: "Google Gemini API & LLMs", level: 94, category: "genai", highlight: "Multimodal & Document Q&A" },
  { name: "RAG & Document Intelligence", level: 86, category: "genai", highlight: "PDF Insights, Flashcard Gen" },
  { name: "Prompt Engineering & Evaluation", level: 90, category: "genai", highlight: "System Prompts & Structured I/O" },

  // Frontend & UI
  { name: "React 19 & Hooks", level: 92, category: "frontend", highlight: "SPA, Component Architecture" },
  { name: "Tailwind CSS & Motion UI", level: 95, category: "frontend", highlight: "Responsive, Glassmorphism, Theme" },
  { name: "JavaScript / Modern ES6+", level: 90, category: "frontend", highlight: "Async/Await, DOM APIs" },
  { name: "Next.js & Routing", level: 80, category: "frontend", highlight: "SSR & Client Architecture" },

  // Backend & Databases
  { name: "Python (FastAPI & Flask)", level: 90, category: "backend", highlight: "REST APIs, Web Automation" },
  { name: "Node.js & Express", level: 85, category: "backend", highlight: "Backend Services & Routing" },
  { name: "MongoDB & Mongoose", level: 82, category: "backend", highlight: "NoSQL Schemas & CampusCart" },
  { name: "Git, GitHub & CI/CD", level: 92, category: "backend", highlight: "Version Control, Open Source" },
];

const categories = [
  { id: "all", label: "All Skills", icon: Terminal },
  { id: "aiml", label: "AI & Deep Learning", icon: Brain },
  { id: "genai", label: "GenAI & Agents", icon: Sparkles },
  { id: "frontend", label: "Frontend & Motion", icon: Code2 },
  { id: "backend", label: "Backend & Systems", icon: Database },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center font-mono text-xs uppercase tracking-widest text-violet-700 dark:text-violet-400 font-bold mb-2">
          // 03. TECHNICAL CAPABILITIES
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 text-center text-foreground">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">Arsenal</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
          A blend of deep neural modeling, autonomous agent teams, and high-throughput production full-stack engineering.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer border",
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                    : "bg-card/70 text-muted-foreground hover:text-foreground border-border hover:border-primary/40 hover:bg-card"
                )}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card/80 backdrop-blur-sm p-5 rounded-xl shadow-xs card-hover border border-border flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-semibold text-foreground text-sm sm:text-base">{skill.name}</span>
                  <span className="text-primary font-bold text-xs sm:text-sm">{skill.level}%</span>
                </div>
                
                <p className="text-xs text-muted-foreground mb-3">{skill.highlight}</p>
              </div>

              <div>
                <div className="w-full bg-secondary/80 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-violet-500 to-indigo-500 h-2 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2 text-[10px] text-muted-foreground uppercase tracking-wider">
                  <span>{skill.category.toUpperCase()}</span>
                  <span>Proficiency</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};