import { memo, useMemo, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TransformationSection from './components/TransformationSection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import ServiceAreas from './components/ServiceAreas';
import MembershipPlans from './components/MembershipPlans';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import useIsMobile from './hooks/useIsMobile';

const CRITICAL_IMAGES = [
  {
    src: '/hero2-md.avif',
    srcSet: '/hero2-sm.avif 600w, /hero2-md.avif 1000w, /hero2.avif 1600w',
    sizes: '100vw',
  },
  {
    src: '/afterImage2-md.avif',
    srcSet: '/afterImage2-sm.avif 600w, /afterImage2-md.avif 1000w, /afterImage2.avif 1600w',
    sizes: '(max-width: 1024px) 50vw, 360px',
  },
  {
    src: '/beforeImage-md.avif',
    srcSet: '/beforeImage-sm.avif 600w, /beforeImage-md.avif 1000w, /beforeImage.avif 1600w',
    sizes: '(max-width: 1024px) 100vw, 1024px',
  },
  {
    src: '/afterImage-md.avif',
    srcSet: '/afterImage-sm.avif 600w, /afterImage-md.avif 1000w, /afterImage.avif 1600w',
    sizes: '(max-width: 1024px) 100vw, 1024px',
  },
  {
    src: '/hero-md.avif',
    srcSet: '/hero-sm.avif 600w, /hero-md.avif 1000w, /hero.avif 1600w',
    sizes: '(max-width: 1024px) 100vw, 50vw',
  },
  {
    src: '/footer-md.avif',
    srcSet: '/footer-sm.avif 600w, /footer-md.avif 1000w, /footer.avif 1600w',
    sizes: '100vw',
  },
];

function waitForWindowLoad() {
  if (document.readyState === 'complete') return Promise.resolve();

  return new Promise((resolve) => {
    window.addEventListener('load', resolve, { once: true });
  });
}

function preloadImage({ src, srcSet, sizes }) {
  return new Promise((resolve) => {
    const image = new Image();
    image.decoding = 'async';
    image.sizes = sizes;
    image.srcset = srcSet;
    image.src = src;

    const finish = () => {
      if (image.decode) {
        image.decode().then(resolve).catch(resolve);
        return;
      }
      resolve();
    };

    image.onload = finish;
    image.onerror = resolve;
    if (image.complete) finish();
  });
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

/* ─── Floating Water Bubbles (CSS-only, GPU composited) ────────────────── */
function seededUnit(index, salt) {
  const value = Math.sin(index * 47.13 + salt * 19.97) * 10000;
  return value - Math.floor(value);
}

const WaterBubbles = memo(function WaterBubbles({ isMobile }) {
  const bubbles = useMemo(() =>
    Array.from({ length: isMobile ? 4 : 8 }, (_, i) => ({
      id: i,
      size: seededUnit(i, 1) * (isMobile ? 14 : 22) + 5,
      left: seededUnit(i, 2) * 100,
      delay: seededUnit(i, 3) * 10,
      duration: seededUnit(i, 4) * (isMobile ? 8 : 14) + (isMobile ? 12 : 10),
      opacity: seededUnit(i, 5) * (isMobile ? 0.06 : 0.1) + 0.03,
    })), [isMobile]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
});

/* ─── App ────────────────────────────────────────────────────────────────── */
export default function App() {
  const isMobile = useIsMobile();

  useEffect(() => {
    let cancelled = false;
    const maxWait = window.setTimeout(() => {
      if (!cancelled) window.__hideLoading?.();
    }, 5200);

    Promise.all([
      waitForWindowLoad(),
      document.fonts?.ready ?? Promise.resolve(),
      Promise.all(CRITICAL_IMAGES.map(preloadImage)),
      wait(1100),
    ]).then(() => {
      if (cancelled) return;
      window.clearTimeout(maxWait);
      window.requestAnimationFrame(() => window.__hideLoading?.());
    });

    return () => {
      cancelled = true;
      window.clearTimeout(maxWait);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
    <div className="bg-[#020b14] text-white font-sans antialiased selection:bg-[#00d4f0]/25 overflow-x-hidden relative">

      {/* ── FLOATING BUBBLES (CSS-driven, 0 JS animation threads) ── */}
      <WaterBubbles isMobile={isMobile} />

      {/* ── AMBIENT BACKGROUND GLOWS ─ static, no layout-triggering animation ── */}
      {/* Cold aqua blob — top left */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] sm:w-[700px] sm:h-[700px] bg-[#00d4f0]/[0.04] rounded-full blur-[70px] sm:blur-[160px] pointer-events-none" />
      {/* Cold aqua blob — mid right */}
      <div className="absolute top-[1400px] right-0 w-[360px] h-[360px] sm:w-[900px] sm:h-[900px] bg-[#0ba3d4]/[0.04] rounded-full blur-[80px] sm:blur-[200px] pointer-events-none" />
      {/* Warm stone blob — between sections */}
      <div className="absolute top-[800px] left-1/3 w-[280px] h-[220px] sm:w-[500px] sm:h-[400px] bg-[#c8a96e]/[0.03] rounded-full blur-[70px] sm:blur-[140px] pointer-events-none" />
      {/* Deep anchor glow — very bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[220px] sm:w-[1000px] sm:h-[400px] bg-[#0ba3d4]/[0.05] rounded-full blur-[80px] sm:blur-[180px] pointer-events-none" />

      {/* ── NAVIGATION ── */}
      <Navbar />

      {/* ── SECTIONS ── */}
      <HeroSection
        isMobile={isMobile}
      />
      <div className="section-shell">
        <TransformationSection />
      </div>
      <div className="section-shell">
        <ServicesSection />
      </div>
      <div className="section-shell">
        <ExperienceSection />
      </div>
      <div className="section-shell">
        <ServiceAreas />
      </div>
      <div className="section-shell">
        <MembershipPlans />
      </div>
      <div className="section-shell">
        <FAQSection />
      </div>
      <div className="section-shell">
        <CTASection isMobile={isMobile} />
      </div>
      <div className="section-shell">
        <Footer />
      </div>

    </div>
    </MotionConfig>
  );
}
