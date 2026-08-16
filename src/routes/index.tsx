import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { images, restaurant, signatureDishes } from "@/data/restaurant";
import { useLang } from "@/lib/lang";

const title = "Zam Zam Mandi Restaurant — Authentic Yemeni Mandi in Nadd Al Hamar, Dubai";
const description =
  "Authentic Yemeni Mandi, Haneeth and Madbee served with warm Arabian hospitality in Nadd Al Hamar, Dubai. Open daily 11:00 AM – 12:00 AM. Call +971 4 892 9060.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={images.heroMandi}
          alt="Chicken mandi served on a traditional brass platter"
          width={1920}
          height={1200}
          className="slow-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <div className="relative mx-auto w-full max-w-[88rem] px-5 pt-28 md:px-10">
          <Reveal>
            <p className="label-caps">{t("heroLabel")}</p>
            <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.02] text-foreground sm:text-6xl lg:text-8xl">
              {t("heroTitleA")}
              <br />
              <span className="text-secondary">{t("heroTitleB")}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("heroText")}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/menu"
                className="bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t("exploreMenu")}
              </Link>
              <Link
                to="/reservation"
                className="border border-primary/60 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary/10"
              >
                {t("reserve")}
              </Link>
              <a
                href={restaurant.maps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
              >
                {t("directions")} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
          Scroll to discover
        </p>
      </section>

      {/* INFO STRIP */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto grid max-w-[88rem] grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            "Authentic Yemeni Cuisine",
            "Family Friendly",
            "Dine-In & Takeaway",
            "Nadd Al Hamar, Dubai",
          ].map((item) => (
            <p
              key={item}
              className="px-5 py-6 text-center text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground md:text-[0.7rem]"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="mx-auto max-w-[88rem] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="label-caps">Signature Dishes</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            The Flavours We're Known For
          </h2>
          <p className="mt-5 text-muted-foreground">
            From slow-cooked meats to fragrant rice, every plate carries the warmth
            and tradition of Yemeni cuisine.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-12">
          {signatureDishes.map((dish, i) => {
            const spans = [
              "md:col-span-7",
              "md:col-span-5",
              "md:col-span-5",
              "md:col-span-7",
              "md:col-span-7",
              "md:col-span-5",
            ];
            const tall = i === 0 || i === 3;
            return (
              <Reveal key={dish.id} delay={(i % 2) * 120} className={spans[i]}>
                <Link to="/menu" className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 ${
                        tall ? "h-[26rem] md:h-[34rem]" : "h-[22rem] md:h-[28rem]"
                      }`}
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl">{dish.name}</h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {dish.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-primary">
                        View Menu <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                    <p className="shrink-0 font-display text-xl text-secondary">
                      AED {dish.price}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FEATURED HANEETH */}
      <section className="relative overflow-hidden">
        <div className="relative h-[85vh] min-h-[34rem]">
          <img
            src={images.haneeth}
            alt="Mutton haneeth slow cooked over spiced rice"
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-110 object-cover"
          />
          <div className="veil absolute inset-0" />
          <div className="relative mx-auto flex h-full max-w-[88rem] items-end px-5 pb-20 md:px-10">
            <Reveal className="max-w-2xl">
              <p className="label-caps">Mutton Haneeth</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-7xl">
                Slow-cooked.
                <br />
                Deeply flavoured.
                <br />
                <span className="text-primary">Unforgettable.</span>
              </h2>
              <p className="mt-6 max-w-lg text-muted-foreground">
                Tender meat, aromatic spices, and traditional preparation come
                together in one of our most loved dishes.
              </p>
              <Link
                to="/menu"
                className="mt-8 inline-flex items-center gap-2 border-b border-primary/50 pb-1 text-[0.72rem] uppercase tracking-[0.24em] text-primary"
              >
                Discover Haneeth <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <Reveal>
          <img
            src={images.interior}
            alt="Traditional Arabian majlis dining room"
            loading="lazy"
            className="arch h-[30rem] w-full object-cover md:h-[38rem]"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="label-caps">Our Story</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Rooted in Tradition.
            <br />
            Made for Dubai.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Zam Zam Mandi brings the warmth and character of traditional Yemeni
              dining to Nadd Al Hamar — rice smoked the old way, meat cooked slowly
              until it yields, and tables built for sharing.
            </p>
            <p>
              Our kitchen keeps to authentic preparation and quality ingredients,
              while our dining room is made for families, friends and long evenings
              in the company of good food.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-primary"
          >
            Discover Our Story <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </section>

      {/* DINING EXPERIENCE */}
      <section className="border-t border-border bg-card/40 py-24 md:py-32">
        <div className="mx-auto max-w-[88rem] px-5 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="label-caps">The Experience</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              More Than a Meal.
              <br />
              An Arabian Dining Experience.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Family Dining",
                text: "Comfortable surroundings designed for families and groups.",
                img: images.familyDining,
              },
              {
                title: "Traditional Seating",
                text: "Floor-style majlis seating for a truly authentic evening.",
                img: images.interior,
              },
              {
                title: "Warm Hospitality",
                text: "Welcoming service and generous Arabian portions, always.",
                img: images.heroMandi,
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <div className="overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-[24rem] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-[0.75rem] uppercase tracking-[0.26em] text-primary">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVATE DINING */}
      <section className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <Reveal>
          <p className="label-caps">Private & Family Dining</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            Gather Around the Table
          </h2>
          <p className="mt-6 text-muted-foreground">
            Whether it's a family dinner, group gathering, celebration, or special
            occasion, create a memorable Arabian dining experience together.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {["Private Seating", "Family Friendly", "Group Dining"].map((tag) => (
              <li
                key={tag}
                className="border border-border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] text-secondary"
              >
                {tag}
              </li>
            ))}
          </ul>
          <Link
            to="/private-dining"
            className="mt-9 inline-block bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground"
          >
            Plan Your Visit
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <img
            src={images.familyDining}
            alt="A family sharing a large mandi platter"
            loading="lazy"
            className="h-[30rem] w-full object-cover md:h-[38rem]"
          />
        </Reveal>
      </section>

      {/* REVIEWS */}
      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-[88rem] px-5 text-center md:px-10">
          <Reveal>
            <p className="label-caps">Loved by Dubai Diners</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Star className="h-6 w-6 fill-primary text-primary" />
              <span className="font-display text-5xl text-foreground">{restaurant.rating}</span>
            </div>
            <p className="mt-3 text-sm tracking-[0.2em] text-muted-foreground">
              {restaurant.reviewCount} REVIEWS ON GOOGLE
            </p>
            <p className="mx-auto mt-6 max-w-lg text-sm text-muted-foreground">
              Guest ratings are shown as published on Google Maps. Read what diners
              are saying about Zam Zam Mandi in Nadd Al Hamar.
            </p>
            <a
              href={restaurant.maps}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-primary"
            >
              See More Reviews <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="mx-auto max-w-[88rem] px-5 py-24 md:px-10">
        <Reveal className="text-center">
          <p className="label-caps">Follow the Experience</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">{restaurant.instagramHandle}</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[images.heroMandi, images.haneeth, images.luqaimat, images.ribs].map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="overflow-hidden">
                <img
                  src={src}
                  alt="Dishes at Zam Zam Mandi Restaurant"
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={restaurant.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-primary/60 px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary"
          >
            Follow Us on Instagram
          </a>
        </div>
      </section>
    </>
  );
}
