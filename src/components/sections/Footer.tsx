import { siteConfig } from "@/config/site";
import { whatsappLink } from "@/lib/utils";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  const waLink = whatsappLink(siteConfig.whatsapp, siteConfig.whatsappMensagem);
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Marca */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">{siteConfig.nome}</h3>
            <p className="text-primary-foreground/60 text-sm">
              {siteConfig.descricao}
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-3">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-1 text-sm text-primary-foreground/70">
              <p>{siteConfig.telefone}</p>
              <p>{siteConfig.email}</p>
              <p>
                {siteConfig.endereco.rua} — {siteConfig.endereco.bairro}
              </p>
            </div>
          </div>

          {/* Redes e CTA */}
          <div className="space-y-4">
            <h4 className="font-semibold">Redes Sociais</h4>
            <div className="flex gap-3">
              {siteConfig.redes.instagram && (
                <a
                  href={siteConfig.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {siteConfig.redes.facebook && (
                <a
                  href={siteConfig.redes.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {siteConfig.redes.youtube && (
                <a
                  href={siteConfig.redes.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-primary-foreground/40">
          © {ano} {siteConfig.nome}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
