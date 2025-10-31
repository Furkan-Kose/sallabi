import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GraphicWorks from './components/GraphicWorks';
import BrandReferences from './components/BrandReferences';
import Organizations from './components/Organizations';
import CV from './components/CV';

function App() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgb(17, 24, 39)', 'rgb(31, 41, 55)', 'rgb(17, 24, 39)']
  );

  return (
    <motion.div style={{ backgroundColor }} className="min-h-screen">
    
      <Navbar />

      <Hero />
      <About />
      <GraphicWorks />
      <BrandReferences />
      <Organizations />
      <CV />
      <Contact />

      <Footer />
      
    </motion.div>
  );
}

export default App;
