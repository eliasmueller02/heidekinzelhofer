import {
  PageTitle,
  Heading,
  Lead,
  Prose,
  Figure,
  FigurePlaceholder,
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
                Geboren 1971 in Steyr. Gemeinsam mit meinem Mann erfreuen wir
                uns an unserer Tochter Paula und unserem Sohn Lenz.
              </p>
              <p>
                Ich hatte immer den Wunsch, Tänzerin zu werden, und im Laufe
                meiner Ausbildungen und meinem Beruf als Tänzerin wurde mir die
                Verbindung von tiefer Ruhe und bewusster Bewegung immer
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
              Konservatorium Wien studiert. In New York lernte ich die Release
              Technique und die Susan Klein Technique kennen, zahlreiche
              Weiterbildungen führten mich ans Tanzquartier Wien und nach
              München.
            </p>
            <p>
              Folgende LehrerInnen waren in meiner Ausbildung wichtig: unter
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
              Als Tänzerin war ich bei Dans.Kias, Willi Dorner und Georg
              Blaschke engagiert; Auftritte führten mich in mehrere europäische
              Länder und nach New York.
            </p>
            <p>
              Ich unterrichte regelmäßig im Yogahome 22. Ich bin Gastdozentin
              im Tanzquartier Wien und bei den Roten Nasen Clowndoctors sowie
              Lehrbeauftragte an den Pädagogischen Hochschulen Wien und Baden.
            </p>
            <p className="italic">
              Ich bin Mitglied der Berufsvereinigung für Zeitgenössische
              Tanzpädagogik.
            </p>
          </Prose>
        </div>
      </section>

      <FigurePlaceholder className="mt-16 max-w-md" />
    </article>
  );
}
