"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BilderStreifen from "./BilderStreifen";

const nav = [
  { href: "/yoga", label: "Hatha-Yoga" },
  { href: "/kindertanz", label: "Kreativer Kindertanz" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/termine", label: "Termine" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function SiteFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Federstrich-Effekt: Unterstreichung zeichnet sich von links nach
     rechts, der Menüpunkt rückt dabei minimal nach rechts. */
  const linkBase =
    "relative inline-block transition-[color,transform] duration-300 ease-out " +
    "after:absolute after:-bottom-[3px] after:left-0 after:h-px after:w-full " +
    "after:origin-left after:bg-pen/60 after:transition-transform " +
    "after:duration-300 after:ease-out";

  return (
    <div className="relative min-h-screen">
      {/* Vertikaler Impressum-Steg am rechten Rand (Desktop) */}
      <Link
        href="/impressum"
        className="fixed right-2 top-1/2 hidden -translate-y-1/2 rotate-180 text-[11px] uppercase tracking-[0.22em] text-ink-faint transition-colors [writing-mode:vertical-rl] hover:text-pen lg:block"
      >
        Impressum &amp; Datenschutz
      </Link>

      <div className="mx-auto max-w-4xl px-7 pb-16 pt-14 sm:pt-20">
        {/* Kopf – konstant auf allen Seiten, auf der Willkommensseite mit Zeichen */}
        <header className="flex items-start gap-6">
          <Link href="/" className="inline-block">
            <h1 className="font-display text-[2.75rem] font-medium leading-none tracking-tight text-ink sm:text-6xl">
              Yoga &amp; Kindertanz
            </h1>
            <p className="mt-2 font-serif text-lg tracking-wide text-ink-soft">
              Heide Kinzelhofer
            </p>
          </Link>
          {pathname === "/" && (
            <Image
              src="/skizzen/meditation.png"
              alt=""
              width={470}
              height={484}
              priority
              className="mt-1 h-auto w-16 shrink-0 sm:w-20"
            />
          )}
        </header>

        {/* Bilderreihe als Streifen – nur auf „Über mich“, direkt unter dem Kopf */}
        {pathname.startsWith("/ueber-mich") && <BilderStreifen />}

        {/* Trennlinie */}
        <div className="mb-9 mt-9 h-px w-28 bg-rule" />

        {/* Navigation + Inhalt */}
        <div className="md:flex md:gap-14">
          {/* Auf der Willkommensseite übernimmt die große Auflistung die Navigation */}
          <nav
            className={`mb-10 shrink-0 md:mb-0 md:w-48 ${
              pathname === "/" ? "hidden md:invisible md:block" : ""
            }`}
          >
            <ul className="space-y-2 font-serif text-[15px] leading-relaxed">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={
                      isActive(item.href)
                        ? `${linkBase} text-pen after:scale-x-100`
                        : `${linkBase} text-ink-soft hover:translate-x-[3px] hover:text-pen after:scale-x-0 hover:after:scale-x-100`
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 flex-1">{children}</div>
        </div>

        {/* Schlanke Fußzeile */}
        <footer className="mt-24 border-t border-rule pt-6 text-[13px] text-ink-faint md:pl-[15.5rem]">
          <p>
            Heide Kinzelhofer, 1220 Wien &ndash; Telefon{" "}
            <a href="tel:+4369911445712" className="hover:text-pen">
              0699 11 44 57 12
            </a>
          </p>
          <p className="mt-1.5">
            <Link href="/impressum" className="hover:text-pen">
              Impressum
            </Link>{" "}
            und{" "}
            <Link href="/datenschutz" className="hover:text-pen">
              Datenschutzerklärung
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
