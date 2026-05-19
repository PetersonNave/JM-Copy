import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const WHATSAPP_URL =
  "https://wa.me/5581983091209?text=" +
  encodeURIComponent("Olá, JM Copy! Vim pelo site e gostaria de um orçamento.");

export function CtaFinal() {
  return (
    <section className="grain relative overflow-hidden bg-grape py-24 text-paper sm:py-32">
      <div className="halftone pointer-events-none absolute -left-12 -top-12 h-80 w-80 text-sun/20" />
      <div className="halftone pointer-events-none absolute -bottom-16 -right-12 h-80 w-80 text-magenta/30" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="inline-block rounded-full border-2 border-paper px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
            Bora começar?
          </span>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.4rem)] font-semibold leading-[0.98]">
            Põe sua ideia
            <br />
            <span className="italic text-sun">no papel hoje.</span>
          </h2>
        </Reveal>

        <Reveal delay={170}>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-paper/75">
            Manda uma mensagem, conta o que precisa e receba seu orçamento sem
            compromisso. A gente responde rapidinho.
          </p>
        </Reveal>

        <Reveal delay={250}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-3 rounded-full border-2 border-ink bg-magenta px-9 py-5 text-lg font-bold text-paper shadow-sticker transition-transform duration-200 hover:-translate-y-1.5 active:translate-y-0"
          >
            <MessageCircle className="h-6 w-6" />
            Falar no WhatsApp
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-7 font-display text-xl italic text-paper/80">
            Você pensa, a gente realiza.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
