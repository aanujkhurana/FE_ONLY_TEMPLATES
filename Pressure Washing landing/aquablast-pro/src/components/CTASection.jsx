import React from 'react';

export default function CTASection() {
  return (
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
  );
}
