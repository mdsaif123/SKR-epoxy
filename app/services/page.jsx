import { Box, Container, Typography } from "@mui/material";
import ServiceCard from "../../app/components/Services/ServiceCard";
import servicesData from "../../app/data/servicesData";
import styles from "./Services.module.css";
import AboutSection from "../../app/components/About/AboutSection"
import GalleryGrid from "../gallery/GalleryGrid"

export const metadata = {
  title: "Our Services",
  description:
    "Explore our professional flooring services — Epoxy Flooring, PU Flooring, Waterproofing and Groove Cutting solutions for industrial, commercial and residential spaces.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
       <Box component="main" className={styles.page}>

       <Box className={styles.sectionHeader}>
          <Typography className={styles.sectionTag}>What We Offer</Typography>
          <Typography variant="h2" className={styles.sectionTitle}>
            Our Services
          </Typography>
          <Typography className={styles.sectionSubtitle}>
            End-to-end flooring solutions engineered for durability, safety
            and a flawless finish.
          </Typography>
        </Box>
      {/* Services Grid */}
      <Container maxWidth="lg" className={styles.gridSection}>
        <Box className={styles.grid}>
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </Box>
      </Container>
      <AboutSection />
      <GalleryGrid/>
    </Box>

    </>
 
  );
}