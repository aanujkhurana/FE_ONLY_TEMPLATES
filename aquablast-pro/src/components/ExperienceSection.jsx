import { motion } from 'framer-motion';
import ProgressiveImage from './ProgressiveImage';

const FEATURES = [
  {
    title: 'Predictive Diagnostic Delivery',
    desc: 'We track water metric changes dynamically, neutralizing problems before your water loses a fraction of its polish.',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Zero Chemical Residual Footprint',
    desc: 'Our signature balancing methodologies completely guarantee zero skin irritation, strong synthetic odors, or aggressive chemical spikes.',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Architectural Presentation Ethics',
    desc: 'Every technician arrives uniform-curated and respects the privacy, gates, and aesthetic standards of premium Queensland residences.',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

export default function ExperienceSection() {
  return (
    <section id="curation" className="py-32 px-6 relative overflow-hidden">

      {/* Warm stone glow — the key differentiator from the hero image's poolside tiles */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c8a96e]/[0.05] rounded-full filter blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[600px] bg-[#00d4f0]/[0.04] rounded-full filter blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Text content */}
          <motion.div
            initial={{ x: -30 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="section-label">The Lifestyle Paradigm</p>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight">
                Effortless Pool Ownership.{' '}
                <span className="font-semibold text-gradient-warm">Absolute Serenity.</span>
              </h2>
              <p className="text-slate-400 font-light leading-relaxed text-sm sm:text-base">
                We understand your pool is not merely structural infrastructure; it is an extension of
                your home's architectural intent and a theatre for familial memories. Aura ensures you
                never touch a chemical drum or scrub a pool wall again.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-5">
              {FEATURES.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="flex gap-4 p-4 rounded-xl group hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#c8a96e]/10 border border-[#c8a96e]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#c8a96e] group-hover:bg-[#c8a96e]/15 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white tracking-wide">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA inline */}
            <a
              href="#membership"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c8a96e] hover:text-white transition-colors group"
            >
              View Membership Tiers
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* RIGHT — Hero image as lifestyle visual with glass testimonial */}
          <motion.div
            initial={{ x: 30, scale: 0.97 }}
            whileInView={{ x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-[36px] bg-[#c8a96e]/[0.06] filter blur-[30px]" />

            {/* Image panel */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
              <ProgressiveImage
                src="/hero-md.webp"
                srcSet="/hero-sm.webp 600w, /hero-md.webp 1000w, /hero.webp 1600w"
                sizes="(max-width: 1024px) 100vw, 50vw"
                alt="Luxury pool lifestyle — Aura Aquatics Brisbane"
                className="w-full h-full"
                imgClassName="object-center"
                placeholder="#0d2840"
              />

              {/* Gradient veil — bottom fade to dark for testimonial readability */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(2,11,20,0.1) 0%, rgba(2,11,20,0.75) 100%)',
                }}
              />

              {/* Warm tint — mirrors the sandy tiles on the right side of the hero image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 100% 100%, rgba(200,169,110,0.1) 0%, transparent 70%)',
                }}
              />

              {/* Floating stat chips — top right */}
                <div className="absolute top-5 right-5 flex flex-col gap-2">
                <div className="px-3 py-2 rounded-xl bg-black/50 border border-[#34d399]/25 backdrop-blur-sm">
                  <p className="text-[8px] font-mono uppercase tracking-[0.25em] text-[#34d399]">Water Quality</p>
                  <p className="text-sm font-bold text-white">Pristine</p>
                </div>
                <div className="px-3 py-2 rounded-xl bg-black/50 border border-[#c8a96e]/25 backdrop-blur-sm">
                  <p className="text-[8px] font-mono uppercase tracking-[0.25em] text-[#c8a96e]">Last Service</p>
                  <p className="text-sm font-bold text-white">Today</p>
                </div>
              </div>

              {/* Testimonial glass card — bottom */}
              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md">
                <p className="text-sm italic font-serif text-slate-200 leading-relaxed">
                  "The absolute peace of mind knowing my pool is completely ready for a client lunch or
                  family weekend at any given moment is unmatched."
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#c8a96e] font-mono font-semibold">
                    — Estate Owner, Hamilton
                  </p>
                  {/* 5 star */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-[#c8a96e]" viewBox="0 0 24 24">
                        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
