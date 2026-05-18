import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Galeria() {
  if (!siteConfig.galeria.length) return null;

  return (
    <section id="galeria" className="py-20 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Nosso Trabalho</h2>
          <p className="text-muted-foreground mt-3">
            Alguns exemplos do que fazemos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {siteConfig.galeria.map((item, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden bg-muted"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
