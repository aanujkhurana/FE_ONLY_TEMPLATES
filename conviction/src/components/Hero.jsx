import { usePreview } from '../context/PreviewContext'
import MagneticButton from './ui/MagneticButton'

export default function Hero() {
  const { openForm, submitted } = usePreview()

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="noise absolute inset-0 z-[2] pointer-events-none" />

      <div className="absolute inset-0 z-0">
        <div
          className="ambient-glow absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(201,168,76,0.35) 0%, rgba(201,168,76,0.05) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="ambient-glow absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full opacity-35"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(122,92,245,0.3) 0%, rgba(122,92,245,0.05) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="ambient-glow absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle at 50% 70%, rgba(45,212,191,0.2) 0%, rgba(45,212,191,0.05) 50%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15"
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
        <div className="flex-1 pt-16 lg:pt-0">
          <div className="hero-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/[0.15] bg-gold/[0.04] text-gold/70 text-[11px] tracking-[0.2em] uppercase mb-8 supports-[backdrop-filter]:md:backdrop-blur-sm">
            <span
              className="w-1.5 h-1.5 rounded-full bg-gold"
              style={{ animation: 'skeleton-pulse 2s ease-in-out infinite' }}
            />
            Premium Digital Presence
          </div>

          <h1 className="hero-reveal hero-reveal-2 text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-[0.82] tracking-[-0.07em]">
            <span className="text-ivory">We Make Local</span>
            <br />
            <span className="text-ivory">Businesses</span>
            <br />
            <span className="gradient-text">Look Premium.</span>
          </h1>

          <p className="hero-reveal hero-reveal-3 mt-6 text-base sm:text-lg text-ivory-dark/60 leading-relaxed max-w-lg">
            Cinematic high-converting websites designed to turn local traffic into phone calls, quotes, and customers.
          </p>

          <div className="hero-reveal hero-reveal-4 flex flex-wrap gap-4 mt-10">
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
          </div>

          <div className="hero-reveal hero-reveal-5 mt-14 flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-xl border-2 border-[#080808] bg-white/10 flex items-center justify-center shadow-lg" style={{ zIndex: 4 }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5a4.5 4.5 0 004.5 4.5h3.75m-7.5 0l-3 3m0 0l3 3m-3-3h3.75m6-10.5A2.25 2.25 0 0118 3.75v1.5a2.25 2.25 0 01-.75 1.71l-3.75 3.75A4.486 4.486 0 0012 13.5v.75M4.5 15.75a2.25 2.25 0 012.25-2.25h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5A2.25 2.25 0 014.5 17.25v-1.5z" />
                </svg>
              </div>
              <div className="w-9 h-9 rounded-xl border-2 border-[#080808] bg-white/10 flex items-center justify-center shadow-lg" style={{ zIndex: 3 }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 011.06 0l1.591 1.591a.75.75 0 01-1.06 1.06l-1.591-1.59a.75.75 0 010-1.061zm11.668 0a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 01-1.06-1.06l1.59-1.591a.75.75 0 011.061 0zm-8.398 5.644a.75.75 0 010 1.06l-5.864 5.865a.75.75 0 01-1.061-1.06l5.864-5.865a.75.75 0 011.06 0zm7.844 1.06a.75.75 0 010 1.061l-1.591 1.59a.75.75 0 01-1.06-1.06l1.59-1.591a.75.75 0 011.061 0zm-3.374 3.374a.75.75 0 010 1.06l-1.591 1.591a.75.75 0 01-1.06-1.06l1.59-1.591a.75.75 0 011.061 0zm-6.176 2.201a.75.75 0 010 1.06l-.53.53a.75.75 0 01-1.06-1.06l.53-.53a.75.75 0 011.06 0zM12 15.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75z" />
                </svg>
              </div>
              <div className="w-9 h-9 rounded-xl border-2 border-[#080808] bg-white/10 flex items-center justify-center shadow-lg" style={{ zIndex: 2 }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m0 0v6m0 0a3 3 0 01-3 3m0 0H5.25m0 0a3 3 0 01-3-3m0 0V8.25m0 0a3 3 0 013-3h10.5" />
                </svg>
              </div>
              <div className="w-9 h-9 rounded-xl border-2 border-[#080808] bg-white/10 flex items-center justify-center shadow-lg" style={{ zIndex: 1 }}>
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <div className="text-ivory-dark/40 text-sm leading-snug">
              <span className="text-ivory-dark/60 font-medium">Trusted</span> by service businesses across Australia
            </div>
          </div>
        </div>

        <div className="hero-device flex-1 w-full max-w-lg lg:max-w-none">
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

            <div
              className="absolute -top-4 -right-4 lg:-right-6 px-4 py-2 rounded-xl border border-white/[0.06] bg-[#0c0c0d]/92 supports-[backdrop-filter]:md:backdrop-blur-md shadow-lg"
              style={{ animation: 'float-2 7s ease-in-out infinite' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                <span className="text-[10px] font-medium text-ivory-dark/60">50+ sites delivered</span>
              </div>
            </div>

            <div
              className="absolute -bottom-3 -left-4 lg:-left-6 px-4 py-2 rounded-xl border border-white/[0.06] bg-[#0c0c0d]/92 supports-[backdrop-filter]:md:backdrop-blur-md shadow-lg"
              style={{ animation: 'float-1 8s ease-in-out infinite 1s' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-gold/70">&#9733; 4.9</span>
                <span className="text-[9px] text-ivory-dark/40">avg. rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
