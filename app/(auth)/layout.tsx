import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Faça login na sua conta Protagonizei para acessar seus pedidos, favoritos e benefícios exclusivos.",
  openGraph: {
    title: "Login | Protagonizei",
    description: "Faça login na sua conta Protagonizei para acessar seus pedidos e favoritos.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

