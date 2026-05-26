import { useReveal } from '../hooks/useReveal';

export default function CTA() {
  const headingReveal = useReveal();
  const bodyReveal = useReveal('d1');

  return (
    <section
      id="cta"
      style={{
        background: '#C2501A',
        padding: '136px 52px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div {...headingReveal}>
        <h2
          className="disp"
          style={{
            fontSize: 'clamp(100px, 18vw, 230px)',
            lineHeight: 0.9,
            color: '#F4EFE5',
            letterSpacing: -3,
            margin: '0 0 36px',
          }}
        >
          GET<br />ONE.
        </h2>
      </div>
      <div {...bodyReveal}>
        <p
          style={{
            color: 'rgba(244,239,229,.65)',
            fontSize: 14,
            margin: '0 0 44px',
            fontWeight: 300,
            letterSpacing: 1,
          }}
        >
          Limited to 500 units globally. Ships 6–8 weeks from order.
        </p>
        <button
          className="pill"
          style={{
            background: '#F4EFE5',
            color: '#111110',
            border: '1px solid #F4EFE5',
            padding: '18px 56px',
            fontSize: 12,
            letterSpacing: 2.5,
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
            transition: 'all 0.28s ease',
          }}
        >
          Order Now — $480
        </button>
      </div>
      <div
        className="disp"
        style={{
          position: 'absolute',
          left: -50,
          bottom: -100,
          fontSize: 500,
          color: 'rgba(0,0,0,.08)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        F
      </div>
    </section>
  );
}
