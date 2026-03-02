"use client";

import Image from "next/image";
import Link from "next/link";
import { CENIK, type Branch } from "@/lib/branches";
import { ICONS_3D } from "@/lib/icons";
import { Icon3d } from "./Icon3d";

const SPOLECNY_POPIS =
  "Kvalitní LPG s důrazem na spolehlivost, rychlou obsluhu a výhodné ceny. Férový přístup, čisté zázemí a snadná dostupnost.";

const ICON_SIZE = 96;
const ICON_SIZE_SM = 88;

interface BranchDetailProps {
  branch: Branch;
  showHero?: boolean;
  heroPriority?: boolean;
}

export function BranchDetail({
  branch,
  showHero = true,
  heroPriority = false,
}: BranchDetailProps) {
  return (
    <article
      id="branch-detail"
      className="scroll-mt-20"
      aria-labelledby={`branch-heading-${branch.id}`}
    >
      {showHero && (
        <section className="relative aspect-[21/9] w-full overflow-hidden bg-graphite-200 sm:aspect-[3/1]">
          <Image
            src={branch.heroImage}
            alt={`Čerpací stanice ${branch.název}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority={heroPriority}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent && !parent.querySelector(".hero-placeholder")) {
                const div = document.createElement("div");
                div.className =
                  "hero-placeholder absolute inset-0 bg-gradient-to-br from-graphite-700 to-graphite-900";
                parent.appendChild(div);
              }
            }}
          />
          <div className="absolute inset-0 bg-graphite-900/20" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 sm:p-8">
            <h2
              id={`branch-heading-${branch.id}`}
              className="text-3xl font-semibold tracking-tight text-white drop-shadow sm:text-4xl"
            >
              {branch.název}
            </h2>
          </div>
        </section>
      )}

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="shrink-0">
            <Icon3d
              src={ICONS_3D.cerpaciPistole}
              alt=""
              size={ICON_SIZE}
            />
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-graphite-600">
            {SPOLECNY_POPIS}
          </p>
        </div>

        <div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          <div
            className="rounded-xl border border-graphite-200 bg-white p-6 shadow-sm"
            role="listitem"
          >
            <div className="mb-4">
              <Icon3d src={ICONS_3D.lokalizace} alt="" size={ICON_SIZE_SM} />
            </div>
            <h3 className="font-medium text-graphite-900">Adresa</h3>
            <p className="mt-1 text-graphite-600">{branch.adresa}</p>
          </div>
          <div
            className="rounded-xl border border-graphite-200 bg-white p-6 shadow-sm"
            role="listitem"
          >
            <div className="mb-4">
              <Icon3d src={ICONS_3D.telefon} alt="" size={ICON_SIZE_SM} />
            </div>
            <h3 className="font-medium text-graphite-900">Telefon</h3>
            <a
              href={`tel:${branch.telefon.replace(/\s/g, "")}`}
              className="mt-1 block text-graphite-600 hover:text-graphite-900 hover:underline"
            >
              {branch.telefon}
            </a>
          </div>
          <div
            className="rounded-xl border border-graphite-200 bg-white p-6 shadow-sm"
            role="listitem"
          >
            <div className="mb-4">
              <Icon3d src={ICONS_3D.email} alt="" size={ICON_SIZE_SM} />
            </div>
            <h3 className="font-medium text-graphite-900">E-mail</h3>
            <a
              href={`mailto:${branch.email}`}
              className="mt-1 block text-graphite-600 hover:text-graphite-900 hover:underline"
            >
              {branch.email}
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-graphite-200 bg-white p-6 shadow-sm">
          <div className="mb-4">
            <Icon3d src={ICONS_3D.cas} alt="" size={ICON_SIZE_SM} />
          </div>
          <h3 className="font-medium text-graphite-900">Otevírací doba</h3>
          <ul className="mt-2 space-y-1 text-graphite-600">
            {branch.otevíracíDoba.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>

        <div
          id="cenik"
          className="mt-10 rounded-xl border border-graphite-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4">
            <Icon3d src={ICONS_3D.lpgStojan} alt="" size={ICON_SIZE_SM} />
          </div>
          <h3 className="font-medium text-graphite-900">Ceník</h3>
          <p className="mt-1 text-xs text-graphite-500">{CENIK.poznamka}</p>
          <ul className="mt-4 space-y-2 text-graphite-700">
            <li>
              LPG: <strong>{CENIK.lpg} {CENIK.jednotka}</strong>
            </li>
            <li>
              Benzín Natural 95: <strong>{CENIK.benzín95} {CENIK.jednotka}</strong>
            </li>
            <li>
              Nafta: <strong>{CENIK.nafta} {CENIK.jednotka}</strong>
            </li>
          </ul>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-graphite-200 shadow-sm">
          <div className="flex items-center gap-3 border-b border-graphite-100 bg-graphite-50 px-4 py-3">
            <Icon3d src={ICONS_3D.mapa} alt="" size={80} />
            <h3 className="font-medium text-graphite-900">Mapa – {branch.název}</h3>
          </div>
          <iframe
            src={branch.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa – ${branch.název}`}
            className="block"
          />
        </div>

        <div
          id="kontakt"
          className="mt-10 flex flex-wrap gap-4"
          role="group"
          aria-label="Akce"
        >
          <a
            href={`tel:${branch.telefon.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 rounded-full bg-graphite-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-graphite-800"
          >
            <span className="shrink-0">
              <Icon3d src={ICONS_3D.telefon} alt="" size={56} />
            </span>
            Zavolat
          </a>
          <a
            href={branch.mapDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border-2 border-graphite-900 px-6 py-3 text-sm font-medium text-graphite-900 transition hover:bg-graphite-50"
          >
            <span className="shrink-0">
              <Icon3d src={ICONS_3D.mapa} alt="" size={56} />
            </span>
            Navigovat
          </a>
          <a
            href={branch.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-graphite-300 px-6 py-3 text-sm font-medium text-graphite-700 transition hover:bg-graphite-50"
            aria-label={`Facebook – ${branch.název}`}
          >
            Facebook
          </a>
        </div>

        {branch.galleryImages.length > 0 && (
          <section className="mt-16" aria-label="Galerie">
            <h3 className="text-xl font-medium text-graphite-900">Galerie</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {branch.galleryImages.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg bg-graphite-100"
                >
                  <Image
                    src={src}
                    alt={`${branch.název} – fotka ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector(".gallery-placeholder")) {
                        const div = document.createElement("div");
                        div.className =
                          "gallery-placeholder absolute inset-0 bg-gradient-to-br from-graphite-300 to-graphite-400";
                        parent.appendChild(div);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
