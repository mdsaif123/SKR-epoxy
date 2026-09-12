"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./ServiceDetail.module.css";

export default function QuoteButton({ slug }) {
  return (
    <Button
      component={Link}
      href={`/contact?service=${slug}`}
      variant="contained"
      fullWidth
      size="large"
      endIcon={<ArrowForwardIcon />}
      className={styles.quoteButton}
    >
      Get Free Quotation
    </Button>
  );
}