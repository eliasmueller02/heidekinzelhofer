import type { Metadata } from "next";
import { EB_Garamond, Cormorant_Garamond, Caveat } from "next/font/google";
import "./globals.css";
import SiteFrame from "./components/SiteFrame";
import Datenschutzhinweis from "./components/Datenschutzhinweis";

const eb = EB_Garamond({
  variable: "--font-eb",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Heide Kinzelhofer | Yoga & Kindertanz in Wien",
  description:
    "Körperbetontes Hatha-Yoga und kreativer Kindertanz im 22. Bezirk in Wien. Kurse für Erwachsene und Kinder mit Heide Kinzelhofer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${eb.variable} ${cormorant.variable} ${caveat.variable}`}
    >
      <body className="bg-paper font-serif text-ink antialiased">
        <SiteFrame>{children}</SiteFrame>
        <Datenschutzhinweis />
      </body>
    </html>
  );
}
