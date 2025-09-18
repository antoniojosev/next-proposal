import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Smartphone, Car } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Plan Starter (MVP Básico)",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      price: "$4,700 - $7,200",
      monthly: "$300 - $500",
      description: "Ideal para comenzar y validar el mercado",
      features: [
        {
          name: "App Pasajeros",
          included: true,
          details: "Pedidos sencillos, precios y comprobantes, notificaciones push",
        },
        { name: "App Conductores", included: true, details: "Viajes asignados, aceptar/rechazar, estado de viaje" },
        { name: "Panel Admin", included: true, details: "Dashboard básico, gestión de pagos, reportes básicos" },
        { name: "Geolocalización en vivo", included: false },
        { name: "Cartera virtual", included: false },
        { name: "Reportes avanzados", included: false },
      ],
      popular: false,
    },
    {
      name: "Plan Startup (Avanzado)",
      icon: <Car className="w-8 h-8 text-accent" />,
      price: "$9,000 - $12,000",
      monthly: "$600 - $900",
      description: "Ideal para escalar y competir al nivel de Uber/Didi",
      features: [
        { name: "Todo lo del Starter", included: true, details: "Base sólida para operar" },
        { name: "Geolocalización en Tiempo Real", included: true, details: "Para pasajeros y conductores" },
        { name: "Cartera Virtual y Créditos", included: true, details: "Fideliza a tus usuarios" },
        { name: "Pagos en Línea Nacionales", included: true, details: "Integración con pasarelas locales" },
        { name: "Reportes Avanzados", included: true, details: "Analítica de datos para la toma de decisiones" },
      ],
      popular: true,
    },
  ]

  return (
    <section id="planes" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">📊 Planes Propuestos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Información detallada de nuestros planes de desarrollo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 relative ${plan.popular ? "border-2 border-accent shadow-xl" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  Más Popular
                </Badge>
              )}

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{plan.description}</p>

                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">Inversión inicial</div>
                </div>

                <div className="text-lg font-semibold text-accent">{plan.monthly}</div>
                <div className="text-sm text-muted-foreground">Mensualidad</div>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <div className={`font-medium ${feature.included ? "text-foreground" : "text-muted-foreground"}`}>
                        {feature.name}
                      </div>
                      {feature.details && (
                        <div className="text-sm text-muted-foreground text-pretty">{feature.details}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
