import React from 'react';

export default function TransformationSection({ beforeAfterRef, handleSliderMove, sliderPosition }) {
  return (
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
  );
}
