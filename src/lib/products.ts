import kitSolo from "@/assets/bioplastia-product.jpg";
import kitCompleto from "@/assets/kit-completo.jpg";
import kitPro from "@/assets/kit-pro.jpg";

export type Kit = {
  id: "solo" | "completo" | "pro";
  name: string;
  tagline: string;
  price: number;
  image: string;
  features: string[];
  highlight?: boolean;
};

export const KITS: Kit[] = [
  {
    id: "solo",
    name: "Kit Solo",
    tagline: "Para quem já conhece a rotina",
    price: 297,
    image: kitSolo,
    features: [
      "Bioplastia Capilar 1L",
      "0% formol · pH 0,5–2,0",
      "Rende até 8 aplicações",
    ],
  },
  {
    id: "completo",
    name: "Kit Completo",
    tagline: "Rotina recomendada pela marca",
    price: 447,
    image: kitCompleto,
    highlight: true,
    features: [
      "Shampoo Universal 1L",
      "Bioplastia Capilar 1L",
      "Passo a passo profissional",
      "Resultado salão em casa",
    ],
  },
  {
    id: "pro",
    name: "Kit Pro",
    tagline: "O ritual completo",
    price: 597,
    image: kitPro,
    features: [
      "Shampoo Universal 1L",
      "Bioplastia Capilar 1L",
      "Máscara Pós-Química 500g",
      "Manutenção semanal",
      "Brinde exclusivo Venutti",
    ],
  },
];

export const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
