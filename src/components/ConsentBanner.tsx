import { useConsent } from "@/contexts/ConsentContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const ConsentBanner = () => {
  const { hasDecided, acceptAll, rejectAll, openSettings, isSettingsOpen, closeSettings, consent, setConsent } = useConsent();
  const [tempConsent, setTempConsent] = useState(consent);

  if (hasDecided && !isSettingsOpen) {
    return null;
  }

  const handleSaveSettings = () => {
    if (tempConsent.spotify !== consent.spotify) {
      setConsent("spotify", tempConsent.spotify);
    }
    if (tempConsent.youtube !== consent.youtube) {
      setConsent("youtube", tempConsent.youtube);
    }
    closeSettings();
  };

  return (
    <>
      {/* Main Banner */}
      {!hasDecided && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-card border-t border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-display text-xl mb-2">Datenschutz-Einstellungen</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wir nutzen Spotify und YouTube zur Einbindung von Musik und Videos. 
                  Diese Dienste können Cookies setzen und Daten erheben. 
                  Bitte wählen Sie, ob Sie diese Inhalte laden möchten.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" onClick={openSettings} className="text-sm">
                  Einstellungen
                </Button>
                <Button variant="outline" onClick={rejectAll} className="text-sm">
                  Nur erforderliche
                </Button>
                <Button onClick={acceptAll} className="text-sm">
                  Alle akzeptieren
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Dialog */}
      <Dialog open={isSettingsOpen} onOpenChange={(open) => !open && closeSettings()}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-display text-2xl">Datenschutz-Einstellungen</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Wählen Sie aus, welche externen Inhalte geladen werden dürfen.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Essential */}
            <div className="flex items-start gap-3">
              <Checkbox checked disabled className="mt-1" />
              <div>
                <p className="font-medium">Erforderlich</p>
                <p className="text-sm text-muted-foreground">
                  Technisch notwendige Funktionen der Website. Keine Cookies von Drittanbietern.
                </p>
              </div>
            </div>

            {/* Spotify */}
            <div className="flex items-start gap-3">
              <Checkbox 
                id="spotify"
                checked={tempConsent.spotify} 
                onCheckedChange={(checked) => setTempConsent(prev => ({ ...prev, spotify: !!checked }))}
                className="mt-1"
              />
              <div>
                <label htmlFor="spotify" className="font-medium cursor-pointer">Spotify</label>
                <p className="text-sm text-muted-foreground">
                  Ermöglicht die Einbindung von Spotify-Musik-Playern. 
                  Spotify kann Cookies setzen und Nutzungsdaten erheben.
                </p>
              </div>
            </div>

            {/* YouTube */}
            <div className="flex items-start gap-3">
              <Checkbox 
                id="youtube"
                checked={tempConsent.youtube} 
                onCheckedChange={(checked) => setTempConsent(prev => ({ ...prev, youtube: !!checked }))}
                className="mt-1"
              />
              <div>
                <label htmlFor="youtube" className="font-medium cursor-pointer">YouTube</label>
                <p className="text-sm text-muted-foreground">
                  Ermöglicht die Einbindung von YouTube-Videos. 
                  Google/YouTube kann Cookies setzen und Nutzungsdaten erheben.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-border">
            <Button variant="outline" onClick={rejectAll} className="flex-1">
              Alle ablehnen
            </Button>
            <Button onClick={handleSaveSettings} className="flex-1">
              Auswahl speichern
            </Button>
            <Button onClick={acceptAll} className="flex-1">
              Alle akzeptieren
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConsentBanner;
