import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Grain Texture */}
      <div className="grain-overlay absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <img 
          src={logo} 
          alt="Band Logo" 
          className="h-48 md:h-72 lg:h-96 w-auto mx-auto mb-4 animate-fade-in"
        />

        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-sm md:text-base text-muted-foreground tracking-widest uppercase">GERMAN INDIE PUNK ROCK</p>

          <p className="text-base md:text-lg text-foreground italic">Meine Version: Gitarre, Bass, Schlagzeug bilden ne Fusion, mit Trompeten kommt‘s zur Explosion.</p>

          <h1 className="text-3xl md:text-4xl font-bold uppercase">WIR SIND LAUT</h1>

          <div className="max-w-2xl mx-auto text-left text-sm md:text-base text-muted-foreground leading-relaxed">
            <p className="mb-2 font-semibold">Es gibt (k)einen Masterplan</p>
            <p>Doerty Hansen kommen aus Erlangen. Nicht mehr wirklich jung, trotzdem Nachwuchs. Alles begann 2022 unter der Sonne Kroatiens und einer Liedidee im Kopf – A Match Made in Heaven.</p>
            <p className="mt-2">Do it yourself sind seitdem zahlreiche eigene Songs entstanden. Doerty Hansen spielen zu sechst deutschen Indierock auf Wodka Ginger Ale mit Trompete, irgendwo zwischen Thees Uhlmann und Feine Sahne Fischfilet. Getreu dem Motto: Daydrinking ist kein Hobby, es ist eine Lebenseinstellung!</p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-foreground/50 rounded-full" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
