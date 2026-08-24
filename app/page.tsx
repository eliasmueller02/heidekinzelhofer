import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const seiten = [
  { href: "/yoga", label: "Hatha-Yoga" },
  { href: "/kindertanz", label: "Kreativer Kindertanz" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/termine", label: "Termine" },
  { href: "/kontakt", label: "Kontakt" },
];

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

export default function Willkommen() {
  return (
    <article className="md:-ml-[15.5rem]">
      {/* Beide Skizzenzeilen als ein langer Fries unter dem Titel.
          Die flex-Werte entsprechen den Seitenverhältnissen, dadurch
          sind beide Reihen gleich hoch. */}
      <div
        className="reveal-wipe -mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-5"
        style={delay(0)}
      >
        <div style={{ flex: "4.09 1 0%" }}>
          <Image
            src="/skizzen/folge-1.png"
            alt=""
            width={1400}
            height={342}
            priority
            sizes="(max-width: 640px) 100vw, 460px"
            className="h-auto w-full"
          />
        </div>
        <div style={{ flex: "3.35 1 0%" }}>
          <Image
            src="/skizzen/folge-2.png"
            alt=""
            width={1400}
            height={418}
            priority
            sizes="(max-width: 640px) 100vw, 375px"
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Register und Porträt rücken eng zusammen */}
      <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center lg:gap-x-10">
        <nav aria-label="Seiten">
          <ul>
            {seiten.map((seite, i) => (
              <li key={seite.href}>
                <Link
                  href={seite.href}
                  style={delay(120 + i * 90)}
                  className="reveal reveal-rule group relative block py-4 before:absolute before:inset-x-0 before:top-0 before:h-px before:origin-left before:bg-rule/70 after:absolute after:inset-x-0 after:top-0 after:h-px after:origin-left after:scale-x-0 after:bg-pen/70 after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 focus-visible:outline-none focus-visible:after:scale-x-100 md:ml-[15.5rem] lg:ml-0 lg:py-[1.125rem]"
                >
                  <span className="-ml-[0.03em] block font-display text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-[1.05] tracking-tight text-ink transition-[color,transform] duration-[400ms] ease-out group-hover:translate-x-[6px] group-hover:text-pen group-focus-visible:translate-x-[6px] group-focus-visible:text-pen group-active:text-pen motion-reduce:transition-none">
                    {seite.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div
            aria-hidden
            className="rule-final h-px bg-rule/70 md:ml-[15.5rem] lg:ml-0"
            style={delay(570)}
          />
        </nav>

        {/* Porträt mit handschriftlichem Gruß */}
        <aside
          className="reveal mt-12 flex flex-col gap-6 lg:mt-0"
          style={delay(700)}
        >
          <figure className="w-full max-w-[22rem]">
            <div className="group relative aspect-[3/4] overflow-hidden bg-rule/40">
              <Image
                src="/bilder/pfingstrosen-01.jpg"
                alt="Heide Kinzelhofer lacht herzlich, umrahmt von einem Kranz aus Pfingstrosen"
                fill
                priority
                sizes="(max-width: 1024px) 22rem, 22rem"
                className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transition-none"
              />
            </div>
          </figure>
          <div>
            <p className="max-w-[14rem] rotate-[-1.5deg] font-hand text-[1.625rem] leading-snug text-pen md:text-[1.75rem]">
              Schön, dass du da bist.
            </p>
            <p className="mt-2 font-serif text-[15px] italic text-ink-soft">
              - Heide
            </p>
          </div>
        </aside>
      </div>

      {/* Schlussbild */}
      <div className="reveal mt-16 md:ml-[15.5rem]" style={delay(850)}>
        <Image
          src="/bilder/pfingstrosen-09.jpg"
          alt="Heide hebt lachend beide Arme vor einer Wand aus wildem Wein"
          width={1400}
          height={933}
          sizes="(max-width: 640px) 100vw, 672px"
          className="h-auto w-full max-w-2xl"
        />
      </div>
    </article>
  );
}
