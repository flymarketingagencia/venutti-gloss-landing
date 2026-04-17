import productImg from "@/assets/bioplastia-product.jpg";
import { Droplets, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const LABELS_LEFT = [
  { title: "0% Formol", sub: "Fórmula segura" },
  { title: "pH 0,5–2,0", sub: "Ação alinhante" },
  { title: "Resultado duradouro", sub: "Até 4 meses" },
];
const LABELS_RIGHT = [
  { title: "Óleo de Ojon", sub: "+ Oxotanina-100" },
  { title: "Reduz volume", sub: "Hidrata · reconstrói" },
  { title: "Vegano", sub: "Cruelty-free" },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="produto" ref={ref} className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Sobre o produto</p>
          <h2 className="display-serif text-4xl md:text-5xl lg:text-[3.4rem]">
            Tecnologia capilar <br />
            em <span className="accent-italic">um único passo.</span>
          </h2>
        </div>

        {/* Product with labels */}
        <div className="reveal mt-20 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          {/* Left labels */}
          <ul className="order-2 space-y-10 md:order-1 md:col-span-3 md:text-right">
            {LABELS_LEFT.map((l, i) => (
              <li key={i} className="relative">
                <p className="font-serif text-2xl leading-tight">{l.title}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-soft">{l.sub}</p>
                <span className="hidden md:block absolute right-[-4rem] top-1/2 h-px w-12 bg-ink" />
              </li>
            ))}
          </ul>

          {/* Bottle */}
          <div className="order-1 md:order-2 md:col-span-6">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 -z-10 bg-surface rounded-full blur-3xl opacity-60 scale-90" />
              <img src={productImg} alt="Frasco Bioplastia Venutti" loading="lazy" className="w-full h-auto" width={1024} height={1024} />
            </div>
          </div>

          {/* Right labels */}
          <ul className="order-3 space-y-10 md:col-span-3">
            {LABELS_RIGHT.map((l, i) => (
              <li key={i} className="relative">
                <p className="font-serif text-2xl leading-tight">{l.title}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-ink-soft">{l.sub}</p>
                <span className="hidden md:block absolute left-[-4rem] top-1/2 h-px w-12 bg-ink" />
              </li>
            ))}
          </ul>
        </div>

        {/* How to use */}
        <div className="reveal mt-28 border-t border-border pt-16">
          <p className="eyebrow text-center mb-5">Como usar</p>
          <h3 className="display-serif text-center text-3xl md:text-4xl mb-14">
            Dois passos. <span className="accent-italic">Resultado salão.</span>
          </h3>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            <div className="bg-background p-10 md:p-14">
              <div className="flex items-start gap-6">
                <span className="font-serif text-5xl text-accent">01</span>
                <div className="flex-1">
                  <Droplets className="h-6 w-6 text-ink mb-4" strokeWidth={1.2} />
                  <h4 className="font-serif text-2xl mb-2">Shampoo Universal</h4>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    Lave os fios duas vezes para abrir as cutículas. Seque 100% antes
                    do próximo passo.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background p-10 md:p-14">
              <div className="flex items-start gap-6">
                <span className="font-serif text-5xl text-accent">02</span>
                <div className="flex-1">
                  <Sparkles className="h-6 w-6 text-ink mb-4" strokeWidth={1.2} />
                  <h4 className="font-serif text-2xl mb-2">Redutor Bioplastia</h4>
                  <p className="text-sm text-ink-soft leading-relaxed">
                    Aplique mecha por mecha, deixe agir 40 min, enxágue 50% e finalize
                    com escova + chapinha.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
