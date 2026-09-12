import { Box, Container, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";
import servicesData from "../../data/servicesData";
import styles from "./Services.module.css";

export default function ServicesSection() {
  return (
    <Box component="section" className={styles.section}>
      <Container maxWidth="lg">
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

        <Box className={styles.grid}>
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}