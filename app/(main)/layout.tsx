import type { Metadata } from "next";
import MainMenu from "@/src/components/Layout/MainMenu/MainMenu";
import Footer from "@/src/components/Layout/Footer/Footer";
import CartProvider from "@/src/hooks/useCart";
import CartDrawer from "@/src/components/Cart/CartDrawer";

export const metadata: Metadata = {
  title: "Início",
  description: "Bem-vindo à Protagonizei. Descubra nossa seleção especial de produtos com qualidade garantida e os melhores preços do mercado.",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <MainMenu />
      {children}
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}

