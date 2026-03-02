import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LPG čerpací stanice | Kadaň & Karlovy Vary",
  description:
    "Kvalitní LPG s důrazem na spolehlivost, rychlou obsluhu a výhodné ceny. Pobočky Kadaň a Karlovy Vary. Férový přístup, čisté zázemí.",
  openGraph: {
    title: "LPG čerpací stanice | Kadaň & Karlovy Vary",
    description:
      "Kvalitní LPG s důrazem na spolehlivost, rychlou obsluhu a výhodné ceny. Pobočky Kadaň a Karlovy Vary.",
    locale: "cs_CZ",
    type: "website",
  },
  metadataBase: new URL("https://lpg.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Suspense fallback={<header className="h-16 border-b border-graphite-200 bg-white" />}>
          <Header />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
