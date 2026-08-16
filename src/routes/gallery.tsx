import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { galleryCategories, galleryItems, images } from "@/data/restaurant";

const title = "Gallery — Zam Zam Mandi Restaurant, Nadd Al Hamar Dubai";
const description =
  "Photographs of our Mandi, Haneeth and Madbee dishes, dining room, traditional seating and family gatherings at Zam Zam Mandi Dubai.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const items = galleryItems.filter((g) => cat === "All" || g.category === cat);

  return (
    <>
      <PageHero
        label="Gallery"
        title="Inside Zam Zam Mandi"
        subtitle="Food, room and hospitality — photographed the way the evening feels."
        image={images.ribs}
      />

      <section className="mx-auto max-w-[88rem] px-5 py-14 md:px-10">
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`shrink-0 border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${
                cat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((item, i) => (
            <Reveal key={`${item.alt}-${i}`} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setLightbox(item)}
                className="group block w-full overflow-hidden"
                aria-label={`Open image: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-5 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 p-2 text-primary"
          >
            <X className="h-7 w-7" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="max-h-[80vh] w-full object-contain" />
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {lightbox.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}