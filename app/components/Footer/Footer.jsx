import Link from "next/link";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import styles from "./Footer.module.css";


const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Epoxy Flooring", href: "/services/epoxy-flooring" },
  { label: "PU Flooring", href: "/services/pu-flooring" },
  { label: "Waterproofing", href: "/services/waterproofing" },
  { label: "Groove Cutting", href: "/services/groove-cutting" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" className={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} className={styles.grid}>
          {/* Company Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Link href="/" className={styles.logo}>
  <Image
    src="/logo/skr_logo-removebg-preview.png"
    alt="YourBrand Logo"
    width={80}
    height={35}
    priority
    className={styles.logoImage}
  />
</Link>
            <Typography className={styles.desc}>
              Trusted experts in epoxy flooring, PU flooring, waterproofing
              and groove cutting solutions for industrial and commercial
              spaces.
            </Typography>
            <Box className={styles.socialIcons}>
              <IconButton
                component="a"
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className={styles.iconBtn}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className={styles.iconBtn}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className={styles.iconBtn}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/919999999999"
                target="_blank"
                aria-label="WhatsApp"
                className={styles.iconBtn}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" className={styles.heading}>
              Quick Links
            </Typography>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Services */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" className={styles.heading}>
              Our Services
            </Typography>
            <ul className={styles.linkList}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" className={styles.heading}>
              Contact Us
            </Typography>
            <Box className={styles.contactItem}>
              <LocationOnIcon className={styles.contactIcon} />
              <Typography>
                Delhi Office Address,
                Mayur Vihar Phase1
              </Typography>
            </Box>
            <Box className={styles.contactItem}>
              <PhoneIcon className={styles.contactIcon} />
              <Typography>+91 8084024848</Typography>
            </Box>
            <Box className={styles.contactItem}>
              <EmailIcon className={styles.contactIcon} />
              <Typography>info@skr.com</Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box className={styles.bottomBar}>
          <Typography className={styles.copyright}>
            © {year} SKR All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}