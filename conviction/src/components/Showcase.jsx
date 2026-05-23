import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'

const projects = [
  {
    id: 'pool',
    title: 'Aqua Blast',
    tag: 'Pool Cleaning',
    description: 'A premium conversion-optimised website that positions a local pool cleaning business as the high-end choice in their market.',
    gradient: 'from-cyan-500/10 to-blue-600/10',
    accent: '#06b6d4',
    url: 'https://aquablast-pro.vercel.app',
    images: {
      src: '/images/aquablast-project.webp',
      srcSet: '/images/aquablast-project-sm.webp 600w, /images/aquablast-project-md.webp 1000w, /images/aquablast-project.webp 1600w',
    },
    features: ['Quote request system', 'Service area showcase', 'Before/after gallery', 'Mobile-optimised booking'],
  },
  {
    id: 'garage',
    title: 'Sports Garage',
    tag: 'Mechanic / Auto Repair',
    description: 'Trust-first design that makes customers feel confident booking high-value auto repairs with a premium local shop.',
    gradient: 'from-violet-500/10 to-purple-600/10',
    accent: '#8b5cf6',
    url: 'https://sportgarage.vercel.app',
    images: {
      src: '/images/sportsgarage-project.webp',
      srcSet: '/images/sportsgarage-project-sm.webp 600w, /images/sportsgarage-project-md.webp 1000w, /images/sportsgarage-project.webp 1600w',
    },
    features: ['Service booking system', 'Customer review wall', 'Emergency CTA', 'Pricing transparency'],
  },
  {
    id: 'pressure',
    title: 'Aussie Pressure Kings',
    tag: 'Pressure Washing',
    description: 'Authority-driven website that turns curb appeal into booked jobs instantly with cinematic service showcases.',
    gradient: 'from-amber-500/10 to-orange-600/10',
    accent: '#f59e0b',
    features: ['Instant quote calculator', 'Service area map', 'Project showcase', 'Seasonal promotions'],
  },
]

function PressureDashboard({ accent }) {
  return (
    <div className="p-5 sm:p-6 space-y-4 bg-[#0a0a0b]">
      <div className="flex items-center gap-4 pb-2 border-b border-white/[0.04]">
        <span className="text-xs font-medium text-ivory/80">Aussie Pressure Kings</span>
        <div className="flex items-center gap-3 ml-auto">
          {['Services', 'Gallery', 'Get Quote'].map((item) => (
            <span key={item} className={`text-[10px] tracking-wide ${item === 'Get Quote' ? 'font-medium' : 'text-ivory-dark/40'}`} style={{ color: item === 'Get Quote' ? accent : undefined }}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-3">
        <span className="text-[11px] font-medium text-ivory/70 block mb-3">Instant Quote Calculator</span>
        <div className="flex gap-1.5 mb-3">
          {['Driveway', 'Patio', 'Roof'].map((item) => (
            <span key={item} className="text-[10px] px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.03] text-ivory-dark/50">{item}</span>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] text-ivory-dark/40">Area:</span>
          <div className="flex-1 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
            <div className="h-full rounded-full" style={{ width: '72%', backgroundColor: accent, opacity: 0.5 }} />
          </div>
          <span className="text-[10px] text-ivory/60">180m&sup2;</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-ivory/90">$299</span>
          <span className="text-[11px] font-medium px-3 py-1.5 rounded-full" style={{ backgroundColor: `${accent}20`, color: accent }}>Book Now &rarr;</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-white/[0.04] overflow-hidden">
          <div className="h-16 bg-gradient-to-br from-white/[0.06] to-white/[0.02]" />
          <div className="p-2">
            <span className="text-[9px] text-ivory-dark/40 uppercase tracking-wide">Before</span>
          </div>
        </div>
        <div className="rounded-xl border border-white/[0.04] overflow-hidden">
          <div className="h-16 bg-gradient-to-br" style={{ background: `linear-gradient(135deg, ${accent}25, ${accent}10)` }} />
          <div className="p-2">
            <span className="text-[9px] text-ivory-dark/40 uppercase tracking-wide">After</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl p-3 text-center border border-white/[0.06]" style={{ background: `linear-gradient(135deg, ${accent}15, transparent)` }}>
        <span className="text-xs font-medium" style={{ color: accent }}>&#x1F338; Spring Special &mdash; 15% OFF all services</span>
      </div>
    </div>
  )
}

function Mockup3D({ project }) {
  const ref = useRef(null)
  const rafRef = useRef(null)
  const currentRotate = useRef({ x: 0, y: 0 })

  const handleMove = useCallback((e) => {
    if (!ref.current) return
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const rect = ref.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      currentRotate.current = {
        x: (y - 0.5) * -14,
        y: (x - 0.5) * 14,
      }
      if (ref.current) {
        ref.current.style.transform = `rotateX(${currentRotate.current.x}deg) rotateY(${currentRotate.current.y}deg)`
      }
    })
  }, [])

  const handleLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    currentRotate.current = { x: 0, y: 0 }
    if (ref.current) {
      ref.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: '1200px', willChange: 'transform', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
      className="relative group cursor-pointer"
    >
      <div
        className="absolute -inset-6 rounded-3xl opacity-15 transition-opacity duration-700 group-hover:opacity-30"
        style={{
          background: `radial-gradient(circle at center, ${project.accent}20, transparent 70%)`,
          filter: 'blur(40px)',
        }}
      />

      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0c0c0d] shadow-[0_40px_100px_rgba(0,0,0,0.5)] transition-shadow duration-500 group-hover:shadow-[0_50px_120px_rgba(0,0,0,0.6)]">
        <div className="h-10 bg-white/[0.03] flex items-center px-4 gap-2 border-b border-white/[0.05]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
        </div>

        {project.images ? (
          <div className="relative">
            <img
              src={project.images.src}
              srcSet={project.images.srcSet}
              sizes="(max-width: 640px) 600px, (max-width: 1024px) 1000px, 1600px"
              alt={`${project.title} website preview`}
              className="w-full h-auto block select-none pointer-events-none"
              draggable={false}
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-transparent opacity-20 pointer-events-none" />
          </div>
        ) : (
          <PressureDashboard accent={project.accent} />
        )}
      </div>
    </div>
  )
}

export default function Showcase() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const project = projects[active]

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projects.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [paused])

  return (
    <section
      id="work"
      className="relative py-32 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 section-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs tracking-[0.2em] uppercase text-gold/60">Our Work</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Premium Websites That <span className="gradient-text">Convert</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mt-12 mb-14">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 6000) }}
                className={`px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-500 ${
                  i === active
                    ? 'bg-white/[0.08] text-ivory border border-white/[0.1] shadow-[0_0_30px_rgba(255,255,255,0.03)]'
                    : 'text-ivory-dark/40 hover:text-ivory/60 border border-transparent'
                }`}
              >
                {p.tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-5 gap-10 items-center"
          >
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-ivory-dark/40">
                  {project.tag}
                </span>
                <h3 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-ivory">
                  {project.title}
                </h3>
              </div>
              <p className="text-ivory-dark/60 leading-relaxed">
                {project.description}
              </p>
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-ivory-dark/50"
                  >
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={project.url || '#cta'}
                target={project.url ? '_blank' : undefined}
                rel={project.url ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
              >
                Preview Website
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="lg:col-span-3">
              <Mockup3D project={project} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
