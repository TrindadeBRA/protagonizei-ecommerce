'use client'

import MainMenu from "@/src/components/Layout/MainMenu/MainMenu";
import Footer from "@/src/components/Layout/Footer/Footer";
import CartProvider from "@/src/hooks/useCart";
import CartDrawer from "@/src/components/Cart/CartDrawer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <MainMenu />
      {children}
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}

