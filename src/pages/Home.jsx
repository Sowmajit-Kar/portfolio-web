import { useState } from "react";
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

export const Home = () => {
  const [mode, setMode] = useState("gui"); // 'gui' | 'terminal'

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle - positioned in top right */}
      <div className="fixed top-3.5 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Background Physics Mesh */}
      <StarBackground />

      {/* Navbar with mode switcher */}
      <Navbar activeMode={mode} onToggleMode={setMode} />

      {/* Content Rendering based on active Mode */}
      {mode === "terminal" ? (
        <main className="relative z-10">
          <InteractiveTerminal onSwitchToGui={() => setMode("gui")} />
        </main>
      ) : (
        <>
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};










