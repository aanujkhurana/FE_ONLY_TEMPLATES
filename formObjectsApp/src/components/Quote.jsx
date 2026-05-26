import { useReveal } from '../hooks/useReveal';

export default function Quote() {
  const textReveal = useReveal();
  const attrReveal = useReveal('d1');

  return (
    <section style={{ background: '#0F1923', padding: '120px 52px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <div {...textReveal}>
          <div style={{ width: 2, height: 48, background: '#E8B84B', margin: '0 auto 40px' }} />
          <p
            className="disp"
            style={{
              fontSize: 'clamp(28px, 5vw, 52px)',
              color: '#F5F0E8',
              lineHeight: 1.2,
              margin: '0 0 40px',
              letterSpacing: 0.5,
            }}
          >
            &ldquo;THE ONLY PRODUCT I OWN THAT I WILL NEVER REPLACE.&rdquo;
          </p>
        </div>
        <div {...attrReveal}>
          <p
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#B8A89A',
              margin: 0,
            }}
          >
            Marcus R. — Berlin, 2024
          </p>
        </div>
      </div>
    </section>
  );
}
