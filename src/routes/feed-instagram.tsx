import { createFileRoute, Link } from "@tanstack/react-router";
import { Grid3x3, Bookmark, UserSquare2, Settings, Instagram } from "lucide-react";
import logo from "@/assets/venutti-logo.png";
import post01 from "@/assets/feed/post-01-manifesto.jpg";
import post02 from "@/assets/feed/post-02-antes-depois.jpg";
import post03 from "@/assets/feed/post-03-produto.jpg";
import post04 from "@/assets/feed/post-04-quote.jpg";
import post05 from "@/assets/feed/post-05-modelo.jpg";
import post06 from "@/assets/feed/post-06-zero-formol.jpg";
import post07 from "@/assets/feed/post-07-passo-a-passo.jpg";
import post08 from "@/assets/feed/post-08-depoimento.jpg";
import post09 from "@/assets/feed/post-09-kit-cta.jpg";

export const Route = createFileRoute("/feed-instagram")({
  component: FeedInstagramPage,
  head: () => ({
    meta: [
      { title: "Feed Instagram @meulisoperfeito · Venutti" },
      { name: "description", content: "Mockup das primeiras 9 postagens do perfil @meulisoperfeito — Bioplastia Capilar Venutti." },
    ],
  }),
});

const POSTS = [
  { src: post01, title: "Manifesto", caption: "Apresentação do perfil. Um nome — uma promessa.", carousel: false },
  { src: post02, title: "Antes & Depois", caption: "Resultado em uma única aplicação, sem formol.", carousel: true },
  { src: post03, title: "Produto", caption: "Bioplastia Venutti em destaque — pedestal de joalheria.", carousel: false },
  { src: post04, title: "Quote Editorial", caption: "Filosofia da marca em uma frase.", carousel: false },
  { src: post05, title: "Modelo", caption: "Cabelo em movimento — vibe alta-costura.", carousel: false },
  { src: post06, title: "0% Formol", caption: "Selo educativo — ativos vegetais, zero queimação.", carousel: false },
  { src: post07, title: "Passo a Passo", caption: "Ritual em 4 passos. Salvar para depois.", carousel: true },
  { src: post08, title: "Depoimento", caption: "Prova social com tipografia editorial.", carousel: false },
  { src: post09, title: "Kit + CTA", caption: "Oferta de fechamento. Link na bio.", carousel: false },
];

function FeedInstagramPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-[11px] uppercase tracking-[0.25em] text-ink-soft hover:text-ink">
            ← voltar à landing
          </Link>
          <p className="font-serif italic text-lg">mockup do feed</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-[0.25em] text-ink-soft hover:text-ink"
          >
            instagram ↗
          </a>
        </div>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-16 text-center md:pt-24">
        <p className="eyebrow mb-5">estratégia de feed</p>
        <h1 className="display-serif text-4xl md:text-5xl lg:text-6xl">
          @meulisoperfeito <br />
          <span className="accent-italic">primeiras 9 postagens.</span>
        </h1>
        <p className="mt-6 text-ink-soft">
          Grid 3×3 pensado em zigue-zague editorial — descoberta, desejo e decisão. Cada
          quadrado conta parte da história da Bioplastia Venutti.
        </p>
      </section>

      {/* Phone-style profile mockup */}
      <section className="mx-auto max-w-md px-6 pb-20">
        <div className="overflow-hidden rounded-[2.5rem] border-[10px] border-ink bg-background shadow-[var(--shadow-pedestal)]">
          {/* Status bar mock */}
          <div className="flex items-center justify-between bg-background px-6 py-2 text-[10px] font-medium">
            <span>9:41</span>
            <span>••• 5G</span>
          </div>

          {/* IG header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-1">
              <p className="text-base font-semibold">meulisoperfeito</p>
              <span className="text-xs">▾</span>
            </div>
            <div className="flex items-center gap-3 text-ink">
              <Instagram className="h-5 w-5" />
              <Settings className="h-5 w-5" />
            </div>
          </div>

          {/* Profile info */}
          <div className="px-4 py-5">
            <div className="flex items-center gap-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-gradient-to-tr from-accent via-ink to-accent p-[3px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                  <img src={logo} alt="Venutti" className="h-12 w-12 object-contain" />
                </div>
              </div>
              <div className="flex flex-1 justify-around text-center">
                <div>
                  <p className="font-semibold">9</p>
                  <p className="text-xs text-ink-soft">posts</p>
                </div>
                <div>
                  <p className="font-semibold">12.4k</p>
                  <p className="text-xs text-ink-soft">seguidores</p>
                </div>
                <div>
                  <p className="font-semibold">128</p>
                  <p className="text-xs text-ink-soft">seguindo</p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm leading-relaxed">
              <p className="font-semibold">Meu Liso Perfeito</p>
              <p className="text-ink-soft">Bioplastia Capilar · 0% Formol</p>
              <p>Liso natural, brilho de salão — em casa.</p>
              <p>✨ Tecnologia Venutti Professional</p>
              <p className="font-medium text-accent">↓ kit oficial · frete grátis</p>
              <p className="text-accent">linktr.ee/meulisoperfeito</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="rounded-md bg-accent py-1.5 text-xs font-semibold text-accent-foreground">
                Seguindo ✓
              </button>
              <button className="rounded-md border border-border py-1.5 text-xs font-semibold">
                Mensagem
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="grid grid-cols-3 border-t border-border">
            <div className="flex justify-center border-t-2 border-ink py-3">
              <Grid3x3 className="h-5 w-5" />
            </div>
            <div className="flex justify-center py-3 text-ink-soft">
              <UserSquare2 className="h-5 w-5" />
            </div>
            <div className="flex justify-center py-3 text-ink-soft">
              <Bookmark className="h-5 w-5" />
            </div>
          </div>

          {/* Grid 3x3 */}
          <div className="grid grid-cols-3 gap-[2px] bg-border">
            {POSTS.map((p, i) => (
              <div key={i} className="relative aspect-square overflow-hidden bg-background">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {p.carousel && (
                  <div className="absolute right-1.5 top-1.5 rounded-full bg-ink/70 px-1.5 py-0.5 text-[8px] font-bold text-white">
                    ❏
                  </div>
                )}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity hover:opacity-100">
                  <p className="p-2 font-serif italic text-[11px] text-white">
                    {String(i + 1).padStart(2, "0")} · {p.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy notes */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="eyebrow mb-5">leitura do grid</p>
            <h2 className="display-serif text-3xl md:text-4xl">
              três linhas, <span className="accent-italic">três intenções.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                tag: "linha 01",
                title: "Descoberta",
                items: ["01 · Manifesto", "02 · Antes & Depois", "03 · Produto Hero"],
                desc: "Quem somos, o que entregamos e como o produto se apresenta.",
              },
              {
                tag: "linha 02",
                title: "Desejo",
                items: ["04 · Quote", "05 · Modelo", "06 · 0% Formol"],
                desc: "Filosofia, aspiração e diferencial técnico que constroem confiança.",
              },
              {
                tag: "linha 03",
                title: "Decisão",
                items: ["07 · Passo a Passo", "08 · Depoimento", "09 · Kit + CTA"],
                desc: "Como usar, prova social e oferta clara para conversão.",
              },
            ].map((b) => (
              <div key={b.tag} className="border-t border-ink pt-6">
                <p className="eyebrow mb-3">{b.tag}</p>
                <h3 className="font-serif text-2xl mb-4">{b.title}</h3>
                <ul className="space-y-1.5 text-sm text-ink-soft mb-5">
                  {b.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="text-sm text-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Captions */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <p className="eyebrow mb-5">notas por post</p>
            <h2 className="display-serif text-3xl md:text-4xl">
              o porquê de <span className="accent-italic">cada quadrado.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {POSTS.map((p, i) => (
              <article
                key={i}
                className="flex items-center gap-5 border border-border bg-background p-4"
              >
                <div className="aspect-square w-20 shrink-0 overflow-hidden md:w-24">
                  <img src={p.src} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                    post {String(i + 1).padStart(2, "0")} {p.carousel && "· carrossel"}
                  </p>
                  <p className="font-serif text-xl mt-0.5">{p.title}</p>
                  <p className="text-sm text-ink-soft mt-1">{p.caption}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/" className="btn-primary">voltar à landing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
