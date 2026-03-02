"use client";

import Image from "next/image";
import Link from "next/link";
import { BRANCHES, HERO_AI } from "@/lib/branches";

export function HeroSection() {
  const kv = BRANCHES.find((b) => b.id === "kv")!;
  const kadan = BRANCHES.find((b) => b.id === "kadan")!;

  return (
    <section
      id="pobocky"
      className="grid min-h-[85vh] grid-cols-1 md:grid-cols-2"
      aria-label="Vyberte pobočku"
    >
      <Link
        href="/kv"
        className="group relative flex min-h-[50vh] flex-col justify-end overflow-hidden bg-graphite-900 md:min-h-[85vh]"
      >
        <Image
          src={HERO_AI.kv}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALnZ6hZ2kCQW1tDDCgwqRoFVR9AAYFf/2Q=="
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent && !parent.querySelector(".hero-placeholder")) {
              const div = document.createElement("div");
              div.className = "hero-placeholder absolute inset-0 bg-gradient-to-br from-graphite-700 to-graphite-900";
              parent.appendChild(div);
            }
          }}
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-10 p-8">
          <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl">
            Karlovy Vary
          </h2>
          <span className="mt-4 inline-block rounded-full bg-accent-lime px-6 py-3 text-base font-medium text-graphite-900 transition hover:bg-accent-lime/90">
            Zobrazit pobočku
          </span>
        </div>
      </Link>

      <Link
        href="/kadan"
        className="group relative flex min-h-[50vh] flex-col justify-end overflow-hidden bg-graphite-900 md:min-h-[85vh]"
      >
        <Image
          src={HERO_AI.kadan}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/ALnZ6hZ2kCQW1tDDCgwqRoFVR9AAYFf/2Q=="
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent && !parent.querySelector(".hero-placeholder")) {
              const div = document.createElement("div");
              div.className = "hero-placeholder absolute inset-0 bg-gradient-to-br from-graphite-700 to-graphite-900";
              parent.appendChild(div);
            }
          }}
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden />
        <div className="relative z-10 p-8">
          <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl">
            Kadaň
          </h2>
          <span className="mt-4 inline-block rounded-full bg-accent-lime px-6 py-3 text-base font-medium text-graphite-900 transition hover:bg-accent-lime/90">
            Zobrazit pobočku
          </span>
        </div>
      </Link>
    </section>
  );
}
