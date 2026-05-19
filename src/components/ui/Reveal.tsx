"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** atraso em ms para encadear (stagger) elementos */
  delay?: number;
  /** tag HTML a renderizar */
  as?: "div" | "section" | "li" | "article" | "span";
};

/**
 * Envolve qualquer conteúdo e o revela com fade + slide quando entra na tela.
 * Anima apenas uma vez. Respeita prefers-reduced-motion (ver globals.css).
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Tag dinâmica — o cast mantém o JSX tipado enquanto o runtime usa `as`.
  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
