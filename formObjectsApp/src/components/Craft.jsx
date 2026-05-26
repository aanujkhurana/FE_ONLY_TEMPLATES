import { useReveal } from '../hooks/useReveal';
import { STATS } from '../data/content';

function StatCard({ stat }) {
  return (
    <div style={{ background: '#F5F0E8', padding: '28px 22px' }}>
      <p
        className="disp"
        style={{
          fontSize: 44,
          color: '#1A3C3A',
          lineHeight: 1,
          margin: '0 0 6px',
          letterSpacing: -0.5,
        }}
      >
        {stat.value}
      </p>
      <p
        className="mono"
        style={{
          fontSize: 9,
          color: '#8A7564',
          letterSpacing: 2,
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function Craft() {
  const headingReveal = useReveal();
  const bodyReveal = useReveal('d1');
  const statsReveal = useReveal('d2');

  return (
    <section style={{ background: '#E8D5C4', padding: '120px 52px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        <div>
          <div {...headingReveal}>
            <h2
              className="disp"
              style={{
                fontSize: 'clamp(60px, 10vw, 118px)',
                lineHeight: 0.9,
                color: '#1A3C3A',
                letterSpacing: -1,
                margin: '0 0 40px',
              }}
            >
              CRAFT<br />ABOVE<br />ALL.
            </h2>
          </div>
          <div {...bodyReveal}>
            <div style={{ width: '100%', height: 1, background: 'rgba(26,60,58,.25)', marginBottom: 36 }} />
            <p
              style={{
                color: '#8A7564',
                fontSize: 14,
                lineHeight: 1.95,
                fontWeight: 300,
                margin: 0,
              }}
            >
              Our objects are made in a single facility in northern Portugal — a building of concrete
              and glass, where fifty craftspeople work alongside five-axis CNC machines. One does not
              replace the other. Both are essential.
            </p>
          </div>
        </div>
        <div style={{ paddingTop: 60 }}>
          <div {...statsReveal}>
            <p
              style={{
                color: '#8A7564',
                fontSize: 14,
                lineHeight: 1.95,
                fontWeight: 300,
                margin: '0 0 44px',
              }}
            >
              Each surface is treated a minimum of seven times. Each component measured to tolerances
              of ±0.02mm. Not because customers notice — because we do.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {STATS.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
