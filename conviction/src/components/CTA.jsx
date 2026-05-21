import { motion } from 'framer-motion'
import { usePreview } from '../context/PreviewContext'
import ScrollReveal from './ui/ScrollReveal'

export default function CTA() {
  const { openForm, submitted } = usePreview()

  return (
    <section id="cta" className="relative py-48 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle at center, rgba(201,168,76,0.3) 0%, rgba(122,92,245,0.1) 35%, rgba(45,212,191,0.05) 60%, transparent 80%)',
            filter: 'blur(120px)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(201,168,76,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)',
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
          <h2 className="mt-6 text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-[-0.05em] leading-[0.88]">
            Ready to Look Like the{' '}
            <span className="gradient-text">Premium Option?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base sm:text-lg text-ivory-dark/50 max-w-xl mx-auto leading-relaxed">
            Get a free preview of what your business could look like online. No commitment — just a taste of premium.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12">
            {submitted ? (
              <span className="inline-flex items-center gap-3 px-10 py-5 bg-white/[0.04] text-gold/80 text-sm font-medium rounded-full border border-white/[0.06]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Preview Requested
              </span>
            ) : (
              <button
                onClick={openForm}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-[#080808] font-semibold rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_50px_rgba(201,168,76,0.3)] cursor-pointer"
              >
                Get Your Free Preview
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-6 text-xs text-ivory-dark/25 tracking-wide">
            Free preview · No obligation · Typical delivery in 48 hours
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
