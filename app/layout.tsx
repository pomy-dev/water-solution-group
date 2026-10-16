import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SiteToaster } from "@/components/providers";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const sora = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: "Africa Water Solutions Group — Safe Water. Smarter Systems. Healthier Cities.",
    template: "%s | Africa Water Solutions Group",
  },
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  keywords: [
    "Africa Water Solutions Group",
    "Water Security",
    "Water Treatment Plants",
    "Reverse Osmosis",
    "Smart-Water Platforms",
    "WASH Solutions",
    "Households",
    "Hospitals",
    "Municipalities",
    "Industry",
  ],
  metadataBase: new URL("https://africawater.solutions"),
  openGraph: {
    title: "Africa Water Solutions Group — Safe Water. Smarter Systems. Healthier Cities.",
    description:
      "Integrated water security, treatment plants, reverse osmosis, smart-water platforms and WASH solutions for households, hospitals, municipalities and industry across Africa.",
    url: "https://africawater.solutions",
    siteName: "Africa Water Solutions Group",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Africa Water Solutions Group — Safe Water. Smarter Systems. Healthier Cities.",
    description:
      "Integrated water security, treatment plants, reverse osmosis, smart-water platforms and WASH solutions for households, hospitals, municipalities and industry across Africa.",
    images: ["/assets/logo.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  description:
    "Integrated water security, treatment plants, reverse osmosis, smart-water platforms and WASH solutions for households, hospitals, municipalities and industry across Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        <Suspense fallback={
          <div className="flex h-screen items-center justify-center bg-background">
            <Loader2 className="h-8 w-8 animate-spin text-water" />
          </div>
        }>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <SiteToaster />
        </Suspense>
      </body>
    </html>
  );
}
