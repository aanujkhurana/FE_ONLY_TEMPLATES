import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import ProgressiveImage from "./ProgressiveImage";

/* ── Ripple ring component ────────────────────────────────────────────────── */
function RippleRing({ size, delay, className = "" }) {
  return (
    <div
      className={`water-ripple-ring ${className}`}
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

/* ── Stat badge ───────────────────────────────────────────────────────────── */
function StatBadge({ value, label }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
        {value}
      </p>
      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500 font-mono">
        {label}
      </p>
    </div>
  );
}

export default function HeroSection({ backgroundY }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves slower than scroll (cinematic depth)
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ════════════════════════════════════════════════════════════
          LAYER 1 — HERO IMAGE (parallax, full-bleed, aerial pool)
          ════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imgY }}
      >
        <ProgressiveImage
          src="/hero2-md.webp"
          srcSet="/hero2-sm.webp 600w, /hero2-md.webp 1000w, /hero2.webp 1600w"
          sizes="100vw"
          alt="Crystal clear luxury pool aerial view — Aura Aquatics"
          className="w-full h-full object-cover object-center opacity-25"
          placeholder="#0a2e4c"
          fetchPriority="high"
          eager
        />
      </motion.div>
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20 bg-[radial-gradient(#061a2c_1px,transparent_1px)] [background-size:32px_32px] -z-10"
      />

      {/* ════════════════════════════════════════════════════════════
          LAYER 2 — DARK GRADIENT OVERLAYS (cinematic colour control)
          ════════════════════════════════════════════════════════════ */}
      {/* Primary darkening — bottom-heavy so water texture still shows at top */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,11,20,0.25) 0%, rgba(2,11,20,0.55) 50%, rgba(2,11,20,0.92) 100%)",
        }}
      />

      {/* Warm stone vignette left — mirrors the poolside tile in the image */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 0% 100%, rgba(200,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Cold aqua vignette right — mirrors the deep water in the image */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 100% 0%, rgba(0,212,240,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Subtle noise grain for cinematic texture */}
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* ════════════════════════════════════════════════════════════
          LAYER 3 — WATER RIPPLE RINGS (visual echo of image ripples)
          The hero image has concentric ripple arcs — we mirror those
          on the left side of the page as immersive ambient art.
          ════════════════════════════════════════════════════════════ */}
      <div
        className="absolute bottom-0 left-0 z-20 pointer-events-none"
        style={{ transform: "translate(-30%, 30%)" }}
      >
        <div className="relative" style={{ width: 0, height: 0 }}>
          <RippleRing size={300} delay={0} />
          <RippleRing size={500} delay={1.3} />
          <RippleRing size={700} delay={2.6} />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          LAYER 4 — CONTENT
          ════════════════════════════════════════════════════════════ */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-6 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end min-h-screen">
        {/* LEFT — HERO TEXT COLUMN */}
        <div className="lg:col-span-7 space-y-7 self-end pb-16">
          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#c8a96e]/30 bg-[#c8a96e]/[0.08] backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8a96e] animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[#c8a96e] font-mono">
              Brisbane Premium Pool Management
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl lg:text-[80px] font-light tracking-tight leading-[1.04] text-shadow"
          >
            Your Pool. <br />
            <span className="relative inline-block font-semibold">
              <span
                className="animate-text-shine bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #a8efff, #e0f7ff, #fff, #cffafe, #a8efff)",
                  backgroundSize: "200% auto",
                }}
              >
                Crystal Clear.
              </span>
              {/* Sparkle (CSS animation — GPU composited) */}
              <span className="absolute -right-7 -top-3 text-[#00d4f0] sparkle-aqua">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              </span>
              {/* Stone sparkle (CSS animation — GPU composited) */}
              <span className="absolute -left-6 bottom-1 text-[#c8a96e] sparkle-stone">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              </span>
            </span>{" "}
            <br />
            Resort Ready.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-slate-300/90 max-w-[520px] leading-relaxed font-light"
          >
            Bespoke pool valet cleaning and automated balancing engineered for
            discerning Brisbane homeowners who expect{" "}
            <em className="text-white not-italic font-normal">
              structural and aesthetic perfection.
            </em>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#membership"
              className="group relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-[11px] tracking-[0.22em] uppercase text-[#020b14] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,240,0.4)] hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg, #0ba3d4 0%, #00d4f0 50%, #38bdf8 100%)",
              }}
            >
              {/* shimmer sweep */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              <span className="relative z-10">Explore Maintenance Plans</span>
              <svg
                className="relative z-10 w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            {/* Secondary — warm stone border */}
            <a
              href="mailto:concierge@auraaquatics.com.au"
              className="inline-flex items-center gap-2.5 w-full sm:w-auto px-9 py-4 rounded-xl font-semibold text-[11px] tracking-[0.22em] uppercase text-slate-200 transition-all duration-300 hover:text-white glass-card-mid"
              style={{ border: "1px solid rgba(200,169,110,0.25)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(200,169,110,0.5)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(200,169,110,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(200,169,110,0.25)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Instant Consultation
            </a>
          </motion.div>
          

          {/* Trust stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65 }}
            className="pt-6 grid grid-cols-3 gap-6 max-w-fit border-t border-white/10"
          >
            <StatBadge value="5.0 ★" label="Google Verified" />
            <StatBadge value="100%" label="Carbon Neutral" />
            <StatBadge value="Same Day" label="Emergency Dispatch" />
          </motion.div>
        </div>

        {/* RIGHT — FLOATING GLASS DASHBOARD CARD */}
        <div className="lg:col-span-5 relative self-end pb-16 flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[360px]"
          >
            {/* Glow halo */}
            <div className="absolute -inset-6 rounded-[36px] bg-[#00d4f0]/8 filter blur-[40px]" />

            {/* Card shell */}
            <div
              className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)]"
              style={{
                background: "rgba(4, 15, 28, 0.82)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Scan line */}
              <div className="scan-line" />

              {/* Card header — pool preview thumbnail using the hero image itself */}
              <div className="relative h-40 overflow-hidden">
                <ProgressiveImage
                  src="/afterImage2-md.webp"
                  srcSet="/afterImage2-sm.webp 600w, /afterImage2-md.webp 1000w, /afterImage2.webp 1600w"
                  sizes="(max-width: 1024px) 50vw, 360px"
                  alt="Live pool status"
                  className="w-full h-full scale-110"
                  imgClassName="object-top"
                  placeholder="#0a3d6b"
                />
                {/* Dark glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#040f1c]/30 to-[#040f1c]" />
                {/* Status chip */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 border border-[#34d399]/30 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                  <span className="text-[9px] font-mono tracking-[0.25em] text-[#34d399] uppercase">
                    Live Monitoring
                  </span>
                </div>
                {/* Title overlay */}
                <div className="absolute bottom-3 left-4">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#00d4f0] font-mono">
                    Hydro-Intelligence Dashboard
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 space-y-3">
                {/* Metrics */}
                {[
                  {
                    label: "ORP Saturation",
                    value: "740mV",
                    status: "Optimal",
                    color: "#34d399",
                  },
                  {
                    label: "pH Equilibrium",
                    value: "7.42",
                    status: "Standard",
                    color: "#e2e8f0",
                  },
                  {
                    label: "LSI Saturation Index",
                    value: "+0.02",
                    status: "Ideal",
                    color: "#00d4f0",
                  },
                  {
                    label: "Free Chlorine",
                    value: "3.1ppm",
                    status: "Perfect",
                    color: "#c8a96e",
                  },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="flex justify-between items-center py-2.5 border-b border-white/[0.05]"
                  >
                    <span className="text-[11px] text-slate-400 tracking-wide">
                      {m.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[11px] font-mono font-medium"
                        style={{ color: m.color }}
                      >
                        {m.value}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-slate-600">
                        [{m.status}]
                      </span>
                    </div>
                  </div>
                ))}

                {/* Footer row */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.28em] text-slate-500 font-mono">
                    System Status
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#34d399]" />
                    <span className="text-[9px] uppercase tracking-wider text-[#34d399] font-mono">
                      Sovereign
                    </span>
                  </div>
                </div>
              </div>

              {/* Caustic shimmer layer */}
              <div className="absolute inset-0 caustic-overlay pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL HINT ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.35em] text-slate-500 font-mono">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#00d4f0]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
