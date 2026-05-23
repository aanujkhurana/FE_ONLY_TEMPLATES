import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ShowcaseSection() {
  const cardRef = useScrollReveal()

  return (
    <section id="showcase" className="py-32 bg-charcoal">
      <div className="max-w-[1320px] mx-auto px-12 max-md:px-6">
        <div className="mb-16">
          <div className="section-label">05 — Featured Project</div>
          <h2 className="font-display text-[clamp(72px,7vw,112px)] leading-[.88] text-warm-white">
            THE WORK<br />SPEAKS.
          </h2>
        </div>

        <div ref={cardRef} className="grid grid-cols-[3fr_2fr] border border-white/6 max-xl:grid-cols-1 reveal">
          <BeforeAfterSlider />
          <ProjectInfo />
        </div>
      </div>
    </section>
  )
}

function BeforeAfterSlider() {
  return (
        <div className="proj-vis min-h-[480px] relative overflow-hidden cursor-crosshair group">
      <div className="absolute inset-0">
        <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 600 480" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="old-t" x="0" y="0" width="90" height="52" patternUnits="userSpaceOnUse">
              <rect x="2" y="2" width="86" height="24" fill="#4A4540" stroke="#2A2520" strokeWidth="1" rx="1.5" />
              <rect x="47" y="28" width="86" height="24" fill="#484340" stroke="#2A2520" strokeWidth="1" rx="1.5" />
              <rect x="-43" y="28" width="86" height="24" fill="#484340" stroke="#2A2520" strokeWidth="1" rx="1.5" />
            </pattern>
          </defs>
          <rect width="600" height="480" fill="#3A3530" />
          <rect width="600" height="480" fill="url(#old-t)" />
          <rect width="600" height="480" fill="rgba(0,0,0,.25)" />
          <line x1="160" y1="0" x2="200" y2="480" stroke="rgba(0,0,0,.3)" strokeWidth="12" />
          <line x1="380" y1="0" x2="350" y2="480" stroke="rgba(0,0,0,.2)" strokeWidth="6" />
          <ellipse cx="280" cy="200" rx="40" ry="20" fill="rgba(0,0,0,.25)" />
        </svg>
      </div>

      <div className="absolute inset-0" style={{ clipPath: 'inset(0 35% 0 0)', transition: 'clip-path .5s cubic-bezier(.4,0,.2,1)' }}>
        <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 600 480" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="new-t" x="0" y="0" width="90" height="52" patternUnits="userSpaceOnUse">
              <rect x="2" y="2" width="86" height="24" fill="#1A2E3A" stroke="#0D1E28" strokeWidth="1" rx="1.5" />
              <rect x="47" y="28" width="86" height="24" fill="#182A35" stroke="#0D1E28" strokeWidth="1" rx="1.5" />
              <rect x="-43" y="28" width="86" height="24" fill="#182A35" stroke="#0D1E28" strokeWidth="1" rx="1.5" />
            </pattern>
          </defs>
          <rect width="600" height="480" fill="#12232E" />
          <rect width="600" height="480" fill="url(#new-t)" />
          <rect width="600" height="480" fill="rgba(18,50,80,.08)" />
        </svg>
      </div>

      <div className="absolute top-5 left-5 z-3 font-condensed text-[10px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 bg-black/55 text-sand">
        Before
      </div>
      <div className="absolute top-5 right-5 z-3 font-condensed text-[10px] font-bold tracking-[0.18em] uppercase px-3.5 py-1.5 bg-black/55 text-copper-l">
        After
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-3 font-condensed text-[10px] tracking-[0.18em] uppercase text-white/35">
        Hover to reveal
      </div>
    </div>
  )
}

function ProjectInfo() {
  return (
    <div className="bg-dark p-13 flex flex-col justify-between">
      <div>
        <div className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-copper-l mb-4">
          Full Replacement · Paddington, QLD
        </div>
        <h3 className="font-condensed font-black text-[34px] uppercase tracking-[0.04em] text-warm-white leading-[1.1] mb-6">
          FEDERATION HOME<br />RESTORATION
        </h3>
        <p className="text-[14px] font-light text-sand leading-[1.8]">
          Complete tear-off and replacement of original 1920s terracotta. Heritage-matched Colorbond installed with custom ridge capping and integrated gutter system. Delivered six weeks ahead of schedule.
        </p>
      </div>

      <div className="mt-10">
        {[
          { k: 'Material', v: 'Colorbond Heritage' },
          { k: 'Roof Area', v: '340 m²' },
          { k: 'Duration', v: '8 Days' },
          { k: 'Warranty', v: '10-Year Workmanship' },
        ].map((spec) => (
          <div key={spec.k} className="flex justify-between py-3 border-t border-white/6">
            <span className="font-condensed text-[11px] font-semibold tracking-[0.12em] uppercase text-warm-gray">
              {spec.k}
            </span>
            <span className="font-condensed text-[14px] font-semibold text-warm-white">
              {spec.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
