import { createFileRoute } from "@tanstack/react-router";
import { Bike, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images, restaurant } from "@/data/restaurant";

const title = "Delivery & Takeaway — Zam Zam Mandi Restaurant Dubai";
const description =
  "Dine in, take away or order Mandi and Haneeth from Zam Zam Mandi Restaurant, Nadd Al Hamar, Dubai. Call +971 4 892 9060.";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/order" },
    ],
    links: [{ rel: "canonical", href: "/order" }],
  }),
  component: OrderPage,
});

function OrderPage() {
  return (
    <>
      <PageHero
        label="Delivery & Takeaway"
        title="Enjoy Zam Zam Wherever You Are"
        subtitle="Dine in with us, collect your order, or call the restaurant to arrange delivery."
        image={images.hamour}
      />

      <section className="mx-auto grid max-w-[88rem] gap-8 px-5 py-20 md:grid-cols-3 md:px-10">
        {[
          { icon: UtensilsCrossed, title: "Dine In", text: "Open daily 11:00 AM – 12:00 AM in Nadd Al Hamar." },
          { icon: ShoppingBag, title: "Takeaway", text: "Call ahead and collect your platters hot from the oven." },
          { icon: Bike, title: "Delivery", text: "Delivery options vary — please call the restaurant to confirm." },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <div className="h-full border border-border bg-card/40 p-8">
              <c.icon className="h-7 w-7 text-primary" />
              <h2 className="mt-6 font-display text-2xl">{c.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-border bg-card/40 py-20 text-center">
        <Reveal className="mx-auto max-w-xl px-5">
          <h2 className="font-display text-4xl">Order Now</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Online ordering is not connected yet. Place your order by phone and our
            team will take care of the rest.
          </p>
          <a
            href={restaurant.phoneHref}
            className="mt-8 inline-block bg-primary px-9 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground"
          >
            Call {restaurant.phone}
          </a>
        </Reveal>
      </section>
    </>
  );
}