import { useReveal } from '../hooks/useReveal';
import { PRINCIPLES } from '../data/content';

const DELAYS = ['d1', 'd2', 'd3'];

function PrincipleCard({ principle, delayClass }) {
  const reveal = useReveal(delayClass);

  return (
    <div
      {...reveal}
      style={{ background: '#15281E', padding: '48px 40px 44px' }}
    >
      <p
        className="mono"
        style={{
          fontSize: 10,
          color: '#E8B84B',
          margin: '0 0 36px',
          letterSpacing: 1,
        }}
      >
        {principle.number}
      </p>
      <h3
        className="disp"
        style={{
          fontSize: 38,
          color: '#F5F0E8',
          margin: '0 0 22px',
          lineHeight: 0.95,
          letterSpacing: 0.5,
          whiteSpace: 'pre-line',
        }}
      >
        {principle.title}
      </h3>
      <p
        style={{
          color: '#9AAF95',
          fontSize: 13,
          lineHeight: 1.85,
          fontWeight: 300,
          margin: 0,
        }}
      >
        {principle.description}
      </p>
    </div>
  );
}

export default function Principles() {
  const headingReveal = useReveal();

  return (
    <section style={{ background: '#1A2E22', padding: '100px 52px' }}>
      <div
        {...headingReveal}
        style={{ marginBottom: 60, display: 'flex', alignItems: 'center', gap: 20 }}
      >
        <div style={{ width: 32, height: 1, background: '#E8B84B' }} />
        <span className="mono" style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: '#9AAF95' }}>
          The Doctrine
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
        {PRINCIPLES.map((principle, i) => (
          <PrincipleCard key={principle.number} principle={principle} delayClass={DELAYS[i]} />
        ))}
      </div>
    </section>
  );
}
