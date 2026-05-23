import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CraftsmanshipSection() {
  const gridRef = useScrollReveal()

  return (
    <section id="craft" className="py-32 bg-dark">
      <div className="max-w-[1320px] mx-auto px-12 max-md:px-6">
        <div className="grid grid-cols-[1fr_1fr] gap-12 items-end mb-[72px] max-xl:grid-cols-1 max-xl:gap-12">
          <div>
            <div className="section-label">02 — Materials</div>
            <h2 className="font-display text-[clamp(72px,7vw,112px)] leading-[.88] text-warm-white">
              MATERIALS<br />THAT<br />ENDURE.
            </h2>
          </div>
          <CraftParagraph />
        </div>

        <div ref={gridRef} className="grid grid-cols-[3fr_2fr] grid-rows-[auto_auto] gap-4 reveal">
          <div className="row-span-2 min-h-[580px] relative overflow-hidden bg-slate">
            <svg
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              viewBox="0 0 400 580"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="big-tile" x="0" y="0" width="80" height="50" patternUnits="userSpaceOnUse">
                  <rect x="1.5" y="1.5" width="77" height="23" fill="#2E2E2A" stroke="#111110" strokeWidth="1.5" rx="2" />
                  <rect x="41.5" y="26.5" width="77" height="23" fill="#2A2A26" stroke="#111110" strokeWidth="1.5" rx="2" />
                  <rect x="-38.5" y="26.5" width="77" height="23" fill="#2A2A26" stroke="#111110" strokeWidth="1.5" rx="2" />
                </pattern>
              </defs>
              <rect width="400" height="580" fill="#1A1A17" />
              <rect width="400" height="580" fill="url(#big-tile)" />
              <rect width="400" height="580" fill="url(#big-tile)" opacity=".4" />
              <rect x="0" y="288" width="400" height="2" fill="rgba(155,98,53,.3)" />
              <rect x="0" y="290" width="400" height="4" fill="rgba(0,0,0,.5)" />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/70 to-transparent z-2">
              <div className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-copper-l mb-1.5">
                Colorbond Steel · 0.42 BMT
              </div>
              <div className="font-condensed font-extrabold text-[20px] uppercase tracking-[0.06em] text-warm-white">
                ARCHITECTURAL ROOFING
              </div>
              <div className="text-[13px] font-light text-sand mt-1">
                25-year paint warranty. Certified installation.
              </div>
            </div>
          </div>

          <MetalDetailPanel />
          <CopperPanel />
        </div>
      </div>
    </section>
  )
}

function CraftParagraph() {
  const ref = useScrollReveal()
  return (
    <p ref={ref} className="font-body text-[17px] font-light text-sand leading-[1.85] max-w-[400px] reveal">
      We work exclusively with premium materials from trusted manufacturers. Every component is selected for longevity, not price. The difference shows — in appearance, performance, and decades of protection.
    </p>
  )
}

function MetalDetailPanel() {
  return (
    <div className="min-h-[272px] relative overflow-hidden bg-mid">
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.6 }}
        viewBox="0 0 280 260"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="stripes" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="8" fill="rgba(255,255,255,.03)" />
          </pattern>
        </defs>
        <rect width="280" height="260" fill="url(#stripes)" />
        <line x1="0" y1="50" x2="280" y2="50" stroke="rgba(155,98,53,.25)" strokeWidth="1" />
        <line x1="0" y1="52" x2="280" y2="52" stroke="rgba(0,0,0,.4)" strokeWidth="2" />
        <line x1="0" y1="130" x2="280" y2="130" stroke="rgba(155,98,53,.2)" strokeWidth=".5" />
        <circle cx="140" cy="130" r="50" fill="none" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
        <circle cx="140" cy="130" r="20" fill="none" stroke="rgba(155,98,53,.2)" strokeWidth=".5" />
      </svg>
      <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/70 to-transparent z-2">
        <div className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-copper-l mb-1.5">
          Seamless Guttering
        </div>
        <div className="font-condensed font-extrabold text-[20px] uppercase tracking-[0.06em] text-warm-white">
          PRECISION FLASHING
        </div>
        <div className="text-[13px] font-light text-sand mt-1">
          Sealed to last a lifetime.
        </div>
      </div>
    </div>
  )
}

function CopperPanel() {
  return (
    <div className="min-h-[272px] relative overflow-hidden bg-copper">
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-1 p-7">
        <div className="font-condensed font-semibold tracking-[0.18em] uppercase text-[11px]" style={{ color: 'rgba(255,255,255,.5)', fontSize: '10px', letterSpacing: '.2em' }}>
          Australian Standard
        </div>
        <div className="font-display text-[96px] leading-[1]" style={{ color: 'rgba(0,0,0,.15)' }}>
          AS/NZS
        </div>
        <div className="font-condensed font-black text-[16px] uppercase tracking-[0.1em]" style={{ color: 'rgba(255,255,255,.85)' }}>
          Certified Installation
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-7 z-2">
        <div className="font-condensed font-extrabold text-[20px] uppercase tracking-[0.06em] text-warm-white">
          INSTALLATION STANDARD
        </div>
        <div className="text-[13px] font-light text-sand mt-1">
          Every job meets Australian Building Code.
        </div>
      </div>
    </div>
  )
}
