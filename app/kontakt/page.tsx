export const metadata = {
  title: "Kontakt | Heide Kinzelhofer",
  description:
    "Kontaktieren Sie Heide Kinzelhofer für Yoga und Kindertanz im 22. Bezirk, Wien.",
};

export default function Kontakt() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-warm-100 via-warm-50 to-sky-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-warm-800 mb-6">
            Kontakt
          </h1>
          <p className="text-warm-600 text-lg max-w-xl mx-auto">
            Ich freue mich auf Ihre Nachricht.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-warm-50 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-warm-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-warm-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-warm-800 mb-2">
                Telefon
              </h3>
              <a
                href="tel:+4369911445712"
                className="text-warm-600 hover:text-warm-700 transition-colors"
              >
                0699 / 11 44 57 12
              </a>
            </div>

            {/* Email */}
            <div className="bg-warm-50 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-warm-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-warm-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-warm-800 mb-2">E-Mail</h3>
              <a
                href="mailto:heide.kinzelhofer@gmx.at"
                className="text-warm-600 hover:text-warm-700 transition-colors text-sm"
              >
                heide.kinzelhofer@gmx.at
              </a>
            </div>

            {/* Address */}
            <div className="bg-warm-50 rounded-2xl p-8 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-warm-100 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-warm-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-warm-800 mb-2">
                Adresse
              </h3>
              <p className="text-warm-600 text-sm">
                Schillochweg 43
                <br />
                1220 Wien
              </p>
            </div>
          </div>

          {/* Kursort */}
          <div className="mt-12 bg-sky-50 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="font-serif text-2xl text-warm-800 mb-2">Kursort</h2>
            <p className="text-warm-700 font-medium text-lg">Yogahome 22</p>
            <p className="text-warm-500">Pappelweg 3, 1220 Wien</p>
          </div>

          {/* Credits */}
          <div className="mt-12 text-center text-sm text-warm-400 space-y-1">
            <p>
              Grafik & Webdesign: Theresia Winter | Logos: Petra Leimhofer &
              Theresia Winter
            </p>
            <p>
              Fotos: Petra Leimhofer, Heide Kinzelhofer, Bernadette Al Achour
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
