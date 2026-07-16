import { getDateStatus, tourDates } from "@/lib/tourDates";

const TourDates = () => {
  return (
    <section id="dates" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-display text-5xl md:text-7xl text-center mb-16">
          LIVE <span className="text-primary">DATES</span>
        </h2>

        <div className="space-y-0">
          {tourDates.map((show, index) => {
            const status = getDateStatus(show.date);
            return (
              <div
                key={index}
                className="group border-b border-border hover:bg-secondary/50 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-4">
                  <div className="w-full md:w-48">
                    <div className="text-display text-2xl md:text-3xl text-primary">
                      {show.date}
                    </div>
                    {show.time && (
                      <div className="text-muted-foreground text-sm uppercase tracking-wider">
                        {show.time}
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="text-display text-2xl md:text-3xl">{show.city}</div>
                    <div className="text-muted-foreground text-sm uppercase tracking-wider">
                      {show.venue}
                    </div>
                  </div>

                  <div>
                    {status === "past" ? (
                      show.link ? (
                        <a href={show.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-muted-foreground text-muted-foreground text-sm uppercase tracking-wider hover:bg-muted-foreground/20 transition-colors duration-300 inline-block">
                          war schön
                        </a>
                      ) : (
                        <span className="px-6 py-2 border border-muted-foreground text-muted-foreground text-sm uppercase tracking-wider inline-block cursor-default">
                          war schön
                        </span>
                      )
                    ) : status === "today" ? (
                      show.link ? (
                        <a href={show.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-primary text-primary text-sm uppercase tracking-wider hover:bg-primary hover:text-background transition-colors duration-300 inline-block">
                          ist schön
                        </a>
                      ) : (
                        <span className="px-6 py-2 border border-primary text-primary text-sm uppercase tracking-wider inline-block">
                          ist schön
                        </span>
                      )
                    ) : show.link ? (
                      <a href={show.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-foreground text-sm uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors duration-300 inline-block">
                        wird schön
                      </a>
                    ) : (
                      <span className="px-6 py-2 border border-foreground text-sm uppercase tracking-wider inline-block">
                        wird schön
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TourDates;
