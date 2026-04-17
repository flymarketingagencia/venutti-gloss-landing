import { Link } from "@tanstack/react-router";
import logo from "@/assets/venutti-logo.png";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Venutti Professional" className="h-8 md:h-9 w-auto" width={160} height={36} />
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-ink-soft sm:inline-block ml-2">
            Professional
          </span>
        </Link>
        <nav className="hidden items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-foreground md:flex">
          <a href="#produto" className="hover:text-accent transition-colors">Produto</a>
          <a href="#resultado" className="hover:text-accent transition-colors">Resultado</a>
          <a href="#precos" className="hover:text-accent transition-colors">Kits</a>
          <a href="#faq" className="hover:text-accent transition-colors">FAQ</a>
        </nav>
        <a href="#precos" className="btn-primary !py-3 !px-5 text-[10px]">
          Comprar
        </a>
      </div>
    </header>
  );
}
