"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";
import { spiceProducts } from "../../../data/spiceProducts";

export default function SpicesPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <main className="min-h-screen bg-gray-50/50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {/* Top Breadcrumb Navigation */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-primary transition-all duration-300 group cursor-pointer bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </Link>

        {/* Header Title */}
        <div className="max-w-3xl mt-6 mb-8 text-center md:text-left">
          <span className="text-xs font-bold text-brand-primary uppercase tracking-widest block mb-2">
            Product Categories
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Spices
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {spiceProducts.map((prod, idx) => {
            return (
              <Link
                key={idx}
                href={`/products/spices/${prod.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-xs hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Image container */}
                <div className="aspect-square w-full relative overflow-hidden bg-gray-50 select-none flex items-center justify-center">
                  {prod.image ? (
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${
                        prod.slug === 'fennel-seeds'
                          ? 'object-contain mix-blend-multiply'
                          : 'object-cover'
                      }`}
                    />
                  ) : (
                    <div className="text-gray-400 font-bold text-xs uppercase tracking-wider">No Image</div>
                  )}
                </div>

                {/* Label container at bottom */}
                <div className="p-5 flex-grow flex items-center justify-between border-t border-gray-100 bg-white">
                  <span className="text-sm sm:text-base font-medium text-brand-primary group-hover:text-brand-primary/80 transition-colors duration-300">
                    {prod.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Conversion Banner leading to Contact */}
      <section className="py-16 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Require custom specifications or pre-shipment samples?
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
