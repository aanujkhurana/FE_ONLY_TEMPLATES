import { memo, useState, useRef, useCallback } from 'react'
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
      avifSrcSet: '/images/aquablast-project-sm.avif 600w, /images/aquablast-project-md.avif 1000w, /images/aquablast-project.avif 1600w',
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
      avifSrcSet: '/images/sportsgarage-project-sm.avif 600w, /images/sportsgarage-project-md.avif 1000w, /images/sportsgarage-project.avif 1600w',
    },
    features: ['Service booking system', 'Customer review wall', 'Emergency CTA', 'Pricing transparency'],
  },
  {
    id: 'landscaping',
    title: 'AG Landscaping',
    tag: 'Landscaping',
    description: 'A clean, modern website that showcases premium landscaping services with stunning project galleries and seamless booking.',
    gradient: 'from-emerald-500/10 to-green-600/10',
    accent: '#10b981',
    url: 'https://aglandscaping.vercel.app',
    images: {
      src: '/images/agLandscaping-project.webp',
      srcSet: '/images/agLandscaping-project-sm.webp 600w, /images/agLandscaping-project-md.webp 1000w, /images/agLandscaping-project.webp 1600w',
      avifSrcSet: '/images/agLandscaping-project-sm.avif 600w, /images/agLandscaping-project-md.avif 1000w, /images/agLandscaping-project.avif 1600w',
    },
    features: ['Project portfolio gallery', 'Instant quote estimator', 'Service area coverage', 'Seasonal maintenance packages'],
  },
  {
    id: 'roofing',
    title: 'Iron Roofing',
    tag: 'Roofing',
    description: 'A tough, trust-driven website built to convert homeowners into leads with clear pricing, service breakdowns, and rapid quoting.',
    gradient: 'from-red-500/10 to-slate-600/10',
    accent: '#ef4444',
    url: 'https://ironroofing.vercel.app',
    images: {
      src: '/images/ironRoofing-project.webp',
      srcSet: '/images/ironRoofing-project-sm.webp 600w, /images/ironRoofing-project-md.webp 1000w, /images/ironRoofing-project.webp 1600w',
      avifSrcSet: '/images/ironRoofing-project-sm.avif 600w, /images/ironRoofing-project-md.avif 1000w, /images/ironRoofing-project.avif 1600w',
    },
    features: ['Free inspection booking', 'Roofing material guide', 'Emergency repair CTA', 'Financing options display'],
  },
]

const Mockup3D = memo(function Mockup3D({ project }) {
  const ref = useRef(null)
  const rafRef = useRef(null)
  const currentRotate = useRef({ x: 0, y: 0 })

  const handleMove = useCallback((e) => {
    if (!ref.current) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
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
        ref.current.style.transform = `translate3d(0, 0, 0) rotateX(${currentRotate.current.x}deg) rotateY(${currentRotate.current.y}deg)`
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

        <div className="relative">
          <picture>
            <source type="image/avif" srcSet={project.images.avifSrcSet} sizes="(max-width: 640px) 92vw, (max-width: 1024px) 86vw, 760px" />
            <source type="image/webp" srcSet={project.images.srcSet} sizes="(max-width: 640px) 92vw, (max-width: 1024px) 86vw, 760px" />
            <img
              src={project.images.src}
              alt={`${project.title} website preview`}
              className="w-full h-auto block select-none pointer-events-none"
              draggable={false}
              loading="lazy"
              fetchPriority="low"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-transparent opacity-20 pointer-events-none" />
        </div>
      </div>
    </div>
  )
})

export default function Showcase() {
  const [active, setActive] = useState(0)
  const project = projects[active]

  return (
    <section
      id="work"
      className="relative py-32 overflow-hidden"
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
                onClick={() => setActive(i)}
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

        <div
            key={active}
            className="project-panel grid lg:grid-cols-5 gap-10 items-center"
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
          </div>
      </div>
    </section>
  )
}
