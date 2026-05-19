"use client";

import { useEffect, useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/5581983091209?text=" +
  encodeURIComponent("Olá, JM Copy! Vim pelo site e gostaria de um orçamento.");

export function WhatsAppFloat() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 flex items-center gap-3 transition-all duration-500 ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <span className="hidden rounded-full border-2 border-ink bg-paper px-4 py-2 text-sm font-bold text-ink shadow-sticker-sm sm:block">
        Fala com a gente
      </span>
      <span className="relative grid h-16 w-16 place-items-center rounded-full border-2 border-ink bg-[#25D366] shadow-sticker transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        <svg
          viewBox="0 0 32 32"
          className="relative h-8 w-8 fill-white"
          aria-hidden="true"
        >
          <path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.7 1.9 6.7L3 29l7-1.8c1.9 1 4 1.6 6 1.6 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.8c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.9 1 1-3.8-.2-.4c-1.1-1.7-1.6-3.6-1.6-5.6C5.6 9.7 10.3 5 16 5s10.4 4.7 10.4 10.5S21.7 25.8 16 25.8zm5.7-7.8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1c-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-1 1-1.3 2.3-1.3 3.8 0 .2 0 .5.1.7.5 1.2 1.2 2.3 1.4 2.6.2.3 2.7 4.3 6.7 5.8 2.5 1 3.5 1 4.7.8.7-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
        </svg>
      </span>
    </a>
  );
}
