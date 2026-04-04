interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="font-serif text-4xl md:text-5xl text-warm-800 mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="text-warm-500 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto w-16 h-0.5 bg-warm-300" />
    </div>
  );
}
