import { motion } from 'framer-motion';
import ProgressiveImage from './ProgressiveImage';

function ShimmerText({ children }) {
  return (
    <span className="relative inline-block overflow-hidden">
      <span
        className="relative z-10"
        style={{
          background: "linear-gradient(135deg, #e0f7ff 0%, #ffffff 40%, #a8efff 60%, #ffffff 80%, #cffafe 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {children}
      </span>

      <span
        aria-hidden
        className="absolute inset-0 z-20 pointer-events-none shimmer-sweep"
        style={{
          background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.85) 50%, transparent 80%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "250% 100%",
        }}
      >
        {children}
      </span>
    </span>
  );
}

export default function CTASection({ isMobile }) {
  return (
    <section
      id="contact"
      className="relative py-0 overflow-hidden"
      style={{ minHeight: '70vh' }}
    >
      {/* ── FULL-BLEED HERO IMAGE (parallax) ── */}
      <div className="absolute inset-0 z-0">
        <ProgressiveImage
          src="/footer-md.webp"
          srcSet="/footer-sm.webp 600w, /footer-md.webp 1000w, /footer.webp 1600w"
          avifSrcSet="/footer-sm.avif 600w, /footer-md.avif 1000w, /footer.avif 1600w"
          sizes="100vw"
          alt="Crystal clear luxury pool — Aura Aquatics"
          className="w-full h-full scale-110"
          imgClassName="object-center"
          placeholder="#0d2840"
        />
      </div>

      {/* ── OVERLAY SYSTEM ── */}
      {/* Primary dark overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(2,11,20,0.88) 0%, rgba(2,11,20,0.72) 40%, rgba(2,11,20,0.92) 100%)',
        }}
      />
      {/* Dual-temperature side vignettes */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 80% at 0% 50%, rgba(200,169,110,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 80% at 100% 50%, rgba(0,212,240,0.08) 0%, transparent 60%)',
        }}
      />
      {/* Caustic light shimmer overlay */}
      <div className="absolute inset-0 z-10 caustic-overlay opacity-60 pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="relative z-20 flex items-center justify-center min-h-[70vh] px-6 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-10">

          {/* Ripple rings — centred decorative element echoing hero image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="water-ripple-ring" style={{ width: 200, height: 200, marginLeft: -100, marginTop: -100, animationDelay: '0s' }} />
            <div className="water-ripple-ring" style={{ width: isMobile ? 290 : 350, height: isMobile ? 290 : 350, marginLeft: isMobile ? -145 : -175, marginTop: isMobile ? -145 : -175, animationDelay: '1.3s' }} />
            {!isMobile && (
              <div className="water-ripple-ring" style={{ width: 500, height: 500, marginLeft: -250, marginTop: -250, animationDelay: '2.6s' }} />
            )}
          </div>

          {/* Label */}
          <motion.div
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="section-label mb-6">Begin Your Aura Journey</p>
          </motion.div>

      {/* Headline */}
      <motion.h2
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative text-4xl sm:text-6xl font-light tracking-tight leading-[1.12]"
        style={{
          color: "rgba(255,255,255,0.93)",
          textShadow: "0 2px 40px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.1)",
          letterSpacing: "-0.02em",
        }}
      >
        {/* First line — staggered word reveal on larger screens */}
        {isMobile ? (
          <span className="block">Elevate Your Water Architecture to</span>
        ) : (
          <motion.span
            className="block overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
          >
            {["Elevate", "Your", "Water", "Architecture", "to"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.28em]"
                variants={{
                  hidden: { y: "110%", opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        )}

        {/* Second line — the premium shimmer phrase */}
        <motion.span
          className="block mt-1 font-semibold"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <ShimmerText>Resort Quality.</ShimmerText>
        </motion.span>
      </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-slate-300/90 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed"
          >
            Contact our engineering desk today. Secure your preferred recurring valet sequence
            before our premium seasonal capacity limits lock.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.32 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary — aqua gradient with shimmer */}
            <a
              href="tel:1300287278"
              className="group relative overflow-hidden inline-flex items-center gap-2.5 w-full sm:w-auto px-9 py-4 rounded-xl font-bold text-[11px] tracking-[0.22em] uppercase text-[#020b14] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(0,212,240,0.45),0_10px_30px_rgba(0,0,0,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #0ba3d4 0%, #00d4f0 50%, #38bdf8 100%)',
              }}
            >
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
              <svg className="relative z-10 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="relative z-10">Call 1300 Aura</span>
            </a>

            {/* Secondary — warm stone border */}
            <a
              href="mailto:concierge@auraaquatics.com.au"
              className="inline-flex items-center gap-2.5 w-full sm:w-auto px-9 py-4 rounded-xl font-semibold text-[11px] tracking-[0.22em] uppercase text-slate-200 transition-all duration-300 hover:text-white glass-card-mid border border-[#c8a96e]/25 hover:border-[#c8a96e]/50 hover:shadow-[0_0_20px_rgba(200,169,110,0.1)]"
            >
              <svg className="w-4 h-4 text-[#c8a96e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Request Estate Audit
            </a>
          </motion.div>

          {/* Trust footnote */}
          <motion.div
            initial={{ y: 8 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.25em] text-slate-600 font-mono"
          >
            <span>No Contract</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Discretion Guaranteed</span>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Same-Day Dispatch</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
