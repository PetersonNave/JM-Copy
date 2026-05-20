import { MapPin, Clock, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SobreSlideshow } from "@/components/ui/SobreSlideshow";

const FATOS = [
  { icon: MapPin, texto: "Rua Afonso Pena, 43 — Boa Vista (pertinho da UNICAP)" },
  { icon: Sparkles, texto: "+9 anos de mercado gráfico" },
  { icon: Clock, texto: "Atendimento de domingo a domingo" },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* ---------- Imagem ---------- */}
        <Reveal className="relative">
          <div className="relative mx-auto max-w-md">
            {/* bloco de profundidade atrás */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-ink bg-cyan" />
            <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-white">
              <SobreSlideshow />
            </div>

            {/* sticker de citação */}
            <div className="absolute -left-4 -top-6 max-w-[12rem] -rotate-6 rounded-xl border-2 border-ink bg-sun px-4 py-3 shadow-sticker-sm sm:-left-8">
              <p className="font-display text-lg font-semibold leading-tight text-ink">
                “Sua ideia se torna realidade.”
              </p>
            </div>
          </div>
        </Reveal>

        {/* ---------- Texto ---------- */}
        <div>
          <Reveal>
            <span className="mb-3 inline-block rounded-full border-2 border-ink bg-magenta px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-paper">
              Quem faz acontecer
            </span>
            <h2 className="font-display text-[clamp(2.3rem,5vw,3.6rem)] font-semibold leading-[1.02] text-ink">
              Uma gráfica que
              <br />
              <span className="italic text-magenta">resolve de verdade.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-ink/75">
              <p>
                A JM Copy é uma gráfica rápida no coração da Boa Vista, a poucos
                passos da UNICAP. É o ponto certo de quem precisa de impressão,
                cópia e personalizado para ontem, sem complicação.
              </p>
              <p>
                São mais de 9 anos de estrada no mercado gráfico transformando
                ideia em material impresso: TCC para entregar, banner para
                inaugurar, adesivo para a vitrine, lembrança para a festa. Cada
                pedido sai com o capricho de quem faz com gosto.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-7 space-y-2.5">
              {FATOS.map((f) => {
                const Icon = f.icon;
                return (
                  <li
                    key={f.texto}
                    className="flex items-center gap-3 text-[15px] font-semibold text-ink"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border-2 border-ink bg-blush">
                      <Icon className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    {f.texto}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex items-center gap-3 border-t-2 border-dashed border-ink/25 pt-6">
              <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-ink bg-grape font-display text-lg font-semibold text-paper">
                JM
              </span>
              <div>
                <p className="font-display text-lg font-semibold leading-none text-ink">
                  Juliana Moura
                </p>
                <p className="text-sm text-ink/60">
                  À frente da JM Copy
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
