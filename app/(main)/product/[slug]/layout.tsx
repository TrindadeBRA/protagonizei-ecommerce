import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalhes do Produto",
  description: "Veja todos os detalhes, especificações e avaliações do produto na Protagonizei. Frete grátis para todo Brasil.",
  openGraph: {
    title: "Detalhes do Produto | Protagonizei",
    description: "Veja todos os detalhes, especificações e avaliações do produto na Protagonizei.",
    type: "product",
  },
};

export default function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

