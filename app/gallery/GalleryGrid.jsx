"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Box, Container, Typography, Button } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import galleryData from "../data/galleryData";
import Lightbox from "./Lightbox";
import styles from "./Gallery.module.css";

const categories = [
  "All",
  "Epoxy Flooring",
  "PU Flooring",
  "Waterproofing",
  "Groove Cutting",
];

const INITIAL_COUNT = 10;
const LOAD_MORE_COUNT = 10;

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [activeCategory]);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <Container maxWidth="lg" className={styles.galleryContainer}>

<Box className={styles.sectionHeader}>
          <Typography className={styles.sectionTag}>Portfolio</Typography>
          <Typography variant="h2" className={styles.sectionTitle}>
            Our Gallery
          </Typography>
          <Typography className={styles.sectionSubtitle}>
          A showcase of our completed projects — precision flooring,
        waterproofing and finishing work delivered with quality and care.
          </Typography>
        </Box>
      {/* Category Filter */}
      <Box className={styles.filterBar}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`${styles.filterBtn} ${
              activeCategory === cat ? styles.filterBtnActive : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </Box>

      {/* Masonry Grid */}
      <Box className={styles.masonryGrid}>
        {visibleItems.map((item, index) => (
          <Box
            key={item.id}
            className={styles.masonryItem}
            onClick={() => setLightboxIndex(index)}
          >
            <Box className={styles.imageWrapper}>
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={styles.galleryImage}
              />
              <Box className={styles.hoverOverlay}>
                <ZoomInIcon className={styles.zoomIcon} />
                <Typography className={styles.overlayTitle}>
                  {item.title}
                </Typography>
                <Typography className={styles.overlayCategory}>
                  {item.category}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {filteredItems.length === 0 && (
        <Typography className={styles.emptyText}>
          No projects found in this category.
        </Typography>
      )}

      {/* Show More Button */}
      {hasMore && (
        <Box className={styles.showMoreWrapper}>
          <Button
            onClick={handleShowMore}
            endIcon={<KeyboardArrowDownIcon />}
            className={styles.showMoreBtn}
          >
            Show More ({filteredItems.length - visibleCount} left)
          </Button>
        </Box>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={visibleItems}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </Container>
  );
}