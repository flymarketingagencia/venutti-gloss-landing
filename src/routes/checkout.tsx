import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Lock } from "lucide-react";
import { KITS, formatBRL, type Kit } from "@/lib/products";
import logo from "@/assets/venutti-logo.png";

type Search = { kit?: Kit["id"] };

export const Route = createFileRoute("/checkout")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    kit: (search.kit as Kit["id"]) ?? "completo",
  }),
  head: () => ({
    meta: [
      { title: "Checkout — Venutti Professional" },
      { name: "description", content: "Finalize seu pedido da Bioplastia Capilar Venutti." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { kit: kitId } = Route.useSearch();
  const navigate = useNavigate();
  const [selectedKitId, setSelectedKitId] = useState<Kit["id"]>(kitId ?? "completo");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const kit = KITS.find((k) => k.id === selectedKitId)!;
  const shipping = kit.price >= 299 ? 0 : 24.9;
  const total = kit.price + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
        <div className="max-w-md text-center animate-fade-up">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Check className="h-7 w-7" strokeWidth={2} />
          </div>
          <p className="eyebrow mb-4">Pedido confirmado</p>
          <h1 className="display-serif text-4xl md:text-5xl mb-6">
            Obrigado pela <span className="accent-italic">confiança.</span>
          </h1>
          <p className="text-ink-soft mb-10">
            Seu pedido do <strong>{kit.name}</strong> foi recebido. Em instantes
            você receberá um e-mail com o código de rastreio. (Fluxo placeholder)
          </p>
          <Link to="/" className="btn-primary">Voltar à loja</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-soft hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Continuar comprando
          </Link>
          <img src={logo} alt="Venutti Professional" className="h-7 w-auto" />
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink-soft">
            <Lock className="h-3 w-3" /> Checkout seguro
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-14 md:grid-cols-5 md:gap-16 md:px-10 md:py-20">
        {/* Form */}
        <form onSubmit={handleSubmit} className="md:col-span-3 space-y-10">
          <div>
            <p className="eyebrow mb-3">Etapa 01</p>
            <h2 className="display-serif text-3xl mb-6">Contato</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Nome completo" placeholder="Seu nome" required />
              <Field label="E-mail" type="email" placeholder="voce@email.com" required />
              <Field label="Telefone / WhatsApp" placeholder="(00) 00000-0000" required />
              <Field label="CPF" placeholder="000.000.000-00" required />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Etapa 02</p>
            <h2 className="display-serif text-3xl mb-6">Endereço de entrega</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="CEP" placeholder="00000-000" required />
              <Field label="Cidade / UF" placeholder="Belo Horizonte / MG" required />
              <div className="sm:col-span-2">
                <Field label="Endereço completo" placeholder="Rua, número, complemento, bairro" required />
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Etapa 03</p>
            <h2 className="display-serif text-3xl mb-6">Pagamento</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field label="Número do cartão" placeholder="0000 0000 0000 0000" />
              </div>
              <Field label="Validade" placeholder="MM/AA" />
              <Field label="CVV" placeholder="000" />
            </div>
            <p className="mt-4 text-[11px] text-ink-soft">
              Este é um fluxo de demonstração. Nenhum pagamento será processado.
            </p>
          </div>

          <button type="submit" disabled={submitting} className="btn-primary w-full !py-5 disabled:opacity-60">
            {submitting ? "Processando..." : `Finalizar pedido · ${formatBRL(total)}`}
          </button>
        </form>

        {/* Summary */}
        <aside className="md:col-span-2">
          <div className="sticky top-8 border border-border bg-surface p-8">
            <p className="eyebrow mb-5">Seu pedido</p>

            <div className="mb-6 flex gap-4 border-b border-border pb-6">
              <img src={kit.image} alt={kit.name} className="h-24 w-24 object-cover bg-background" />
              <div className="flex-1">
                <h3 className="font-serif text-xl mb-1">{kit.name}</h3>
                <p className="text-xs text-ink-soft mb-2">{kit.tagline}</p>
                <p className="font-serif text-lg">{formatBRL(kit.price)}</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink-soft mb-3">Trocar kit</p>
              <div className="space-y-2">
                {KITS.map((k) => (
                  <button
                    key={k.id}
                    type="button"
                    onClick={() => {
                      setSelectedKitId(k.id);
                      navigate({ to: "/checkout", search: { kit: k.id } });
                    }}
                    className={`flex w-full items-center justify-between border p-3 text-left text-sm transition-colors ${
                      k.id === selectedKitId ? "border-ink bg-background" : "border-border hover:border-ink"
                    }`}
                  >
                    <span>{k.name}</span>
                    <span className="font-serif">{formatBRL(k.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 border-t border-border pt-5 text-sm">
              <Row label="Subtotal" value={formatBRL(kit.price)} />
              <Row label="Frete" value={shipping === 0 ? "Grátis" : formatBRL(shipping)} />
              <div className="mt-4 flex items-end justify-between border-t border-border pt-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">Total</span>
                <span className="font-serif text-3xl">{formatBRL(total)}</span>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

function Field({ label, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.22em] text-ink-soft mb-2">{label}</span>
      <input
        {...rest}
        className="w-full border border-border bg-background px-4 py-3 text-sm focus:border-ink focus:outline-none transition-colors"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink-soft">{label}</span>
      <span>{value}</span>
    </div>
  );
}
