import Image from "next/image";
import {
  Heading,
  Lead,
  Prose,
  Figure,
} from "../components/Editorial";

export const metadata = {
  title: "Über mich | Heide Kinzelhofer",
  description:
    "Erfahren Sie mehr über Heide Kinzelhofer - Yogalehrerin, Tänzerin und Craniosacraltherapeutin in Wien.",
};

export default function UeberMich() {
  return (
    <article>
      <h1 className="sr-only">Über mich</h1>

      <div className="mt-8 lg:flex lg:items-start lg:gap-12">
        <div className="min-w-0 flex-1">
          <Lead>Yogalehrerin, Tänzerin, Craniosacraltherapeutin.</Lead>
          <div className="mt-7">
            <Prose>
              <p>
                Ich bin 1971 in Steyr geboren. Gemeinsam mit meinem Mann
                erfreuen wir uns an unserer Tochter Paula und unserem Sohn Lenz.
              </p>
              <p>
                Ich hatte sehr bald schon den Wunsch, Tänzerin zu werden. Im
                Laufe meiner Ausbildungen und meines Berufes als Tänzerin wurde
                mir die Verbindung von tiefer Ruhe und bewusster Bewegung immer
                wichtiger. Dieses Interesse führte mich in die reiche Welt des
                Yoga.
              </p>
              <p>
                Seit über 30 Jahren begleiten mich Tanz und Yoga &ndash; als
                Übende, als Tänzerin und als Lehrende.
              </p>
            </Prose>
          </div>
        </div>

        <Figure
          src="/UeberMich01.jpg"
          alt="Heide streckt lachend ein Bein zur Kamera – barfuß im hohen Gras, in der Abendsonne"
          ratio="aspect-[2/3]"
          priority
        />
      </div>

      {/* Tanz am Wasser – vier gleich große Bilder über die ganze Seite */}
      <div className="mt-14 grid grid-cols-2 gap-4 md:-ml-[15.5rem] md:grid-cols-4 md:gap-6">
        {[
          {
            src: "/yoga/yoga-hero.jpg",
            alt: "Heide tanzt in der Abendsonne am Wasser, die Arme weit nach oben geöffnet",
          },
          {
            src: "/yoga/yoga-7722.jpg",
            alt: "Heide von hinten, die Arme erhoben, ein Bein angewinkelt – am Schilfufer",
          },
          {
            src: "/yoga/yoga-7756.jpg",
            alt: "Heide im Profil, die Arme über den Kopf gestreckt, im letzten Abendlicht",
          },
          {
            src: "/yoga/yoga-7713.jpg",
            alt: "Heide bewegt sich lächelnd am Ufer, ein Arm weit nach vorn gestreckt",
          },
        ].map((bild) => (
          <div
            key={bild.src}
            className="relative aspect-[3/4] overflow-hidden bg-rule/40"
          >
            <Image
              src={bild.src}
              alt={bild.alt}
              fill
              sizes="(max-width: 768px) 50vw, 220px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <section className="mt-14">
        <Heading>Bildung</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Ich habe Psychologie an der Universität Wien und Tanzpädagogik am
              Konservatorium Wien studiert. Während meiner Zeit in New York
              lernte ich Release Technique und Susan Klein Technique, die mir
              angewandte anatomische Kenntnisse und Bewegungsökonomie
              vermittelten. Zahlreiche Weiterbildungen führten mich ans
              Tanzquartier Wien und nach München.
            </p>
            <p>
              Folgende LehrerInnen waren in meiner Yogaausbildung wichtig: unter
              anderem Mia Lawrence (Kundalini Yoga, New York), Paul Dallaghan
              (Ashtanga Yoga), Richard Freeman, David Swenson, Sri Louise,
              Hannes Hochmeister (Iyengar Yoga), Eberhard Bärr (Meditation),
              Florian Palzinsky (Meditation), Sriram (Yogatherapie) und Horst
              Rinnersberger (Pranayama).
            </p>
          </Prose>
        </div>
      </section>

      <section className="mt-14">
        <Heading>Berufliches</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Als Tänzerin war ich unter anderem bei Dans.Kias, Willi Dorner
              und Georg Blaschke engagiert; Auftritte führten mich quer durch
              Europa und nach New York.
            </p>
            <p>
              Ich unterrichte regelmäßig im Yogahome 22 in Wien. Ich war
              Gastdozentin
              im Tanzquartier Wien und bei den Roten Nasen Clowndoctors.
              Aktuell bin ich Lehrbeauftragte an den Pädagogischen Hochschulen
              Wien und Baden.
            </p>
            <p className="italic">
              Ich bin Mitglied der Berufsvereinigung für Zeitgenössische
              Tanzpädagogik.
            </p>
          </Prose>
        </div>
      </section>

    </article>
  );
}
