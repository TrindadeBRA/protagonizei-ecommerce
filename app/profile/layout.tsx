import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu Perfil",
  description: "Acesse seu perfil na Protagonizei. Gerencie suas informações pessoais, endereços e preferências de compra.",
  openGraph: {
    title: "Meu Perfil | Protagonizei",
    description: "Acesse seu perfil na Protagonizei e gerencie suas informações.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

