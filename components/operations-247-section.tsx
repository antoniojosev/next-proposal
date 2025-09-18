import { Card } from "@/components/ui/card"
import { Clock, TrendingUp, Users, DollarSign } from "lucide-react"

export function Operations247Section() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            📊 Proyecciones de Ahorro y Productividad
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comparación detallada de cómo nuestros planes transforman su operación actual en términos medibles:
            <span className="font-semibold text-accent">tiempo, personal y capacidad de crecimiento</span>
          </p>
        </div>

        {/* KPIs Section */}
        <div className="mb-12">

          {/* Performance Highlights */}
          <div className="mt-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 border-2 border-accent/30">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-primary mb-2">🎯 Rendimiento Operativo Garantizado</h4>
                <p className="text-muted-foreground">Métricas de eficiencia y confiabilidad del sistema</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Cierre diario */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⏱️</span>
                  </div>
                  <h5 className="text-lg font-bold text-primary mb-3">Cierre Diario</h5>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between p-2 bg-destructive/10 rounded text-sm">
                      <span>Antes:</span>
                      <span className="font-bold text-destructive">2-4 horas</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-accent/20 rounded text-sm">
                      <span>Con Starter:</span>
                      <span className="font-bold text-accent">15-30 min</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-accent mb-1">85%</div>
                  <div className="text-xs text-muted-foreground">reducción de tiempo</div>
                </div>

                {/* Escalabilidad */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">�</span>
                  </div>
                  <h5 className="text-lg font-bold text-primary mb-3">Escalabilidad</h5>
                  <div className="bg-accent/20 rounded-lg p-4 mb-4">
                    <div className="text-3xl font-bold text-accent mb-1">0→1000</div>
                    <div className="text-sm text-muted-foreground">viajes sin personal extra</div>
                  </div>
                  <div className="text-lg font-bold text-primary mb-1">Crecimiento sin límites</div>
                  <div className="text-xs text-muted-foreground">mismo equipo, más operaciones</div>
                </div>

                {/* Disponibilidad */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔄</span>
                  </div>
                  <h5 className="text-lg font-bold text-primary mb-3">Disponibilidad</h5>
                  <div className="bg-secondary/20 rounded-lg p-4 mb-4">
                    <div className="text-3xl font-bold text-secondary mb-1">99.5%</div>
                    <div className="text-sm text-muted-foreground">uptime garantizado</div>
                  </div>
                  <div className="text-lg font-bold text-primary mb-1">24/7/365</div>
                  <div className="text-xs text-muted-foreground">servicio ininterrumpido</div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full border-2 border-accent/30">
                  <span className="text-lg">🚀</span>
                  <span className="font-semibold text-primary">Sistema probado con más de 1M de operaciones procesadas</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Impact Metrics Dashboard */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">📊 Impacto Medible del Plan Starter</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transformación operativa con resultados cuantificables y beneficios inmediatos
            </p>
          </div>

          {/* Hero Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-8 text-center bg-gradient-to-br from-accent/20 to-accent/5 border-accent/50">
              <div className="text-5xl font-bold text-accent mb-2">5x</div>
              <div className="text-lg font-semibold text-primary mb-2">Más Capacidad</div>
              <p className="text-sm text-muted-foreground">
                Equipo actual maneja 5 veces más operaciones por día
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-primary/20 to-primary/5 border-primary/50">
              <div className="text-5xl font-bold text-primary mb-2">80%</div>
              <div className="text-lg font-semibold text-primary mb-2">Menos Tiempo</div>
              <p className="text-sm text-muted-foreground">
                Reducción en tiempo administrativo por operación
              </p>
            </Card>
            
            <Card className="p-8 text-center bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/50">
              <div className="text-5xl font-bold text-secondary mb-2">98%</div>
              <div className="text-lg font-semibold text-primary mb-2">Automatización</div>
              <p className="text-sm text-muted-foreground">
                Operaciones procesadas sin intervención humana
              </p>
            </Card>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-destructive/10 to-destructive/5">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">😰</span>
                </div>
                <h4 className="text-xl font-bold text-destructive mb-2">Operación Actual (WhatsApp)</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                  <span className="text-sm font-medium">Tiempo por viaje</span>
                  <span className="font-bold text-destructive">5 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                  <span className="text-sm font-medium">Viajes por admin/día</span>
                  <span className="font-bold text-destructive">192</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                  <span className="text-sm font-medium">Confirmación de pago</span>
                  <span className="font-bold text-destructive">Manual</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                  <span className="text-sm font-medium">Cierre diario</span>
                  <span className="font-bold text-destructive">2-4h</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="text-xl font-bold text-accent mb-2">Con Plan Starter</h4>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                  <span className="text-sm font-medium">Tiempo por viaje</span>
                  <span className="font-bold text-accent">1 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                  <span className="text-sm font-medium">Viajes por admin/día</span>
                  <span className="font-bold text-accent">960+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                  <span className="text-sm font-medium">Confirmación de pago</span>
                  <span className="font-bold text-accent">10-30s</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded">
                  <span className="text-sm font-medium">Cierre diario</span>
                  <span className="font-bold text-accent">15-30min</span>
                </div>
              </div>
            </Card>
          </div>

          {/* ROI Calculator */}
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-2 border-accent/30">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-primary mb-2">💰 Calculadora de Ahorro</h4>
              <p className="text-muted-foreground">Ejemplo con 500 viajes diarios</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <div className="text-3xl font-bold text-destructive mb-2">42h</div>
                <div className="text-sm font-semibold text-primary mb-1">Tiempo Actual</div>
                <div className="text-xs text-muted-foreground">500 viajes × 5min</div>
              </div>
              
              <div className="text-center p-4 bg-white/50 rounded-lg">
                <div className="text-3xl font-bold text-accent mb-2">8h</div>
                <div className="text-sm font-semibold text-primary mb-1">Con Starter</div>
                <div className="text-xs text-muted-foreground">500 viajes × 1min</div>
              </div>
              
              <div className="text-center p-4 bg-accent/20 rounded-lg border-2 border-accent">
                <div className="text-3xl font-bold text-accent mb-2">34h</div>
                <div className="text-sm font-semibold text-primary mb-1">Ahorradas/Día</div>
                <div className="text-xs text-muted-foreground">= 4.25 empleados</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-primary">
                🎯 <span className="text-accent">Ahorro mensual equivalente a 4 salarios administrativos</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}