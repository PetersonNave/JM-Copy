import { MessageCircle, ArrowDown, Star } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5581983091209?text=" +
  encodeURIComponent("Olá, JM Copy! Vim pelo site e gostaria de um orçamento.");

/** Selo circular giratório com texto na borda. */
function SeloGiratorio() {
  return (
    <div className="absolute -left-7 -top-7 z-30 h-28 w-28 sm:-left-10 sm:h-32 sm:w-32">
      <div className="grid h-full w-full place-items-center rounded-full border-2 border-ink bg-sun">
        <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
          <defs>
            <path
              id="circulo-selo"
              d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="fill-ink text-[10.5px] font-bold uppercase tracking-[0.14em]">
            <textPath href="#circulo-selo" startOffset="0%">
              você pensa ✦ a gente realiza ✦
            </textPath>
          </text>
        </svg>
        <Star className="h-7 w-7 fill-ink text-ink" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="topo"
      className="grain relative overflow-hidden bg-paper"
    >
      {/* halftone decorativo */}
      <div className="halftone pointer-events-none absolute -right-10 top-10 h-72 w-72 text-magenta/25" />
      <div className="halftone pointer-events-none absolute -left-16 bottom-0 h-64 w-64 text-cyan/30" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-32 lg:pt-16">
        {/* ---------- Texto ---------- */}
        <div className="flex flex-col justify-center">
          <div
            className="enter mb-6 flex flex-wrap items-center gap-2"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="flex items-center gap-1.5 rounded-full border-2 border-ink bg-paper px-3 py-1.5 text-xs font-bold text-ink">
              <Star className="h-3.5 w-3.5 fill-sun text-ink" />
              4,7 no Google
            </span>
            <span className="rounded-full border-2 border-ink bg-cyan px-3 py-1.5 text-xs font-bold text-ink">
              Boa Vista · Recife
            </span>
            <span className="rounded-full border-2 border-ink bg-blush px-3 py-1.5 text-xs font-bold text-ink">
              Pertinho da UNICAP
            </span>
          </div>

          <h1 className="font-display text-[clamp(3rem,9.5vw,6.8rem)] font-semibold leading-[0.92] tracking-tight text-ink">
            <span
              className="enter block"
              style={{ animationDelay: "0.12s" }}
            >
              Você pensa,
            </span>
            <span
              className="enter block"
              style={{ animationDelay: "0.22s" }}
            >
              a gente
            </span>
            <span
              className="enter relative inline-block"
              style={{ animationDelay: "0.32s" }}
            >
              <span className="relative z-10 italic text-magenta">
                realiza.
              </span>
              {/* traço desenhado à mão */}
              <svg
                className="draw absolute -bottom-3 left-0 w-full"
                viewBox="0 0 320 36"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 26C70 8 150 8 210 16C250 21 290 24 314 14"
                  stroke="#f4ea0c"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className="enter mt-8 max-w-md text-lg leading-relaxed text-ink/75"
            style={{ animationDelay: "0.42s" }}
          >
            Gráfica rápida e de personalizados na Boa Vista. Plotagem, banner,
            adesivo, impressão e brindes — sua ideia sai pronta, do seu jeito e
            sem enrolação.
          </p>

          <div
            className="enter mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.52s" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2.5 rounded-full border-2 border-ink bg-magenta px-7 py-4 text-base font-bold text-paper shadow-sticker transition-transform duration-200 hover:-translate-y-1 active:translate-y-0"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Pedir orçamento no WhatsApp
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-paper px-7 py-4 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Ver serviços
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <p
            className="enter mt-8 flex items-center gap-2 text-sm font-semibold text-ink/55"
            style={{ animationDelay: "0.62s" }}
          >
            <span className="font-display text-2xl font-semibold text-magenta-deep">
              +23 anos
            </span>
            transformando ideia em papel impresso
          </p>
        </div>

        {/* ---------- Visual ---------- */}
        <div
          className="enter relative flex items-center justify-center"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative w-full max-w-md">
            <SeloGiratorio />

            {/* card principal */}
            <div className="rotate-[-3deg] overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-sticker">
              <img
                src="/galeria/09-mosaico-produtos.jpg"
                alt="Mosaico de produtos e serviços da JM Copy"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>

            {/* card flutuante sobreposto */}
            <div
              className="animate-float absolute -bottom-10 -right-4 w-44 overflow-hidden rounded-xl border-2 border-ink bg-white shadow-sticker-sm sm:-right-10 sm:w-52"
              style={{ "--rot": "7deg" } as React.CSSProperties}
            >
              <img
                src="/galeria/01-cartao-visita-dourado.jpg"
                alt="Cartões de visita com acabamento dourado"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* etiqueta de preço/estrela */}
            <div
              className="animate-float absolute -left-5 bottom-16 z-20 rounded-xl border-2 border-ink bg-magenta px-4 py-2.5 text-paper shadow-sticker-sm"
              style={
                {
                  "--rot": "-6deg",
                  "--float-duration": "5.5s",
                } as React.CSSProperties
              }
            >
              <p className="font-display text-xl font-semibold leading-none">
                Pronto
              </p>
              <p className="text-xs font-bold uppercase tracking-wide">
                rapidinho ⚡
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* barra CMYK no rodapé do hero */}
      <div className="relative z-10 flex h-3 w-full">
        <span className="flex-1 bg-cyan" />
        <span className="flex-1 bg-magenta" />
        <span className="flex-1 bg-sun" />
        <span className="flex-1 bg-ink" />
      </div>
    </section>
  );
}
