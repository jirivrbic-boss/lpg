import { BRANCHES, CENIK } from "@/lib/branches";

export function Footer() {
  return (
    <footer
      id="kontakt"
      className="scroll-mt-20 border-t border-graphite-200 bg-graphite-50"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-graphite-900">LPG</p>
            <p className="mt-2 text-sm text-graphite-600">
              Kvalitní LPG s důrazem na spolehlivost, rychlou obsluhu a výhodné
              ceny.
            </p>
          </div>

          {BRANCHES.map((b) => (
            <div key={b.id}>
              <p className="font-medium text-graphite-900">{b.název}</p>
              <p className="mt-1 text-sm text-graphite-600">{b.adresa}</p>
              <a
                href={`tel:${b.telefon.replace(/\s/g, "")}`}
                className="mt-1 block text-sm text-graphite-600 hover:text-graphite-900 hover:underline"
              >
                {b.telefon}
              </a>
              <a
                href={b.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-graphite-600 hover:text-graphite-900 hover:underline"
                aria-label={`Facebook – ${b.název}`}
              >
                Facebook
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-graphite-200 pt-8">
          <p className="text-xs text-graphite-500">
            Ceny na webu ({CENIK.lpg} {CENIK.jednotka} LPG, {CENIK.benzín95}{" "}
            {CENIK.jednotka} Natural 95, {CENIK.nafta} {CENIK.jednotka} nafta)
            jsou {CENIK.poznamka}. Aktuální ceník ověřte na místě nebo
            telefonicky.
          </p>
          <p className="mt-2 text-xs text-graphite-500">
            © {new Date().getFullYear()} LPG. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
