import Link from "next/link";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Termine & Kurszeiten | Heide Kinzelhofer",
  description:
    "Yoga-Kurstermine im Yogahome 22, Wien. Montag und Donnerstag, Einstieg jederzeit möglich.",
};

export default function Termine() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-warm-100 via-warm-50 to-sage-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-warm-800 mb-6">
            Termine & Kurszeiten
          </h1>
          <p className="text-warm-600 text-lg max-w-xl mx-auto">
            Der Einstieg ist jederzeit möglich. Es sind keine Grundkenntnisse
            erforderlich.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="Yoga-Kurse" />

          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Montag */}
            <div className="bg-warm-50 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="sm:w-32">
                <span className="text-sm text-warm-500 uppercase tracking-wider">
                  Montag
                </span>
              </div>
              <div className="flex-1">
                <p className="text-xl font-serif text-warm-800">
                  19:30 &ndash; 21:00 Uhr
                </p>
              </div>
              <div className="text-warm-500 text-sm">90 min</div>
            </div>

            {/* Donnerstag Vormittag */}
            <div className="bg-warm-50 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="sm:w-32">
                <span className="text-sm text-warm-500 uppercase tracking-wider">
                  Donnerstag
                </span>
              </div>
              <div className="flex-1">
                <p className="text-xl font-serif text-warm-800">
                  9:30 &ndash; 11:00 Uhr
                </p>
              </div>
              <div className="text-warm-500 text-sm">90 min</div>
            </div>

            {/* Donnerstag Abend */}
            <div className="bg-warm-50 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="sm:w-32">
                <span className="text-sm text-warm-500 uppercase tracking-wider">
                  Donnerstag
                </span>
              </div>
              <div className="flex-1">
                <p className="text-xl font-serif text-warm-800">
                  18:10 &ndash; 19:40 Uhr
                </p>
              </div>
              <div className="text-warm-500 text-sm">90 min</div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-12 max-w-2xl mx-auto bg-sage-50 rounded-xl p-8 text-center">
            <h3 className="font-serif text-xl text-warm-800 mb-2">Kursort</h3>
            <p className="text-warm-700 font-medium">Yogahome 22</p>
            <p className="text-warm-500">Pappelweg 3, 1220 Wien</p>
          </div>

          {/* Info boxes */}
          <div className="mt-8 max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
            <div className="bg-warm-50 rounded-xl p-6 text-center">
              <h4 className="font-medium text-warm-700 mb-2">Einzelstunden</h4>
              <p className="text-sm text-warm-500">
                Nach Vereinbarung möglich
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6 text-center">
              <h4 className="font-medium text-warm-700 mb-2">Abstufungen</h4>
              <p className="text-sm text-warm-500">
                Es gibt Abstufungen innerhalb der Klassen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl text-warm-800 mb-4">
            Interesse?
          </h2>
          <p className="text-warm-600 mb-8">
            Melden Sie sich einfach telefonisch oder per E-Mail an.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+4369911445712"
              className="px-8 py-3 bg-warm-600 text-white rounded-full font-medium hover:bg-warm-700 transition-colors"
            >
              0699 / 11 44 57 12
            </a>
            <Link
              href="/kontakt"
              className="px-8 py-3 border border-warm-300 text-warm-700 rounded-full font-medium hover:bg-white transition-colors"
            >
              Zum Kontaktformular
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
