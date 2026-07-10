import Link from "next/link";
import { PageTitle, Heading } from "../components/Editorial";

export const metadata = {
  title: "Impressum | Heide Kinzelhofer",
  description: "Impressum von Heide Kinzelhofer.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10 max-w-xl">
      <Heading>{title}</Heading>
      <div className="mt-3 space-y-3 font-serif text-[15px] leading-[1.8] text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export default function Impressum() {
  return (
    <article>
      <PageTitle>Impressum</PageTitle>

      <Section title="Angaben gemäß § 5 ECG und § 25 MedienG">
        <p>
          Heide Kinzelhofer
          <br />
          Unternehmensgegenstand: Yoga- und Kindertanzunterricht
          <br />
          Schillochweg 43/14, 1220 Wien, Österreich
          <br />
          Tel.:{" "}
          <a href="tel:+4369911445712" className="text-pen hover:underline">
            +43 699 11 44 57 12
          </a>
          <br />
          E-Mail:{" "}
          <a
            href="mailto:heide.kinzelhofer@gmx.at"
            className="text-pen underline-offset-4 hover:underline"
          >
            heide.kinzelhofer@gmx.at
          </a>
        </p>
      </Section>

      <Section title="Verbraucherstreitbeilegung">
        <p>
          Ich bin nicht verpflichtet und nicht bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </Section>

      <Section title="Haftung für Inhalte">
        <p>
          Ich entwickle die Inhalte dieser Webseite ständig weiter und bemühe
          mich, korrekte und aktuelle Informationen bereitzustellen. Für die
          Korrektheit aller Inhalte auf dieser Website kann ich dennoch keine
          Haftung übernehmen. Sollten Ihnen problematische oder rechtswidrige
          Inhalte auffallen, bitte ich Sie, mich umgehend zu kontaktieren.
        </p>
      </Section>

      <Section title="Haftung für Links">
        <p>
          Meine Webseite enthält Links zu anderen Webseiten, für deren Inhalt
          ich nicht verantwortlich bin. Eine Haftung für verlinkte Websites
          besteht gemäß § 17 ECG nicht, da ich keine Kenntnis rechtswidriger
          Tätigkeiten hatte und habe.
        </p>
      </Section>

      <Section title="Urheberrecht">
        <p>
          Alle Inhalte dieser Webseite (Bilder, Fotos, Texte) unterliegen dem
          Urheberrecht. Bildrechte: Petra Leimhofer, Heide Kinzelhofer,
          Bernadette Al Achour.
        </p>
      </Section>

      <Section title="Datenschutz">
        <p>
          Informationen zum Umgang mit Ihren Daten finden Sie in der{" "}
          <Link
            href="/datenschutz"
            className="text-pen underline-offset-4 hover:underline"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
      </Section>
    </article>
  );
}
