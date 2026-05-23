import React from 'react';
import { motion } from 'framer-motion';

const LINKS = {
  'Operational Channels': [
    { label: 'Valet Cleaning Program',    href: '#services' },
    { label: 'Chemical Kinetics Analysis', href: '#services' },
    { label: 'Smart Home Automation',      href: '#services' },
    { label: 'Membership Plans',           href: '#membership' },
  ],
  'Corporate Governance': [
    { label: 'ABN 43 928 102 391',                     href: '#' },
    { label: 'Queensland QBCC Hydraulic Certified',     href: '#' },
    { label: 'Public Indemnity Insured ($20M AUD)',     href: '#' },
  ],
  'Concierge Desk': [
    { label: 'Mon – Sat  |  7:00am – 6:00pm',         href: '#' },
    { label: 'Edward St, Brisbane City, QLD 4000',     href: '#' },
    { label: '1300 AURA POOL',                          href: 'tel:1300287278' },
    { label: 'concierge@auraaquatics.com.au',           href: 'mailto:concierge@auraaquatics.com.au' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#01060d]">

      {/* Ambient footer glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[#00d4f0]/[0.03] rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[200px] bg-[#c8a96e]/[0.03] rounded-full filter blur-[80px] pointer-events-none" />

      {/* Stone divider top */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.2), rgba(0,212,240,0.15), rgba(200,169,110,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main grid */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            {/* Logo */}
            <div>
              <p
                className="text-base font-bold tracking-[0.28em] uppercase"
                style={{
                  background: 'linear-gradient(90deg, #ffffff 0%, #e2f8ff 50%, #00d4f0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Aura Aquatics
              </p>
              <p className="text-[8px] tracking-[0.4em] uppercase text-[#c8a96e]/60 font-mono mt-1">
                The Liquid Luxury Experience
              </p>
            </div>

            <p className="text-xs text-slate-500 font-light leading-relaxed max-w-[220px]">
              Brisbane's definitive premium resort-grade pool asset cleaners and technological automation integrators.
            </p>

            {/* Social / contact icons */}
            <div className="flex gap-3 pt-2">
              {[
                { label: 'Phone', icon: (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ), href: 'tel:1300287278' },
                { label: 'Email', icon: (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ), href: 'mailto:concierge@auraaquatics.com.au' },
              ].map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-[#00d4f0] hover:border-[#00d4f0]/30 hover:bg-[#00d4f0]/[0.06] transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items], colIdx) => (
            <motion.div
              key={heading}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (colIdx + 1) * 0.08 }}
              className="space-y-4"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white font-mono">{heading}</p>
              <ul className="space-y-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[11px] text-slate-500 hover:text-slate-200 transition-colors duration-200 font-light leading-relaxed group flex items-center gap-1.5"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-[#00d4f0] to-[#c8a96e] transition-all duration-300 overflow-hidden" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p className="text-[10px] text-slate-600 font-mono">
            © 2026 Aura Aquatics Group. All Rights Reserved.
          </p>

          {/* Dual-temperature logo mark */}
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-px bg-[#00d4f0]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#00d4f0]/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#c8a96e]/60" />
            <div className="w-4 h-px bg-[#c8a96e]/40" />
          </div>

          <div className="flex gap-6 text-[10px] text-slate-600 font-mono">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Charter</span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Valet</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
