import { useScrollReveal } from '../hooks/useScrollReveal'

const metrics = [
  { num: '1,200', suffix: '+', label: 'Projects Completed' },
  { num: '25', suffix: '+', label: 'Years Experience' },
  { num: '10', suffix: 'yr', label: 'Workmanship Guarantee' },
  { num: '4.9', suffix: '/5', label: 'Customer Satisfaction', numStyle: true },
]

export default function MetricsBar() {
  return (
    <div className="bg-dark border-t border-white/5 border-b border-white/5 noise relative">
      <div className="grid grid-cols-4 max-xl:grid-cols-2">
        {metrics.map((m, i) => (
          <MetricItem key={m.label} metric={m} delay={i} />
        ))}
      </div>
    </div>
  )
}

function MetricItem({ metric, delay }) {
  const ref = useScrollReveal()
  const delayClass = delay === 0 ? '' : `d${delay}`

  return (
    <div
      ref={ref}
      className={`px-11 py-12 border-r border-white/5 last:border-r-0 max-md:border-r-0 reveal ${delayClass}`}
    >
      <div className="font-display text-[80px] leading-[1] text-warm-white mb-1.5">
        {metric.num}
        <em className="not-italic text-copper-l" style={metric.numStyle ? { fontSize: '48px' } : undefined}>
          {metric.suffix}
        </em>
      </div>
      <div className="font-condensed text-[12px] font-semibold tracking-[0.14em] uppercase text-warm-gray">
        {metric.label}
      </div>
    </div>
  )
}
