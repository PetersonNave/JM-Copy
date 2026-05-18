import { siteConfig } from "@/config/site";

export function Diferenciais() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Por que escolher a {siteConfig.nome}?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {siteConfig.diferenciais.map((item) => (
            <div key={item.titulo} className="space-y-2">
              <p className="text-5xl font-bold">{item.valor}</p>
              <p className="text-primary-foreground/70 text-sm uppercase tracking-wide">
                {item.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
