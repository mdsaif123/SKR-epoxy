"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./Contact.module.css";

const serviceOptions = [
  { value: "epoxy-flooring", label: "Epoxy Flooring" },
  { value: "pu-flooring", label: "PU (Polyurethane) Flooring" },
  { value: "waterproofing", label: "Waterproofing Solutions" },
  { value: "groove-cutting", label: "Groove Cutting & Filling" },
  { value: "other", label: "Other / Not Sure" },
];

export default function QuotationForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: preselectedService,
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: apna API route ya email service (Formspree/EmailJS/Resend) yahan connect karein
      // Example: await fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) });

      await new Promise((resolve) => setTimeout(resolve, 1200)); // temporary simulate

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Box className={styles.formCard}>
        <Box className={styles.successBox}>
          <CheckCircleIcon className={styles.successIcon} />
          <Typography variant="h6" className={styles.successTitle}>
            Thank You!
          </Typography>
          <Typography className={styles.successText}>
            Your quotation request has been received. Our team will contact
            you within 24 hours.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => setStatus("idle")}
            className={styles.successBtn}
          >
            Submit Another Request
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box className={styles.formCard}>
      <Typography variant="h5" className={styles.formTitle}>
        Request a Quotation
      </Typography>
      <Typography className={styles.formSubtitle}>
        Fill out the form below and we&apos;ll get back to you shortly.
      </Typography>

      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          className={styles.field}
        />

        <Box className={styles.rowFields}>
          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            fullWidth
            className={styles.field}
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            className={styles.field}
          />
        </Box>

        <TextField
          select
          label="Select Service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          fullWidth
          className={styles.field}
        >
          {serviceOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Project Details"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          placeholder="Tell us about your space, area (sq. ft.), location, etc."
          className={styles.field}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={status === "loading"}
          endIcon={
            status === "loading" ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              <SendIcon />
            )
          }
          className={styles.submitBtn}
        >
          {status === "loading" ? "Sending..." : "Get Free Quotation"}
        </Button>

        {status === "error" && (
          <Typography className={styles.errorText}>
            Something went wrong. Please try again or call us directly.
          </Typography>
        )}
      </form>
    </Box>
  );
}