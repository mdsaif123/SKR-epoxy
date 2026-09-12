import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import styles from "./About.module.css";

const whyChooseUs = [
  {
    icon: <EngineeringIcon />,
    title: "Skilled & Trained Team",
    desc: "Every team member has hands-on expertise, with 5+ years of field experience.",
  },
  {
    icon: <WorkspacePremiumIcon />,
    title: "Premium Quality Work",
    desc: "We use industry-grade materials for a durable, long-lasting finish every time.",
  },
  {
    icon: <VerifiedIcon />,
    title: "Trusted & Reliable",
    desc: "Years of consistent, on-time delivery has earned us the trust of our clients.",
  },
  {
    icon: <SupportAgentIcon />,
    title: "Dedicated Support",
    desc: "From consultation to completion, our team stays with you at every step.",
  },
];

export default function AboutSection() {
  return (
    <Box component="section" className={styles.section}>
      <Container maxWidth="lg">
        <Box className={styles.topGrid}>
          {/* Left: Image with experience badge */}
          <Box className={styles.imageCol}>
            <Box className={styles.imageWrapper}>
              <Image
                src="/Epoxy1.avif"
                alt="Our flooring work in progress"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.aboutImage}
              />
            </Box>
            <Box className={styles.experienceBadge}>
              <Typography className={styles.badgeNumber}>10+</Typography>
              <Typography className={styles.badgeText}>
                Years of <br /> Experience
              </Typography>
            </Box>
          </Box>

          {/* Right: Content */}
          <Box className={styles.contentCol}>
            <Typography className={styles.sectionTag}>About Us</Typography>
            <Typography variant="h2" className={styles.sectionTitle}>
              Building Strong, Seamless & Long-Lasting Floors
            </Typography>
            <Typography className={styles.paragraph}>
              We specialize in Epoxy Flooring, PU Flooring, Waterproofing and
              Groove Cutting solutions for industrial, commercial and
              residential spaces. With a strong focus on quality and
              precision, we deliver durable flooring systems that are built
              to perform under the toughest conditions.
            </Typography>
            <Typography className={styles.paragraph}>
              Our company is led by <strong>Shakil Khan</strong>, who brings
              over <strong>10 years of hands-on industry experience</strong>{" "}
              to every project. Backed by a team of skilled professionals —
              each with <strong>5+ years of field expertise</strong> — we
              ensure every job is handled with the right knowledge, the right
              tools and complete attention to detail.
            </Typography>

            <Box className={styles.founderBox}>
              <Box className={styles.founderAvatar}>SK</Box>
              <Box>
                <Typography className={styles.founderName}>
                  Shakil Khan
                </Typography>
                <Typography className={styles.founderRole}>
                  Founder — 10+ Years of Industry Experience
                </Typography>
                <Typography className={styles.founderContact}>
                  📞 <a href="tel:+918084024848">+91 80840 24848</a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Why Choose Us cards */}
        <Box className={styles.whyGrid}>
          {whyChooseUs.map((item) => (
            <Box key={item.title} className={styles.whyCard}>
              <Box className={styles.whyIcon}>{item.icon}</Box>
              <Typography className={styles.whyTitle}>
                {item.title}
              </Typography>
              <Typography className={styles.whyDesc}>{item.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}