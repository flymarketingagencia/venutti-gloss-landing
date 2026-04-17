import { Play, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useReveal } from "@/hooks/use-reveal";

const VIDEOS = [
  { name: "Ana, 32", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80" },
  { name: "Júlia, 28", img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80" },
  { name: "Camila, 35", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80" },
  { name: "Bruna, 26", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80" },
];

export function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" });
  };

  return (
    <section ref={ref} className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">Quem experimenta, se apaixona</p>
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl">
              O resultado <span className="accent-italic">fala</span> por si.
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={() => scroll(-1)} aria-label="Anterior" className="flex h-12 w-12 items-center justify-center border border-ink hover:bg-ink hover:text-background transition-colors">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scroll(1)} aria-label="Próximo" className="flex h-12 w-12 items-center justify-center border border-ink hover:bg-ink hover:text-background transition-colors">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="reveal mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:gap-6"
          style={{ scrollbarWidth: "none" }}
        >
          {VIDEOS.map((v, i) => (
            <button
              key={i}
              className="group relative shrink-0 snap-start overflow-hidden bg-surface"
              style={{ width: "min(72vw, 280px)", aspectRatio: "9 / 16" }}
            >
              <img src={v.img} alt={`Depoimento ${v.name}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-5 w-5 fill-current ml-0.5" />
                </span>
              </div>
              <div className="absolute bottom-4 left-4 text-left text-background">
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-80">[vídeo cliente]</p>
                <p className="font-serif text-lg">{v.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
