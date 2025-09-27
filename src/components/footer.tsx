import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const socialLinks = [
    { 
      href: 'https://facebook.com', 
      icon: Facebook, 
      label: 'Facebook',
      color: 'hover:text-blue-600'
    },
    { 
      href: 'https://twitter.com', 
      icon: Twitter, 
      label: 'Twitter',
      color: 'hover:text-sky-500'
    },
    { 
      href: 'https://instagram.com', 
      icon: Instagram, 
      label: 'Instagram',
      color: 'hover:text-pink-600'
    },
    { 
      href: 'https://linkedin.com', 
      icon: Linkedin, 
      label: 'LinkedIn',
      color: 'hover:text-blue-700'
    },
  ]

  const quickLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Acerca de' },
    { href: '/contact', label: 'Contacto' },
  ]

  return (
    <footer className="bg-muted/50 border-t mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">MisSitios</span>
            </div>
            <p className="text-muted-foreground">
              Tu directorio confiable de negocios locales en Ciudad de México. 
              Descubre y conecta con los mejores sitios web de la ciudad.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Ciudad de México, México</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+52 55 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contacto@missitios.mx</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold">Síguenos</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    className={`text-muted-foreground transition-colors ${social.color}`}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Conecta con nosotros en nuestras redes sociales para las últimas actualizaciones sobre negocios locales.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t bg-muted/80">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2024 MisSitios. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacidad
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}