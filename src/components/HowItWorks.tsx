import { UploadCloud, MessageSquareText, HeartHandshake, BadgeDollarSign } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: UploadCloud,
      step: '01',
      title: 'Carga de Cartera',
      description: (
        <span>
          Sube tu listado de deudores en Excel o CSV a través del portal de clientes. La plataforma <span className="font-bold text-foreground">Astre</span> valida datos y el equipo inicia el análisis de mora.
        </span>
      ),
    },
    {
      icon: MessageSquareText,
      step: '02',
      title: 'Campañas Multicanal',
      description: 'Activamos notificaciones amigables por WhatsApp y correo. Ofrecemos a los deudores convenios interactivos y facilidades de pago en cuotas.',
    },
    {
      icon: HeartHandshake,
      step: '03',
      title: 'Negociación y Gestión Humana',
      description: 'Nuestros gestores experimentados entran en acción para brindar una atención cercana, proponer alternativas y cerrar convenios de pago formales.',
    },
    {
      icon: BadgeDollarSign,
      step: '04',
      title: 'Rendición Contra Pagos',
      description: 'Reportería interactiva para cálculo de comisiones y consolidación de rendiciones. Recibes los pagos y sólo rindes la comisión sobre el éxito.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            ¿Cómo{' '}
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              Funciona
            </span>{' '}
            el Servicio?
          </h2>
          <p className="text-lg text-muted-foreground">
            Diseñamos un flujo simple y transparente para que delegues la cobranza con absoluta tranquilidad y control de los procesos.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {/* Connector Line (visible only on desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-[12.5%] right-[12.5%] h-0.5 bg-border -z-10" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border/80 p-8 rounded-2xl flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-all relative group"
            >
              {/* Step bubble */}
              <div className="absolute top-4 right-4 text-xs font-black text-muted-foreground/60 uppercase tracking-widest">
                Paso {step.step}
              </div>

              {/* Icon container */}
              <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <step.icon className="size-7" />
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-bold pt-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
