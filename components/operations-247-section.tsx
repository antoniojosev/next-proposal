import { Card } from "@/components/ui/card"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Clock, TrendingUp, Users, DollarSign } from "lucide-react"

export function Operations247Section() {
  const productivityData = [
    {
      name: "10 Autos",
      "16h (2 turnos)": 480,
      "24h (3 turnos)": 720,
    },
    {
      name: "15 Autos",
      "16h (2 turnos)": 720,
      "24h (3 turnos)": 1080,
    },
    {
      name: "20 Autos",
      "16h (2 turnos)": 960,
      "24h (3 turnos)": 1440,
    },
  ]

  const adminData = [
    {
      name: "100 viajes/día",
      "WhatsApp Manual": 1,
      "App Básica": 1,
      "App Avanzada 24/7": 1,
    },
    {
      name: "200 viajes/día",
      "WhatsApp Manual": 2,
      "App Básica": 1,
      "App Avanzada 24/7": 1,
    },
    {
      name: "300 viajes/día",
      "WhatsApp Manual": 2,
      "App Básica": 1,
      "App Avanzada 24/7": 1,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            🚀 Plan Startup: Operación 24/7 Autosustentable
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Maximiza tu productividad con operación continua y automatización inteligente
          </p>
        </div>

        {/* Key Benefits Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center border-2 border-accent/20 hover:border-accent/40 transition-colors">
            <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-bold text-primary mb-2">24/7 Continuo</h3>
            <p className="text-sm text-muted-foreground">Operación ininterrumpida sin supervisión manual</p>
          </Card>

          <Card className="p-6 text-center border-2 border-accent/20 hover:border-accent/40 transition-colors">
            <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-bold text-primary mb-2">+50% Productividad</h3>
            <p className="text-sm text-muted-foreground">Misma flota, 50% más viajes diarios</p>
          </Card>

          <Card className="p-6 text-center border-2 border-accent/20 hover:border-accent/40 transition-colors">
            <Users className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-bold text-primary mb-2">Menos Personal</h3>
            <p className="text-sm text-muted-foreground">1 administradora maneja hasta 1,440 viajes/día</p>
          </Card>

          <Card className="p-6 text-center border-2 border-accent/20 hover:border-accent/40 transition-colors">
            <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-bold text-primary mb-2">ROI Optimizado</h3>
            <p className="text-sm text-muted-foreground">Máximo retorno con mínima inversión operativa</p>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">Productividad por Flota</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">Viajes diarios según tamaño de flota</p>
            <div className="space-y-4">
              {productivityData.map((item) => (
                <div key={item.name} className="space-y-2">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-chart-1/20 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-chart-1">{item["16h (2 turnos)"]}</div>
                      <div className="text-xs text-muted-foreground">16h (2 turnos)</div>
                    </div>
                    <div className="bg-chart-2/20 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold text-chart-2">{item["24h (3 turnos)"]}</div>
                      <div className="text-xs text-muted-foreground">24h (3 turnos)</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Gráfico temporalmente deshabilitado por incompatibilidad React 19 + Recharts */}
            {/* <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="16h (2 turnos)" fill="hsl(var(--chart-1))" />
                <Bar dataKey="24h (3 turnos)" fill="hsl(var(--chart-2))" />
              </BarChart>
            </ResponsiveContainer> */}
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-primary mb-6 text-center">Eficiencia Administrativa</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">Administradoras requeridas por demanda</p>
            <div className="space-y-4">
              {adminData.map((item) => (
                <div key={item.name} className="space-y-2">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-destructive/20 p-2 rounded text-center">
                      <div className="text-sm font-bold text-destructive">{item["WhatsApp Manual"]}</div>
                      <div className="text-xs text-muted-foreground">WhatsApp</div>
                    </div>
                    <div className="bg-chart-1/20 p-2 rounded text-center">
                      <div className="text-sm font-bold text-chart-1">{item["App Básica"]}</div>
                      <div className="text-xs text-muted-foreground">App Básica</div>
                    </div>
                    <div className="bg-chart-2/20 p-2 rounded text-center">
                      <div className="text-sm font-bold text-chart-2">{item["App Avanzada 24/7"]}</div>
                      <div className="text-xs text-muted-foreground">App Avanzada</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Gráfico temporalmente deshabilitado por incompatibilidad React 19 + Recharts */}
            {/* <ResponsiveContainer width="100%" height={300}>
              <LineChart data={adminData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="WhatsApp Manual" stroke="hsl(var(--destructive))" strokeWidth={2} />
                <Line type="monotone" dataKey="App Básica" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                <Line type="monotone" dataKey="App Avanzada 24/7" stroke="hsl(var(--chart-2))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer> */}
          </Card>
        </div>

        {/* Comparison Table */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-primary mb-6 text-center">Comparación Operativa</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-semibold">Modalidad</th>
                  <th className="text-center p-3 font-semibold">Tiempo por Viaje</th>
                  <th className="text-center p-3 font-semibold">Viajes/Admin/Día</th>
                  <th className="text-center p-3 font-semibold">Horario</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-destructive/5">
                  <td className="p-3 font-medium">WhatsApp Manual</td>
                  <td className="text-center p-3">5 minutos</td>
                  <td className="text-center p-3">192</td>
                  <td className="text-center p-3">16h (2 turnos)</td>
                </tr>
                <tr className="border-b bg-chart-1/5">
                  <td className="p-3 font-medium">App Básica</td>
                  <td className="text-center p-3">2 minutos</td>
                  <td className="text-center p-3">480</td>
                  <td className="text-center p-3">16h (2 turnos)</td>
                </tr>
                <tr className="bg-accent/10">
                  <td className="p-3 font-medium text-accent">App Avanzada 24/7</td>
                  <td className="text-center p-3 text-accent font-bold">1 minuto</td>
                  <td className="text-center p-3 text-accent font-bold">1,440</td>
                  <td className="text-center p-3 text-accent font-bold">24h (3 turnos)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Key Insight */}
        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/20">
            <h3 className="text-2xl font-bold text-primary mb-4">💡 Insight Clave</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Con el Plan Startup, una sola administradora puede manejar el mismo volumen que
              <span className="font-bold text-accent"> 7 administradoras </span>
              en el sistema manual, operando las 24 horas de forma autosustentable.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
