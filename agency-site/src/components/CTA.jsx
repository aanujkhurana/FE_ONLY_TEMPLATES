import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'
import ScrollReveal from './ui/ScrollReveal'

export default function CTA() {
  return (
    <section id="cta" className="relative py-48 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(201,168,76,0.3) 0%, rgba(122,92,245,0.1) 40%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />
      </div>

      <div className="noise absolute inset-0 z-[1] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <ScrollReveal>
          <span className="text-xs tracking-[0.2em] uppercase text-gold/60">Get Started</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-[-0.05em] leading-[0.92]">
            Ready to Look Like the{' '}
            <span className="text-gold">Premium Option?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base sm:text-lg text-ivory-dark/60 max-w-xl mx-auto leading-relaxed">
            Get a free preview of what your business could look like online. No commitment — just a taste of premium.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <MagneticButton>
              <button
                onClick={() => alert('Get Free Preview — demo flow')}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-[#080808] font-semibold rounded-full text-sm tracking-wide transition-all hover:bg-gold-light hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
              >
                Get Your Free Preview
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-6 text-xs text-ivory-dark/30">
            Free preview. No obligation. Typical delivery in 48 hours.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
