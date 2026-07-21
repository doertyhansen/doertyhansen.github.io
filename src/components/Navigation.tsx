import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const SHOP_URL = "https://doerty-hansen-shop.myspreadshop.de";

const navItems = [
  { label: "Über uns", href: "/?section=about" },
  { label: "Termine", href: "/?section=dates" },
  { label: "Musik", href: "/?section=music" },
  { label: "Galerie", href: "/?section=gallery" },
  { label: "Shop", href: SHOP_URL, external: true },
  { label: "Kontakt", href: "/?section=contact" },
];

const navLinkClassName = "text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors link-underline";

const getSectionFromHref = (href: string) => {
  const sectionParam = href.split("section=")[1];
  return sectionParam ? sectionParam.split("&")[0] : null;
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const section = getSectionFromHref(href);
    if (!section) return;

    window.requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-sm py-4" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="hover:opacity-80 transition-opacity"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="Doerty Hansen" className="h-10" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={navLinkClassName}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={navLinkClassName}
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-display text-3xl hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block text-display text-3xl hover:text-primary transition-colors"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
