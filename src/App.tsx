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
  return (
    <div className="min-h-screen bg-black">
    
      <Navbar />

      <Hero />
      <About />
      <GraphicWorks />
      <BrandReferences />
      <Organizations />
      <CV />
      <Contact />

      <Footer />
      
    </div>
  );
}

export default App;
