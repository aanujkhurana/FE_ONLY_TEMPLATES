import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import Navbar from './Navbar';

export default function Hero() {
  const heroRef = useRef(null);
  const titleReveal = useReveal();
  const bodyReveal = useReveal('d1');
  const metaReveal = useReveal('d2');

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let rafId = 0;

    const updateMorph = () => {
      const rect = hero.getBoundingClientRect();
      const distance = Math.max(rect.height * 0.72, 1);
      const rawProgress = Math.min(Math.max(-rect.top / distance, 0), 1);
      const progress = reducedMotion.matches ? 0 : rawProgress;

      hero.style.setProperty('--morph', progress.toFixed(3));
      hero.style.setProperty('--morph-y', `${Math.round(progress * 92)}px`);
      hero.style.setProperty('--morph-green-y', `${Math.round(progress * 58)}px`);
      hero.style.setProperty('--morph-cream-y', `${Math.round(progress * 46)}px`);
      hero.style.setProperty('--morph-scale-x', (1 + progress * 2.25).toFixed(3));
      hero.style.setProperty('--morph-scale-y', (1 + progress * 1.35).toFixed(3));
      hero.style.setProperty('--morph-green-scale', (1 - progress * 0.18).toFixed(3));
      hero.style.setProperty('--morph-cream-scale', (1 - progress * 0.2).toFixed(3));
      hero.style.setProperty('--morph-fade', (1 - progress).toFixed(3));
      hero.style.setProperty('--morph-soft-fade', (1 - progress * 0.72).toFixed(3));
      hero.style.setProperty('--morph-rule-fade', (1 - progress * 0.8).toFixed(3));
      hero.style.setProperty('--morph-radius', `${Math.round(8 - progress * 8)}px`);
      hero.style.setProperty('--morph-band-height', `${8 + progress * 42}vh`);
      hero.style.setProperty('--morph-band-y', `${(1 - progress) * 100}%`);
      rafId = 0;
    };

    const requestUpdate = () => {
      if (!rafId) rafId = window.requestAnimationFrame(updateMorph);
    };

    updateMorph();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-editorial">
      <Navbar />

      <div className="hero-editorial__inner">
        <div className="hero-editorial__label" data-cursor="active">
          <span className="mono">Collection 2025</span>
          <span className="mono">Objects / Materials / Studio</span>
        </div>

        <div className="hero-editorial__headline" data-cursor="active">
          <div {...titleReveal}>
            <h1 className="disp">
              OBJECTS BUILT TO LAST.
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
