import './CTA.css';

export default function CTA() {
  return (
    <section className="cta-section" id="order">
      <div className="cta-bg-ring" />
      <div className="cta-bg-ring" />
      <div
        style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}
      >
        <div className="cta-eyebrow reveal">
          Visit us · Order online · Gift cards
        </div>
        <h2 className="cta-title reveal">
          FLAVOR,
          <br />
          <em>ELEVATED.</em>
        </h2>
        <a href="#" className="cta-btn reveal">
          Order Now
        </a>
        <p className="cta-note reveal">
          Open daily 11am – 10pm · 42 Fortitude Valley, Brisbane
        </p>
      </div>
    </section>
  );
}
