import { motion } from 'framer-motion';
import ProgressiveImage from './ProgressiveImage';

export default function TransformationSection({ beforeAfterRef, handleSliderMove, sliderPosition }) {
  return (
    <section id="transformation" className="py-32 px-6 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00d4f0]/[0.05] rounded-full filter blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 mb-16"
        >
          <p className="section-label">The Aura Standard</p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
            Witness Absolute Visual{' '}
            <span className="font-semibold text-gradient-aqua">Transformation</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm font-light leading-relaxed">
            Drag or hover across the viewport to experience our proprietary organic restoration cycle.
          </p>
        </motion.div>

        {/* Before / After Slider */}
        <motion.div
          initial={{ y: 40, scale: 0.98 }}
          whileInView={{ y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            ref={beforeAfterRef}
            className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
            onMouseMove={(e) => handleSliderMove(e.clientX)}
            onTouchMove={(e) => handleSliderMove(e.touches[0].clientX)}
          >
            {/* ─ BEFORE: neglected pool ─ */}
            <div className="absolute inset-0">
              <ProgressiveImage
                src="/beforeImage-md.webp"
                srcSet="/beforeImage-sm.webp 600w, /beforeImage-md.webp 1000w, /beforeImage.webp 1600w"
                sizes="(max-width: 1024px) 100vw, 1024px"
                alt="Before — Neglected green pool"
                className="w-full h-full"
                placeholder="#1a3a2a"
              />
              {/* Green tint overlay to sell the "neglected" state */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/60 via-transparent to-black/60" />
              {/* Label */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400">Before</span>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-8 left-8 space-y-1">
                <p className="font-serif italic text-2xl text-emerald-600/80">Neglected Stagnation</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">Typical Competitor Condition</p>
              </div>
            </div>

            {/* ─ AFTER: crystal clear ─ */}
            <div
              className="absolute inset-0 transition-[clip-path] duration-75"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <ProgressiveImage
                src="/afterImage-md.webp"
                srcSet="/afterImage-sm.webp 600w, /afterImage-md.webp 1000w, /afterImage.webp 1600w"
                sizes="(max-width: 1024px) 100vw, 1024px"
                alt="After — Crystal clear Aura pool"
                className="w-full h-full"
                placeholder="#0a3d6b"
              />
              {/* Aqua shine overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at 40% 30%, rgba(0,212,240,0.12) 0%, transparent 70%)',
                }}
              />
              {/* Label */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full border border-[#00d4f0]/30 bg-[#00d4f0]/10 backdrop-blur-md">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#00d4f0]">After — Aura Standard</span>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-8 left-8 space-y-1">
                <p className="font-display uppercase tracking-[0.2em] text-2xl font-bold text-white text-shadow-aqua">Aura Illumination</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#00d4f0] font-mono">Pure · Balanced · Architectural Water</p>
              </div>
            </div>

            {/* ─ SLIDER HANDLE ─ */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical glowing line */}
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/80 shadow-[0_0_12px_rgba(0,212,240,0.8),0_0_30px_rgba(0,212,240,0.4)]" />

              {/* Central handle knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="w-11 h-11 rounded-full border-2 border-white bg-[#020b14] flex items-center justify-center shadow-[0_0_20px_rgba(0,212,240,0.5)]">
                  {/* Double chevron */}
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats row below slider */}
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            { v: '24h', l: 'Green Pool Restoration' },
            { v: '100%', l: 'Chemical Neutralisation' },
            { v: '5★', l: 'Verified Client Rating' },
          ].map(({ v, l }) => (
            <div key={l} className="flex items-center gap-3">
              <span className="text-xl font-bold text-white">{v}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono">{l}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
