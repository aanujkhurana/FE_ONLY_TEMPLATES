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

export default function Process() {
  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-white/[0.01] to-[#080808]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs tracking-[0.2em] uppercase text-gold/60">Our Process</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.95]">
              How We Build Your <span className="text-gold">Presence</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/[0.06] hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative md:pl-16 group">
                  <div className="hidden md:flex absolute left-0 top-0 w-10 h-10 rounded-full border border-white/[0.08] bg-[#080808] items-center justify-center text-sm text-ivory-dark/40 font-medium group-hover:border-gold/30 group-hover:text-gold transition-all duration-500">
                    {step.number}
                  </div>

                  <div
                    className="hidden md:block absolute left-[19px] top-10 bottom-0 w-px bg-white/[0.04] transition-colors duration-500"
                    style={{ height: i === steps.length - 1 ? 0 : undefined }}
                  />

                  <div className="md:pl-8 border-l md:border-l-0 border-white/[0.06] pl-8 md:pl-0">
                    <span className="text-xs tracking-[0.2em] uppercase text-gold/40 md:hidden">Step {step.number}</span>
                    <h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-3 text-ivory-dark/60 leading-relaxed max-w-xl">{step.description}</p>
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
