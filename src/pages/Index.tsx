import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TourDates from "@/components/TourDates";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import ConsentBanner from "@/components/ConsentBanner";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (!section) return;

    const el = document.getElementById(section);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.search]);
  
  return (
    <>
      <Helmet>
        <title>Doerty Hansen</title>
        <meta
          name="description"
          content="Offizielle Website von Doerty Hansen. Musik, Termine, Videos und Neuigkeiten."
        />
        <link rel="canonical" href="https://doertyhansen.de/" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Doerty Hansen – Offizielle Website" />
        <meta
          property="og:description"
          content="Musik, Termine, Videos und Neuigkeiten von Doerty Hansen."
        />
        <meta property="og:url" content="https://doertyhansen.de/" />
        <meta property="og:image" content="https://doertyhansen.de/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Doerty Hansen – Offizielle Website" />
        <meta
          name="twitter:description"
          content="Musik, Termine, Videos und Neuigkeiten von Doerty Hansen."
        />
        <meta name="twitter:image" content="https://doertyhansen.de/og-image.jpg" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Hero />
        <About />
        <TourDates />
        <SpotifyPlayer />
        <Gallery />
        <Footer />
        <ConsentBanner />
      </div>
    </>
  );
};


export default Index;
