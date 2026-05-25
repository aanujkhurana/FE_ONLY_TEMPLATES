import ScrollReveal from './ui/ScrollReveal'

const outdatedBullets = [
  'Generic template that blends in with competitors',
  'Poor mobile experience drives visitors away',
  'Low trust signals make you look unprofessional',
  'Slow loading times kill conversions instantly',
]

const premiumBullets = [
  'Cinematic motion design that captivates visitors',
  'Mobile-first experience polished on every device',
  'Trust-building UI that establishes authority',
  'Conversion-optimised flow that drives phone calls',
]

function OutdatedMockup() {
  return (
    <div className="rounded-lg overflow-hidden border border-white/[0.05] w-full min-h-[155px] flex flex-col">
      <div className="h-5 bg-gradient-to-r from-zinc-700 to-zinc-800 flex items-center px-2 gap-1 shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
        <div className="flex-1 mx-2 h-2.5 rounded bg-white/[0.04]" />
      </div>
      <div className="p-3 flex flex-col flex-1 gap-2" style={{ background: 'linear-gradient(135deg, #2a1f1f, #1a1a1a)' }}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-zinc-500 to-zinc-700 flex items-center justify-center text-white text-[6px] font-bold">B</div>
          <div>
            <div className="text-[7px] font-bold text-zinc-400" style={{ fontFamily: 'serif' }}>BizSolutions&reg;</div>
          </div>
        </div>
        <div className="text-center border border-dashed border-zinc-700 rounded p-2">
          <div className="text-[8px] font-bold text-red-400" style={{ fontFamily: 'serif' }}>Welcome to Our Site!</div>
          <div className="text-[6px] text-zinc-500 italic">We value our customers...</div>
        </div>
        <div className="flex justify-center gap-2 text-[9px]">
          <span className="text-amber-600">★</span>
          <span className="text-red-600">✦</span>
          <span className="text-amber-600">★</span>
        </div>
        <div className="space-y-1">
          {['Home', 'About', 'Contact'].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-[6px]">
              <span className="text-zinc-600">►</span>
              <span className="text-zinc-500 underline">{item}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-dashed border-zinc-800 pt-1 flex justify-between text-[5px] text-zinc-600">
          <span>Visitors: 00042</span>
          <span>800x600</span>
        </div>
      </div>
    </div>
  )
}

function PremiumMockup() {
  return (
    <div className="rounded-lg overflow-hidden border border-white/[0.08] shadow-lg w-full flex flex-col">
      <div className="h-5 bg-gradient-to-r from-zinc-100 to-zinc-200 flex items-center px-2 gap-1 shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-2 h-2.5 rounded bg-zinc-200 flex items-center px-1.5">
          <span className="text-[4px] text-zinc-400">shipstudio.io</span>
        </div>
      </div>
      <div className="bg-white p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-[7px] font-bold text-zinc-800">ShipStudio</span>
          </div>
          <div className="flex gap-2">
            {['Services', 'Work', 'About', 'Contact'].map((item) => (
              <span key={item} className="text-[5px] text-zinc-400">{item}</span>
            ))}
          </div>
        </div>

        <div className="flex items-end gap-4">
          <div className="flex-1">
            <div className="text-[13px] font-bold tracking-[-0.03em] leading-[1.1] text-zinc-900">
              Modern Digital<br />
              <span className="text-sky-600">Solutions</span>
            </div>
            <p className="text-[6px] text-zinc-400 mt-1 leading-relaxed max-w-[80%]">
              We craft premium websites that drive real business growth and turn visitors into loyal customers.
            </p>
          </div>
          <div className="flex gap-1.5 shrink-0">
            <div className="h-4.5 px-2.5 rounded-full bg-sky-500 flex items-center">
              <span className="text-[5px] font-medium text-white">Get Started</span>
            </div>
            <div className="h-4.5 px-2.5 rounded-full border border-zinc-200 flex items-center">
              <span className="text-[5px] text-zinc-400">Learn More</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {[{ label: 'Page Load', value: '0.8s', sub: 'avg' }, { label: 'Trust Score', value: '96', sub: '/100' }, { label: 'Conversion', value: '+340%', sub: 'avg uplift' }].map((stat) => (
            <div key={stat.label} className="rounded border border-zinc-100 bg-zinc-50 p-2 text-center">
              <div className="text-[9px] font-bold text-sky-600">{stat.value}</div>
              <div className="text-[4px] text-zinc-400 uppercase tracking-wider">{stat.label}</div>
              <div className="text-[4px] text-zinc-300">{stat.sub}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between rounded border border-zinc-100 bg-zinc-50 px-2.5 py-1.5">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-0.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full border border-white bg-gradient-to-br from-sky-300 to-blue-400" style={{ zIndex: 3 - i }} />
              ))}
            </div>
            <span className="text-[5px] text-zinc-400">Trusted by 50+ businesses</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-2.5 h-2.5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-[5px] text-zinc-400">4.9 avg. rating</span>
          </div>
        </div>
      </div>
    </div>
  )
}

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
              <div className="relative h-full rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 sm:p-10 overflow-hidden transition-[border-color,box-shadow] duration-500 group-hover:border-white/[0.12] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-red-400/60">Outdated Website</span>
                    <p className="text-[10px] text-ivory-dark/30 mt-0.5">Lost customers, lost revenue</p>
                  </div>
                </div>

                <ul className="space-y-4 flex-1">
                  {outdatedBullets.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-red-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-sm text-ivory-dark/50 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/[0.04]">
                  <OutdatedMockup />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative group h-full">
              <div className="relative h-full rounded-3xl border border-gold/[0.12] bg-gradient-to-br from-gold/[0.03] to-transparent p-8 sm:p-10 overflow-hidden transition-[border-color,box-shadow] duration-500 group-hover:border-gold/[0.25] group-hover:shadow-[0_20px_60px_rgba(201,168,76,0.08)] flex flex-col">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gold/60">Premium Website</span>
                    <p className="text-[10px] text-ivory-dark/30 mt-0.5">More calls, more revenue</p>
                  </div>
                </div>

                <ul className="space-y-4 flex-1">
                  {premiumBullets.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-ivory-dark/50 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/[0.04]">
                  <PremiumMockup />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
