export interface TrendEcosystemItem {
  month: string;
  rawMonth: string;
  reach: number;
  formatted: string;
}

export interface PlatformMetrics {
  totalReach: number;
  totalReachFormatted: string;
  instagram: { reach: number; formatted: string };
  facebook: { reach: number; formatted: string };
  youtube: { reach: number; formatted: string };
  tv: { reach: number; formatted: string };
  ott: { reach: number; formatted: string };
  portal: { reach: number; formatted: string };
  tiktok: { reach: number; formatted: string };
}

export interface ChannelBarItem {
  channel: string;
  value: number;
  formatted: string;
  isLeader?: boolean;
}

export interface SocialMediaBarItem {
  group: string;
  value: number;
  formatted: string;
  isLeader?: boolean;
}

export interface MonthData {
  month: string;
  platforms: PlatformMetrics;
  tvReach: ChannelBarItem[];
  youtubeViews: ChannelBarItem[];
  socialMedia: {
    totalMention: number;
    competitors: SocialMediaBarItem[];
  };
}

export interface TrenGabunganRow {
  month: string;
  tvReach: number;
  youtube: number;
  facebook: number;
  instagram: number;
  xViews: number;
  totalDigital: number;
  gabungan: number;
}

export interface AudienceAgeBracket {
  range: string;
  pct: number;
  isTop?: boolean;
}

export interface AudienceProfile {
  platform: string;
  sourceLabel: string;
  gender: {
    male: number;
    female: number;
  };
  ageGroups: AudienceAgeBracket[];
  accentColor: string;
}

export interface EcosystemDataset {
  trendEcosystem: TrendEcosystemItem[];
  availableMonths: string[];
  performanceByMonth: Record<string, MonthData>;
  trenGabungan: {
    rows: TrenGabunganRow[];
    average: TrenGabunganRow;
  };
  profilPenonton: AudienceProfile[];
}

// Data default yang presisi 100% mengikuti spreadsheet RAW INEWS sheet Ecosystem dan referensi dashboard
export const DEFAULT_ECOSYSTEM_DATA: EcosystemDataset = {
  trendEcosystem: [
    { month: "Mei 26", rawMonth: "Mei", reach: 167175601, formatted: "167.2M" },
    { month: "Jun 26", rawMonth: "Juni", reach: 204706403, formatted: "204.7M" },
    { month: "Jul 26", rawMonth: "Juli", reach: 204996174, formatted: "205.0M" },
    { month: "Agu 26", rawMonth: "Agustus", reach: 193741104, formatted: "193.7M" },
    { month: "Sep 26", rawMonth: "September", reach: 205456866, formatted: "205.5M" },
    { month: "Okt 26", rawMonth: "Oktober", reach: 266375711, formatted: "266.4M" },
  ],
  availableMonths: ["Oktober 2026", "September 2026", "Agustus 2026", "Juli 2026", "Juni 2026", "Mei 2026"],
  performanceByMonth: {
    "Oktober 2026": {
      month: "Oktober 2026",
      platforms: {
        totalReach: 266375711,
        totalReachFormatted: "266.4M",
        instagram: { reach: 133339541, formatted: "133.3M" },
        facebook: { reach: 65168737, formatted: "65.2M" },
        youtube: { reach: 44459121, formatted: "44.5M" },
        tv: { reach: 11622056, formatted: "11.6M" },
        ott: { reach: 2919388, formatted: "2.9M" },
        portal: { reach: 8866869, formatted: "8.9M" },
        tiktok: { reach: 684137568, formatted: "684.1M" },
      },
      tvReach: [
        { channel: "INEWS", value: 11434601, formatted: "11.4M", isLeader: true },
        { channel: "TVONE", value: 9915133, formatted: "9.9M" },
        { channel: "METRO", value: 7333534, formatted: "7.3M" },
        { channel: "KOMPASTV", value: 6732122, formatted: "6.7M" },
        { channel: "CNN INDONESIA", value: 5068456, formatted: "5.1M" },
        { channel: "TVRI1", value: 4040373, formatted: "4.0M" },
        { channel: "GARUDA TV", value: 3244957, formatted: "3.2M" },
        { channel: "SINPO", value: 3222626, formatted: "3.2M" },
        { channel: "NUSANTARATV", value: 3054021, formatted: "3.1M" },
      ],
      youtubeViews: [
        { channel: "IMG", value: 242372094, formatted: "242.4M", isLeader: true },
        { channel: "KompasTV", value: 176065456, formatted: "176.1M" },
        { channel: "TV One", value: 128350139, formatted: "128.4M" },
        { channel: "Emtek Group", value: 45366554, formatted: "45.4M" },
        { channel: "MetroTV", value: 39563519, formatted: "39.6M" },
        { channel: "Nusantara TV", value: 27356671, formatted: "27.4M" },
        { channel: "CNN Indonesia", value: 12519308, formatted: "12.5M" },
        { channel: "BeritaSatu", value: 9789111, formatted: "9.8M" },
        { channel: "GARUDA TV", value: 5657161, formatted: "5.7M" },
        { channel: "Sin Po tv", value: 350097, formatted: "350K" },
        { channel: "TVRI Nasional", value: 336868, formatted: "337K" },
      ],
      socialMedia: {
        totalMention: 498,
        competitors: [
          { group: "IMG", value: 498, formatted: "498", isLeader: true },
          { group: "KOMPAS GROUP", value: 319, formatted: "319" },
          { group: "METRO GROUP", value: 232, formatted: "232" },
          { group: "VIVA GROUP", value: 61, formatted: "61" },
        ],
      },
    },
    "September 2026": {
      month: "September 2026",
      platforms: {
        totalReach: 205456866,
        totalReachFormatted: "205.5M",
        instagram: { reach: 77937073, formatted: "77.9M" },
        facebook: { reach: 59762515, formatted: "59.8M" },
        youtube: { reach: 39757694, formatted: "39.8M" },
        tv: { reach: 11625065, formatted: "11.6M" },
        ott: { reach: 3641719, formatted: "3.6M" },
        portal: { reach: 12732800, formatted: "12.7M" },
        tiktok: { reach: 654590770, formatted: "654.6M" },
      },
      tvReach: [
        { channel: "INEWS", value: 11464527, formatted: "11.5M", isLeader: true },
        { channel: "TVONE", value: 10037978, formatted: "10.0M" },
        { channel: "METRO", value: 7553187, formatted: "7.6M" },
        { channel: "KOMPASTV", value: 6904041, formatted: "6.9M" },
        { channel: "CNN INDONESIA", value: 5419707, formatted: "5.4M" },
        { channel: "TVRI1", value: 4445883, formatted: "4.4M" },
        { channel: "GARUDA TV", value: 3296646, formatted: "3.3M" },
        { channel: "SINPO", value: 3088527, formatted: "3.1M" },
        { channel: "NUSANTARATV", value: 3064591, formatted: "3.1M" },
      ],
      youtubeViews: [
        { channel: "IMG", value: 211606169, formatted: "211.6M", isLeader: true },
        { channel: "Tribun", value: 138759034, formatted: "138.8M" },
        { channel: "TV One", value: 81661390, formatted: "81.7M" },
        { channel: "KompasTV", value: 81213457, formatted: "81.2M" },
        { channel: "MetroTV", value: 51512509, formatted: "51.5M" },
        { channel: "Nusantara TV", value: 22901161, formatted: "22.9M" },
        { channel: "CNN Indonesia", value: 14790823, formatted: "14.8M" },
        { channel: "Tempodotco", value: 13005736, formatted: "13.0M" },
        { channel: "BeritaSatu", value: 12663638, formatted: "12.7M" },
      ],
      socialMedia: {
        totalMention: 359,
        competitors: [
          { group: "IMG", value: 359, formatted: "359", isLeader: true },
          { group: "KOMPAS GROUP", value: 229, formatted: "229" },
          { group: "METRO GROUP", value: 180, formatted: "180" },
          { group: "VIVA GROUP", value: 29, formatted: "29" },
        ],
      },
    },
    "Agustus 2026": {
      month: "Agustus 2026",
      platforms: {
        totalReach: 193741104,
        totalReachFormatted: "193.7M",
        instagram: { reach: 58651008, formatted: "58.7M" },
        facebook: { reach: 64972187, formatted: "65.0M" },
        youtube: { reach: 42096097, formatted: "42.1M" },
        tv: { reach: 11068388, formatted: "11.1M" },
        ott: { reach: 4512037, formatted: "4.5M" },
        portal: { reach: 12441388, formatted: "12.4M" },
        tiktok: { reach: 760430403, formatted: "760.4M" },
      },
      tvReach: [
        { channel: "INEWS", value: 10874547, formatted: "10.9M", isLeader: true },
        { channel: "TVONE", value: 9954294, formatted: "10.0M" },
        { channel: "KOMPASTV", value: 7129830, formatted: "7.1M" },
        { channel: "METRO", value: 6988053, formatted: "7.0M" },
        { channel: "CNN INDONESIA", value: 5145169, formatted: "5.1M" },
        { channel: "TVRI1", value: 4540140, formatted: "4.5M" },
        { channel: "GARUDA TV", value: 3253941, formatted: "3.3M" },
        { channel: "SINPO", value: 2923234, formatted: "2.9M" },
        { channel: "NUSANTARATV", value: 2891065, formatted: "2.9M" },
      ],
      youtubeViews: [
        { channel: "KompasTV", value: 187999170, formatted: "188.0M" },
        { channel: "Tribun", value: 167941203, formatted: "167.9M" },
        { channel: "IMG", value: 132013612, formatted: "132.0M", isLeader: true },
        { channel: "TV One", value: 56120278, formatted: "56.1M" },
        { channel: "MetroTV", value: 42626922, formatted: "42.6M" },
        { channel: "Nusantara TV", value: 25478256, formatted: "25.5M" },
        { channel: "Tempodotco", value: 15887528, formatted: "15.9M" },
        { channel: "CNN Indonesia", value: 14105333, formatted: "14.1M" },
        { channel: "BeritaSatu", value: 9170709, formatted: "9.2M" },
      ],
      socialMedia: {
        totalMention: 336,
        competitors: [
          { group: "IMG", value: 336, formatted: "336", isLeader: true },
          { group: "KOMPAS GROUP", value: 261, formatted: "261" },
          { group: "METRO GROUP", value: 207, formatted: "207" },
          { group: "VIVA GROUP", value: 24, formatted: "24" },
        ],
      },
    },
    "Juli 2026": {
      month: "Juli 2026",
      platforms: {
        totalReach: 204996174,
        totalReachFormatted: "205.0M",
        instagram: { reach: 58681952, formatted: "58.7M" },
        facebook: { reach: 71268292, formatted: "71.3M" },
        youtube: { reach: 44957854, formatted: "45.0M" },
        tv: { reach: 11721912, formatted: "11.7M" },
        ott: { reach: 6577532, formatted: "6.6M" },
        portal: { reach: 11788633, formatted: "11.8M" },
        tiktok: { reach: 606155510, formatted: "606.2M" },
      },
      tvReach: [
        { channel: "INEWS", value: 11525048, formatted: "11.5M", isLeader: true },
        { channel: "TVONE", value: 10220230, formatted: "10.2M" },
        { channel: "TVRI1", value: 8981567, formatted: "9.0M" },
        { channel: "KOMPASTV", value: 7544068, formatted: "7.5M" },
        { channel: "METRO", value: 7030425, formatted: "7.0M" },
        { channel: "CNN INDONESIA", value: 5393363, formatted: "5.4M" },
        { channel: "GARUDA TV", value: 3474985, formatted: "3.5M" },
        { channel: "SINPO", value: 3103857, formatted: "3.1M" },
        { channel: "NUSANTARATV", value: 3071977, formatted: "3.1M" },
      ],
      youtubeViews: [
        { channel: "IMG", value: 120760260, formatted: "120.8M", isLeader: true },
        { channel: "Kompas", value: 96925120, formatted: "96.9M" },
        { channel: "Tribunnews", value: 90075613, formatted: "90.1M" },
        { channel: "tvOneNews", value: 44087172, formatted: "44.1M" },
        { channel: "METRO TV", value: 27059838, formatted: "27.1M" },
        { channel: "Nusantara TV", value: 13468326, formatted: "13.5M" },
        { channel: "CNN Indonesia", value: 8682069, formatted: "8.7M" },
        { channel: "Tempodotco", value: 7335621, formatted: "7.3M" },
        { channel: "Liputan6", value: 6857783, formatted: "6.9M" },
      ],
      socialMedia: {
        totalMention: 265,
        competitors: [
          { group: "IMG", value: 265, formatted: "265", isLeader: true },
          { group: "KOMPASTV", value: 200, formatted: "200" },
          { group: "METRO", value: 120, formatted: "120" },
          { group: "VIVA", value: 18, formatted: "18" },
        ],
      },
    },
    "Juni 2026": {
      month: "Juni 2026",
      platforms: {
        totalReach: 204706403,
        totalReachFormatted: "204.7M",
        instagram: { reach: 73221108, formatted: "73.2M" },
        facebook: { reach: 55449117, formatted: "55.4M" },
        youtube: { reach: 42070986, formatted: "42.1M" },
        tv: { reach: 13076126, formatted: "13.1M" },
        ott: { reach: 8321552, formatted: "8.3M" },
        portal: { reach: 12567514, formatted: "12.6M" },
        tiktok: { reach: 834775077, formatted: "834.8M" },
      },
      tvReach: [
        { channel: "INEWS", value: 12873116, formatted: "12.9M", isLeader: true },
        { channel: "TVONE", value: 10533717, formatted: "10.5M" },
        { channel: "KOMPASTV", value: 7772164, formatted: "7.8M" },
        { channel: "METRO", value: 7271529, formatted: "7.3M" },
        { channel: "CNN INDONESIA", value: 5077521, formatted: "5.1M" },
        { channel: "GARUDA TV", value: 4207462, formatted: "4.2M" },
        { channel: "TVRI1", value: 3722018, formatted: "3.7M" },
        { channel: "SINPO", value: 3029674, formatted: "3.0M" },
        { channel: "NUSANTARATV", value: 2932197, formatted: "2.9M" },
      ],
      youtubeViews: [
        { channel: "Tribunnews", value: 347366660, formatted: "347.4M" },
        { channel: "IMG", value: 125388582, formatted: "125.4M", isLeader: true },
        { channel: "KOMPASTV", value: 73472549, formatted: "73.5M" },
        { channel: "tvOneNews", value: 55238496, formatted: "55.2M" },
        { channel: "METRO TV", value: 49965214, formatted: "50.0M" },
        { channel: "Nusantara TV", value: 24772244, formatted: "24.8M" },
        { channel: "CNN Indonesia", value: 20277014, formatted: "20.3M" },
        { channel: "BeritaSatu", value: 12852943, formatted: "12.9M" },
        { channel: "Tempodotco", value: 11516412, formatted: "11.5M" },
      ],
      socialMedia: {
        totalMention: 310,
        competitors: [
          { group: "IMG", value: 310, formatted: "310", isLeader: true },
          { group: "KOMPAS GROUP", value: 280, formatted: "280" },
          { group: "METRO GROUP", value: 150, formatted: "150" },
          { group: "VIVA GROUP", value: 20, formatted: "20" },
        ],
      },
    },
    "Mei 2026": {
      month: "Mei 2026",
      platforms: {
        totalReach: 167175601,
        totalReachFormatted: "167.2M",
        instagram: { reach: 52791062, formatted: "52.8M" },
        facebook: { reach: 46967766, formatted: "47.0M" },
        youtube: { reach: 40684521, formatted: "40.7M" },
        tv: { reach: 11861601, formatted: "11.9M" },
        ott: { reach: 1048489, formatted: "1.0M" },
        portal: { reach: 13822162, formatted: "13.8M" },
        tiktok: { reach: 520000000, formatted: "520.0M" },
      },
      tvReach: [
        { channel: "INEWS", value: 11678943, formatted: "11.7M", isLeader: true },
        { channel: "TVONE", value: 10557842, formatted: "10.6M" },
        { channel: "KOMPASTV", value: 7289824, formatted: "7.3M" },
        { channel: "METRO", value: 7212608, formatted: "7.2M" },
        { channel: "CNN INDONESIA", value: 5038197, formatted: "5.0M" },
        { channel: "TVRI1", value: 3801867, formatted: "3.8M" },
        { channel: "GARUDA TV", value: 3412263, formatted: "3.4M" },
        { channel: "SINPO", value: 3064777, formatted: "3.1M" },
        { channel: "NUSANTARATV", value: 3039019, formatted: "3.0M" },
      ],
      youtubeViews: [
        { channel: "Tribunnews", value: 410597261, formatted: "410.6M" },
        { channel: "IMG", value: 102641003, formatted: "102.6M", isLeader: true },
        { channel: "KOMPASTV", value: 52559228, formatted: "52.6M" },
        { channel: "tvOneNews", value: 44937566, formatted: "44.9M" },
        { channel: "METRO TV", value: 44690230, formatted: "44.7M" },
        { channel: "CNN Indonesia", value: 17949970, formatted: "17.9M" },
        { channel: "Nusantara TV", value: 17908855, formatted: "17.9M" },
        { channel: "Tempodotco", value: 12123970, formatted: "12.1M" },
        { channel: "BeritaSatu", value: 9431135, formatted: "9.4M" },
      ],
      socialMedia: {
        totalMention: 376,
        competitors: [
          { group: "IMG", value: 376, formatted: "376", isLeader: true },
          { group: "KOMPASTV", value: 403, formatted: "403" },
          { group: "METRO", value: 173, formatted: "173" },
          { group: "VIVA", value: 21, formatted: "21" },
        ],
      },
    },
  },
  trenGabungan: {
    rows: [
      { month: "Januari", tvReach: 12.6, youtube: 115.6, facebook: 102.8, instagram: 53.3, xViews: 0.425, totalDigital: 272.1, gabungan: 284.8 },
      { month: "Februari", tvReach: 12.6, youtube: 117.3, facebook: 99.4, instagram: 59.6, xViews: 0.918, totalDigital: 277.2, gabungan: 289.8 },
      { month: "Maret", tvReach: 13.6, youtube: 287.1, facebook: 106.1, instagram: 77.0, xViews: 2.4, totalDigital: 472.6, gabungan: 486.2 },
      { month: "April", tvReach: 12.8, youtube: 205.4, facebook: 69.2, instagram: 67.2, xViews: 0.703, totalDigital: 342.5, gabungan: 355.3 },
      { month: "Mei", tvReach: 11.7, youtube: 151.8, facebook: 75.4, instagram: 67.1, xViews: 0.347, totalDigital: 294.6, gabungan: 306.3 },
      { month: "Juni", tvReach: 12.2, youtube: 151.8, facebook: 79.2, instagram: 98.5, xViews: 0.872, totalDigital: 330.3, gabungan: 342.5 },
      { month: "Juli", tvReach: 11.5, youtube: 149.9, facebook: 83.8, instagram: 101.8, xViews: 1.5, totalDigital: 337.1, gabungan: 348.6 },
      { month: "Agustus", tvReach: 10.9, youtube: 139.3, facebook: 83.8, instagram: 92.8, xViews: 0.457, totalDigital: 316.4, gabungan: 327.3 },
      { month: "September", tvReach: 11.5, youtube: 241.0, facebook: 85.4, instagram: 111.3, xViews: 0.630, totalDigital: 438.4, gabungan: 449.8 },
      { month: "Oktober", tvReach: 11.4, youtube: 264.3, facebook: 93.1, instagram: 190.5, xViews: 1.2, totalDigital: 549.1, gabungan: 560.5 },
    ],
    average: {
      month: "RATA-RATA JAN - OKT 2026",
      tvReach: 12.1,
      youtube: 182.4,
      facebook: 87.8,
      instagram: 91.9,
      xViews: 0.941,
      totalDigital: 363.0,
      gabungan: 375.1,
    },
  },
  profilPenonton: [
    {
      platform: "TV",
      sourceLabel: "INEWS · NIELSEN",
      accentColor: "#e0334f",
      gender: { male: 54.1, female: 45.9 },
      ageGroups: [
        { range: "5-14", pct: 7.6 },
        { range: "15-24", pct: 10.1 },
        { range: "25-34", pct: 7.6 },
        { range: "35-44", pct: 11.4 },
        { range: "45-54", pct: 22.1, isTop: true },
        { range: "55-59", pct: 15.3, isTop: true },
        { range: "60+", pct: 26.0, isTop: true },
      ],
    },
    {
      platform: "YOUTUBE",
      sourceLabel: "UNIT INEWS",
      accentColor: "#ff0000",
      gender: { male: 76.5, female: 23.5 },
      ageGroups: [
        { range: "13-17", pct: 1.2 },
        { range: "18-24", pct: 5.8 },
        { range: "25-34", pct: 28.8, isTop: true },
        { range: "35-44", pct: 23.9, isTop: true },
        { range: "45-54", pct: 18.6, isTop: true },
        { range: "55-64", pct: 14.0 },
        { range: "65+", pct: 7.8 },
      ],
    },
    {
      platform: "FACEBOOK",
      sourceLabel: "UNIT INEWS",
      accentColor: "#1877f2",
      gender: { male: 65.4, female: 34.6 },
      ageGroups: [
        { range: "13-17", pct: 0.0 },
        { range: "18-24", pct: 8.0 },
        { range: "25-34", pct: 34.3, isTop: true },
        { range: "35-44", pct: 32.0, isTop: true },
        { range: "45-54", pct: 16.7, isTop: true },
        { range: "55-64", pct: 6.1 },
        { range: "65+", pct: 3.1 },
      ],
    },
    {
      platform: "INSTAGRAM",
      sourceLabel: "UNIT INEWS",
      accentColor: "#e1306c",
      gender: { male: 65.2, female: 34.8 },
      ageGroups: [
        { range: "13-17", pct: 0.0 },
        { range: "18-24", pct: 7.1 },
        { range: "25-34", pct: 34.4, isTop: true },
        { range: "35-44", pct: 33.7, isTop: true },
        { range: "45-54", pct: 16.3, isTop: true },
        { range: "55-64", pct: 5.8 },
        { range: "65+", pct: 2.7 },
      ],
    },
    {
      platform: "X",
      sourceLabel: "UNIT INEWS",
      accentColor: "#a1a1aa",
      gender: { male: 68.9, female: 31.1 },
      ageGroups: [
        { range: "13-17", pct: 1.1 },
        { range: "18-24", pct: 17.2, isTop: true },
        { range: "25-34", pct: 41.5, isTop: true },
        { range: "35-44", pct: 20.6, isTop: true },
        { range: "45-54", pct: 10.4 },
        { range: "55-64", pct: 5.8 },
        { range: "65+", pct: 3.5 },
      ],
    },
    {
      platform: "TIKTOK",
      sourceLabel: "UNIT INEWS · TIDAK MASUK REACH",
      accentColor: "#22c55e",
      gender: { male: 55.2, female: 44.8 },
      ageGroups: [
        { range: "13-17", pct: 0.0 },
        { range: "18-24", pct: 21.5, isTop: true },
        { range: "25-34", pct: 41.4, isTop: true },
        { range: "35-44", pct: 20.5, isTop: true },
        { range: "45-54", pct: 10.4 },
        { range: "55-64", pct: 6.2 },
        { range: "65+", pct: 0.0 },
      ],
    },
  ],
};

function parseNum(val: unknown): number {
  if (typeof val === "number") return val;
  if (!val) return 0;
  const s = String(val).replace(/\./g, "").replace(/,/g, ".").trim();
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

function formatReach(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

export function parseEcosystemRows(rows: unknown[][]): EcosystemDataset {
  const dataset: EcosystemDataset = JSON.parse(JSON.stringify(DEFAULT_ECOSYSTEM_DATA));
  if (!rows || rows.length < 5) return dataset;

  try {
    // 1. Trend Ecosystem (Cols A & B, Rows 4-9)
    const trendItems: TrendEcosystemItem[] = [];
    for (let r = 3; r <= 8; r++) {
      const row = rows[r];
      if (row && row[0] && row[1]) {
        const rawMonth = String(row[0]).trim();
        const val = parseNum(row[1]);
        const short = rawMonth.slice(0, 3);
        trendItems.push({
          month: `${short} 26`,
          rawMonth,
          reach: val,
          formatted: formatReach(val),
        });
      }
    }
    if (trendItems.length > 0) {
      dataset.trendEcosystem = trendItems;
    }

    // 2. By Platform (Cols D-K, Rows 4-9)
    const monthMap: Record<string, string> = {
      May: "Mei 2026",
      Mei: "Mei 2026",
      June: "Juni 2026",
      Juni: "Juni 2026",
      July: "Juli 2026",
      Juli: "Juli 2026",
      Agustus: "Agustus 2026",
      August: "Agustus 2026",
      September: "September 2026",
      Oktober: "Oktober 2026",
      October: "Oktober 2026",
    };

    for (let r = 3; r <= 8; r++) {
      const row = rows[r];
      if (row && row[3]) {
        const rawM = String(row[3]).trim();
        const fullKey = monthMap[rawM] || `${rawM} 2026`;
        const yt = parseNum(row[4]);
        const ig = parseNum(row[5]);
        const fb = parseNum(row[6]);
        const portal = parseNum(row[7]);
        const tv = parseNum(row[8]);
        const ott = parseNum(row[9]);
        const tiktok = parseNum(row[10]);

        const totalReach = dataset.trendEcosystem.find((t) => t.rawMonth.toLowerCase() === rawM.toLowerCase())?.reach || (yt + ig + fb + tv);

        if (!dataset.performanceByMonth[fullKey]) {
          dataset.performanceByMonth[fullKey] = JSON.parse(JSON.stringify(DEFAULT_ECOSYSTEM_DATA.performanceByMonth["Oktober 2026"]));
        }

        dataset.performanceByMonth[fullKey].platforms = {
          totalReach,
          totalReachFormatted: formatReach(totalReach),
          instagram: { reach: ig, formatted: formatReach(ig) },
          facebook: { reach: fb, formatted: formatReach(fb) },
          youtube: { reach: yt, formatted: formatReach(yt) },
          tv: { reach: tv, formatted: formatReach(tv) },
          ott: { reach: ott, formatted: formatReach(ott) },
          portal: { reach: portal, formatted: formatReach(portal) },
          tiktok: { reach: tiktok, formatted: formatReach(tiktok) },
        };
      }
    }
  } catch (e) {
    console.error("Error parsing Ecosystem rows, using fallback dataset:", e);
  }

  return dataset;
}
