import Link from "next/link";
import { PageTitle, Heading } from "../components/Editorial";

export const metadata = {
  title: "Datenschutzerklärung | Heide Kinzelhofer",
  description: "Datenschutzerklärung von Heide Kinzelhofer.",
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

export default function Datenschutz() {
  return (
    <article>
      <PageTitle>Datenschutzerklärung</PageTitle>

      <Section title="Allgemeines">
        <p>
          Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen.
          Ich verarbeite Ihre Daten ausschließlich auf Grundlage der
          gesetzlichen Bestimmungen (DSGVO, TKG 2021). Verantwortlich für die
          Datenverarbeitung auf dieser Website bin ich, Heide Kinzelhofer;
          meine Kontaktdaten finden Sie im{" "}
          <Link
            href="/impressum"
            className="text-pen underline-offset-4 hover:underline"
          >
            Impressum
          </Link>
          .
        </p>
      </Section>

      <Section title="Server-Logfiles">
        <p>
          Beim Besuch dieser Website werden automatisch technische Daten von
          Ihrem Gerät erfasst: die aufgerufene URL, Browser und
          Betriebssystem, IP-Adresse sowie Datum und Uhrzeit des Zugriffs.
          Diese Daten sind für die sichere Bereitstellung der Website technisch
          erforderlich (Art. 6 Abs. 1 lit. f DSGVO). Die Server-Logfiles
          werden vom Hosting-Anbieter nur so lange gespeichert, wie es für den
          sicheren Betrieb erforderlich ist, und danach automatisch gelöscht.
        </p>
      </Section>

      <Section title="Kontaktaufnahme">
        <p>
          Wenn Sie mich per E-Mail oder Telefon kontaktieren, werden Ihre
          Angaben zur Bearbeitung der Anfrage und für den Fall von
          Anschlussfragen bei mir gespeichert (Art. 6 Abs. 1 lit. b DSGVO).
          Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter. Ich lösche
          sie, sobald sie für die Bearbeitung nicht mehr erforderlich sind und
          keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </Section>

      <Section title="Google Maps">
        <p>
          Auf der Kontaktseite biete ich eine Karte von Google Maps an
          (Anbieter: Google Ireland Limited, Gordon House, Barrow Street,
          Dublin 4, Irland), um den Kursort leichter auffindbar zu machen. Die
          Karte wird erst geladen, wenn Sie sie aktiv anklicken - erst
          dann stellt Ihr Browser eine Verbindung zu Servern von Google her
          und es werden Daten (unter anderem Ihre IP-Adresse) an Google
          übertragen (Art. 6 Abs. 1 lit. a DSGVO). Weitere Informationen
          finden Sie in der{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pen underline-offset-4 hover:underline"
          >
            Datenschutzerklärung von Google
          </a>
          .
        </p>
      </Section>

      <Section title="Cookies und Tracking">
        <p>
          Diese Website setzt selbst keine Cookies ein und verwendet keine
          Analyse- oder Tracking-Tools. Erst wenn Sie die Google-Maps-Karte
          aktiv laden, kann Google eigene Cookies setzen.
        </p>
      </Section>

      <Section title="Ihre Rechte">
        <p>
          Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und
          Widerspruch zu. Eine erteilte Einwilligung - etwa zum Laden
          der Google-Maps-Karte - können Sie jederzeit mit Wirkung für
          die Zukunft widerrufen. Wenn Sie glauben, dass die Verarbeitung
          Ihrer Daten
          gegen das Datenschutzrecht verstößt, können Sie sich bei mir (siehe{" "}
          <Link
            href="/impressum"
            className="text-pen underline-offset-4 hover:underline"
          >
            Impressum
          </Link>
          ) oder bei der{" "}
          <a
            href="https://www.dsb.gv.at"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pen underline-offset-4 hover:underline"
          >
            Österreichischen Datenschutzbehörde
          </a>{" "}
          beschweren.
        </p>
      </Section>

      <Section title="Datensicherheit">
        <p>
          Diese Website nutzt eine TLS-Verschlüsselung (HTTPS) zum Schutz Ihrer
          Daten bei der Übertragung.
        </p>
      </Section>
    </article>
  );
}
