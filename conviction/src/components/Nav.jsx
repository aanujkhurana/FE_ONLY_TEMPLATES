import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePreview } from '../context/PreviewContext'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { openForm, submitted } = usePreview()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = links.map((l) => l.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#080808]/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <motion.a
          href="#"
          className="text-ivory font-semibold text-lg tracking-tight flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-gold"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          Conviction
        </motion.a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-sm tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-ivory' : 'text-ivory-dark/60 hover:text-ivory'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold"
                  />
                )}
              </a>
            )
          })}
          {submitted ? (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] text-gold/80 text-sm font-medium rounded-full border border-white/[0.06]">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Preview Requested
            </span>
          ) : (
            <button
              onClick={openForm}
              className="px-5 py-2.5 bg-gold text-[#080808] text-sm font-semibold rounded-full hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,168,76,0.3)] cursor-pointer"
            >
              Get Free Preview
            </button>
          )}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-ivory origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0, x: -5 } : { opacity: 1, x: 0 }}
            className="block w-5 h-[1.5px] bg-ivory"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-ivory origin-center"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#080808]/95 backdrop-blur-2xl border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-ivory-dark/60 hover:text-ivory transition-colors py-2 text-sm tracking-wide"
                >
                  {link.label}
                </a>
              ))}
              {submitted ? (
                <span className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.04] text-gold/80 text-sm font-medium rounded-full border border-white/[0.06] text-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Preview Requested
                </span>
              ) : (
                <button
                  onClick={() => { openForm(); setOpen(false) }}
                  className="px-5 py-3 bg-gold text-[#080808] text-sm font-semibold rounded-full text-center cursor-pointer"
                >
                  Get Free Preview
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
