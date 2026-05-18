import { siteConfig } from "@/config/site";
import { Star } from "lucide-react";

function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < nota ? "fill-yellow-400 text-yellow-400" : "text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function Avaliacoes() {
  const { nota, total, destaques } = siteConfig.avaliacoes;

  return (
    <section id="avaliacoes" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-5xl font-bold">{nota}</span>
            <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
          </div>
          <p className="text-muted-foreground">
            Baseado em {total} avaliações no Google
          </p>
          <h2 className="text-3xl font-bold mt-4">O que nossos clientes dizem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destaques.map((av, i) => (
            <div
              key={i}
              className="border border-border rounded-lg p-6 space-y-3"
            >
              <Estrelas nota={av.nota} />
              <p className="text-sm text-muted-foreground leading-relaxed">
                &ldquo;{av.texto}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-sm">{av.nome}</p>
                <p className="text-xs text-muted-foreground">{av.data}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
