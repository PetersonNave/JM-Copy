import { Counter } from "@/components/ui/Counter";

const STATS = [
  {
    counter: { to: 23, suffix: "+" },
    label: "anos no mercado gráfico",
    color: "text-sun",
  },
  {
    counter: { to: 4.7, decimals: 1 },
    label: "de nota no Google",
    color: "text-cyan",
  },
  {
    counter: { to: 7, suffix: " dias" },
    label: "de atendimento por semana",
    color: "text-blush",
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-grape-deep text-paper">
      <div className="halftone pointer-events-none absolute inset-0 text-paper/10" />
      <div className="relative mx-auto grid max-w-7xl divide-y-2 divide-paper/20 px-5 sm:px-8 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-1 py-10 text-center md:py-14"
          >
            <span
              className={`font-display text-6xl font-semibold leading-none md:text-7xl ${s.color}`}
            >
              <Counter {...s.counter} />
            </span>
            <span className="mt-2 max-w-[14rem] text-sm font-semibold uppercase tracking-wide text-paper/70">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
