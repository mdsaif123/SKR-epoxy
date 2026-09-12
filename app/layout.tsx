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

export const metadata = {
  title: "YourBrand | Epoxy Flooring Experts",
  description: "Professional epoxy flooring, PU flooring, waterproofing and groove cutting services",
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
