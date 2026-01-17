'use client'

import type { Metadata } from "next";
import { useEffect } from 'react'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Esconde MainMenu e Footer nas rotas de auth
    const menu = document.querySelector('header')
    const footer = document.querySelector('footer')
    if (menu) menu.style.display = 'none'
    if (footer) footer.style.display = 'none'
    
    return () => {
      if (menu) menu.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])

  return <>{children}</>;
}

