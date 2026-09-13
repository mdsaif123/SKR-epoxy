import { Box, Container, Typography } from "@mui/material";
import GalleryGrid from "../gallery/GalleryGrid";
import styles from "./GalleryPage.module.css";
import ServicesSection from "../components/Services/ServicesSection"

export const metadata = {
  title: "Gallery | Our Completed Projects",
  description:
    "Browse our gallery of completed Epoxy Flooring, PU Flooring, Waterproofing and Groove Cutting projects across industrial and commercial spaces.",
  alternates: {
    canonical: "/gallery",
  },
};


export default function GalleryPage() {
  return (
    <Box component="main" className={styles.page}>

      <GalleryGrid />
      <ServicesSection />
    </Box>
  );
}