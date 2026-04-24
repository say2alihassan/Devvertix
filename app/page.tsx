import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import CaseStudies from "@/components/CaseStudies";
import TechStack from "@/components/TechStack";
import WhyChooseUs from "@/components/WhyChooseUs";
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
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
