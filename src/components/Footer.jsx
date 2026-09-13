import { ChevronUp, Github, Heart } from "lucide-react";

export const Footer = ({ onNavigate }) => {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="py-10 px-6 bg-card/60 backdrop-blur-md relative border-t border-border mt-16">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-foreground">
            Sowmajit Kar &bull; AI/ML &amp; Full Stack Engineer
          </p>
          <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
            Built with React, Tailwind &amp; Motion &bull; Shipped with <Heart size={12} className="text-red-500 fill-red-500 inline" /> from Kolkata 🌎
          </p>
        </div>

        {/* Quick Tab Switch Links */}
        <div className="flex flex-wrap items-center justify-center gap-1 text-xs font-mono">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                onNavigate?.(tab.id);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-2.5 py-1 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Sowmajit-Kar"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-full bg-secondary hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
