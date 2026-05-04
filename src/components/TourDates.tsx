const monthMap: Record<string, number> = {
  JAN: 0, FEB: 1, MRZ: 2, MÄR: 2, APR: 3, MAI: 4, JUN: 5,
  JUL: 6, AUG: 7, SEP: 8, OKT: 9, NOV: 10, DEZ: 11,
};

const parseDate = (dateStr: string): Date | null => {
  // Format: "12. DEZ 2025"
  const match = dateStr.match(/^(\d{1,2})\.\s*([A-ZÄÖÜ]+)\s*(\d{4})$/i);
  if (!match) return null;
  const day = parseInt(match[1], 10);
  const month = monthMap[match[2].toUpperCase()];
  const year = parseInt(match[3], 10);
  if (month === undefined) return null;
  return new Date(year, month, day);
};

type DateStatus = "past" | "today" | "future";

const getDateStatus = (dateStr: string): DateStatus => {
  const showDate = parseDate(dateStr);
  if (!showDate) return "future";
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (showDate.getTime() === today.getTime()) return "today";
  if (showDate.getTime() < today.getTime()) return "past";
  return "future";
};

const tourDates = [
  { date: "12. DEZ 2025", city: "ERLANGEN", venue: "Rock Up" },
  { date: "18. DEZ 2025", city: "NÜRNBERG", venue: "MUZ Club" },
  { date: "04. MAI 2026", city: "BURGHAUSEN", venue: "MUSIC FOR PEACE", link: "https://www.musicforpeace.de" },
  { date: "11. JUL 2026", city: "ERLANGEN", venue: "Bismarckstraßenfest", link: "https://bismarckstrassenfest.de/" }
];

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
                    {status === "past" ? (
                      <span className="text-muted-foreground text-sm uppercase tracking-wider">
                        war schön
                      </span>
                    ) : status === "today" ? (
                      show.link ? (
                        <a href={show.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 border border-primary text-primary text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors duration-300 inline-block">
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
