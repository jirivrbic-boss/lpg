"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { BranchId } from "@/lib/branches";

const NAV = [
  { href: "/#pobocky", label: "Pobočky" },
  { href: "/#cenik", label: "Ceník" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pobockaParam = searchParams.get("pobocka");
  const activeKadan = pathname === "/kadan" || pobockaParam === "kadan";
  const activeKv = pathname === "/kv" || pobockaParam === "kv";

  const handleBranchSwitch = (id: BranchId) => {
    setMobileOpen(false);
    if (pathname === "/") {
      router.push(`/?pobocka=${id}`, { scroll: false });
      requestAnimationFrame(() => {
        setTimeout(() => {
          document.getElementById("branch-detail")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    } else {
      router.push(id === "kadan" ? "/kadan" : "/kv");
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-graphite-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-graphite-900 transition hover:text-graphite-700"
          aria-label="LPG – úvodní stránka"
        >
          LPG
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Hlavní navigace"
        >
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-graphite-600 transition hover:text-graphite-900"
            >
              {label}
            </Link>
          ))}
          <div className="flex items-center gap-2 border-l border-graphite-200 pl-6">
            <span className="text-xs text-graphite-500">Pobočka:</span>
            <button
              type="button"
              onClick={() => handleBranchSwitch("kadan")}
              className={`rounded px-3 py-1.5 text-sm font-medium transition ${
                activeKadan
                  ? "bg-graphite-900 text-white"
                  : "text-graphite-600 hover:bg-graphite-100 hover:text-graphite-900"
              }`}
              aria-pressed={activeKadan}
            >
              Kadaň
            </button>
            <button
              type="button"
              onClick={() => handleBranchSwitch("kv")}
              className={`rounded px-3 py-1.5 text-sm font-medium transition ${
                activeKv
                  ? "bg-graphite-900 text-white"
                  : "text-graphite-600 hover:bg-graphite-100 hover:text-graphite-900"
              }`}
              aria-pressed={activeKv}
            >
              Karlovy Vary
            </button>
          </div>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="border-t border-graphite-200 bg-white px-4 py-4 md:hidden"
          role="dialog"
          aria-label="Mobilní menu"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobilní navigace">
            {NAV.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-graphite-600 hover:text-graphite-900"
              >
                {label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => handleBranchSwitch("kadan")}
                className="rounded bg-graphite-100 px-3 py-2 text-sm font-medium text-graphite-900"
              >
                Kadaň
              </button>
              <button
                type="button"
                onClick={() => handleBranchSwitch("kv")}
                className="rounded bg-graphite-100 px-3 py-2 text-sm font-medium text-graphite-900"
              >
                Karlovy Vary
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
