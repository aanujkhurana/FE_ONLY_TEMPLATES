import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    num: '01',
    name: 'Roof Restoration',
    desc: 'Full surface clean, re-bedding, re-pointing, and premium re-coating. Your existing roof, engineered to last again.',
  },
  {
    num: '02',
    name: 'Roof Replacement',
    desc: 'Complete removal and premium installation. Colorbond, tile, or custom specification. Designed for your home.',
  },
  {
    num: '03',
    name: 'Roof Repairs',
    desc: 'Leak diagnosis and precision repair. No guesswork — we find the root cause and fix it permanently.',
  },
  {
    num: '04',
    name: 'Guttering & Downpipes',
    desc: 'Custom-cut seamless guttering. No joins, no weak points. Complete water management built to last.',
  },
  {
    num: '05',
    name: 'Roof Inspections',
    desc: 'Detailed condition report with photographic documentation. Know exactly what you\'re dealing with — before it becomes expensive.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-warm-white">
      <div className="max-w-[1320px] mx-auto px-12 max-md:px-6">
        <div className="mb-20">
          <div className="section-label" style={{ color: 'var(--color-copper-l)' }}>
            03 — Our Services
          </div>
          <h2 className="font-display text-[clamp(72px,7vw,112px)] leading-[.88] text-ink">
            WHAT WE<br />BUILD.
          </h2>
        </div>
        <ul className="list-none">
          {services.map((s, i) => (
            <ServiceItem key={s.num} service={s} delay={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function ServiceItem({ service, delay }) {
  const ref = useScrollReveal()
  const delayClass = delay === 0 ? '' : `d${delay}`

  return (
    <li
      ref={ref}
      className={`group grid grid-cols-[80px_1fr_40px] items-center gap-10 py-9 border-t border-black/9 cursor-default relative max-md:grid-cols-[60px_1fr] max-md:gap-5 reveal ${delayClass}`}
      style={{
        borderTop: '1px solid rgba(0,0,0,.09)',
        borderBottom: '1px solid rgba(0,0,0,.09)',
        marginTop: '-1px',
      }}
    >
      <div
        className="absolute bottom-[-1px] left-0 w-0 h-0.5 bg-copper-l transition-all duration-500 ease-out group-hover:w-full"
      />
      <div className="font-display text-[36px] leading-[1] text-concrete">
        {service.num}
      </div>
      <div>
        <div className="font-condensed font-black text-[30px] uppercase tracking-[0.04em] text-ink transition-colors duration-200 group-hover:text-copper">
          {service.name}
        </div>
        <div className="text-[14px] font-light text-concrete mt-1.5 leading-[1.6]">
          {service.desc}
        </div>
      </div>
      <div className="text-[22px] text-sand text-right transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-copper-l max-md:hidden">
        →
      </div>
    </li>
  )
}
