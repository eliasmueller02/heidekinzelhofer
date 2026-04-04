import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-warm-800 text-warm-100">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl text-white mb-3">
              Heide Kinzelhofer
            </h3>
            <p className="text-warm-300 text-sm leading-relaxed">
              Yoga & Kindertanz im 22. Bezirk, Wien
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-300 mb-3">
              Seiten
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Yoga
                </Link>
              </li>
              <li>
                <Link
                  href="/kindertanz"
                  className="hover:text-white transition-colors"
                >
                  Kindertanz
                </Link>
              </li>
              <li>
                <Link
                  href="/termine"
                  className="hover:text-white transition-colors"
                >
                  Termine & Kurszeiten
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-white transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-300 mb-3">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Schillochweg 43, 1220 Wien</li>
              <li>
                <a
                  href="tel:+4369911445712"
                  className="hover:text-white transition-colors"
                >
                  0699 / 11 44 57 12
                </a>
              </li>
              <li>
                <a
                  href="mailto:heide.kinzelhofer@gmx.at"
                  className="hover:text-white transition-colors"
                >
                  heide.kinzelhofer@gmx.at
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-warm-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-warm-400">
          <p>&copy; {new Date().getFullYear()} Heide Kinzelhofer</p>
          <Link
            href="/impressum"
            className="hover:text-white transition-colors"
          >
            Impressum & Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
