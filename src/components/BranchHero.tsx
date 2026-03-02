"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import type { Branch } from "@/lib/branches";

const SLOGAN = "Kvalitní LPG, výhodné ceny, rychlá obsluha.";

interface BranchHeroProps {
  branch: Branch;
  priority?: boolean;
}

export function BranchHero({ branch, priority = false }: BranchHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const height = sectionRef.current.offsetHeight;
      if (rect.top < height && rect.bottom > 0) {
        setOffset(rect.top * 0.12);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[60vh] w-full overflow-hidden bg-graphite-900"
      aria-label={`Hero – ${branch.název}`}
    >
      <div
        className="absolute inset-0"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <Image
          src={branch.heroAiImage}
          alt={`Čerpací stanice ${branch.název}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority={priority}
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
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 sm:p-12">
        <h1
          id={`branch-heading-${branch.id}`}
          className="text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl"
        >
          {branch.název}
        </h1>
        <p className="mt-2 max-w-xl text-lg text-white/90 drop-shadow">
          {SLOGAN}
        </p>
      </div>
    </section>
  );
}
