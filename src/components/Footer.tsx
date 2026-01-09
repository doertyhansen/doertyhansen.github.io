import { Instagram, Mail, Music } from "lucide-react";

const socialLinks = [
  { 
    icon: Music, 
    label: "Spotify", 
    href: "https://open.spotify.com" 
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    href: "https://instagram.com" 
  },
  { 
    icon: Mail, 
    label: "Kontakt", 
    href: "mailto:booking@bandname.de" 
  },
];

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <link.icon className="w-6 h-6 group-hover:text-primary transition-colors duration-300" />
              <span className="text-sm uppercase tracking-widest link-underline">
                {link.label}
              </span>
            </a>
          ))}
        </div>
        
        {/* Band Name */}
        <div className="text-center">
          <h3 className="text-display text-4xl md:text-5xl mb-4">BANDNAME</h3>
          <p className="text-muted-foreground text-sm tracking-wider">
            © 2026 — Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
