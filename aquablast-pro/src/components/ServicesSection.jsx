import React from 'react';
import { motion } from 'framer-motion';

/* ── Unique SVG icons per service ─────────────────────────────────────────── */
const ICONS = {
  clean: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  chem: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  green: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
    </svg>
  ),
  filter: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
    </svg>
  ),
  inspect: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
    </svg>
  ),
  equip: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" />
    </svg>
  ),
  robot: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  ),
  elite: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
};

const SERVICES = [
  { id: 'clean',   title: 'Architectural Valet Cleaning',    desc: 'Precision skimming, vacuuming, and surface polishing tailored to high-end masonry finishes.',                            price: 'From $149/fortnight', accent: 'aqua'  },
  { id: 'chem',   title: 'Molecular Chemical Balancing',     desc: 'Advanced laboratory-grade water analysis ensuring perfect pH, safety, and cloud-free shine.',                           price: 'From $89/service',    accent: 'stone' },
  { id: 'green',  title: 'Green Pool Genesis Restoration',   desc: 'Hyper-shock biological treatments converting stagnant eco-systems back to mirror-glass state within 24 hours.',         price: 'Bespoke Quote',       accent: 'aqua'  },
  { id: 'filter', title: 'Media & Cartridge Regeneration',   desc: 'Deep-clean restoration or swap-outs of glass media, sand, and high-micron cartridges.',                                price: 'From $199',           accent: 'stone' },
  { id: 'inspect',title: 'Pre-Purchase Thermal Inspections', desc: 'Comprehensive hydraulic pressure testing and structural leak assessments with digital logging.',                         price: '$299 Fixed',          accent: 'aqua'  },
  { id: 'equip',  title: 'Smart Automation Integration',     desc: 'Upgrade and tune fluid pumps, variable speed chlorinators, and smartphone app linkages.',                               price: 'Custom Design',       accent: 'stone' },
  { id: 'robot',  title: 'Robotic Drone Diagnostic Service', desc: 'Expert calibration, track replacement, and component overhauls for premium cleaners.',                                  price: 'From $120',           accent: 'aqua'  },
  { id: 'elite',  title: 'The Infinite Care Program',        desc: 'Complete autonomous hands-off estate management. Weekly absolute perfection packages.',                                 price: 'On Request',          accent: 'stone' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 40 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">

      {/* Stone divider top */}
      <div className="stone-divider mt-0 absolute top-0 left-0 right-0" />

      {/* Section ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(3,17,31,0.6) 50%, transparent 100%)',
        }}
      />
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#c8a96e]/[0.04] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20"
        >
          <div className="space-y-4">
            <p className="section-label">Precision Engineering</p>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
              Our Curated Suite{' '}
              <span className="font-semibold text-gradient-mixed">of Clean</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
            Every package is precision-handled by experienced water technicians utilising
            commercial equipment and calibrated diagnostic analytics.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SERVICES.map((srv) => {
            const isAqua = srv.accent === 'aqua';
            const accentColor = isAqua ? '#00d4f0' : '#c8a96e';
            const accentBg    = isAqua ? 'rgba(0,212,240,0.08)' : 'rgba(200,169,110,0.08)';
            const accentGlow  = isAqua
              ? 'rgba(0,212,240,0.12)'
              : 'rgba(200,169,110,0.1)';

            return (
              <motion.div
                key={srv.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative rounded-2xl p-7 flex flex-col justify-between h-[300px] cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  '--icon-hover-bg': accentBg,
                  '--icon-hover-color': accentColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = `1px solid ${accentColor}30`;
                  e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${accentGlow}`;
                  e.currentTarget.style.background = 'rgba(255,255,255,0.035)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                {/* Corner glow on hover */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${accentColor}15, transparent 70%)` }}
                />

                <div className="space-y-4">
                  {/* Icon (CSS group-hover driven — no JS event listeners) */}
                  <div
                    className="service-card-icon w-10 h-10 rounded-xl flex items-center justify-center"
                  >
                    {ICONS[srv.id]}
                  </div>

                  <h3 className="font-semibold text-base leading-snug tracking-wide text-slate-200 group-hover:text-white transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-light">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.05] flex justify-between items-center">
                  <span className="text-[9px] tracking-[0.28em] uppercase text-slate-600 font-mono">Investment</span>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors font-mono">
                    {srv.price}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Stone divider bottom */}
      <div className="stone-divider mt-0 absolute bottom-0 left-0 right-0" />
    </section>
  );
}
