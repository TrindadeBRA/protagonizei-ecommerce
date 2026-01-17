'use client'

import { usePathname } from 'next/navigation'
import MainMenu from "@/src/components/Layout/MainMenu/MainMenu";
import Footer from "@/src/components/Layout/Footer/Footer";
import CartProvider from "@/src/hooks/useCart";
import CartDrawer from "@/src/components/Cart/CartDrawer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const isAuthRoute = pathname?.startsWith('/login')

  if (isAuthRoute) {
    return <>{children}</>
  }

  return (
    <CartProvider>
      <MainMenu />
      {children}
      <Footer />
      <CartDrawer />
    </CartProvider>
  );
}

