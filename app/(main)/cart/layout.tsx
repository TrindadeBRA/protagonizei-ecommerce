import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carrinho de Compras",
  description: "Revise seus itens no carrinho antes de finalizar sua compra na Protagonizei. Aproveite frete grátis em pedidos acima de R$ 100.",
  openGraph: {
    title: "Carrinho de Compras | Protagonizei",
    description: "Revise seus itens no carrinho antes de finalizar sua compra na Protagonizei.",
    type: "website",
  },
};

export default function CartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

