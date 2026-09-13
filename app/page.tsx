import Image from "next/image";
import Hero from "../app/components/Hero/Hero"
import ServicesSection from "../app/components/Services/ServicesSection"
import AboutSection from "../app/components/About/AboutSection"
import GalleryGrid from "../app/gallery/GalleryGrid"
import ContactSection from "../app/components/Contact/ContactSection"

export const metadata = {
  title: "Home",
  description:
    "Leading Epoxy Flooring, PU Flooring, Waterproofing and Groove Cutting contractor. 10+ years of experience, trusted by industrial and commercial clients. Get a free quote today.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
   <>
   <main>
   <Hero />
   <ServicesSection />
   <AboutSection />
   <GalleryGrid/>
   <ContactSection />

  
   </main>

   </>
  );
}
