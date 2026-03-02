import type { Metadata } from "next";
import { getBranch } from "@/lib/branches";
import { BranchDetail } from "@/components/BranchDetail";

export const metadata: Metadata = {
  title: "LPG Kadaň | Čerpací stanice – adresa, otevírací doba, ceník",
  description:
    "LPG čerpací stanice Kadaň. Průmyslová 1949. Denně 7:00–19:00. Kvalitní LPG, výhodné ceny, rychlá obsluha. Zavolejte nebo navigujte.",
  openGraph: {
    title: "LPG Kadaň | Čerpací stanice",
    description:
      "LPG čerpací stanice Kadaň. Průmyslová 1949. Denně 7:00–19:00. Kvalitní LPG, výhodné ceny.",
    locale: "cs_CZ",
  },
};

export default function KadanPage() {
  const branch = getBranch("kadan");
  return <BranchDetail branch={branch} showHero={true} heroPriority={true} />;
}
