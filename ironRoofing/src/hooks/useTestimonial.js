import { useState, useEffect, useCallback } from 'react'

export function useTestimonial(testimonials) {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((i) => {
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setCurrent(i)
      setFading(false)
    }, 300)
  }, [fading])

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 6500)
    return () => clearInterval(id)
  }, [testimonials.length])

  return { current, fading, goTo, testimonial: testimonials[current] }
}
