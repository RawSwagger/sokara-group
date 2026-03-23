import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Events from "@/components/Events";
import Portfolio from "@/components/Portfolio";
import Differentiators from "@/components/Differentiators";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Events />
      <Portfolio />
      <Differentiators />
      <Contact />
      <Footer />
    </main>
  );
}
