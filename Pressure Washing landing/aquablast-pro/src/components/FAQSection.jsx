import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  { q: 'What defines an Aura Aquatics service over a standard pool technician?', a: 'Standard services skim the surface. Aura integrates analytical molecular water management, automated flow optimization, and meticulous architectural stone detailing to preserve your investment.' },
  { q: 'How fast can you rectify a completely green or neglected pool?', a: 'Using our multi-phase chemical stabilization process, we routinely restore un-swimmable pools to crystal clarity within 24 to 36 hours.' },
  { q: 'Do you service automated home integration systems like AstralPool or Fluidra?', a: 'Yes. Our senior technicians are certified automation experts capable of programing, calibrating, and optimizing smart-home pool frameworks.' }
];

export default function FAQSection({ activeFaq, setActiveFaq }) {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00f2fe]">Inquiries Resolved</h2>
        <p className="text-2xl sm:text-4xl font-light tracking-tight">Technical Intelligence</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div 
            key={idx}
            className="border-b border-white/5 transition-all bg-white/[0.01] rounded-xl overflow-hidden"
          >
            <button 
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              className="w-full text-left py-6 px-6 flex justify-between items-center group"
            >
              <span className="font-medium text-sm sm:text-base text-slate-200 group-hover:text-white transition-colors">{faq.q}</span>
              <span className="text-lg text-[#00f2fe] ml-4 transition-transform duration-300" style={{ transform: activeFaq === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
            </button>
            <AnimatePresence>
              {activeFaq === idx && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed px-6 pb-6 border-t border-white/[0.03] pt-4 bg-slate-950/30">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
