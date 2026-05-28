import { useReveal } from '../hooks/useReveal';
import Navbar from './Navbar';

export default function Hero() {
  const titleReveal = useReveal();
  const bodyReveal = useReveal('d1');
  const metaReveal = useReveal('d2');

  return (
    <section className="hero-editorial">
      <Navbar />

      <div className="hero-editorial__inner">
        <div className="hero-editorial__label" data-cursor="active">
          <span className="mono">Collection 2025</span>
          <span className="mono">Objects / Materials / Studio</span>
        </div>

        <div className="hero-editorial__headline" data-cursor="active">
          <div {...titleReveal}>
            <h1 className="disp">
              OBJECTS<br />
              BUILT<br />
              TO LAST.
            </h1>
          </div>
        </div>

        <div className="hero-editorial__composition" data-cursor="invert" aria-hidden="true">
          <div className="hero-editorial__field hero-editorial__field--plum" />
          <div className="hero-editorial__field hero-editorial__field--green" />
          <div className="hero-editorial__field hero-editorial__field--cream" />
          <div className="hero-editorial__mark disp">F</div>
          <div className="hero-editorial__rule hero-editorial__rule--one" />
          <div className="hero-editorial__rule hero-editorial__rule--two" />
        </div>

        <div className="hero-editorial__bottom">
          <div className="hero-editorial__copy" data-cursor="active">
            <div {...bodyReveal}>
              <p>
                Precision-engineered forms. No compromise. No trend-chasing. A collection defined by
                material truth, useful weight, and deliberate restraint.
              </p>
              <button className="pill hero-editorial__button">Discover Collection</button>
            </div>
          </div>

          <div className="hero-editorial__meta" data-cursor="active">
            <div {...metaReveal}>
              <p className="mono">Limited Production</p>
              <strong className="disp">12 Objects</strong>
              <span className="mono">Aluminium / Leather / Glass</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-editorial__edge" aria-hidden="true" />
    </section>
  );
}
