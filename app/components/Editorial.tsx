import Image from "next/image";

/* Seitentitel – Cormorant-Display, wie das Überschrift-Element der Referenz */
export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[2rem] font-medium leading-tight tracking-tight text-ink sm:text-[2.5rem]">
      {children}
    </h2>
  );
}

/* Kleinere Zwischenüberschrift */
export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
      {children}
    </h3>
  );
}

/* Handschriftliches Zitat in Stift-Blau – wie die Skizzen-Notizen */
export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-hand text-[1.7rem] leading-snug text-pen sm:text-[2rem]">
      {children}
    </p>
  );
}

/* Schmale Serifen-Textspalte */
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-md space-y-5 font-serif text-[16px] leading-[1.8] text-ink-soft [text-wrap:pretty]">
      {children}
    </div>
  );
}

/* Bild rechts neben der Textspalte */
export function Figure({
  src,
  alt,
  caption,
  ratio = "aspect-[4/5]",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <figure className="mt-10 w-full max-w-[16rem] shrink-0 lg:mt-1">
      <div className={`relative ${ratio} overflow-hidden bg-rule/40`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 16rem"
          className="object-cover"
          priority={priority}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 font-serif text-[13px] italic text-ink-faint">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* Freigestellte Skizze (transparentes PNG) – liegt direkt auf dem Papier */
export function Sketch({
  src,
  alt,
  width,
  height,
  caption,
  className = "mt-12 max-w-2xl",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={`w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
      />
      {caption && (
        <figcaption className="mt-2 font-serif text-[13px] italic text-ink-faint">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* Reservierter Bildplatz – wird später durch echte Fotos ersetzt */
export function FigurePlaceholder({
  ratio = "aspect-[3/2]",
  className = "mt-12 max-w-md",
}: {
  ratio?: string;
  className?: string;
}) {
  return (
    <figure aria-hidden className={`w-full ${className}`}>
      <div
        className={`flex ${ratio} items-center justify-center border border-rule bg-rule/15`}
      >
        <span className="font-serif text-[13px] italic text-ink-faint">
          Platz für ein Bild
        </span>
      </div>
    </figure>
  );
}
