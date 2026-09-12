import { Box, Container, Typography } from "@mui/material";
import ServiceCard from "../../app/components/Services/ServiceCard";
import servicesData from "../../app/data/servicesData";
import styles from "./Services.module.css";
import AboutSection from "../../app/components/About/AboutSection"

export const metadata = {
  title: "Our Services | YourBrand",
  description:
    "Explore our professional flooring services — Epoxy Flooring, PU Flooring, Waterproofing and Groove Cutting solutions for industrial, commercial and residential spaces.",
};

export default function ServicesPage() {
  return (
    <>
       <Box component="main" className={styles.page}>
      {/* Services Grid */}
      <Container maxWidth="lg" className={styles.gridSection}>
        <Box className={styles.grid}>
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </Box>
      </Container>
      <AboutSection />
    </Box>

    </>
 
  );
}