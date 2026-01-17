import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finalizar Pedido",
  description: "Finalize seu pedido na Protagonizei. Preencha seus dados de entrega e pagamento de forma segura e rápida.",
  openGraph: {
    title: "Finalizar Pedido | Protagonizei",
    description: "Finalize seu pedido na Protagonizei de forma segura e rápida.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

