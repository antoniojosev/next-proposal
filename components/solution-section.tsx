import { Card } from "@/components/ui/card"
import { CheckCircle, Smartphone, Zap, BarChart3, MapPin, CreditCard, Bot, TrendingUp } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Aplicación propia, moderna y confiable",
      description: "Interfaz intuitiva y profesional para usuarios",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Solicitud de taxi en segundos",
      description: "Proceso automatizado y rápido de reservas",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Conductores reciben viajes automáticamente",
      description: "Asignación inteligente y eficiente de rutas",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Panel centralizado para administración",
      description: "Control total de operaciones en tiempo real",
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Geolocalización en tiempo real",
      description: "Seguimiento preciso de pasajeros y conductores",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Cartera virtual para manejo de créditos",
      description: "Sistema de pagos y créditos integrado",
    },
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "Integración con IA para mayor automatización",
      description: "Menos dependencia de administradores humanos",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Métricas avanzadas para análisis completo",
      description: "Ganancias, desgaste de vehículos y productividad",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">✅ La Solución</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tecnología moderna que automatiza y optimiza todo el proceso de movilidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="text-center">
                <div className="flex justify-center mb-4">{solution.icon}</div>
                <h3 className="font-semibold mb-2 text-balance">{solution.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{solution.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
