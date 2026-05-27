"use client";

import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyChooseUs from "../components/WhyChooseUs";
import Products from "../components/Products";
import CTABanner from "../components/CTABanner";
import ContactForm from "../components/ContactForm";
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

      {/* Products list with custom spec enquiry hooks */}
      <Products limit={9} onProductSelect={(productName) => openQuoteModal(productName)} />

      {/* CTA Conversion Banner */}
      <CTABanner onContactClick={() => openQuoteModal("General Inquiry")} />

      {/* Embedded footer Contact Form for easy enquiries */}
      <ContactForm preselectedProduct="General Inquiry" />
    </main>
  );
}
