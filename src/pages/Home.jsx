import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { InteractiveTerminal } from "../components/InteractiveTerminal";
import { Sparkles, FolderGit2, Cpu, User, Mail } from "lucide-react";
import { cn } from "../lib/utils";

const TABS = [
  { id: "home", label: "Overview", icon: Sparkles, badge: "Live" },
  { id: "projects", label: "Projects Bento", icon: FolderGit2, badge: "6 Repos" },
  { id: "skills", label: "Skills Matrix", icon: Cpu },
  { id: "about", label: "About & Research", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Home = () => {
  const [mode, setMode] = useState("gui"); // 'gui' | 'terminal'
  const [activeTab, setActiveTab] = useState("home"); // 'home' | 'projects' | 'skills' | 'about' | 'contact'

  // Initialize and synchronize with URL Hash (e.g., #projects)
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const validTab = TABS.find((t) => t.id === hash);
      if (validTab) {
        setActiveTab(validTab.id);
      }
    };

    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.history.replaceState(null, "", `#${tabId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      {/* Theme Toggle - positioned in top right */}
      <div className="fixed top-3.5 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Background Physics Mesh */}
      <StarBackground />

      {/* Navbar with mode switcher & active tab support */}
      <Navbar
        activeMode={mode}
        onToggleMode={setMode}
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />

      {/* Content Rendering based on active Mode */}
      {mode === "terminal" ? (
        <main className="relative z-10 flex-1">
          <InteractiveTerminal onSwitchToGui={() => setMode("gui")} />
        </main>
      ) : (
        <>
          {/* Silicon Valley Lab Interactive Tab Strip Bar */}
          <div className="sticky top-[68px] z-30 py-2.5 px-4 bg-background/85 backdrop-blur-md border-b border-border/60">
            <div className="container max-w-6xl mx-auto flex items-center justify-between gap-3">
              {/* Scrollable Tab Pills */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-secondary/60 border border-border/80 text-xs font-mono overflow-x-auto no-scrollbar max-w-full">
                {TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-lg font-medium transition-all cursor-pointer text-xs whitespace-nowrap",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 font-semibold scale-100"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                      )}
                    >
                      <Icon
                        size={13}
                        className={isActive ? "text-primary-foreground" : "text-primary"}
                      />
                      <span>{tab.label}</span>
                      {tab.badge && (
                        <span
                          className={cn(
                            "text-[9px] px-1.5 py-0.2 rounded-full font-mono font-bold hidden sm:inline-block",
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-primary/10 text-primary border border-primary/20"
                          )}
                        >
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Lab Telemetry Status Pill */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/40 border border-border/60 text-[11px] font-mono text-muted-foreground shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>
                  ACTIVE: <strong className="text-foreground uppercase">{activeTab}</strong> &bull; 60 FPS
                </span>
              </div>
            </div>
          </div>

          {/* Focused Tab View Area (Animated Entrance on Switch) */}
          <main className="relative z-10 flex-1">
            <div key={activeTab} className="animate-fade-in">
              {activeTab === "home" && <HeroSection onNavigate={handleTabChange} />}
              {activeTab === "projects" && <ProjectsSection />}
              {activeTab === "skills" && <SkillsSection />}
              {activeTab === "about" && <AboutSection onNavigate={handleTabChange} />}
              {activeTab === "contact" && <ContactSection />}
            </div>
          </main>

          <Footer onNavigate={handleTabChange} />
        </>
      )}
    </div>
  );
};
