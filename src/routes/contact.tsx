import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { OpeningHours } from "@/components/site/OpeningHours";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images, restaurant } from "@/data/restaurant";

const title = "Contact & Location — Zam Zam Mandi Restaurant, Nadd Al Hamar Dubai";
const description =
  "Find Zam Zam Mandi Restaurant on Rebat St near Bel Remaitha Club, Nadd Al Hamar, Dubai. Call +971 4 892 9060. Open daily 11 AM – 12 AM.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact & Location"
        title="Find Us in Nadd Al Hamar"
        subtitle="Rebat St, near Bel Remaitha Club — open daily from 11:00 AM until midnight."
        image={images.interior}
      />

      <section className="mx-auto grid max-w-[88rem] gap-12 px-5 py-20 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="label-caps">Address</p>
          <address className="mt-4 not-italic font-display text-2xl leading-relaxed text-foreground md:text-3xl">
            {restaurant.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <div className="gold-rule my-8" />
          <div className="space-y-4 text-muted-foreground">
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <a href={restaurant.phoneHref} className="hover:text-primary">
                {restaurant.phone}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" /> Nadd Al Hamar, Dubai, UAE
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={restaurant.phoneHref}
              className="inline-flex items-center gap-2 bg-primary px-7 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call Restaurant
            </a>
            <a
              href={restaurant.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-primary/60 px-7 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-primary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={restaurant.maps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-7 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-secondary"
            >
              <Navigation className="h-4 w-4 text-primary" /> Get Directions
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <OpeningHours />
        </Reveal>
      </section>

      <section className="relative border-y border-border">
        <div className="relative mx-auto max-w-[88rem] px-5 py-14 md:px-10">
          <p className="label-caps">On the Map</p>
          <div className="mt-6 overflow-hidden border border-border">
            <iframe
              title="Zam Zam Mandi Restaurant location map"
              src="https://www.google.com/maps?q=Zam+Zam+Mandi+Restaurant+Nadd+Al+Hamar+Dubai&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[26rem] w-full grayscale-[0.4] contrast-125 md:h-[34rem]"
            />
          </div>
          <a
            href={restaurant.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-[0.7rem] uppercase tracking-[0.22em] text-primary"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>
    </>
  );
}