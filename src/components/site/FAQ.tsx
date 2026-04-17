import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const FAQS = [
  {
    q: "A Bioplastia é realmente sem formol?",
    a: "Sim. A Bioplastia Venutti é 100% livre de formol e derivados (glutaraldeído, ácido glioxílico). Sua ação alinhante vem da combinação de Óleo de Ojon e Oxotanina-100 com pH controlado entre 0,5 e 2,0.",
  },
  {
    q: "Funciona em cabelo cacheado?",
    a: "Funciona em todos os tipos de cabelo. Em cachos, o efeito reduz o volume e dá movimento natural sem eliminar a textura — para alisamento total, recomendamos a aplicação completa com chapinha em temperatura média.",
  },
  {
    q: "Quanto tempo dura o efeito?",
    a: "Em média 3 a 4 meses, dependendo do tipo de cabelo, frequência de lavagem e cuidados pós. O uso da Máscara Pós-Química do Kit Pro prolonga o resultado.",
  },
  {
    q: "Pode usar em cabelo com química?",
    a: "Sim. A Bioplastia é compatível com tinturas, mechas, descoloração e progressivas anteriores. Faça sempre o teste de mecha antes da aplicação completa.",
  },
  {
    q: "Preciso de chapinha?",
    a: "Para alisamento máximo, sim — recomendamos chapinha entre 180°C e 200°C. Se o objetivo é apenas reduzir volume e dar brilho, finalize com escova.",
  },
  {
    q: "Em quanto tempo recebo?",
    a: "Sudeste: 2 a 5 dias úteis. Demais regiões: 5 a 10 dias úteis. Frete grátis em compras acima de R$ 299.",
  },
];

export function FAQ() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="faq" ref={ref} className="bg-background py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-20 md:px-10">
        <div className="md:col-span-5">
          <p className="eyebrow mb-5">Perguntas frequentes</p>
          <h2 className="display-serif text-4xl md:text-5xl lg:text-[3.4rem]">
            Ainda tem <br /><span className="accent-italic">dúvida?</span>
          </h2>
          <p className="mt-6 max-w-sm text-ink-soft">
            Nosso time profissional está pronto para te atender com toda a expertise
            Venutti.
          </p>

          <div className="mt-10 space-y-5">
            <a href="https://wa.me/5531988340065" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="flex h-11 w-11 items-center justify-center bg-accent text-accent-foreground">
                <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-ink-soft">WhatsApp</p>
                <p className="font-serif text-lg group-hover:text-accent transition-colors">(31) 98834-0065</p>
              </div>
            </a>
            <a href="https://instagram.com/venuttiprofessional" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="flex h-11 w-11 items-center justify-center border border-ink">
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-ink-soft">Instagram</p>
                <p className="font-serif text-lg group-hover:text-accent transition-colors">@venuttiprofessional</p>
              </div>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <span className="flex h-11 w-11 items-center justify-center border border-ink">
                <Youtube className="h-4 w-4" strokeWidth={1.5} />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-ink-soft">YouTube</p>
                <p className="font-serif text-lg group-hover:text-accent transition-colors">Venutti Professional</p>
              </div>
            </a>
          </div>
        </div>

        <div className="md:col-span-7">
          <Accordion type="single" collapsible className="border-t border-border">
            {FAQS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left font-serif text-xl md:text-2xl hover:no-underline hover:text-accent">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink-soft text-base leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
