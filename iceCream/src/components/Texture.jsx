import './Texture.css';

const swatches = [
  { label: 'Lavender', bg: '#7B52CC', light: false },
  { label: 'Strawberry', bg: '#E85070', light: false },
  { label: 'Vanilla', bg: '#F5E0A0', light: true },
  { label: 'Matcha', bg: '#2E9966', light: false },
];

export default function Texture() {
  return (
    <section className="texture">
      <div className="texture-inner">
        <div className="texture-left reveal">
          <h2>
            Crafted with obsession.
            <br />
            Served with ceremony.
          </h2>
          <p>
            We source single-origin dairy from one farm. We use hand-harvested
            botanicals from three continents. Every batch is small enough to
            taste personally before it reaches you.
          </p>
          <div className="texture-stat">
            <div className="texture-stat-item">
              <h3>18</h3>
              <p>Signature flavors</p>
            </div>
            <div className="texture-stat-item">
              <h3>72h</h3>
              <p>Minimum churn time</p>
            </div>
            <div className="texture-stat-item">
              <h3>3</h3>
              <p>Ingredient sources</p>
            </div>
          </div>
        </div>
        <div className="texture-right reveal">
          {swatches.map((swatch) => (
            <div
              key={swatch.label}
              className="texture-swatch"
              style={{ background: swatch.bg }}
            >
              <div
                className="texture-swatch-label"
                style={
                  swatch.light ? { color: 'rgba(0,0,0,0.4)' } : undefined
                }
              >
                {swatch.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
