import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';

// --- THEME & CONFIGURATION ---
// Colors used via arbitrary Tailwind classes to ensure plug-and-play functionality:
// Sandstone: #EAE4D9 | Warm Beige: #F7F5F0 | Deep Forest: #1A231E 
// Olive: #4C5444 | Charcoal: #202A25 | Warm White: #FAFAF8

const transition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: transition
};

export default function LuxuryLandscape() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="bg-[#F7F5F0] text-[#202A25] font-sans antialiased selection:bg-[#4C5444] selection:text-[#F7F5F0]">
      <Navigation />
      <main>
        <Hero yBg={yBg} />
        <DesignPhilosophy />
        <FeaturedProjects />
        <Services />
        <Process />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

// --- COMPONENTS ---

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6 flex justify-between items-center ${
        scrolled ? 'bg-[#F7F5F0]/90 backdrop-blur-md py-4' : 'bg-transparent'
      }`}
    >
      <div className="text-xl font-serif tracking-widest uppercase text-[#202A25]">
        Aethel & Co.
      </div>
      <div className="hidden md:flex gap-12 text-sm tracking-widest uppercase font-medium text-[#202A25]/70">
        <a href="#philosophy" className="hover:text-[#202A25] transition-colors">Philosophy</a>
        <a href="#projects" className="hover:text-[#202A25] transition-colors">Projects</a>
        <a href="#services" className="hover:text-[#202A25] transition-colors">Services</a>
      </div>
      <button className="text-sm uppercase tracking-widest border-b border-[#202A25] pb-1 hover:text-[#4C5444] hover:border-[#4C5444] transition-all">
        Consultation
      </button>
    </motion.nav>
  );
}

function Hero({ yBg }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center relative z-10">
        
        {/* Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="overflow-hidden"
          >
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tight text-[#202A25]">
              Spaces<br/>
              <span className="italic font-light text-[#4C5444]">Designed</span><br/>
              To Breathe.
            </h1>
          </motion.div>
          
          <motion.p 
            {...fadeUp}
            transition={{ ...transition, delay: 0.6 }}
            className="mt-12 text-lg md:text-xl max-w-md font-light leading-relaxed text-[#202A25]/80"
          >
            We sculpt the natural world with architectural precision, creating immersive outdoor sanctuaries for high-end residential living.
          </motion.p>
          
          <motion.div 
            {...fadeUp}
            transition={{ ...transition, delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <button className="group flex items-center gap-4 text-sm tracking-widest uppercase font-semibold border border-[#202A25] px-8 py-4 hover:bg-[#202A25] hover:text-[#F7F5F0] transition-all duration-500">
              Discover Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </motion.div>
        </div>

        {/* Cinematic Imagery */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative h-[60vh] lg:h-[85vh] w-full"
        >
          <div className="absolute inset-0 bg-[#202A25]/10 mix-blend-overlay z-10" />
          <motion.img 
            style={{ y: yBg }}
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
            alt="Luxury architectural landscape" 
            className="w-full h-[120%] object-cover object-center absolute top-[-10%]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function DesignPhilosophy() {
  return (
    <section id="philosophy" className="py-32 md:py-48 px-6 md:px-12 bg-[#EAE4D9]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <motion.div {...fadeUp} className="md:w-1/3">
          <span className="text-xs tracking-[0.3em] uppercase text-[#4C5444] font-semibold border-b border-[#4C5444] pb-2">
            Our Philosophy
          </span>
        </motion.div>
        <motion.div {...fadeUp} className="md:w-2/3">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight text-[#202A25]">
            Landscapes are not merely built. They are cultivated with deep reverence for nature, engineered to merge seamlessly with architectural form.
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-[#202A25]/75 font-light leading-relaxed">
            <p>
              We approach every terrain as a blank canvas, understanding the subtle dialogue between soil, light, and stone. Our design language speaks in textures, shadows, and the organic flow of seasons.
            </p>
            <p>
              By prioritizing sustainable craftsmanship and intentional materiality, we shape environments that age beautifully—outdoor spaces that pull you outside and invite you to linger.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      title: "The Glasshouse Retreat",
      category: "Landscape Architecture & Pool",
      img: "https://images.unsplash.com/photo-1576013551627-11971f36c953?q=80&w=2069&auto=format&fit=crop",
      alignment: "left"
    },
    {
      title: "Coastal Pavilion",
      category: "Outdoor Living & Botany",
      img: "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=2070&auto=format&fit=crop",
      alignment: "right"
    }
  ];

  return (
    <section id="projects" className="py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 {...fadeUp} className="font-serif text-5xl md:text-7xl mb-32 text-center text-[#202A25]">
          Selected Works
        </motion.h2>

        <div className="space-y-40">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={transition}
              className={`flex flex-col ${project.alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}
            >
              <div className="w-full md:w-3/5 overflow-hidden group">
                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <span className="text-xs tracking-[0.2em] uppercase text-[#4C5444] mb-4">
                  {project.category}
                </span>
                <h3 className="font-serif text-4xl md:text-5xl mb-8 text-[#202A25]">
                  {project.title}
                </h3>
                <button className="self-start text-sm uppercase tracking-widest border-b border-[#202A25] pb-1 hover:text-[#4C5444] hover:border-[#4C5444] transition-all flex items-center gap-2">
                  View Case Study <MoveRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    "Landscape Architecture",
    "Botanical Curation",
    "Pool & Water Environments",
    "Custom Stonework & Paving",
    "Atmospheric Lighting"
  ];

  return (
    <section id="services" className="py-32 bg-[#202A25] text-[#F7F5F0] px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <motion.h2 {...fadeUp} className="font-serif text-5xl md:text-7xl w-full md:w-1/2">
            Crafting The<br/>External Realm.
          </motion.h2>
          <motion.p {...fadeUp} className="w-full md:w-1/3 text-[#F7F5F0]/70 font-light leading-relaxed">
            Our disciplines merge architectural rigor with horticultural mastery. We oversee every detail, from the conceptual blueprint to the final laying of stone.
          </motion.p>
        </div>

        <div className="flex flex-col border-t border-[#F7F5F0]/20">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group py-10 border-b border-[#F7F5F0]/20 flex justify-between items-center cursor-pointer hover:px-6 transition-all duration-500"
            >
              <h3 className="font-serif text-3xl md:text-5xl text-[#F7F5F0]/80 group-hover:text-[#F7F5F0] transition-colors">
                {service}
              </h3>
              <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-[#EAE4D9]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-[#F7F5F0]">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-24">
          <span className="text-xs tracking-[0.3em] uppercase text-[#4C5444] font-semibold border-b border-[#4C5444] pb-2">
            The Journey
          </span>
        </motion.div>

        <div className="relative border-l border-[#202A25]/20 pl-8 md:pl-16 space-y-24">
          {[
            { step: "01", title: "Topography & Vision", desc: "We begin by walking the land, studying the existing ecosystem, architecture, and your aspirations to form a cohesive vision." },
            { step: "02", title: "Architectural Blueprint", desc: "Conceptual sketches evolve into precise architectural plans, detailing materiality, elevation, and botanical palettes." },
            { step: "03", title: "Master Craftsmanship", desc: "Our artisans and horticulturists sculpt the terrain, meticulously executing the design with uncompromising quality." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...transition, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-[33px] md:-left-[65px] top-1 w-2 h-2 bg-[#4C5444] rounded-full" />
              <span className="text-sm font-serif italic text-[#4C5444] mb-2 block">Phase {item.step}</span>
              <h4 className="font-serif text-3xl md:text-4xl text-[#202A25] mb-4">{item.title}</h4>
              <p className="text-[#202A25]/70 font-light leading-relaxed max-w-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#EAE4D9] flex items-center justify-center">
      <motion.div 
        {...fadeUp}
        className="max-w-5xl mx-auto text-center"
      >
        <p className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-[#202A25] mb-12">
          "They did not just landscape our property; they redefined how we live. Our outdoor space is now a sanctuary of quiet luxury and architectural beauty."
        </p>
        <div className="uppercase tracking-[0.2em] text-sm text-[#4C5444] font-semibold">
          — The Harrison Residence
        </div>
      </motion.div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-48 px-6 md:px-12 bg-[#1A231E] overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1533460004989-cef01064af7e?q=80&w=2070&auto=format&fit=crop" 
          alt="Dark foliage texture" 
          className="w-full h-full object-cover"
        />
      </div>
      <motion.div 
        {...fadeUp}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
      >
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F7F5F0] mb-12 tracking-tight">
          Design Your<br/>
          <span className="italic text-[#EAE4D9] font-light">Outdoor Sanctuary.</span>
        </h2>
        <button className="bg-[#F7F5F0] text-[#1A231E] px-10 py-5 text-sm uppercase tracking-widest font-semibold hover:bg-[#EAE4D9] transition-colors duration-500">
          Request a Consultation
        </button>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1A231E] pt-24 pb-12 px-6 md:px-12 text-[#F7F5F0]/60 border-t border-[#F7F5F0]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="md:col-span-2">
          <div className="text-2xl font-serif tracking-widest uppercase text-[#F7F5F0] mb-6">
            Aethel & Co.
          </div>
          <p className="max-w-sm font-light text-sm leading-relaxed">
            Elevating outdoor living through masterful landscape architecture, intentional design, and uncompromising craftsmanship.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-[#F7F5F0] text-xs uppercase tracking-[0.2em] mb-4">Studio</h4>
          <a href="#" className="hover:text-[#F7F5F0] text-sm transition-colors">Philosophy</a>
          <a href="#" className="hover:text-[#F7F5F0] text-sm transition-colors">Selected Works</a>
          <a href="#" className="hover:text-[#F7F5F0] text-sm transition-colors">Disciplines</a>
          <a href="#" className="hover:text-[#F7F5F0] text-sm transition-colors">Journal</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-[#F7F5F0] text-xs uppercase tracking-[0.2em] mb-4">Connect</h4>
          <a href="#" className="hover:text-[#F7F5F0] text-sm transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#F7F5F0] text-sm transition-colors">Pinterest</a>
          <a href="#" className="hover:text-[#F7F5F0] text-sm transition-colors">Architecture Digest</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs tracking-widest pt-8 border-t border-[#F7F5F0]/10">
        <p>&copy; {new Date().getFullYear()} AETHEL & CO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#F7F5F0] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#F7F5F0] transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}