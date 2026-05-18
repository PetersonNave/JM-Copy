import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/utils";
import { MessageCircle, MapPin } from "lucide-react";

export function Hero() {
  const waLink = whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMensagem);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground px-4 py-20">
      {/* Imagem de fundo — colocar hero.jpg em /public */}
      {/* <Image src="/hero.jpg" alt="Hero" fill className="object-cover opacity-20" /> */}

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        {/* Logo */}
        {/* <Image src="/logo.png" alt={siteConfig.nome} width={160} height={60} className="mx-auto" /> */}

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          {siteConfig.slogan}
        </h1>

        <p className="text-lg md:text-xl opacity-80 max-w-xl mx-auto">
          {siteConfig.descricao}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Falar pelo WhatsApp
          </a>

          <a
            href={siteConfig.endereco.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            <MapPin className="w-5 h-5" />
            Como chegar
          </a>
        </div>

        {/* Avaliação rápida */}
        <p className="text-sm opacity-60 pt-2">
          ⭐ {siteConfig.avaliacoes.nota} no Google •{" "}
          {siteConfig.avaliacoes.total}+ avaliações
        </p>
      </div>
    </section>
  );
}
