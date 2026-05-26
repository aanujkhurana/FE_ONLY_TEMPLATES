import HeroScoop from './HeroScoop';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-circle" />
      <div className="hero-left">
        <div className="hero-eyebrow anim-fadeup">Artisanal Ice Cream</div>
        <h1 className="hero-title anim-fadeup anim-delay-1">
          MELT<br />
          INTO<br />
          <em>COLOR.</em>
        </h1>
        <p className="hero-sub anim-fadeup anim-delay-2">
          Each scoop is a deliberate act of flavor, form, and obsession. Not
          dessert — a sensory event.
        </p>
        <a href="#flavors" className="hero-cta anim-fadeup anim-delay-3">
          Explore Flavors{' '}
          <span className="hero-cta-arrow">&rarr;</span>
        </a>
      </div>
      <div className="hero-right">
        <div className="hero-scoop-wrap anim-float">
          <HeroScoop />
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}
