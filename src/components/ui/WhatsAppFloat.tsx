"use client";

import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const waLink = whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMensagem);

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm hidden sm:inline">WhatsApp</span>
    </a>
  );
}
