import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { BRANCHES } from "@/lib/branches";

export default function HomePage() {
  return (
    <>
      <section
        className="relative flex min-h-[85vh] flex-col items-center justify-center bg-gradient-to-b from-graphite-50 to-white px-4 py-20 sm:min-h-[90vh] sm:py-28"
        aria-label="Úvod"
      >
        <h1 className="text-center text-4xl font-semibold tracking-tight text-graphite-900 sm:text-5xl md:text-6xl">
          LPG čerpací stanice
        </h1>
        <p className="mt-4 max-w-xl text-center text-lg text-graphite-600">
          Kvalitní LPG, výhodné ceny. Vyberte pobočku.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/kadan"
            className="flex min-w-[200px] items-center justify-center rounded-2xl bg-graphite-900 px-8 py-4 text-lg font-medium text-white shadow-lg transition hover:bg-graphite-800 focus:outline-none focus:ring-2 focus:ring-accent-lime focus:ring-offset-2"
          >
            LPG Kadaň
          </Link>
          <Link
            href="/kv"
            className="flex min-w-[200px] items-center justify-center rounded-2xl border-2 border-graphite-900 bg-white px-8 py-4 text-lg font-medium text-graphite-900 transition hover:bg-graphite-50 focus:outline-none focus:ring-2 focus:ring-accent-lime focus:ring-offset-2"
          >
            LPG Karlovy Vary
          </Link>
        </div>
        <div className="mt-16 flex flex-col items-center gap-2 text-graphite-500">
          <span className="text-sm">Vyberte pobočku níže</span>
          <ChevronDown size={24} aria-hidden />
        </div>
      </section>

      <section id="pobocky" className="scroll-mt-20 border-t border-graphite-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-graphite-900 sm:text-3xl">
            Vyberte pobočku
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-graphite-600">
            Klikněte na pobočku a zobrazí se vám adresa, otevírací doba, ceník a mapa.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {BRANCHES.map((branch) => (
              <Link
                key={branch.id}
                href={branch.id === "kadan" ? "/kadan" : "/kv"}
                className="group flex flex-col overflow-hidden rounded-2xl border border-graphite-200 bg-white shadow-sm transition hover:border-accent-lime hover:shadow-md"
              >
                <div className="aspect-[2/1] bg-graphite-100">
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-graphite-100 to-graphite-200 text-graphite-500">
                    {branch.název}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-medium text-graphite-900 group-hover:text-accent-lime">
                    {branch.název}
                  </h3>
                  <p className="mt-2 text-sm text-graphite-600">{branch.adresa}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-graphite-900">
                    Zobrazit detail →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
