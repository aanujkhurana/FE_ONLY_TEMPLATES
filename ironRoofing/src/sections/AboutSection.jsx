import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  { num: '100%', text: 'Licensed, insured, and certified. Not optional — standard.' },
  { num: 'Zero', text: 'Hidden costs. You know exactly what you\'re getting, and for how much.' },
  { num: 'Every', text: 'Job backed by a decade of workmanship guarantee. We stand behind our work.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-charcoal">
      <div className="max-w-[1320px] mx-auto px-12 max-md:px-6">
        <div className="grid grid-cols-[3fr_2fr] gap-20 items-center max-xl:grid-cols-1 max-xl:gap-12">
          <div>
            <div className="section-label">01 — Who We Are</div>
            <h2 className="font-condensed font-black text-[clamp(40px,4vw,66px)] leading-[1.02] uppercase tracking-[0.02em] text-warm-white">
              We don&apos;t cut corners.<br />We prevent them<br />from failing.
            </h2>
            <AboutParagraph />
          </div>
          <div>
            {pillars.map((p, i) => (
              <Pillar key={p.num} pillar={p} delay={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutParagraph() {
  const ref = useScrollReveal()
  return (
    <p ref={ref} className="font-body text-[17px] font-light text-sand leading-[1.85] mt-8 reveal d1">
      Ironstone Roofing was built on a single principle: every roof we touch should outlast our involvement. No shortcuts, no compromises. We engineer roofing solutions with precision materials, master-grade installation, and a commitment to craft that most contractors simply don&apos;t bother with.
    </p>
  )
}

function Pillar({ pillar, delay }) {
  const ref = useScrollReveal()
  const delayClass = delay === 0 ? '' : `d${delay}`

  return (
    <div
      ref={ref}
      className={`border-t border-white/8 py-7 last:border-b border-white/8 reveal ${delayClass}`}
    >
      <div className="font-display text-[44px] text-copper-l leading-[1]">
        {pillar.num}
      </div>
      <div className="font-condensed text-[14px] font-normal text-sand mt-1">
        {pillar.text}
      </div>
    </div>
  )
}
