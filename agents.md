# Agent Instructions

## Projektueberblick

Dies ist die offizielle Band-Website von Doerty Hansen. Die Seite ist eine statische Vite/React-App mit TypeScript, Tailwind CSS und shadcn-ui/Radix-Komponenten. Sie ist als One-Page-Bandseite aufgebaut: Navigation, Hero, About, Tourdaten, Spotify-Einbettung, Foto/Video-Galerie, Footer sowie separate Seiten fuer Impressum, Datenschutz und 404.

## Wichtige Befehle

- `npm install` installiert die Abhaengigkeiten. Es gibt auch Bun-Lockfiles, aber die README und `package-lock.json` sprechen fuer npm als Standard.
- `npm run dev` startet den lokalen Vite-Server.
- `npm run build` erzeugt den Produktionsbuild.
- `npm run lint` prueft ESLint.
- `npm run preview` zeigt den gebauten Stand lokal an.

Vor Abschluss groesserer Aenderungen mindestens `npm run lint` und bei UI-/Routing-Aenderungen auch `npm run build` ausfuehren.

## Architektur und Dateiorte

- Einstieg: `src/main.tsx`, App-Routing: `src/App.tsx`.
- Routing laeuft ueber `HashRouter`; neue Routen in `src/App.tsx` vor der Catch-all-Route eintragen.
- Startseite: `src/pages/Index.tsx`; dort werden SEO-Metadaten mit `react-helmet-async` gepflegt.
- Hauptsektionen: `src/components/Navigation.tsx`, `Hero.tsx`, `About.tsx`, `TourDates.tsx`, `SpotifyPlayer.tsx`, `Gallery.tsx`, `Footer.tsx`.
- Tourdaten werden zentral in `src/lib/tourDates.ts` gepflegt. Das Datumsformat ist z. B. `31. JUL 2026`; `getDateStatus` und `getNextTourDate` haengen davon ab.
- Bandbilder, Logo und Hero-Bild liegen in `src/assets`; Favicons, Manifest, Robots, Sitemap und Open-Graph-Bild liegen in `public`.
- Wiederverwendbare UI-Bausteine liegen unter `src/components/ui` und folgen shadcn/Radix-Konventionen.

## Design- und Content-Konventionen

- Die Seite hat eine dunkle, rohe Indie/Punk-Aesthetik: schwarzer Hintergrund, elektrische rote Akzente, starke Display-Typografie.
- Headings verwenden die Display-Schrift `Bebas Neue`, Fliesstext `Inter`. Farben und Radius werden ueber CSS-Variablen in `src/index.css` und Tailwind-Tokens gesteuert.
- Bestehende visuelle Muster beibehalten: grosse Sektionen, uppercase Navigation, rote Akzente, dezente Hover-Zustaende, Bildmaterial in Graustufen mit sparsamen Effekten.
- Keine generischen Marketing-Sektionen erfinden. Die Startseite soll direkt Band, Musik, Termine, Fotos/Videos und Kontakt zeigen.
- Deutsche Texte, Bandtonalitaet und rechtliche Seiten sorgfaeltig behandeln. Impressum und Datenschutz nur mit klarer Vorgabe inhaltlich aendern.
- Bei Aenderungen an Links, Terminen, Socials oder externen Embeds pruefen, ob Footer, Navigation, SEO-Metadaten, Sitemap oder Datenschutztexte mit angepasst werden muessen.

## Externe Inhalte und Datenschutz

- Spotify und YouTube duerfen nur ueber die Consent-Logik geladen werden.
- Consent-State liegt in `src/contexts/ConsentContext.tsx`; UI dazu in `ConsentBanner.tsx` und Platzhalter in `ConsentPlaceholder.tsx`.
- Neue externe Embeds nicht direkt rendern, wenn sie Cookies setzen oder Drittanbieter-Daten laden. Erst Consent-Modell erweitern oder vorhandene Platzhalterstruktur nutzen.

## Implementierungshinweise

- Bevorzugt vorhandene Komponenten, Tailwind-Klassen und Alias-Imports mit `@/`.
- Neue Abhaengigkeiten nur einfuehren, wenn sie wirklich noetig sind.
- Bei Navigation zu One-Page-Sektionen das bestehende Muster `/?section=<id>` plus `scrollIntoView` respektieren.
- Bei Assets aussagekraeftige Alt-Texte setzen und grosse Bilder nicht unnoetig duplizieren.
- SEO-Titel, Canonical URL und Open-Graph/Twitter-Metadaten in `src/pages/Index.tsx` aktuell halten, wenn sich Marken- oder Inhaltsaussagen aendern.
- Rechtliche Links im Footer muessen erhalten bleiben.
- Nach jeder fachlichen oder strukturellen Aenderung pruefen, ob `agents.md` dadurch veraltet ist. Die Datei aber nur nach Rueckfrage und ausdruecklicher Anweisung des Users anpassen.
