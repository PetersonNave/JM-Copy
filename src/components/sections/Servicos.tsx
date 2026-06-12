import {
  Printer,
  Flag,
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
  Sparkles,
  Layers,
  Droplets,
  Snowflake,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const WHATSAPP_URL =
  "https://wa.me/5581983091209?text=" +
  encodeURIComponent("Olá, JM Copy! Quero um orçamento de:");

// Benefícios do serviço-destaque (DTF UV)
const DTF_BENEFICIOS = [
  { icon: Sparkles, label: "Cores vivas" },
  { icon: Layers, label: "Textura em relevo" },
  { icon: Droplets, label: "À prova d'água" },
  { icon: Snowflake, label: "Aplica a frio" },
];

// Colagem de aplicações reais do DTF UV — cada foto vira um "sticker"
const DTF_FOTOS = [
  {
    src: "/galeria/dtf-uv-images/dtf-uf-celuular.jpg",
    label: "Capinhas",
    alt: "Capinha de celular preta com estampa DTF UV de bonequinho",
    aspect: "aspect-[4/5]",
    rot: "-rotate-[5deg]",
  },
  {
    src: "/galeria/dtf-uv-images/dtf-uv-caneca.png",
    label: "Canecas",
    alt: "Caneca branca personalizada com impressão DTF UV de um casal em traço",
    aspect: "aspect-[5/4]",
    rot: "rotate-[4deg]",
  },
  {
    src: "/galeria/dtf-uv-images/dtf-uv-img.png",
    label: "Garrafas",
    alt: "Garrafa metálica com estampa DTF UV da taça em verde e amarelo",
    aspect: "aspect-[4/5]",
    rot: "-rotate-[3deg]",
  },
  {
    src: "/galeria/dtf-uv-images/dtf-uv-garrafinha.jpg",
    label: "Squeezes",
    alt: "Squeeze branco com estampa DTF UV de uma coruja",
    aspect: "aspect-square",
    rot: "rotate-[6deg]",
  },
];

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
    icon: Cake,
    titulo: "Personalizados de aniversário",
    descricao:
      "Itens e artes personalizadas para deixar a festa com a sua cara.",
    cor: "bg-blush",
  },
  {
    num: "04",
    icon: Gift,
    titulo: "Personalizados para eventos",
    descricao:
      "Brindes e materiais personalizados para eventos, empresas e confraternizações.",
    cor: "bg-wine",
  },
  {
    num: "05",
    icon: Copy,
    titulo: "Impressão colorida e P&B",
    descricao:
      "Impressão e cópias coloridas ou em preto e branco, em qualquer tiragem.",
    cor: "bg-grape",
    destaque: "Desconto especial para concurseiro",
  },
  {
    num: "06",
    icon: FileText,
    titulo: "Impressão A3 e A4",
    descricao:
      "Impressão em A4, A3 e outros tamanhos, nítida e na hora, em cores ou preto e branco.",
    cor: "bg-cyan",
    destaque: "Desconto especial para concurseiro",
  },
  {
    num: "07",
    icon: BookOpen,
    titulo: "Encadernação",
    descricao:
      "Wire-o, espiral, capa dura e brochura para TCCs, apostilas e documentos.",
    cor: "bg-blush",
  },
  {
    num: "08",
    icon: ShoppingBag,
    titulo: "Brindes diversos",
    descricao:
      "Garrafas personalizadas, nécessaire, canetas, crachás em PVC e couchê, entre outros, com a cara da sua marca.",
    cor: "bg-wine",
  },
  {
    num: "09",
    icon: GraduationCap,
    titulo: "Digitação de TCC",
    descricao:
      "Digitamos e formatamos o seu TCC certinho, dentro das normas da ABNT.",
    cor: "bg-sun",
  },
  {
    num: "10",
    icon: Shirt,
    titulo: "Camisas e fardamentos",
    descricao:
      "Confecção de camisas e fardamentos personalizados para equipes, turmas e empresas.",
    cor: "bg-magenta",
  },
  {
    num: "11",
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

        {/* Destaque — DTF UV (serviço principal) */}
        <Reveal className="relative mb-16">
          {/* Selo girando */}
          <div className="pointer-events-none absolute -top-7 right-5 z-30 hidden h-24 w-24 sm:block lg:right-10">
            <div className="h-full w-full animate-spin-slow">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  className="fill-magenta stroke-ink"
                  strokeWidth="2"
                />
                <defs>
                  <path
                    id="selo-dtf-uv"
                    fill="none"
                    d="M50 50 m-33 0 a33 33 0 1 1 66 0 a33 33 0 1 1 -66 0"
                  />
                </defs>
                <text
                  className="fill-paper"
                  fontSize="9.4"
                  fontWeight="700"
                  letterSpacing="1.3"
                >
                  <textPath href="#selo-dtf-uv">
                    DTF UV • ALTA DURABILIDADE • À PROVA D&apos;ÁGUA •
                  </textPath>
                </text>
              </svg>
            </div>
            <span className="absolute inset-0 grid place-items-center">
              <Sparkles className="h-6 w-6 text-sun" strokeWidth={2.4} />
            </span>
          </div>

          <div className="grain relative overflow-hidden rounded-[2rem] border-2 border-ink bg-grape text-paper shadow-sticker">
            <div className="halftone pointer-events-none absolute -left-12 -top-12 h-56 w-56 text-sun/25" />
            <div className="halftone pointer-events-none absolute -bottom-10 right-1/4 h-44 w-44 text-magenta/30" />

            <div className="relative z-10 grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
              {/* Texto */}
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-sun px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink shadow-sticker-sm">
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={2.6} />
                  Mais pedido da casa
                </span>

                <h3 className="mt-5 font-display text-[clamp(3.2rem,9vw,5.5rem)] font-semibold leading-[0.86]">
                  DTF <span className="text-sun">UV</span>
                </h3>
                <p className="mt-1 font-display text-[clamp(1.3rem,3.4vw,1.9rem)] font-semibold italic text-sun">
                  Cola em (quase) tudo.
                </p>

                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/80">
                  Personalizamos canecas, garrafas, capinhas, eletrônicos e
                  brindes com impressão DTF UV de alta durabilidade: cores vivas,
                  textura em relevo e acabamento à prova d&apos;água.
                </p>

                <ul className="mt-6 grid max-w-md grid-cols-2 gap-2.5">
                  {DTF_BENEFICIOS.map((b) => {
                    const Icon = b.icon;
                    return (
                      <li
                        key={b.label}
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-paper/20 bg-paper/10 px-3 py-2 text-sm font-semibold text-paper"
                      >
                        <Icon
                          className="h-4 w-4 shrink-0 text-sun"
                          strokeWidth={2.4}
                        />
                        {b.label}
                      </li>
                    );
                  })}
                </ul>

                <a
                  href={WHATSAPP_URL + encodeURIComponent(" DTF UV")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-7 py-3.5 text-sm font-bold text-ink shadow-sticker transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Pedir meu DTF UV
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

              {/* Colagem de fotos (aplicações reais) */}
              <div className="grid grid-cols-2 gap-x-4 sm:gap-x-5">
                {[0, 1].map((col) => (
                  <div
                    key={col}
                    className={`space-y-8 sm:space-y-9 ${col === 1 ? "mt-10 sm:mt-14" : ""}`}
                  >
                    {DTF_FOTOS.filter((_, i) => i % 2 === col).map((f) => (
                      <figure
                        key={f.src}
                        className={`group relative ${f.rot} transition-transform duration-500 ease-out hover:-translate-y-1.5 hover:rotate-0`}
                      >
                        <div className="overflow-hidden rounded-2xl border-2 border-ink bg-white p-1.5 shadow-sticker">
                          <img
                            src={f.src}
                            alt={f.alt}
                            className={`${f.aspect} w-full rounded-xl object-cover`}
                            loading="lazy"
                            draggable={false}
                          />
                        </div>
                        <figcaption className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border-2 border-ink bg-sun px-3 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink shadow-sticker-sm">
                          {f.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
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
