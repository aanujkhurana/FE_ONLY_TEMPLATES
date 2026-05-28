import { motion } from 'framer-motion';

const SUBURBS = [
  'Hamilton', 'New Farm', 'Ascot', 'Bulimba',
  'Indooroopilly', 'Paddington', 'St Lucia', 'Kangaroo Point',
];

export default function ServiceAreas() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Warm stone divider line */}
      <div className="stone-divider absolute top-0 left-0 right-0" />
      <div className="stone-divider absolute bottom-0 left-0 right-0" />

      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, rgba(200,169,110,0.03) 0%, transparent 50%, rgba(0,212,240,0.03) 100%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2 text-center md:text-left shrink-0"
        >
          <p className="section-label">Elite Operations Sector</p>
          <p className="text-xl font-light text-slate-200">
            Proudly Curation-Active Across<br />
            <span className="font-semibold text-gradient-warm">Brisbane's Premium Suburbs</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="flex flex-wrap justify-center md:justify-end gap-3 max-w-xl"
        >
          {SUBURBS.map((suburb) => (
            <span
              key={suburb}
              className="inline-flex group cursor-default px-4 py-2 rounded-xl text-xs font-medium tracking-wider text-slate-300 transition-all duration-300 hover:scale-105 bg-white/[0.03] border border-white/[0.07] hover:border-[#c8a96e]/30 hover:bg-[#c8a96e]/[0.06] hover:shadow-[0_0_16px_rgba(200,169,110,0.1)]"
            >
              {suburb}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
