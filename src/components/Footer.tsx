import { Instagram, Mail, Music, ShoppingBag, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const socialLinks = [
  { 
    icon: Music, 
    label: "Spotify", 
    href: "https://open.spotify.com/intl-de/artist/2iB8zXxPhDL1aUd5k0teHW?si=uzypbD5NRtS0ctQuUnl9tw" 
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    href: "https://www.instagram.com/doertyhansen" 
  },
  { 
    icon: Youtube, 
    label: "YouTube", 
    href: "https://www.youtube.com/@DoertyHansen" 
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb8fFC10LKZCQ6EqLu2s"
  },
  {
    icon: ShoppingBag,
    label: "Shop",
    href: "https://doerty-hansen-shop.myspreadshop.de"
  },
  { 
    icon: Mail, 
    label: "Booking", 
    href: "mailto:info@doertyhansen.de" 
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="py-16 md:py-24 px-6 border-t border-border">
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
        
        {/* Band Logo */}
        <div className="text-center mb-8">
          <img src={logo} alt="Band Logo" className="h-16 md:h-20 w-auto mx-auto mb-4" />
          <p className="text-muted-foreground text-sm tracking-wider">
            © 2026 — Alle Rechte vorbehalten
          </p>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center gap-8">
          <Link 
            to="/impressum" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
			onClick={() => window.scrollTo(0, 0)}
          >
            Impressum
          </Link>
          <Link 
            to="/datenschutz" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
			onClick={() => window.scrollTo(0, 0)}
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
