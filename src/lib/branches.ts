/**
 * Jediný zdroj pravdy pro data poboček a ceník.
 * Změny adres, kontaktů, cen a obrázků provádějte zde.
 */

export type BranchId = "kadan" | "kv";

export type FuelId = "lpg";

/** Sdílený ceník – orientační hodnoty, mění se na jednom místě */
export const CENIK = {
  /** Cena LPG za litr (orientační) */
  lpg: 16.9,
  jednotka: "Kč/l",
  poznamka: "orientační / bude upřesněno",
} as const;

export interface Fuel {
  id: FuelId;
  název: string;
  /** zda se má zobrazit orientační cena z CENIK */
  máCenu: boolean;
}

export interface OperatorInfo {
  ico: string;
  dic: string;
  sídlo: string;
  statutárníOrgán: string;
}

export interface Branch {
  id: BranchId;
  název: string;
  adresa: string;
  telefon: string;
  email: string;
  /** Řádky otevírací doby (např. ["Denně 7:00–19:00"] nebo ["Po–Pá 7:00–18:00", "So–Ne 8:00–17:00"]) */
  otevíracíDoba: string[];
  facebookUrl: string;
  /** URL pro iframe embed mapy (Google Maps nebo jiný) */
  mapEmbedUrl: string;
  /** Odkaz na navigaci (Google Maps directions) */
  mapDirectionsUrl: string;
  /** Relativní cesta k hero obrázku (v public/) – původní fotky */
  heroImage: string;
  /** AI render stanice – hlavní hero vizuál pro detail pobočky a rozcestník */
  heroAiImage: string;
  /** Paliva dostupná na pobočce – pro Karlovy Vary pouze LPG */
  fuels: Fuel[];
  /** Popis služeb / shopu pro danou pobočku */
  services: string[];
  /** Nabízené velikosti PB lahví (např. ["2 kg", "5 kg", ...]) */
  pbBottles: string[];
  /** zda má pobočka plnírnu PB lahví (true jen pro Kadaň) */
  hasPbFilling: boolean;
  /** Popis obchodu / shopu (např. smíšené zboží, bez novin) */
  shopDescription: string;
  /** Relativní cesty k obrázkům galerie (v public/) */
  galleryImages: string[];
}

/** Cesty k fotek: public/fotky/kadan a public/fotky/karlovy-vary */
const FOTKY = {
  kadan: "/fotky/kadan",
  kv: "/fotky/karlovy-vary",
} as const;

/** AI rendery stanic – hlavní vizuální prvky. Pro výměnu změňte cestu zde. */
export const HERO_AI = {
  kadan: `${FOTKY.kadan}/kadan ai.png`,
  kv: `${FOTKY.kv}/karlovy vary ai.png`,
} as const;

/** Provozovatel – placeholder hodnoty, doplní se později */
export const OPERATOR_INFO: OperatorInfo = {
  ico: "doplní se",
  dic: "doplní se",
  sídlo: "doplní se",
  statutárníOrgán: "doplní se",
};

export const BRANCHES: Branch[] = [
  {
    id: "kadan",
    název: "LPG Kadaň",
    adresa: "Průmyslová 1949, Kadaň, 432 01",
    telefon: "734 100 261",
    email: "jamalaman@seznam.cz",
    otevíracíDoba: ["Denně 7:00–19:00"],
    facebookUrl: "https://www.facebook.com/profile.php?id=100063605539987&sk=photos",
    mapEmbedUrl: "https://www.google.com/maps?q=Pr%C5%AFmyslov%C3%A1+1949,+432+01+Kada%C5%88&output=embed",
    mapDirectionsUrl: "https://www.google.com/maps/dir//Pr%C5%AFmyslov%C3%A1+1949,+432+01+Kada%C5%88",
    heroImage: `${FOTKY.kadan}/305629590_507657341364446_8761336370728853962_n.jpg`,
    heroAiImage: HERO_AI.kadan,
    fuels: [
      {
        id: "lpg",
        název: "LPG",
        máCenu: true,
      },
    ],
    services: [
      "Prodej LPG",
      "Prodej PB lahví",
      "Plnění PB lahví",
    ],
    pbBottles: ["2 kg", "5 kg", "10 kg", "33 kg"],
    hasPbFilling: true,
    shopDescription: "Smíšené zboží pro řidiče i okolí.",
    galleryImages: [
      `${FOTKY.kadan}/305629590_507657341364446_8761336370728853962_n.jpg`,
      `${FOTKY.kadan}/481247527_1196312465832260_1900453088293387025_n.jpg`,
      `${FOTKY.kadan}/491498062_1238130624983777_4818227226374701069_n.jpg`,
    ],
  },
  {
    id: "kv",
    název: "LPG Karlovy Vary",
    adresa: "Počerny 27, Karlovy Vary, 360 17",
    telefon: "734 100 261",
    email: "jamalaman@seznam.cz",
    otevíracíDoba: ["Po–Pá 7:00–18:00", "So–Ne 8:00–17:00"],
    facebookUrl: "https://www.facebook.com/profile.php?id=100064087690147&locale=cs_CZ",
    mapEmbedUrl: "https://www.google.com/maps?q=Po%C4%8Derny+27,+360+17+Karlovy+Vary&output=embed",
    mapDirectionsUrl: "https://www.google.com/maps/dir//Po%C4%8Derny+27,+360+17+Karlovy+Vary",
    heroImage: `${FOTKY.kv}/104170245_101342534966452_6904228271707863341_n.jpg`,
    heroAiImage: HERO_AI.kv,
    fuels: [
      {
        id: "lpg",
        název: "LPG",
        máCenu: true,
      },
    ],
    services: [
      "Prodej LPG",
      "Prodej PB lahví",
    ],
    pbBottles: ["2 kg", "5 kg", "10 kg", "33 kg"],
    hasPbFilling: false,
    shopDescription: "Smíšené zboží – bez prodeje novin.",
    galleryImages: [
      `${FOTKY.kv}/104170245_101342534966452_6904228271707863341_n.jpg`,
      `${FOTKY.kv}/104195470_101351054965600_1301063408854676798_n.jpg`,
      `${FOTKY.kv}/104299423_101342191633153_4480440517499395975_n.jpg`,
      `${FOTKY.kv}/104330513_101351124965593_5185369294918361133_n.jpg`,
      `${FOTKY.kv}/104393815_101342024966503_7161489699401520667_n.jpg`,
    ],
  },
];

export function getBranch(id: BranchId): Branch {
  const b = BRANCHES.find((x) => x.id === id);
  if (!b) throw new Error(`Pobočka ${id} nenalezena`);
  return b;
}

export function getBranchOrNull(id: BranchId | null): Branch | null {
  if (!id) return null;
  return BRANCHES.find((x) => x.id === id) ?? null;
}
