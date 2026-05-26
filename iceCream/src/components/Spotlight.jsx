import './Spotlight.css';

function SpotlightScoop() {
  return (
    <svg width="300" height="380" viewBox="0 0 300 380" fill="none">
      <ellipse cx="150" cy="150" rx="105" ry="102" fill="#F5E0A0" />
      <ellipse cx="150" cy="150" rx="105" ry="102" fill="url(#vanMain)" />
      <ellipse cx="118" cy="120" rx="40" ry="24" fill="white" opacity="0.22" />
      <ellipse cx="105" cy="114" rx="16" ry="9" fill="white" opacity="0.18" />
      <ellipse
        cx="140"
        cy="145"
        rx="1.5"
        ry="5"
        fill="#8B6020"
        opacity="0.7"
        transform="rotate(20 140 145)"
      />
      <ellipse
        cx="160"
        cy="155"
        rx="1.5"
        ry="6"
        fill="#8B6020"
        opacity="0.6"
        transform="rotate(-15 160 155)"
      />
      <ellipse
        cx="148"
        cy="170"
        rx="1"
        ry="4"
        fill="#8B6020"
        opacity="0.5"
        transform="rotate(35 148 170)"
      />
      <ellipse
        cx="175"
        cy="138"
        rx="1"
        ry="4"
        fill="#8B6020"
        opacity="0.5"
        transform="rotate(-25 175 138)"
      />
      <path
        d="M238 180 Q258 198 255 224 Q252 240 248 252"
        stroke="#F5E0A0"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <circle cx="247" cy="254" r="13" fill="#F5E0A0" opacity="0.8" />
      <path
        d="M68 200 Q52 216 55 236"
        stroke="#EDD090"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <circle cx="54" cy="238" r="10" fill="#EDD090" opacity="0.7" />
      <path d="M75 245 L150 375 L225 245 Z" fill="#C88A3A" opacity="0.95" />
      <path d="M80 260 L148 362" stroke="#A06820" strokeWidth="1.5" opacity="0.5" />
      <path d="M96 253 L149 354" stroke="#A06820" strokeWidth="1.5" opacity="0.45" />
      <path d="M114 249 L150 346" stroke="#A06820" strokeWidth="1.5" opacity="0.4" />
      <path d="M133 247 L151 338" stroke="#A06820" strokeWidth="1.5" opacity="0.4" />
      <path d="M152 247 L152 330" stroke="#A06820" strokeWidth="1.5" opacity="0.4" />
      <path d="M170 249 L153 323" stroke="#A06820" strokeWidth="1.5" opacity="0.4" />
      <path d="M187 253 L154 315" stroke="#A06820" strokeWidth="1.5" opacity="0.45" />
      <path d="M203 260 L155 307" stroke="#A06820" strokeWidth="1.5" opacity="0.5" />
      <path d="M83 270 L217 270" stroke="#A06820" strokeWidth="1" opacity="0.35" />
      <path d="M90 290 L210 290" stroke="#A06820" strokeWidth="1" opacity="0.3" />
      <path d="M98 310 L202 310" stroke="#A06820" strokeWidth="1" opacity="0.28" />
      <path d="M108 330 L192 330" stroke="#A06820" strokeWidth="1" opacity="0.25" />
      <ellipse
        cx="170"
        cy="60"
        rx="7"
        ry="24"
        fill="#4A2010"
        transform="rotate(18 170 60)"
        opacity="0.9"
      />
      <ellipse
        cx="135"
        cy="52"
        rx="5"
        ry="18"
        fill="#3A1808"
        transform="rotate(-12 135 52)"
        opacity="0.8"
      />
      <defs>
        <radialGradient id="vanMain" cx="35%" cy="32%">
          <stop offset="0%" stopColor="#FFFAE8" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#E8C840" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#9A7010" stopOpacity="0.3" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default function Spotlight() {
  return (
    <section className="spotlight">
      <div className="spotlight-left reveal">
        <div className="spotlight-eyebrow">Product Spotlight</div>
        <h2 className="spotlight-title">
          THE<br />
          <em>SCOOP</em>
          <br />
          THAT<br />
          STARTED<br />
          IT ALL.
        </h2>
        <p className="spotlight-body">
          Our original Tahitian Vanilla Bean — hand-scraped pods folded into a
          72-hour aged base. Still our most iconic. Still irreplaceable.
        </p>
        <div className="spotlight-details">
          <div className="spotlight-detail">
            <h5>Origin</h5>
            <p>Tahiti, French Polynesia</p>
          </div>
          <div className="spotlight-detail">
            <h5>Process</h5>
            <p>72-hour cold churn</p>
          </div>
          <div className="spotlight-detail">
            <h5>Available</h5>
            <p>Year-round</p>
          </div>
        </div>
      </div>
      <div className="spotlight-right">
        <div className="spotlight-bg-text">SCOOP</div>
        <div className="anim-float" style={{ zIndex: 2, position: 'relative' }}>
          <SpotlightScoop />
        </div>
      </div>
    </section>
  );
}
