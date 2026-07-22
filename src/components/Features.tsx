import { HeartHandshake, Percent, Laptop, MessageSquareText, ClipboardPenLine, Award } from 'lucide-react';
import LogoMark from './LogoMark';

export default function Features() {
  const benefits = [
    {
      icon: HeartHandshake,
      title: 'Comunicación Humana y Personalizada',
      description: 'Evitamos el acoso sistemático y las llamadas automáticas molestas. Tratamos a tus deudores con respeto y profesionalismo para mantener una relación sana y cuidar la reputación de tu marca.',
    },
    {
      icon: Laptop,
      title: (
        <span>
          Plataforma de gestión propia <span className="font-extrabold tracking-wider bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Astre</span>
        </span>
      ),
      description: (
        <span>
          Accede a tu portal exclusivo en <span className="font-bold text-foreground">Astre</span>, donde podrás ver en tiempo real el historial completo de gestiones por deudor, descargar reportes financieros y realizar un seguimiento transparente.
        </span>
      ),
    },
    {
      icon: MessageSquareText,
      title: 'Campañas Multicanal (WhatsApp y Mail)',
      description: 'Automatizamos el contacto masivo inicial a través de plantillas personalizadas y amigables. Permitimos a los deudores negociar acuerdos de pago flexibles en pocos clics.',
    },
    {
      icon: ClipboardPenLine,
      title: 'Nos adaptamos a las políticas y estándares de tu empresa',
      description: 'Adaptamos el proceso de gestión de cobros a las políticas de tu empresa, generamos las estrategias a tu medida.',
    },
    {
      icon: Award,
      title: 'Equipo Gestor Altamente Experimentado',
      description: 'Contamos con profesionales experimentados en negociación estratégica que saben cómo destrabar conflictos y proponer soluciones realistas para cada perfil de deuda.',
    },
    {
      icon: Percent,
      title: 'Costos fijos mínimos. Comisión sobre lo Recuperado',
      description: 'Costos de mantenimiento de infraestructura muy bajos. Solo ganamos si tú ganas: nuestra comisión es un porcentaje fijo del monto que efectivamente se recupera.',
    },
  ];

  return (
    <section id="beneficios" className="py-15 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 space-y-4">
          <LogoMark className="h-20 w-auto shrink-0 text-indigo-500 dark:text-white mb-12" />
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            ¿Por qué elegir{' '}
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              Scoler Servicios
            </span>
            ?
          </h2>
          <p className="text-lg text-muted-foreground">
            Combinamos una estrategia de contacto respetuosa con herramientas tecnológicas avanzadas para lograr tasas de recupero superiores al promedio del mercado.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card border border-border/80 hover:border-primary/20 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col space-y-4 text-left group"
            >
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <benefit.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground flex-grow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
