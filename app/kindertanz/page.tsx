import Link from "next/link";
import {
  Heading,
  Lead,
  Prose,
  Figure,
} from "../components/Editorial";

export const metadata = {
  title: "Kreativer Kindertanz | Heide Kinzelhofer",
  description:
    "Kreativer Kindertanz für 4-5 und 6-10 Jährige im 22. Bezirk in Wien mit Heide Kinzelhofer.",
};

export default function Kindertanz() {
  return (
    <article>
      <h1 className="sr-only">Kreativer Kindertanz</h1>

      <div className="mt-8 lg:flex lg:items-start lg:gap-12">
        <div className="min-w-0 flex-1">
          <Lead>Jede Stunde feiern wir ein Fest!</Lead>
          <div className="mt-7">
            <Prose>
              <p>
                Wir gehen in die Welt unserer phantasiereichen Ideen. Ich
                unterrichte kreativen Kindertanz für Kinder von 4 bis 10 Jahren
                &ndash; das schöpferische Tun und das Vergnügen am eigenen
                Körper stehen dabei im Vordergrund.
              </p>
            </Prose>
          </div>
        </div>

        <Figure
          src="/kindertanz-goldvorhang.jpg"
          alt="Drei Mädchen tanzen barfuß im Tanzsaal vor einem goldenen Vorhang"
          ratio="aspect-[2/3]"
          priority
        />
      </div>

      <section className="mt-14">
        <Heading>Die Kleinen TänzerInnen &middot; 4&ndash;5 Jahre</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Gemeinsam entwickeln wir Tänze, setzen Lieder in Bewegung um und
              arbeiten mit Sprache, Gedichten sowie verschiedenen Materialien.
              Themenbezogene Improvisationen stehen im Vordergrund &ndash; ich
              fördere das schöpferische Tun und das Vergnügen am eigenen
              Körper. Das gemeinsame Tanzen stärkt das soziale Bewusstsein und
              lässt die Kinder spielerisch ihre Kreativität entfalten.
            </p>
          </Prose>
        </div>
      </section>

      <section className="mt-12">
        <Heading>Die Großen TänzerInnen &middot; 6&ndash;10 Jahre</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Hier entwickle ich mit den Kindern verstärkt die koordinativen
              Fähigkeiten. Über ein Semester arbeiten wir an einem Stück und
              choreografieren es gemeinsam &ndash; Bewegungsfreude und
              Kreativität stehen dabei an erster Stelle. Die Kinder lernen,
              ihren Körper bewusst einzusetzen und sich tänzerisch
              auszudrücken. Durch das gemeinsame Erarbeiten einer Choreografie
              wachsen Teamgeist und Selbstvertrauen.
            </p>
          </Prose>
        </div>
      </section>

      <section className="mt-16 max-w-md">
        <p className="font-serif text-[16px] leading-[1.8] text-ink-soft">
          Interesse geweckt? Melden Sie sich gerne{" "}
          <Link
            href="/kontakt"
            className="text-pen underline-offset-4 hover:underline"
          >
            telefonisch oder per E-Mail
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
