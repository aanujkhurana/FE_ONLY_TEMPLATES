import { useReveal } from '../hooks/useReveal';

export default function CTA() {
  const headingReveal = useReveal();
  const bodyReveal = useReveal('d1');

  return (
    <section
      id="cta"
      style={{
        background: '#2D1B2E',
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
            color: '#E8B84B',
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
            color: '#C4B5D4',
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
            background: '#F5F0E8',
            color: '#0F1923',
            border: '1px solid #F5F0E8',
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
