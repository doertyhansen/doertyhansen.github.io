import { useConsent } from "@/contexts/ConsentContext";
import { Button } from "@/components/ui/button";
import { Music, Play } from "lucide-react";
import { Link } from "react-router-dom";

type ConsentPlaceholderProps = {
  service: "spotify" | "youtube";
  className?: string;
};

const ConsentPlaceholder = ({ service, className = "" }: ConsentPlaceholderProps) => {
  const { setConsent } = useConsent();

  const isSpotify = service === "spotify";
  const Icon = isSpotify ? Music : Play;
  const serviceName = isSpotify ? "Spotify" : "YouTube";
  const description = isSpotify
    ? "Um den Spotify-Player zu laden, benötigen wir Ihre Zustimmung. Spotify kann Cookies setzen und Nutzungsdaten erheben."
    : "Um dieses YouTube-Video zu laden, benötigen wir Ihre Zustimmung. YouTube/Google kann Cookies setzen und Nutzungsdaten erheben.";

  return (
    <div className={`relative overflow-hidden flex flex-col items-center justify-center bg-secondary border border-border p-8 text-center ${className}`}>
      <div className="absolute inset-0 grain-overlay opacity-50" />
      <div className="relative w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="relative text-display text-2xl mb-2">{serviceName}-Inhalt</h3>
      <p className="relative text-muted-foreground text-sm mb-6 max-w-md">
        {description}
      </p>
      <Button onClick={() => setConsent(service, true)} className="relative">
        {serviceName} laden
      </Button>
      <p className="relative text-xs text-muted-foreground mt-3">
        <Link
          to="/datenschutz"
          className="underline hover:text-foreground transition-colors"
          onClick={() => window.scrollTo(0, 0)}
        >
          Mehr in unserer Datenschutzerklärung
        </Link>
      </p>
    </div>
  );
};

export default ConsentPlaceholder;
