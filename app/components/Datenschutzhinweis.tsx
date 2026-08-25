"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SCHLUESSEL = "hk-hinweis-gelesen";

/* Dezenter Datenschutz-Hinweis. Die Seite setzt keine Cookies; der
   Hinweis sagt genau das und braucht deshalb keine Zustimmung. Dass er
   gelesen wurde, merkt sich der Browser lokal – ohne Cookie. */
export default function Datenschutzhinweis() {
  const [sichtbar, setSichtbar] = useState(false);
  const [eingeblendet, setEingeblendet] = useState(false);

  useEffect(() => {
    let zeigen = true;
    try {
      zeigen = window.localStorage.getItem(SCHLUESSEL) !== "ja";
    } catch {
      /* Privater Modus o. Ä. – dann zeigen wir den Hinweis einfach an. */
    }
    if (!zeigen) return;

    /* Die Zustände werden aus Timern heraus gesetzt, nicht synchron im
       Effekt – so entstehen keine kaskadierenden Renders.
       Sanft einblenden bewusst als Übergang und nicht als Animation:
       Der Endzustand hängt an der Klasse, nicht am Ablauf – der Hinweis
       ist also auch dann sichtbar, wenn der Browser Animationen bremst. */
    const anzeigen = window.setTimeout(() => setSichtbar(true), 0);
    const einblenden = window.setTimeout(() => setEingeblendet(true), 900);
    return () => {
      window.clearTimeout(anzeigen);
      window.clearTimeout(einblenden);
    };
  }, []);

  if (!sichtbar) return null;

  const schliessen = () => {
    try {
      window.localStorage.setItem(SCHLUESSEL, "ja");
    } catch {
      /* Speichern nicht möglich – Hinweis verschwindet trotzdem. */
    }
    setSichtbar(false);
  };

  return (
    <div
      role="region"
      aria-label="Hinweis zum Datenschutz"
      className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-4 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none sm:px-6 sm:pb-6 ${
        eingeblendet ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-3 border border-rule bg-paper/95 px-5 py-4 shadow-[0_2px_20px_rgba(60,50,35,0.08)] backdrop-blur-sm sm:flex-row sm:items-center sm:gap-6">
        <p className="flex-1 font-serif text-[14px] leading-[1.7] text-ink-soft">
          Diese Seite verwendet keine Cookies und kein Tracking. Die
          Google-Maps-Karte lädt erst auf Klick. Mehr dazu in der{" "}
          <Link
            href="/datenschutz"
            className="text-pen underline-offset-4 hover:underline"
          >
            Datenschutzerklärung
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={schliessen}
          className="shrink-0 self-start border border-rule px-4 py-1.5 font-serif text-[14px] text-ink transition-colors hover:border-pen hover:text-pen focus-visible:outline-none focus-visible:border-pen focus-visible:text-pen sm:self-auto"
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
