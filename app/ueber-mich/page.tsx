import Image from "next/image";
import {
  PageTitle,
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
      <PageTitle>Über mich</PageTitle>

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
              Ich unterrichte regelmäßig im Yogahome 22. Ich war Gastdozentin
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

      {/* Tanz am Wasser – Abendlicht-Serie */}
      <div className="mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3">
        <Image
          src="/yoga/yoga-hero.jpg"
          alt="Heide tanzt in der Abendsonne am Wasser, die Arme weit nach oben geöffnet"
          width={933}
          height={1400}
          sizes="(max-width: 640px) 100vw, 224px"
          className="h-auto w-full"
        />
        <Image
          src="/yoga/yoga-7722.jpg"
          alt="Heide von hinten, die Arme erhoben, ein Bein angewinkelt – am Schilfufer"
          width={933}
          height={1400}
          sizes="(max-width: 640px) 100vw, 224px"
          className="h-auto w-full"
        />
        <Image
          src="/yoga/yoga-7756.jpg"
          alt="Heide im Profil, die Arme über den Kopf gestreckt, im letzten Abendlicht"
          width={933}
          height={1400}
          sizes="(max-width: 640px) 100vw, 224px"
          className="h-auto w-full"
        />
        <Image
          src="/yoga/yoga-7713.jpg"
          alt="Heide bewegt sich lächelnd am Ufer, ein Arm weit nach vorn gestreckt"
          width={1400}
          height={933}
          sizes="(max-width: 640px) 100vw, 672px"
          className="h-auto w-full sm:col-span-3"
        />
      </div>
    </article>
  );
}
