import {
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Mail,
  Navigation,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const WHATSAPP_URL =
  "https://wa.me/5581983091209?text=" +
  encodeURIComponent("Olá, JM Copy! Vim pelo site e gostaria de um orçamento.");

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Jm+COPY+R.+Afonso+Pena+43+Boa+Vista+Recife+PE";

const MAPS_EMBED =
  "https://www.google.com/maps?q=R.+Afonso+Pena,+43+-+Boa+Vista,+Recife+-+PE,+50050-130&output=embed";

const HORARIOS = [
  { dias: "Segunda a Sexta", horas: "08h às 18h" },
  { dias: "Sábado", horas: "08h às 14h" },
  { dias: "Domingo", horas: "Sob agendamento" },
];

const CONTATOS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    valor: "(81) 98309-1209",
    href: WHATSAPP_URL,
    cor: "bg-[#25D366]",
  },
  {
    icon: Instagram,
    label: "Instagram",
    valor: "@jmcopy.grafica",
    href: "https://instagram.com/jmcopy.grafica",
    cor: "bg-magenta",
  },
  {
    icon: Mail,
    label: "E-mail",
    valor: "julianacopiadora332@gmail.com",
    href: "mailto:julianacopiadora332@gmail.com",
    cor: "bg-cyan",
  },
];

export function Localizacao() {
  return (
    <section id="contato" className="relative bg-paper-deep py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <span className="mb-3 inline-block rounded-full border-2 border-ink bg-sun px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
            Onde a gente está
          </span>
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[1] text-ink">
            Dá um pulo aqui
            <br />
            <span className="italic text-magenta">na Boa Vista.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* ---------- Informações ---------- */}
          <div className="flex flex-col gap-5">
            {/* Endereço */}
            <Reveal>
              <div className="rounded-2xl border-2 border-ink bg-white p-7">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-ink bg-blush">
                    <MapPin className="h-6 w-6" strokeWidth={2.2} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      Endereço
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-ink/70">
                      Rua Afonso Pena, 43 — Boa Vista
                      <br />
                      Recife/PE · CEP 50050-130
                      <br />
                      <span className="font-semibold text-magenta-deep">
                        Pertinho da UNICAP
                      </span>
                    </p>
                  </div>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink px-5 py-3 text-sm font-bold text-paper transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <Navigation className="h-4 w-4" />
                  Como chegar
                </a>
              </div>
            </Reveal>

            {/* Horário */}
            <Reveal delay={90}>
              <div className="rounded-2xl border-2 border-ink bg-white p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border-2 border-ink bg-sun">
                    <Clock className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    Horário de funcionamento
                  </h3>
                </div>
                <ul className="mt-4 divide-y divide-ink/10">
                  {HORARIOS.map((h) => (
                    <li
                      key={h.dias}
                      className="flex items-center justify-between py-2.5 text-[15px]"
                    >
                      <span className="font-semibold text-ink">{h.dias}</span>
                      <span className="text-ink/65">{h.horas}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Contatos */}
            <Reveal delay={180}>
              <div className="grid gap-3 sm:grid-cols-3">
                {CONTATOS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-2 rounded-2xl border-2 border-ink bg-white p-4 transition-transform duration-200 hover:-translate-y-1"
                    >
                      <span
                        className={`grid h-10 w-10 place-items-center rounded-lg border-2 border-ink ${c.cor} text-white`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wide text-ink/50">
                        {c.label}
                      </span>
                      <span className="break-words text-sm font-semibold text-ink">
                        {c.valor}
                      </span>
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* ---------- Mapa ---------- */}
          <Reveal delay={120} className="min-h-[420px]">
            <div className="h-full overflow-hidden rounded-2xl border-2 border-ink">
              <iframe
                src={MAPS_EMBED}
                title="Mapa — JM Copy, Rua Afonso Pena 43, Boa Vista, Recife"
                className="h-full min-h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
