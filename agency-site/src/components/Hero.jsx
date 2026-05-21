import { motion } from 'framer-motion'
import MagneticButton from './ui/MagneticButton'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
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
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="noise absolute inset-0 z-[2] pointer-events-none" />

      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 30, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(201,168,76,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{ x: [0, -60, 50, 0], y: [0, 60, -40, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle at center, rgba(122,92,245,0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{ x: [0, 40, -60, 0], y: [0, -40, 60, 0], scale: [1, 1.05, 1.15, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(45,212,191,0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808] opacity-60" />
      </div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[12%] w-28 h-28 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl z-[1] hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-1/3 left-[8%] w-36 h-36 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl z-[1] hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute top-1/2 right-[25%] w-20 h-20 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl z-[1] hidden lg:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-1 pt-12 lg:pt-0"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-ivory-dark/60 text-[11px] tracking-[0.2em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Premium Digital Presence
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.88] tracking-[-0.06em]">
            <span className="text-ivory">We Make Local</span>
            <br />
            <span className="text-ivory">Businesses</span>
            <br />
            <span className="text-gold">Look Premium.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 text-base sm:text-lg text-ivory-dark/70 leading-relaxed max-w-lg">
            Cinematic high-converting websites designed to turn local traffic into phone calls, quotes, and customers.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
            <MagneticButton>
              <a href="#cta" className="group inline-flex items-center gap-2 px-8 py-4 bg-gold text-[#080808] font-semibold rounded-full text-sm tracking-wide transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]">
                Get Free Preview
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#work" className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.1] text-ivory/80 rounded-full text-sm tracking-wide transition-all hover:bg-white/[0.05] hover:text-ivory">
                View Our Work
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex items-center gap-4 text-ivory-dark/50 text-sm">
            <div className="flex -space-x-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#080808] bg-gradient-to-br from-gold/30 to-violet/30"
                  style={{ zIndex: 4 - i }}
                />
              ))}
            </div>
            <span>Trusted by service businesses across Australia</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full max-w-lg lg:max-w-none"
        >
          <div className="relative group">
            <div className="absolute -inset-6 bg-gold/[0.06] blur-3xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c0d] shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
              <div className="h-11 bg-white/[0.04] flex items-center px-4 gap-2 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="flex-1 mx-4 h-7 rounded-md bg-white/[0.05] flex items-center px-3 border border-white/[0.03]">
                  <span className="text-[10px] text-ivory-dark/30 tracking-wide">conviction.design/preview</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-20 rounded bg-white/[0.06]" />
                  <div className="hidden sm:flex gap-5">
                    <div className="h-3 w-14 rounded bg-white/[0.04]" />
                    <div className="h-3 w-14 rounded bg-white/[0.04]" />
                    <div className="h-3 w-14 rounded bg-white/[0.04]" />
                  </div>
                  <div className="h-7 w-20 rounded-full bg-gold/20" />
                </div>

                <div className="pt-8 pb-6 space-y-4">
                  <div className="h-9 w-3/4 rounded-lg bg-white/[0.08]" />
                  <div className="h-9 w-1/2 rounded-lg bg-white/[0.08]" />
                  <div className="h-4 w-2/3 rounded bg-white/[0.04] mt-6" />
                  <div className="flex gap-3 mt-6">
                    <div className="h-9 w-28 rounded-full bg-gold/20" />
                    <div className="h-9 w-28 rounded-full border border-white/[0.06]" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-20 sm:h-28 rounded-xl bg-white/[0.03] border border-white/[0.04]" />
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
