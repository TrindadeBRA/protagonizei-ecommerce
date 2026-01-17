import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Protagonizei - Livros Personalizados para Crianças",
    template: "%s | Protagonizei",
  },
  description: "Protagonizei - Histórias personalizadas onde o seu filho(a) é o protagonista. Com nome, rosto e magia. Entrega 100% digital.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://protagonizei.com",
    siteName: "Protagonizei",
    title: "Protagonizei - Livros Personalizados para Crianças",
    description: "Histórias personalizadas onde o seu filho(a) é o protagonista. Com nome, rosto e magia. Entrega 100% digital.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Protagonizei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protagonizei - Livros Personalizados para Crianças",
    description: "Histórias personalizadas onde o seu filho(a) é o protagonista. Com nome, rosto e magia.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
