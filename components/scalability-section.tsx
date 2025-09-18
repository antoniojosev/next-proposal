import { Card } from "@/components/ui/card"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function ScalabilitySection() {
  const data = [
    {
      name: "Viajes/día",
      basic: "2,000",
      advanced: "6,000",
    },
    {
      name: "Usuarios simultáneos",
      basic: "100",
      advanced: "350",
    },
    {
      name: "Usuarios registrados",
      basic: "6,000",
      advanced: "17,500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">📈 Escalabilidad de la Plataforma</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Capacidad comprobada para crecer con su negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Plan Básico</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hasta 2,000 viajes/día</li>
                <li>• 100 usuarios simultáneos</li>
                <li>• 5,000–7,000 usuarios registrados</li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-accent">
              <h3 className="text-xl font-bold text-accent mb-4">Plan Avanzado</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Hasta 6,000 viajes/día</li>
                <li>• 300–400 usuarios simultáneos</li>
                <li>• 15,000–20,000 usuarios registrados</li>
              </ul>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Comparación de Capacidades</h3>
            <div className="space-y-4">
              {data.map((item) => (
                <div key={item.name} className="space-y-2">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-chart-1/20 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-chart-1">{item.basic}</div>
                      <div className="text-xs text-muted-foreground">Plan Básico</div>
                    </div>
                    <div className="bg-chart-2/20 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-chart-2">{item.advanced}</div>
                      <div className="text-xs text-muted-foreground">Plan Avanzado</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Gráfico temporalmente deshabilitado por incompatibilidad React 19 + Recharts */}
            {/* <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Plan Básico" fill="hsl(var(--chart-1))" />
                <Bar dataKey="Plan Avanzado" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer> */}
          </Card>
        </div>
      </div>
    </section>
  )
}
