import textureArt from "@/assets/texture-art.jpg";
import { useReveal } from "@/hooks/use-reveal";

const CASES = [
  {
    label: "Cabelo cacheado",
    before: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1595944946218-fc2dee9c93ee?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "Cabelo ondulado",
    before: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=400&q=80",
  },
  {
    label: "Liso com volume",
    before: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
  },
];

export function BeforeAfter() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="resultado" ref={ref} className="bg-surface py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="reveal relative aspect-[4/5] overflow-hidden bg-background">
          <img src={textureArt} alt="Textura do produto" loading="lazy" className="h-full w-full object-cover" width={1024} height={1280} />
        </div>

        <div className="reveal flex flex-col justify-center">
          <p className="eyebrow mb-5">Você sente a diferença</p>
          <h2 className="display-serif text-4xl md:text-5xl lg:text-[3.4rem]">
            Antes e depois <br />
            da <span className="accent-italic">Bioplastia.</span>
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            Em uma única aplicação, fios alinhados, brilho espelhado e a leveza
            que você procurava — independente do seu tipo de cabelo.
          </p>

          <div className="mt-10 space-y-4">
            {CASES.map((c, i) => (
              <div key={i} className="reveal flex items-center gap-4 border border-border bg-background p-3">
                <div className="grid grid-cols-2 gap-2 flex-1">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={c.before} alt={`Antes ${c.label}`} loading="lazy" className="h-full w-full object-cover grayscale" />
                    <span className="absolute left-2 top-2 bg-background/90 px-2 py-0.5 text-[9px] uppercase tracking-[0.2em]">Antes</span>
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <img src={c.after} alt={`Depois ${c.label}`} loading="lazy" className="h-full w-full object-cover" />
                    <span className="absolute left-2 top-2 bg-accent px-2 py-0.5 text-[9px] uppercase tracking-[0.2em] text-accent-foreground">Depois</span>
                  </div>
                </div>
                <div className="hidden w-32 shrink-0 sm:block">
                  <p className="font-serif italic text-lg leading-tight">{c.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a href="#precos" className="btn-primary">Quero esse resultado</a>
          </div>
        </div>
      </div>
    </section>
  );
}
