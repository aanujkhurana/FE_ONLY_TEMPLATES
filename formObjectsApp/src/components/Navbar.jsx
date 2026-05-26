import { NAV_LINKS } from '../data/content';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '30px 52px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <span className="disp" style={{ fontSize: 22, color: '#F5F0E8', letterSpacing: 6 }}>
        FORM
      </span>
      <div style={{ display: 'flex', gap: 44 }}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              color: '#B8A89A',
              fontSize: 11,
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="#cta"
        className="mono"
        style={{ fontSize: 11, color: '#D84B2A', letterSpacing: 1 }}
      >
        ↗ Order
      </a>
    </nav>
  );
}
