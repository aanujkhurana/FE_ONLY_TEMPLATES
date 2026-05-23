import { useScrollReveal } from '../hooks/useScrollReveal'

const items = [
  {
    icon: (
      <svg className="w-full h-full" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x=".5" y=".5" width="43" height="43" stroke="#7B4B27" strokeWidth="1" />
        <path d="M22 8L26.5 17.5L37 19L29.5 26L31.5 36L22 31L12.5 36L14.5 26L7 19L17.5 17.5L22 8Z" stroke="#7B4B27" strokeWidth="1" fill="none" />
      </svg>
    ),
    title: 'Licensed & Insured',
    desc: 'Fully licensed roofing contractor with comprehensive public liability and workmanship insurance. Your home is protected throughout every stage of the project.',
  },
  {
    icon: (
      <svg className="w-full h-full" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x=".5" y=".5" width="43" height="43" stroke="#7B4B27" strokeWidth="1" />
        <circle cx="22" cy="22" r="10" stroke="#7B4B27" strokeWidth="1" />
        <path d="M22 12v2M22 30v2M12 22h2M30 22h2" stroke="#7B4B27" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: '10-Year Guarantee',
    desc: 'Every installation backed by a full decade of workmanship guarantee. If something isn\'t right, we make it right — at absolutely no cost to you.',
  },
  {
    icon: (
      <svg className="w-full h-full" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x=".5" y=".5" width="43" height="43" stroke="#7B4B27" strokeWidth="1" />
        <polyline points="11,23 19,31 33,15" stroke="#7B4B27" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Fixed-Price Quotes',
    desc: 'No surprises. No extras. Our quotes are comprehensive and firm. What we say, we charge. Nothing more added once work begins.',
  },
]

export default function TrustSection() {
  return (
    <section id="trust" className="py-28 bg-warm-white">
      <div className="max-w-[1320px] mx-auto px-12 max-md:px-6">
        <div className="mb-[72px]">
          <div className="section-label" style={{ color: 'var(--color-copper-l)' }}>
            06 — Why Ironstone
          </div>
          <h2 className="font-display text-[clamp(72px,7vw,112px)] leading-[.88] text-ink">
            BUILT ON<br />STANDARDS.
          </h2>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1">
          {items.map((item, i) => (
            <TrustItem key={item.title} item={item} delay={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustItem({ item, delay }) {
  const ref = useScrollReveal()
  const delayClass = delay === 0 ? '' : `d${delay}`

  return (
    <div
      ref={ref}
      className={`p-13 border-r border-black/9 last:border-r-0 max-md:border-r-0 max-md:border-b max-md:border-black/9 last:max-md:border-b-0 reveal ${delayClass}`}
    >
      <div className="w-11 h-11 mb-7">
        {item.icon}
      </div>
      <div className="font-condensed font-black text-[22px] uppercase tracking-[0.04em] text-ink mb-3.5">
        {item.title}
      </div>
      <div className="text-[14px] font-light text-concrete leading-[1.8]">
        {item.desc}
      </div>
    </div>
  )
}
