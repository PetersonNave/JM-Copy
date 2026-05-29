import { Sparkles, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { FotoCard } from "@/components/ui/FotoCard";
import { CarrosselGaleria } from "@/components/ui/CarrosselGaleria";

const ADESIVO_URL =
  "https://wa.me/5581983091209?text=" +
  encodeURIComponent("Olá, JM Copy! Quero um orçamento de adesivo em vinil com recorte.");

const FOTOS = [
    { src: "/galeria/05-crachas-cordao.jpg", titulo: "Crachás personalizados", tag: "Eventos" },
  { src: "/galeria/01-cartao-visita-dourado.jpg", titulo: "Cartões dourados", tag: "Cartão de visita" },
  { src: "/galeria/02-encadernacao-capa-dura.jpg", titulo: "Encadernação capa dura", tag: "Acadêmico" },
  { src: "/galeria/03-cartao-hot-stamping.jpg", titulo: "Acabamento hot stamping", tag: "Cartão de visita" },
  { src: "/galeria/07-caneta-personalizada.jpg", titulo: "Canetas gravadas", tag: "Brindes" },
  { src: "/galeria/08-marca-texto-papel.jpg", titulo: "Marca-texto de papel", tag: "Personalizado" },
  { src: "/galeria/04-ecobag-personalizada.jpg", titulo: "Ecobags personalizadas", tag: "Brindes" },
  { src: "/galeria/10-camisas.webp", titulo: "Camisas personalizadas", tag: "Estamparia" },
  { src: "/galeria/11-carimbo.jpeg", titulo: "Carimbo personalizado", tag: "Personalizado" },
  { src: "/galeria/15-adesivo-vinil.jpeg", titulo: "Letras de Pernambuco em vinil", tag: "Adesivo vinil" },
  { src: "/galeria/16-impressão-colorida.jpeg", titulo: "Fanzines impressos em cores", tag: "Impressão colorida" },
  { src: "/galeria/17-personalizados.jpeg", titulo: "Tags de presente", tag: "Personalizado" },
  { src: "/galeria/18-kit-de-marca.jpeg", titulo: "Kit de marca com crachá", tag: "Identidade visual" },
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
            Uma amostra de trabalhos reais feitos para clientes da JM Copy,
            do cartão de visita ao brinde de evento.
          </p>
        </Reveal>

        {/* Destaque — Adesivo em vinil (campeão de vendas) */}
        <Reveal className="mb-12">
          <div className="grid items-stretch overflow-hidden rounded-3xl border-2 border-paper bg-ink/40 lg:grid-cols-2">
            {/* Vídeo */}
            <div className="relative min-h-[280px] overflow-hidden border-b-2 border-paper lg:border-b-0 lg:border-r-2">
              <video
                className="h-full w-full object-cover"
                src="/assets/videos/adesivo-vinil.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Aplicação de adesivo em vinil com recorte feito pela JM Copy"
              />
              {/* <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-sun px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-ink">
                <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />
                Em destaque
              </span> */}
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
              <h3 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-semibold leading-[1] text-paper">
                Adesivo em vinil <span className="italic text-sun">com recorte</span>
              </h3>
              <p className="max-w-md text-[15px] leading-relaxed text-paper/70">
                Recorte sob medida para vitrines, veículos, paredes e identidade
                visual, com aplicação limpa e acabamento que dura.
              </p>
              <a
                href={ADESIVO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-paper bg-magenta px-7 py-3.5 text-sm font-bold text-paper transition-transform duration-200 hover:-translate-y-0.5"
              >
                Quero meu adesivo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Mobile — carrossel horizontal automático e infinito */}
        <CarrosselGaleria fotos={FOTOS} />

        {/* Desktop — masonry */}
        <div className="hidden gap-4 sm:block sm:columns-2 lg:columns-3">
          {FOTOS.map((f, i) => (
            <Reveal
              key={f.src}
              delay={(i % 3) * 90}
              className="mb-4 break-inside-avoid"
            >
              <FotoCard foto={f} variant="masonry" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <a
            href="https://instagram.com/jmcopy.grafica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-paper bg-transparent px-7 py-3.5 text-sm font-bold text-paper transition-colors hover:border-magenta hover:bg-magenta"
          >
            Ver mais no Instagram @jmcopy.grafica
          </a>
        </Reveal>
      </div>
    </section>
  );
}
