# LPG čerpací stanice – web

Moderní web pro LPG čerpací stanice (Kadaň a Karlovy Vary). Next.js 14, TypeScript, Tailwind CSS.

## Instalace

```bash
npm install
```

## Spuštění

- **Vývoj:** `npm run dev` – aplikace běží na [http://localhost:3000](http://localhost:3000)
- **Production build:** `npm run build`
- **Spuštění production:** `npm start`
- **Lint:** `npm run lint`

## Kde měnit data a ceny

**Jediný zdroj pravdy** je soubor **`src/lib/branches.ts`**.

- **Ceník** – konstanty `CENIK` (LPG, benzín 95, nafta v Kč/l, jednotka, poznámka „orientační“).
- **Data poboček** – pole `BRANCHES`: adresa, telefon, e-mail, otevírací doba, Facebook, URL mapy (embed + navigace), cesty k obrázkům (hero, galerie).

Fotky musí být v **`public/fotky/`**:

- `public/fotky/kadan/` – obrázky pro Kadaň
- `public/fotky/karlovy-vary/` – obrázky pro Karlovy Vary

**AI rendery stanic** (hlavní hero vizuály) – umístěte do:
- `public/fotky/kadan/kadan ai.png`
- `public/fotky/karlovy-vary/karlovy vary ai.png`

Cesty k AI renderům jsou v `src/lib/branches.ts` v konstantě `HERO_AI`. Pro výměnu hero obrázku změňte cestu v `HERO_AI` nebo nahraďte soubor stejným názvem.

Mapy: v `branches.ts` jsou použity embed URL ve formátu `https://www.google.com/maps?q=ADRESA&output=embed`. Pro lepší vložení můžete v Google Maps zvolit Sdílet → Vložit mapu a vygenerovaný odkaz vložit do `mapEmbedUrl`.

## Struktura projektu

- `src/app/` – stránky (App Router): `page.tsx` (homepage), `kadan/page.tsx`, `kv/page.tsx`
- `src/components/` – Header, Footer, BranchDetail, HeroSection, Icon3d
- `src/lib/branches.ts` – data poboček a ceník
- `src/lib/icons.ts` – cesty k 3D ikonám

## 3D ikony

Ikony jsou ve složce **`public/3d/`**. Mapování (která ikona kde je) a cesty jsou v **`src/lib/icons.ts`**.

- **Výměna ikony:** Nahraďte soubor ve složce `public/3d/` stejným názvem, nebo změňte cestu v `src/lib/icons.ts` (konstanty `ICONS_3D`).
- **Velikost / styl:** Komponenta `Icon3d` v `src/components/Icon3d.tsx` má prop `size` (výchozí 96 px) a hover efekt (scale + shadow). Úpravy velikosti lze dělat přímo u použití `<Icon3d size={80} … />`.

## Technologie

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- 3D ikony (PNG) v `public/3d/`, vykreslované přes `next/image`
- Responzivní, mobile-first, s důrazem na přístupnost (ARIA, focus, sémantika)

## Nasazení na Vercel

1. Propojte repozitář s Vercel (Import Project z GitHubu).
2. **Root Directory** ponechte prázdné (nebo `.`) – projekt je v kořeni repo.
3. **Framework Preset** by měl být automaticky „Next.js“.
4. Po nasazení zkontrolujte **Build Logs**: build musí skončit úspěchem (`next build`). Pokud build spadne, na produkci se zobrazí 404.
5. Pokud vidíte 404: NOT_FOUND, obvykle to znamená, že build selhal – v Vercel dashboardu otevřete poslední deployment a zkontrolujte záložku „Building“.

## Git

Projekt je připraven na commit a push na GitHub (repo: https://github.com/jirivrbic-boss/lpg.git).
