import React from 'react'
import { ExternalLink, MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Business } from '@/data/businesses'

interface BusinessCardProps {
  business: Business
  featured?: boolean
}

export function BusinessCard({ business, featured = false }: BusinessCardProps) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
            <Star className="h-3 w-3 fill-current" />
            <span>Destacado</span>
          </div>
        </div>
      )}
      
      <div className="relative">
        <div className="aspect-video w-full bg-muted rounded-t-lg flex items-center justify-center">
          <div className="text-muted-foreground text-sm">
            {business.name}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-lg leading-none tracking-tight">
                {business.name}
              </h3>
              <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                {business.category}
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
              <MapPin className="h-3 w-3" />
              <span>{business.location}</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-3">
            {business.description}
          </p>
          
          <div className="flex flex-wrap gap-1">
            {business.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
            {business.tags.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{business.tags.length - 3} más
              </span>
            )}
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button asChild size="sm" className="flex-1">
              <a 
                href={business.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-3 w-3" />
                Visitar Sitio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}