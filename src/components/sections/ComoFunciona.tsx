import { MessageCircle, PenTool, PackageCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const PASSOS = [
  {
    icon: MessageCircle,
    titulo: "Manda sua ideia",
    descricao:
      "Chama no WhatsApp e conta o que você precisa. Pode mandar foto, print ou só a ideia na cabeça.",
    cor: "bg-cyan",
  },
  {
    icon: PenTool,
    titulo: "A gente cria a arte",
    descricao:
      "Montamos o material e você aprova tudo antes de imprimir. Nada sai sem o seu ok.",
    cor: "bg-magenta",
  },
  {
    icon: PackageCheck,
    titulo: "Pronto, rapidinho",
    descricao:
      "Imprimimos com agilidade e acabamento caprichado. É só retirar na loja ou combinar a entrega.",
    cor: "bg-sun",
  },
];

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-paper-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
            Simples assim
          </span>
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[1] text-ink">
            Do papo ao papel
            <br />
            <span className="italic text-magenta">em 3 passos.</span>
          </h2>
        </Reveal>

        <div className="relative grid gap-10 md:grid-cols-3 md:gap-6">
          {/* linha de picote conectando os passos (desktop) */}
          <div
            className="perfuro absolute left-[16%] right-[16%] top-9 hidden h-[3px] text-ink/30 md:block"
            aria-hidden="true"
          />

          {PASSOS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.titulo} delay={i * 120} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`relative z-10 grid h-[72px] w-[72px] place-items-center rounded-full border-2 border-ink ${p.cor} text-ink`}
                  >
                    <Icon className="h-8 w-8" strokeWidth={2.2} />
                    <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full border-2 border-ink bg-ink font-display text-sm font-semibold text-paper">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-ink/65">
                    {p.descricao}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
