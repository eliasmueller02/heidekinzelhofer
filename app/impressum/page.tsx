export const metadata = {
  title: "Impressum & Datenschutz | Heide Kinzelhofer",
  description: "Impressum und Datenschutzerklärung von Heide Kinzelhofer.",
};

export default function Impressum() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-4xl text-warm-800 mb-10">
          Impressum & Datenschutz
        </h1>

        <div className="prose prose-warm max-w-none space-y-8 text-warm-700">
          {/* Impressum */}
          <div>
            <h2 className="font-serif text-2xl text-warm-800 mb-4">
              Impressum
            </h2>
            <p>
              Heide Kinzelhofer
              <br />
              Schillochweg 43, 1220 Wien, Österreich
              <br />
              Tel.: +43 699 11445712
              <br />
              E-Mail:{" "}
              <a
                href="mailto:heide.kinzelhofer@gmx.at"
                className="text-warm-600 underline hover:text-warm-800"
              >
                heide.kinzelhofer@gmx.at
              </a>
            </p>
          </div>

          {/* EU Streitschlichtung */}
          <div>
            <h2 className="font-serif text-2xl text-warm-800 mb-4">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-600 underline hover:text-warm-800"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          {/* Haftung für Inhalte */}
          <div>
            <h2 className="font-serif text-2xl text-warm-800 mb-4">
              Haftung für Inhalte
            </h2>
            <p>
              Wir entwickeln die Inhalte dieser Webseite ständig weiter und
              bemühen uns, korrekte und aktuelle Informationen bereitzustellen.
              Leider können wir für die Korrektheit aller Inhalte auf dieser
              Website keine Haftung übernehmen. Sollten Ihnen problematische
              oder rechtswidrige Inhalte auffallen, bitten wir Sie, uns
              umgehend zu kontaktieren.
            </p>
          </div>

          {/* Haftung für Links */}
          <div>
            <h2 className="font-serif text-2xl text-warm-800 mb-4">
              Haftung für Links
            </h2>
            <p>
              Unsere Webseite enthält Links zu anderen Webseiten, für deren
              Inhalt wir nicht verantwortlich sind. Eine Haftung für verlinkte
              Websites besteht gemäß § 17 ECG nicht, da wir keine Kenntnis
              rechtswidriger Tätigkeiten hatten und haben.
            </p>
          </div>

          {/* Urheberrecht */}
          <div>
            <h2 className="font-serif text-2xl text-warm-800 mb-4">
              Urheberrecht
            </h2>
            <p>
              Alle Inhalte dieser Webseite (Bilder, Fotos, Texte) unterliegen
              dem Urheberrecht.
            </p>
            <p className="mt-2">
              Bildrechte: Petra Leimhofer, Heide Kinzelhofer, Bernadette Al
              Achour.
            </p>
          </div>

          {/* Datenschutz */}
          <div>
            <h2 className="font-serif text-2xl text-warm-800 mb-4">
              Datenschutzerklärung
            </h2>
            <p>
              Beim Besuch unserer Website werden automatisch bestimmte Daten
              von Ihrem Gerät gespeichert, darunter die aufgerufene URL,
              Browser und Betriebssystem, IP-Adresse sowie Datum und Uhrzeit
              des Zugriffs. Server-Logfiles werden zwei Wochen gespeichert und
              danach automatisch gelöscht.
            </p>
            <p className="mt-4">
              Gemäß der DSGVO haben Sie das Recht auf Auskunft, Berichtigung,
              Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit
              und Widerspruch. Wenn Sie glauben, dass die Verarbeitung Ihrer
              Daten gegen das Datenschutzrecht verstößt, können Sie sich bei
              der Datenschutzbehörde beschweren.
            </p>
            <p className="mt-4">
              Diese Website nutzt eine TLS-Verschlüsselung (HTTPS) zum Schutz
              Ihrer Daten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
