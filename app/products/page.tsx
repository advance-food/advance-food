"use client";

import React from "react";
import Link from "next/link";
import Products from "../../components/Products";
import OtherProducts from "../../components/OtherProducts";
import { useQuoteModal } from "../../context/QuoteModalContext";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <main className="min-h-screen pt-20">
      {/* Premium Watercolor Banner Header */}
      <section
        className="relative h-[40vh] sm:h-[45vh] flex items-center justify-center bg-cover bg-center border-b border-gray-150"
        style={{
          backgroundImage: `url('/premium_watercolor_banner.png')`,
        }}
      >
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
            What We Supply
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-dark leading-tight">
            Our Premium Products
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Embedded Interactive Products Catalog */}
      <Products onProductSelect={(productName) => openQuoteModal(productName)} />

      {/* Other Products We Offer */}
      <OtherProducts onProductSelect={(productName) => openQuoteModal(productName)} />

      {/* Conversion Banner leading to Contact */}
      <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Require custom mesh sizing or pre-shipment samples?
          </h3>
          <p className="text-sm sm:text-base text-gray-400 mt-4 max-w-xl">
            We happily supply lab-verified product samples to global industrial clients for quality assessment. Let us know your requirements.
          </p>
          <Link
            href="/contact"
            className="mt-8 flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer group"
          >
            <span>Request Custom Samples</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
