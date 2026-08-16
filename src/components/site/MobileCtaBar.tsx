import { MapPin, MessageCircle, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
      <a href={restaurant.phoneHref} className="flex flex-col items-center gap-1 py-3 text-[0.65rem] uppercase tracking-[0.16em] text-secondary">
        <Phone className="h-4 w-4 text-primary" /> Call
      </a>
      <a href={restaurant.whatsapp} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 border-x border-border py-3 text-[0.65rem] uppercase tracking-[0.16em] text-secondary">
        <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
      </a>
      <a href={restaurant.maps} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-3 text-[0.65rem] uppercase tracking-[0.16em] text-secondary">
        <MapPin className="h-4 w-4 text-primary" /> Directions
      </a>
    </div>
  );
}