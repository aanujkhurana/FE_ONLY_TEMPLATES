import { FOOTER_SECTIONS } from '../data/content';

function FooterSection({ section }) {
  return (
    <div>
      <p
        className="mono"
        style={{
          fontSize: 10,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: '#C2501A',
          margin: '0 0 18px',
        }}
      >
        {section.title}
      </p>
      {section.links.map((link) => (
        <div key={link} style={{ marginBottom: 10 }}>
          <a href="#" style={{ color: '#8A857E', fontSize: 13, fontWeight: 300 }}>
            {link}
          </a>
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: '#161614', padding: '64px 52px 40px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: 48,
        }}
      >
        <div>
          <p className="disp" style={{ fontSize: 20, color: '#F4EFE5', letterSpacing: 6, margin: '0 0 14px' }}>
            FORM
          </p>
          <p
            style={{
              color: '#8A857E',
              fontSize: 13,
              fontWeight: 300,
              margin: 0,
              maxWidth: 180,
              lineHeight: 1.75,
            }}
          >
            Objects without compromise.<br />Since 2020.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 60 }}>
          {FOOTER_SECTIONS.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>
      </div>
      <div
        style={{
          borderTop: '1px solid #2A2A28',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p className="mono" style={{ fontSize: 9, color: '#8A857E', letterSpacing: 1, margin: 0 }}>
          © 2025 FORM Studio. All rights reserved.
        </p>
        <p className="mono" style={{ fontSize: 9, color: '#8A857E', letterSpacing: 1, margin: 0 }}>
          Made with purpose.
        </p>
      </div>
    </footer>
  );
}
