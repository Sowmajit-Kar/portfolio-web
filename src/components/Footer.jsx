import { ChevronUp, Github, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-6 bg-card/60 backdrop-blur-md relative border-t border-border mt-16">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-foreground">
            Sowmajit Kar &bull; AI/ML &amp; Full Stack Engineer
          </p>
          <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center sm:justify-start gap-1">
            Built with React, Tailwind &amp; Motion &bull; Shipped with <Heart size={12} className="text-red-500 fill-red-500 inline" /> from Kolkata 🌎
          </p>
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

          <a
            href="#hero"
            className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
            aria-label="Back to Top"
          >
            <ChevronUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

