'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type ColorTheme = 'default' | 'mexican' | 'sunset' | 'ocean'

interface ThemeContextType {
  theme: Theme
  colorTheme: ColorTheme
  setTheme: (theme: Theme) => void
  setColorTheme: (colorTheme: ColorTheme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  defaultColorTheme = 'default',
  storageKey = 'theme',
  colorStorageKey = 'color-theme',
}: {
  children: React.ReactNode
  defaultTheme?: Theme
  defaultColorTheme?: ColorTheme
  storageKey?: string
  colorStorageKey?: string
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [colorTheme, setColorTheme] = useState<ColorTheme>(defaultColorTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Get stored values only after mount
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(storageKey) as Theme | null
      const storedColorTheme = localStorage.getItem(colorStorageKey) as ColorTheme | null
      
      if (storedTheme) {
        setTheme(storedTheme)
      }
      if (storedColorTheme) {
        setColorTheme(storedColorTheme)
      }
    }
  }, [storageKey, colorStorageKey])

  useEffect(() => {
    if (!mounted) return
    
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')
    root.classList.remove('theme-default', 'theme-mexican', 'theme-sunset', 'theme-ocean')

    if (theme === 'dark') {
      root.classList.add('dark')
    }

    if (colorTheme !== 'default') {
      root.classList.add(`theme-${colorTheme}`)
    }
  }, [theme, colorTheme, mounted])

  const value = {
    theme,
    colorTheme,
    setTheme: (theme: Theme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, theme)
      }
      setTheme(theme)
    },
    setColorTheme: (colorTheme: ColorTheme) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(colorStorageKey, colorTheme)
      }
      setColorTheme(colorTheme)
    },
    toggleTheme: () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      if (typeof window !== 'undefined') {
        localStorage.setItem(storageKey, newTheme)
      }
      setTheme(newTheme)
    },
  }

  // Don't render until after hydration to prevent mismatch
  if (!mounted) {
    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}