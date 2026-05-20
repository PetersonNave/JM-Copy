import Image from "next/image";
import { Star, ExternalLink, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const GOOGLE_URL =
  "https://www.google.com/maps/search/?api=1&query=Jm+COPY+R.+Afonso+Pena+43+Boa+Vista+Recife+PE";

const NOTA = 4.7;

/* Avaliações reais coletadas do Google Meu Negócio — todas 5 estrelas.
   Avaliações sem conteúdo relevante ("Bom", "Top demais") foram omitidas. */
const AVALIACOES = [
  {
    nome: "Ana Bueno",
    texto:
      "Ótimo atendimento. Deixo aqui meu agradecimento especial à Juliana, profissional, atenciosa e gentil, que recebe minha mãe sempre com toda atenção durante seu retorno aos estudos. Fez parte do currículo escolar na confecção das apostilas, muito bem elaboradas. Gratidão!",
    cor: "bg-magenta",
    foto: "/galeria/gmb-images/ana-bueno.png",
  },
  {
    nome: "Rogério Reis",
    texto:
      "Sempre fui muito bem atendido. Todos os serviços que fiz foram entregues de forma impecável. Recomendo e dou 5 estrelas à empresa, e todas as estrelas à Juliana!",
    cor: "bg-cyan",
  },
  {
    nome: "Rafa Costa",
    texto:
      "Ótimo atendimento, preços imbatíveis e qualidade ímpar. Juliana é uma profissional excelente.",
    cor: "bg-grape",
  },
  {
    nome: "Winner Cursos",
    texto:
      "Excelente atendimento, serviço impecável e entrega super rápida!",
    cor: "bg-wine",
  },
  {
    nome: "Natalia Bevilaqua",
    texto:
      "Maravilhosa! Sempre envio meus materiais para ela e o resultado fica 100%!",
    cor: "bg-sun",
  },
  {
    nome: "João Freitas",
    texto:
      "Local super agradável e bem localizado. A proprietária apresenta um atendimento de ótima qualidade, dando ao cliente toda satisfação nas cópias, xerox e digitalização em geral.",
    cor: "bg-cyan",
  },
  {
    nome: "Tarcila Oliveira",
    texto:
      "Atendimento maravilhoso! Equipe sempre disposta, não importa a dificuldade nem o horário. Grata!",
    cor: "bg-magenta",
    foto: "/galeria/gmb-images/tarcila-oliveira.png",
  },
  {
    nome: "Otávia Ferreira",
    texto:
      "Muito bom. Fui bem atendida, a Juliana é muito simpática e o material é de primeira.",
    cor: "bg-grape",
    foto: "/galeria/gmb-images/otavia-ferreira.png",
  },
  {
    nome: "Marina Garrett",
    texto:
      "Atendimento de qualidade, entrega de conteúdo de qualidade e pontualidade.",
    cor: "bg-wine",
  },
];

function iniciais(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

/** Cinco estrelas cheias (todas as avaliações são 5). */
function CincoEstrelas() {
  return (
    <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4 text-sun" fill="currentColor" />
      ))}
    </div>
  );
}

/** Estrelas da nota geral, com preenchimento parcial. */
function EstrelasNota() {
  return (
    <div className="flex gap-1" aria-label={`Nota ${NOTA} de 5`} role="img">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, NOTA - i));
        return (
          <span key={i} className="relative h-7 w-7">
            <Star
              className="absolute inset-0 h-7 w-7 text-paper/25"
              fill="currentColor"
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="h-7 w-7 text-sun" fill="currentColor" />
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

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Cabeçalho */}
        <Reveal className="mb-14 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full border-2 border-paper px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
              Quem imprime, recomenda
            </span>
            <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[0.98]">
              O carinho de
              <br />
              <span className="italic text-sun">clientes reais.</span>
            </h2>
          </div>

          {/* Selo de nota */}
          <div className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-paper px-5 py-4 text-ink shadow-sticker">
            <span className="font-display text-6xl font-semibold leading-none text-magenta">
              4,7
            </span>
            <div>
              <EstrelasNota />
              <p className="mt-1.5 text-xs font-bold uppercase tracking-wide text-ink/60">
                Nota no Google
              </p>
            </div>
          </div>
        </Reveal>

        {/* Mural de depoimentos */}
        <div className="gap-5 sm:columns-2 lg:columns-3">
          {AVALIACOES.map((a, i) => (
            <Reveal
              key={a.nome}
              delay={(i % 3) * 90}
              className="mb-5 break-inside-avoid"
            >
              <figure className="rounded-2xl border-2 border-ink bg-paper p-6 text-ink transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <CincoEstrelas />
                  <Quote
                    className="h-7 w-7 text-magenta/25"
                    fill="currentColor"
                  />
                </div>

                <blockquote className="mt-4 text-[15px] leading-relaxed text-ink/80">
                  {a.texto}
                </blockquote>

                <figcaption className="mt-5 flex items-center gap-3 border-t-2 border-dashed border-ink/15 pt-4">
                  {a.foto ? (
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-ink">
                      <Image
                        src={a.foto}
                        alt={a.nome}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </span>
                  ) : (
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-ink ${a.cor} font-display text-sm font-semibold text-paper`}
                    >
                      {iniciais(a.nome)}
                    </span>
                  )}
                  <span>
                    <span className="block font-display text-base font-semibold leading-tight text-ink">
                      {a.nome}
                    </span>
                    <span className="text-xs font-semibold text-ink/50">
                      Avaliação no Google
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={120} className="mt-12 text-center">
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-ink px-7 py-3.5 text-sm font-bold text-paper transition-transform duration-200 hover:-translate-y-1"
          >
            Ver todas as avaliações no Google
            <ExternalLink className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
