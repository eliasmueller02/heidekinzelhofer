import Link from "next/link";
import { PageTitle, Heading, Lead, Prose } from "../components/Editorial";

export const metadata = {
  title: "Termine & Kurszeiten | Heide Kinzelhofer",
  description:
    "Yoga-Kurstermine im Yogahome 22, Wien. Montag und Donnerstag, Einstieg jederzeit möglich.",
};

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Pappelweg+3%2C+1220+Wien";

export default function Termine() {
  return (
    <article>
      <PageTitle>Termine &amp; Kurszeiten</PageTitle>

      <div className="mt-8">
        <Lead>Der Einstieg ist jederzeit möglich.</Lead>
        <div className="mt-7">
          <Prose>
            <p>
              Es sind keine Grundkenntnisse erforderlich &ndash; innerhalb der
              Klassen gibt es Abstufungen. Einzelstunden biete ich nach
              Vereinbarung an.
            </p>
          </Prose>
        </div>
      </div>

      <section className="mt-14">
        <Heading>Yoga-Kurse</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Montag, 19:30&ndash;21:00 Uhr
              <br />
              Donnerstag, 9:30&ndash;11:00 Uhr
              <br />
              Donnerstag, 18:10&ndash;19:40 Uhr
            </p>
            <p>
              Die Kurse dauern jeweils 90 Minuten und finden im Yogahome 22
              statt: Pappelweg 3, 1220 Wien (
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pen underline-offset-4 hover:underline"
              >
                in Google Maps öffnen
              </a>
              ).
            </p>
          </Prose>
        </div>
      </section>

      <section className="mt-14">
        <Heading>Kindertanz-Kurse</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Montag, 15:50&ndash;16:30 Uhr &ndash; Die Kleinen TänzerInnen
              (4&ndash;5 Jahre)
              <br />
              Montag, 16:45&ndash;17:35 Uhr &ndash; Die Großen TänzerInnen
              (6&ndash;10 Jahre)
            </p>
          </Prose>
        </div>
      </section>

      <section className="mt-14 max-w-md">
        <p className="font-serif text-[16px] leading-[1.8] text-ink-soft">
          Anmeldung und Fragen gerne telefonisch unter{" "}
          <a href="tel:+4369911445712" className="text-pen hover:underline">
            0699 11 44 57 12
          </a>{" "}
          oder{" "}
          <Link
            href="/kontakt"
            className="text-pen underline-offset-4 hover:underline"
          >
            per E-Mail
          </Link>
          .
        </p>
      </section>
    </article>
  );
}
