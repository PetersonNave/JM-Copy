import {
  Printer,
  Flag,
  Scissors,
  Cake,
  Gift,
  Copy,
  FileText,
  BookOpen,
  ShoppingBag,
  GraduationCap,
  Shirt,
  Stamp,
  BadgePercent,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const WHATSAPP_URL =
  "https://wa.me/5581983091209?text=" +
  encodeURIComponent("Olá, JM Copy! Quero um orçamento de:");

const SERVICOS = [
  {
    num: "01",
    icon: Printer,
    titulo: "Plotagem",
    descricao:
      "Impressão em grande formato com qualidade e acabamento profissional.",
    cor: "bg-cyan",
  },
  {
    num: "02",
    icon: Flag,
    titulo: "Banner",
    descricao:
      "Banners para lojas, eventos e divulgação, prontos com rapidez.",
    cor: "bg-magenta",
  },
  {
    num: "03",
    icon: Scissors,
    titulo: "Adesivo em vinil com recorte",
    descricao:
      "Adesivos recortados sob medida para vitrines, veículos e identidade visual.",
    cor: "bg-sun",
  },
  {
    num: "04",
    icon: Cake,
    titulo: "Personalizados de aniversário",
    descricao:
      "Itens e artes personalizadas para deixar a festa com a sua cara.",
    cor: "bg-blush",
  },
  {
    num: "05",
    icon: Gift,
    titulo: "Personalizados para eventos",
    descricao:
      "Brindes e materiais personalizados para eventos, empresas e confraternizações.",
    cor: "bg-wine",
  },
  {
    num: "06",
    icon: Copy,
    titulo: "Impressão colorida e P&B",
    descricao:
      "Impressão e cópias coloridas ou em preto e branco, em qualquer tiragem.",
    cor: "bg-grape",
    destaque: "Desconto especial para concurseiro",
  },
  {
    num: "07",
    icon: FileText,
    titulo: "Impressão A3 e A4",
    descricao:
      "Impressão em A4, A3 e outros tamanhos, nítida e na hora, em cores ou preto e branco.",
    cor: "bg-cyan",
    destaque: "Desconto especial para concurseiro",
  },
  {
    num: "08",
    icon: BookOpen,
    titulo: "Encadernação",
    descricao:
      "Wire-o, espiral, capa dura e brochura para TCCs, apostilas e documentos.",
    cor: "bg-blush",
  },
  {
    num: "09",
    icon: ShoppingBag,
    titulo: "Brindes diversos",
    descricao:
      "Garrafas personalizadas, nécessaire, canetas, crachás em PVC e couchê, entre outros, com a cara da sua marca.",
    cor: "bg-wine",
  },
  {
    num: "10",
    icon: GraduationCap,
    titulo: "Digitação de TCC",
    descricao:
      "Digitamos e formatamos o seu TCC certinho, dentro das normas da ABNT.",
    cor: "bg-sun",
  },
  {
    num: "11",
    icon: Shirt,
    titulo: "Camisas e fardamentos",
    descricao:
      "Confecção de camisas e fardamentos personalizados para equipes, turmas e empresas.",
    cor: "bg-magenta",
  },
  {
    num: "12",
    icon: Stamp,
    titulo: "Carimbos",
    descricao:
      "Carimbos sob medida, com acabamento profissional para o seu dia a dia.",
    cor: "bg-grape",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Cabeçalho */}
        <Reveal className="mb-14 max-w-2xl">
          <span className="mb-3 inline-block rounded-full border-2 border-ink bg-sun px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
            O que a gente faz
          </span>
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[0.98] text-ink">
            Tudo o que você precisa
            <br />
            <span className="italic text-magenta">num lugar só.</span>
          </h2>
        </Reveal>

        {/* Grade de serviços */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICOS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.num} delay={i * 80} as="article">
                <a
                  href={WHATSAPP_URL + encodeURIComponent(` ${s.titulo}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border-2 border-ink bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sticker"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <span
                      className={`grid h-14 w-14 place-items-center rounded-xl border-2 border-ink ${s.cor} text-ink transition-transform duration-300 group-hover:-rotate-12`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={2.2} />
                    </span>
                    <span className="font-display text-4xl font-semibold text-ink/15">
                      {s.num}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
                    {s.titulo}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/65">
                    {s.descricao}
                  </p>

                  {s.destaque && (
                    <span className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full border-2 border-ink bg-sun px-3 py-1 text-xs font-bold text-ink">
                      <BadgePercent className="h-3.5 w-3.5" strokeWidth={2.4} />
                      {s.destaque}
                    </span>
                  )}

                  <span className="mt-6 flex items-center gap-1.5 text-sm font-bold text-magenta-deep">
                    Pedir orçamento
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Fecho da lista */}
        <Reveal delay={120} className="mt-12 flex flex-col items-center gap-6 text-center">
          <p className="font-display text-xl font-semibold italic text-ink/55 sm:text-2xl">
            Entre outros serviços gráficos e personalizados!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-magenta px-7 py-3.5 text-sm font-bold text-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-sticker"
          >
            Não achou o que procura? Fala com a gente
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
