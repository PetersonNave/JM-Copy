import { Star, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=Jm+COPY+R.+Afonso+Pena+43+Boa+Vista+Recife+PE";

const NOTA = 4.7;

/* NOTA PARA O DEV: os textos individuais de avaliações ainda não foram
   coletados (o Google Meu Negócio exige login). Quando a cliente enviar
   3 depoimentos reais, dá pra adicionar uma grade de cards aqui embaixo. */

function Estrelas() {
  return (
    <div
      className="flex gap-1"
      aria-label={`Nota ${NOTA} de 5`}
      role="img"
    >
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, NOTA - i));
        return (
          <span key={i} className="relative h-8 w-8">
            <Star className="absolute inset-0 h-8 w-8 text-ink/15" fill="currentColor" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="h-8 w-8 text-sun" fill="currentColor" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function Avaliacoes() {
  return (
    <section
      id="avaliacoes"
      className="grain relative overflow-hidden bg-magenta py-24 text-paper sm:py-32"
    >
      <div className="halftone pointer-events-none absolute inset-0 text-ink/10" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-xl -rotate-1 rounded-3xl border-2 border-ink bg-paper p-8 text-center text-ink shadow-sticker sm:p-12">
            {/* sticker no canto */}
            <span className="absolute -right-4 -top-4 grid h-16 w-16 rotate-12 place-items-center rounded-full border-2 border-ink bg-cyan font-display text-xs font-semibold leading-tight">
              clientes
              <br />
              reais
            </span>

            <span className="inline-block rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
              Reputação
            </span>

            <p className="mt-6 font-display text-[6.5rem] font-semibold leading-none text-magenta">
              4,7
            </p>

            <div className="mt-2 flex justify-center">
              <Estrelas />
            </div>

            <p className="mt-5 font-display text-2xl font-semibold">
              Nota no Google Meu Negócio
            </p>
            <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-ink/65">
              Avaliação construída por quem já imprimiu com a gente — pelo
              atendimento, pela agilidade e pelo acabamento de cada pedido.
            </p>

            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-6 py-3.5 text-sm font-bold text-paper transition-transform duration-200 hover:-translate-y-1"
            >
              Ver avaliações no Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
