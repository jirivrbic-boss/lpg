/**
 * Cesty k 3D ikonám v public/3d/.
 * Pro výměnu ikony nahraďte soubor ve složce public/3d/ stejným názvem,
 * nebo změňte zde odpovídající path.
 */

const BASE = "/3d";

function path(name: string): string {
  return `${BASE}/${encodeURIComponent(name)}`;
}

export const ICONS_3D = {
  /** Ceník / služby */
  lpgStojan: path("lpg stojan.png"),
  /** LPG informace (úvodní popis) */
  cerpaciPistole: path("cerpaci pistole.png"),
  /** Adresa */
  lokalizace: path("lokalizacni ikona.png"),
  /** Otevírací doba */
  cas: path("cas ikona.png"),
  /** Telefon */
  telefon: path("telefon.png"),
  /** E-mail */
  email: path("obalka email ikona.png"),
  /** Mapa / navigace */
  mapa: path("mapa.png"),
  /** PB lahve */
  pbLahev: path("pb lahev.png"),
  /** Dekorace hero / CTA */
  auto: path("auto.png"),
  /** Hero pozadí */
  heroPozadi: path("hero pozadí 1920x1080.png"),
} as const;
