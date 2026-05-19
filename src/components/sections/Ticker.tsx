type TickerProps = {
  items: string[];
  className?: string;
  /** velocidade em segundos */
  speed?: number;
  reverse?: boolean;
};

/** Faixa de letreiro infinito (marquee) — estilo gráfica. */
export function Ticker({
  items,
  className = "bg-ink text-paper",
  speed = 34,
  reverse = false,
}: TickerProps) {
  // duplicado para o loop não dar "salto"
  const loop = [...items, ...items];

  return (
    <div
      className={`flex overflow-hidden border-y-2 border-ink py-2.5 ${className}`}
      role="presentation"
    >
      <div
        className="flex shrink-0 animate-marquee items-center"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap text-sm font-bold uppercase tracking-[0.18em]"
          >
            {item}
            <span className="mx-5 text-base" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
