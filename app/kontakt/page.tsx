import { PageTitle, Heading, Lead, Prose } from "../components/Editorial";
import MapEmbed from "../components/MapEmbed";

export const metadata = {
  title: "Kontakt | Heide Kinzelhofer",
  description:
    "Kontaktieren Sie Heide Kinzelhofer für Yoga und Kindertanz im 22. Bezirk, Wien.",
};

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Pappelweg+3%2C+1220+Wien";

export default function Kontakt() {
  return (
    <article>
      <PageTitle>Kontakt</PageTitle>

      <div className="mt-8">
        <Lead>Ich freue mich auf Ihre Nachricht.</Lead>
        <div className="mt-7">
          <Prose>
            <p>
              Sie erreichen mich telefonisch unter{" "}
              <a
                href="tel:+4369911445712"
                className="text-pen hover:underline"
              >
                0699 / 11 44 57 12
              </a>{" "}
              oder per E-Mail an{" "}
              <a
                href="mailto:heide.kinzelhofer@gmx.at"
                className="text-pen underline-offset-4 hover:underline"
              >
                heide.kinzelhofer@gmx.at
              </a>
              .
            </p>
          </Prose>
        </div>
      </div>

      <section className="mt-14">
        <Heading>Kursort</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Meine Kurse finden im Yogahome 22 statt: Pappelweg 3, 1220 Wien (
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
        <div className="mt-6">
          <MapEmbed />
        </div>
      </section>
    </article>
  );
}
