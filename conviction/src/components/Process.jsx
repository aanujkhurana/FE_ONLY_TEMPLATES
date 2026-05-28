import ScrollReveal from './ui/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn your business, your customers, and your goals inside out so the design is built on strategy, not guesses.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'We craft a premium visual identity with cinematic interfaces, bespoke typography, and conversion-focused layouts.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'We engineer a high-performance website with fluid motion, premium interactions, and meticulous attention to every pixel.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy your site, optimise for search, and hand over a complete digital presence that turns heads and drives calls.',
  },
]

function StepLine() {
  return (
    <div className="absolute left-[19px] top-0 bottom-0 w-px hidden md:block">
      <div className="absolute inset-0 bg-white/[0.06]" />
      <div
        className="absolute top-0 left-0 w-full h-full rounded-full opacity-80"
        style={{
          background: 'linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0.2))',
        }}
      />
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 section-gradient" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs tracking-[0.2em] uppercase text-gold/60">Our Process</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.95]">
              How We Build Your <span className="gradient-text">Presence</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <StepLine />

          <div className="space-y-16 md:space-y-28">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative md:pl-16 group">
                  <div
                    className="hidden md:flex absolute left-0 top-0 w-10 h-10 rounded-full border border-white/[0.08] bg-[#080808] items-center justify-center text-sm text-ivory-dark/40 font-medium transition-all duration-500 group-hover:border-gold/40 group-hover:text-gold"
                  >
                    {step.number}
                  </div>

                  <div className="md:pl-8 border-l md:border-l-0 border-white/[0.04] pl-8 md:pl-0 relative">
                    <div
                      className="absolute left-0 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-gold/60 hidden md:block process-dot"
                      style={{ left: '-28px' }}
                    />
                    <div
                      className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full border border-gold/30 hidden md:block process-ring"
                      style={{ left: '-28px' }}
                    />
                    <span className="text-[10px] tracking-[0.25em] uppercase text-gold/40 md:hidden">Step {step.number}</span>
                    <h3 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-3 text-ivory-dark/50 leading-relaxed max-w-xl">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
