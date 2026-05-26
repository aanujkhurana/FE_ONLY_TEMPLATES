import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Flavors from './components/Flavors';
import Spotlight from './components/Spotlight';
import Texture from './components/Texture';
import Seasonal from './components/Seasonal';
import Experience from './components/Experience';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

export default function App() {
  useScrollReveal();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Philosophy />
      <Flavors />
      <Spotlight />
      <Texture />
      <Seasonal />
      <Experience />
      <SocialProof />
      <CTA />
      <Footer />
    </>
  );
}
