import { useRef, useCallback } from 'react'

export default function MagneticButton({ children, className = '' }) {
  const ref = useRef(null)
  const rafRef = useRef(null)

  const handleMouse = useCallback((e) => {
    if (!ref.current) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const rect = ref.current.getBoundingClientRect()
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.3
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.3
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
    })
  }, [])

  const handleLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    if (ref.current) {
      ref.current.style.transform = 'translate(0px, 0px)'
    }
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
      style={{ willChange: 'transform', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      {children}
    </div>
  )
}
