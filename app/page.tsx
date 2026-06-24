import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <TechStack />
      <Services />
      <Process />
      <Projects />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
