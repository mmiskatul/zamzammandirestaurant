import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images, menu, menuCategories, restaurant } from "@/data/restaurant";

const title = "Menu — Zam Zam Mandi Restaurant, Nadd Al Hamar Dubai";
const description =
  "Explore the Zam Zam Mandi menu: Chicken Mandi, Mutton Haneeth, Madbee, grills, fish, rice, salads and Arabic desserts. Prices in AED.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Menu",
          name: "Zam Zam Mandi Menu",
          hasMenuSection: menuCategories.map((c) => ({
            "@type": "MenuSection",
            name: c,
            hasMenuItem: menu
              .filter((m) => m.category === c)
              .map((m) => ({
                "@type": "MenuItem",
                name: m.name,
                description: m.description,
                offers: { "@type": "Offer", price: m.price, priceCurrency: "AED" },
              })),
          })),
        }),
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.filter(
      (m) =>
        (active === "All" || m.category === active) &&
        (!q ||
          m.name.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          (m.arabic ?? "").includes(q)),
    );
  }, [active, query]);

  return (
    <>
      <PageHero
        label="The Menu"
        title="Authentic flavours from Yemen, served in Dubai."
        subtitle={`Average spend ${restaurant.priceRange} per person. All prices in AED.`}
        image={images.heroMandi}
      />

      {/* Signature feature */}
      <section className="mx-auto grid max-w-[88rem] items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-10">
        <Reveal>
          <img
            src={images.heroMandi}
            alt="Zam Zam signature mandi"
            loading="lazy"
            className="arch h-[26rem] w-full object-cover md:h-[34rem]"
          />
        </Reveal>
        <Reveal delay={100}>
          <p className="label-caps">Chef's Signature</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Zam Zam Signature Mandi</h2>
          <p className="mt-5 text-muted-foreground">
            Aromatic rice paired with tender meat, prepared with traditional Yemeni
            spices and served with fresh accompaniments.
          </p>
          <a
            href="#full-menu"
            className="mt-8 inline-block border border-primary/60 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary"
          >
            View Full Menu
          </a>
        </Reveal>
      </section>

      {/* Filters */}
      <section id="full-menu" className="border-y border-border bg-card/40 py-6">
        <div className="mx-auto flex max-w-[88rem] flex-col gap-4 px-5 md:flex-row md:items-center md:px-10">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 md:mx-0 md:flex-wrap md:px-0">
            {["All", ...menuCategories].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`shrink-0 border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative md:ms-auto md:w-64">
            <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes"
              aria-label="Search dishes"
              className="w-full border border-border bg-background py-2.5 ps-10 pe-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* Items */}
      <section className="mx-auto max-w-[88rem] px-5 py-16 md:px-10 md:py-24">
        {items.length === 0 ? (
          <p className="py-20 text-center text-muted-foreground">
            No dishes match your search.
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((dish, i) => (
              <Reveal key={dish.id} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col border border-border bg-card/40">
                  {dish.image ? (
                    <div className="overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        loading="lazy"
                        className="h-56 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl">{dish.name}</h3>
                      <span className="font-display text-lg text-primary">AED {dish.price}</span>
                    </div>
                    {dish.arabic ? (
                      <p className="mt-1 font-arabic text-lg text-secondary" dir="rtl">
                        {dish.arabic}
                      </p>
                    ) : null}
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {dish.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <div className="flex gap-2">
                        {(dish.tags ?? []).map((tag) => (
                          <span
                            key={tag}
                            className="border border-border px-2 py-1 text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to="/order"
                        className="text-[0.65rem] uppercase tracking-[0.2em] text-primary"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}