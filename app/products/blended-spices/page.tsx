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
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Kitchen King Masala",
      image: "https://images.unsplash.com/photo-1608797178974-15b35a61d121?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Chat Masala",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Chhole Masala",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Pavbhaji Masala",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Sambhar Masala",
      image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Achar Masala",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Pulav Masala",
      image: "https://images.unsplash.com/photo-1608797178974-15b35a61d121?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Punjabi Gravy Masala",
      image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Pani Puri Masala",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Chas Masala",
      image: "https://images.unsplash.com/photo-1511140973288-19bf21d7e771?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Manchurian Masala",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Magic Masala",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Pizza Seasoning",
      image: "https://images.unsplash.com/photo-1541745711111-c9d3cf4ff2c9?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Peri peri Spice Mix",
      image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Pasta Masala",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Biriyani Masala",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Chicken Masala",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Meat Masala",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Fish Curry Masala",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Chicken Biriyani Masala",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop"
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
