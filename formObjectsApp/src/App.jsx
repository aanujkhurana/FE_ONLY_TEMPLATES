import Hero from './components/Hero';
import Statement from './components/Statement';
import Product from './components/Product';
import Principles from './components/Principles';
import Craft from './components/Craft';
import MarqueeBar from './components/MarqueeBar';
import CollectionGrid from './components/CollectionGrid';
import Quote from './components/Quote';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import './App.css';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Hero />
      <Statement />
      <Product />
      <Principles />
      <Craft />
      <MarqueeBar />
      <CollectionGrid />
      <Quote />
      <CTA />
      <Footer />
    </>
  );
}
