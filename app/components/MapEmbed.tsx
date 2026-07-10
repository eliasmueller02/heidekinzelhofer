"use client";

import { useState } from "react";

const ADRESSE = "Pappelweg 3, 1220 Wien";

/* Datenschutzfreundliche Google-Maps-Einbindung:
   Die Karte lädt erst nach einem Klick, vorher fließen keine Daten an Google. */
export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="flex aspect-[3/2] w-full max-w-md flex-col items-center justify-center gap-3 border border-rule bg-rule/15 p-6 text-center">
        <p className="font-serif text-[15px] text-ink-soft">
          Yogahome 22, {ADRESSE}
        </p>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="font-serif text-[15px] text-pen underline-offset-4 hover:underline"
        >
          Karte anzeigen (Google Maps)
        </button>
        <p className="font-serif text-[12px] italic text-ink-faint">
          Beim Anzeigen der Karte werden Daten an Google übertragen.
        </p>
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1s${encodeURIComponent(ADRESSE)}`}
      className="aspect-[3/2] w-full max-w-md border border-rule"
      loading="lazy"
      title={`Karte: Yogahome 22, ${ADRESSE}`}
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
