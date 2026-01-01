
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  // 1. Initialize state safely
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or system preference if no storage exists
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 cursor-pointer"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        /* 2. Use your theme colors (e.g., text-primary) instead of hardcoded yellow/blue 
           to ensure they look good in both modes */
        <Sun className="h-5 w-5 text-yellow-400 transition-all animate-fade-in" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 transition-all animate-fade-in" />
      )}
    </button>
  );
}





























