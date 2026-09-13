import { useState, useEffect } from "react";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { InteractiveTerminal } from "../components/InteractiveTerminal";
import { MobileBottomNav } from "../components/MobileBottomNav";

const VALID_TABS = ["home", "projects", "skills", "about", "contact"];

export const Home = () => {
  const [mode, setMode] = useState("gui"); // 'gui' | 'terminal'
  const [activeTab, setActiveTab] = useState("home"); // 'home' | 'projects' | 'skills' | 'about' | 'contact'

  // Initialize and synchronize with URL Hash (e.g., #projects)
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (VALID_TABS.includes(hash)) {
        setActiveTab(hash);
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
      {/* Background Physics Mesh */}
      <StarBackground />

      {/* Unified Single Navbar with integrated ThemeToggle & Tab Switcher */}
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
          {/* Focused Tab View Area with mobile-bottom-nav clearance */}
          <main className="relative z-10 flex-1 pt-14 sm:pt-16 pb-20 md:pb-0">
            <div key={activeTab} className="animate-fade-in">
              {activeTab === "home" && <HeroSection onNavigate={handleTabChange} />}
              {activeTab === "projects" && <ProjectsSection />}
              {activeTab === "skills" && <SkillsSection />}
              {activeTab === "about" && <AboutSection onNavigate={handleTabChange} />}
              {activeTab === "contact" && <ContactSection />}
            </div>
          </main>

          <Footer onNavigate={handleTabChange} />

          {/* Mobile Bottom Tab Bar (1-Thumb Navigation for <768px screens) */}
          <MobileBottomNav activeTab={activeTab} onSelectTab={handleTabChange} />
        </>
      )}
    </div>
  );
};
