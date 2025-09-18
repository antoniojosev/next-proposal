"use client"

import { Button } from "@/components/ui/button"
import { Car, Smartphone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Car className="w-16 h-16 text-white" />
            <div className="absolute -top-2 -right-2 bg-accent rounded-full p-2">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">🚖 Propuesta Plataforma de Movilidad</h1>

        <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 text-pretty">
          Su propia aplicación tipo Uber, bajo su marca
        </p>

        <div className="flex justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-4"
            onClick={() => {
              document.getElementById('planes')?.scrollIntoView({ 
                behavior: 'smooth' 
              })
            }}
          >
            Ver Planes
          </Button>
        </div>
      </div>
    </section>
  )
}
