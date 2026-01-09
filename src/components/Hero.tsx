import heroBg from "@/assets/hero-bg.jpg";

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
        <h1 className="text-display text-7xl md:text-9xl lg:text-[12rem] leading-none mb-4 animate-fade-in">
          BANDNAME
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground tracking-widest uppercase animate-fade-in" style={{ animationDelay: "0.2s" }}>
          German Indie Punk Rock
        </p>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-foreground/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
