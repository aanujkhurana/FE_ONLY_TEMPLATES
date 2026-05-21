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
    screenshot: '/aquablast-project.png',
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
    screenshot: '/sportsgarage-project.png',
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

  const handleMove = useCallback((e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setRotateX((y - 0.5) * -14)
    setRotateY((x - 0.5) * 14)
  }, [])

  const handleLeave = useCallback(() => {
    setRotateX(0)
    setRotateY(0)
  }, [])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.5 }}
      style={{ perspective: '1200px' }}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="absolute -inset-6 rounded-3xl transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at center, ${project.accent}20, transparent 70%)`,
          filter: 'blur(40px)',
        }}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0c0c0d] shadow-[0_40px_100px_rgba(0,0,0,0.5)] transition-shadow duration-500 group-hover:shadow-[0_50px_120px_rgba(0,0,0,0.6)]">
        <div className="h-10 bg-white/[0.03] flex items-center px-4 gap-2 border-b border-white/[0.05]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
        </div>

        {project.screenshot ? (
          <div className="relative">
            <img
              src={project.screenshot}
              alt={`${project.title} website preview`}
              className="w-full h-auto block select-none pointer-events-none"
              draggable={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-transparent opacity-30 pointer-events-none" />
          </div>
        ) : (
          <div className={`p-6 sm:p-8 bg-gradient-to-br ${project.gradient}`}>
            <div className="flex items-center justify-between mb-8">
              <motion.div
                className="h-3 w-16 rounded"
                style={{ backgroundColor: `${project.accent}30` }}
                animate={{ width: [64, 72, 64] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="flex gap-4">
                <div className="h-2 w-12 rounded bg-white/[0.04]" />
                <div className="h-2 w-12 rounded bg-white/[0.04]" />
              </div>
            </div>

            <div className="pb-8 space-y-3">
              <motion.div
                className="h-7 w-2/3 rounded"
                style={{ backgroundColor: `${project.accent}25` }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="h-7 w-1/3 rounded bg-white/[0.06]"
                animate={{ width: ['33%', '38%', '33%'] }}
                transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="h-3 w-1/2 rounded bg-white/[0.03] mt-4" />
              <div className="flex gap-3 mt-6">
                <motion.div
                  className="h-8 w-24 rounded-full"
                  style={{ backgroundColor: `${project.accent}25` }}
                  whileHover={{ scale: 1.05 }}
                />
                <div className="h-8 w-24 rounded-full border border-white/[0.05]" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="h-16 sm:h-20 rounded-lg bg-white/[0.03] border border-white/[0.03]"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 5, delay: i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
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
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xs tracking-[0.2em] uppercase text-ivory-dark/40"
                >
                  {project.tag}
                </motion.span>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-2 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-ivory"
                >
                  {project.title}
                </motion.h3>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-ivory-dark/60 leading-relaxed"
              >
                {project.description}
              </motion.p>
              <ul className="space-y-3">
                {project.features.map((f, i) => (
                  <motion.li
                    key={f}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.05 }}
                    className="flex items-center gap-3 text-sm text-ivory-dark/50"
                  >
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </motion.li>
                ))}
              </ul>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                href={project.url || '#cta'}
                target={project.url ? '_blank' : undefined}
                rel={project.url ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
              >
                Preview Website
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
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
