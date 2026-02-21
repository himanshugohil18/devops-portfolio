import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`mx-auto max-w-[1200px] flex items-center justify-between px-6 py-4 transition-all duration-500 ${
          isScrolled
            ? "mt-3 mx-4 md:mx-auto rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-lg shadow-background/50"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
            <span className="font-display font-bold text-base text-primary">HG</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full group-hover:w-3/4 transition-all duration-300" />
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection("#contact")}
            className="hidden md:flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-medium text-sm rounded-xl hover:bg-primary/90 transition-all duration-300 glow-button"
          >
            Let's Work
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl p-4 animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200 rounded-xl text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="mt-2 px-5 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-xl hover:bg-primary/90 transition-all duration-200"
            >
              Let's Work
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
