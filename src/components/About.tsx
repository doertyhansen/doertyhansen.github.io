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
              Es gibt (k)einen <span className="text-primary">Masterplan</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Doerty Hansen kommen aus Erlangen. Nicht mehr wirklich jung, trotzdem Nachwuchs.
                Alles Begann 2022 unter der Sonne Kroatiens und einer Liedidee im Kopf – A Match Made in Heaven.
              </p>
              <p>
                Do it yourself sind seitdem zahlreiche eigene Songs entstanden. Doerty Hansen spielen zu sechst
                deutschen Indierock auf Wodka Ginger Ale mit Trompete, irgendwo zwischen Thees Uhlmann und Feine Sahne Fischfilet.
                Getreu dem Motto:
              </p>
              <p className="text-foreground font-medium">
                Daydrinking ist kein Hobby, es ist eine Lebenseinstellung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
