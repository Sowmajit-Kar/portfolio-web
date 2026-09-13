import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Github,
  Terminal as TerminalIcon,
  Layout,
  Sparkles,
  FolderGit2,
  Cpu,
  User,
  Mail,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navTabs = [
  { id: "home", label: "Overview", icon: Sparkles },
  { id: "projects", label: "Projects", icon: FolderGit2, count: "6" },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "about", label: "About", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

export const Navbar = ({
  activeMode = "gui",
  onToggleMode,
  activeTab = "home",
  onSelectTab,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-2.5 bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/70"
          : "py-3 bg-background/60 backdrop-blur-md border-b border-border/40"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between gap-3 px-4">
        {/* Left: Brand Identity */}
        <button
          onClick={() => onSelectTab?.("home")}
          className="flex items-center gap-1.5 sm:gap-2 group text-left cursor-pointer shrink-0"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <TerminalIcon size={15} />
          </div>
          <span className="text-sm sm:text-base font-bold text-foreground tracking-tight">
            Sowmajit<span className="text-primary">.dev</span>
          </span>
          <span className="hidden xl:inline-flex text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono font-semibold border border-primary/20">
            AI/ML &amp; Full Stack
          </span>
        </button>

        {/* Center: Unified Tab Navigation Switcher (Desktop) */}
        {activeMode === "gui" && (
          <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-secondary/70 border border-border/70 text-xs font-mono">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectTab?.(tab.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-medium transition-all cursor-pointer text-xs",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/30 font-bold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <Icon
                    size={13}
                    className={isActive ? "text-primary-foreground" : "text-primary"}
                  />
                  <span>{tab.label}</span>
                  {tab.count && (
                    <span
                      className={cn(
                        "text-[9px] px-1 py-0.2 rounded font-bold",
                        isActive ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                      )}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Right: Controls (CLI Mode Toggle, GitHub, Theme Toggle, Menu) */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* CLI / GUI Mode Switcher Pill */}
          {onToggleMode && (
            <div className="flex items-center p-0.5 rounded-full bg-secondary/80 border border-border text-xs font-mono">
              <button
                onClick={() => onToggleMode("gui")}
                className={cn(
                  "flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold transition-all cursor-pointer text-[10px] sm:text-xs",
                  activeMode === "gui"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Switch to GUI Mode"
              >
                <Layout size={11} />
                <span>GUI</span>
              </button>
              <button
                onClick={() => onToggleMode("terminal")}
                className={cn(
                  "flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold transition-all cursor-pointer text-[10px] sm:text-xs",
                  activeMode === "terminal"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Switch to Terminal Mode"
              >
                <TerminalIcon size={11} />
                <span>CLI &gt;_</span>
              </button>
            </div>
          )}

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/Sowmajit-Kar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 sm:p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors hidden sm:inline-flex"
          >
            <Github size={17} />
          </a>

          {/* Cleanly Integrated Theme Toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>

          {/* Mobile Drawer Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-1.5 sm:p-2 text-foreground md:hidden rounded-lg hover:bg-secondary cursor-pointer"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-2xl z-50 flex flex-col justify-center items-center transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-lg bg-secondary text-foreground"
            aria-label="Close Drawer"
          >
            <X size={22} />
          </button>

          <div className="flex flex-col items-center space-y-5 w-full px-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-mono mb-2">
              Select Tab View
            </div>

            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    onSelectTab?.(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-center gap-2.5 w-full max-w-xs py-3 rounded-xl font-semibold text-base transition-all cursor-pointer",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-secondary/60 text-foreground hover:bg-secondary"
                  )}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}

            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://github.com/Sowmajit-Kar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-xs font-mono"
              >
                <Github size={16} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};