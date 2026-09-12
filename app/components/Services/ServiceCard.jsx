"use client";

import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./Services.module.css";

export default function ServiceCard({ service }) {
  return (
    <Link href={`/services/${service.slug}`} className={styles.cardLink}>
      <Box className={styles.card}>
        <Box className={styles.imageWrapper}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className={styles.cardImage}
          />
          <Box className={styles.imageOverlay} />
        </Box>

        <Box className={styles.cardBody}>
          <Typography variant="h6" className={styles.cardTitle}>
            {service.title}
          </Typography>
          <Typography className={styles.cardDesc}>
            {service.shortDescription}
          </Typography>

          <Box className={styles.cardFooter}>
            <span>View Details</span>
            <ArrowForwardIcon className={styles.arrowIcon} fontSize="small" />
          </Box>
        </Box>
      </Box>
    </Link>
  );
}