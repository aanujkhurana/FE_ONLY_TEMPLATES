import { useReveal } from '../hooks/useReveal';

export default function Statement() {
  const headingReveal = useReveal();
  const bodyReveal = useReveal('d1');

  return (
    <section
      style={{
        background: '#C2501A',
        padding: '96px 52px 80px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div {...headingReveal}>
        <h2
          className="disp"
          style={{
            fontSize: 'clamp(60px, 13vw, 160px)',
            lineHeight: 0.9,
            color: '#F4EFE5',
            letterSpacing: -2,
          }}
        >
          FORM<br />IS<br />EVERYTHING.
        </h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 56 }}>
        <div
          {...bodyReveal}
          style={{
            maxWidth: 380,
            borderLeft: '2px solid rgba(244,239,229,.25)',
            paddingLeft: 28,
          }}
        >
          <p
            style={{
              color: 'rgba(244,239,229,.72)',
              fontSize: 15,
              lineHeight: 1.9,
              fontWeight: 300,
              margin: 0,
            }}
          >
            We believe the objects surrounding you define your experience of life.
            Every curve, weight, and surface is deliberate. Every millimetre accounted for.
            This is not design — this is conviction.
          </p>
        </div>
      </div>
      <div
        className="disp"
        style={{
          position: 'absolute',
          right: -40,
          bottom: -80,
          fontSize: 440,
          color: 'rgba(0,0,0,.09)',
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
