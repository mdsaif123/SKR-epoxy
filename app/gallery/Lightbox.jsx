"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Box, Typography, IconButton, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./Gallery.module.css";

export default function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  const item = items[activeIndex];

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev, onClose]);

  // Body scroll lock while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!item) return null;

  return (
    <Box className={styles.lightboxOverlay} onClick={onClose}>
      <IconButton className={styles.closeBtn} onClick={onClose}>
        <CloseIcon />
      </IconButton>

      <IconButton
        className={`${styles.navBtn} ${styles.navBtnLeft}`}
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>

      <Box
        className={styles.lightboxContent}
        onClick={(e) => e.stopPropagation()}
      >
        <Box className={styles.lightboxImageWrapper}>
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 900px) 100vw, 80vw"
            className={styles.lightboxImage}
          />
        </Box>

        <Box className={styles.lightboxInfo}>
          <Chip label={item.category} className={styles.lightboxChip} />
          <Typography variant="h6" className={styles.lightboxTitle}>
            {item.title}
          </Typography>
          <Typography className={styles.lightboxDesc}>
            {item.description}
          </Typography>
          <Typography className={styles.lightboxCounter}>
            {activeIndex + 1} / {items.length}
          </Typography>
        </Box>
      </Box>

      <IconButton
        className={`${styles.navBtn} ${styles.navBtnRight}`}
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}