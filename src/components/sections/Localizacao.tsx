import { siteConfig } from "@/config/site";
import { MapPin, Clock, Phone } from "lucide-react";

export function Localizacao() {
  return (
    <section id="localizacao" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Onde estamos</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Informações */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Endereço</p>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.endereco.rua}
                  <br />
                  {siteConfig.endereco.bairro} — {siteConfig.endereco.cidade},{" "}
                  {siteConfig.endereco.estado}
                </p>
                <a
                  href={siteConfig.endereco.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm underline underline-offset-2 mt-1 inline-block"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Contato</p>
                <p className="text-muted-foreground text-sm">
                  {siteConfig.telefone}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold mb-1">Horário de funcionamento</p>
                <div className="space-y-1">
                  {siteConfig.horario.map((h) => (
                    <div key={h.dias} className="flex gap-2 text-sm">
                      <span className="text-muted-foreground w-36">
                        {h.dias}
                      </span>
                      <span className="font-medium">{h.horas}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mapa embed */}
          <div className="rounded-lg overflow-hidden border border-border h-72 lg:h-full min-h-[280px] bg-muted">
            {siteConfig.endereco.googleMapsEmbed ? (
              <iframe
                src={siteConfig.endereco.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                Adicionar embed do Google Maps em siteConfig
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
