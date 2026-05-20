import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// --- LUXURY STATIC DATA ---
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

const SUBURBS = ['Hamilton', 'New Farm', 'Ascot', 'Bulimba', 'Indooroopilly', 'Paddington', 'St Lucia', 'Kangaroo Point'];

const PLANS = [
  { name: 'The Azure Tier', price: '$149', cycle: 'fortnightly', features: ['Bi-weekly 24-point Valet Clean', 'Premium Chemical Equalisation', 'Basic Basket & Debris Evacuation', 'Digital Diagnostics Report'] },
  { name: 'The Aura Estate Club', price: '$289', cycle: 'monthly', features: ['All Azure Tier Features', 'Priority Same-Day Rapid Dispatch', 'Filter Media Chemical Wash', 'O-Ring & Seal Lubrication', 'Free Robotic Loaner Unit'], premium: true },
  { name: 'The Sanctuary Absolute', price: '$550', cycle: 'monthly', features: ['Weekly Hyper-Valet Clean', 'Unlimited Emergency Callouts', 'Zero-Cost Remedial Chemicals', 'Complete Automation Monitoring', 'Annual Equipment Overhaul'] },
];

const FAQS = [
  { q: 'What defines an Aura Aquatics service over a standard pool technician?', a: 'Standard services skim the surface. Aura integrates analytical molecular water management, automated flow optimization, and meticulous architectural stone detailing to preserve your investment.' },
  { q: 'How fast can you rectify a completely green or neglected pool?', a: 'Using our multi-phase chemical stabilization process, we routinely restore un-swimmable pools to crystal clarity within 24 to 36 hours.' },
  { q: 'Do you service automated home integration systems like AstralPool or Fluidra?', a: 'Yes. Our senior technicians are certified automation experts capable of programing, calibrating, and optimizing smart-home pool frameworks.' }
];

// --- MAIN ARCHITECTURE COMPONENT ---
export default function App() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeFaq, setActiveFaq] = useState(null);
  const beforeAfterRef = useRef(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  const handleSliderMove = (clientX) => {
    if (!beforeAfterRef.current) return;
    const rect = beforeAfterRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div className="bg-[#020b14] text-white font-sans antialiased selection:bg-[#00f2fe]/30 overflow-x-hidden">
      
      {/* BACKGROUND REFRACTION GLOWS */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00f2fe]/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-[1200px] right-1/4 w-[800px] h-[800px] bg-[#4facfe]/5 rounded-full filter blur-[180px] pointer-events-none" />

      {/* STICKY LUXURY NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020b14]/40 backdrop-blur-xl border-b border-white/5 tracking-wide transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-between items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.3em] bg-gradient-to-r from-white via-slate-200 to-[#00f2fe] bg-clip-text text-transparent uppercase">Aura Aquatics</span>
            <span className="text-[9px] tracking-[0.4em] uppercase text-slate-400">The Liquid Luxury Experience</span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-medium tracking-widest uppercase text-slate-300">
            <a href="#transformation" className="hover:text-[#00f2fe] transition-colors">The Transformation</a>
            <a href="#services" className="hover:text-[#00f2fe] transition-colors">Bespoke Services</a>
            <a href="#curation" className="hover:text-[#00f2fe] transition-colors">The Experience</a>
            <a href="#membership" className="hover:text-[#00f2fe] transition-colors">Memberships</a>
          </div>
          <div>
            <a href="tel:1300287278" className="relative group overflow-hidden inline-block px-6 py-3 border border-[#00f2fe]/30 rounded-full bg-[#00f2fe]/5 transition-all">
              <span className="relative z-10 text-xs font-semibold tracking-widest uppercase text-[#00f2fe] group-hover:text-white transition-colors">1300 AURA POOL</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
            </a>
          </div>
        </div>
      </nav>

      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-20 bg-[radial-gradient(#061a2c_1px,transparent_1px)] [background-size:32px_32px] -z-10" />
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 py-12">
          
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#00f2fe] animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">Brisbane Premium Pool Management</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-tight"
            >
              Your Pool. <br />
              <span className="font-semibold bg-gradient-to-r from-white via-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">Crystal Clear.</span> <br />
              Resort Ready.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Bespoke pool valet cleaning and automated balancing engineered for discerning Brisbane homeowners who expect structural and aesthetic perfection.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="#membership" className="w-full sm:w-auto text-center px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-slate-900 font-semibold rounded-xl text-sm tracking-widest uppercase hover:shadow-[0_0_40px_rgba(0,242,254,0.4)] transition-all transform hover:-translate-y-0.5">
                Explore Maintenance Plans
              </a>
              <a href="tel:1300287278" className="w-full sm:w-auto text-center px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 font-semibold rounded-xl text-sm tracking-widest uppercase transition-all backdrop-blur-md">
                Instant Consultation
              </a>
            </motion.div>

            {/* TRUST BADGES */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 border-t border-white/5"
            >
              <div>
                <p className="text-2xl font-bold text-white">5.0 ★</p>
                <p className="text-[11px] uppercase tracking-wider text-slate-400">Google Verified Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-slate-400">Carbon Neutral Chemists</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Same Day</p>
                <p className="text-[11px] uppercase tracking-wider text-slate-400">Emergency Dispatch</p>
              </div>
            </motion.div>
          </div>

          {/* VISUAL GLASS CARD REFLECTION ELEMENT */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl bg-gradient-to-b from-white/10 to-white/0 p-px border border-white/20 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#061a2c] via-[#020b14] to-[#0a2e4c] z-0" />
              {/* Fake Pool Visual Layer */}
              <div className="absolute inset-4 rounded-2xl overflow-hidden bg-[#031322] flex flex-col justify-between p-6 z-10 border border-white/5">
                <div className="w-full h-40 rounded-xl relative overflow-hidden bg-gradient-to-br from-[#00f2fe]/20 to-transparent flex items-center justify-center border border-[#00f2fe]/20">
                  <div className="absolute inset-0 opacity-40 bg-[linear-gradient(45deg,#00f2fe_1px,transparent_1px)] [background-size:16px_16px]" />
                  <span className="text-xs uppercase tracking-[0.3em] text-[#00f2fe]">Hydro-intelligence Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs tracking-wider border-b border-white/5 pb-2">
                    <span className="text-slate-400">ORP Saturation</span>
                    <span className="text-[#43e97b] font-mono">740mV [Optimal]</span>
                  </div>
                  <div className="flex justify-between items-center text-xs tracking-wider border-b border-white/5 pb-2">
                    <span className="text-slate-400">pH Equilibrium</span>
                    <span className="text-white font-mono">7.42 Standard</span>
                  </div>
                  <div className="flex justify-between items-center text-xs tracking-wider">
                    <span className="text-slate-400">LSI Saturation Index</span>
                    <span className="text-[#00f2fe] font-mono">+0.02 Ideal</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] tracking-widest text-slate-400 uppercase">System Status: Sovereign</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#43e97b]" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. ADDICTIVE VISUAL TRANSFORMATION SECTION */}
      <section id="transformation" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00f2fe]">The Aura Standard</h2>
          <p className="text-3xl sm:text-5xl font-light tracking-tight">Witness Absolute Visual Transformation</p>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">Drag or hover across the viewport to experience our proprietary organic restoration cycle.</p>
        </div>

        <div 
          ref={beforeAfterRef}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 cursor-ew-resize select-none shadow-2xl"
          onMouseMove={(e) => handleSliderMove(e.clientX)}
          onTouchMove={(e) => handleSliderMove(e.touches[0].clientX)}
        >
          {/* BEFORE IMAGE (Dirty Eco-System Pool) */}
          <div className="absolute inset-0 bg-[#0c1a12] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/40 to-black/80 z-10" />
            <div className="text-center z-20 space-y-2 opacity-60">
              <p className="font-serif italic text-3xl text-emerald-700">Neglected Stagnation</p>
              <p className="text-xs uppercase tracking-widest text-slate-500">Typical Outdated Competitor Treatment</p>
            </div>
          </div>

          {/* AFTER IMAGE (Crystal Clear Liquid Luxury - Clipped) */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#06243c] to-[#020b14] flex items-center justify-center transition-all duration-75"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,242,254,0.15),transparent)] pointer-events-none" />
            <div className="text-center z-20 space-y-2 w-full max-w-xl">
              <p className="font-display uppercase tracking-[0.2em] text-4xl text-white font-bold text-shadow">Aura Illumination</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#00f2fe]">Pure, Balanced, Architectural Water</p>
            </div>
          </div>

          {/* SLIDER BAR HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-[#00f2fe] z-30 shadow-[0_0_10px_#00f2fe]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-[#00f2fe] flex items-center justify-between px-2 shadow-2xl">
              <span className="text-[9px] text-[#00f2fe]">◀</span>
              <span className="text-[9px] text-[#00f2fe]">▶</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PREMIUM SERVICES SECTION */}
      <section id="services" className="py-32 bg-gradient-to-b from-transparent via-[#03111f] to-transparent px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
            <div className="space-y-4">
              <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00f2fe]">Precision Engineering</h2>
              <p className="text-3xl sm:text-5xl font-light tracking-tight">Our Curated Suite of Clean</p>
            </div>
            <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
              Every package is precision-handled by experienced water technicians utilising commercial equipment and calibrated diagnostic analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv, idx) => (
              <motion.div 
                key={srv.id}
                whileHover={{ y: -6, md: { scale: 1.02 } }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-8 flex flex-col justify-between h-[320px] transition-all hover:bg-white/[0.04] hover:border-[#00f2fe]/20"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00f2fe]/0 via-transparent to-[#00f2fe]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-[#00f2fe] group-hover:bg-[#00f2fe]/10 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <h3 className="font-semibold text-lg tracking-wide group-hover:text-[#00f2fe] transition-colors">{srv.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{srv.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] tracking-widest uppercase text-slate-500">Investment</span>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white">{srv.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMMERSIVE EXPERIENCE SECTION */}
      <section id="curation" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00f2fe]">The Lifestyle Paradigm</h2>
            <p className="text-3xl sm:text-5xl font-light tracking-tight leading-tight">Effortless Pool Ownership. Absolute Serenity.</p>
            <p className="text-slate-400 font-light leading-relaxed">
              We understand your pool is not merely structural infrastructure; it is an extension of your home’s architectural intent and a theater for familial memories. Aura ensures you never touch a chemical drum or scrub a pool wall again.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Predictive Diagnostic Delivery', d: 'We track water metric changes dynamically, neutralizing problems before your water loses a fraction of its polish.' },
                { title: 'Zero Chemical Residual Footprint', d: 'Our signature balancing methodologies completely guarantee zero skin irritation, strong synthetic odors, or aggressive chemical spikes.' },
                { title: 'Architectural Presentation Ethics', d: 'Every technician arrives uniform-curated and respects the privacy, gates, and aesthetic standards of premium Queensland residences.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#00f2fe]/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm tracking-wide text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-gradient-to-tr from-sky-900/20 to-teal-900/10 rounded-3xl border border-white/10 p-2 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <div className="absolute bottom-8 left-8 right-8 z-20 bg-slate-950/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <p className="text-sm italic font-serif text-slate-200">"The absolute peace of mind knowing my pool is completely ready for a client lunch or family weekend at any given split-second is unmatched."</p>
              <p className="text-[10px] uppercase tracking-widest text-[#00f2fe] mt-3 font-semibold">— Estate Owner, Hamilton</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE AREAS SECTOR */}
      <section className="py-24 border-y border-white/5 bg-[#030e18]/40 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00f2fe]">Elite Operations Sector</h3>
            <p className="text-xl font-light text-slate-300">Proudly Curation-Active Across Brisbane’s Premium Suburbs</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 max-w-2xl">
            {SUBURBS.map((suburb) => (
              <span key={suburb} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300 font-medium hover:border-[#00f2fe]/30 hover:text-white transition-all cursor-default">
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SAAS-STYLE MAINTENANCE PLANS */}
      <section id="membership" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00f2fe]">Predictable Perfection</h2>
          <p className="text-3xl sm:text-5xl font-light tracking-tight">Structured Maintenance Membership</p>
          <p className="text-slate-400 max-w-xl mx-auto text-sm">Select an architectural management package calibrated explicitly to your lifestyle demands.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, idx) => (
            <div 
              key={plan.name}
              className={`relative rounded-3xl bg-white/[0.02] border ${plan.premium ? 'border-[#00f2fe]/40 shadow-[0_0_50px_rgba(0,242,254,0.1)]' : 'border-white/5'} p-8 flex flex-col justify-between transition-all hover:border-white/10`}
            >
              {plan.premium && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-slate-900 text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">
                  Most Requested Estate Tier
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold tracking-wide text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-white">{plan.price}</span>
                    <span className="ml-2 text-xs text-slate-400 uppercase tracking-wider">/ {plan.cycle}</span>
                  </div>
                </div>

                <ul className="space-y-4 pt-6 border-t border-white/5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center space-x-3 text-xs text-slate-300">
                      <svg className="w-4 h-4 text-[#00f2fe] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a 
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all ${
                    plan.premium 
                      ? 'bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-slate-900 font-bold hover:shadow-[0_0_20px_rgba(0,242,254,0.3)]' 
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                  }`}
                >
                  Initiate Secure Onboarding
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. HIGH-END ACCORDION FAQ SECTION */}
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

      {/* 8. CINEMATIC FINAL CTA */}
      <section id="contact" className="py-32 px-6 max-w-5xl mx-auto relative text-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2fe]/10 to-transparent filter blur-[120px] pointer-events-none -z-10" />
        <div className="bg-gradient-to-b from-white/[0.03] to-transparent p-12 sm:p-20 rounded-3xl border border-white/10 space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight max-w-2xl mx-auto leading-tight">
            Elevate Your Water Architecture to <span className="font-semibold bg-gradient-to-r from-white via-[#4facfe] to-[#00f2fe] bg-clip-text text-transparent">Resort Quality.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-light">
            Contact our engineering desk today. Secure your preferred recurring valet sequence before our premium seasonal capacity limits lock.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="tel:1300287278" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-slate-900 font-bold rounded-xl text-xs tracking-widest uppercase hover:shadow-[0_0_30px_rgba(0,242,254,0.3)] transition-all">
              Call Senior Chemist
            </a>
            <a href="mailto:concierge@auraaquatics.com.au" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-xs tracking-widest uppercase transition-all">
              Request Estate Audit
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">No Contract Commitment • Discretion Guaranteed</p>
        </div>
      </section>

      {/* 9. PREMIUM FOOTER */}
      <footer className="border-t border-white/5 bg-[#01060d] px-6 py-16 text-xs text-slate-500 tracking-wide">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-white">Aura Aquatics</p>
            <p className="leading-relaxed font-light text-slate-400">Brisbane’s definitive premium resort-grade pool asset cleaners and technological automation integrators.</p>
          </div>
          <div className="space-y-3">
            <p className="text-white uppercase tracking-wider font-semibold">Operational Channels</p>
            <ul className="space-y-2 font-light">
              <li><a href="#services" className="hover:text-white transition-colors">Valet Cleaning Program</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Chemical Kinetics Analysis</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Smart Home Automation</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-white uppercase tracking-wider font-semibold">Corporate Governance</p>
            <ul className="space-y-2 font-light">
              <li>ABN 43 928 102 391</li>
              <li>Queensland QBCC Hydraulic Certified</li>
              <li>Public Indemnity Insured ($20M AUD)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-white uppercase tracking-wider font-semibold">Concierge Desk</p>
            <p className="font-light">Hours: Mon - Sat | 7:00am - 6:00pm</p>
            <p className="font-light">HQ: Edward St, Brisbane City, QLD 4000</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 Aura Aquatics Group. All Rights Reserved. Architecture by LuxuryLabs.</p>
          <div className="flex space-x-6 text-slate-400">
            <span className="hover:text-white cursor-pointer">Privacy Charter</span>
            <span className="hover:text-white cursor-pointer">Terms of Valet</span>
          </div>
        </div>
      </footer>

      {/* 10. STICKY MOBILE CONVERSION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#020b14]/80 backdrop-blur-lg border-t border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest text-slate-400">Direct Line</span>
          <span className="text-xs font-bold tracking-wider text-white">1300 AURA POOL</span>
        </div>
        <a href="tel:1300287278" className="px-5 py-2.5 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-slate-900 font-bold rounded-lg text-[10px] tracking-widest uppercase">
          Call Now
        </a>
      </div>

    </div>
  );
}