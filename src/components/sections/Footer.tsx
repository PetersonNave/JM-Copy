import Image from "next/image";
import { MapPin, Clock, MessageCircle, Instagram, Mail } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5581983091209?text=" +
  encodeURIComponent("Olá, JM Copy! Vim pelo site e gostaria de um orçamento.");

const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Portfólio", href: "#galeria" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const SERVICOS = [
  "DTF UV",
  "Plotagem",
  "Banner",
  "Personalizados",
  "Impressão e cópias",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      {/* wordmark gigante de fundo */}
      <span
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none font-display text-[28vw] font-semibold leading-none text-paper/[0.04]"
        aria-hidden="true"
      >
        JM Copy
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Image
              src="/icons/logo-without-text.png"
              alt="JM Copy — Gráfica Rápida"
              width={72}
              height={72}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Gráfica rápida e de personalizados na Boa Vista, Recife. Você
              pensa, a gente realiza.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-paper/40">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-paper/75 transition-colors hover:text-magenta"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-paper/40">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICOS.map((s) => (
                <li key={s} className="text-sm text-paper/75">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-paper/40">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-paper/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                Rua Afonso Pena, 43 — Boa Vista, Recife/PE
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                Seg a Sex 06h–22h · Sáb 06h–15h · Dom 09h–15h
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-magenta"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-magenta" />
                  (81) 98309-1209
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/jmcopy.grafica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 transition-colors hover:text-magenta"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-magenta" />
                  @jmcopy.grafica
                </a>
              </li>
              <li>
                <a
                  href="mailto:julianacopiadora332@gmail.com"
                  className="flex items-center gap-2.5 break-all transition-colors hover:text-magenta"
                >
                  <Mail className="h-4 w-4 shrink-0 text-magenta" />
                  julianacopiadora332@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* barra CMYK */}
        <div className="mt-12 flex h-2 w-full overflow-hidden rounded-full">
          <span className="flex-1 bg-cyan" />
          <span className="flex-1 bg-magenta" />
          <span className="flex-1 bg-sun" />
          <span className="flex-1 bg-paper/30" />
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-paper/45 sm:flex-row">
          <p>© {new Date().getFullYear()} JM Copy — Gráfica Rápida. Todos os direitos reservados.</p>
          <p>Recife · Pernambuco</p>
        </div>
      </div>
    </footer>
  );
}
