import Link from "next/link";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Kreativer Kindertanz | Heide Kinzelhofer",
  description:
    "Kreativer Kindertanz für 4-5 und 6-10 Jährige im 22. Bezirk in Wien mit Heide Kinzelhofer.",
};

export default function Kindertanz() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sky-50 via-warm-50 to-sky-100 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sky-500 uppercase tracking-widest text-sm mb-4">
            Für Kinder von 4 bis 10 Jahren
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-warm-800 mb-6">
            Kreativer Kindertanz
          </h1>
          <p className="text-warm-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Jede Stunde feiern wir ein Fest! Wir gehen in die Welt unserer
            phantasiereichen Ideen.
          </p>
        </div>
      </section>

      {/* Age Groups */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* 4-5 Jahre */}
            <div className="bg-sky-50 rounded-2xl p-8 md:p-10">
              <div className="inline-flex items-center px-4 py-1.5 bg-sky-200 text-sky-700 rounded-full text-sm font-medium mb-6">
                4 &ndash; 5 Jahre
              </div>
              <h2 className="font-serif text-2xl text-warm-800 mb-4">
                Die Kleinen Tänzer
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  Gemeinsam werden Tänze entwickelt, Lieder in Bewegung
                  umgesetzt und mit Sprache, Gedichten sowie verschiedenen
                  Materialien gearbeitet.
                </p>
                <p>
                  Themenbezogene Improvisationen stehen im Vordergrund &ndash;
                  das schöpferische Tun und das Vergnügen am eigenen Körper
                  werden gefördert.
                </p>
                <p>
                  Das gemeinsame Tanzen stärkt das soziale Bewusstsein und
                  lässt die Kinder spielerisch ihre Kreativität entfalten.
                </p>
              </div>
            </div>

            {/* 6-10 Jahre */}
            <div className="bg-warm-50 rounded-2xl p-8 md:p-10">
              <div className="inline-flex items-center px-4 py-1.5 bg-warm-200 text-warm-700 rounded-full text-sm font-medium mb-6">
                6 &ndash; 10 Jahre
              </div>
              <h2 className="font-serif text-2xl text-warm-800 mb-4">
                Die Großen Tänzer
              </h2>
              <div className="space-y-4 text-warm-700 leading-relaxed">
                <p>
                  Hier werden verstärkt die koordinativen Fähigkeiten
                  entwickelt. Über ein Semester wird an einem Stück gearbeitet
                  und choreografiert.
                </p>
                <p>
                  Bewegungsfreude und Kreativität stehen dabei an erster Stelle.
                  Die Kinder lernen, ihren Körper bewusst einzusetzen und sich
                  tänzerisch auszudrücken.
                </p>
                <p>
                  Durch das gemeinsame Erarbeiten einer Choreografie werden
                  Teamarbeit und Selbstvertrauen gestärkt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What they learn */}
      <section className="py-20 bg-sky-50">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="Was die Kinder erleben"
            subtitle="Kreativität, Bewegung und soziales Miteinander stehen im Mittelpunkt."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {[
              "Kreative Improvisation",
              "Rhythmusgefühl",
              "Körperbewusstsein",
              "Choreografie",
              "Soziales Miteinander",
              "Bewegungsfreude",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-5 text-center shadow-sm"
              >
                <p className="font-medium text-warm-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-warm-800 mb-4">
            Interesse geweckt?
          </h2>
          <p className="text-warm-600 mb-8">
            Melden Sie sich gerne telefonisch oder per E-Mail.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="px-8 py-3 bg-warm-600 text-white rounded-full font-medium hover:bg-warm-700 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="/termine"
              className="px-8 py-3 border border-warm-300 text-warm-700 rounded-full font-medium hover:bg-warm-50 transition-colors"
            >
              Termine ansehen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
