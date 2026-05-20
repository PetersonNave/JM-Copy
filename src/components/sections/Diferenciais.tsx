import { Zap, Award, MapPin, Heart } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const MOTIVOS = [
  {
    icon: Zap,
    titulo: "Rápido de verdade",
    descricao:
      "Prazo apertado? A gente dá conta. Aqui pedido urgente não é exceção, é rotina.",
    cor: "bg-sun",
  },
  {
    icon: Award,
    titulo: "Acabamento caprichado",
    descricao:
      "Mais de 9 anos de ofício aparecem em cada corte, dobra e impressão bem feita.",
    cor: "bg-cyan",
  },
  {
    icon: MapPin,
    titulo: "Pertinho de você",
    descricao:
      "Na Rua Afonso Pena, no coração da Boa Vista — a poucos passos da UNICAP.",
    cor: "bg-blush",
  },
  {
    icon: Heart,
    titulo: "Tudo do seu jeito",
    descricao:
      "Cada material é pensado com você. Você traz a ideia, a gente personaliza por inteiro.",
    cor: "bg-magenta",
  },
];

export function Diferenciais() {
  return (
    <section className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Cabeçalho */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="mb-3 inline-block rounded-full border-2 border-ink bg-grape px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-paper">
              Por que a JM Copy
            </span>
            <h2 className="font-display text-[clamp(2.3rem,5vw,3.8rem)] font-semibold leading-[1] text-ink">
              Motivos de sobra
              <br />
              <span className="italic text-magenta">pra confiar.</span>
            </h2>
            <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-ink/70">
              Não é só imprimir. É entregar a sua ideia do jeito certo, no
              tempo certo e com gente que se importa com o resultado.
            </p>
          </Reveal>
        </div>

        {/* Lista de motivos */}
        <div className="flex flex-col gap-4">
          {MOTIVOS.map((m, i) => {
            const Icon = m.icon;
            return (
              <Reveal key={m.titulo} delay={i * 90} as="article">
                <div className="group flex items-start gap-5 rounded-2xl border-2 border-ink bg-white p-6 transition-all duration-300 hover:-translate-x-1.5 hover:shadow-sticker sm:p-7">
                  <span
                    className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl border-2 border-ink ${m.cor} text-ink transition-transform duration-300 group-hover:rotate-12`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-semibold text-ink/25">
                        0{i + 1}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-ink">
                        {m.titulo}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink/65">
                      {m.descricao}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
