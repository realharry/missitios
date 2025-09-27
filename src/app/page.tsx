'use client'

import React, { useState, useMemo } from 'react'
import { Search, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BusinessCard } from '@/components/business-card'
import { businesses, categories } from '@/data/businesses'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const featuredBusinesses = businesses.filter(business => business.featured)
  
  const filteredBusinesses = useMemo(() => {
    let filtered = showFeaturedOnly ? featuredBusinesses : businesses
    
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(business => business.category === selectedCategory)
    }
    
    if (searchTerm) {
      filtered = filtered.filter(business =>
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    return filtered
  }, [searchTerm, selectedCategory, showFeaturedOnly, featuredBusinesses])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Descubre los Mejores
              <span className="text-primary"> Sitios Web </span>
              de Ciudad de México
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Tu directorio confiable para conectar con los negocios locales más destacados. 
              Encuentra restaurantes, servicios, cultura y mucho más.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Explorar Negocios
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Agregar Mi Negocio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Negocios Destacados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Los sitios web más populares y reconocidos de nuestra comunidad empresarial
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBusinesses.slice(0, 6).map((business) => (
              <BusinessCard 
                key={business.id} 
                business={business} 
                featured 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explora Todos los Negocios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Busca y filtra por categoría para encontrar exactamente lo que necesitas
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Buscar negocios, tags o descripción..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-md bg-background"
                />
              </div>
              <Button
                variant={showFeaturedOnly ? "default" : "outline"}
                onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {showFeaturedOnly ? 'Mostrar Todos' : 'Solo Destacados'}
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Business Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBusinesses.map((business) => (
              <BusinessCard 
                key={business.id} 
                business={business} 
                featured={business.featured}
              />
            ))}
          </div>

          {filteredBusinesses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No se encontraron negocios que coincidan con tus criterios de búsqueda.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              ¿Tienes un Negocio en Ciudad de México?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Únete a nuestra comunidad y haz que más personas descubran tu sitio web. 
              Es gratis y toma menos de 5 minutos.
            </p>
            <Button size="lg" className="text-lg px-8">
              Agregar Mi Negocio Gratis
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
