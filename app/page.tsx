import Image from "next/image";
import Hero from "../app/components/Hero/Hero"
import ServicesSection from "../app/components/Services/ServicesSection"
import AboutSection from "../app/components/About/AboutSection"

export default function Home() {
  return (
   <>
   <main>
   <Hero />
   <ServicesSection />
   <AboutSection />
   </main>

   </>
  );
}
