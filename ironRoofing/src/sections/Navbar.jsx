import { useNavScroll } from '../hooks/useNavScroll'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#showcase', label: 'Projects' },
  { href: '#trust', label: 'Why Us' },
]

export default function Navbar() {
  const scrolled = useNavScroll()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between h-[68px] px-12 border-b border-white/5 transition-[background] duration-300"
      style={{
        background: scrolled
          ? 'rgba(11,11,8,.98)'
          : 'rgba(22,22,19,.95)',
      }}
    >
      <a
        href="#"
        className="font-condensed font-black text-[19px] tracking-[0.1em] uppercase text-warm-white no-underline"
      >
        IRON<em className="text-copper-l not-italic">STONE</em>
      </a>

      <ul className="flex gap-9 list-none max-md:hidden">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-condensed font-semibold text-[12px] tracking-[0.12em] uppercase text-sand no-underline transition-colors duration-200 hover:text-warm-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#cta" className="nav-cta">
        Get A Quote
      </a>
    </nav>
  )
}
