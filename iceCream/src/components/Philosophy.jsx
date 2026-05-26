import './Philosophy.css';

export default function Philosophy() {
  return (
    <section className="philosophy" id="about">
      <div className="phil-num">02</div>
      <div className="phil-label reveal">Our Philosophy</div>
      <div className="phil-statement reveal">
        We don&apos;t make<br />
        ice cream.<br />
        We <em>design</em>
        <br />
        desire.
      </div>
      <div className="phil-sub reveal">
        <div className="phil-sub-item">
          <h4>The Craft</h4>
          <p>
            Every flavor begins as a visual idea. Color, texture, and form come
            first. Then taste follows — never the other way.
          </p>
        </div>
        <div className="phil-sub-item">
          <h4>The Obsession</h4>
          <p>
            Locally sourced, seasonally driven, hand-churned in small batches.
            Every scoop carries intention and care.
          </p>
        </div>
        <div className="phil-sub-item">
          <h4>The Experience</h4>
          <p>
            From the moment you see it to the final taste, every detail is
            designed to be unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
}
