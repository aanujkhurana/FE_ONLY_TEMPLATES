import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import MetricsBar from './sections/MetricsBar'
import AboutSection from './sections/AboutSection'
import CraftsmanshipSection from './sections/CraftsmanshipSection'
import ServicesSection from './sections/ServicesSection'
import ProcessSection from './sections/ProcessSection'
import ShowcaseSection from './sections/ShowcaseSection'
import TrustSection from './sections/TrustSection'
import TestimonialsSection from './sections/TestimonialsSection'
import CTASection from './sections/CTASection'
import Footer from './sections/Footer'

function SectionDivider() {
  return <div className="section-divider" />
}

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <MetricsBar />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <CraftsmanshipSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <ShowcaseSection />
      <SectionDivider />
      <TrustSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <CTASection />
      <Footer />
    </>
  )
}
