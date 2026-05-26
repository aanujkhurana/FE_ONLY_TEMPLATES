export default function HeroScoop() {
  return (
    <svg
      width="380"
      height="500"
      viewBox="0 0 380 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M130 300 L190 490 L250 300 Z" fill="#C4813A" opacity="0.9" />
      <path d="M130 300 L190 490 L250 300 Z" fill="url(#coneGrad)" opacity="0.5" />
      <path d="M135 315 L188 478" stroke="#A06828" strokeWidth="1.5" opacity="0.6" />
      <path d="M148 310 L190 470" stroke="#A06828" strokeWidth="1.5" opacity="0.6" />
      <path d="M162 306 L191 462" stroke="#A06828" strokeWidth="1.5" opacity="0.5" />
      <path d="M178 303 L192 455" stroke="#A06828" strokeWidth="1.5" opacity="0.5" />
      <path d="M195 303 L192 447" stroke="#A06828" strokeWidth="1.5" opacity="0.5" />
      <path d="M210 306 L193 440" stroke="#A06828" strokeWidth="1.5" opacity="0.5" />
      <path d="M225 310 L194 432" stroke="#A06828" strokeWidth="1.5" opacity="0.6" />
      <path d="M238 315 L195 426" stroke="#A06828" strokeWidth="1.5" opacity="0.6" />
      <path d="M133 320 L247 320" stroke="#A06828" strokeWidth="1" opacity="0.4" />
      <path d="M140 340 L240 340" stroke="#A06828" strokeWidth="1" opacity="0.4" />
      <path d="M148 360 L232 360" stroke="#A06828" strokeWidth="1" opacity="0.4" />
      <path d="M158 380 L222 380" stroke="#A06828" strokeWidth="1" opacity="0.4" />
      <path d="M167 400 L213 400" stroke="#A06828" strokeWidth="1" opacity="0.35" />
      <ellipse cx="190" cy="295" rx="80" ry="65" fill="#7BAF52" />
      <ellipse cx="190" cy="295" rx="80" ry="65" fill="url(#pistGrad)" />
      <ellipse cx="190" cy="285" rx="70" ry="52" fill="#8DC462" opacity="0.6" />
      <ellipse cx="165" cy="272" rx="25" ry="15" fill="#A8D97A" opacity="0.5" />
      <ellipse cx="190" cy="220" rx="75" ry="68" fill="#E85070" />
      <ellipse cx="190" cy="220" rx="75" ry="68" fill="url(#strawGrad)" />
      <ellipse cx="172" cy="204" rx="30" ry="20" fill="#F07090" opacity="0.55" />
      <ellipse cx="155" cy="198" rx="12" ry="8" fill="#F8A0B0" opacity="0.4" />
      <ellipse cx="190" cy="150" rx="70" ry="68" fill="#F5E0A0" />
      <ellipse cx="190" cy="150" rx="70" ry="68" fill="url(#vanGrad)" />
      <ellipse cx="168" cy="133" rx="28" ry="18" fill="#FFF0C0" opacity="0.6" />
      <ellipse cx="155" cy="127" rx="12" ry="7" fill="#FFFAE0" opacity="0.5" />
      <path
        d="M248 200 Q262 215 258 235 Q255 248 252 255"
        stroke="#E85070"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <circle cx="252" cy="257" r="9" fill="#E85070" opacity="0.85" />
      <path
        d="M132 240 Q118 252 122 270 Q125 283 128 290"
        stroke="#E85070"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M255 155 Q268 162 270 178 Q272 190 268 200"
        stroke="#F5E0A0"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        opacity="0.75"
      />
      <circle cx="267" cy="202" r="7" fill="#F5E0A0" opacity="0.75" />
      <ellipse
        cx="210"
        cy="100"
        rx="8"
        ry="22"
        fill="#6B3A1F"
        transform="rotate(25 210 100)"
        opacity="0.9"
      />
      <ellipse
        cx="168"
        cy="133"
        rx="22"
        ry="12"
        fill="white"
        opacity="0.18"
        transform="rotate(-20 168 133)"
      />
      <ellipse
        cx="172"
        cy="205"
        rx="20"
        ry="11"
        fill="white"
        opacity="0.15"
        transform="rotate(-15 172 205)"
      />
      <ellipse
        cx="165"
        cy="272"
        rx="18"
        ry="10"
        fill="white"
        opacity="0.18"
        transform="rotate(-10 165 272)"
      />
      <defs>
        <radialGradient id="pistGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#A8D980" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3A6E20" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="strawGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#F080A0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#A02040" stopOpacity="0.4" />
        </radialGradient>
        <radialGradient id="vanGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="#FFFCE0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C8A840" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="coneGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0A050" />
          <stop offset="100%" stopColor="#703800" />
        </linearGradient>
      </defs>
    </svg>
  );
}
