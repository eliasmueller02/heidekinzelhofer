import Image from "next/image";
import Link from "next/link";
import {
  PageTitle,
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
      <PageTitle>Hatha-Yoga</PageTitle>

      <div className="mt-8 lg:flex lg:items-start lg:gap-12">
        <div className="min-w-0 flex-1">
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
                an (auch mit Blöcken und Hilfsmitteln) &ndash; und nicht
                umgekehrt. So wird Yoga zu einer Quelle des Wohlbefindens, das
                sich auch jenseits der &bdquo;Matte&ldquo; abspielt, und uns
                Gelassenheit und innere Ruhe gibt.
              </p>
            </Prose>
          </div>
        </div>

        <Figure
          src="/yoga/yoga-hero.jpg"
          alt="Heide tanzt in der Abendsonne am Wasser, die Arme weit nach oben geöffnet"
          ratio="aspect-[2/3]"
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
            <p>
              Durch die tiefe Ruhe, die im eigenen Selbst wieder spürbar wird,
              ist es möglich, gelassen und zuversichtlich den Herausforderungen
              des Lebens zu begegnen. Ist das nicht gut?
            </p>
          </Prose>
        </div>
      </section>

      {/* Bewegung am Wasser – Abendlicht-Serie */}
      <div className="mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
        <Image
          src="/yoga/yoga-7722.jpg"
          alt="Heide von hinten, die Arme erhoben, ein Bein angewinkelt – am Schilfufer"
          width={933}
          height={1400}
          sizes="(max-width: 640px) 100vw, 336px"
          className="h-auto w-full"
        />
        <Image
          src="/yoga/yoga-7756.jpg"
          alt="Heide im Profil, die Arme über den Kopf gestreckt, im letzten Abendlicht"
          width={933}
          height={1400}
          sizes="(max-width: 640px) 100vw, 336px"
          className="h-auto w-full"
        />
        <Image
          src="/yoga/yoga-7713.jpg"
          alt="Heide bewegt sich lächelnd am Ufer, ein Arm weit nach vorn gestreckt"
          width={1400}
          height={933}
          sizes="(max-width: 640px) 100vw, 672px"
          className="h-auto w-full sm:col-span-2"
        />
      </div>

      <section className="mt-16">
        <Heading>Aufbau einer Yogaklasse</Heading>
        <div className="mt-5">
          <Prose>
            <p>
              Meine Yogaklassen sind oft lustig, abwechslungsreich und spannen
              einen guten Bogen: Asanas &ndash; Körperübungen, Pranayama
              &ndash; Atemübungen, Meditation und Mantrasingen zum Abschluss.
            </p>
          </Prose>
        </div>
      </section>

      <Sketch
        src="/skizzen/uebungsfolge-1.png"
        alt="Handgezeichnete Skizze einer Yoga-Übungsfolge: vom Stehen über Vorbeuge und Stütz bis zum herabschauenden Hund"
        width={1800}
        height={315}
        className="mt-16 max-w-2xl"
      />
      <Sketch
        src="/skizzen/kindertanz.png"
        alt="Handgezeichnete Figur mit Krone und zwei Fabelwesen – der Schluss der Skizzenbuchseite"
        width={665}
        height={702}
        caption="Aus meinem Skizzenbuch: eine Übungsfolge"
        className="mt-4 max-w-[9rem]"
      />

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
