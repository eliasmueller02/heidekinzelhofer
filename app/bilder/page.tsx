import Image from "next/image";

export const metadata = {
  title: "Bilder | Heide Kinzelhofer",
  description:
    "Bilderstrecke: Heide Kinzelhofer mit einem Kranz aus Pfingstrosen.",
};

const bilder = [
  { nr: 1, alt: "Heide lacht herzlich in die Kamera, umrahmt von Pfingstrosen" },
  { nr: 2, alt: "Heide blickt mit verschmitztem Lächeln nach oben" },
  { nr: 3, alt: "Heide blickt lächelnd nach oben, die Hände vor der Brust gefaltet" },
  { nr: 4, alt: "Heide mit roter Brille, breitem Grinsen und gefalteten Händen" },
  { nr: 5, alt: "Heide lacht mit verschränkten Armen und blickt zur Seite" },
  { nr: 6, alt: "Heide mit roter Brille blickt skeptisch zur Seite, die Hände in Namaste" },
  { nr: 7, alt: "Heide mit geschlossenen Augen und Schmollmund, die Arme verschränkt" },
  { nr: 8, alt: "Heide lächelt sanft unter einem Kranz aus Pfingstrosen" },
  {
    nr: 9,
    alt: "Heide hebt lachend beide Arme vor einer Wand aus wildem Wein",
    landscape: true,
  },
];

export default function Bilder() {
  return (
    <article>
      <h1 className="sr-only">Bilderstrecke</h1>

      <div className="mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2">
        {bilder.map((bild) => (
          <figure
            key={bild.nr}
            className={bild.landscape ? "sm:col-span-2" : undefined}
          >
            <Image
              src={`/bilder/pfingstrosen-${String(bild.nr).padStart(2, "0")}.jpg`}
              alt={bild.alt}
              width={bild.landscape ? 1400 : 933}
              height={bild.landscape ? 933 : 1400}
              sizes="(max-width: 640px) 100vw, 336px"
              className="h-auto w-full"
              priority={bild.nr <= 2}
            />
          </figure>
        ))}
      </div>
    </article>
  );
}
