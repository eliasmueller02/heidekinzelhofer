import Image from "next/image";
import Link from "next/link";
import {
  Heading,
  Lead,
  Prose,
  Figure,
  Sketch,
} from "../components/Editorial";

export const metadata = {
  title: "Yoga | Heide Kinzelhofer",
  description:
    "Körperbetontes Hatha-Yoga im Yogahome 22, 1220 Wien. Anatomisch genaue Ausführung, Achtsamkeit und die Qualität des Atems stehen im Mittelpunkt.",
};

export default function Yoga() {
  return (
    <article>
      <h1 className="sr-only">Hatha-Yoga</h1>

      <div className="mt-8">
        <div className="min-w-0">
          <Lead>
            Yoga ist eine tiefgreifende Technik, die, regelmäßig und über die
            Zeit praktiziert, Heilung in Körper, Geist und Seele bewirkt.
          </Lead>

          <div className="mt-7">
            <Prose>
              <p>
                Ich unterrichte ein körperbetontes Hatha-Yoga, das die Übenden
                in ihrer Gesamtheit belebt, stärkt und entspannt.
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
                an (auch mit Blöcken und Hilfsmitteln) - und nicht
                umgekehrt. So wird Yoga zu einer Quelle des Wohlbefindens, das
                sich auch jenseits der &bdquo;Matte&ldquo; abspielt, und uns
                Gelassenheit und innere Ruhe gibt.
              </p>
            </Prose>
          </div>
        </div>

      </div>

      <div className="mt-12 max-w-2xl">
        <Image
          src="/yoga/yoga-7874.jpg"
          alt="Tiefe seitliche Dehnung im weiten Schritt auf der roten Matte im Garten, der Blick nach oben"
          width={1400}
          height={933}
          priority
          sizes="(max-width: 640px) 100vw, 672px"
          className="h-auto w-full"
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
              leichter bewältigen - so entsteht ein ganzheitliches
              Wohlbefinden, das weit über die Yogastunde hinaus trägt.
            </p>
            <p>
              Durch die tiefe Ruhe, die im eigenen Selbst wieder spürbar wird,
              ist es möglich, gelassen und zuversichtlich den Herausforderungen
              des Lebens zu begegnen und in Harmonie mit sich und der Welt zu
              sein. Ist das nicht gut?
            </p>
          </Prose>
        </div>
      </section>

      <section className="mt-16">
        <Heading>Aufbau einer Yogaklasse</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Meine Yogaklassen sind oft lustig, abwechslungsreich und spannen
              einen guten Bogen:
            </p>
            <p>
              Asanas - Körperübungen
              <br />
              Pranayama - Atemübungen
              <br />
              Meditation
              <br />
              Mantrasingen zum Abschluss
            </p>
          </Prose>
        </div>
      </section>

      {/* Aus dem Skizzenbuch: beide Zeilen der Übungsfolge, die Krone als Schluss */}
      <Sketch
        src="/skizzen/folge-1.png"
        alt="Handgezeichnete Skizze einer Yoga-Übungsfolge: vom Stehen über Vorbeuge und Stütz bis zum herabschauenden Hund"
        width={1400}
        height={342}
        className="mt-16 max-w-2xl"
      />
      <Sketch
        src="/skizzen/folge-2.png"
        alt="Fortsetzung der Übungsfolge: Vorbeuge, Stütz, Kniestand und Stand"
        width={1400}
        height={418}
        className="mt-6 max-w-2xl"
      />
      <div className="mt-4 max-w-2xl sm:flex sm:items-end sm:gap-8">
        <Sketch
          src="/skizzen/meditation.png"
          alt="Gezeichnete Figur im Sitz, die Arme geöffnet - der Schluss der Übungsfolge"
          width={470}
          height={484}
          caption="Aus meinem Skizzenbuch: eine Übungsfolge"
          className="max-w-[9rem] shrink-0"
        />
        <Image
          src="/skizzen/zitat.png"
          alt="Handgeschrieben: You are the sky, anything else is just the weather. (Pema Chödrön)"
          width={1200}
          height={168}
          sizes="(max-width: 640px) 100vw, 380px"
          className="mt-6 h-auto w-full max-w-[24rem] sm:mb-6 sm:mt-0"
        />
      </div>

      {/* Asanapraxis im Garten */}
      <div className="mt-12 max-w-xl">
        <Image
          src="/yoga/yoga-7866.jpg"
          alt="Kamel-Pose (Ustrasana): Rückbeuge im Kniestand auf der roten Matte im Garten"
          width={1400}
          height={933}
          sizes="(max-width: 640px) 100vw, 576px"
          className="h-auto w-full"
        />
      </div>

      <section className="mt-16 max-w-2xl lg:flex lg:items-start lg:gap-12">
        <div className="min-w-0 flex-1">
          <p className="font-serif text-[16px] leading-[1.8] text-ink-soft">
            Der Einstieg ist jederzeit möglich. Alle Körper sind willkommen. Es
            sind keine Grundkenntnisse erforderlich - es gibt Abstufungen
            innerhalb der Klassen. Die{" "}
            <Link
              href="/termine"
              className="text-pen underline-offset-4 hover:underline"
            >
              Kurszeiten
            </Link>{" "}
            finden Sie unter Termine.
          </p>
        </div>
        <Figure
          src="/yoga/yoga-7882.jpg"
          alt="Kopfstand (Shirshasana) vor einer Wand aus wildem Wein"
          ratio="aspect-[2/3]"
          className="mt-10 max-w-[15rem] shrink-0 lg:mt-0"
        />
      </section>
    </article>
  );
}
