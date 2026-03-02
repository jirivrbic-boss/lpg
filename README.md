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

Původní složky `fotky/kadan` a `fotky/karlovy vary` byly zkopírovány do `public/fotky/` při prvním nastavení. Při přidání nových fotek je zkopírujte sem a v `branches.ts` doplňte názvy souborů do `heroImage` a `galleryImages`.

Mapy: v `branches.ts` jsou použity embed URL ve formátu `https://www.google.com/maps?q=ADRESA&output=embed`. Pro lepší vložení můžete v Google Maps zvolit Sdílet → Vložit mapu a vygenerovaný odkaz vložit do `mapEmbedUrl`.

## Struktura projektu

- `src/app/` – stránky (App Router): `page.tsx` (homepage), `kadan/page.tsx`, `kv/page.tsx`
- `src/components/` – Header, Footer, BranchDetail
- `src/lib/branches.ts` – data poboček a ceník

## Technologie

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- Ikony: lucide-react
- Responzivní, mobile-first, s důrazem na přístupnost (ARIA, focus, sémantika)

## Git

Projekt je připraven na commit a push na GitHub (repo: https://github.com/jirivrbic-boss/lpg.git).
