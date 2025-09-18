import { Card } from "@/components/ui/card"

export function ScalabilitySection() {
  const data = [
    {
      name: "Capacidad diaria",
      basic: "2,000 viajes",
      advanced: "6,000 viajes",
      beneficio: "3x más volumen"
    },
    {
      name: "Usuarios simultáneos",
      basic: "100 usuarios",
      advanced: "350 usuarios",
      beneficio: "3.5x más usuarios"
    },
    {
      name: "Base de usuarios",
      basic: "6,000 registrados",
      advanced: "17,500 registrados",
      beneficio: "2.9x más clientes"
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">📊 Capacidad de Escalamiento</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Su negocio puede crecer sin límites. Compare las capacidades de cada plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Plan Básico (Starter)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Viajes diarios:</span>
                  <span className="font-semibold">Hasta 2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Usuarios activos:</span>
                  <span className="font-semibold">100 simultáneos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base registrada:</span>
                  <span className="font-semibold">5,000–7,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Personal admin:</span>
                  <span className="font-semibold text-accent">1 persona</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded">
                <p className="text-sm text-primary font-semibold">✓ Ideal para validar mercado</p>
                <p className="text-xs text-muted-foreground">Reducción inmediata de costos administrativos</p>
              </div>
            </Card>

            <Card className="p-6 border-2 border-accent">
              <h3 className="text-xl font-bold text-accent mb-4">Plan Avanzado (Startup)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Viajes diarios:</span>
                  <span className="font-semibold">Hasta 6,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Usuarios activos:</span>
                  <span className="font-semibold">300–400 simultáneos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base registrada:</span>
                  <span className="font-semibold">15,000–20,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Personal admin:</span>
                  <span className="font-semibold text-accent">No necesario*</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-accent/10 rounded">
                <p className="text-sm text-accent font-semibold">🚀 Competir con Yummy/Ridery</p>
                <p className="text-xs text-muted-foreground">*Autosustentable: máxima automatización</p>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Comparación de Capacidades</h3>
            <div className="space-y-4">
              {data.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <span className="text-xs text-accent font-semibold bg-accent/10 px-2 py-1 rounded">{item.beneficio}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-chart-1/20 p-3 rounded-lg text-center">
                      <div className="text-sm font-bold text-chart-1">{item.basic}</div>
                      <div className="text-xs text-muted-foreground">Plan Básico</div>
                    </div>
                    <div className="bg-chart-2/20 p-3 rounded-lg text-center">
                      <div className="text-sm font-bold text-chart-2">{item.advanced}</div>
                      <div className="text-xs text-muted-foreground">Plan Avanzado</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">💰 Beneficios de Escalamiento:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Plan Básico:</strong> Validación de mercado con costos controlados</li>
                <li>• <strong>Plan Avanzado:</strong> Escalabilidad masiva con automatización total</li>
                <li>• <strong>Personal:</strong> Mismo equipo administrativo para 3x más volumen</li>
                <li>• <strong>Tecnología:</strong> Infraestructura que crece con su demanda</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
