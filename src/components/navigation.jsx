import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Über mich" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projekte" },
    { href: "#education", label: "Bildung" },
    { href: "#contact", label: "Kontakt" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="text-xl font-bold">
            TQN
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <Button size="sm">CV herunterladen</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" className="w-full">
                CV herunterladen
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
