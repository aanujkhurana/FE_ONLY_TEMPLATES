export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#" className="text-ivory font-semibold text-lg tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Conviction
            </a>
            <p className="mt-3 text-sm text-ivory-dark/50 leading-relaxed max-w-xs">
              Premium websites designed to make Australian local service businesses look world-class.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-ivory-dark/30 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {['Website Design', 'Website Development', 'Motion Design', 'SEO Optimisation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-ivory-dark/50 hover:text-ivory transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-ivory-dark/30 mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {['Pool Cleaning', 'Auto Repair', 'Pressure Washing', 'Local Trades'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-ivory-dark/50 hover:text-ivory transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ivory-dark/30">
            &copy; {new Date().getFullYear()} Conviction. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'LinkedIn'].map((item) => (
              <a key={item} href="#" className="text-xs text-ivory-dark/30 hover:text-ivory/50 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
