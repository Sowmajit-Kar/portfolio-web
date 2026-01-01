import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; 
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10">
            <span className="text-foreground">Sowmajit's</span> Portfolio
          </span>
        </a>

        {/* Desktop navigation bar */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile nav toggle */}
        <button 
          onClick={() => setIsMenuOpen((prev) => !prev)} // Added missing toggle logic
          className="md:hidden p-2 text-foreground z-50 cursor-pointer"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"} 
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />} 
        </button>

        {/* Mobile nav overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {/* Changed 'hidden md:flex' to 'flex flex-col' so items actually show on mobile */}
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};