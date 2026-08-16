import { weekHours, restaurant } from "@/data/restaurant";

export function OpeningHours() {
  return (
    <div className="border border-border bg-card/70 p-8">
      <p className="label-caps">Open Daily</p>
      <p className="mt-3 font-display text-4xl text-foreground">{restaurant.hoursLabel}</p>
      <div className="gold-rule my-6" />
      <ul className="space-y-3">
        {weekHours.map((d) => (
          <li key={d.day} className="flex items-baseline justify-between gap-4 text-sm">
            <span className="text-secondary">{d.day}</span>
            <span className="text-muted-foreground">{d.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}