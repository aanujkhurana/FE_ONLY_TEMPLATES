import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  Droplets,
  Leaf,
  Moon,
  Ruler,
  Shovel,
  Sparkles,
  SunMedium,
  Waves,
} from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];
const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-90px' },
  transition: { duration: 0.9, ease },
};

const heroTextGroup = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.12,
    },
  },
};

const heroTextItem = {
  initial: { opacity: 0, y: 28, filter: 'blur(5px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease },
  },
};

const images = {
  hero: 'https://images.unsplash.com/photo-1757439402277-1a88c7abc89d?q=80&w=1740&auto=format&fit=crop',
  pool: 'https://images.unsplash.com/photo-1622015663084-307d19eabbbf?auto=format&fit=crop&w=1800&q=82',
  courtyard: 'https://images.unsplash.com/photo-1659259540437-0fe84def75cf?auto=format&fit=crop&w=1500&q=82',
  stone: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=1500&q=82',
  foliage: 'https://images.unsplash.com/photo-1757439402342-976f4e0733ec?auto=format&fit=crop&w=1400&q=82',
  garden: 'https://images.unsplash.com/photo-1776362552930-fea1349d22af?auto=format&fit=crop&w=1500&q=82',
  texture: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1800&q=82',
};

const projects = [
  {
    title: 'Stonewell Residence',
    type: 'Pool landscape, terraces, evening lighting',
    location: 'Northern Beaches',
    img: images.pool,
    detail: 'A layered outdoor room shaped around water, hand-set stone, filtered shade, and a restrained planting palette that softens the architecture.',
    stats: ['38 native species', '92m2 reclaimed stone', '4 season planting'],
  },
  {
    title: 'Kamakura Courtyard',
    type: 'Japanese garden, courtyard renewal',
    location: 'Toorak',
    img: images.courtyard,
    detail: 'A quiet internal landscape where maple, moss, gravel, and timber thresholds turn a compact courtyard into a daily ritual.',
    stats: ['6 week install', 'Low water canopy', 'Hand-raked gravel'],
  },
  {
    title: 'Dune House Garden',
    type: 'Coastal outdoor living',
    location: 'Byron hinterland',
    img: images.stone,
    detail: 'A wind-conscious coastal garden with sculpted paths, sheltered gathering pockets, and materials chosen to patina with salt air.',
    stats: ['Salt-tolerant planting', 'Outdoor kitchen', 'Moonlit path'],
  },
];

const services = [
  ['Landscape Design', 'Concept plans, planting architecture, spatial flow, and material palettes for high-end residential sites.', Ruler],
  ['Garden Transformations', 'Full-site renewal from tired lawn and fragmented beds into layered, living outdoor environments.', Leaf],
  ['Outdoor Living', 'Dining terraces, lounges, fire settings, outdoor kitchens, shade structures, and calm gathering places.', SunMedium],
  ['Pool Landscaping', 'Resort-like pool surrounds with stone, planting, privacy, lighting, and water-conscious detailing.', Droplets],
  ['Paving & Stonework', 'Natural stone, steppers, walls, thresholds, gravel fields, and tactile architectural ground planes.', Shovel],
  ['Lighting & Maintenance', 'Atmospheric lighting, seasonal care, pruning, soil stewardship, and long-term garden evolution.', Moon],
];

const process = [
  ['Listen', 'We begin on site, reading light, slope, views, privacy, routines, and the emotional tone you want the garden to hold.'],
  ['Compose', 'Ideas become spatial studies, planting rhythm, water movement, materials, and a precise design language for the property.'],
  ['Craft', 'Our build teams shape each surface, edge, threshold, and planting layer with the patience of architectural workmanship.'],
  ['Evolve', 'The garden is guided after handover so it settles beautifully, matures intentionally, and keeps revealing itself.'],
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.45], ['-5%', '16%']);
  const textureY = useTransform(scrollYProgress, [0.45, 1], ['-8%', '8%']);

  return (
    <div className="min-h-screen bg-warm text-charcoal selection:bg-olive selection:text-warm">
      <Navigation />
      <main>
        <Hero heroY={heroY} />
        <Intro />
        <FeaturedProjects />
        <Services />
        <Philosophy textureY={textureY} />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled ? 'border-charcoal/10 bg-warm/95 shadow-[0_18px_60px_rgba(32,42,37,0.08)]' : 'border-warm/20 bg-transparent text-warm'
      }`}
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Aurea Grounds home">
          <span className="grid h-10 w-10 place-items-center border border-current/40 text-[11px] font-medium tracking-[0.22em]">AG</span>
          <span className="font-serif text-xl tracking-[0.08em]">Aurea Grounds</span>
        </a>
        <div className="hidden items-center gap-9 text-[12px] font-semibold uppercase tracking-[0.22em] lg:flex">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#services" className="nav-link">Disciplines</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#journal" className="nav-link">Notes</a>
        </div>
        <a href="#consultation" className="group inline-flex items-center gap-3 border border-current/50 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition hover:bg-charcoal hover:text-warm md:px-5">
          Enquire
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </nav>
    </motion.header>
  );
}

function Hero({ heroY }) {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-forest text-warm">
      <div className="absolute -top-[10%] inset-x-0 h-[126%] -scale-x-100 overflow-hidden">
        <motion.img
          src={images.hero}
          alt="Architectural home opening into a calm landscaped garden at dusk"
          className="h-full w-full object-cover object-[48%_center]"
          style={{ y: heroY }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,23,19,0.96)_0%,rgba(26,35,30,0.82)_34%,rgba(26,35,30,0.28)_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_44%,rgba(230,215,189,0.18),transparent_34%)]" />
      <div className="hero-grain absolute inset-0 opacity-[0.18]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-forest via-forest/60 to-transparent" />

      <div className="absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-[0.34em] text-warm/50 xl:block">
        Garden architecture / water / stone / shade
      </div>

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1500px] grid-cols-1 px-5 pb-8 pt-28 md:px-10 lg:grid-cols-12 lg:items-end lg:gap-10">
        <motion.div variants={heroTextGroup} initial="initial" animate="animate" className="self-center lg:col-span-8 lg:pb-24">
          <motion.div variants={heroTextItem} className="mb-6 flex max-w-3xl items-center gap-4 md:mb-8">
            <span className="h-px w-14 bg-clay" />
            <p className="text-[11px] font-bold uppercase leading-5 tracking-[0.26em] text-sand md:text-[12px] md:tracking-[0.34em]">Residential landscape architecture</p>
          </motion.div>
          <h1 className="max-w-6xl font-serif text-[clamp(3.75rem,12.6vw,12.8rem)] leading-[0.86] tracking-normal md:leading-[0.82]">
            <span className="block">
              <motion.span variants={heroTextItem} className="block pb-2 text-stone">Outdoor Living,</motion.span>
            </span>
            <span className="block pl-[0.1em] md:pl-[0.22em]">
              <motion.span variants={heroTextItem} className="block pb-3 italic text-[#d9b98d]">Reimagined.</motion.span>
            </span>
          </h1>
          <motion.div variants={heroTextItem} className="mt-6 max-w-2xl border-l border-sand/45 pl-5 md:mt-8">
            <p className="max-w-2xl text-lg leading-8 text-stone/88 md:text-xl">A calm, crafted landscape studio shaping pools, gardens, courtyards, and outdoor rooms with the precision of architecture and the patience of nature.</p>
          </motion.div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease, delay: 0.42 }} className="mt-10 self-end border-y border-warm/20 py-6 lg:absolute lg:right-10 lg:top-32 lg:mt-0 lg:w-[min(34vw,430px)] lg:border-t lg:border-b lg:bg-forest/28 lg:px-6 lg:backdrop-blur-[1px]">
          <p className="mb-5 max-w-sm font-serif text-2xl leading-tight text-stone">Selected for private residences where the garden must feel inevitable.</p>
          <div className="grid grid-cols-3 gap-5">
            {[
              ['18+', 'years of craft'],
              ['42', 'premium sites'],
              ['01', 'studio-led team'],
            ].map(([number, label]) => (
              <div key={label}>
                <div className="font-serif text-4xl text-warm md:text-5xl">{number}</div>
                <p className="mt-2 text-[11px] uppercase leading-5 tracking-[0.2em] text-warm/62">{label}</p>
              </div>
            ))}
          </div>
          <a href="#consultation" className="cta-button hero-cta mt-7 w-full">
            Begin a Garden
            <ChevronRight className="h-4 w-4" />
          </a>
        </motion.aside>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-forest px-5 pb-28 pt-10 text-warm md:px-10 md:pb-40">
      <div className="mx-auto grid max-w-[1500px] gap-14 border-t border-warm/20 pt-12 lg:grid-cols-12">
        <motion.p {...reveal} className="text-[12px] font-bold uppercase tracking-[0.3em] text-clay lg:col-span-3">Nature crafted with architectural precision</motion.p>
        <motion.div {...reveal} className="lg:col-span-8 lg:col-start-5">
          <h2 className="font-serif text-[clamp(2.6rem,6vw,6.7rem)] leading-[0.95] tracking-normal">We design gardens as living architecture: shade, stone, scent, water, and season composed into everyday rituals.</h2>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section id="projects" className="overflow-hidden bg-stone px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <motion.div {...reveal} className="mb-20 grid gap-8 lg:grid-cols-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-olive lg:col-span-3">Featured projects</p>
          <h2 className="font-serif text-[clamp(3rem,7vw,7.5rem)] leading-[0.88] lg:col-span-7">Case studies in outdoor atmosphere.</h2>
        </motion.div>
        <div className="space-y-28 md:space-y-40">
          {projects.map((project, index) => <ProjectStory key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectStory({ project, index }) {
  const reverse = index % 2 === 1;

  return (
    <motion.article {...reveal} className="grid items-center gap-8 lg:grid-cols-12">
      <div className={`${reverse ? 'lg:order-2 lg:col-span-6 lg:col-start-7' : 'lg:col-span-7'} relative`}>
        <div className="relative aspect-[5/6] overflow-hidden bg-forest md:aspect-[16/11]">
          <img src={project.img} alt={`${project.title} landscape project`} className="h-full w-full object-cover transition duration-[1600ms] hover:scale-[1.035]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(26,35,30,0.46))]" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-warm">
            <span className="text-[11px] uppercase tracking-[0.24em]">{project.location}</span>
            <span className="border border-warm/45 px-3 py-2 text-[10px] uppercase tracking-[0.22em]">Case {index + 1}</span>
          </div>
        </div>
        <div className={`absolute hidden bg-clay/90 p-5 text-warm shadow-xl md:block ${reverse ? '-left-10 top-10' : '-right-10 bottom-12'}`}>
          <p className="max-w-48 font-serif text-2xl leading-tight">before to after, composed in layers</p>
        </div>
      </div>

      <div className={reverse ? 'lg:col-span-5 lg:col-start-1 lg:row-start-1' : 'lg:col-span-4 lg:col-start-9'}>
        <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.28em] text-olive">{project.type}</p>
        <h3 className="font-serif text-5xl leading-none md:text-7xl">{project.title}</h3>
        <p className="mt-7 max-w-xl text-lg leading-8 text-charcoal/72">{project.detail}</p>
        <div className="mt-9 border-y border-charcoal/15">
          {project.stats.map((stat) => (
            <div key={stat} className="flex items-center justify-between gap-5 border-b border-charcoal/10 py-4 last:border-b-0">
              <span className="text-sm text-charcoal/62">Measured detail</span>
              <span className="text-right font-serif text-xl">{stat}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Services() {
  return (
    <section id="services" className="bg-warm px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <motion.div {...reveal} className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="font-serif text-[clamp(3.4rem,8vw,8.5rem)] leading-[0.86] lg:col-span-7">Disciplines for a complete outdoor life.</h2>
          <p className="text-lg leading-8 text-charcoal/70 lg:col-span-4 lg:col-start-9">From first sketch to seasonal stewardship, every service is held inside one calm studio process.</p>
        </motion.div>

        <div className="mt-20 grid border-t border-charcoal/15 lg:grid-cols-2">
          {services.map(([name, text, Icon], index) => (
            <motion.div key={name} {...reveal} transition={{ duration: 0.8, ease, delay: index * 0.05 }} className="group grid min-h-52 grid-cols-[56px_1fr] gap-6 border-b border-charcoal/15 py-8 transition hover:bg-stone/70 md:grid-cols-[74px_1fr] md:p-10 lg:odd:border-r">
              <div className="grid h-12 w-12 place-items-center border border-olive/30 text-olive transition group-hover:bg-forest group-hover:text-warm">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl">{name}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-charcoal/68">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy({ textureY }) {
  return (
    <section className="relative overflow-hidden bg-forest px-5 py-24 text-warm md:px-10 md:py-40">
      <motion.img src={images.texture} alt="" aria-hidden="true" className="absolute inset-y-0 right-0 h-[112%] w-full object-cover opacity-20 mix-blend-luminosity" style={{ y: textureY }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#1a231e_0%,rgba(26,35,30,0.92)_48%,rgba(26,35,30,0.72))]" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-12">
        <motion.div {...reveal} className="lg:col-span-5">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.32em] text-clay">Design philosophy</p>
          <h2 className="font-serif text-[clamp(3rem,7vw,7.2rem)] leading-[0.88]">Quiet gardens leave room for life to unfold.</h2>
        </motion.div>
        <motion.div {...reveal} className="lg:col-span-6 lg:col-start-7">
          <div className="grid gap-8 text-lg leading-8 text-warm/76 md:grid-cols-2">
            <p>We value restraint, but never emptiness. The right stone edge, the right canopy, the right pause between plantings can change how a home is felt.</p>
            <p>Sustainability is treated as craft: resilient species, permeable surfaces, water awareness, soil health, and materials selected for longevity rather than novelty.</p>
          </div>
          <div className="mt-12 grid gap-4 border-t border-warm/20 pt-8 sm:grid-cols-3">
            {['Craftsmanship', 'Ecology', 'Outdoor ritual'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.22em] text-sand">
                <Sparkles className="h-4 w-4 text-clay" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-sand px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1500px]">
        <motion.div {...reveal} className="mb-20 grid gap-8 lg:grid-cols-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-olive lg:col-span-3">Process</p>
          <h2 className="font-serif text-[clamp(3rem,7vw,7.2rem)] leading-[0.9] lg:col-span-8">A garden is not rushed into being.</h2>
        </motion.div>
        <div className="grid gap-5">
          {process.map(([title, text], index) => (
            <motion.div key={title} {...reveal} transition={{ duration: 0.85, ease, delay: index * 0.08 }} className="grid gap-6 border-t border-charcoal/15 py-8 md:grid-cols-[120px_1fr_1.4fr] md:gap-10">
              <span className="font-serif text-5xl text-olive/60">0{index + 1}</span>
              <h3 className="font-serif text-4xl md:text-5xl">{title}</h3>
              <p className="max-w-2xl text-lg leading-8 text-charcoal/70">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-warm px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1320px]">
        <motion.div {...reveal} className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img src={images.foliage} alt="Layered foliage and garden texture" className="aspect-[4/5] h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <Waves className="mb-9 h-8 w-8 text-clay" />
            <blockquote className="font-serif text-[clamp(2.4rem,5vw,5.8rem)] leading-[1.02]">"The house finally feels complete. Every morning now begins outside."</blockquote>
            <div className="mt-10 border-t border-charcoal/15 pt-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.26em] text-olive">Mira and James Ellery</p>
              <p className="mt-2 text-charcoal/62">Whole-property landscape transformation, Mosman</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="consultation" className="relative overflow-hidden bg-forest px-5 py-28 text-warm md:px-10 md:py-44">
      <img src={images.garden} alt="Lush premium garden pathway" className="absolute inset-0 h-full w-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,35,30,0.94),rgba(26,35,30,0.72),rgba(26,35,30,0.36))]" />
      <motion.div {...reveal} className="relative z-10 mx-auto max-w-[1500px]">
        <p className="mb-7 text-[12px] font-bold uppercase tracking-[0.34em] text-moss">Private residential commissions</p>
        <h2 className="max-w-5xl font-serif text-[clamp(3.4rem,8vw,8.8rem)] leading-[0.88]">Transform the way you live outdoors.</h2>
        <div className="mt-10 flex flex-col gap-6 border-l border-warm/30 pl-5 md:max-w-3xl md:flex-row md:items-center md:gap-10">
          <p className="text-lg leading-8 text-warm/76">Tell us about the site, the season you imagine, and how you want the space to feel. We will shape the next step.</p>
          <a href="mailto:studio@aureagrounds.com" className="cta-button bg-warm text-forest hover:bg-sand">
            Book Consultation
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="journal" className="bg-[#111713] px-5 py-14 text-warm/68 md:px-10">
      <div className="mx-auto grid max-w-[1500px] gap-14 border-b border-warm/15 pb-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="font-serif text-3xl text-warm">Aurea Grounds</div>
          <p className="mt-5 max-w-md leading-7">A landscape architecture and outdoor living studio for calm, crafted, high-end residential environments.</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
          <FooterColumn title="Studio" items={['Projects', 'Disciplines', 'Process', 'Philosophy']} />
          <FooterColumn title="Enquiries" items={['studio@aureagrounds.com', '+61 2 4088 0194', 'Private consultations']} />
          <FooterColumn title="Social" items={['Instagram', 'Pinterest', 'Design Journal']} />
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-[1500px] flex-col gap-4 text-[11px] uppercase tracking-[0.22em] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Aurea Grounds. All rights reserved.</p>
        <p>Landscape architecture, garden design, outdoor living.</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.26em] text-sand">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <a key={item} href="#top" className="block text-sm transition hover:text-warm">{item}</a>
        ))}
      </div>
    </div>
  );
}
