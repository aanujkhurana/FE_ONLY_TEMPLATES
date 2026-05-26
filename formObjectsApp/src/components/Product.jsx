import { useReveal } from '../hooks/useReveal';
import { PRODUCT_SPECS } from '../data/content';

function ProductSVG() {
  return (
    <svg viewBox="0 0 360 236" fill="none" style={{ width: '100%', display: 'block' }}>
      <rect x="8" y="8" width="344" height="220" rx="5" fill="#1A1A18" />
      <rect x="12" y="12" width="336" height="212" rx="4" fill="#111110" />
      <rect x="8" y="8" width="344" height="3" rx="2" fill="rgba(255,255,255,0.05)" />
      <rect x="8" y="8" width="3" height="220" rx="2" fill="rgba(255,255,255,0.03)" />
      <rect x="18" y="18" width="204" height="200" rx="3" fill="#161614" />
      {[...Array(8)].map((_, col) =>
        [...Array(8)].map((_, row) => (
          <circle
            key={`${col}-${row}`}
            cx={34 + col * 21}
            cy={44 + row * 21}
            r="1.8"
            fill="#252523"
          />
        ))
      )}
      <circle cx="108" cy="114" r="70" fill="#1C1C1A" stroke="#232320" strokeWidth="1.5" />
      <circle cx="108" cy="114" r="54" fill="#161614" stroke="#1E1E1C" strokeWidth="1" />
      <line x1="108" y1="81" x2="108" y2="63" stroke="#1C1C1A" strokeWidth="1" />
      <line x1="108" y1="147" x2="108" y2="165" stroke="#1C1C1A" strokeWidth="1" />
      <line x1="75" y1="114" x2="57" y2="114" stroke="#1C1C1A" strokeWidth="1" />
      <line x1="141" y1="114" x2="159" y2="114" stroke="#1C1C1A" strokeWidth="1" />
      <line x1="85" y1="91" x2="71" y2="77" stroke="#1C1C1A" strokeWidth="1" />
      <line x1="131" y1="137" x2="145" y2="151" stroke="#1C1C1A" strokeWidth="1" />
      <line x1="131" y1="91" x2="145" y2="77" stroke="#1C1C1A" strokeWidth="1" />
      <line x1="85" y1="137" x2="71" y2="151" stroke="#1C1C1A" strokeWidth="1" />
      <circle cx="108" cy="114" r="28" fill="#1C1C1A" />
      <circle cx="108" cy="114" r="16" fill="#202020" />
      <circle cx="108" cy="114" r="6" fill="#C2501A" />
      <rect x="230" y="18" width="114" height="200" rx="3" fill="#161614" />
      <circle cx="287" cy="88" r="36" fill="#202020" />
      <circle cx="287" cy="88" r="29" stroke="#2C2C2A" strokeWidth="1" fill="#1A1A18" />
      <circle cx="287" cy="88" r="20" fill="#1E1E1C" />
      <line x1="287" y1="60" x2="287" y2="72" stroke="#C2501A" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="287" cy="88" r="5" fill="#C2501A" />
      <line x1="262" y1="108" x2="259" y2="113" stroke="#333330" strokeWidth="1" />
      <line x1="272" y1="116" x2="270" y2="122" stroke="#333330" strokeWidth="1" />
      <line x1="287" y1="120" x2="287" y2="126" stroke="#333330" strokeWidth="1" />
      <line x1="302" y1="116" x2="304" y2="122" stroke="#333330" strokeWidth="1" />
      <line x1="312" y1="108" x2="315" y2="113" stroke="#333330" strokeWidth="1" />
      <circle cx="254" cy="150" r="14" fill="#1E1E1C" />
      <circle cx="254" cy="150" r="5" fill="#282826" />
      <circle cx="320" cy="150" r="14" fill="#1E1E1C" />
      <circle cx="320" cy="150" r="5" fill="#282826" />
      <text x="254" y="170" textAnchor="middle" fill="#333330" fontSize="6" fontFamily="monospace" letterSpacing=".5">
        LF
      </text>
      <text x="320" y="170" textAnchor="middle" fill="#333330" fontSize="6" fontFamily="monospace" letterSpacing=".5">
        HF
      </text>
      <circle cx="252" cy="194" r="4" fill="#C2501A" />
      <circle cx="268" cy="194" r="4" fill="#1E1E1C" />
      <circle cx="284" cy="194" r="4" fill="#1E1E1C" />
      <circle cx="300" cy="194" r="4" fill="#1E1E1C" />
      <rect x="248" y="208" width="78" height="6" rx="1.5" fill="#0E0E0D" />
      <text x="108" y="216" textAnchor="middle" fill="#2E2C2A" fontSize="8" fontFamily="monospace" letterSpacing="5">
        FORM — 001
      </text>
      <rect x="8" y="8" width="344" height="3" rx="2" fill="rgba(255,255,255,0.04)" />
    </svg>
  );
}

function SpecRow({ label, value }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '13px 0',
        borderBottom: '1px solid #C4BDB0',
      }}
    >
      <span className="mono" style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: '#8A857E' }}>
        {label}
      </span>
      <span style={{ fontSize: 13, color: '#111110' }}>{value}</span>
    </div>
  );
}

export default function Product() {
  const imageReveal = useReveal();
  const headingReveal = useReveal('d1');
  const infoReveal = useReveal('d2');

  return (
    <section style={{ background: '#F4EFE5', padding: '120px 52px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div {...imageReveal}>
          <div style={{ background: '#DDD6CA', padding: '52px 40px 40px', position: 'relative' }}>
            <ProductSVG />
            <p
              className="mono"
              style={{
                position: 'absolute',
                top: 18,
                left: 18,
                fontSize: 10,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: '#8A857E',
                margin: 0,
              }}
            >
              OBJ. 001
            </p>
            <p
              className="mono"
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                fontSize: 10,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: '#8A857E',
                margin: 0,
              }}
            >
              2025
            </p>
          </div>
        </div>

        <div>
          <div {...headingReveal}>
            <p
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: '#C2501A',
                margin: '0 0 20px',
              }}
            >
              Object No. 001
            </p>
            <h2
              className="disp"
              style={{
                fontSize: 'clamp(52px, 8vw, 88px)',
                lineHeight: 0.9,
                color: '#111110',
                letterSpacing: -0.5,
                margin: '0 0 28px',
              }}
            >
              THE<br />MONITOR
            </h2>
          </div>
          <div {...infoReveal}>
            <p
              style={{
                color: '#706860',
                fontSize: 14,
                lineHeight: 1.9,
                fontWeight: 300,
                margin: '0 0 40px',
              }}
            >
              Machined from a single billet of aircraft-grade 6061-T6 aluminium. Designed to outlast
              every screen, desk, and studio it inhabits.
            </p>
            <div style={{ borderTop: '1px solid #C4BDB0' }}>
              {PRODUCT_SPECS.map((spec) => (
                <SpecRow key={spec.label} label={spec.label} value={spec.value} />
              ))}
            </div>
            <div style={{ marginTop: 36 }}>
              <button
                className="pill-inv"
                style={{
                  background: '#111110',
                  color: '#F4EFE5',
                  border: '1px solid #111110',
                  padding: '15px 44px',
                  fontSize: 11,
                  letterSpacing: 2.5,
                  textTransform: 'uppercase',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  transition: 'all 0.28s ease',
                }}
              >
                View Object — $480
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
