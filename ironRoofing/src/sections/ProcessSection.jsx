import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    name: 'Inspection',
    desc: 'Comprehensive on-site assessment. We document everything — no guesswork, no assumptions.',
  },
  {
    num: '02',
    name: 'Proposal',
    desc: 'Detailed written scope with clear pricing. What you see is what you pay. Always.',
  },
  {
    num: '03',
    name: 'Materials',
    desc: 'Premium materials ordered and checked on site before any work begins.',
  },
  {
    num: '04',
    name: 'Installation',
    desc: 'Precision installation by certified tradespeople. Daily updates throughout.',
  },
  {
    num: '05',
    name: 'Handover',
    desc: 'Final inspection, photographic report, and warranty documentation in hand.',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 bg-ink relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(-30deg,transparent,transparent 70px,rgba(255,255,255,.007) 70px,rgba(255,255,255,.007) 71px)',
        }}
      />
      <div className="max-w-[1320px] mx-auto px-12 max-md:px-6 relative">
        <div className="grid grid-cols-[1fr_1fr] gap-12 items-end mb-24 max-xl:grid-cols-1 max-xl:gap-12">
          <div>
            <div className="section-label">04 — Our Process</div>
            <h2 className="font-display text-[clamp(72px,7vw,112px)] leading-[.88] text-warm-white">
              HOW WE<br />WORK.
            </h2>
          </div>
          <ProcessSubtitle />
        </div>
        <ProcessSteps />
      </div>
    </section>
  )
}

function ProcessSubtitle() {
  const ref = useScrollReveal()
  return (
    <p ref={ref} className="font-body text-[17px] font-light text-warm-gray leading-[1.85] reveal">
      Every Ironstone job follows a precise, methodical process. No surprises, no shortcuts. From first contact to final inspection, you know exactly where things stand.
    </p>
  )
}

function ProcessSteps() {
  return (
    <div className="grid grid-cols-5 max-xl:grid-cols-3 max-md:grid-cols-2 relative">
      <div className="absolute top-[27px] left-[5%] right-[5%] h-px bg-white/7 pointer-events-none" />
      {steps.map((s, i) => (
        <ProcessStep key={s.num} step={s} delay={i} />
      ))}
    </div>
  )
}

function ProcessStep({ step, delay }) {
  const ref = useScrollReveal()
  const delayClass = delay === 0 ? '' : `d${delay}`

  return (
    <div ref={ref} className={`px-5 group reveal ${delayClass}`}>
      <div className="w-14 h-14 border border-white/12 flex items-center justify-center relative z-1 bg-ink mb-8 transition-colors duration-300 group-hover:border-copper-l group-hover:bg-copper-l/8">
        <span className="font-condensed font-bold text-[17px] text-warm-gray tracking-[0.05em]">
          {step.num}
        </span>
      </div>
      <div className="font-condensed font-extrabold text-[17px] uppercase tracking-[0.06em] text-warm-white mb-3">
        {step.name}
      </div>
      <div className="text-[13px] font-light text-warm-gray leading-[1.75]">
        {step.desc}
      </div>
    </div>
  )
}
