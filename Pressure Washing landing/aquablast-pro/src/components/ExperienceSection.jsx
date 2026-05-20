import React from 'react';

export default function ExperienceSection() {
  return (
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
  );
}
