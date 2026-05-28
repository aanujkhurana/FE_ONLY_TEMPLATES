import { lazy, Suspense } from 'react'
import { PreviewProvider } from './context/PreviewContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Showcase from './components/Showcase'
import ProblemSolution from './components/ProblemSolution'
import Process from './components/Process'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

const PreviewForm = lazy(() => import('./components/PreviewForm'))

export default function App() {
  return (
    <PreviewProvider>
      <div className="min-h-screen bg-[#080808] text-ivory overflow-x-hidden">
        <Nav />
        <Hero />
        <TrustStrip />
        <Showcase />
        <ProblemSolution />
        <Process />
        <Benefits />
        <Testimonials />
        <CTA />
        <Footer />
        <Suspense fallback={null}>
          <PreviewForm />
        </Suspense>
      </div>
    </PreviewProvider>
  )
}
