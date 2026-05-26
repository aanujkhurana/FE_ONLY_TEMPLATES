import { useReveal } from '../hooks/useReveal';
import { COLLECTION_ITEMS } from '../data/content';

function CollectionCard({ item }) {
  return (
    <div
      className="card-hover"
      style={{
        background: '#262624',
        padding: '28px 22px',
        cursor: 'pointer',
        transition: 'background 0.2s',
      }}
    >
      <p className="mono" style={{ fontSize: 10, color: '#C2501A', margin: '0 0 12px' }}>
        {item.obj}
      </p>
      <p className="disp" style={{ fontSize: 18, color: '#F4EFE5', margin: '0 0 8px', letterSpacing: 1 }}>
        {item.name}
      </p>
      <p className="mono" style={{ fontSize: 9, color: '#8A857E', margin: 0, letterSpacing: 1 }}>
        {item.price}
      </p>
    </div>
  );
}

export default function CollectionGrid() {
  const contentReveal = useReveal();
  const gridReveal = useReveal('d1');

  return (
    <section style={{ background: '#1E1E1C', padding: '100px 52px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 60, alignItems: 'center' }}>
        <div {...contentReveal}>
          <p
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#8A857E',
              margin: '0 0 20px',
            }}
          >
            The Collection
          </p>
          <h2
            className="disp"
            style={{
              fontSize: 'clamp(52px, 9vw, 108px)',
              lineHeight: 0.9,
              color: '#F4EFE5',
              letterSpacing: -1,
              margin: '0 0 32px',
            }}
          >
            TWELVE<br />OBJECTS.<br />
            <span style={{ color: '#C2501A' }}>ONE</span> VISION.
          </h2>
          <p
            style={{
              color: '#8A857E',
              fontSize: 14,
              lineHeight: 1.9,
              fontWeight: 300,
              maxWidth: 380,
              margin: '0 0 44px',
            }}
          >
            From desk monitors to precision timekeeping instruments — every object in the 2025
            collection shares a single material language. Aluminium, leather, glass. Nothing else.
          </p>
          <button
            className="pill-ora"
            style={{
              background: '#C2501A',
              color: '#F4EFE5',
              border: '1px solid #C2501A',
              padding: '15px 44px',
              fontSize: 11,
              letterSpacing: 2.5,
              textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              transition: 'all 0.28s ease',
            }}
          >
            Explore Collection
          </button>
        </div>
        <div {...gridReveal}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {COLLECTION_ITEMS.map((item) => (
              <CollectionCard key={item.obj} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
