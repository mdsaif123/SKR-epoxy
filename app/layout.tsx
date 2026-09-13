import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../app/components/Navbar/Navbar";
import Footer from "../app/components/Footer/Footer"
import ThemeRegistry from "../app/components/ThemeRegistry";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.yourbrand.com"), // apna actual domain daalein
  title: {
    default: "YourBrand | Epoxy & PU Flooring Experts",
    template: "%s | YourBrand", // har page ka title "Page Name | YourBrand" format mein banega
  },
  description:
    "Professional Epoxy Flooring, PU Flooring, Waterproofing and Groove Cutting services for industrial, commercial and residential spaces. Get a free quotation today.",
  keywords: [
    "epoxy flooring",
    "PU flooring",
    "waterproofing",
    "groove cutting",
    "industrial flooring contractor",
    "epoxy flooring near me",
  ],
  authors: [{ name: "YourBrand" }],
  creator: "YourBrand",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.yourbrand.com",
    siteName: "YourBrand",
    title: "YourBrand | Epoxy & PU Flooring Experts",
    description:
      "Professional Epoxy Flooring, PU Flooring, Waterproofing and Groove Cutting services.",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "YourBrand Flooring Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YourBrand | Epoxy & PU Flooring Experts",
    description:
      "Professional Epoxy Flooring, PU Flooring, Waterproofing and Groove Cutting services.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.yourbrand.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "YourBrand",
  image: "https://www.yourbrand.com/og-image.jpg",
  "@id": "https://www.yourbrand.com",
  url: "https://www.yourbrand.com",
  telephone: "+91-8084024848",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123, Industrial Area",
    addressLocality: "Your City",
    addressRegion: "State",
    postalCode: "000000",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "19:00",
  },
  sameAs: [
    "https://facebook.com/yourbrand",
    "https://instagram.com/yourbrand",
    "https://linkedin.com/company/yourbrand",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeRegistry>
        <Navbar/>
        {children}
        <Footer/>
        </ThemeRegistry>
        </body>
    </html>
  );
}
