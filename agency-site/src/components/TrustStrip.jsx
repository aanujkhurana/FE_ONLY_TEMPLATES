import { motion } from 'framer-motion'

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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-3"
        >
          {items.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-xs tracking-[0.2em] uppercase text-ivory-dark/40"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
