"use client";

import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5581983091209?text=" +
  encodeURIComponent("Olá, JM Copy! Vim pelo site e gostaria de um orçamento.");

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Portfólio", href: "#galeria" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

function Logo() {
  return (
    <a
      href="#topo"
      className="flex items-center gap-2.5"
      aria-label="JM Copy — Gráfica Rápida"
    >
      <img
        src="/icons/logo-without-text.png"
        alt="JM Copy"
        className="h-12 w-auto sm:h-14"
      />
      <span className="flex flex-col border-l-2 border-ink/15 pl-2.5 leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
          Gráfica
        </span>
        <span className="font-display text-lg font-semibold italic tracking-tight text-magenta sm:text-xl">
          Rápida
        </span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-ink bg-paper/95 backdrop-blur-sm"
          : "border-b-2 border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-semibold text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-[3px] w-0 bg-magenta transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border-2 border-ink bg-magenta px-5 py-2.5 text-sm font-bold text-paper shadow-sticker-sm transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir orçamento
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-paper text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed inset-x-0 top-[72px] z-30 origin-top border-b-2 border-ink bg-paper transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-3 font-display text-2xl font-semibold text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-magenta px-5 py-3.5 font-bold text-paper shadow-sticker-sm"
          >
            <MessageCircle className="h-5 w-5" />
            Pedir orçamento no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
