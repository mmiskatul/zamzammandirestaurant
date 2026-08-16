import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60 pb-28 pt-20 md:pb-16">
      <div className="mx-auto max-w-[88rem] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <p className="font-display text-2xl tracking-[0.16em]">ZAM ZAM MANDI</p>
            <p className="mt-2 text-[0.65rem] tracking-[0.3em] text-primary">
              AUTHENTIC YEMENI CUISINE • DUBAI
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Traditional Mandi, Haneeth and Madbee, served with generous Arabian
              hospitality in Nadd Al Hamar.
            </p>
            <div className="mt-6 flex gap-4">
              <a href={restaurant.instagram} aria-label="Instagram" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={restaurant.instagram} aria-label="Facebook" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={restaurant.whatsapp} aria-label="WhatsApp" target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterCol title="Explore">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/menu" className="hover:text-primary">Menu</Link>
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/gallery" className="hover:text-primary">Gallery</Link>
            <Link to="/faq" className="hover:text-primary">FAQ</Link>
          </FooterCol>

          <FooterCol title="Visit">
            <span>Nadd Al Hamar</span>
            <span>Dubai, UAE</span>
            <a href={restaurant.maps} target="_blank" rel="noreferrer" className="hover:text-primary">
              Get Directions
            </a>
          </FooterCol>

          <FooterCol title="Contact">
            <a href={restaurant.phoneHref} className="hover:text-primary">{restaurant.phone}</a>
            <a href={restaurant.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">
              {restaurant.instagramHandle}
            </a>
            <Link to="/reservation" className="hover:text-primary">Reservations</Link>
          </FooterCol>

          <FooterCol title="Hours">
            <span>Open Daily</span>
            <span>{restaurant.hoursLabel}</span>
          </FooterCol>
        </div>

        <div className="gold-rule mt-16" />
        <p className="pt-6 text-center text-xs tracking-[0.14em] text-muted-foreground">
          © 2026 Zam Zam Mandi Restaurant. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label-caps">{title}</p>
      <div className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}