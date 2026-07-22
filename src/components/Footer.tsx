import LogoMark from './LogoMark';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Footer</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-8 border-b border-border text-left">

          {/* Brand col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <LogoMark className="h-7 w-auto shrink-0 text-primary dark:text-white transition-colors mb-2" />
              <span className="text-xl font-black bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
                Scoler Servicios
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Servicio líder en recuperación de activos y carteras de mora. Impulsado por tecnología inteligente y gestionado por profesionales con experiencia comprobada.
            </p>
          </div>

          {/* Nav col */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
              Navegación
            </h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">Beneficios</a></li>
              <li><a href="#plataforma" className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">Plataforma <span className="font-extrabold tracking-wider bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">Astre</span></a></li>
              <li><a href="#calculadora" className="text-muted-foreground hover:text-foreground transition-colors">Calculadora</a></li>
              <li><a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">Cómo Funciona</a></li>
            </ul>
          </div>

          {/* Contact col */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
              Contacto y Soporte
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>Email: <a href="mailto:contacto@scoler.com.ar" className="hover:text-foreground transition-colors">contacto@scoler.com.ar</a></li>
              <li>Soporte Clientes: <a href="mailto:soporte@scoler.com.ar" className="hover:text-foreground transition-colors">soporte@scoler.com.ar</a></li>
              <li>Teléfono: +54 341 242-9771</li>
              <li>Oficinas: Rosario, Santa Fe, Argentina</li>
            </ul>
          </div>

        </div>

        {/* Disclaimer and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-muted-foreground text-center md:text-left">
          <p className="max-w-md md:max-w-xl leading-relaxed">
            *Las estimaciones de la calculadora de recuperación son simulaciones basadas en promedios históricos. La tasa final de recupero y el porcentaje de comisión se estipulan formalmente mediante contrato firmado según el tipo y origen de la cartera de deuda.
          </p>
          <p className="shrink-0">
            &copy; {currentYear} Scoler Servicios. Todos los derechos reservados.
            <br />
            &gt;_ Desarrollado por <a href="https://github.com/tisoler" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors font-bold">Tisoler</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
