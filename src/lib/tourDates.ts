export type TourDate = {
  date: string;
  time?: string;
  city: string;
  venue: string;
  link?: string;
};

const monthMap: Record<string, number> = {
  JAN: 0,
  FEB: 1,
  MRZ: 2,
  MÄR: 2,
  APR: 3,
  MAI: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OKT: 9,
  NOV: 10,
  DEZ: 11,
};

export const tourDates: TourDate[] = [
  { date: "03. MAI 2026", city: "BURGHAUSEN", venue: "MUSIC FOR PEACE", link: "https://www.musicforpeace.de" },
  { date: "11. JUL 2026", time: "16:30", city: "ERLANGEN", venue: "Bismarckstraßenfest", link: "https://bismarckstrassenfest.de" },
  { date: "18. JUL 2026", time: "21:00", city: "ERLANGEN", venue: "Schiffstraßenfest", link: "https://www.instagram.com/schiffstrassenfesterlangen" },
  { date: "31. JUL 2026", time: "19:00", city: "NÜRNBERG", venue: "Bardentreffen Straßenbühne", link: "https://bardentreffen.nuernberg.de/festival-infos/strassenbuehne" },
];

export const parseTourDate = (dateStr: string): Date | null => {
  const match = dateStr.match(/^(\d{1,2})\.\s*([A-ZÄÖÜ]+)\s*(\d{4})$/i);
  if (!match) return null;

  const day = parseInt(match[1], 10);
  const month = monthMap[match[2].toUpperCase()];
  const year = parseInt(match[3], 10);

  if (month === undefined) return null;
  return new Date(year, month, day);
};

export type DateStatus = "past" | "today" | "future";

export const getDateStatus = (dateStr: string): DateStatus => {
  const showDate = parseTourDate(dateStr);
  if (!showDate) return "future";

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (showDate.getTime() === today.getTime()) return "today";
  if (showDate.getTime() < today.getTime()) return "past";
  return "future";
};

export const getNextTourDate = (dates: TourDate[] = tourDates): TourDate | undefined => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return dates.find((show) => {
    const showDate = parseTourDate(show.date);
    return showDate ? showDate.getTime() >= today.getTime() : false;
  });
};
