'use client'

import * as React from 'react'
import { Moon, Sun, Palette } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/theme-provider'

type ColorTheme = 'default' | 'mexican' | 'sunset' | 'ocean'

export function ThemeToggle() {
  const { theme, colorTheme, toggleTheme, setColorTheme } = useTheme()

  const colorThemes = [
    { value: 'default' as ColorTheme, label: 'Por Defecto', description: 'Tema clásico' },
    { value: 'mexican' as ColorTheme, label: 'Mexicano', description: 'Verde, rojo y dorado' },
    { value: 'sunset' as ColorTheme, label: 'Atardecer', description: 'Naranja, rosa y amarillo' },
    { value: 'ocean' as ColorTheme, label: 'Océano', description: 'Azul y aguamarina' },
  ]

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <Sun className="h-4 w-4" />
        <Switch
          checked={theme === 'dark'}
          onCheckedChange={toggleTheme}
          aria-label="Alternar modo oscuro"
        />
        <Moon className="h-4 w-4" />
      </div>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Palette className="h-4 w-4" />
            <span className="sr-only">Cambiar tema de colores</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Tema de Colores</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={colorTheme}
            onValueChange={(value) => setColorTheme(value as ColorTheme)}
          >
            {colorThemes.map((themeOption) => (
              <DropdownMenuRadioItem
                key={themeOption.value}
                value={themeOption.value}
                className="flex flex-col items-start"
              >
                <div className="font-medium">{themeOption.label}</div>
                <div className="text-xs text-muted-foreground">
                  {themeOption.description}
                </div>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}