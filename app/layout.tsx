import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://www.devvertix.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mobile App Development Company | iOS & Android Apps — Devvertix",
    template: "%s | Devvertix",
  },
  description:
    "Devvertix is a top mobile app development company building iOS & Android apps for startups and enterprises in the US, UK & UAE. 50+ apps shipped, 1M+ users. React Native, Flutter, Swift & Kotlin experts.",
  keywords: [
    "mobile app development company",
    "iOS app development",
    "Android app development",
    "React Native development",
    "Flutter app development",
    "mobile app developer USA",
    "hire mobile app developer",
    "startup mobile app development",
    "custom mobile app development",
    "AI mobile app development",
    "cross-platform app development",
    "app development agency",
    "mobile app development services",
    "iPhone app development company",
    "Swift app developer",
    "Kotlin app developer",
  ],
  authors: [{ name: "Devvertix", url: siteUrl }],
  creator: "Devvertix",
  publisher: "Devvertix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Devvertix",
    title: "Mobile App Development Company | iOS & Android Apps — Devvertix",
    description:
      "Top mobile app development company. We build iOS & Android apps for founders and startups. 50+ apps shipped, 1M+ users across the US, UK & UAE.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devvertix — Mobile App Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company | iOS & Android Apps — Devvertix",
    description:
      "Top mobile app development company. iOS & Android apps for startups. 50+ shipped, 1M+ users.",
    images: ["/og-image.png"],
    creator: "@devvertix",
  },
  verification: {
    google: "M9GbyySPPpys14JUE0B-Qdnr-uLIfBwRyr1HQbhGJCI",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Devvertix",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      description:
        "Devvertix is a mobile app development company and AI product studio building iOS & Android apps, AI-native SaaS, and automation for startups and enterprises in the US, UK & UAE.",
      foundingDate: "2020",
      areaServed: ["US", "GB", "AE"],
      knowsAbout: [
        "Mobile App Development",
        "iOS App Development",
        "Android App Development",
        "React Native",
        "Flutter",
        "AI Development",
        "SaaS Development",
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Devvertix",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#mobile-app-development`,
      name: "Mobile App Development",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: "Mobile App Development",
      description:
        "Custom iOS and Android mobile app development using React Native, Flutter, Swift, and Kotlin. We handle App Store and Google Play submissions end-to-end.",
      areaServed: ["US", "GB", "AE"],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#ai-development`,
      name: "AI-Native SaaS Development",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: "Software Development",
      description:
        "End-to-end AI product development — from architecture to paying users. AI agents, RAG pipelines, chatbots, and SaaS MVPs.",
      areaServed: ["US", "GB", "AE"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(inter.variable, "min-h-screen bg-background font-sans antialiased")}>
        <Navbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
