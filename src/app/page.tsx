import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Interstitial from "@/components/Interstitial";
import Pillars from "@/components/Pillars";
import InsideSokara from "@/components/InsideSokara";
import Contact from "@/components/Contact";
import LeahPersonalLink from "@/components/LeahPersonalLink";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Interstitial
        line1="The room is the receipt."
        line2="What happens here doesn't leave."
        bg="warm-gray"
      />
      <Pillars />
      <Interstitial
        line1="The firm the firms call."
        line2="The advisor's advisor."
        bg="white"
      />
      <InsideSokara />
      <Contact />
      <LeahPersonalLink />
      <Footer />
    </main>
  );
}
