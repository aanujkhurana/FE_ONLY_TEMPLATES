import React from 'react';

export default function Footer() {
  return (
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
  );
}
