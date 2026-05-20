export type Foto = { src: string; titulo: string; tag: string };

/** Card de foto da galeria. `variant` controla o comportamento entre
   masonry (desktop) e carrossel (mobile) — o visual do card é o mesmo. */
export function FotoCard({
  foto,
  variant,
}: {
  foto: Foto;
  variant: "masonry" | "carrossel";
}) {
  const carrossel = variant === "carrossel";
  return (
    <figure className="group relative h-full overflow-hidden rounded-2xl border-2 border-paper">
      <img
        src={foto.src}
        alt={foto.titulo}
        className={`w-full object-cover transition-transform duration-500 ${
          carrossel ? "aspect-[4/5]" : "group-hover:scale-105"
        }`}
        loading="lazy"
        draggable={false}
      />
      <div
        className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/10 to-transparent transition-opacity duration-300 ${
          carrossel ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <figcaption className="p-5">
          <span className="inline-block rounded-full border border-paper/60 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-paper/80">
            {foto.tag}
          </span>
          <p className="mt-2 font-display text-xl font-semibold text-paper">
            {foto.titulo}
          </p>
        </figcaption>
      </div>
    </figure>
  );
}
