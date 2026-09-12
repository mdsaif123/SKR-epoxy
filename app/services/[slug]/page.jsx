import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography, List, ListItem } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import servicesData from "../../data/servicesData";
import QuoteButton from "./QuoteButton";
import styles from "./ServiceDetail.module.css";

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | YourBrand`,
    description: service.fullDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <Box component="main" className={styles.page}>
      <Box className={styles.banner}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />
        <Box className={styles.bannerOverlay} />
        <Container maxWidth="lg" className={styles.bannerContent}>
          <Typography className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
            <span>{service.title}</span>
          </Typography>
          <Typography variant="h1" className={styles.bannerTitle}>
            {service.title}
          </Typography>
          <Typography className={styles.bannerSubtitle}>
            {service.shortDescription}
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" className={styles.detailSection}>
        <Box className={styles.contentGrid}>
          <Box className={styles.leftCol}>
            <Typography variant="h5" className={styles.overviewTitle}>
              Overview
            </Typography>
            <Typography className={styles.description}>
              {service.fullDescription}
            </Typography>

            <Typography variant="h5" className={styles.featuresTitle}>
              Key Features
            </Typography>

            <List className={styles.featuresList}>
              {service.features.map((feature) => (
                <ListItem key={feature} className={styles.featureItem}>
                  <CheckCircleIcon className={styles.checkIcon} />
                  <span>{feature}</span>
                </ListItem>
              ))}
            </List>
          </Box>

          <Box className={styles.rightCol}>
            <Box className={styles.quoteCard}>
              <Typography variant="h6" className={styles.quoteTitle}>
                Need {service.title}?
              </Typography>
              <Typography className={styles.quoteText}>
                Get a free, no-obligation quotation from our experts within
                24 hours.
              </Typography>
              <QuoteButton slug={service.slug} />
              <Typography className={styles.quotePhone}>
                Or call us: <a href="tel:+919999999999">+91 99999 99999</a>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={styles.otherServices}>
          <Typography variant="h5" className={styles.otherTitle}>
            Explore Other Services
          </Typography>
          <Box className={styles.otherGrid}>
            {servicesData
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={styles.otherCard}
                >
                  <Box className={styles.otherImageWrapper}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 600px) 100vw, 33vw"
                      className={styles.otherImage}
                    />
                  </Box>
                  <Typography className={styles.otherCardTitle}>
                    {s.title}
                  </Typography>
                </Link>
              ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}