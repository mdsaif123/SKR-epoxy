import { Box, Container, Typography } from "@mui/material";
import ContactSection from "../components/Contact/ContactSection";
import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact Us | Get a Free Quotation",
  description:
    "Get in touch with us for Epoxy Flooring, PU Flooring, Waterproofing and Groove Cutting services. Request a free quotation today.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Box component="main" className={styles.page}>

      <ContactSection />
    </Box>
  );
}