import logo from "@/assets/venutti-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center md:px-10">
        <img src={logo} alt="Venutti Professional" className="h-10 w-auto" loading="lazy" width={160} height={40} />
        <p className="eyebrow">Professional Hair Couture · Brasil</p>
        <p className="max-w-md text-xs text-ink-soft">
          Venutti Professional · CNPJ 00.000.000/0001-00 · Belo Horizonte, MG
        </p>
        <div className="flex gap-6 text-[10px] uppercase tracking-[0.22em] text-ink-soft">
          <a href="#" className="hover:text-accent">Trocas</a>
          <a href="#" className="hover:text-accent">Privacidade</a>
          <a href="#" className="hover:text-accent">Termos</a>
        </div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-ink-soft">
          © {new Date().getFullYear()} Venutti — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
