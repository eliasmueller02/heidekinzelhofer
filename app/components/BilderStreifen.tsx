import Image from "next/image";

/* Schmaler Streifen der Pfingstrosen-Reihe. Sitzt im SiteFrame direkt
   unter dem Kopf, damit er über die volle Breite läuft und nicht mit
   der Navigationsspalte kollidiert. */
export default function BilderStreifen() {
  return (
    <div className="mt-8 grid grid-cols-5 gap-1.5 sm:grid-cols-9 sm:gap-2">
      {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
        <div
          key={n}
          className="relative aspect-[3/4] overflow-hidden bg-rule/40"
        >
          <Image
            src={`/bilder/pfingstrosen-${String(n).padStart(2, "0")}.jpg`}
            alt={
              n === 1 ? "Heide mit einem Kranz aus Pfingstrosen" : ""
            }
            fill
            sizes="(max-width: 640px) 20vw, 95px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
