import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#080808]/80 backdrop-blur-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#" className="text-ivory font-semibold text-lg tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-gold" />
          Conviction
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-ivory-dark/60 hover:text-ivory transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-5 py-2.5 bg-gold text-[#080808] text-sm font-semibold rounded-full hover:bg-gold-light transition-colors"
          >
            Get Free Preview
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 2.5 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-ivory origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[1.5px] bg-ivory"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -2.5 } : { rotate: 0, y: 0 }}
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
            className="md:hidden bg-[#080808]/95 backdrop-blur-2xl border-t border-white/[0.06]"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-ivory-dark/60 hover:text-ivory transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="px-5 py-3 bg-gold text-[#080808] text-sm font-semibold rounded-full text-center"
              >
                Get Free Preview
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
