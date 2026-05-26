import { useReveal } from '../hooks/useReveal';
import Navbar from './Navbar';

export default function Hero() {
  const titleReveal = useReveal();
  const subtitleReveal = useReveal('d1');
  const metaReveal = useReveal('d2');

  return (
    <section
      style={{
        background: '#111110',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '42%',
          height: '100%',
          opacity: 0.038,
          pointerEvents: 'none',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 380 800" preserveAspectRatio="xMidYMid slice">
          <rect x="15" y="15" width="350" height="770" stroke="white" strokeWidth=".4" fill="none" />
          <rect x="51" y="95" width="278" height="610" stroke="white" strokeWidth=".4" fill="none" />
          <rect x="87" y="175" width="206" height="450" stroke="white" strokeWidth=".4" fill="none" />
          <rect x="123" y="255" width="134" height="290" stroke="white" strokeWidth=".4" fill="none" />
          <rect x="159" y="335" width="62" height="130" stroke="white" strokeWidth=".4" fill="none" />
          <line x1="190" y1="0" x2="190" y2="800" stroke="white" strokeWidth=".4" />
          <line x1="0" y1="400" x2="380" y2="400" stroke="white" strokeWidth=".4" />
          <line x1="0" y1="200" x2="380" y2="200" stroke="white" strokeWidth=".3" opacity=".5" />
          <line x1="0" y1="600" x2="380" y2="600" stroke="white" strokeWidth=".3" opacity=".5" />
        </svg>
      </div>

      <Navbar />

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0 52px 80px',
        }}
      >
        <div {...titleReveal} style={{ marginBottom: 44 }}>
          <h1
            className="disp"
            style={{
              fontSize: 'clamp(88px, 15vw, 196px)',
              lineHeight: 0.9,
              color: '#F4EFE5',
              letterSpacing: -3,
            }}
          >
            OBJECTS<br />
            <span style={{ color: '#C2501A' }}>BUILT</span>
            <br />
            TO LAST.
          </h1>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40 }}>
          <div {...subtitleReveal}>
            <p
              style={{
                color: '#8A857E',
                fontSize: 14,
                lineHeight: 1.85,
                margin: '0 0 36px',
                fontWeight: 300,
                maxWidth: 256,
              }}
            >
              Precision-engineered forms.<br />No compromise. No trend-chasing.
            </p>
            <button
              className="pill"
              style={{
                background: '#F4EFE5',
                color: '#111110',
                border: '1px solid #F4EFE5',
                padding: '15px 44px',
                fontSize: 11,
                letterSpacing: 2.5,
                textTransform: 'uppercase',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                transition: 'all 0.28s ease',
              }}
            >
              Discover Collection
            </button>
          </div>
          <div {...metaReveal} style={{ textAlign: 'right' }}>
            <p
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: '#8A857E',
                margin: '0 0 8px',
              }}
            >
              Collection 2025
            </p>
            <p
              className="disp"
              style={{ fontSize: 34, color: '#F4EFE5', letterSpacing: 2, margin: '0 0 4px' }}
            >
              12 Objects
            </p>
            <p
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: '#C2501A',
                margin: 0,
              }}
            >
              Limited Production
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: 1, background: '#222220', margin: '0 52px' }} />
    </section>
  );
}
