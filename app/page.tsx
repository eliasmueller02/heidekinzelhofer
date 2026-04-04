import Link from "next/link";
import SectionHeading from "./components/SectionHeading";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-100 via-warm-50 to-sage-50 py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-warm-500 uppercase tracking-widest text-sm mb-4">
                Yoga im 22. Bezirk, Wien
              </p>
              <h1 className="font-serif text-5xl md:text-6xl text-warm-800 leading-tight mb-6">
                Körper & Geist
                <br />
                <span className="text-warm-500">in Einklang</span>
              </h1>
              <p className="text-warm-700 text-lg leading-relaxed mb-8 max-w-lg">
                Körperbetontes Hatha-Yoga, das die Übenden in ihrer Gesamtheit
                belebt, stärkt und entspannt.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/termine"
                  className="inline-flex items-center px-6 py-3 bg-warm-600 text-white rounded-full text-sm font-medium hover:bg-warm-700 transition-colors"
                >
                  Termine & Kurszeiten
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center px-6 py-3 border border-warm-300 text-warm-700 rounded-full text-sm font-medium hover:bg-warm-100 transition-colors"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-warm-200 to-sage-200 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/50 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-warm-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 3Z"
                      />
                    </svg>
                  </div>
                  <p className="font-serif text-2xl text-warm-700 italic">
                    Take your time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="Hatha-Yoga"
            subtitle="Anatomisch genaue Ausführung, Achtsamkeit und die Qualität des Atems stehen im Mittelpunkt."
          />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <p className="text-warm-700 leading-relaxed">
                Heide unterrichtet ein körperbetontes Hatha-Yoga, das die
                Übenden in ihrer Gesamtheit &ndash; Körper und Geist &ndash;
                belebt, stärkt und entspannt.
              </p>
              <p className="text-warm-700 leading-relaxed">
                Sie legt Wert auf eine anatomisch genaue Ausführung der
                Körperpositionen und unterstützt im Unterricht die Achtsamkeit
                sich selbst gegenüber. Neben all dem körperlichen Tun ist die
                Arbeit an der Qualität des Atems, die Mühelosigkeit und
                Sanftheit des Atems, entscheidend dafür, dass die
                Yoga-Übenden Fortschritte machen.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-warm-700 leading-relaxed">
                Dabei wechseln sich dynamischere Teile mit ruhigeren ab, sodass
                einerseits dem Bedürfnis nach Bewegung Rechnung getragen wird
                und andererseits das Loslassen und Entspannen spürbar wird.
              </p>
              <p className="text-warm-700 leading-relaxed">
                Heide passt dabei natürlich die Asanas den körperlichen
                Möglichkeiten der Übenden (auch mit Blöcken und Hilfsmitteln) an
                und nicht umgekehrt. So wird Yoga zu einer Quelle des
                Wohlbefindens, das sich auch jenseits der &quot;Matte&quot;
                abspielt, und uns Gelassenheit und innere Ruhe gibt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading title="Wirkung von Yoga" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Aufrichtung", desc: "Verbesserte Haltung & Stabilität" },
              { title: "Atemvolumen", desc: "Tiefere, bewusstere Atmung" },
              { title: "Konzentration", desc: "Mentale Klarheit & Fokus" },
              { title: "Stressbewältigung", desc: "Innere Ruhe & Gelassenheit" },
              { title: "Kraft", desc: "Stärkung der Körpermitte" },
              { title: "Durchblutung", desc: "Bessere Zirkulation" },
              { title: "Verdauung", desc: "Aktivierter Stoffwechsel" },
              { title: "Wohlbefinden", desc: "Ganzheitliche Balance" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif text-lg text-warm-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            title="Aufbau einer Yogaklasse"
            subtitle="Jede Einheit folgt einem bewährten Ablauf für ganzheitliches Wohlbefinden."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              {
                step: "01",
                title: "Ankommen",
                desc: "Einstimmen und zur Ruhe kommen",
              },
              {
                step: "02",
                title: "Pranayama",
                desc: "Atemübungen für innere Balance",
              },
              {
                step: "03",
                title: "Asanapraxis",
                desc: "Körperübungen mit Achtsamkeit",
              },
              {
                step: "04",
                title: "Meditation",
                desc: "Abschließende Tiefenentspannung",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-warm-100 flex items-center justify-center">
                  <span className="text-warm-600 font-semibold text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-warm-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-warm-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-warm-600 to-warm-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Der Einstieg ist jederzeit möglich
          </h2>
          <p className="text-warm-200 text-lg mb-8 max-w-xl mx-auto">
            Es sind keine Grundkenntnisse erforderlich. Es gibt Abstufungen
            innerhalb der Klassen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/termine"
              className="px-8 py-3 bg-white text-warm-700 rounded-full font-medium hover:bg-warm-50 transition-colors"
            >
              Zu den Terminen
            </Link>
            <a
              href="tel:+4369911445712"
              className="px-8 py-3 border border-white/30 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Anrufen: 0699 / 11 44 57 12
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
