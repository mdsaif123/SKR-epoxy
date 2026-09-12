"use client";

import Link from "next/link";
import { Box, Container, Typography, Button } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from "./Gallery.module.css";

export default function GalleryPage() {
  return (
    <Box component="main" className={styles.page}>
      <Container maxWidth="sm" className={styles.content}>
        <Box className={styles.iconCircle}>
          <ConstructionIcon className={styles.icon} />
        </Box>

        <Typography className={styles.tag}>Gallery</Typography>

        <Typography variant="h1" className={styles.title}>
          Coming Soon
        </Typography>

        <Typography className={styles.subtitle}>
          We&apos;re currently curating our best work — Epoxy Flooring, PU
          Flooring, Waterproofing and Groove Cutting projects — to showcase
          here. Check back soon!
        </Typography>

        <Box className={styles.progressBar}>
          <Box className={styles.progressFill} />
        </Box>

        <Box className={styles.actions}>
          <Button
            component={Link}
            href="/"
            variant="outlined"
            size="large"
            startIcon={<ArrowBackIcon />}
            className={styles.secondaryBtn}
          >
            Back to Home
          </Button>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            className={styles.primaryBtn}
          >
            Get a Quotation
          </Button>
        </Box>
      </Container>
    </Box>
  );
}