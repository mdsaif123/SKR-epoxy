import { Suspense } from "react";
import { Box, Container, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import QuotationForm from "./QuotationForm";
import styles from "./Contact.module.css";

export default function ContactPage() {
  return (
    <Box component="main" className={styles.page}>
      <Container maxWidth="lg" className={styles.contentSection}>
        <Box className={styles.grid}>
          {/* Left: Contact Info */}
          <Box className={styles.infoCol}>
            <Typography variant="h5" className={styles.infoTitle}>
              Contact Information
            </Typography>
            <Typography className={styles.infoSubtitle}>
              Reach out to us directly or fill the quotation form — whichever
              works best for you.
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
                  <a href="mailto:info@yourbrand.com">info@skr.com</a>
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
            href="https://wa.me/..."
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