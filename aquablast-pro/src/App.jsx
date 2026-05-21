import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

/* ─── Floating Water Bubbles ────────────────────────────────────────────── */
function WaterBubbles() {
  const [bubbles] = useState(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      size: Math.random() * 22 + 5,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 14 + 10,
      opacity: Math.random() * 0.1 + 0.03,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: '110vh', x: 0, scale: 0.8, opacity: 0 }}
          animate={{
            y: '-10vh',
            x: [0, Math.sin(b.id) * 28, -Math.sin(b.id) * 32, 0],
            scale: [0.8, 1.1, 0.9, 1.15],
            opacity: [0, b.opacity, b.opacity, 0],
          }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', left: `${b.left}%`, width: b.size, height: b.size }}
          className="bubble"
        />
      ))}
    </div>
  );
}

/* ─── App ────────────────────────────────────────────────────────────────── */
export default function App() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeFaq, setActiveFaq] = useState(null);
  const beforeAfterRef = useRef(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 220]);

  const handleSliderMove = (clientX) => {
    if (!beforeAfterRef.current) return;
    const rect = beforeAfterRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div className="bg-[#020b14] text-white font-sans antialiased selection:bg-[#00d4f0]/25 overflow-x-hidden relative">

      {/* ── FLOATING BUBBLES ── */}
      <WaterBubbles />

      {/* ── AMBIENT BACKGROUND GLOWS ─ dual-temperature: cold aqua + warm gold ── */}
      {/* Cold aqua blob — top left */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[#00d4f0]/[0.04] rounded-full filter blur-[160px] pointer-events-none animate-refract-slow" />
      {/* Cold aqua blob — mid right */}
      <div className="absolute top-[1400px] right-0 w-[900px] h-[900px] bg-[#0ba3d4]/[0.04] rounded-full filter blur-[200px] pointer-events-none animate-refract-slower" />
      {/* Warm stone blob — between sections (the key addition) */}
      <div className="absolute top-[800px] left-1/3 w-[500px] h-[400px] bg-[#c8a96e]/[0.03] rounded-full filter blur-[140px] pointer-events-none" />
      {/* Deep anchor glow — very bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#0ba3d4]/[0.05] rounded-full filter blur-[180px] pointer-events-none" />

      {/* ── NAVIGATION ── */}
      <Navbar />

      {/* ── SECTIONS ── */}
      <HeroSection backgroundY={backgroundY} />
      <TransformationSection
        beforeAfterRef={beforeAfterRef}
        handleSliderMove={handleSliderMove}
        sliderPosition={sliderPosition}
      />
      <ServicesSection />
      <ExperienceSection />
      <ServiceAreas />
      <MembershipPlans />
      <FAQSection activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
      <CTASection />
      <Footer />

    </div>
  );
}