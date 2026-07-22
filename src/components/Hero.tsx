import { ArrowRight, BarChart3, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20">
              <Sparkles className="size-3.5" />
              <span>Costos fijos mínimos. Ganamos cuando vos ganás.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Recuperamos tu cartera con{' '}
              <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
                tecnología digital avanzada y contacto humano
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Conectamos con tus clientes de forma humana y personalizada. Automatizamos campañas por WhatsApp y mail, con facilidades de pago a medida y acceso total en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#calculadora"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-200 cursor-pointer"
              >
                Calcular Recupero
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#plataforma"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold bg-card border border-border text-foreground hover:bg-muted transition-all duration-200 cursor-pointer"
              >
                Ver Demo Interactiva
              </a>
            </div>

            {/* Quick Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-4 w-full border-t border-border mt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-success" />
                <span>Sin costos fijos de alta</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-success" />
                <span>Campañas automáticas multicanal</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-success" />
                <span>Gestor con amplia experiencia</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-success" />
                <span>Rendición de fondos inmediata</span>
              </div>
            </div>
          </div>

          {/* Graphical Mockup Card */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl bg-card border border-border p-6 shadow-2xl overflow-hidden group hover:border-primary/20 transition-all duration-500">

              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-red-400/80" />
                  <div className="size-3 rounded-full bg-yellow-400/80" />
                  <div className="size-3 rounded-full bg-green-400/80" />
                  <span className="text-[11px] font-medium text-muted-foreground ml-2">astre.net.ar</span>
                </div>
                <div className="flex items-center gap-1 bg-muted px-2 py-0.5 rounded text-[10px] text-muted-foreground">
                  <ShieldCheck className="size-3 text-success" />
                  <span>Seguro</span>
                </div>
              </div>

              {/* Mockup Body Content */}
              <div className="pt-5 space-y-5">

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-muted/50 p-3.5 rounded-xl border border-border">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Recuperado</p>
                    <p className="text-xl font-bold text-success mt-1">68.4%</p>
                  </div>
                  <div className="bg-muted/50 p-3.5 rounded-xl border border-border">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Convenios</p>
                    <p className="text-xl font-bold text-primary mt-1">124</p>
                  </div>
                  <div className="bg-muted/50 p-3.5 rounded-xl border border-border">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Activas</p>
                    <p className="text-xl font-bold mt-1">1,824</p>
                  </div>
                </div>

                {/* Timeline simulation */}
                <div className="space-y-3">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Últimas Acciones</p>

                  {/* Item 1 */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-card border border-border/80 hover:bg-muted/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-success font-semibold text-xs">
                        $
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-semibold">Compromiso de Pago Confirmado</p>
                        <p className="text-[10px] text-muted-foreground">Juan Pérez • Plan 3 cuotas</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-500/10 text-success px-2 py-0.5 rounded-full font-bold">Cobrado</span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-card border border-border/80 hover:bg-muted/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-primary font-semibold text-xs">
                        WA
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-semibold">Campaña WhatsApp Enviada</p>
                        <p className="text-[10px] text-muted-foreground">María Gomez • Recordatorio cuota 1</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-indigo-500/10 text-primary px-2 py-0.5 rounded-full font-bold">Enviado</span>
                  </div>
                </div>

                {/* Integration preview */}
                <div className="flex items-center justify-between bg-indigo-600/5 dark:bg-indigo-400/5 p-4 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3 text-left">
                    <BarChart3 className="size-5 text-primary" />
                    <div>
                      <p className="text-xs font-bold">Rendimiento Estimado Cartera</p>
                      <p className="text-[10px] text-muted-foreground">Últimos datos sincronizados hace 5m</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary">Detalle →</span>
                </div>
              </div>

              {/* Futuristic Glassmorphic overlay circles */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-primary/20 blur-xl group-hover:scale-125 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
