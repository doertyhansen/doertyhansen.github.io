import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.svg";

const Datenschutz = () => {
  return (
    <>
      <Helmet>
        <title>Datenschutzerklärung – Doerty Hansen</title>
        <meta name="description" content="Datenschutzerklärung der Website von Doerty Hansen." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="py-6 px-6 border-b border-border">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src={logo} alt="Doerty Hansen Logo" className="h-10" />
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="py-16 md:py-24 px-6">
          <article className="max-w-3xl mx-auto prose prose-invert">
            <h1 className="text-display text-4xl md:text-5xl mb-8">Datenschutzerklärung</h1>
            
            {/* Verantwortlicher */}
            <section className="mb-10">
              <h2 className="text-display text-2xl mt-8 mb-4">1. Verantwortlicher</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <address className="not-italic text-foreground leading-relaxed">
                <p className="mb-1">[Vollständiger Name]</p>
                <p className="mb-1">[Straße und Hausnummer]</p>
                <p className="mb-4">[PLZ Ort]</p>
                <p>E-Mail: <a href="mailto:info@doertyhansen.de" className="text-primary hover:underline">info@doertyhansen.de</a></p>
              </address>
            </section>

            {/* Hosting */}
            <section className="mb-10">
              <h2 className="text-display text-2xl mt-8 mb-4">2. Hosting</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Website wird bei GitHub Pages gehostet. Anbieter ist die GitHub Inc., 
                88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beim Besuch dieser Website werden automatisch technische Daten (sog. Server-Logfiles) 
                durch GitHub erfasst. Hierzu können gehören:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Übertragene Datenmenge</li>
                <li>Referrer-URL</li>
                <li>Browser und Betriebssystem</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
                (berechtigtes Interesse an einem sicheren und effizienten Betrieb der Website). 
                Weitere Informationen finden Sie in der Datenschutzerklärung von GitHub: {" "}
                <a 
                  href="https://docs.github.com/de/site-policy/privacy-policies/github-privacy-statement" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub Privacy Statement
                </a>
              </p>
            </section>

            {/* Spotify */}
            <section className="mb-10">
              <h2 className="text-display text-2xl mt-8 mb-4">3. Einbindung von Spotify</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Auf dieser Website wird ein Spotify-Player eingebunden. Anbieter ist die 
                Spotify AB, Regeringsgatan 19, 111 53 Stockholm, Schweden.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der Spotify-Player wird erst nach Ihrer ausdrücklichen Einwilligung geladen. 
                Erst dann werden Daten an Spotify übertragen. Spotify kann dabei Cookies setzen 
                und Informationen über Ihre Nutzung sammeln.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bei Nutzung des Players können unter anderem folgende Daten an Spotify übermittelt werden:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>IP-Adresse</li>
                <li>Geräte- und Browserinformationen</li>
                <li>Interaktionen mit dem Player</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Die Rechtsgrundlage für die Datenverarbeitung ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
                Weitere Informationen finden Sie in der Datenschutzerklärung von Spotify: {" "}
                <a 
                  href="https://www.spotify.com/de/legal/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Spotify Privacy Policy
                </a>
              </p>
            </section>

            {/* YouTube */}
            <section className="mb-10">
              <h2 className="text-display text-2xl mt-8 mb-4">4. Einbindung von YouTube</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Auf dieser Website können YouTube-Videos eingebunden sein. Anbieter ist die 
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                YouTube-Inhalte werden erst nach Ihrer ausdrücklichen Einwilligung geladen. 
                Erst dann werden Daten an YouTube/Google übertragen. Ohne Einwilligung findet 
                keine Verbindung zu YouTube-Servern statt.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bei Nutzung können unter anderem folgende Daten an YouTube übermittelt werden:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                <li>IP-Adresse</li>
                <li>Geräte- und Browserinformationen</li>
                <li>Angesehene Videos und Interaktionen</li>
                <li>Ggf. Verknüpfung mit einem Google-Konto</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Die Rechtsgrundlage für die Datenverarbeitung ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
                Weitere Informationen finden Sie in der Datenschutzerklärung von Google: {" "}
                <a 
                  href="https://policies.google.com/privacy?hl=de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Privacy Policy
                </a>
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-10">
              <h2 className="text-display text-2xl mt-8 mb-4">5. Cookies und externe Inhalte</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Website selbst setzt keine eigenen Cookies und verwendet keine Analyse-Tools.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Externe Dienste (Spotify, YouTube) können jedoch Cookies setzen, sobald Sie deren 
                Einbindung zustimmen. Diese Cookies dienen den jeweiligen Anbietern zur Analyse, 
                Personalisierung und Werbung.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ohne Ihre ausdrückliche Einwilligung werden keine externen Inhalte geladen und 
                somit keine Cookies von Drittanbietern gesetzt.
              </p>
            </section>

            {/* Betroffenenrechte */}
            <section className="mb-10">
              <h2 className="text-display text-2xl mt-8 mb-4">6. Ihre Rechte als betroffene Person</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten Daten verlangen.</li>
                <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger Daten verlangen.</li>
                <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können verlangen, Ihre Daten in einem strukturierten, gängigen Format zu erhalten.</li>
                <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
                <li><strong>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Sie können eine erteilte Einwilligung jederzeit widerrufen.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Darüber hinaus haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde 
                über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
              </p>
            </section>

            {/* Aktualität */}
            <section className="mb-10">
              <h2 className="text-display text-2xl mt-8 mb-4">7. Aktualität dieser Datenschutzerklärung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026. 
                Durch Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher 
                bzw. behördlicher Vorgaben kann eine Anpassung dieser Datenschutzerklärung 
                erforderlich werden.
              </p>
            </section>
          </article>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Doerty Hansen — Alle Rechte vorbehalten
            </p>
            <div className="flex gap-6">
              <Link to="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Datenschutz;
