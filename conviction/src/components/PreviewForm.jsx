import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePreview } from '../context/PreviewContext'

const industries = [
  'Pool Cleaning',
  'Auto Repair / Mechanic',
  'Pressure Washing',
  'Landscaping / Gardening',
  'Cleaning Service',
  'Electrical / Plumbing',
  'Other',
]

export default function PreviewForm() {
  const { isOpen, closeForm, markSubmitted } = usePreview()
  const [step, setStep] = useState('form')
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    industry: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const resetForm = () => {
    setStep('form')
    setFormData({ businessName: '', contactName: '', phone: '', email: '', industry: '', message: '' })
  }

  const handleClose = () => {
    closeForm()
    setTimeout(resetForm, 300)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStep('loading')

    try {
      const res = await fetch('https://formsubmit.co/ajax/aanujkhurana@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Preview Request — ${formData.businessName}`,
          businessName: formData.businessName,
          contactName: formData.contactName,
          phone: formData.phone,
          email: formData.email,
          industry: formData.industry,
          message: formData.message,
        }),
      })

      if (res.ok) {
        setStep('success')
        markSubmitted()
      } else {
        throw new Error('Formsubmit error')
      }
    } catch {
      setStep('success')
      markSubmitted()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.08] bg-[#0c0c0d] shadow-[0_50px_150px_rgba(0,0,0,0.5)]"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-ivory-dark/50 hover:text-ivory hover:bg-white/[0.1] transition-all"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {step === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto"
                  >
                    <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">Preview Requested</h3>
                  <p className="mt-3 text-sm text-ivory-dark/50 leading-relaxed">
                    Thanks! We will review your details and get back to you within 24 hours with a custom preview of what your business could look like.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-8 px-8 py-3 bg-gold text-[#080808] font-semibold rounded-full text-sm tracking-wide hover:bg-gold-light transition-all"
                  >
                    Got it
                  </button>
                </motion.div>
              ) : step === 'loading' ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-10 text-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full mx-auto"
                  />
                  <p className="mt-4 text-sm text-ivory-dark/50">Sending your request...</p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-8 sm:p-10"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <span className="text-xs tracking-[0.2em] uppercase text-gold/60">Free Preview</span>
                  </div>
                  <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-[-0.03em]">Tell Us About Your Business</h3>
                  <p className="mt-2 text-sm text-ivory-dark/50">We will create a custom preview tailored to your business.</p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-ivory-dark/40 mb-2 tracking-wide">
                          Business Name <span className="text-gold/60">*</span>
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="e.g. BlueWave Pools"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-ivory text-sm placeholder:text-ivory-dark/20 focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-ivory-dark/40 mb-2 tracking-wide">
                          Your Name <span className="text-gold/60">*</span>
                        </label>
                        <input
                          type="text"
                          name="contactName"
                          required
                          value={formData.contactName}
                          onChange={handleChange}
                          placeholder="e.g. John Smith"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-ivory text-sm placeholder:text-ivory-dark/20 focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-ivory-dark/40 mb-2 tracking-wide">
                          Email <span className="text-gold/60">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@business.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-ivory text-sm placeholder:text-ivory-dark/20 focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-ivory-dark/40 mb-2 tracking-wide">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0400 000 000"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-ivory text-sm placeholder:text-ivory-dark/20 focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-ivory-dark/40 mb-2 tracking-wide">
                        Industry <span className="text-gold/60">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
                          style={{ color: formData.industry ? '#ece8e1' : 'rgba(236,232,225,0.25)' }}
                        >
                          <option value="" disabled>Select your industry</option>
                          {industries.map((ind) => (
                            <option key={ind} value={ind} className="bg-[#0c0c0d] text-ivory">
                              {ind}
                            </option>
                          ))}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-dark/30 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-ivory-dark/40 mb-2 tracking-wide">Tell us about your business</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What do you do? What are your goals? Any specific requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-ivory text-sm placeholder:text-ivory-dark/20 focus:outline-none focus:border-gold/40 focus:bg-white/[0.05] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gold text-[#080808] font-semibold rounded-full text-sm tracking-wide hover:bg-gold-light transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.25)]"
                    >
                      Send Preview Request
                    </button>

                    <p className="text-[10px] text-ivory-dark/20 text-center">
                      No spam. No obligation. We will never share your details.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
