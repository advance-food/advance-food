"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../context/QuoteModalContext";

function ProductsPageContent() {
  const { openQuoteModal } = useQuoteModal();
  const searchParams = useSearchParams();
  const comingSoonCategory = searchParams.get("coming-soon");

  const categories = [
    {
      name: "Dehydrated Vegetables",
      imageSrc: "/dehydrated_vegetables_circle.jpg",
      imageClass: "scale-[1.25] group-hover:scale-[1.3]"
    },
    {
      name: "Spices",
      imageSrc: "/spices_circle.jpg",
      imageClass: "scale-[1.25] group-hover:scale-[1.3]"
    },
    {
      name: "Spray dried Fruits & Vegetables",
      imageSrc: "/spray_dried_powder_circle.jpg",
      imageClass: "scale-[1.25] group-hover:scale-[1.3]"
    },
    {
      name: "Herbs",
      imageSrc: "/herbs_circle.jpg",
      imageClass: "scale-[1.25] group-hover:scale-[1.3]"
    },
    {
      name: "Blended Spices",
      imageSrc: "/blended_spices_circle.jpg",
      imageClass: "scale-[1.05] group-hover:scale-[1.1]"
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Premium Visual Banner Header */}
      <section
        className="relative h-[40vh] sm:h-[45vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1920&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 to-brand-dark/80"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
            What We Supply
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Our Premium Products
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* Main product categories section */}
      <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-50/20 rounded-full filter blur-3xl -z-10 transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-50/20 rounded-full filter blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section title headers */}
          <div className="max-w-5xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase">
              Our Offerings
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
              Our Main <span className="bg-gradient-to-r from-brand-primary to-sky-400 bg-clip-text text-transparent">Products</span>
            </h3>
            <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 mt-6 leading-relaxed max-w-4xl mx-auto">
              At <span className="font-semibold text-gray-900">Advance Food</span>, we offer premium dehydrated vegetables, spices, spray dried fruits & vegetables, herbs, and blended spices. Select a category below to explore details.
            </p>
          </div>

          {/* Circular icons grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 md:gap-6 justify-center items-stretch mt-12 max-w-5xl mx-auto">
            {categories.map((cat, idx) => {
              const href = cat.name === "Dehydrated Vegetables"
                ? "/products/dehydrated-vegetables"
                : cat.name === "Spices"
                  ? "/products/spices"
                  : cat.name === "Spray dried Fruits & Vegetables"
                    ? "/products/spray-dried-fruits-and-vegetables"
                    : cat.name === "Herbs"
                      ? "/products/herbs"
                      : cat.name === "Blended Spices"
                        ? "/products/blended-spices"
                        : `/products?coming-soon=${encodeURIComponent(cat.name)}`;
              const isComingSoonActive = comingSoonCategory === cat.name;

              return (
                <Link
                  key={idx}
                  href={href}
                  className={`flex flex-col items-center group cursor-pointer transition-all duration-300 p-4 rounded-2xl border ${
                    isComingSoonActive
                      ? "bg-sky-50/30 border-brand-primary/20 shadow-xs"
                      : "bg-transparent border-transparent hover:bg-gray-50 hover:border-gray-100"
                  }`}
                >
                  {/* Circular Icon Wrapper */}
                  <div className="relative flex items-center justify-center overflow-hidden rounded-full w-32 h-32 sm:w-40 sm:h-40 transition-transform duration-300">
                    <img
                      src={cat.imageSrc}
                      alt={cat.name}
                      className={`w-full h-full object-contain mix-blend-multiply transition-transform duration-500 ${cat.imageClass}`}
                    />
                  </div>
                  
                  {/* Product Label */}
                  <h4 className="mt-2 text-sm sm:text-base font-bold text-center tracking-tight transition-colors duration-300 min-h-[40px] flex items-center justify-center text-gray-800 group-hover:text-brand-primary">
                    {cat.name}
                  </h4>
                </Link>
              );
            })}
          </div>

          {/* Coming Soon Area */}
          {comingSoonCategory && (
            <div className="mt-16 text-left">
              <div className="text-center py-16 bg-gray-50 rounded-3xl border border-gray-200 shadow-2xs max-w-2xl mx-auto animate-fade-in">
                <p className="text-gray-500 text-sm font-semibold">
                  The {comingSoonCategory} detailed catalog is currently under preparation.
                </p>
                <button
                  onClick={() => openQuoteModal(`${comingSoonCategory} Inquiry`)}
                  className="mt-6 inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-white font-extrabold px-6 py-3.5 rounded-xl text-sm transition-all duration-300 cursor-pointer group"
                >
                  <span>Request Specifications</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

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

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-40 text-center text-gray-400">
        Loading catalog options...
      </div>
    }>
      <ProductsPageContent />
    </Suspense>
  );
}
