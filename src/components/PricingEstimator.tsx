import { useMemo, useState } from 'react'
import { Button } from './ui/Button'

type Complexity = 'simple' | 'standard' | 'advanced'

type SliderOption = {
  label: string
  value: number
}

type ComplexityOption = {
  label: string
  value: Complexity
  note: string
}

const pageOptions: SliderOption[] = [
  { label: '1', value: 1 },
  { label: '3', value: 3 },
  { label: '5', value: 5 },
  { label: '8', value: 8 },
  { label: '12', value: 12 },
]

const complexityOptions: ComplexityOption[] = [
  { label: 'Simple', value: 'simple', note: 'Static sections, basic CTA' },
  { label: 'Standard', value: 'standard', note: 'Multiple layouts, light forms' },
  { label: 'Advanced', value: 'advanced', note: 'Custom interactions, integrations' },
]

const complexityMultiplier: Record<Complexity, number> = {
  simple: 1,
  standard: 1.25,
  advanced: 1.6,
}

export function PricingEstimator() {
  const [pages, setPages] = useState<number>(3)
  const [complexity, setComplexity] = useState<Complexity>('standard')
  const [hosting, setHosting] = useState<boolean>(true)

  const basePrice = useMemo(() => 800 + pages * 250, [pages])
  const hostingPrice = hosting ? 720 : 0 // annual placeholder
  const estimate = useMemo(() => Math.round(basePrice * complexityMultiplier[complexity] + hostingPrice), [basePrice, complexity, hostingPrice])

  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-neutral-900/80 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Example demo</p>
        <h3 className="text-xl font-semibold text-white">Pricing estimator</h3>
        <p className="text-sm text-white/70">Adjust a few inputs to see an indicative range. For an exact quote, get in touch.</p>
      </div>

      <div className="mt-6 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-white/80">
            <span>Page count</span>
            <span className="text-white">{pages} pages</span>
          </div>
          <input
            type="range"
            min={1}
            max={12}
            step={1}
            value={pages}
            onChange={(e) => setPages(Number(e.target.value))}
            className="w-full accent-red-500"
          />
          <div className="flex justify-between text-[11px] uppercase tracking-[0.12em] text-white/40">
            {pageOptions.map((opt) => (
              <span key={opt.value}>{opt.label}</span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm text-white/80">Complexity</div>
          <div className="grid gap-2 sm:grid-cols-3">
            {complexityOptions.map((opt) => {
              const active = complexity === opt.value
              return (
                <button
                  type="button"
                  key={opt.value}
                  onClick={() => setComplexity(opt.value)}
                  className={`rounded-xl border px-3 py-3 text-left transition ${
                    active ? 'border-red-500/80 bg-white/5 text-white' : 'border-white/10 text-white/70 hover:border-red-500/50'
                  }`}
                >
                  <div className="text-sm font-semibold text-white">{opt.label}</div>
                  <p className="mt-1 text-xs text-white/60">{opt.note}</p>
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-950/80 px-3 py-3 text-sm text-white/80">
          <div>
            <p className="font-semibold text-white">Hosting & maintenance</p>
            <p className="text-xs text-white/60">Managed updates, monitoring, backups</p>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 text-xs text-white/70">
            <span>{hosting ? 'Included' : 'Not included'}</span>
            <input
              type="checkbox"
              checked={hosting}
              onChange={(e) => setHosting(e.target.checked)}
              className="h-4 w-4 accent-red-500"
            />
          </label>
        </div>
      </div>

      <div className="mt-6 space-y-3 rounded-xl border border-white/10 bg-neutral-950/80 p-4">
        <div className="flex items-baseline justify-between">
          <p className="text-sm text-white/60">Estimated total (indicative)</p>
          <p className="text-2xl font-semibold text-white">NZD {estimate.toLocaleString()}</p>
        </div>
        <div className="grid gap-2 text-xs text-white/60">
          <div className="flex justify-between">
            <span>Base + pages</span>
            <span>NZD {basePrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Complexity</span>
            <span>{complexityMultiplier[complexity]}x</span>
          </div>
          <div className="flex justify-between">
            <span>Hosting & maintenance</span>
            <span>{hosting ? `NZD ${hostingPrice.toLocaleString()}` : 'Not included'}</span>
          </div>
        </div>
        <p className="text-[11px] text-white/50">This is an example estimator to show how scope affects price. Final quotes are confirmed after a short call.</p>
      </div>

      <div className="mt-6">
        <Button href="#contact" className="w-full">Get a tailored quote</Button>
      </div>
    </div>
  )
}
