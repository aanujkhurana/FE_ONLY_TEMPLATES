const items = [
  'Premium Digital Presence',
  'Conversion-Focused Design',
  '48-Hour Delivery',
  'Cinematic Motion Systems',
  'Australian Service Experts',
]

export default function TrustStrip() {
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {items.map((item) => (
            <span
              key={item}
              className="text-xs tracking-[0.2em] uppercase text-ivory-dark/40"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
