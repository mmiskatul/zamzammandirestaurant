import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/data/restaurant";

const title = "Dining Experience — Zam Zam Mandi Restaurant Dubai";
const description =
  "Arrive, choose, gather and enjoy: the Arabian dining experience at Zam Zam Mandi Restaurant in Nadd Al Hamar, Dubai.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const steps = [
  {
    n: "01",
    label: "Arrive",
    title: "A warm Arabian welcome.",
    text: "Lantern light, carved wood and the scent of smoked rice greet you at the door.",
    img: images.interior,
  },
  {
    n: "02",
    label: "Choose",
    title: "Mandi, Haneeth, Madbee and more.",
    text: "Pick your meat and your method — smoked, buried or grilled — and let the kitchen do the rest.",
    img: images.madbee,
  },
  {
    n: "03",
    label: "Gather",
    title: "Built for families and groups.",
    text: "Large shared platters, table seating and traditional floor seating for longer evenings.",
    img: images.familyDining,
  },
  {
    n: "04",
    label: "Enjoy",
    title: "Traditional flavours, generous portions.",
    text: "Finish with luqaimat and Adeni tea, the way an Arabian meal should end.",
    img: images.luqaimat,
  },
];

function ExperiencePage() {
  return (
    <>
      <PageHero
        label="The Experience"
        title="An evening at Zam Zam Mandi"
        subtitle="More than a meal — an Arabian dining experience from the first cup of tea to the last."
        image={images.familyDining}
      />

      {steps.map((s) => (
        <section key={s.n} className="relative h-[80vh] min-h-[30rem] overflow-hidden">
          <img
            src={s.img}
            alt={s.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="veil absolute inset-0" />
          <div className="relative mx-auto flex h-full max-w-[88rem] items-end px-5 pb-16 md:px-10 md:pb-24">
            <Reveal className="max-w-xl">
              <p className="font-display text-5xl text-primary/70">{s.n}</p>
              <p className="label-caps mt-4">{s.label}</p>
              <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.text}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="py-20 text-center">
        <Reveal>
          <Link
            to="/reservation"
            className="inline-block bg-primary px-9 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground"
          >
            Reserve a Table
          </Link>
        </Reveal>
      </section>
    </>
  );
}