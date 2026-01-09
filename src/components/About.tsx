import bandPhoto from "@/assets/band-photo-1.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img 
              src={bandPhoto} 
              alt="Band portrait" 
              className="relative w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          {/* Text */}
          <div>
            <h2 className="text-display text-5xl md:text-7xl mb-8">
              <span className="text-primary">WIR</span> SIND LAUT
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vier Freunde. Eine Bühne. Keine Kompromisse. Seit 2019 machen wir das, 
                was wir am besten können: ehrlichen, lauten, deutschen Indie-Rock.
              </p>
              <p>
                Unsere Songs erzählen Geschichten aus dem echten Leben – von kaputten 
                Nächten, verpassten Chancen und dem Gefühl, wenn der Bass so laut ist, 
                dass man nichts mehr denken muss.
              </p>
              <p className="text-foreground font-medium">
                Keine Scheiße. Nur Musik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
