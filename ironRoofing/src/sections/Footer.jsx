export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/6 pt-20 pb-10 noise relative">
      <div className="max-w-[1320px] mx-auto px-12 max-md:px-6">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-15 mb-[72px] max-xl:grid-cols-2 max-md:grid-cols-1 max-md:gap-10">
          <div>
            <div className="font-condensed font-black text-[20px] tracking-[0.1em] uppercase text-warm-white">
              IRON<em className="not-italic text-copper-l">STONE</em> ROOFING
            </div>
            <p className="text-[14px] font-light text-warm-gray mt-4 leading-[1.75] max-w-[280px]">
              Premium roofing for homes that deserve more than ordinary. Built on craft, backed by a decade of guarantee.
            </p>
            <div className="flex gap-2.5 mt-8 flex-wrap">
              <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-warm-gray border border-white/10 px-3.5 py-1.5">
                QBCC Licensed
              </span>
              <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-warm-gray border border-white/10 px-3.5 py-1.5">
                Fully Insured
              </span>
              <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-warm-gray border border-white/10 px-3.5 py-1.5">
                4.9★ Google
              </span>
            </div>
          </div>
          <FooterCol
            title="Services"
            links={[
              { href: '#', label: 'Roof Restoration' },
              { href: '#', label: 'Roof Replacement' },
              { href: '#', label: 'Roof Repairs' },
              { href: '#', label: 'Guttering' },
              { href: '#', label: 'Inspections' },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: '#', label: 'About Ironstone' },
              { href: '#', label: 'Our Process' },
              { href: '#', label: 'Featured Projects' },
              { href: '#', label: 'Testimonials' },
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              { href: 'tel:0412345678', label: '0412 345 678' },
              { href: 'mailto:hello@ironstoneroofing.com.au', label: 'hello@ironstoneroofing.com.au' },
              { href: '#', label: 'Brisbane & surrounds' },
              { href: '#', label: 'Mon–Sat 7am–5pm' },
            ]}
          />
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-white/6 max-md:flex-col max-md:gap-4">
          <span className="text-[12px] text-warm-gray">
            &copy; 2025 Ironstone Roofing Pty Ltd. All rights reserved. QBCC Licence 1234567.
          </span>
          <div className="flex gap-2.5">
            <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-warm-gray border border-white/10 px-3.5 py-1.5">
              10yr Warranty
            </span>
            <span className="font-condensed text-[10px] font-bold tracking-[0.1em] uppercase text-warm-gray border border-white/10 px-3.5 py-1.5">
              AS/NZS Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div className="font-condensed text-[10px] font-bold tracking-[0.2em] uppercase text-warm-gray mb-6">
        {title}
      </div>
      <ul className="list-none flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[14px] text-sand no-underline transition-colors duration-200 hover:text-warm-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
