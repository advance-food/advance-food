"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";

export default function BlendedSpicesPage() {
  const { openQuoteModal } = useQuoteModal();

  const blendedProducts = [
    {
      name: "Garam Masala",
      image: "/images/Blended Spices/Garam Masala.jpg"
    },
    {
      name: "Kitchen King Masala",
      image: "/images/Blended Spices/Kitchen King Masala.jpg"
    },
    {
      name: "Chat Masala",
      image: "/images/Blended Spices/Chat Masala.jpg"
    },
    {
      name: "Chhole Masala",
      image: "/images/Blended Spices/Chhole Masala.jpg"
    },
    {
      name: "Pavbhaji Masala",
      image: "/images/Blended Spices/Pavbhaji  Masala.jpg"
    },
    {
      name: "Sambhar Masala",
      image: "/images/Blended Spices/Sambhar Masala.jpg"
    },
    {
      name: "Achar Masala",
      image: "/images/Blended Spices/Achar Masala.jpg"
    },
    {
      name: "Pulav Masala",
      image: "/images/Blended Spices/Pulav Masala.jpg"
    },
    {
      name: "Punjabi Gravy Masala",
      image: "/images/Blended Spices/Panjabi Gravy Masala.jpg"
    },
    {
      name: "Pani Puri Masala",
      image: "/images/Blended Spices/Panipuri Masala.jpg"
    },
    {
      name: "Chas Masala",
      image: "/images/Blended Spices/Chas masala.jpg"
    },
    {
      name: "Manchurian Masala",
      image: "/images/Blended Spices/Manchurian Masala.jpg"
    },
    {
      name: "Magic Masala",
      image: "/images/Blended Spices/Magic Masala.jpg"
    },
    {
      name: "Pizza Seasoning",
      image: "/images/Blended Spices/Pizza Seasoning.jpg"
    },
    {
      name: "Peri peri Spice Mix",
      image: "/images/Blended Spices/Peri Peri Spice Mix.jpg"
    },
    {
      name: "Pasta Masala",
      image: "/images/Blended Spices/Pasta Masala.jpg"
    },
    {
      name: "Biriyani Masala",
      image: "/images/Blended Spices/Biriyani Masala.jpg"
    },
    {
      name: "Chicken Masala",
      image: "/images/Blended Spices/Chicken Masala.jpg"
    },
    {
      name: "Meat Masala",
      image: "/images/Blended Spices/Meat Masala.jpg"
    },
    {
      name: "Fish Curry Masala",
      image: "/images/Blended Spices/Fish Curry Masala.jpg"
    },
    {
      name: "Chicken Biriyani Masala",
      image: "/images/Blended Spices/Chicken Biriyani Masala.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50/50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {/* Top Breadcrumb Navigation */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-primary transition-colors group cursor-pointer"
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
            Blended Spices
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blendedProducts.map((prod, idx) => {
            return (
              <div
                key={idx}
                onClick={() => openQuoteModal(prod.name)}
                className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-xs hover:shadow-md hover:border-brand-primary/20 transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* Image container */}
                <div className="aspect-square w-full relative overflow-hidden bg-gray-50 select-none flex items-center justify-center">
                  {prod.image ? (
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-gray-400 font-bold text-xs uppercase tracking-wider">No Image</div>
                  )}
                </div>

                {/* Label container at bottom */}
                <div className="p-5 flex-grow flex items-center justify-between border-t border-gray-100 bg-white">
                  <span className="text-sm sm:text-base font-medium text-brand-primary group-hover:text-brand-primary/80 transition-colors duration-300">
                    {prod.name}
                  </span>
                </div>
              </div>
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
