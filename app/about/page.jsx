import React from 'react'
import AboutSection from "../components/About/AboutSection"
import GalleryGrid from "../gallery/GalleryGrid"

export const metadata = {
  title: "About Us",
  description:
    "Learn about SKR Epoxy — led by Shakil Khan with 10+ years of industry experience, delivering expert Epoxy, PU Flooring, Waterproofing and Groove Cutting solutions.",
  alternates: {
    canonical: "/about",
  },
};

const page = () => {
  return (
    <div>
 <AboutSection />
 <GalleryGrid/>
      
    </div>
  )
}

export default page
