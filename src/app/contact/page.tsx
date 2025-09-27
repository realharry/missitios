'use client'

import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('¡Gracias por tu mensaje! Te responderemos pronto.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Correo Electrónico',
      value: 'contacto@missitios.mx',
      action: 'mailto:contacto@missitios.mx'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+52 55 1234 5678',
      action: 'tel:+5255123456789'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Ciudad de México, México',
      action: 'https://maps.google.com/?q=Ciudad+de+Mexico'
    },
    {
      icon: Clock,
      label: 'Horario de Atención',
      value: 'Lun - Vie: 9:00 AM - 6:00 PM',
      action: null
    }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">Contáctanos</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            ¿Tienes preguntas, sugerencias o quieres agregar tu negocio? 
            Estamos aquí para ayudarte. Ponte en contacto con nuestro equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Envíanos un Mensaje</h2>
              <p className="text-muted-foreground">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="add-business">Agregar mi negocio</option>
                  <option value="update-business">Actualizar información de negocio</option>
                  <option value="report-issue">Reportar un problema</option>
                  <option value="partnership">Propuesta de colaboración</option>
                  <option value="general">Consulta general</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Información de Contacto</h2>
              <p className="text-muted-foreground">
                También puedes comunicarte con nosotros directamente a través de cualquiera de estos medios.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = (
                  <div className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.label}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                )

                return info.action ? (
                  <a
                    key={index}
                    href={info.action}
                    className="block hover:scale-105 transition-transform"
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/30">
                  <h4 className="font-semibold mb-2">¿Es gratis agregar mi negocio?</h4>
                  <p className="text-sm text-muted-foreground">
                    Sí, agregar tu negocio a MisSitios es completamente gratuito. 
                    Solo necesitas tener un sitio web activo.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/30">
                  <h4 className="font-semibold mb-2">¿Cuánto tiempo toma aparecer en la lista?</h4>
                  <p className="text-sm text-muted-foreground">
                    Una vez que envíes tu información, revisamos y aprobamos los negocios 
                    en un plazo de 2-3 días hábiles.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-muted/30">
                  <h4 className="font-semibold mb-2">¿Puedo actualizar mi información?</h4>
                  <p className="text-sm text-muted-foreground">
                    Por supuesto. Contáctanos con los cambios que necesites y 
                    actualizaremos tu información rápidamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}