"use client";

import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import MainProducts from "../components/MainProducts";
import Certifications from "../components/Certifications";
import CTABanner from "../components/CTABanner";
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



      {/* CTA Conversion Banner */}
      <CTABanner onContactClick={() => openQuoteModal("General Inquiry")} />

    </main>
  );
}
