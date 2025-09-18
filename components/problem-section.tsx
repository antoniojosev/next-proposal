import { Card } from "@/components/ui/card"
import { AlertTriangle, Clock, DollarSign, Users, TrendingDown, Settings } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: <Users className="w-8 h-8 text-destructive" />,
      title: "Clientes solicitan taxis por WhatsApp",
      description: "Proceso desorganizado y poco profesional",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-destructive" />,
      title: "6 administradoras coordinan viajes manualmente",
      description: "Alto costo operativo y riesgo de errores",
    },
    {
      icon: <Clock className="w-8 h-8 text-destructive" />,
      title: "Proceso lento y costoso",
      description: "Tiempos de espera largos y ineficiencia",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-destructive" />,
      title: "Riesgo de errores y pérdida de clientes",
      description: "Falta de control y trazabilidad",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-destructive" />,
      title: "Imposibilidad de crecimiento escalable",
      description: "El modelo manual no permite expansión eficiente",
    },
    {
      icon: <Settings className="w-8 h-8 text-destructive" />,
      title: "Control no centralizado",
      description: "Información dispersa y difícil de gestionar",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-destructive mb-6">❌ El Problema Actual</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            La gestión con asistentes y WhatsApp eleva costos y reduce la eficiencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">{problem.icon}</div>
              <h3 className="font-semibold mb-2 text-balance">{problem.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
