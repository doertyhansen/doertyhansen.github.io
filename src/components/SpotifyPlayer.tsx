import { useConsent } from "@/contexts/ConsentContext";
import ConsentPlaceholder from "./ConsentPlaceholder";

const SpotifyPlayer = () => {
  const { consent } = useConsent();

  return (
    <section id="music" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-display text-5xl md:text-7xl text-center mb-12">
          <span className="text-primary">HÖRT</span> REIN
        </h2>
        
        <div className="space-y-6">
          {consent.spotify ? (
            <>
              <iframe
                src="https://open.spotify.com/embed/artist/2iB8zXxPhDL1aUd5k0teHW?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
                title="Spotify Player"
              />
              
              <p className="text-center text-muted-foreground text-sm">
                Folgt uns auf Spotify für neue Releases und exklusive Inhalte
              </p>
            </>
          ) : (
            <ConsentPlaceholder service="spotify" className="min-h-[352px]" />
          )}
        </div>
      </div>
    </section>
  );
};

export default SpotifyPlayer;
