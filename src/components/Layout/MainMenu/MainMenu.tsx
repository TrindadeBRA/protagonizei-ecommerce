'use client'

import { useState } from 'react'
import MenuAuthenticated from './MenuAuthenticated'
import MenuGuest from './MenuGuest'

export default function MainMenu() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated)
  }

  return isAuthenticated ? (
    <MenuAuthenticated onToggleAuth={toggleAuth} />
  ) : (
    <MenuGuest onToggleAuth={toggleAuth} />
  )
}
