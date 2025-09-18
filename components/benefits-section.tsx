import { Card } from "@/components/ui/card"
import { TrendingUp, Shield, Smartphone, Users } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      title: "Ahorro",
      description: "Ahorro inmediato en nómina y costos operativos",
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "Control",
      description: "Control total de viajes, pagos y operaciones",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-accent" />,
      title: "Experiencia",
      description: "Experiencia moderna tipo Uber para usuarios",
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Escalabilidad",
      description: "Escalable sin necesidad de más personal",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">🌟 Beneficios Clave</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Transforme su negocio con tecnología que realmente funciona
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all hover:scale-105 bg-card">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-accent/10 rounded-full">{benefit.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-accent">{benefit.title}</h3>
              <p className="text-muted-foreground text-pretty">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
