import Image from "next/image";

export const metadata = {
  title: "Über mich | Heide Kinzelhofer",
  description:
    "Erfahren Sie mehr über Heide Kinzelhofer - Yoga-Lehrerin und Tanzpädagogin in Wien.",
};

export default function UeberMich() {
  return (
    <>
      {/* Hero with Portrait */}
      <section className="bg-gradient-to-br from-sky-50 via-warm-50 to-warm-100 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="font-serif text-5xl md:text-6xl text-warm-800 mb-6">
                Heide Kinzelhofer
              </h1>
              <p className="text-warm-600 text-lg max-w-xl">
                Geboren 1971 in Steyr. Verheiratet, Mutter von Paula und Lenz.
                Naturliebhaberin.
              </p>
            </div>
            <div className="mx-auto md:mx-0">
              <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/HeideKinzelhofer02.jpg"
                  alt="Heide Kinzelhofer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Ausbildung */}
            <div>
              <h2 className="font-serif text-2xl text-warm-800 mb-6">
                Ausbildung
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Psychologie",
                    place: "Universität Wien",
                  },
                  {
                    title: "Tanzpädagogik",
                    place: "Konservatorium Wien",
                  },
                  {
                    title: "Release Technique",
                    place: "New York",
                  },
                  {
                    title: "Weiterbildungen",
                    place: "Tanzquartier Wien & München",
                  },
                  {
                    title: "Yoga",
                    place:
                      "Über 20 Jahre Erfahrung, mit Trainern aus New York, Thailand und Österreich",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-lg bg-warm-50"
                  >
                    <div className="w-1 rounded-full bg-sky-400 shrink-0" />
                    <div>
                      <h3 className="font-medium text-warm-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-warm-500">{item.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Berufliches */}
            <div>
              <h2 className="font-serif text-2xl text-warm-800 mb-6">
                Berufliches
              </h2>

              <div className="mb-8">
                <h3 className="font-medium text-warm-700 mb-3">
                  Engagements als Tänzerin
                </h3>
                <p className="text-warm-600 leading-relaxed mb-2">
                  Bei Dans.Kias, Willi Dorner und Georg Blaschke. Auftritte in
                  mehreren europäischen Ländern und New York.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-medium text-warm-700 mb-3">
                  Unterrichtstätigkeit
                </h3>
                <ul className="space-y-2 text-warm-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    Yogahome 22, Wien
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    Tanzquartier Wien
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    Verschiedene Schulen
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    Pädagogische Hochschule Wien und Baden
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-sky-50 border border-sky-200">
                <p className="text-sm text-sky-700">
                  Mitglied der Berufsvereinigung für Zeitgenössische
                  Tanzpädagogik
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
