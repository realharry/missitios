import React from 'react'
import { Users, Target, Heart, Zap } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      description: 'Conectar a la comunidad de Ciudad de México con los mejores negocios locales, facilitando el descubrimiento de sitios web únicos y auténticos.'
    },
    {
      icon: Users,
      title: 'Comunidad Local',
      description: 'Apoyamos a los emprendedores y negocios locales de CDMX, creando una red sólida de empresas que contribuyen al crecimiento económico de nuestra ciudad.'
    },
    {
      icon: Heart,
      title: 'Pasión por México',
      description: 'Celebramos la diversidad y riqueza cultural de Ciudad de México, destacando negocios que reflejan nuestras tradiciones y valores.'
    },
    {
      icon: Zap,
      title: 'Innovación Digital',
      description: 'Utilizamos tecnología moderna para crear una plataforma accesible, rápida y fácil de usar que beneficie tanto a usuarios como a empresarios.'
    }
  ]

  const stats = [
    { number: '200+', label: 'Negocios Registrados' },
    { number: '15+', label: 'Categorías' },
    { number: '1000+', label: 'Visitantes Mensuales' },
    { number: '98%', label: 'Satisfacción de Usuarios' }
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="container">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Acerca de <span className="text-primary">MisSitios</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Somos el directorio digital líder de negocios locales en Ciudad de México, 
            dedicado a conectar a la comunidad con los mejores sitios web empresariales de la capital.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Nuestra Historia
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                MisSitios nació en 2024 con una visión clara: crear un puente digital entre 
                los increíbles negocios de Ciudad de México y las personas que buscan servicios 
                auténticos y de calidad.
              </p>
              <p>
                Reconocimos que muchos negocios locales tenían sitios web fantásticos pero 
                carecían de visibilidad en el vasto mundo digital. Al mismo tiempo, los 
                residentes de CDMX necesitaban una manera confiable de descubrir nuevos lugares 
                y servicios en su ciudad.
              </p>
              <p>
                Hoy, MisSitios es más que un directorio; es una comunidad que celebra la 
                diversidad empresarial de nuestra ciudad, desde las tradicionales taquerías 
                del Centro Histórico hasta los innovadores estudios de tecnología en Santa Fe.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Lo Que Nos Mueve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex gap-4 p-6 rounded-lg border bg-card">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestro Impacto
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nuestro Compromiso
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Estamos comprometidos a mantener MisSitios como una plataforma gratuita, 
              accesible y centrada en la comunidad. Nuestro equipo trabaja constantemente 
              para mejorar la experiencia tanto de usuarios como de empresarios, 
              asegurándonos de que cada negocio reciba la visibilidad que merece.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Creemos en el poder de la tecnología para fortalecer las comunidades locales 
              y estamos orgullosos de contribuir al crecimiento económico de Ciudad de México, 
              una empresa a la vez.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}