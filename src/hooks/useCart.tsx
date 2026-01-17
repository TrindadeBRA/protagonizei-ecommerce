'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface CartContextType {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export default function CartProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((prev) => !prev)

  return <CartContext.Provider value={{ isOpen, open, close, toggle }}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

