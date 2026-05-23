import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    q: 'What defines an Aura Aquatics service over a standard pool technician?',
    a: (
      <div className="space-y-2">
        <p>Standard services skim the surface. Aura integrates analytical molecular water management, automated flow optimization, and meticulous architectural stone detailing to preserve your investment.</p>
        <p>If you are looking for professional pool cleaning services to clean and maintain your pool, then Aura Aquatics is the ultimate option — elite, expert swimming pool cleaning services carried out by trained professionals who are thorough at their jobs.</p>
      </div>
    ),
  },
  {
    q: 'How fast can you rectify a completely green or neglected pool?',
    a: <p>Using our multi-phase chemical stabilization process, we routinely restore un-swimmable pools to crystal clarity within 24 to 36 hours.</p>,
  },
  {
    q: 'Do you service automated home integration systems like AstralPool or Fluidra?',
    a: <p>Yes. Our senior technicians are certified automation experts capable of programming, calibrating, and optimizing smart-home pool frameworks.</p>,
  },
  {
    q: 'Why is professional upkeep necessary for your swimming pool?',
    a: (
      <div className="space-y-2">
        <p>Swimming pool cleaning is a tedious job with several associated tasks. Regardless of the season, you need to concentrate on the upkeep of the pool. Cleaning it yourself is rarely recommended, as you may not be able to perform a thorough job. If you want it done right, it is best to outsource your pool cleaning tasks to a professional cleaning company like Aura Aquatics.</p>
      </div>
    ),
  },
  {
    q: 'What is the procedure of cleaning a swimming pool?',
    a: (
      <div className="space-y-3">
        <p>A weekly maintenance routine is necessary to ensure clean and safe water throughout the season. The precise procedure involves:</p>
        <ul className="space-y-1.5 text-slate-400">
          {['Skimming: Removing leaves and debris floating in the pool.', 'Brushing: Clearing sediment from pool walls to prevent scaling.', 'Vacuuming: Manual or automatic vacuuming depending on pool needs.', 'Skimmer Care: Cleaning out the skimmer baskets.', 'Circulation: Keeping the pump running to ensure proper flow.', 'Filter Backwashing: Checking the filter system and backwashing as required.', 'Kinetics: Testing water chemistry and adding premium balancing chemicals.'].map((item) => (
            <li key={item} className="flex gap-2 text-xs">
              <span className="text-[#00d4f0] shrink-0 mt-0.5">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    q: 'What are the benefits of hiring professional swimming pool cleaning services?',
    a: (
      <div className="space-y-2">
        <p>Having a personal pool is satisfying but adds up to a lot of tedious work. Without frequent cleaning and chemical additions, the risk of infections increases. Benefits of hiring Aura Aquatics include:</p>
        <ul className="space-y-1.5 text-slate-400">
          {['Preventing Infections: Proper chemicals and deep scrubbing prevent pathogens like E. coli from spreading.', 'Precise Chemistry: We select the exact volume of high-purity chemicals, keeping your pool sanitized and safe for skin and eyes.', 'Asset Protection: Early detection of faulty devices or structural wear saves thousands in restoration costs.'].map((item) => (
            <li key={item} className="flex gap-2 text-xs">
              <span className="text-[#c8a96e] shrink-0 mt-0.5">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    q: 'How frequently should swimming pools be cleaned?',
    a: <p>A professional swimming pool cleaning is highly recommended at least once a week. In addition to vacuuming, you should brush your pool's walls, steps, and floors to remove dirt, and skim the water's surface to prevent debris from clogging pipes.</p>,
  },
  {
    q: 'What are the signs that indicate it\'s time to call in professional pool cleaners?',
    a: (
      <div className="space-y-2">
        <p>If you observe any of the following symptoms, contact Aura Aquatics immediately:</p>
        <ul className="space-y-1 text-slate-400">
          {['Dirty, cloudy, or discolored water.', 'Faulty pumps, lights, or smart valves.', 'An overpowering smell of chlorine (indicates high chloramines).', 'Dirty pool walls showing scaling or stubborn staining.', 'Buzzing, grinding, or gurgling noises from the pump filter.', 'A visible foam layer on the water.', 'Pests or algae blooms in the pool.'].map((item) => (
            <li key={item} className="flex gap-2 text-xs">
              <span className="text-[#00d4f0] shrink-0 mt-0.5">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    q: 'How long does it take to clean a swimming pool?',
    a: <p>Depending on the system and equipment used, professional cleaning takes up to 1.5 hours. On average, homeowners spend about 45 minutes a week trying to maintain their pools — which does not include heavy tasks like equipment replacements or complex chemical balancing. Let Aura Aquatics handle the hard work so you simply enjoy the luxury.</p>,
  },
];

export default function FAQSection({ activeFaq, setActiveFaq }) {
  return (
    <section className="py-32 px-6 relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full filter blur-[150px] opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(0,212,240,0.05) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full filter blur-[120px] opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center space-y-4 mb-16"
        >
          <p className="section-label">Inquiries Resolved</p>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
            Technical{' '}
            <span className="font-semibold text-gradient-aqua">Intelligence</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            // Alternate accent colours: even = aqua, odd = stone
            const accent = idx % 2 === 0 ? '#00d4f0' : '#c8a96e';

            return (
              <motion.div
                key={idx}
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.04 }}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? 'rgba(255,255,255,0.035)' : 'rgba(255,255,255,0.02)',
                  border: isOpen ? `1px solid ${accent}25` : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: isOpen ? `0 0 30px ${accent}10` : 'none',
                }}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left py-5 px-6 flex justify-between items-center gap-4 group"
                >
                  <span className="font-medium text-sm sm:text-base text-slate-200 group-hover:text-white transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300"
                    style={{
                      borderColor: isOpen ? `${accent}50` : 'rgba(255,255,255,0.1)',
                      background: isOpen ? `${accent}15` : 'transparent',
                      color: isOpen ? accent : '#64748b',
                    }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      {/* Warm divider line */}
                      <div
                        className="mx-6 h-px mb-4"
                        style={{ background: `linear-gradient(90deg, transparent, ${accent}30, transparent)` }}
                      />
                      <div className="text-xs sm:text-sm text-slate-400 leading-relaxed px-6 pb-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
