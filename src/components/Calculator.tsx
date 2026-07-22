import { useState } from 'react';
import { Calculator as CalcIcon, Check, BadgePercent, ArrowRight } from 'lucide-react';

type AgeRange = 'early' | 'medium' | 'late' | 'old';

export default function Calculator() {
  const [debtVolume, setDebtVolume] = useState(85000000);
  const [debtAge, setDebtAge] = useState<AgeRange>('early');

  // Rates definition based on debt age
  const rates: Record<AgeRange, { label: string; rate: number; commission: number }> = {
    early: { label: 'Menor a 3 meses (Mora Temprana)', rate: 0.75, commission: 0.05 },
    medium: { label: 'De 3 a 6 meses (Mora Media)', rate: 0.55, commission: 0.10 },
    late: { label: 'De 6 a 12 meses (Mora Tardía)', rate: 0.35, commission: 0.15 },
    old: { label: 'Mayor a 12 meses (Castigada)', rate: 0.15, commission: 0.20 },
  };

  const selectedRate = rates[debtAge];
  const estimatedRecovered = debtVolume * selectedRate.rate;
  const commissionCost = estimatedRecovered * selectedRate.commission;
  const netReturn = estimatedRecovered - commissionCost;

  return (
    <section id="calculadora" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Calcula tu{' '}
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              Retorno Estimado
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre cuánto dinero podrías recuperar de tu cartera vencida y conoce nuestra estructura de comisión alineada a resultados.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">

          {/* Inputs Section */}
          <div className="p-8 md:p-10 md:col-span-7 space-y-8 text-left">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <CalcIcon className="size-5" />
              </div>
              <h3 className="text-lg font-bold">Simulador de Recupero</h3>
            </div>

            {/* Input 1: Slider volume */}
            <div className="space-y-3">
              <div className="flex justify-between items-baseline">
                <label
                  htmlFor="debtVolume"
                  className="text-sm font-bold text-muted-foreground uppercase"
                >
                  Monto Total de tu Cartera
                </label>
                <span className="text-2xl font-black text-foreground">${debtVolume.toLocaleString('es-AR')}</span>
              </div>
              <input
                id="debtVolume"
                type="range"
                min="10000000"
                max="1000000000"
                step="5000000"
                value={debtVolume}
                onChange={(e) => setDebtVolume(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                <span>$10.000.000</span>
                <span>$485.000.000</span>
                <span>$1.000.000.000+</span>
              </div>
            </div>

            {/* Input 2: Age Selector */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-muted-foreground uppercase block">Antigüedad Promedio de la Deuda</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(Object.keys(rates) as AgeRange[]).map((key) => {
                  const rateData = rates[key];
                  const isSelected = debtAge === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setDebtAge(key)}
                      className={`px-4 py-3.5 rounded-xl border text-xs font-bold text-left transition-all flex flex-col gap-1 cursor-pointer
                        ${isSelected
                          ? 'border-primary bg-primary/5 text-primary shadow-sm shadow-primary/5'
                          : 'border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground'
                        }`}
                    >
                      <span>{rateData.label.split(' (')[0]}</span>
                      <span className="text-[10px] font-normal text-muted-foreground">{rateData.label.split(' (')[1]?.replace(')', '') || ''}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Display Section */}
          <div className="p-8 md:p-10 md:col-span-5 bg-muted/50 border-t md:border-t-0 md:border-l border-border flex flex-col justify-between text-left">
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                Resultado Estimado
              </h3>

              {/* Recovery Ratio block */}
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-sm text-muted-foreground">Tasa de recupero estimada:</span>
                <span className="text-sm font-bold text-success bg-success/10 px-2 py-0.5 rounded-full">
                  {Math.round(selectedRate.rate * 100)}%
                </span>
              </div>

              {/* Total Recovered */}
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground">Monto estimado a recuperar:</span>
                <p className="text-xl font-bold">${Math.round(estimatedRecovered).toLocaleString('es-AR')}</p>
              </div>

              {/* Commission cost */}
              <div className="space-y-1 py-2 border-b border-border">
                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                  Comisión Scoler ({Math.round(selectedRate.commission * 100)}%):
                  <BadgePercent className="size-4 text-primary" />
                </span>
                <p className="text-sm font-bold text-destructive">${Math.round(commissionCost).toLocaleString('es-AR')}</p>
              </div>

              {/* Net Return */}
              <div className="space-y-1.5 pt-2">
                <span className="text-sm font-semibold text-foreground">Tu Retorno Neto:</span>
                <p className="text-3xl font-black text-primary">${Math.round(netReturn).toLocaleString('es-AR')}</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  *Valores estimados según el promedio histórico de cobro de deudas similares.
                </p>
              </div>
            </div>

            {/* Quick validation bullets */}
            <div className="mt-8 space-y-3 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <Check className="size-4 text-success min-w-4" />
                <span>Riesgo mínimo, costos fijo mínimos. Comisiones competitivas.</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
                <Check className="size-4 text-success" />
                <span>Equipo negociador especializado</span>
              </div>

              <a
                href="#contacto"
                className="flex items-center justify-center gap-2 w-full mt-2 px-5 py-3 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20 transition-all cursor-pointer text-center"
              >
                Recuperar esta Cartera
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
