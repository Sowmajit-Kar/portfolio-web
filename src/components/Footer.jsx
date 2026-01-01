import { ChevronUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} NextTechSkar All rights reserved Made with ❤️ and ☕ in 🌎</p>

            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                <ChevronUp className="h-5 w-5" />
            </a>
        </footer>
    );
};






















