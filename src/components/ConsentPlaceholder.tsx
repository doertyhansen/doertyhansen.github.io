import { useConsent } from "@/contexts/ConsentContext";
import { Button } from "@/components/ui/button";
import { Music, Play } from "lucide-react";

type ConsentPlaceholderProps = {
  service: "spotify" | "youtube";
  className?: string;
};

const ConsentPlaceholder = ({ service, className = "" }: ConsentPlaceholderProps) => {
  const { setConsent } = useConsent();

  const handleAccept = () => {
    setConsent(service, true);
  };

  const isSpotify = service === "spotify";
  const Icon = isSpotify ? Music : Play;
  const serviceName = isSpotify ? "Spotify" : "YouTube";
  const description = isSpotify 
    ? "Um den Spotify-Player zu laden, benötigen wir Ihre Zustimmung. Spotify kann Cookies setzen und Nutzungsdaten erheben."
    : "Um dieses YouTube-Video zu laden, benötigen wir Ihre Zustimmung. YouTube/Google kann Cookies setzen und Nutzungsdaten erheben.";

  return (
    <div className={`flex flex-col items-center justify-center bg-secondary/50 border border-border rounded-xl p-8 text-center ${className}`}>
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="text-display text-xl mb-2">{serviceName}-Inhalt</h3>
      <p className="text-muted-foreground text-sm mb-6 max-w-md">
        {description}
      </p>
      <Button onClick={handleAccept}>
        {serviceName} laden
      </Button>
      <p className="text-xs text-muted-foreground mt-3">
        <a href="#/datenschutz" className="underline hover:text-foreground transition-colors">
          Mehr in unserer Datenschutzerklärung
        </a>
      </p>
    </div>
  );
};

export default ConsentPlaceholder;
