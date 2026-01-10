import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ConsentState = {
  spotify: boolean;
  youtube: boolean;
};

type ConsentContextType = {
  consent: ConsentState;
  hasDecided: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  setConsent: (service: keyof ConsentState, value: boolean) => void;
  openSettings: () => void;
  isSettingsOpen: boolean;
  closeSettings: () => void;
};

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

const CONSENT_STORAGE_KEY = "doerty-hansen-consent";

export const ConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsentState] = useState<ConsentState>({
    spotify: false,
    youtube: false,
  });
  const [hasDecided, setHasDecided] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setConsentState(parsed.consent || { spotify: false, youtube: false });
        setHasDecided(true);
      } catch {
        // Invalid stored data, reset
        localStorage.removeItem(CONSENT_STORAGE_KEY);
      }
    }
  }, []);

  const saveConsent = (newConsent: ConsentState) => {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ consent: newConsent, decidedAt: new Date().toISOString() })
    );
    setConsentState(newConsent);
    setHasDecided(true);
  };

  const acceptAll = () => {
    saveConsent({ spotify: true, youtube: true });
    setIsSettingsOpen(false);
  };

  const rejectAll = () => {
    saveConsent({ spotify: false, youtube: false });
    setIsSettingsOpen(false);
  };

  const setConsent = (service: keyof ConsentState, value: boolean) => {
    const newConsent = { ...consent, [service]: value };
    saveConsent(newConsent);
  };

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  return (
    <ConsentContext.Provider
      value={{
        consent,
        hasDecided,
        acceptAll,
        rejectAll,
        setConsent,
        openSettings,
        isSettingsOpen,
        closeSettings,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
};
