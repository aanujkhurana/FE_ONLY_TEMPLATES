import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu } from 'lucide-react';

// --- ANIMATION CONFIGURATION ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function CandleStudio() {
  return (
    <div className="relative w-full min-h-screen bg-[#f3ece4] text-[#1a1716] font-sans selection:bg-[#4a2b29] selection:text-[#f3ece4] overflow-x-hidden">
      
      {/* GLOBAL PAPER GRAIN & INK WASH TEXTURE */}
      <div 
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.035] mix-blend-multiply"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 mix-blend-difference text-[#f3ece4]">
        <div className="text-xs tracking-[0.2em] font-medium uppercase">Atelier</div>
        <button className="flex gap-2 items-center text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
          Menu <Menu size={16} strokeWidth={1.5} />
        </button>
      </nav>

      {/* 1. CINEMATIC EDITORIAL HERO */}
      <section className="relative w-full h-screen flex flex-col justify-end p-6 md:p-12 bg-[#4a2b29] text-[#f3ece4] overflow-hidden">
        {/* Soft Bleeding Wash Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(243,236,228,0.1)_0%,_transparent_60%)] pointer-events-none" />
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/4202392/pexels-photo-4202392.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Sculptural Candle Atmospheric" 
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-105 animate-[slowPan_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-12 border-b-[0.5px] border-[#f3ece4]/30 pb-8">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="flex-1"
          >
            <motion.h1 variants={fadeUp} className="font-serif text-6xl md:text-8xl lg:text-[10vw] leading-[0.85] tracking-tight">
              SCENT, <br/> DESIGNED.
            </motion.h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
            className="w-full md:w-1/3 flex flex-col gap-6"
          >
            <p className="text-sm md:text-base font-light tracking-wide leading-relaxed opacity-80">
              Sculptural atmosphere poured by hand. We design light and shadow to change the emotional architecture of a room.
            </p>
            <button className="group flex items-center gap-3 text-xs tracking-[0.2em] uppercase border-b-[0.5px] border-[#f3ece4]/30 pb-2 w-fit">
              Explore the Archive 
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. BRAND PHILOSOPHY STATEMENT */}
      <section className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-[#f3ece4] flex justify-center items-center">
        {/* Subtle watercolor texture background */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#e6dcd0] rounded-full blur-[120px] opacity-60 pointer-events-none" />
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="max-w-4xl text-center relative z-10"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight text-[#2a2220]">
            A poetic collision of raw wax, braided wicks, and soft atmospheric washes. <br/>
            <span className="italic text-[#8c6b65]">Not just lit, but experienced.</span>
          </h2>
        </motion.div>
      </section>

      {/* 3. SIGNATURE CANDLE COLLECTION SHOWCASE */}
      <section className="w-full bg-[#f3ece4] px-6 md:px-12 pb-32">
        <div className="flex justify-between items-end border-b-[0.5px] border-[#1a1716]/20 pb-6 mb-16">
          <h3 className="text-xs tracking-[0.2em] uppercase">Signature Forms</h3>
          <span className="text-xs tracking-[0.2em] opacity-50">01 / 03</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          {/* Product 1: Asymmetrical Left */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-5 md:col-start-2 flex flex-col gap-6 group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d5]">
              <img 
                src="https://images.pexels.com/photos/672051/pexels-photo-672051.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="The Monolith Candle" 
                className="w-full h-full object-cover mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start pt-4 border-t-[0.5px] border-[#1a1716]/20">
              <div>
                <h4 className="font-serif text-2xl mb-1">The Monolith</h4>
                <p className="text-xs tracking-widest text-[#8c6b65] uppercase">Smoked Vetiver & Fig</p>
              </div>
              <span className="text-sm tracking-wide">$120</span>
            </div>
          </motion.div>

          {/* Product 2: Asymmetrical Right, Pushed Down */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="md:col-span-4 md:col-start-8 md:mt-32 flex flex-col gap-6 group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#e8e0d5]">
              <img 
                src="https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="The Arc Candle" 
                className="w-full h-full object-cover mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start pt-4 border-t-[0.5px] border-[#1a1716]/20">
              <div>
                <h4 className="font-serif text-2xl mb-1">The Arc</h4>
                <p className="text-xs tracking-widest text-[#8c6b65] uppercase">Bergamot & Pale Amber</p>
              </div>
              <span className="text-sm tracking-wide">$95</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SENSORY STORYTELLING */}
      <section className="w-full h-[80vh] md:h-screen relative flex items-center justify-center overflow-hidden bg-[#2a2d24]">
        <img 
          src="https://images.pexels.com/photos/1005731/pexels-photo-1005731.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Abstract Wax Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[#2a2d24]/30 mix-blend-overlay"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
          className="relative z-10 text-center text-[#f3ece4] px-6"
        >
          <h2 className="font-serif text-5xl md:text-8xl italic font-light mb-6">Melt into memory.</h2>
          <p className="text-sm md:text-base tracking-[0.2em] uppercase opacity-70">A study in transient beauty.</p>
        </motion.div>
      </section>

      {/* 5. CRAFTSMANSHIP PRESENTATION */}
      <section className="w-full py-24 md:py-40 px-6 md:px-12 bg-[#f3ece4]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="order-2 md:order-1"
          >
            <h3 className="text-xs tracking-[0.2em] uppercase mb-8 border-b-[0.5px] border-[#1a1716]/20 pb-4 inline-block w-full">The Process</h3>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Fine ink outlines conceptualize the form. Hands mold the substance.
            </h2>
            <p className="text-[#1a1716]/70 leading-relaxed font-light text-lg mb-8 max-w-md">
              Each piece is individually poured in our studio using custom-blended botanical waxes. Imperfections are not flaws; they are the physical signature of human hands at work.
            </p>
            <button className="text-xs tracking-[0.2em] uppercase hover:opacity-60 transition-opacity flex items-center gap-2">
              Read the Manifesto <ArrowUpRight size={14} />
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="order-1 md:order-2 aspect-square bg-[#d9d0c5] p-4 md:p-8"
          >
            <div className="w-full h-full border-[0.5px] border-[#1a1716]/30 relative overflow-hidden">
               {/* Simulating a fine-art process shot */}
               <img 
                  src="https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Studio Process"
                  className="w-full h-full object-cover mix-blend-multiply grayscale opacity-80"
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. STRONG ARTISTIC CTA */}
      <section className="w-full bg-[#1a1716] text-[#f3ece4] py-32 md:py-48 px-6 flex flex-col items-center justify-center text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="text-xs tracking-[0.3em] uppercase mb-8 opacity-60">Curate Your Space</p>
          <h2 className="font-serif text-5xl md:text-8xl hover:italic transition-all duration-500 cursor-pointer mb-12">
            ACQUIRE THE <br/> ATMOSPHERE
          </h2>
          <button className="bg-[#f3ece4] text-[#1a1716] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#d9d0c5] transition-colors">
            Enter the Boutique
          </button>
        </motion.div>
      </section>

      {/* 7. PREMIUM EDITORIAL FOOTER */}
      <footer className="w-full bg-[#1a1716] text-[#f3ece4] px-6 md:px-12 py-12 border-t-[0.5px] border-[#f3ece4]/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-serif text-3xl mb-6">STUDIO FORM</h4>
            <p className="text-xs tracking-widest uppercase opacity-50 max-w-xs leading-relaxed">
              Elevated sensory objects for the modern sanctuary. Hand-poured in limited editions.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm font-light tracking-wide opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Archive</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Scent Index</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Philosophy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
          <div className="flex flex-col gap-4 text-sm font-light tracking-wide opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Pinterest</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Newsletter</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-[0.5px] border-[#f3ece4]/20 text-[10px] tracking-widest uppercase opacity-40">
          <p>© {new Date().getFullYear()} STUDIO FORM. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}