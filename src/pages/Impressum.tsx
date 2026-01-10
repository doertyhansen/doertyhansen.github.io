import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.svg";

const Impressum = () => {
  return (
    <>
      <Helmet>
        <title>Impressum – Doerty Hansen</title>
        <meta name="description" content="Impressum der Website von Doerty Hansen." />
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
            <h1 className="text-display text-4xl md:text-5xl mb-8">Impressum</h1>
            
            <section className="mb-8">
              <p className="text-muted-foreground mb-6">
                Angaben gemäß § 5 TMG
              </p>
              
              <h2 className="text-display text-2xl mt-8 mb-4">Verantwortlich für den Inhalt</h2>
              <address className="not-italic text-foreground leading-relaxed">
                <p className="mb-1">Doerty Hansen<br/>vertreten durch: Jakub Dydowicz</p>
                <p className="mb-1">Leitensteig 8</p>
                <p className="mb-4">91058 Erlangen</p>
              </address>
            </section>

            <section className="mb-8">
              <h2 className="text-display text-2xl mt-8 mb-4">Kontakt</h2>
              <p className="text-foreground">
                E-Mail: <a href="mailto:info@doertyhansen.de" className="text-primary hover:underline">info@doertyhansen.de</a>
              </p>
            </section>

            {/*<section className="mb-8">
              <h2 className="text-display text-2xl mt-8 mb-4">Haftung für Inhalte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display text-2xl mt-8 mb-4">Haftung für Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-display text-2xl mt-8 mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>*/}
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

export default Impressum;
