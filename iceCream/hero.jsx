import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroCinematic() {
  // Mouse tracking for cinematic 3D parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 100, mass: 2 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D Rotations (Stage tilt)
  const rotateX = useTransform(smoothY, [0, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [0, 1], [-8, 8]);

  // Parallax Depth Mapping (Z-axis and XY offsets for layers)
  const bgX = useTransform(smoothX, [0, 1], [-20, 20]);
  const bgY = useTransform(smoothY, [0, 1], [-20, 20]);
  
  const midX = useTransform(smoothX, [0, 1], [-10, 10]);
  const midY = useTransform(smoothY, [0, 1], [-10, 10]);

  const fgX = useTransform(smoothX, [0, 1], [30, -30]);
  const fgY = useTransform(smoothY, [0, 1], [30, -30]);

  const extremeFgX = useTransform(smoothX, [0, 1], [80, -80]);
  const extremeFgY = useTransform(smoothY, [0, 1], [80, -80]);

  // Dynamic Lighting Spotlight
  const lightX = useTransform(smoothX, [0, 1], ['0%', '100%']);
  const lightY = useTransform(smoothY, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Inject Fonts for immediate preview accuracy */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'DM Sans', sans-serif; }
        .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E"); }
      `}</style>

      <section className="relative w-full h-screen overflow-hidden bg-[#0B1A2E] font-sans selection:bg-[#D45850] selection:text-[#0B1A2E]">
        
        {/* ================= BACKGROUND ATMOSPHERE ================= */}
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-60">
          <motion.div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle 800px at ${lightX} ${lightY}, rgba(212,88,80,0.15) 0%, transparent 80%)`
            }}
          />
          <div className="absolute inset-0 bg-noise opacity-100 mix-blend-overlay"></div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-12 py-8 mix-blend-difference">
          <div className="font-playfair text-2xl font-black tracking-[0.25em] text-[#F5E6C8]">GIVRÉ</div>
          <ul className="hidden md:flex gap-10 list-none">
            {['Flavors', 'Seasonal', 'About', 'Order'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-xs tracking-[0.2em] text-[#F5E6C8]/60 uppercase hover:text-[#F5E6C8] transition-colors duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ================= 3D STAGE ================= */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ perspective: '1200px' }}>
          <motion.div 
            className="relative w-full h-full flex items-center justify-center transform-style-3d"
            style={{ rotateX, rotateY }}
          >
            
            {/* LAYER 1: Background Typography (Behind Product) */}
            <motion.div 
              className="absolute w-full h-full flex flex-col justify-center items-start pl-[5%] md:pl-[10%]"
              style={{ x: bgX, y: bgY, translateZ: -100 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="flex items-center gap-4 mb-4 text-[#D45850]"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">Artisanal Ice Cream</span>
              </motion.div>
              
              <h1 className="font-playfair font-black leading-[0.85] text-[#F5E6C8] opacity-90 select-none">
                <motion.span 
                  initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="block text-[12vw] md:text-[9vw] tracking-tighter"
                >
                  MELT
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                  className="block text-[12vw] md:text-[9vw] tracking-tighter"
                >
                  INTO
                </motion.span>
              </h1>
            </motion.div>

            {/* LAYER 2: 3D Product (Deconstructed SVG Parallax) */}
            <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-[15%] pointer-events-none transform-style-3d">
              
              {/* Product Glow */}
              <motion.div 
                className="absolute w-[400px] h-[400px] bg-[#F5E6C8] rounded-full blur-[120px] opacity-10 mix-blend-screen"
                style={{ translateZ: 0 }}
              />

              {/* 2A: The Cone (Base Depth) */}
              <motion.div 
                className="absolute w-[380px] h-[500px]"
                style={{ x: bgX, y: bgY, translateZ: 0 }}
              >
                <motion.svg animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} viewBox="0 0 380 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M130 300 L190 490 L250 300 Z" fill="#C4813A" opacity="0.9"/>
                  <path d="M130 300 L190 490 L250 300 Z" fill="url(#coneGrad)" opacity="0.5"/>
                  <path d="M135 315 L188 478" stroke="#A06828" stroke-width="1.5" opacity="0.6"/>
                  <path d="M148 310 L190 470" stroke="#A06828" stroke-width="1.5" opacity="0.6"/>
                  <path d="M162 306 L191 462" stroke="#A06828" stroke-width="1.5" opacity="0.5"/>
                  <path d="M178 303 L192 455" stroke="#A06828" stroke-width="1.5" opacity="0.5"/>
                  <path d="M195 303 L192 447" stroke="#A06828" stroke-width="1.5" opacity="0.5"/>
                  <path d="M133 320 L247 320" stroke="#A06828" stroke-width="1" opacity="0.4"/>
                  <path d="M140 340 L240 340" stroke="#A06828" stroke-width="1" opacity="0.4"/>
                  <path d="M148 360 L232 360" stroke="#A06828" stroke-width="1" opacity="0.4"/>
                  <path d="M158 380 L222 380" stroke="#A06828" stroke-width="1" opacity="0.4"/>
                  <defs>
                    <linearGradient id="coneGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="#F0A050"/>
                      <stop offset="100%" stop-color="#703800"/>
                    </linearGradient>
                  </defs>
                </motion.svg>
              </motion.div>

              {/* 2B: Pistachio Scoop (Mid Depth) */}
              <motion.div 
                className="absolute w-[380px] h-[500px]"
                style={{ x: midX, y: midY, translateZ: 50 }}
              >
                <motion.svg animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} viewBox="0 0 380 500" fill="none">
                  <ellipse cx="190" cy="295" rx="80" ry="65" fill="#7BAF52"/>
                  <ellipse cx="190" cy="295" rx="80" ry="65" fill="url(#pistGrad)"/>
                  <ellipse cx="190" cy="285" rx="70" ry="52" fill="#8DC462" opacity="0.6"/>
                  <ellipse cx="165" cy="272" rx="25" ry="15" fill="#A8D97A" opacity="0.5"/>
                  <defs>
                    <radialGradient id="pistGrad" cx="35%" cy="35%">
                      <stop offset="0%" stop-color="#A8D980" stop-opacity="0.6"/>
                      <stop offset="100%" stop-color="#3A6E20" stop-opacity="0.4"/>
                    </radialGradient>
                  </defs>
                </motion.svg>
              </motion.div>

              {/* 2C: Strawberry Scoop (Forward Depth) */}
              <motion.div 
                className="absolute w-[380px] h-[500px]"
                style={{ x: fgX, y: fgY, translateZ: 100 }}
              >
                <motion.svg animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} viewBox="0 0 380 500" fill="none">
                  <ellipse cx="190" cy="220" rx="75" ry="68" fill="#E85070"/>
                  <ellipse cx="190" cy="220" rx="75" ry="68" fill="url(#strawGrad)"/>
                  <ellipse cx="172" cy="204" rx="30" ry="20" fill="#F07090" opacity="0.55"/>
                  <ellipse cx="155" cy="198" rx="12" ry="8" fill="#F8A0B0" opacity="0.4"/>
                  {/* Strawberry Drips */}
                  <path d="M248 200 Q262 215 258 235 Q255 248 252 255" stroke="#E85070" stroke-width="14" stroke-linecap="round" fill="none" opacity="0.85"/>
                  <circle cx="252" cy="257" r="9" fill="#E85070" opacity="0.85"/>
                  <path d="M132 240 Q118 252 122 270 Q125 283 128 290" stroke="#E85070" stroke-width="10" stroke-linecap="round" fill="none" opacity="0.7"/>
                  <defs>
                    <radialGradient id="strawGrad" cx="35%" cy="35%">
                      <stop offset="0%" stop-color="#F080A0" stop-opacity="0.5"/>
                      <stop offset="100%" stop-color="#A02040" stop-opacity="0.4"/>
                    </radialGradient>
                  </defs>
                </motion.svg>
              </motion.div>

              {/* 2D: Vanilla Scoop & Flake (Extreme Forward Depth) */}
              <motion.div 
                className="absolute w-[380px] h-[500px]"
                style={{ x: extremeFgX, y: extremeFgY, translateZ: 150 }}
              >
                <motion.svg animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} viewBox="0 0 380 500" fill="none">
                  <ellipse cx="190" cy="150" rx="70" ry="68" fill="#F5E0A0"/>
                  <ellipse cx="190" cy="150" rx="70" ry="68" fill="url(#vanGrad)"/>
                  <ellipse cx="168" cy="133" rx="28" ry="18" fill="#FFF0C0" opacity="0.6"/>
                  <ellipse cx="155" cy="127" rx="12" ry="7" fill="#FFFAE0" opacity="0.5"/>
                  <path d="M255 155 Q268 162 270 178 Q272 190 268 200" stroke="#F5E0A0" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.75"/>
                  <circle cx="267" cy="202" r="7" fill="#F5E0A0" opacity="0.75"/>
                  <ellipse cx="210" cy="100" rx="8" ry="22" fill="#6B3A1F" transform="rotate(25 210 100)" opacity="0.9"/>
                  {/* Highlights */}
                  <ellipse cx="168" cy="133" rx="22" ry="12" fill="white" opacity="0.4" transform="rotate(-20 168 133)"/>
                  <defs>
                    <radialGradient id="vanGrad" cx="35%" cy="35%">
                      <stop offset="0%" stop-color="#FFFCE0" stop-opacity="0.7"/>
                      <stop offset="100%" stop-color="#C8A840" stop-opacity="0.3"/>
                    </radialGradient>
                  </defs>
                </motion.svg>
              </motion.div>
            </div>

            {/* LAYER 3: Foreground Typography (Overlapping the product) */}
            <motion.div 
              className="absolute w-full h-full flex flex-col justify-center items-start pl-[5%] md:pl-[10%] pt-[20vh] md:pt-[25vh]"
              style={{ x: fgX, y: fgY, translateZ: 200 }}
            >
              <h1 className="font-playfair font-black leading-[0.85] text-[#D45850] italic select-none drop-shadow-2xl">
                <motion.span 
                  initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                  animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                  className="block text-[13vw] md:text-[10vw] tracking-tighter ml-12 md:ml-24"
                >
                  COLOR.
                </motion.span>
              </h1>
            </motion.div>

            {/* LAYER 4: Cinematic Bokeh / Out of focus extreme foreground */}
            <motion.div 
               className="absolute inset-0 pointer-events-none"
               style={{ x: extremeFgX, y: extremeFgY, translateZ: 300 }}
            >
               <motion.div 
                 animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute top-[20%] left-[60%] w-6 h-6 rounded-full bg-[#E85070] blur-[8px] opacity-40"
               />
               <motion.div 
                 animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="absolute bottom-[30%] left-[20%] w-12 h-12 rounded-full bg-[#F5E0A0] blur-[12px] opacity-20"
               />
            </motion.div>

          </motion.div>
        </div>

        {/* ================= UI FOREGROUND & CTA ================= */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-end z-50 pointer-events-auto">
          
          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-[320px] mb-8 md:mb-0"
          >
            <p className="text-sm md:text-base leading-[1.8] text-[#F5E6C8]/60 font-light mix-blend-screen">
              Each scoop is a deliberate act of flavor, form, and obsession. Not dessert — a sensory event.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.a 
            href="#flavors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="group relative inline-flex items-center gap-6 bg-[#D45850] text-[#0B1A2E] px-8 py-4 text-[10px] md:text-xs tracking-[0.25em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:bg-[#F5E6C8]"
          >
            <span className="relative z-10">Explore Flavors</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            
            {/* CTA Hover Effect */}
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-0" />
          </motion.a>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-12 hidden md:block text-[9px] tracking-[0.4em] text-[#F5E6C8]/40 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </motion.div>
      </section>
    </>
  );
}