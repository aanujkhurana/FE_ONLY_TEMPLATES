import { motion } from 'framer-motion'

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const getInitial = () => {
    switch (direction) {
      case 'up': return { y: 50 }
      case 'down': return { y: -50 }
      case 'left': return { x: 50 }
      case 'right': return { x: -50 }
      default: return { y: 50 }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitial() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
