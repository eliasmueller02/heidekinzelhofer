import Link from "next/link";
import {
  PageTitle,
  Heading,
  Lead,
  Prose,
  Figure,
  Sketch,
} from "./components/Editorial";

export default function Home() {
  return (
    <article>
      <PageTitle>Hatha-Yoga</PageTitle>

      <div className="mt-8 lg:flex lg:items-start lg:gap-12">
        <div className="min-w-0 flex-1">
          <Lead>Körper und Geist in Einklang.</Lead>

          <div className="mt-7">
            <Prose>
              <p>
                Ich unterrichte ein körperbetontes Hatha-Yoga, das die Übenden
                in ihrer Gesamtheit &ndash; Körper und Geist &ndash; belebt,
                stärkt und entspannt.
              </p>
              <p>
                Dabei lege ich Wert auf eine anatomisch genaue Ausführung der
                Körperpositionen und unterstütze im Unterricht die Achtsamkeit
                sich selbst gegenüber. Neben all dem körperlichen Tun ist die
                Arbeit an der Qualität des Atems, die Mühelosigkeit und
                Sanftheit des Atems, entscheidend dafür, dass die Yoga-Übenden
                Fortschritte machen.
              </p>
              <p>
                Dynamischere Teile wechseln sich mit ruhigeren ab, sodass
                einerseits dem Bedürfnis nach Bewegung Rechnung getragen wird
                und andererseits das Loslassen und Entspannen spürbar wird.
              </p>
              <p>
                Die Asanas passe ich den körperlichen Möglichkeiten der Übenden
                an (auch mit Blöcken und Hilfsmitteln) &ndash; und nicht
                umgekehrt. So wird Yoga zu einer Quelle des Wohlbefindens, das
                sich auch jenseits der &bdquo;Matte&ldquo; abspielt, und uns
                Gelassenheit und innere Ruhe gibt.
              </p>
            </Prose>
          </div>
        </div>

        <Figure
          src="/HeideKinzelhofer01.jpg"
          alt="Heide Kinzelhofer in einer Yoga-Pose am See"
          priority
        />
      </div>

      <section className="mt-16">
        <Heading>Wirkung von Yoga</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Regelmäßiges Üben verbessert die Aufrichtung, vergrößert das
              Atemvolumen, schult die Konzentration und stärkt die Körpermitte.
              Durchblutung und Verdauung werden angeregt, Stress lässt sich
              leichter bewältigen &ndash; so entsteht ein ganzheitliches
              Wohlbefinden, das weit über die Yogastunde hinaus trägt.
            </p>
          </Prose>
        </div>
      </section>

      <section className="mt-16">
        <Heading>Aufbau einer Yogaklasse</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Jede Klasse beginnt mit dem Ankommen und Einstimmen, um zur Ruhe
              zu kommen. Darauf folgen die Pranayamapraxis &ndash; Atemübungen
              für die innere Balance &ndash; und die Asanapraxis, die
              Körperübungen in Achtsamkeit. Den Abschluss bildet eine
              Meditation mit Tiefenentspannung.
            </p>
          </Prose>
        </div>
      </section>

      <Sketch
        src="/skizzen/uebungsfolge-1.png"
        alt="Handgezeichnete Skizze einer Yoga-Übungsfolge: vom Stehen über Vorbeuge und Stütz bis zum herabschauenden Hund"
        width={1800}
        height={315}
        caption="Aus meinem Skizzenbuch: eine Übungsfolge"
        className="mt-16 max-w-2xl"
      />

      <section className="mt-16 max-w-md">
        <p className="font-serif text-[16px] leading-[1.8] text-ink-soft">
          Der Einstieg ist jederzeit möglich. Es sind keine Grundkenntnisse
          erforderlich &ndash; es gibt Abstufungen innerhalb der Klassen. Die{" "}
          <Link
            href="/termine"
            className="text-pen underline-offset-4 hover:underline"
          >
            Kurszeiten
          </Link>{" "}
          finden Sie unter Termine.
        </p>
      </section>
    </article>
  );
}
