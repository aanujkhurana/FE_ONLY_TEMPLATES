import { motion } from 'framer-motion'
import { usePreview } from '../context/PreviewContext'
import MagneticButton from './ui/MagneticButton'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  const { openForm, submitted } = usePreview()

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="noise absolute inset-0 z-[2] pointer-events-none" />

      <div className="absolute inset-0 z-0">
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(201,168,76,0.35) 0%, rgba(201,168,76,0.05) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full opacity-35"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(122,92,245,0.3) 0%, rgba(122,92,245,0.05) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle at 50% 70%, rgba(45,212,191,0.2) 0%, rgba(45,212,191,0.05) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle at center, rgba(236,232,225,0.15) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808] opacity-70" />
      </div>

      <div
        className="absolute top-24 right-[15%] w-28 h-28 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-2xl z-[1] hidden lg:block"
        style={{ boxShadow: '0 0 40px rgba(255,255,255,0.02)', animation: 'float-1 8s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-1/4 left-[10%] w-40 h-40 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-2xl z-[1] hidden lg:block"
        style={{ boxShadow: '0 0 60px rgba(255,255,255,0.02)', animation: 'float-2 10s ease-in-out infinite 1.5s' }}
      />
      <div
        className="absolute top-[45%] right-[28%] w-16 h-16 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-2xl z-[1] hidden lg:block"
        style={{ animation: 'float-3 7s ease-in-out infinite 3s' }}
      />
      <div
        className="absolute top-[60%] left-[20%] w-20 h-20 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-2xl z-[1] hidden xl:block"
        style={{ animation: 'float-4 9s ease-in-out infinite 4s' }}
      />
      <div
        className="absolute top-[20%] left-[55%] w-12 h-12 rounded-lg border border-white/[0.06] bg-white/[0.02] backdrop-blur-2xl z-[1] hidden lg:block"
        style={{ transform: 'rotate(45deg)', animation: 'float-5 6s ease-in-out infinite 2s' }}
      />

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        style={{ animation: 'scroll-pulse 2.5s ease-in-out infinite' }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-ivory-dark/20">Scroll</span>
        <div className="w-[18px] h-[30px] rounded-full border border-white/[0.08] flex items-start justify-center p-1">
          <div
            className="w-[3px] h-[6px] rounded-full bg-gold/60"
            style={{ animation: 'scroll-dot 2.5s ease-in-out infinite' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 pt-16 lg:pt-0"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/[0.15] bg-gold/[0.04] text-gold/70 text-[11px] tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
            <span
              className="w-1.5 h-1.5 rounded-full bg-gold"
              style={{ animation: 'skeleton-pulse 2s ease-in-out infinite' }}
            />
            Premium Digital Presence
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-[0.82] tracking-[-0.07em]">
            <span className="text-ivory">We Make Local</span>
            <br />
            <span className="text-ivory">Businesses</span>
            <br />
            <span className="gradient-text">Look Premium.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-base sm:text-lg text-ivory-dark/60 leading-relaxed max-w-lg">
            Cinematic high-converting websites designed to turn local traffic into phone calls, quotes, and customers.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
            <MagneticButton>
              {submitted ? (
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.04] text-gold/80 text-sm font-medium rounded-full border border-white/[0.06]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Preview Requested
                </span>
              ) : (
                <button
                  onClick={openForm}
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-[#080808] font-semibold rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_35px_rgba(201,168,76,0.35)] cursor-pointer"
                >
                  Get Free Preview
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              )}
            </MagneticButton>
            <MagneticButton>
              <a href="#work" className="group inline-flex items-center gap-2 px-8 py-4 border border-white/[0.1] text-ivory/70 rounded-full text-sm tracking-wide transition-all duration-300 hover:bg-white/[0.05] hover:text-ivory hover:border-white/[0.2]">
                View Our Work
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-14 flex items-center gap-4">
            <div className="flex -space-x-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#080808] bg-gradient-to-br from-gold/40 to-violet/40"
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <div className="text-ivory-dark/40 text-sm leading-snug">
              <span className="text-ivory-dark/60 font-medium">Trusted</span> by service businesses across Australia
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full max-w-lg lg:max-w-none"
        >
          <div className="relative">
            <div
              className="absolute -inset-8 bg-gold/[0.04] blur-3xl rounded-3xl opacity-40"
            />

            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0c0c0d] shadow-[0_60px_140px_rgba(201,168,76,0.08)]">
              <div className="h-11 bg-white/[0.03] flex items-center px-4 gap-2 border-b border-white/[0.05]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="flex-1 mx-4 h-7 rounded-md bg-white/[0.04] flex items-center px-3 border border-white/[0.02]">
                  <span className="text-[10px] text-ivory-dark/25 tracking-wide">conviction.design/preview</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-20 rounded bg-white/[0.05]" />
                  <div className="hidden sm:flex gap-5">
                    <div className="h-3 w-14 rounded bg-white/[0.03]" />
                    <div className="h-3 w-14 rounded bg-white/[0.03]" />
                    <div className="h-3 w-14 rounded bg-white/[0.03]" />
                  </div>
                  <div className="h-7 w-20 rounded-full" style={{ backgroundColor: 'rgba(201,168,76,0.15)' }} />
                </div>

                <div className="pt-10 pb-8 space-y-4">
                  <div className="h-10 w-4/5 rounded-lg bg-gradient-to-r from-white/[0.06] to-white/[0.03]" />
                  <div className="h-10 w-3/5 rounded-lg bg-gradient-to-r from-white/[0.06] to-white/[0.03]" />
                  <div className="h-4 w-2/3 rounded bg-white/[0.03] mt-6" />
                  <div className="flex gap-3 mt-6">
                    <div className="h-9 w-28 rounded-full" style={{ backgroundColor: 'rgba(201,168,76,0.2)' }} />
                    <div className="h-9 w-28 rounded-full border border-white/[0.05]" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-20 sm:h-28 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.03]"
                      style={{ animation: `mockup-up 5s ease-in-out infinite ${i * 0.3}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
