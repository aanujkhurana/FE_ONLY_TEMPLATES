import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import Modular Components
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

// Floating bubbles component for authentic liquid atmosphere
function WaterBubbles() {
  const [bubbles] = useState(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 20 + 6, // 6px to 26px
      left: Math.random() * 100, // percentage
      delay: Math.random() * 8, // seconds delay
      duration: Math.random() * 12 + 10, // 10s to 22s travel duration
      opacity: Math.random() * 0.12 + 0.04
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: "110vh", x: 0, scale: 0.8, opacity: 0 }}
          animate={{
            y: "-10vh",
            x: [0, Math.sin(b.id) * 30, -Math.sin(b.id) * 35, 0],
            scale: [0.8, 1.1, 0.9, 1.2],
            opacity: [0, b.opacity, b.opacity, 0]
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
          }}
          className="bubble"
        />
      ))}
    </div>
  );
}

export default function App() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeFaq, setActiveFaq] = useState(null);
  const beforeAfterRef = useRef(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);

  const handleSliderMove = (clientX) => {
    if (!beforeAfterRef.current) return;
    const rect = beforeAfterRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div className="bg-[#020b14] text-white font-sans antialiased selection:bg-[#00f2fe]/30 overflow-x-hidden relative">
      
      {/* FLOATING WATER BUBBLES */}
      <WaterBubbles />

      {/* BACKGROUND REFRACTION GLOWS */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00f2fe]/5 rounded-full filter blur-[150px] pointer-events-none animate-refract-slow" />
      <div className="absolute top-[1200px] right-1/4 w-[800px] h-[800px] bg-[#4facfe]/5 rounded-full filter blur-[180px] pointer-events-none animate-refract-slower" />

      {/* Sticky Luxury Navigation */}
      <Navbar />

      {/* 1. Cinematic Hero Section */}
      <HeroSection backgroundY={backgroundY} />

      {/* 2. Addictive Before/After Transformation Slider */}
      <TransformationSection 
        beforeAfterRef={beforeAfterRef} 
        handleSliderMove={handleSliderMove} 
        sliderPosition={sliderPosition} 
      />

      {/* 3. Premium Services Grid */}
      <ServicesSection />

      {/* 4. Immersive Experience Section */}
      <ExperienceSection />

      {/* 5. Elegant Service Suburbs */}
      <ServiceAreas />

      {/* 6. SaaS-Style Membership Plans */}
      <MembershipPlans />

      {/* 7. Accordion FAQ Section */}
      <FAQSection activeFaq={activeFaq} setActiveFaq={setActiveFaq} />

      {/* 8. Cinematic Final Call To Action */}
      <CTASection />

      {/* 9. Premium Footer */}
      <Footer />

    </div>
  );
}