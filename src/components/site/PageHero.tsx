import { Reveal } from "./Reveal";

export function PageHero({
  label,
  title,
  subtitle,
  image,
}: {
  label: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pb-16 pt-40 md:min-h-[70vh] md:pb-24">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="veil absolute inset-0" />
      <div className="relative mx-auto w-full max-w-[88rem] px-5 md:px-10">
        <Reveal>
          <p className="label-caps">{label}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}