import flavors from '../data/flavors';
import './Flavors.css';

function BloodOrangeSvg() {
  return (
    <svg
      width="200"
      height="280"
      viewBox="0 0 200 280"
      style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: 0.85 }}
      fill="none"
    >
      <ellipse cx="100" cy="80" rx="70" ry="70" fill="#F0703A" />
      <ellipse cx="100" cy="80" rx="70" ry="70" fill="url(#bloodGrad)" />
      <ellipse cx="78" cy="62" rx="25" ry="14" fill="white" opacity="0.18" />
      <ellipse cx="70" cy="58" rx="10" ry="6" fill="white" opacity="0.15" />
      <path
        d="M155 110 Q165 125 162 145 Q160 158 158 165"
        stroke="#F0703A"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <circle cx="157" cy="167" r="8" fill="#F0703A" opacity="0.8" />
      <path
        d="M42 105 Q32 118 35 136"
        stroke="#D04820"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path d="M54 145 L100 270 L146 145 Z" fill="#B07030" opacity="0.9" />
      <path d="M58 158 L99 258" stroke="#8A5220" strokeWidth="1" opacity="0.6" />
      <path d="M71 152 L100 250" stroke="#8A5220" strokeWidth="1" opacity="0.5" />
      <path d="M86 149 L100 242" stroke="#8A5220" strokeWidth="1" opacity="0.5" />
      <path d="M101 149 L101 234" stroke="#8A5220" strokeWidth="1" opacity="0.5" />
      <path d="M116 152 L102 227" stroke="#8A5220" strokeWidth="1" opacity="0.5" />
      <path d="M130 156 L103 219" stroke="#8A5220" strokeWidth="1" opacity="0.6" />
      <path d="M57 165 L143 165" stroke="#8A5220" strokeWidth="0.8" opacity="0.4" />
      <path d="M62 182 L138 182" stroke="#8A5220" strokeWidth="0.8" opacity="0.35" />
      <path d="M68 200 L132 200" stroke="#8A5220" strokeWidth="0.8" opacity="0.3" />
      <defs>
        <radialGradient id="bloodGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FF9060" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8B2000" stopOpacity="0.5" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function LavenderSvg() {
  return (
    <svg
      width="160"
      height="180"
      viewBox="0 0 160 180"
      style={{ margin: '2rem auto', display: 'block' }}
      fill="none"
    >
      <ellipse cx="80" cy="80" rx="60" ry="58" fill="#7B52CC" />
      <ellipse cx="80" cy="80" rx="60" ry="58" fill="url(#lavGrad)" />
      <ellipse cx="62" cy="64" rx="22" ry="12" fill="white" opacity="0.2" />
      <path
        d="M126 100 Q136 112 134 128"
        stroke="#7B52CC"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <circle cx="133" cy="130" r="7" fill="#7B52CC" opacity="0.8" />
      <path d="M33 130 L80 175 L127 130 Z" fill="#A07840" opacity="0.9" />
      <defs>
        <radialGradient id="lavGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#C0A0FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3A1080" stopOpacity="0.4" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function MatchaSvg() {
  return (
    <svg
      width="160"
      height="180"
      viewBox="0 0 160 180"
      style={{ margin: '2rem auto', display: 'block' }}
      fill="none"
    >
      <ellipse cx="80" cy="80" rx="60" ry="58" fill="#2E9966" />
      <ellipse cx="80" cy="80" rx="60" ry="58" fill="url(#matchaGrad)" />
      <ellipse cx="62" cy="64" rx="22" ry="12" fill="white" opacity="0.2" />
      <path
        d="M32 112 Q22 124 25 140"
        stroke="#2E9966"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      />
      <path d="M33 130 L80 175 L127 130 Z" fill="#A07040" opacity="0.9" />
      <defs>
        <radialGradient id="matchaGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#80E0B0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0A3020" stopOpacity="0.5" />
        </radialGradient>
      </defs>
    </svg>
  );
}

const flavorSvgs = {
  'blood-orange': BloodOrangeSvg,
  'lavender-honey': LavenderSvg,
  'matcha-forest': MatchaSvg,
};

export default function Flavors() {
  return (
    <section className="flavors" id="flavors">
      <div className="flavors-header reveal">
        <h2 className="flavors-title">
          Signature
          <br />
          <span>Flavors</span>
        </h2>
        <a href="#order" className="flavors-view-all">
          View All Flavors
        </a>
      </div>
      <div className="flavors-grid reveal">
        {flavors.map((flavor) => {
          const SvgComponent = flavorSvgs[flavor.id];
          return (
            <div
              key={flavor.id}
              className={`flavor-card${flavor.large ? ' large' : ''}`}
              style={{
                background: flavor.bg,
                ...(flavor.large
                  ? { minHeight: 520, display: 'flex', alignItems: 'flex-end', padding: '3rem' }
                  : {}),
              }}
            >
              {SvgComponent && <SvgComponent />}
              {!flavor.large && (
                <div className="flavor-card-content">
                  <div className="flavor-name">{flavor.name}</div>
                  <div className="flavor-tag">{flavor.tags}</div>
                  <div className="flavor-price">{flavor.price}</div>
                </div>
              )}
              {flavor.large && (
                <div>
                  <div
                    className="flavor-name"
                    style={{ fontSize: '2rem', color: '#FFF0E8' }}
                  >
                    {flavor.name}
                  </div>
                  <div className="flavor-tag">{flavor.tags}</div>
                  <div
                    className="flavor-price"
                    style={{
                      marginTop: '0.75rem',
                      fontSize: '0.9rem',
                      color: 'rgba(255,240,232,0.5)',
                    }}
                  >
                    {flavor.price}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
