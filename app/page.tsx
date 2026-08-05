import Image from "next/image";
import Link from "next/link";
import { Figure } from "./components/Editorial";

const seiten = [
  { href: "/yoga", label: "Yoga" },
  { href: "/kindertanz", label: "Kindertanz" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/bilder", label: "Bilder" },
  { href: "/termine", label: "Termine" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Willkommen() {
  return (
    <article>
      <div className="lg:flex lg:items-start lg:gap-14">
        {/* Direkte Auflistung der Seiten */}
        <nav aria-label="Seiten" className="min-w-0 flex-1 pt-2">
          <ul className="space-y-4">
            {seiten.map((seite) => (
              <li key={seite.href}>
                <Link
                  href={seite.href}
                  className="relative inline-block font-display text-3xl font-medium tracking-tight text-ink transition-[color,transform] duration-300 ease-out after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-pen/60 after:transition-transform after:duration-300 after:ease-out hover:translate-x-[3px] hover:text-pen hover:after:scale-x-100"
                >
                  {seite.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Figure
          src="/bilder/pfingstrosen-01.jpg"
          alt="Heide Kinzelhofer lacht herzlich, umrahmt von einem Kranz aus Pfingstrosen"
          ratio="aspect-[2/3]"
          priority
          className="mt-12 max-w-[19rem] shrink-0 lg:mt-0"
        />
      </div>

      <div className="mt-14 max-w-2xl">
        <Image
          src="/yoga/yoga-7874.jpg"
          alt="Tiefe seitliche Dehnung mit geöffnetem Brustkorb auf der roten Matte, dahinter Pfingstrosen"
          width={1400}
          height={933}
          sizes="(max-width: 640px) 100vw, 672px"
          className="h-auto w-full"
        />
      </div>
    </article>
  );
}
