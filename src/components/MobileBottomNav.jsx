import { Sparkles, FolderGit2, Cpu, User, Mail } from "lucide-react";
import { cn } from "../lib/utils";

const tabs = [
  { id: "home", label: "Overview", icon: Sparkles },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "about", label: "About", icon: User },
  { id: "contact", label: "Contact", icon: Mail },
];

export const MobileBottomNav = ({ activeTab = "home", onSelectTab }) => {
  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-xl border-t border-border/80 px-2 pt-1 pb-[max(env(safe-area-inset-bottom),0.5rem)] shadow-lg"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab?.(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer relative flex-1 min-w-0 max-w-[72px]",
                isActive
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground active:scale-95"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {/* Active top line indicator */}
              {isActive && (
                <span className="absolute -top-1 w-6 h-0.5 rounded-full bg-primary animate-fade-in" />
              )}

              <div
                className={cn(
                  "p-1.5 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-primary/15 text-primary scale-110 shadow-xs shadow-primary/20"
                    : "text-muted-foreground"
                )}
              >
                <Icon size={18} />
              </div>

              <span className="text-[10px] tracking-tight font-mono truncate w-full text-center mt-0.5">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
