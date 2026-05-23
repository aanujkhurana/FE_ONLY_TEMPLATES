import { useScrollReveal } from '../hooks/useScrollReveal'

export default function HeroSection() {
  const revealRef = useScrollReveal()
  const revealRef2 = useScrollReveal()

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-[50%_50%] max-xl:grid-cols-1 overflow-hidden"
      style={{
        background:
          'linear-gradient(to right, var(--color-dark) 0%, #181815 50%, #181815 100%)',
      }}
    >
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg,var(--color-charcoal) 0%,transparent 45%)',
        }}
      />
      <div className="inset-0 z-1 pointer-events-none noise" style={{ position: 'absolute' }} />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.3) 40%, black 70%, black 100%)',
          maskImage:
            'linear-gradient(to right, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.3) 40%, black 70%, black 100%)',
        }}
      />
      <div className="flex flex-col justify-end pt-[140px] pb-22 pl-12 max-xl:px-12 relative z-2">
        <div className="flex items-center gap-3 mb-9">
          <div className="w-[5px] h-[5px] bg-copper-l rounded-full" />
          <span
            className="font-condensed font-semibold tracking-[0.18em] uppercase text-[11px]"
            style={{ color: '#B5AD97' }}
          >
            Premium Roofing · Est. 1999
          </span>
        </div>

            <h1 className="font-display text-[clamp(108px,11vw,180px)] leading-[.86] text-warm-white mb-10">
              BUILT<br />TO<br />
              <em className="text-copper-l not-italic">OUTLAST.</em>
            </h1>

            <p
              ref={revealRef}
              className="font-body text-[18px] font-light text-sand max-w-[400px] leading-[1.75] mb-13 reveal"
            >
              Precision roofing for homes that demand more than ordinary. We
              engineer solutions built to endure decades, not seasons.
            </p>

        <div
          ref={revealRef2}
          className="flex items-center gap-8 reveal d1"
        >
          <a href="#cta" className="btn-solid">
            Request Assessment
          </a>
          <a href="#showcase" className="btn-text">
            View Our Work <span>→</span>
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden max-xl:hidden">
        <div className="absolute inset-0">
          <RoofSVG />
        </div>
        <div className="absolute bottom-22 left-12 z-3 border-l-3 border-copper-l pl-5">
          <div className="font-display text-[72px] leading-[1] text-warm-white">
            25<em className="not-italic text-copper-l text-[44px]">+</em>
          </div>
          <div className="font-condensed text-[12px] font-semibold tracking-[0.14em] uppercase text-sand mt-1">
            Years of precision roofing
          </div>
        </div>
      </div>
    </section>
  )
}

function RoofSVG() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 720 900"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="gtile" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <animateTransform
            attributeName="patternTransform"
            type="translate"
            from="0 0"
            to="40 40"
            dur="40s"
            repeatCount="indefinite"
          />
          <path d="M40 0L0 0 0 40" fill="none" stroke="rgba(255,255,255,.035)" strokeWidth=".5" />
        </pattern>
        <pattern id="rtile" x="0" y="0" width="90" height="52" patternUnits="userSpaceOnUse">
          <rect x="2" y="2" width="86" height="24" fill="rgba(40,40,36,.9)" stroke="rgba(0,0,0,.6)" strokeWidth="1" rx="1.5" />
          <rect x="47" y="28" width="86" height="24" fill="rgba(38,38,34,.9)" stroke="rgba(0,0,0,.55)" strokeWidth="1" rx="1.5" />
          <rect x="-43" y="28" width="86" height="24" fill="rgba(38,38,34,.9)" stroke="rgba(0,0,0,.55)" strokeWidth="1" rx="1.5" />
        </pattern>
        <clipPath id="rclip"><polygon points="360,60 680,380 40,380" /></clipPath>
        <clipPath id="wallclip"><rect x="80" y="380" width="560" height="460" /></clipPath>
      </defs>

      <rect width="720" height="900" fill="#181815" />
      <rect width="720" height="900" fill="url(#gtile)" />

      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -10; 0 0; 0 -10; 0 0"
          keyTimes="0; 0.4; 0.5; 0.9; 1"
          dur="10s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.45 0 0.15 1; 0.45 0 0.15 1; 0.45 0 0.15 1; 0.45 0 0.15 1"
        />
        <polygon points="360,60 680,380 40,380" fill="rgba(30,30,27,.95)" />
        <rect x="0" y="0" width="720" height="900" fill="url(#rtile)" clipPath="url(#rclip)" opacity=".9" />
        <polygon points="360,60 365,64 355,64" fill="rgba(155,98,53,.5)" />
        <line x1="360" y1="60" x2="360" y2="375" stroke="rgba(255,255,255,.04)" strokeWidth=".5" strokeDasharray="4,6" />
        <text x="375" y="190" fill="rgba(255,255,255,.2)" fontFamily="Barlow Condensed,sans-serif" fontSize="9" letterSpacing="2" fontWeight="600">PITCH 6/12</text>
      </g>

      <line x1="40" y1="380" x2="680" y2="380" stroke="rgba(155,98,53,.35)" strokeWidth="2" />
      <rect x="80" y="380" width="560" height="460" fill="rgba(26,26,23,.85)" />
      <rect x="80" y="380" width="560" height="460" fill="url(#gtile)" />
      <rect x="80" y="375" width="560" height="12" fill="rgba(50,48,43,.9)" />
      <rect x="150" y="450" width="110" height="130" fill="rgba(20,30,40,.6)" stroke="rgba(255,255,255,.06)" strokeWidth=".5" />
      <line x1="205" y1="450" x2="205" y2="580" stroke="rgba(255,255,255,.04)" strokeWidth=".5" />
      <line x1="150" y1="515" x2="260" y2="515" stroke="rgba(255,255,255,.04)" strokeWidth=".5" />
      <rect x="460" y="450" width="110" height="130" fill="rgba(20,30,40,.6)" stroke="rgba(255,255,255,.06)" strokeWidth=".5" />
      <line x1="515" y1="450" x2="515" y2="580" stroke="rgba(255,255,255,.04)" strokeWidth=".5" />
      <line x1="460" y1="515" x2="570" y2="515" stroke="rgba(255,255,255,.04)" strokeWidth=".5" />
      <rect x="305" y="560" width="110" height="280" fill="rgba(18,18,15,.8)" stroke="rgba(255,255,255,.07)" strokeWidth=".5" />
      <circle cx="400" cy="700" r="5" fill="none" stroke="rgba(155,98,53,.4)" strokeWidth="1" />
      <line x1="80" y1="415" x2="640" y2="415" stroke="rgba(155,98,53,.15)" strokeWidth=".5" strokeDasharray="5,5" />
      <text x="360" y="411" fill="rgba(155,98,53,.4)" fontFamily="Barlow Condensed,sans-serif" fontSize="9" letterSpacing="3" textAnchor="middle" fontWeight="600">FASCIA LINE · COLORBOND HERITAGE GREY</text>
    </svg>
  )
}
