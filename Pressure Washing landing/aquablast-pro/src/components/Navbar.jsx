import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#020b14]/40 backdrop-blur-xl border-b border-white/5 tracking-wide transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
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

      {/* STICKY MOBILE CONVERSION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#020b14]/80 backdrop-blur-lg border-t border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-widest text-slate-400">Direct Line</span>
          <span className="text-xs font-bold tracking-wider text-white">1300 AURA POOL</span>
        </div>
        <a href="tel:1300287278" className="px-5 py-2.5 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-slate-900 font-bold rounded-lg text-[10px] tracking-widest uppercase">
          Call Now
        </a>
      </div>
    </>
  );
}
