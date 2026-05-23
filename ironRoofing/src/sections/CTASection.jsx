import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTASection() {
  return (
    <section id="cta" className="py-[140px] bg-ink relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'repeating-linear-gradient(-45deg,transparent,transparent 90px,rgba(155,98,53,.025) 90px,rgba(155,98,53,.025) 91px)',
        }}
      />
      <div className="max-w-[1320px] mx-auto px-12 max-md:px-6 relative">
        <div className="grid grid-cols-[3fr_2fr] gap-20 items-center max-xl:grid-cols-1 max-xl:gap-12">
          <div>
            <div className="section-label">08 — Get Started</div>
            <h2 className="font-display text-[clamp(72px,8vw,120px)] leading-[.86] text-warm-white">
              PROTECT<br />WHAT<br />MATTERS.
            </h2>
            <CTASubtitle />
          </div>
          <div className="flex flex-col gap-5">
            <CTABlock
              label="Call Us Directly"
              value="0412 345 678"
              href="tel:0412345678"
              isLarge
              delay={0}
            />
            <CTABlock
              label="Send An Enquiry"
              value="hello@ironstoneroofing.com.au"
              href="mailto:hello@ironstoneroofing.com.au"
              delay={1}
            />
            <CTABlockCTA delay={2} />
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASubtitle() {
  const ref = useScrollReveal()
  return (
    <p ref={ref} className="font-body text-[17px] font-light text-warm-gray mt-8 leading-[1.85] max-w-[480px] reveal d1">
      A roofing assessment costs you nothing but time. What you get in return is clarity, confidence, and a plan built specifically for your home.
    </p>
  )
}

function CTABlock({ label, value, href, isLarge, delay }) {
  const ref = useScrollReveal()
  const delayClass = delay === 0 ? '' : `d${delay}`

  return (
    <div ref={ref} className={`p-8 border border-white/8 reveal ${delayClass}`}>
      <div className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-copper-l mb-2.5">
        {label}
      </div>
      <a
        href={href}
        className={`font-condensed font-extrabold text-warm-white no-underline transition-colors duration-200 hover:text-copper-l ${isLarge ? 'text-[26px]' : 'text-[17px]'}`}
      >
        {value}
      </a>
    </div>
  )
}

function CTABlockCTA({ delay }) {
  const ref = useScrollReveal()
  return (
    <a
      ref={ref}
      href="mailto:hello@ironstoneroofing.com.au"
      className={`btn-block reveal d${delay}`}
    >
      Request Free Assessment →
    </a>
  )
}
