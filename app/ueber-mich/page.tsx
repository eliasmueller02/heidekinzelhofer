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
    "Erfahren Sie mehr über Heide Kinzelhofer - Yoga-Lehrerin und Tanzpädagogin in Wien.",
};

export default function UeberMich() {
  return (
    <article>
      <PageTitle>Über mich</PageTitle>

      <div className="mt-8 lg:flex lg:items-start lg:gap-12">
        <div className="min-w-0 flex-1">
          <Lead>Naturliebhaberin, Tänzerin, Yogalehrerin.</Lead>
          <div className="mt-7">
            <Prose>
              <p>
                Geboren 1971 in Steyr, verheiratet, Mutter von Paula und Lenz.
                Seit über zwanzig Jahren begleiten mich Tanz und Yoga &ndash;
                als Übende, als Tänzerin und als Lehrende.
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
        <Heading>Ausbildung</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Ich habe Psychologie an der Universität Wien und Tanzpädagogik am
              Konservatorium Wien studiert. In New York lernte ich die Release
              Technique kennen, Weiterbildungen führten mich ans Tanzquartier
              Wien und nach München.
            </p>
            <p>
              Yoga übe ich seit über zwanzig Jahren &ndash; gelernt habe ich
              bei Trainerinnen und Trainern aus New York, Thailand und
              Österreich.
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
              Ich unterrichte im Yogahome 22 in Wien, am Tanzquartier Wien, an
              verschiedenen Schulen sowie an den Pädagogischen Hochschulen Wien
              und Baden.
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
