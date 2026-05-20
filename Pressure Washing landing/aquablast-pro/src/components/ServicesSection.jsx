import React from 'react';
import { motion } from 'framer-motion';

const SERVICES = [
  { id: 'clean', title: 'Architectural Valet Cleaning', desc: 'Precision skimming, vacuuming, and surface polishing tailored to high-end masonry finishes.', price: 'From $149/fortnight' },
  { id: 'chem', title: 'Molecular Chemical Balancing', desc: 'Advanced laboratory-grade water analysis ensuring perfect pH, safety, and an cloud-free shine.', price: 'From $89/service' },
  { id: 'green', title: 'Green Pool Genesis Restoration', desc: 'Hyper-shock biological treatments converting stagnant eco-systems back to mirror-glass state within 24 hours.', price: 'Bespoke Quote' },
  { id: 'filter', title: 'Media & Cartridge Regeneration', desc: 'Deep-clean restoration or swap-outs of glass media, sand, and high-micron cartridges.', price: 'From $199' },
  { id: 'inspect', title: 'Pre-Purchase Thermal Inspections', desc: 'Comprehensive hydraulic pressure testing and structural leak assessments with digital logging.', price: '$299 Fixed' },
  { id: 'equip', title: 'Smart Automation Integration', desc: 'Upgrade and tune fluid pumps, variable speed chlorinators, and smartphone app linkages.', price: 'Custom Design' },
  { id: 'robot', title: 'Robotic Drone Diagnostic Service', desc: 'Expert calibration, track replacement, and component overhauls for premium cleaners.', price: 'From $120' },
  { id: 'elite', title: 'The Infinite Care Program', desc: 'Complete autonomous hands-off estate management. Weekly absolute perfection packages.', price: 'On Request' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14
    }
  }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-transparent via-[#03111f] to-transparent px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00f2fe]">Precision Engineering</h2>
            <p className="text-3xl sm:text-5xl font-light tracking-tight">Our Curated Suite of Clean</p>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed font-sans">
            Every package is precision-handled by experienced water technicians utilising commercial equipment and calibrated diagnostic analytics.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((srv) => (
            <motion.div 
              key={srv.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-between h-[320px] transition-all duration-300 hover:bg-white/[0.04] hover:border-[#00f2fe]/20 cursor-pointer"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00f2fe]/0 via-transparent to-[#00f2fe]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#00f2fe] group-hover:bg-[#00f2fe]/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="font-semibold text-lg tracking-wide group-hover:text-[#00f2fe] transition-colors">{srv.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light font-sans">{srv.desc}</p>
              </div>
              <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] tracking-widest uppercase text-slate-500 font-display">Investment</span>
                <span className="text-xs font-semibold text-slate-300 group-hover:text-white font-sans">{srv.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
