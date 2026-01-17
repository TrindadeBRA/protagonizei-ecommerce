import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Explore nossa coleção completa de produtos na Protagonizei. Encontre o que precisa com qualidade e preço que cabem no seu bolso.",
  openGraph: {
    title: "Produtos | Protagonizei",
    description: "Explore nossa coleção completa de produtos na Protagonizei.",
    type: "website",
  },
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

