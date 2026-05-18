import { siteConfig } from "@/config/site";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";

type IconName = keyof typeof Icons;

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = Icons[name as IconName] as React.ComponentType<LucideProps>;
  if (!Icon) return null;
  return <Icon {...props} />;
}

export function Servicos() {
  return (
    <section id="servicos" className="py-20 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Tudo que você precisa em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.servicos.map((servico) => (
            <div
              key={servico.titulo}
              className="border border-border rounded-lg p-6 space-y-3 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <DynamicIcon
                  name={servico.icone}
                  className="w-6 h-6 text-primary"
                />
              </div>
              <h3 className="font-semibold text-lg">{servico.titulo}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
