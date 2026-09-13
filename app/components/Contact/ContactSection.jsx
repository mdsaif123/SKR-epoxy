import { Suspense } from "react";
import { Box, Container, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import QuotationForm from "./QuotationForm";
import styles from "./Contact.module.css";

export default function ContactSection() {
  return (
    <Box component="section" className={styles.section}>
      <Container maxWidth="lg">
        <Box className={styles.sectionHeader}>
          <Typography className={styles.sectionTag}>Get In Touch</Typography>
          <Typography variant="h2" className={styles.sectionTitle}>
            Get a Free Quotation
          </Typography>
          <Typography className={styles.sectionSubtitle}>
            Tell us about your project — our team will get back to you
            within 24 hours.
          </Typography>
        </Box>

        <Box className={styles.grid}>
          {/* Left: Contact Info */}
          <Box className={styles.infoCol}>
            <Typography variant="h5" className={styles.infoTitle}>
              Contact Information
            </Typography>
            <Typography className={styles.infoSubtitle}>
              Reach out to us directly or fill the quotation form —
              whichever works best for you.
            </Typography>

            <Box className={styles.infoItem}>
              <Box className={styles.infoIcon}>
                <LocationOnIcon />
              </Box>
              <Box>
                <Typography className={styles.infoLabel}>Address</Typography>
                <Typography className={styles.infoText}>
                  123, Industrial Area, Your City, State - 000000
                </Typography>
              </Box>
            </Box>

            <Box className={styles.infoItem}>
              <Box className={styles.infoIcon}>
                <PhoneIcon />
              </Box>
              <Box>
                <Typography className={styles.infoLabel}>Phone</Typography>
                <Typography className={styles.infoText}>
                  <a href="tel:+918084024848">+91 80840 24848</a>
                </Typography>
              </Box>
            </Box>

            <Box className={styles.infoItem}>
              <Box className={styles.infoIcon}>
                <EmailIcon />
              </Box>
              <Box>
                <Typography className={styles.infoLabel}>Email</Typography>
                <Typography className={styles.infoText}>
                  <a href="mailto:info@yourbrand.com">info@yourbrand.com</a>
                </Typography>
              </Box>
            </Box>

            <Box className={styles.infoItem}>
              <Box className={styles.infoIcon}>
                <AccessTimeIcon />
              </Box>
              <Box>
                <Typography className={styles.infoLabel}>
                  Working Hours
                </Typography>
                <Typography className={styles.infoText}>
                  Mon - Sat: 9:00 AM - 7:00 PM
                </Typography>
              </Box>
            </Box>

            <a
              href="https://wa.me/918084024848?text=Hi%2C%20I%20need%20a%20quotation%20for%20flooring%20work"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <WhatsAppIcon />
              Chat on WhatsApp
            </a>
          </Box>

          {/* Right: Quotation Form */}
          <Box className={styles.formCol}>
            <Suspense fallback={<Box className={styles.formLoading} />}>
              <QuotationForm />
            </Suspense>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}