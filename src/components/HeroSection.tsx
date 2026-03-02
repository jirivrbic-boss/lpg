"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { ICONS_3D } from "@/lib/icons";
import { Icon3d } from "./Icon3d";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const height = sectionRef.current.offsetHeight;
      if (rect.top < height && rect.bottom > 0) {
        setOffset(rect.top * 0.15);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-graphite-200 px-4 py-20 sm:min-h-[90vh] sm:py-28"
      aria-label="Úvod"
    >
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <Image
          src={ICONS_3D.heroPozadi}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-black/50"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 flex justify-center opacity-90">
          <Icon3d
            src={ICONS_3D.auto}
            alt=""
            size={120}
            className="drop-shadow-lg"
            priority
          />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl">
          LPG čerpací stanice
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/95 drop-shadow">
          Kvalitní LPG, výhodné ceny. Vyberte pobočku.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/kadan"
            className="flex min-w-[200px] items-center justify-center gap-2 rounded-2xl bg-graphite-900 px-8 py-4 text-lg font-medium text-white shadow-lg transition hover:bg-graphite-800 focus:outline-none focus:ring-2 focus:ring-accent-lime focus:ring-offset-2"
          >
            LPG Kadaň
          </Link>
          <Link
            href="/kv"
            className="flex min-w-[200px] items-center justify-center gap-2 rounded-2xl border-2 border-white bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-accent-lime focus:ring-offset-2"
          >
            LPG Karlovy Vary
          </Link>
        </div>
        <div className="mt-16 flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm">Vyberte pobočku níže</span>
          <span className="text-2xl leading-none" aria-hidden>▼</span>
        </div>
      </div>
    </section>
  );
}
