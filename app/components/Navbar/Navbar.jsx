"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./Navbar.module.css";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  return (
    <AppBar position="sticky" className={styles.appBar} elevation={2}>
      <Toolbar className={styles.toolbar}>
        {/* Logo */}


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

        {/* Desktop Menu */}
        <Box className={styles.desktopMenu}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              className={styles.navButton}
            >
              {link.label}
            </Button>
          ))}
          <Button
            component={Link}
            href="/contact"
            className={styles.quoteButton}
          >
            Get Quotation
          </Button>
        </Box>

        {/* Mobile Hamburger */}
        <IconButton
          className={styles.hamburger}
          onClick={toggleDrawer}
          aria-label="open menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box className={styles.drawerBox} role="presentation">
          <IconButton onClick={toggleDrawer} className={styles.closeIcon}>
            <CloseIcon />
          </IconButton>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={toggleDrawer}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/contact"
                onClick={toggleDrawer}
              >
                <ListItemText primary="Get Quotation" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}