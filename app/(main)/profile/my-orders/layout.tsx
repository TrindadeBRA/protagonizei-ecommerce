import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meus Pedidos",
  description: "Acompanhe o status de todos os seus pedidos na Protagonizei. Veja detalhes, histórico e faça o rastreamento das entregas.",
  openGraph: {
    title: "Meus Pedidos | Protagonizei",
    description: "Acompanhe o status de todos os seus pedidos na Protagonizei.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MyOrdersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

