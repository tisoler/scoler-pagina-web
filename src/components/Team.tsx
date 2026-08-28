import { BadgeCheck } from 'lucide-react';
import LinkedInIcon from './LinkedInIcon';

export default function Team() {
  const members = [
    {
      name: 'Juan Manuel Lértora',
      role: 'CCM',
      roleLabel: 'Credit & Collection Manager',
      photo: '/perfil-Juan.webp',
      alt: 'Foto de Juan Manuel Lértora',
      linkedin: 'https://www.linkedin.com/in/juanl%C3%A9rtora/',
      description: 'Lidera las estrategias de cobranza y negociación, cuidando la relación con los deudores y maximizando las tasas de recupero.',
    },
    {
      name: 'Diego Díaz Barroso',
      role: 'CTO',
      roleLabel: 'Director de Tecnología',
      photo: '/perfil-Diego.webp',
      alt: 'Foto de Diego Díaz Barroso',
      linkedin: 'https://www.linkedin.com/in/diego-d%C3%ADaz-barroso-b76163103/',
      description: 'Impulsa la plataforma Astre y la tecnología que hace posible una cobranza inteligente, transparente y a escala.',
    },
  ];

  return (
    <section id="equipo" className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            El equipo detrás de{' '}
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              Scoler Servicios
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Personas reales, con experiencia comprobada, detrás de cada gestión y de cada herramienta.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-card border border-border/80 hover:border-primary/20 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center space-y-4 group"
            >
              <div className="relative">
                <div className="size-36 rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300 bg-muted">
                  <img
                    src={member.photo}
                    alt={member.alt}
                    loading="lazy"
                    className="size-36 object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md">
                  <BadgeCheck className="size-5" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm font-extrabold text-primary uppercase tracking-widest">
                  {member.role}
                </p>
                <p className="text-xs text-muted-foreground">
                  {member.roleLabel}
                </p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.description}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${member.name}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors text-xs font-bold"
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
