import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/data/restaurant";

const title = "About — Zam Zam Mandi Restaurant, Nadd Al Hamar Dubai";
const description =
  "The story behind Zam Zam Mandi Restaurant: Yemeni culinary roots, slow-cooked kitchen traditions and generous Arabian hospitality in Nadd Al Hamar, Dubai.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const sections = [
  {
    label: "Our Roots",
    title: "Yemeni cooking, carried forward.",
    text: "Mandi began in the highlands of Yemen — meat and rice cooked in a sealed earthen oven until smoke and spice settle into every grain. We keep that method, and the patience it asks for.",
    img: images.haneeth,
  },
  {
    label: "Our Kitchen",
    title: "Slow heat, whole spices, long-grain rice.",
    text: "Cardamom, clove, black lime and saffron are toasted and ground in-house. Meat is marinated overnight and cooked low until it gives way. Rice is finished in the same smoke that flavours the meat.",
    img: images.heroMandi,
  },
  {
    label: "Our Hospitality",
    title: "Generosity is part of the recipe.",
    text: "Platters arrive built for sharing. Tea keeps coming. Families settle in for the evening — that is how Yemeni dining is meant to feel, and how we serve it.",
    img: images.familyDining,
  },
  {
    label: "Our Home",
    title: "Nadd Al Hamar, Dubai.",
    text: "On Rebat Street near Bel Remaitha Club, our dining room welcomes neighbours, families and travellers daily from 11:00 AM until midnight.",
    img: images.interior,
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        label="About Zam Zam Mandi"
        title="A Tradition Worth Sharing"
        subtitle="Authentic Yemeni cuisine, prepared the traditional way and served with Arabian warmth."
        image={images.interior}
      />

      {sections.map((s, i) => (
        <section
          key={s.label}
          className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28"
        >
          <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              className={`h-[26rem] w-full object-cover md:h-[36rem] ${i % 2 === 0 ? "arch" : ""}`}
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="label-caps">{s.label}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">{s.title}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{s.text}</p>
          </Reveal>
        </section>
      ))}

      <section className="border-t border-border bg-card/40 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl">Join us for dinner</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4 px-5">
            <Link
              to="/reservation"
              className="bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="border border-primary/60 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary"
            >
              View Menu
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}