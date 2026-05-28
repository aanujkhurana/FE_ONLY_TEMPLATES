import { useState, useEffect } from 'react'
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
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled((prev) => {
          const next = window.scrollY > 50
          return prev === next ? prev : next
        })
        ticking = false
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveSection((prev) => (prev === visible.target.id ? prev : visible.target.id))
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    )

    links.forEach((link) => {
      const el = document.getElementById(link.href.slice(1))
      if (el) observer.observe(el)
    })

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#080808]/88 supports-[backdrop-filter]:bg-[#080808]/78 md:supports-[backdrop-filter]:backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]'
          : 'bg-transparent'
      } nav-enter`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a
          href="#"
          className="text-ivory font-semibold text-lg tracking-tight flex items-center gap-2 group"
        >
          <span
            className="w-2 h-2 rounded-full bg-gold"
            style={{ animation: 'nav-dot-pulse 2s ease-in-out infinite' }}
          />
          Conviction
        </a>

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
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
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
          <span
            className="block w-5 h-[1.5px] bg-ivory origin-center transition-transform duration-300"
            style={{ transform: open ? 'rotate(45deg) translateY(3px)' : 'rotate(0)' }}
          />
          <span
            className="block w-5 h-[1.5px] bg-ivory transition-all duration-300"
            style={{ opacity: open ? 0 : 1, transform: open ? 'translateX(-5px)' : 'translateX(0)' }}
          />
          <span
            className="block w-5 h-[1.5px] bg-ivory origin-center transition-transform duration-300"
            style={{ transform: open ? 'rotate(-45deg) translateY(-3px)' : 'rotate(0)' }}
          />
        </button>
      </div>

      {open && (
          <div
            className="mobile-menu md:hidden bg-[#080808]/96 supports-[backdrop-filter]:backdrop-blur-md border-t border-white/[0.06] overflow-hidden"
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
          </div>
        )}
    </header>
  )
}
