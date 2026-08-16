import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { OpeningHours } from "@/components/site/OpeningHours";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images, restaurant } from "@/data/restaurant";

const title = "Reserve a Table — Zam Zam Mandi Restaurant Dubai";
const description =
  "Request a table at Zam Zam Mandi Restaurant in Nadd Al Hamar, Dubai. Our team will call you to confirm availability.";

export const Route = createFileRoute("/reservation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reservation" },
    ],
    links: [{ rel: "canonical", href: "/reservation" }],
  }),
  component: ReservationPage,
});

const fieldClass =
  "w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function ReservationPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        label="Reservations"
        title="Reserve Your Table"
        subtitle="Send a request and our team will contact you to confirm availability."
        image={images.luqaimat}
      />

      <section className="mx-auto grid max-w-[88rem] gap-12 px-5 py-20 md:grid-cols-[1.4fr_1fr] md:px-10">
        <Reveal>
          {submitted ? (
            <div className="border border-primary/40 bg-card/60 p-10">
              <p className="label-caps">Request received</p>
              <p className="mt-5 font-display text-2xl leading-relaxed text-foreground md:text-3xl">
                Thank you. Your reservation request has been received. Our team will
                contact you to confirm availability.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 border border-border px-6 py-3 text-[0.7rem] uppercase tracking-[0.22em] text-secondary"
              >
                Make another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Name">
                <input required name="name" className={fieldClass} placeholder="Full name" />
              </Field>
              <Field label="Phone">
                <input required name="phone" type="tel" className={fieldClass} placeholder="+971 ..." />
              </Field>
              <Field label="Email">
                <input name="email" type="email" className={fieldClass} placeholder="you@email.com" />
              </Field>
              <Field label="Number of Guests">
                <input required name="guests" type="number" min={1} defaultValue={2} className={fieldClass} />
              </Field>
              <Field label="Date">
                <input required name="date" type="date" className={fieldClass} />
              </Field>
              <Field label="Time">
                <input required name="time" type="time" className={fieldClass} />
              </Field>
              <Field label="Seating Preference" full>
                <select name="seating" className={fieldClass} defaultValue="Table seating">
                  <option>Table seating</option>
                  <option>Traditional floor seating</option>
                  <option>Family section</option>
                  <option>Private / group area</option>
                </select>
              </Field>
              <Field label="Special Request" full>
                <textarea name="notes" rows={4} className={fieldClass} placeholder="Celebration, dietary notes, seating notes…" />
              </Field>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary px-8 py-4 text-[0.72rem] uppercase tracking-[0.24em] text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Request Reservation
                </button>
                <p className="mt-4 text-xs text-muted-foreground">
                  Requests are not confirmed automatically. A member of our team will
                  call you back.
                </p>
              </div>
            </form>
          )}
        </Reveal>

        <Reveal delay={100} className="space-y-8">
          <div className="border border-border bg-card/60 p-8">
            <p className="label-caps">Prefer to call?</p>
            <a
              href={restaurant.phoneHref}
              className="mt-4 block font-display text-3xl text-primary"
            >
              {restaurant.phone}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              {restaurant.addressLines.join(", ")}
            </p>
          </div>
          <OpeningHours />
        </Reveal>
      </section>
    </>
  );
}

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}