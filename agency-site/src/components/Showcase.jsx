import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'

const projects = [
  {
    id: 'pool',
    title: 'BlueWave Pool Services',
    tag: 'Pool Cleaning',
    description: 'A premium conversion-optimised website that positions a local pool cleaning business as the high-end choice in their market.',
    gradient: 'from-cyan-500/10 to-blue-600/10',
    accent: '#06b6d4',
    features: ['Quote request system', 'Service area showcase', 'Before/after gallery', 'Mobile-optimised booking'],
  },
  {
    id: 'garage',
    title: 'Precision Auto Garage',
    tag: 'Mechanic / Auto Repair',
    description: 'Trust-first design that makes customers feel confident booking high-value auto repairs with a premium local shop.',
    gradient: 'from-violet-500/10 to-purple-600/10',
    accent: '#8b5cf6',
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

function Mockup3D({ project }) {
  const ref = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setRotateX((y - 0.5) * -12)
    setRotateY((x - 0.5) * 12)
  }

  const handleLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ perspective: '1200px' }}
      className="relative group cursor-pointer"
    >
      <div
        className="absolute -inset-4 opacity-20 blur-3xl rounded-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: `radial-gradient(circle at center, ${project.accent}40, transparent 70%)` }}
      />

      <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0c0c0d] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
        <div className="h-10 bg-white/[0.04] flex items-center px-4 gap-2 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
        </div>

        <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.gradient}`}>
          <div className="flex items-center justify-between mb-8">
            <div className="h-3 w-16 rounded bg-white/[0.06]" />
            <div className="flex gap-4">
              <div className="h-2 w-12 rounded bg-white/[0.04]" />
              <div className="h-2 w-12 rounded bg-white/[0.04]" />
            </div>
          </div>

          <div className="pb-8 space-y-3">
            <div className="h-7 w-2/3 rounded bg-white/[0.08]" />
            <div className="h-7 w-1/3 rounded bg-white/[0.08]" />
            <div className="h-3 w-1/2 rounded bg-white/[0.04] mt-4" />
            <div className="flex gap-3 mt-6">
              <div className="h-8 w-24 rounded-full" style={{ backgroundColor: `${project.accent}30` }} />
              <div className="h-8 w-24 rounded-full border border-white/[0.06]" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-16 sm:h-20 rounded-lg bg-white/[0.03] border border-white/[0.04]" />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Showcase() {
  const [active, setActive] = useState(0)
  const project = projects[active]

  return (
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-white/[0.01] to-[#080808]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs tracking-[0.2em] uppercase text-gold/60">Our Work</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Premium Websites That <span className="text-gold">Convert</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mt-12 mb-14">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`px-6 py-3 rounded-full text-sm tracking-wide transition-all duration-300 ${
                  i === active
                    ? 'bg-white/[0.08] text-ivory border border-white/[0.1]'
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-5 gap-10 items-center"
          >
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-ivory-dark/40">{project.tag}</span>
                <h3 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-ivory">
                  {project.title}
                </h3>
              </div>
              <p className="text-ivory-dark/60 leading-relaxed">
                {project.description}
              </p>
              <ul className="space-y-3">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-ivory-dark/50">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
              >
                Get this template
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="lg:col-span-3">
              <Mockup3D project={project} index={active} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
