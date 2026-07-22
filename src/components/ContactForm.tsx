import { useState } from 'react';
import { Send, CheckCircle, HelpCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    volumen: '',
    mensaje: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL ?? 'http://localhost:3070/api';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormError('');

    try {
      const response = await fetch(`${contactApiUrl}/mail/scoler/contacto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(payload?.message ?? 'No pudimos enviar tu mensaje. Intentá nuevamente.');
      }

      setFormStatus('success');
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        volumen: '',
        mensaje: '',
      });
    } catch (error) {
      setFormStatus('error');
      setFormError(error instanceof Error ? error.message : 'No pudimos enviar tu mensaje.');
    }
  };

  const volumeOptions = [
    { label: 'Menor a $100.000.000', value: 'bajo' },
    { label: 'Entre $100.000.000 y $500.000.000', value: 'medio' },
    { label: 'Entre $500.000.000 y $1.000.000.000', value: 'alto' },
    { label: 'Mayor a $1.000.000.000', value: 'corporativo' },
  ];

  return (
    <section id="contacto" className="py-20 bg-muted/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text and context column */}
          <div className="lg:col-span-5 text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Comienza a{' '}
              <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
                Recuperar Hoy
              </span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Completa el formulario para que nuestro equipo de especialistas analice tu caso. Te contactaremos en menos de 24 horas para coordinar una reunión de diagnóstico sin costo.
            </p>

            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex gap-3">
                <div className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="text-sm font-bold">Diagnóstico Gratuito</h3>
                  <p className="text-xs text-muted-foreground">Evaluamos la probabilidad de cobro de tu cartera sin costo.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="size-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="text-sm font-bold">Contrato Flexible</h3>
                  <p className="text-xs text-muted-foreground">Sin plazos de permanencia mínimos. Nos medimos por resultados.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form container column */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border p-6 sm:p-10 rounded-3xl shadow-xl">
              {formStatus === 'success' ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-scaleIn">
                  <div className="size-16 rounded-full bg-success/15 text-success flex items-center justify-center">
                    <CheckCircle className="size-8" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">¡Solicitud Recibida!</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">
                    Hemos registrado tus datos correctamente. Un especialista en cobranzas se pondrá en contacto contigo a la brevedad.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="text-xs text-primary font-bold hover:underline cursor-pointer pt-2"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nombre */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-muted-foreground uppercase">Nombre Completo</label>
                      <input
                        type="text"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>
                    {/* Empresa */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-muted-foreground uppercase">Nombre de la Empresa</label>
                      <input
                        type="text"
                        required
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                        placeholder="Ej. Mi Negocio S.A."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-muted-foreground uppercase">Email Corporativo</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                        placeholder="Ej. juan@empresa.com"
                      />
                    </div>
                    {/* Telefono */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-muted-foreground uppercase">Teléfono / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                        placeholder="Ej. +54 9 11 1234-5678"
                      />
                    </div>
                  </div>

                  {/* Volumen de la Cartera */}
                  <div className="space-y-1">
                    <label
                      htmlFor="volumenCartera"
                      className="text-xs font-bold text-muted-foreground uppercase flex items-center gap-1"
                    >
                      Monto Estimado de Cartera Vencida
                      <span title="Volumen total de las deudas sin cobrar" className="cursor-help flex items-center">
                        <HelpCircle className="size-3.5 text-muted-foreground/60" />
                      </span>
                    </label>
                    <select
                      id="volumenCartera"
                      required
                      value={formData.volumen}
                      onChange={(e) => setFormData({ ...formData, volumen: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Selecciona el rango de cartera...</option>
                      {volumeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-muted-foreground uppercase">Mensaje (Opcional)</label>
                    <textarea
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-input-background focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm resize-none"
                      placeholder="Cuéntanos un poco más sobre la antigüedad de la deuda o detalles adicionales..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? (
                      <span className="size-5 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <span>Solicitar Contacto y Diagnóstico</span>
                        <Send className="size-4" />
                      </>
                    )}
                  </button>

                  {formStatus === 'error' && (
                    <p className="text-sm text-red-500 font-medium text-center" role="alert">
                      {formError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
