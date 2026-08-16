import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images, restaurant } from "@/data/restaurant";

const title = "Private & Family Dining — Zam Zam Mandi Restaurant Dubai";
const description =
  "Private seating, family areas and group dining for celebrations and gatherings at Zam Zam Mandi Restaurant, Nadd Al Hamar, Dubai.";

export const Route = createFileRoute("/private-dining")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/private-dining" },
    ],
    links: [{ rel: "canonical", href: "/private-dining" }],
  }),
  component: PrivateDiningPage,
});

function PrivateDiningPage() {
  return (
    <>
      <PageHero
        label="Private & Family Dining"
        title="Gather Around the Table"
        subtitle="Whether it's a family dinner, group gathering, celebration, or special occasion, create a memorable Arabian dining experience together."
        image={images.familyDining}
      />

      <section className="mx-auto grid max-w-[88rem] gap-10 px-5 py-20 md:grid-cols-3 md:px-10">
        {[
          {
            title: "Private Seating",
            text: "Screened majlis-style corners for a quieter evening with your party.",
            img: images.interior,
          },
          {
            title: "Family Friendly",
            text: "Comfortable family areas with space for children and larger tables.",
            img: images.familyDining,
          },
          {
            title: "Group Dining",
            text: "Shared mandi platters built for celebrations and long gatherings.",
            img: images.heroMandi,
          },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <div className="overflow-hidden">
              <img
                src={c.img}
                alt={c.title}
                loading="lazy"
                className="h-[24rem] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
            <h2 className="mt-6 text-[0.75rem] uppercase tracking-[0.26em] text-primary">{c.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-border bg-card/40 py-20">
        <Reveal className="mx-auto max-w-2xl px-5 text-center">
          <h2 className="font-display text-4xl md:text-5xl">Plan Your Visit</h2>
          <p className="mt-5 text-muted-foreground">
            Tell us the date, the time and the number of guests. Our team will call
            to confirm seating and arrange your platters.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              to="/reservation"
              className="bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground"
            >
              Request a Table
            </Link>
            <a
              href={restaurant.phoneHref}
              className="border border-primary/60 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary"
            >
              {restaurant.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}