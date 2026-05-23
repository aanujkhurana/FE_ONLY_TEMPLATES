import { useTestimonial } from '../hooks/useTestimonial'
import { testimonials } from '../utils/testimonials'

export default function TestimonialsSection() {
  const { current, fading, goTo, testimonial } = useTestimonial(testimonials)

  return (
    <section id="testimonials" className="py-32 bg-charcoal">
      <div className="max-w-[1320px] mx-auto px-12 max-md:px-6">
        <div
          className="section-label"
          style={{ justifyContent: 'center', marginBottom: '72px' }}
        >
          07 — What They Say
        </div>
        <div className="max-w-[840px] mx-auto text-center">
          <span className="font-display text-[140px] leading-[.5] text-copper-l opacity-50 mb-10 block">
            &ldquo;
          </span>

          <p
            className="font-condensed font-bold text-[clamp(26px,3.2vw,46px)] leading-[1.25] text-warm-white tracking-[0.02em] mb-12 transition-all duration-500"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(8px)' : 'none',
            }}
          >
            {testimonial.text}
          </p>

          <div className="flex items-center justify-center gap-5">
            <div className="w-9 h-px bg-copper-l" />
            <span
              className="font-condensed font-semibold text-[13px] tracking-[0.14em] uppercase text-sand transition-opacity duration-500"
              style={{ opacity: fading ? 0 : 1 }}
            >
              {testimonial.author}
            </span>
            <div className="w-9 h-px bg-copper-l" />
          </div>

          <div className="flex justify-center gap-3 mt-16">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                className={`cursor-pointer transition-all duration-300 ${
                  i === current
                    ? 'bg-copper-l w-9'
                    : 'bg-mid w-2'
                }`}
                style={{ height: '8px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
