import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Clock, Handshake, Rocket } from "lucide-react"

export function CTASection() {
  const steps = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Definir plan adecuado",
      description: "Analizamos sus necesidades específicas",
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: "Firma de acuerdo de desarrollo",
      description: "Establecemos términos y cronograma",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Lanzamiento en 8–12 semanas",
      description: "Desarrollo, pruebas y puesta en marcha",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">🚀 Próximos Pasos</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Comience su transformación digital hoy mismo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-full">{step.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-primary-foreground/80 text-pretty">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-2xl font-bold mb-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Rocket className="w-6 h-6" />
            <span>Menos gasto, más control, más clientes felices</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            <ArrowRight className="w-5 h-5 mr-2" />
            Comenzar Ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Agendar Consulta
          </Button>
        </div>

        <div className="text-center mt-8 text-primary-foreground/80">
          <p className="text-sm">
            ¿Preguntas? Contáctenos:{" "}
            <a href="mailto:info@movilidad.com" className="underline hover:text-white">
              info@movilidad.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
