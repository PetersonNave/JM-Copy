"use client";

import { useEffect, useRef } from "react";
import { FotoCard, type Foto } from "@/components/ui/FotoCard";

const VELOCIDADE = 0.6; // pixels por frame (~36px/s a 60fps)
const RETOMAR_APOS = 2000; // ms de espera antes de voltar a andar sozinho

/** Carrossel horizontal (mobile) que passa sozinho e infinitamente.
   Pausa enquanto o usuário interage e retoma após um curto intervalo. */
export function CarrosselGaleria({ fotos }: { fotos: Foto[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const pausado = useRef(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respeita quem prefere menos movimento — fica só como scroll manual.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Largura exata de um conjunto de fotos (para o loop ser perfeito).
    let umConjunto = 0;
    const medir = () => {
      const primeiro = el.children[0] as HTMLElement | undefined;
      const duplicado = el.children[fotos.length] as HTMLElement | undefined;
      if (primeiro && duplicado) {
        umConjunto = duplicado.offsetLeft - primeiro.offsetLeft;
      }
    };
    medir();
    window.addEventListener("resize", medir);

    let raf = 0;
    const passo = () => {
      // Não trabalha quando o carrossel está escondido (desktop).
      if (el.offsetParent !== null && !pausado.current && umConjunto > 0) {
        el.scrollLeft += VELOCIDADE;
        if (el.scrollLeft >= umConjunto) el.scrollLeft -= umConjunto;
      }
      raf = requestAnimationFrame(passo);
    };
    raf = requestAnimationFrame(passo);

    const pausar = () => {
      pausado.current = true;
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = null;
      }
    };
    const agendarRetomada = () => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        pausado.current = false;
      }, RETOMAR_APOS);
    };
    const cutucar = () => {
      pausar();
      agendarRetomada();
    };

    el.addEventListener("pointerdown", pausar);
    el.addEventListener("pointerup", agendarRetomada);
    el.addEventListener("pointercancel", agendarRetomada);
    el.addEventListener("touchstart", pausar, { passive: true });
    el.addEventListener("touchend", agendarRetomada, { passive: true });
    el.addEventListener("wheel", cutucar, { passive: true });
    el.addEventListener("mouseenter", pausar);
    el.addEventListener("mouseleave", agendarRetomada);

    return () => {
      cancelAnimationFrame(raf);
      if (timer.current) clearTimeout(timer.current);
      window.removeEventListener("resize", medir);
      el.removeEventListener("pointerdown", pausar);
      el.removeEventListener("pointerup", agendarRetomada);
      el.removeEventListener("pointercancel", agendarRetomada);
      el.removeEventListener("touchstart", pausar);
      el.removeEventListener("touchend", agendarRetomada);
      el.removeEventListener("wheel", cutucar);
      el.removeEventListener("mouseenter", pausar);
      el.removeEventListener("mouseleave", agendarRetomada);
    };
  }, [fotos.length]);

  // Lista duplicada para o loop infinito ser contínuo.
  const loop = [...fotos, ...fotos];

  return (
    <div
      ref={ref}
      className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 sm:hidden"
    >
      {loop.map((f, i) => (
        <div key={i} className="w-[78%] shrink-0">
          <FotoCard foto={f} variant="carrossel" />
        </div>
      ))}
    </div>
  );
}
