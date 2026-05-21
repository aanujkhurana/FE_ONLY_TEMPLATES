import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  { 
    q: 'What defines an Aura Aquatics service over a standard pool technician?', 
    a: (
      <div className="space-y-2">
        <p>Standard services skim the surface. Aura integrates analytical molecular water management, automated flow optimization, and meticulous architectural stone detailing to preserve your investment.</p>
        <p>If you are looking for professional pool cleaning services to clean and maintain your pool, then **Aura Aquatics** is the ultimate option as we offer elite, expert swimming pool cleaning services carried out by trained professionals who are thorough at their jobs.</p>
      </div>
    )
  },
  { 
    q: 'How fast can you rectify a completely green or neglected pool?', 
    a: (
      <p>Using our multi-phase chemical stabilization process, we routinely restore un-swimmable pools to crystal clarity within 24 to 36 hours.</p>
    )
  },
  { 
    q: 'Do you service automated home integration systems like AstralPool or Fluidra?', 
    a: (
      <p>Yes. Our senior technicians are certified automation experts capable of programing, calibrating, and optimizing smart-home pool frameworks.</p>
    )
  },
  {
    q: 'Why is professional upkeep necessary for your swimming pool?',
    a: (
      <div className="space-y-3 font-sans">
        <p>The first thought you get when you see a pool is usually, <em>“how amazing will it be to dip in the cool waters.”</em> It probably won’t even occur to you at that point how clean or unclean the water actually is.</p>
        <p>However, swimming pool cleaning is a tedious job with several associated tasks. Regardless of the season, you need to concentrate on the upkeep of the pool. Cleaning it yourself is rarely recommended, as you may not be able to perform a thorough job. If you want it done right, it is best to outsource your pool cleaning tasks to a professional cleaning company like Aura Aquatics.</p>
      </div>
    )
  },
  {
    q: 'What is the procedure of cleaning a swimming pool?',
    a: (
      <div className="space-y-3 font-sans">
        <p>A weekly maintenance routine is necessary to ensure clean and safe water throughout the season. The precise procedure of swimming pool cleaning involves the following steps:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li><strong>Skimming:</strong> Skimming off leaves and debris floating in the pool.</li>
          <li><strong>Brushing:</strong> Brushing off the sediment settled on the pool walls to prevent scaling.</li>
          <li><strong>Vacuuming:</strong> Manual or automatic vacuuming depending on the pool needs.</li>
          <li><strong>Skimmer Care:</strong> Cleaning out the skimmer baskets.</li>
          <li><strong>Circulation:</strong> Keeping the pump running to ensure proper flow.</li>
          <li><strong>Filter Backwashing:</strong> Checking the filter system and backwashing as required.</li>
          <li><strong>Kinetics:</strong> Testing the water chemistry and adding premium balancing chemicals.</li>
        </ul>
      </div>
    )
  },
  {
    q: 'What do swimming pool maintenance services mean?',
    a: (
      <div className="space-y-4 font-sans">
        <p>A swimming pool maintenance service refers to an expert who understands the complex dos and don’ts involved in pool care. It involves a group of trained professionals who perform deep cleaning, chemical balancing, structural inspections, and even safety details.</p>
        <div className="space-y-3 pl-2 border-l border-[#00f2fe]/30">
          <p><strong>1. Deep Cleaning:</strong> Outdoor pools collect leaves, pebbles, bugs, and twigs. Leaving these floaters unattended leads to clogged pipes, pumps, or filter baskets, resulting in high repair costs. Professional cleaners skim the surface first, followed by thorough vacuuming.</p>
          <p><strong>2. Chemical Balancing:</strong> Keeping your pool pH balanced between 7.4 and 7.6 is essential. A pool that is too acidic is corrosive, while one that is too alkaline causes scaling and green pool syndrome. Aura Aquatics ensures proper, non-irritant chemical distribution.</p>
          <p><strong>3. Pool Equipment Inspection:</strong> Stagnant water breeds bacteria, algae, and insects. A combination of chemical treatments and automated pump circulation keeps water fresh. We inspect pumps, intake valves, and return systems to guarantee flawless operation.</p>
        </div>
      </div>
    )
  },
  {
    q: 'What are the benefits of hiring professional swimming pool cleaning services?',
    a: (
      <div className="space-y-3 font-sans">
        <p>Having a personal pool is satisfying but adds up to a lot of tedious work. Without frequent cleaning and chemical additions, the risk of infections increases. Benefits of hiring Aura Aquatics include:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
          <li><strong>Preventing Infections:</strong> Proper chemicals and deep scrubbing prevent pathogens like <em>E. coli</em> (which causes severe diarrhea and can be fatal to young children or older adults) from spreading.</li>
          <li><strong>Precise Chemistry:</strong> We select and add the exact volume of high-purity chemicals, keeping your pool thoroughly sanitized, germ-free, and safe for skin and eyes.</li>
          <li><strong>Asset Protection:</strong> Early detection of faulty devices or structural wear saves you thousands in restoration costs.</li>
        </ul>
      </div>
    )
  },
  {
    q: 'How frequently should swimming pools be cleaned, and why is it important?',
    a: (
      <p>A professional swimming pool cleaning is highly recommended **at least once a week**. In addition to vacuuming, you should brush your pool’s walls, steps, and floors to remove dirt, and skim the water’s surface to prevent debris from clogging pipes, which results in much higher maintenance costs in the future.</p>
    )
  },
  {
    q: 'What are the signs that indicate it’s time to call in professional pool cleaners?',
    a: (
      <div className="space-y-2 font-sans">
        <p>If you observe any of the following symptoms, it is time to contact Aura Aquatics immediately:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-300">
          <li>Dirty, cloudy, or discolored water.</li>
          <li>Faulty pumps, lights, or smart valves.</li>
          <li>An overpowering smell of chlorine (indicates high chloramines).</li>
          <li>Dirty pool walls showing scaling or stubborn staining.</li>
          <li>Buzzing, grinding, or gurgling noises coming from the pump filter.</li>
          <li>A visible foam layer resting on the water.</li>
          <li>Pests or algae blooms in the pool.</li>
        </ul>
      </div>
    )
  },
  {
    q: 'How long does it take to clean a swimming pool?',
    a: (
      <p>Depending on the system and equipment used, professional cleaning takes up to **1.5 hours**. On average, homeowners spend about 45 minutes a week trying to maintain their pools, which does not include heavy tasks like equipment replacements or complex chemical kinetics balancing. Let Aura Aquatics handle the hard work so you can simply enjoy the luxury.</p>
    )
  }
];

export default function FAQSection({ activeFaq, setActiveFaq }) {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00f2fe] font-display">Inquiries Resolved</h2>
        <p className="text-2xl sm:text-4xl font-light tracking-tight">Technical Intelligence</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div 
            key={idx}
            className="border-b border-white/5 transition-all bg-white/[0.01] rounded-xl overflow-hidden text-left"
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
                  <div className="text-xs sm:text-sm text-slate-400 leading-relaxed px-6 pb-6 border-t border-white/[0.03] pt-4 bg-slate-950/30">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
