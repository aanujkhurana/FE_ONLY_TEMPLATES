import { motion } from 'framer-motion'
import ScrollReveal from './ui/ScrollReveal'

const testimonials = [
  {
    name: 'Steve Mitchell',
    business: 'BlueWave Pool Services',
    quote: 'Our phone has not stopped ringing since the new site launched. The design is absolutely stunning — customers keep telling us we look like the biggest company in the industry.',
    rating: 5,
  },
  {
    name: 'Dan Porter',
    business: 'Precision Auto Garage',
    quote: 'I was skeptical a website could make this much difference. We went from 2-3 calls a day to 12+. The site paid for itself in the first week.',
    rating: 5,
  },
  {
    name: 'Jake Morrison',
    business: 'Aussie Pressure Kings',
    quote: 'We went from a basic Facebook page to a premium website and instantly felt the difference. Customers take us more seriously. Best investment we have made.',
    rating: 5,
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold' : 'text-white/[0.06]'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-white/[0.01] to-[#080808]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.2em] uppercase text-gold/60">Testimonials</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Trusted by <span className="text-gold">Local Businesses</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative group p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] h-full flex flex-col"
              >
                <div className="absolute -inset-1 bg-gold/[0.03] blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <StarRating rating={t.rating} />
                  <p className="mt-4 text-sm text-ivory-dark/60 leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/[0.06]">
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-ivory-dark/40 mt-0.5">{t.business}</div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
