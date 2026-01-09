import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TourDates from "@/components/TourDates";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <TourDates />
      <SpotifyPlayer />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
