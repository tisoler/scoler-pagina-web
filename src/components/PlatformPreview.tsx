import { useState } from 'react';
import {
  MessageSquare,
  CalendarDays,
  FileCheck2,
  TrendingUp,
  History,
  UploadCloud,
  Calculator,
  BarChart,
  User,
  ArrowRight,
  Smile,
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function PlatformPreview() {
  const [activeTab, setActiveTab] = useState<'historial' | 'carga' | 'planes' | 'reportes'>('historial');

  // State for CSV Upload Simulator
  const [uploadState, setUploadState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [fileName, setFileName] = useState('');

  // State for Payment Plan Simulator
  const [debtAmount, setDebtAmount] = useState(1000000);
  const [installments, setInstallments] = useState(6);

  const simulateUpload = (name: string) => {
    setFileName(name);
    setUploadState('loading');
    setTimeout(() => {
      setUploadState('success');
    }, 2000);
  };

  const resetUpload = () => {
    setUploadState('idle');
    setFileName('');
  };

  // Calculos para planes de pago
  const feePercentage = 1.05; // 5% interés total para facilidades
  const totalWithInterest = debtAmount * feePercentage;
  const installmentValue = totalWithInterest / installments;

  const tabs = [
    { id: 'historial', label: 'Historial de Gestiones', icon: History },
    { id: 'carga', label: 'Carga de Deudores', icon: UploadCloud },
    { id: 'planes', label: 'Facilidades de Pago', icon: Calculator },
    { id: 'reportes', label: 'Reportería y Métricas', icon: BarChart },
  ];

  return (
    <section id="plataforma" className="py-20 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Nuestra Plataforma{' '}
            <span className="font-extrabold tracking-wider bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Astre
            </span>{' '}
            a tu Servicio
          </h2>
          <p className="text-lg text-muted-foreground">
            Diseñamos <span className="font-bold text-foreground">Astre</span>, una herramienta de gestión propia transparente y en tiempo real. Mira cómo administramos y reportamos cada acción de cobro.
          </p>
        </div>

        {/* Layout Tabs Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Tab buttons sidebar */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    if (tab.id !== 'carga') resetUpload();
                  }}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-sm font-semibold transition-all shrink-0 text-left border cursor-pointer w-full
                    ${isActive
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/10'
                      : 'bg-card border-border hover:bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                >
                  <Icon className="size-5" />
                  <span className="flex-1">{tab.label}</span>
                  <ArrowRight className={`size-4 transition-transform hidden lg:block ${isActive ? 'translate-x-0' : '-translate-x-2 opacity-0'}`} />
                </button>
              );
            })}
          </div>

          {/* Interactive Window Panel */}
          <div className="lg:col-span-8 bg-card border border-border rounded-2xl shadow-xl overflow-hidden min-h-[460px] flex flex-col">

            {/* Header of Mockup Window */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/30">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-400/80" />
                <div className="size-3 rounded-full bg-yellow-400/80" />
                <div className="size-3 rounded-full bg-green-400/80" />
                <span className="text-[11px] font-bold text-muted-foreground ml-3 uppercase tracking-widest">
                  {tabs.find(t => t.id === activeTab)?.label}
                </span>
              </div>
              <span className="text-xs text-primary font-bold">Simulación en Vivo</span>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">

              {/* Tab 1: Historial */}
              {activeTab === 'historial' && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <p className="text-sm text-muted-foreground">
                    Cada interacción a través de <span className="font-bold text-foreground">Astre</span> por parte de nuestro equipo gestor y de las campañas automáticas de WhatsApp y correo queda grabada con fecha, hora y detalle de respuesta.
                  </p>

                  <div className="space-y-4">
                    {/* Log 1 */}
                    <div className="relative pl-6 border-l-2 border-primary/20 pb-4">
                      <div className="absolute -left-[7px] top-1 size-3 rounded-full bg-success border-2 border-card" />
                      <div className="bg-muted/50 p-4 rounded-xl border border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-success uppercase tracking-widest flex items-center gap-1">
                            <FileCheck2 className="size-3.5" /> Convenio Firmado
                          </span>
                          <span className="text-[10px] text-muted-foreground">Hace 10 min</span>
                        </div>
                        <p className="text-sm font-bold mt-1">Acuerdo por $120,000 en 3 cuotas</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          El deudor firmó digitalmente el plan de pago. Primera cuota vence en 5 días.
                        </p>
                      </div>
                    </div>

                    {/* Log 2 */}
                    <div className="relative pl-6 border-l-2 border-primary/20 pb-4">
                      <div className="absolute -left-[7px] top-1 size-3 rounded-full bg-primary border-2 border-card" />
                      <div className="bg-muted/50 p-4 rounded-xl border border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-1">
                            <MessageSquare className="size-3.5" /> Conversación de WhatsApp
                          </span>
                          <span className="text-[10px] text-muted-foreground">Hoy, 10:42 AM</span>
                        </div>
                        <p className="text-sm font-bold mt-1">Interacción Humana de Negociación</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          <strong>Gestor:</strong> "Hola Carlos, entendemos tu situación. ¿Qué te parece si dividimos la deuda en cuotas sin interés para que puedas cumplir?" <br />
                          <strong>Deudor:</strong> "Sí, me interesa. Puedo pagar hasta $40.000 por mes."
                        </p>
                      </div>
                    </div>

                    {/* Log 3 */}
                    <div className="relative pl-6">
                      <div className="absolute -left-[5px] top-1 size-3 rounded-full bg-muted-foreground/30 border-2 border-card" />
                      <div className="bg-muted/50 p-4 rounded-xl border border-border">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-1">
                            <CalendarDays className="size-3.5" /> Campaña Programada
                          </span>
                          <span className="text-[10px] text-muted-foreground">Ayer, 3:15 PM</span>
                        </div>
                        <p className="text-sm font-bold mt-1">Disparo de Recordatorio por Email</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Propuesta de convenio enviada automáticamente. Asunto: *"Propuesta de facilidades de pago para saldo pendiente."*
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* Tab 2: Carga de Deudores */}
              {activeTab === 'carga' && (
                <div className="space-y-6 text-left flex-1 flex flex-col justify-center animate-fadeIn">
                  <p className="text-sm text-muted-foreground">
                    Actualiza tu cartera en <span className="font-bold text-foreground">Astre</span> cargando tu listado de deudores. Soportamos archivos CSV o Excel. Nuestro motor valida la información e inicia las campañas en minutos.
                  </p>

                  {uploadState === 'idle' && (
                    <div className="border-2 border-dashed border-border hover:border-primary/40 rounded-2xl p-10 flex flex-col items-center justify-center gap-3 transition-colors bg-muted/20">
                      <div className="size-12 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                        <UploadCloud className="size-6" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold">Arrastra tu archivo aquí o haz clic para subir</p>
                        <p className="text-xs text-muted-foreground mt-1">Soporta .csv, .xls, o .xlsx (hasta 50MB)</p>
                      </div>

                      {/* Mock Buttons to simulate drop */}
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => simulateUpload('deudores_vencidos_mayo.csv')}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-muted border border-border hover:bg-muted-foreground/15 text-foreground transition-all cursor-pointer"
                        >
                          <FileSpreadsheet className="size-3.5 text-success" />
                          Simular: deudores_mayo.csv
                        </button>
                        <button
                          onClick={() => simulateUpload('cartera_mora_tardia.xlsx')}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-muted border border-border hover:bg-muted-foreground/15 text-foreground transition-all cursor-pointer"
                        >
                          <FileSpreadsheet className="size-3.5 text-success" />
                          Simular: cartera_tardia.xlsx
                        </button>
                      </div>
                    </div>
                  )}

                  {uploadState === 'loading' && (
                    <div className="border border-border rounded-2xl p-12 flex flex-col items-center justify-center gap-4 bg-muted/10">
                      <div className="size-12 rounded-full border-4 border-muted border-t-primary animate-spin" />
                      <div className="text-center">
                        <p className="text-sm font-bold">Procesando y validando {fileName}...</p>
                        <p className="text-xs text-muted-foreground mt-1">Leyendo columnas, validando teléfonos y estructurando la cartera...</p>
                      </div>
                    </div>
                  )}

                  {uploadState === 'success' && (
                    <div className="border border-success/20 rounded-2xl p-6 flex flex-col gap-4 bg-success/5 animate-scaleIn">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-success/15 text-success flex items-center justify-center">
                          <CheckCircle2 className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-success">¡Cartera procesada con éxito!</p>
                          <p className="text-xs text-muted-foreground">Archivo: {fileName}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 bg-card p-4 rounded-xl border border-success/10 text-center">
                        <div>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">Deudores cargados</p>
                          <p className="text-lg font-bold mt-1 text-primary">120 personas</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">Monto Total</p>
                          <p className="text-lg font-bold mt-1">$4,850,200</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">Estado Campaña</p>
                          <p className="text-lg font-bold mt-1 text-success">Lista</p>
                        </div>
                      </div>

                      <button
                        onClick={resetUpload}
                        className="text-xs text-muted-foreground hover:text-foreground underline transition-colors self-start mt-1 cursor-pointer"
                      >
                        Subir otro archivo
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Tab 3: Planes de Pago */}
              {activeTab === 'planes' && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <p className="text-sm text-muted-foreground">
                    Facilitamos el recupero en <span className="font-bold text-foreground">Astre</span> comunicando tus convenios de pago flexibles. Configura las facilidades de cuotas en vivo y observa cómo se calcula el plan que enviaremos al deudor.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-muted/40 p-5 rounded-2xl border border-border">
                    <div className="space-y-4">
                      {/* Slider 1: Deuda */}
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="previewDebtAmount"
                            className="text-xs font-bold text-muted-foreground uppercase"
                          >
                            Deuda Original
                          </label>
                          <span className="text-sm font-bold">${debtAmount.toLocaleString()}</span>
                        </div>
                        <input
                          id="previewDebtAmount"
                          type="range"
                          min="1000000"
                          max="30000000"
                          step="500000"
                          value={debtAmount}
                          onChange={(e) => setDebtAmount(Number(e.target.value))}
                          className="w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                      </div>

                      {/* Slider 2: Cuotas */}
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label
                            htmlFor="previewInstallments"
                            className="text-xs font-bold text-muted-foreground uppercase"
                          >
                            Cuotas Permitidas
                          </label>
                          <span className="text-sm font-bold">{installments} cuotas</span>
                        </div>
                        <input
                          id="previewInstallments"
                          type="range"
                          min="1"
                          max="12"
                          value={installments}
                          onChange={(e) => setInstallments(Number(e.target.value))}
                          className="w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                      </div>
                    </div>

                    {/* Result Card */}
                    <div className="bg-card p-4 rounded-xl border border-border flex flex-col justify-between">
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Valor Cuota Mensual</p>
                        <p className="text-2xl font-black text-primary">${Math.round(installmentValue).toLocaleString()}</p>
                        <p className="text-[11px] text-muted-foreground">Total con facilidades: ${Math.round(totalWithInterest).toLocaleString()}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                        <AlertCircle className="size-3.5 text-primary" />
                        <span>Convenio adaptable en 1 clic</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 4: Reportería */}
              {activeTab === 'reportes' && (
                <div className="space-y-6 text-left animate-fadeIn">
                  <p className="text-sm text-muted-foreground">
                    Estadísticas detalladas sobre tu tasa de recuperación, promesas de pago vigentes, distribución de la mora y rendimientos mensuales.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Stat Card 1 */}
                    <div className="bg-muted/50 p-4 rounded-xl border border-border text-center">
                      <TrendingUp className="size-5 text-success mx-auto" />
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-2">Tasa de Recupero</p>
                      <p className="text-lg font-bold text-foreground mt-1">72.3%</p>
                      <span className="text-[9px] text-success font-semibold">+4.2% vs mes anterior</span>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="bg-muted/50 p-4 rounded-xl border border-border text-center">
                      <User className="size-5 text-primary mx-auto" />
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-2">Gestiones Totales</p>
                      <p className="text-lg font-bold text-foreground mt-1">12,482</p>
                      <span className="text-[9px] text-muted-foreground">WhatsApp, mail y llamadas</span>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="bg-muted/50 p-4 rounded-xl border border-border text-center">
                      <Smile className="size-5 text-indigo-500 mx-auto" />
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-2">Deudores en Convenio</p>
                      <p className="text-lg font-bold text-foreground mt-1">84%</p>
                      <span className="text-[9px] text-success font-semibold">Tasa de cumplimiento alta</span>
                    </div>
                  </div>

                  {/* HTML Chart Simulation */}
                  <div className="bg-muted/30 p-4 rounded-xl border border-border space-y-3">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Recuperado Mensual (USD)</p>
                    <div className="h-16 flex items-end gap-3 pt-2">
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-primary/20 rounded-t-md h-8 hover:bg-primary transition-all duration-300" title="Mar: $12k" />
                        <span className="text-[9px] text-muted-foreground">Mar</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-primary/40 rounded-t-md h-12 hover:bg-primary transition-all duration-300" title="Abr: $18k" />
                        <span className="text-[9px] text-muted-foreground">Abr</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-primary/60 rounded-t-md h-10 hover:bg-primary transition-all duration-300" title="May: $15k" />
                        <span className="text-[9px] text-muted-foreground">May</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full bg-primary rounded-t-md h-14 hover:bg-primary-foreground/80 transition-all duration-300" title="Jun: $24k" />
                        <span className="text-[9px] font-semibold text-primary">Jun</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom call to action inside the frame */}
              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="size-4 text-success" />
                  <span>Seguridad de datos garantizada con encriptación SSL</span>
                </div>
                <a
                  href="#contacto"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 transition-all text-center cursor-pointer"
                >
                  Probar con mi Cartera
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
