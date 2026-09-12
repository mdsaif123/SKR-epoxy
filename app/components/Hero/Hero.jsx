"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography, Button, Stack, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./Hero.module.css";

const slides = [
  {
    src: "/Epoxy1.avif",
    alt: "Epoxy flooring installation in warehouse",
  },
  {
    src: "/epoxy2.avif",
    alt: "PU flooring finished project",
  },
  {
    src: "/epoxy4.jpg",
    alt: "Waterproofing work in progress",
  },
  {
    src: "/epoxy5.jpg",
    alt: "Groove cutting industrial floor",
  },
];

const SLIDE_INTERVAL = 4000; // 4 seconds

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(goToNext, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <Box component="section" className={styles.hero}>
      {/* Background Image Carousel */}
      <Box className={styles.carousel}>
        {slides.map((slide, index) => (
          <Box
            key={slide.src}
            className={`${styles.slide} ${
              index === current ? styles.activeSlide : ""
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={styles.bgImage}
            />
          </Box>
        ))}
      </Box>

      {/* Dark Gradient Overlay */}
      <Box className={styles.overlay} />

      {/* Prev / Next Arrows */}
      <IconButton
        className={`${styles.navArrow} ${styles.prevArrow}`}
        onClick={goToPrev}
        aria-label="previous slide"
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>
      <IconButton
        className={`${styles.navArrow} ${styles.nextArrow}`}
        onClick={goToNext}
        aria-label="next slide"
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>

      {/* Dot Indicators */}
      <Box className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === current ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Box>

      {/* Content */}
      <Container maxWidth="lg" className={styles.content}>
        <Typography variant="h1" className={styles.heading}>
          Premium Epoxy Flooring Solutions With SKR <br />
          Built to Last
        </Typography>

        <Typography variant="body1" className={styles.subheading}>
          Trusted experts in Epoxy Flooring, PU Flooring, Waterproofing and
          Groove Cutting — delivering durable, seamless and industrial-grade
          finishes for commercial, industrial and residential spaces.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          className={styles.buttonGroup}
        >
          <Button
            component={Link}
            href="/gallery"
            variant="outlined"
            size="large"
            className={styles.secondaryBtn}
          >
            Our Works
          </Button>

          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            className={styles.primaryBtn}
          >
            Get Free Quotation
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}