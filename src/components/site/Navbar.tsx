import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, restaurant } from "@/data/restaurant";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border bg-background/92 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[88rem] items-center justify-between px-5 md:h-24 md:px-10">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-xl tracking-[0.18em] text-foreground md:text-2xl">
            ZAM ZAM MANDI
          </span>
          <span className="mt-1 text-[0.6rem] tracking-[0.32em] text-primary">
            NADD AL HAMAR • DUBAI
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
                className="relative text-[0.78rem] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
              >
                {lang === "ar" ? l.ar : l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="hidden text-[0.7rem] tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary md:block"
            aria-label="Switch language"
          >
            {lang === "en" ? "EN | العربية" : "العربية | EN"}
          </button>
          <Link
            to="/menu"
            className="hidden border border-border px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.22em] text-secondary transition-colors hover:border-primary hover:text-primary xl:inline-block"
          >
            {t("viewMenu")}
          </Link>
          <Link
            to="/reservation"
            className="hidden bg-primary px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
          >
            {t("reserve")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="p-2 text-secondary lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-background transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <span className="font-display text-lg tracking-[0.18em]">ZAM ZAM MANDI</span>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
            <X className="h-6 w-6 text-primary" />
          </button>
        </div>
        <div className="gold-rule mx-5" />
        <ul className="flex flex-1 flex-col justify-center gap-6 px-8">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="font-display text-3xl text-foreground">
                {lang === "ar" ? l.ar : l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/reservation" className="font-display text-3xl text-primary">
              {t("reserve")}
            </Link>
          </li>
        </ul>
        <div className="space-y-3 px-8 pb-12">
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="text-xs tracking-[0.24em] text-muted-foreground"
          >
            {lang === "en" ? "EN | العربية" : "العربية | EN"}
          </button>
          <p className="text-xs tracking-[0.16em] text-muted-foreground">{restaurant.phone}</p>
        </div>
      </div>
    </header>
  );
}