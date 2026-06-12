"use client";

import React from "react";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import MainProducts from "../components/MainProducts";
import Certifications from "../components/Certifications";
import CTABanner from "../components/CTABanner";
import LatestBlogs from "../components/LatestBlogs";

// Load map client-side only to avoid SSR hydration mismatch
const GlobalExportReach = dynamic(
  () => import("../components/GlobalExportReach"),
  { ssr: false }
);
import { useQuoteModal } from "../context/QuoteModalContext";

export default function Home() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <main className="min-h-screen">
      {/* Premium Hero section with global quote triggers */}
      <Hero onGetQuoteClick={() => openQuoteModal("General Inquiry")} />

      {/* Strategic statistics counters */}
      <Stats />

      {/* About teaser cards representing company pillars */}
      <WhyChooseUs />

      {/* Main product categories section */}
      <MainProducts />

      {/* Certifications row banner */}
      <Certifications />

      {/* Global Export Reach – interactive world map */}
      <GlobalExportReach />

      {/* CTA Conversion Banner */}
      <CTABanner onContactClick={() => openQuoteModal("General Inquiry")} />

      {/* Latest Blogs & Insights Grid */}
      <LatestBlogs />

    </main>
  );
}
