import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const seiten = [
  { href: "/yoga", label: "Yoga", note: "atmen & ankommen" },
  { href: "/kindertanz", label: "Kindertanz", note: "hüpfen, drehen, lachen" },
  { href: "/ueber-mich", label: "Über mich", note: "mein Weg" },
  { href: "/bilder", label: "Bilder", note: "Einblicke in die Stunden" },
  { href: "/termine", label: "Termine", note: "Kurse, Zeiten, Orte" },
  { href: "/kontakt", label: "Kontakt", note: "sag hallo" },
];

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function Willkommen() {
  return (
    <article className="md:-ml-[13.5rem]">
      <p
        className="reveal font-serif text-[11px] uppercase tracking-[0.28em] text-ink-faint md:ml-[13.5rem]"
        style={delay(0)}
      >
        Inhalt
      </p>

      {/* Register links, Porträt-Tafel rechts daneben */}
      <div className="mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-x-12">
        <nav aria-label="Seiten">
          <ul>
            {seiten.map((seite, i) => (
              <li key={seite.href}>
                <Link
                  href={seite.href}
                  style={delay(120 + i * 90)}
                  className="reveal reveal-rule group relative block py-5 before:absolute before:inset-x-0 before:top-0 before:h-px before:origin-left before:bg-rule/70 after:absolute after:inset-x-0 after:top-0 after:h-px after:origin-left after:scale-x-0 after:bg-pen/70 after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 focus-visible:outline-none focus-visible:after:scale-x-100 md:grid md:grid-cols-[10rem_minmax(0,1fr)] md:items-baseline md:gap-x-14 md:py-[1.375rem]"
                >
                  <span className="mb-1.5 block font-serif text-[11px] tracking-[0.22em] text-ink-faint transition-colors duration-300 group-hover:text-pen group-focus-visible:text-pen md:mb-0 md:text-[0.8125rem] md:tracking-[0.2em]">
                    0{i + 1}
                  </span>
                  <span className="block min-w-0">
                    <span className="-ml-[0.03em] block font-display text-[clamp(2.5rem,6vw,3.5rem)] font-medium leading-[0.95] tracking-tight text-ink transition-[color,transform] duration-[400ms] ease-out group-hover:translate-x-[6px] group-hover:text-pen group-focus-visible:translate-x-[6px] group-focus-visible:text-pen group-active:text-pen motion-reduce:transition-none">
                      {seite.label}
                    </span>
                    <span className="mt-1.5 block font-serif text-[13px] italic leading-snug text-ink-faint transition-colors duration-[400ms] group-hover:text-ink-soft md:text-[0.9375rem]">
                      {seite.note}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div aria-hidden className="rule-final h-px bg-rule/70" style={delay(570)} />
        </nav>

        {/* Tafel: Pfingstrosen-Porträt, darunter Gruß und Kindertanz-Skizze */}
        <aside
          className="reveal mt-14 flex flex-col gap-8 lg:sticky lg:top-10 lg:mt-0"
          style={delay(700)}
        >
          <figure className="w-full max-w-[20rem]">
            <div className="group relative aspect-[3/4] overflow-hidden bg-rule/40">
              <Image
                src="/bilder/pfingstrosen-01.jpg"
                alt="Heide Kinzelhofer lacht herzlich, umrahmt von einem Kranz aus Pfingstrosen"
                fill
                priority
                sizes="(max-width: 1024px) 20rem, 20rem"
                className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transition-none"
              />
            </div>
          </figure>
          <div className="flex items-end gap-6">
            <div>
              <p className="max-w-[14rem] rotate-[-1.5deg] font-hand text-[1.625rem] leading-snug text-pen md:text-[1.75rem]">
                Schön, dass du hier bist.
              </p>
              <p className="mt-2 font-serif text-[15px] italic text-ink-soft">
                &mdash; Heide
              </p>
            </div>
            <Image
              src="/skizzen/kindertanz.png"
              alt=""
              width={665}
              height={702}
              className="h-auto w-16 shrink-0 opacity-90"
            />
          </div>
        </aside>
      </div>

      {/* Schlussvignette: Skizzenfries — Desktop ruhig, mobil über den Blattrand */}
      <div className="reveal-wipe mt-16 hidden md:ml-[13.5rem] md:block" style={delay(850)}>
        <Image
          src="/skizzen/uebungsfolge-1.png"
          alt=""
          width={1800}
          height={315}
          className="h-auto w-full max-w-[26rem] opacity-75"
        />
      </div>
      <div className="reveal-wipe mt-14 overflow-hidden md:hidden" style={delay(850)}>
        <Image
          src="/skizzen/uebungsfolge-2.png"
          alt=""
          width={1800}
          height={382}
          className="h-auto w-[140%] max-w-none opacity-70"
        />
      </div>
    </article>
  );
}
