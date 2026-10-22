import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import TodaysMenu from '@/components/TodaysMenu';
import Features from '@/components/Features';
import MessPlans from '@/components/MessPlans';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TodaysMenu />
        <MenuSection />
        <Features />
        <MessPlans />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
