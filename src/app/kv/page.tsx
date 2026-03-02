import type { Metadata } from "next";
import { getBranch } from "@/lib/branches";
import { BranchDetail } from "@/components/BranchDetail";

export const metadata: Metadata = {
  title: "LPG Karlovy Vary | Čerpací stanice – adresa, otevírací doba, ceník",
  description:
    "LPG čerpací stanice Karlovy Vary. Počerny 27. Po–Pá 7:00–18:00, So–Ne 8:00–17:00. Kvalitní LPG, výhodné ceny. Zavolejte nebo navigujte.",
  openGraph: {
    title: "LPG Karlovy Vary | Čerpací stanice",
    description:
      "LPG čerpací stanice Karlovy Vary. Počerny 27. Kvalitní LPG, výhodné ceny.",
    locale: "cs_CZ",
  },
};

export default function KvPage() {
  const branch = getBranch("kv");
  return <BranchDetail branch={branch} showHero={true} heroPriority={true} />;
}
