import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.svg";
import { getNextTourDate } from "@/lib/tourDates";
import { Link } from "react-router-dom";

const Hero = () => {
  const nextShow = getNextTourDate();
  const nextShowLabel = nextShow
    ? `Nächster Gig: ${nextShow.date}${nextShow.time ? ` · ${nextShow.time}` : ""} · ${nextShow.venue}`
    : "";

  const scrollToDates = () => {
    document.getElementById("dates")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 bg-background/70" />
      <div className="grain-overlay absolute inset-0" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <img
          src={logo}
          alt="Doerty Hansen"
          className="h-48 md:h-72 lg:h-96 w-auto mx-auto mb-4 animate-fade-in"
        />

        <p className="text-lg md:text-xl text-muted-foreground tracking-widest uppercase animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
          Gitarre, Bass, Schlagzeug bilden ne Fusion, mit Trompeten kommt's zur Explosion.
        </p>

        {nextShow?.link && (
          <a
            href={nextShow.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm md:text-base uppercase tracking-widest text-foreground/90 hover:text-primary transition-colors animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {nextShowLabel}
          </a>
        )}

        {nextShow && !nextShow.link && (
          <span
            className="mt-6 inline-block text-sm md:text-base uppercase tracking-widest text-foreground/90 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {nextShowLabel}
          </span>
        )}

        <div className="mt-8 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/?section=dates"
            onClick={scrollToDates}
            className="w-full sm:w-auto px-7 py-3 border border-primary bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-primary/85 transition-colors"
          >
            Alle Termine
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
