import ScrollReveal from './ui/ScrollReveal'

export default function ProblemSolution() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-white/[0.01] to-[#080808]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold/60">The Difference</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Outdated vs <span className="text-gold">Premium</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <ScrollReveal direction="left">
            <div className="relative group h-full">
              <div className="relative h-full rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10 overflow-hidden transition-[border-color,box-shadow] duration-500 group-hover:border-white/[0.12] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-red-400/60">Outdated Website</span>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden grayscale">
                  <div className="h-8 bg-white/[0.04] flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/30" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/30" />
                    <div className="w-2 h-2 rounded-full bg-green-500/30" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="h-3 w-24 rounded bg-white/[0.04]" />
                    <div className="h-16 rounded-lg bg-white/[0.03] flex items-center justify-center">
                      <span className="text-[10px] text-ivory-dark/20">Old template design</span>
                    </div>
                    <div className="h-3 w-full rounded bg-white/[0.04]" />
                    <div className="h-3 w-3/4 rounded bg-white/[0.04]" />
                    <div className="h-3 w-1/2 rounded bg-white/[0.04]" />
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {['Generic template', 'Poor mobile experience', 'Low trust signals', 'Dated design'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-red-400/40">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative group h-full">
              <div className="relative h-full rounded-3xl border border-gold/[0.12] bg-gradient-to-br from-gold/[0.03] to-transparent p-8 sm:p-10 overflow-hidden transition-[border-color,box-shadow] duration-500 group-hover:border-gold/[0.25] group-hover:shadow-[0_20px_60px_rgba(201,168,76,0.08)]">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gold/60">Premium Website</span>
                </div>

                <div className="rounded-xl border border-white/[0.08] bg-[#0c0c0d] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                  <div className="h-8 bg-white/[0.04] flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/40" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                    <div className="w-2 h-2 rounded-full bg-green-500/40" />
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="h-3 w-20 rounded bg-gold/20" />
                    <div className="h-16 rounded-lg bg-gradient-to-br from-gold/[0.08] to-violet/[0.08] border border-white/[0.04]" />
                    <div className="h-3 w-full rounded bg-white/[0.06]" />
                    <div className="h-3 w-3/4 rounded bg-white/[0.06]" />
                    <div className="flex gap-2">
                      <div className="h-6 w-16 rounded-full bg-gold/20" />
                      <div className="h-6 w-16 rounded-full border border-white/[0.06]" />
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {['Cinematic motion design', 'Mobile-first experience', 'Trust-building UI system', 'Conversion-optimised flow'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gold/60">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
