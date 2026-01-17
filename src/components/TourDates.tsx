const tourDates = [
  { date: "12. DEZ 2025", city: "ERLANGEN", venue: "Rock Up", status: "sold out" },
  { date: "18. DEZ 2025", city: "NÜRNBERG", venue: "MUZ Club", status: "sold out" },
  /*{ date: "07. FEB 2026", city: "ERLANGEN", venue: "E-Werk", status: "upcoming" }*/
];

const TourDates = () => {
  return (
    <section id="dates" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-display text-5xl md:text-7xl text-center mb-16">
          LIVE <span className="text-primary">DATES</span>
        </h2>
        
        <div className="space-y-0">
          {tourDates.map((show, index) => (
            <div 
              key={index}
              className="group border-b border-border hover:bg-secondary/50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-4">
                {/* Date */}
                <div className="text-display text-2xl md:text-3xl text-primary w-full md:w-48">
                  {show.date}
                </div>
                
                {/* City & Venue */}
                <div className="flex-1">
                  <div className="text-display text-2xl md:text-3xl">{show.city}</div>
                  <div className="text-muted-foreground text-sm uppercase tracking-wider">
                    {show.venue}
                  </div>
                </div>
                
                {/* Status/Button */}
                <div>
                  {show.status === "sold out" ? (
                    <span className="text-muted-foreground text-sm uppercase tracking-wider">
                      war schön
                    </span>
                  ) : (
                    <button className="px-6 py-2 border border-foreground text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors duration-300">
                      wird schön
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourDates;
