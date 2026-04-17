import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Testimonials } from "@/components/site/Testimonials";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { About } from "@/components/site/About";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { WhatsappFloat } from "@/components/site/WhatsappFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bioplastia Capilar Venutti — Progressiva 0% Formol" },
      {
        name: "description",
        content:
          "Bioplastia Capilar Venutti Professional: progressiva sem formol que alinha, reconstrói e hidrata em um único passo. Brilho espelhado, fios alinhados, resultado salão.",
      },
      { property: "og:title", content: "Bioplastia Capilar Venutti — 0% Formol" },
      {
        property: "og:description",
        content: "A progressiva de alta performance da Venutti Professional. Sem formol, sem medo.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <BeforeAfter />
        <About />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
