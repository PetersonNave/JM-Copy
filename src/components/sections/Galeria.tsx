import { Reveal } from "@/components/ui/Reveal";

const FOTOS = [
  { src: "/galeria/09-mosaico-produtos.jpg", titulo: "Nossos produtos", tag: "Mix" },
  { src: "/galeria/01-cartao-visita-dourado.jpg", titulo: "Cartões dourados", tag: "Cartão de visita" },
  { src: "/galeria/05-crachas-cordao.jpg", titulo: "Crachás com cordão", tag: "Eventos" },
  { src: "/galeria/02-encadernacao-capa-dura.jpg", titulo: "Encadernação capa dura", tag: "Acadêmico" },
  { src: "/galeria/07-caneta-personalizada.jpg", titulo: "Canetas gravadas", tag: "Brindes" },
  { src: "/galeria/03-cartao-hot-stamping.jpg", titulo: "Acabamento hot stamping", tag: "Cartão de visita" },
  { src: "/galeria/04-ecobag-personalizada.jpg", titulo: "Ecobags personalizadas", tag: "Brindes" },
  { src: "/galeria/08-marca-texto-papel.jpg", titulo: "Marca-texto de papel", tag: "Personalizado" },
  { src: "/galeria/06-cracha-personalizado.jpg", titulo: "Crachá personalizado", tag: "Eventos" },
];

export function Galeria() {
  return (
    <section
      id="galeria"
      className="grain relative overflow-hidden bg-ink py-24 text-paper sm:py-32"
    >
      <div className="halftone pointer-events-none absolute -right-10 top-20 h-72 w-72 text-magenta/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full border-2 border-paper bg-transparent px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-paper">
              Saiu da nossa máquina
            </span>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[0.98]">
              Portfólio <span className="italic text-sun">de verdade.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[15px] leading-relaxed text-paper/65">
            Uma amostra de trabalhos reais feitos para clientes da JM Copy —
            do cartão de visita ao brinde de evento.
          </p>
        </Reveal>

        {/* Masonry */}
        <div className="gap-4 sm:columns-2 lg:columns-3">
          {FOTOS.map((f, i) => (
            <Reveal
              key={f.src}
              delay={(i % 3) * 90}
              className="mb-4 break-inside-avoid"
            >
              <figure className="group relative overflow-hidden rounded-2xl border-2 border-paper">
                <img
                  src={f.src}
                  alt={f.titulo}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <figcaption className="p-5">
                    <span className="inline-block rounded-full border border-paper/60 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-paper/80">
                      {f.tag}
                    </span>
                    <p className="mt-2 font-display text-xl font-semibold text-paper">
                      {f.titulo}
                    </p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <a
            href="https://instagram.com/jmcopy.grafica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-paper bg-transparent px-7 py-3.5 text-sm font-bold text-paper transition-colors hover:bg-magenta hover:border-magenta"
          >
            Ver mais no Instagram @jmcopy.grafica
          </a>
        </Reveal>
      </div>
    </section>
  );
}
