"use client";

import { useEffect, useState } from "react";

/* Imagens que se alternam na seção "Sobre" — apresentação automática
   em crossfade, sem dots nem setas. */
const IMAGENS = [
  {
    src: "/galeria/03-cartao-hot-stamping.jpg",
    alt: "Cartões de visita com acabamento hot stamping dourado feitos pela JM Copy",
  },
  {
    src: "/galeria/13-dia-das-maes.jpeg",
    alt: "presente de Dia das Mães personalizado feito pela JM Copy",
  },
  {
    src: "/galeria/14-caneca-personalizada.jpeg",
    alt: "Caneca personalizada feita pela JM Copy",
  },
  {
    src: "/galeria/02-encadernacao-capa-dura.jpg",
    alt: "Encadernação capa dura feita pela JM Copy",
  },
  {
    src: "/galeria/01-cartao-visita-dourado.jpg",
    alt: "Cartões de visita dourados feitos pela JM Copy",
  },
  {
    src: "/galeria/04-ecobag-personalizada.jpg",
    alt: "Ecobags personalizadas feitas pela JM Copy",
  },
  {
    src: "/galeria/05-crachas-cordao.jpg",
    alt: "Crachás com cordão personalizados feitos pela JM Copy",
  },
  
 
  {
    src: "/galeria/10-camisas.webp",
    alt: "Camisas personalizadas feitas pela JM Copy",
  },
  {
    src: "/galeria/11-carimbo.jpeg",
    alt: "Carimbo personalizado feito pela JM Copy",
  },
];

const INTERVALO = 1500;

export function SobreSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGENS.length);
    }, INTERVALO);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[4/5] w-full">
      {IMAGENS.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i === index ? undefined : true}
        />
      ))}
    </div>
  );
}
