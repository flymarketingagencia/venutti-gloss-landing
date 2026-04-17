import heroImg from "@/assets/bioplastia-hero.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 md:pt-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 md:grid-cols-12 md:gap-8 md:px-10 md:pb-32">
        {/* Text */}
        <div className="md:col-span-7 animate-fade-up">
          <p className="eyebrow mb-8">Venutti Professional · Linha Bioplastia</p>
          <h1 className="display-serif text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Cabelos lisos, leves <br className="hidden sm:block" />
            e <span className="accent-italic">vivos</span> — sem formol, <br className="hidden sm:block" />
            sem medo.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            Conheça a Bioplastia Capilar Venutti — a progressiva de alta performance
            que alinha, reconstrói e hidrata em um único passo.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a href="#precos" className="btn-primary">Quero minha bioplastia</a>
            <a href="#resultado" className="btn-ghost">Ver antes e depois ↓</a>
          </div>

          <div className="mt-14 flex items-center gap-8">
            <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-ink text-center text-[9px] font-medium uppercase tracking-[0.18em] leading-tight">
              <span className="text-base font-serif italic text-accent">0%</span>
              <span>Formol</span>
              <span className="mt-1 text-[8px] text-ink-soft">pH 0,5–2,0</span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              Aprovado pela <br /> ANVISA · Vegano
            </div>
          </div>
        </div>

        {/* Image / pedestal */}
        <div className="relative md:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-x-8 top-10 -z-10 aspect-square rounded-full bg-surface blur-2xl opacity-70" />
            <img
              src={heroImg}
              alt="Frasco da Bioplastia Capilar Venutti em pedestal branco"
              className="w-full h-auto"
              width={1024}
              height={1280}
            />
          </div>
          <p className="mt-6 text-center text-[10px] uppercase tracking-[0.28em] text-ink-soft">
            Edição Profissional · 1 Litro
          </p>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-t border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 py-5 text-[10px] uppercase tracking-[0.25em] text-ink-soft md:px-10">
          <span>Sem Formol</span>
          <span className="text-accent">◆</span>
          <span>Sem Quebra</span>
          <span className="text-accent">◆</span>
          <span>Brilho Espelhado</span>
          <span className="text-accent">◆</span>
          <span>Reduz Volume</span>
          <span className="text-accent">◆</span>
          <span>Hidrata + Reconstrói</span>
        </div>
      </div>
    </section>
  );
}
