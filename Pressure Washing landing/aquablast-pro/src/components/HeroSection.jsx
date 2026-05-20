import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ backgroundY }) {
  return (
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
            <span className="relative inline-block font-semibold">
              <span className="bg-gradient-to-r from-[#00f2fe] via-white to-[#00f2fe] bg-clip-text text-transparent animate-text-shine bg-[length:200%_auto] text-shadow">
                Crystal Clear.
              </span>
              {/* Luxury Sparkle Star 1 */}
              <motion.span 
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: [0, 0, 1.2, 0, 0], 
                  rotate: [0, 0, 90, 180, 180],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.4, 0.45, 0.5, 1]
                }}
                className="absolute -right-6 -top-2 text-[#00f2fe]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              </motion.span>
              {/* Luxury Sparkle Star 2 */}
              <motion.span 
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: [0, 0, 0.9, 0, 0], 
                  rotate: [0, 0, -45, 90, 90],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.45, 0.5, 0.55, 1]
                }}
                className="absolute -left-6 bottom-2 text-[#4facfe]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              </motion.span>
            </span> <br />
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
  );
}
