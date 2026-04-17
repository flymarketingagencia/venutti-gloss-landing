import { useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { KITS, formatBRL } from "@/lib/products";
import { useReveal } from "@/hooks/use-reveal";

export function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <section id="precos" ref={ref} className="bg-surface py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Escolha seu kit</p>
          <h2 className="display-serif text-4xl md:text-5xl lg:text-[3.4rem]">
            Transformação em <br />
            <span className="accent-italic">3 caminhos.</span>
          </h2>
        </div>

        <div className="reveal mt-20 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
          {KITS.map((kit) => {
            const featured = kit.highlight;
            return (
              <article
                key={kit.id}
                className={`pricing-card relative flex flex-col p-8 md:p-10 ${
                  featured ? "md:-translate-y-6 md:shadow-[var(--shadow-pedestal)] !border-ink" : ""
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 right-6 rotate-3 bg-accent px-3 py-1 text-[9px] font-medium uppercase tracking-[0.22em] text-accent-foreground">
                    Mais vendido
                  </span>
                )}

                <div className="aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={kit.image}
                    alt={kit.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    width={1024}
                    height={768}
                  />
                </div>

                <div className="mt-8 flex-1 flex flex-col">
                  <p className="eyebrow mb-3">{kit.tagline}</p>
                  <h3 className="font-serif text-3xl mb-6">{kit.name}</h3>

                  <ul className="space-y-3 mb-8 flex-1">
                    {kit.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" strokeWidth={2} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-ink-soft">Investimento</p>
                    <p className="font-serif text-5xl mt-1 mb-6">{formatBRL(kit.price)}</p>

                    <button
                      onClick={() => navigate({ to: "/checkout", search: { kit: kit.id } })}
                      className="btn-primary w-full"
                    >
                      Quero este kit
                    </button>
                    <p className="mt-4 text-center text-[10px] uppercase tracking-[0.2em] text-ink-soft">
                      Frete grátis acima de R$ 299
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
