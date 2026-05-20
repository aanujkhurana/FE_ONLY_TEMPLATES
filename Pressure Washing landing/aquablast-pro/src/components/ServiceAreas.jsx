import React from 'react';

const SUBURBS = ['Hamilton', 'New Farm', 'Ascot', 'Bulimba', 'Indooroopilly', 'Paddington', 'St Lucia', 'Kangaroo Point'];

export default function ServiceAreas() {
  return (
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
  );
}
