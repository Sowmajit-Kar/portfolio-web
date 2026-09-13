import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X, Github, Terminal as TerminalIcon, Layout } from "lucide-react";

const navItems = [
  { id: "home", name: "Home" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "about", name: "About" },
  { id: "contact", name: "Contact" },
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
          ? "py-3 bg-background/85 backdrop-blur-md shadow-sm border-b border-border/60"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onSelectTab?.("home")}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <TerminalIcon size={18} />
          </div>
          <span className="text-base sm:text-lg font-bold text-foreground tracking-tight">
            Sowmajit<span className="text-primary">.dev</span>
          </span>
          <span className="hidden lg:inline-flex text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/20">
            AI/ML &amp; Full Stack
          </span>
        </button>

        {/* Desktop Navigation & Mode Switcher */}
        <div className="hidden md:flex items-center space-x-3">
          {activeMode === "gui" && (
            <div className="flex items-center space-x-1 lg:space-x-1.5 mr-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSelectTab?.(item.id)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",
                    activeTab === item.id
                      ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}

          {/* Mode Switcher Toggle Pill */}
          {onToggleMode && (
            <div className="flex items-center p-1 rounded-full bg-secondary/80 border border-border text-xs font-mono">
              <button
                onClick={() => onToggleMode("gui")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold transition-all cursor-pointer",
                  activeMode === "gui"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Switch to GUI Mode"
              >
                <Layout size={12} />
                <span>GUI</span>
              </button>
              <button
                onClick={() => onToggleMode("terminal")}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold transition-all cursor-pointer",
                  activeMode === "terminal"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Switch to Terminal Mode"
              >
                <TerminalIcon size={12} />
                <span>CLI &gt;_</span>
              </button>
            </div>
          )}

          <a
            href="https://github.com/Sowmajit-Kar"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Github size={18} />
          </a>
        </div>

        {/* Mobile Controls: Mode Switcher & Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          {onToggleMode && (
            <div className="flex items-center p-0.5 rounded-full bg-secondary/80 border border-border text-[11px] font-mono">
              <button
                onClick={() => onToggleMode("gui")}
                className={cn(
                  "px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer",
                  activeMode === "gui"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                )}
              >
                GUI
              </button>
              <button
                onClick={() => onToggleMode("terminal")}
                className={cn(
                  "px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer",
                  activeMode === "terminal"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                )}
              >
                CLI
              </button>
            </div>
          )}

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 cursor-pointer rounded-lg hover:bg-secondary"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
              Tab Views
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={cn(
                  "text-2xl font-bold transition-colors cursor-pointer",
                  activeTab === item.id ? "text-primary" : "text-foreground hover:text-primary"
                )}
                onClick={() => {
                  onSelectTab?.(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </button>
            ))}

            <a
              href="https://github.com/Sowmajit-Kar"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github size={18} />
              <span>GitHub @Sowmajit-Kar</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};