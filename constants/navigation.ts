export const navigation = [
  { href: "/ecosystem", label: "ECOSYSTEM", description: "Jangkauan ekosistem media iNews" },
  { href: "/data-tv", label: "DATA TV", description: "Performa channel dan program TV" },
  { href: "/content", label: "CONTENT", description: "Topik lintas platform dan kompetitor" },
  { href: "#revenue", label: "REVENUE", description: "Pendapatan TV & Digital" },
  { href: "#pola", label: "POLA", description: "Pola acara & RKAT" },
  { href: "#promo", label: "PROMO", description: "Durasi dan program promo" },
  { href: "#library", label: "LIBRARY", description: "Master On Air & Master Shoot" },
] as const;

export const channels = ["INEWS", "TVONE", "KOMPASTV", "METRO", "GTV", "MDTV", "ANTV", "RCTI", "TRANS", "TRANS7", "IVM", "SCTV", "MNCTV", "RTV", "MENTARI", "MOJI", "SINPO", "GARUDATV", "CNN INDONESIA", "NUSANTARATV"] as const;
export type Channel = (typeof channels)[number];

export const channelLabels: Record<Channel, string> = {
  INEWS: "iNews",
  TVONE: "tvOne",
  KOMPASTV: "Kompas TV",
  METRO: "Metro TV",
  GTV: "GTV",
  ANTV: "ANTV",
  RTV: "RTV",
  MENTARI: "Mentari TV",
  MOJI: "Moji",
  SINPO: "Sinpo TV",
  GARUDATV: "Garuda TV",
  "CNN INDONESIA": "CNN Indonesia",
  NUSANTARATV: "Nusantara TV",
  MDTV: "MDTV",
  RCTI: "RCTI",
  TRANS: "TRANS",
  TRANS7: "TRANS7",
  IVM: "IVM",
  SCTV: "SCTV",
  MNCTV: "MNCTV",

};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthLabels = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
