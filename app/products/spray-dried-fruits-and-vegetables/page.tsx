"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useQuoteModal } from "../../../context/QuoteModalContext";

export default function SprayDriedFruitsAndVegetablesPage() {
  const { openQuoteModal } = useQuoteModal();

  const sprayDriedProducts = [
    {
      name: "Tomato Powder",
      image: "https://images.unsplash.com/photo-1518977822534-7049a61fc0c2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Tamarind Powder",
      image: "https://images.unsplash.com/photo-1509358740172-6451e2622499?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Beetroot Powder",
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Carrot Powder",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Ginger Powder",
      image: "/images/products/dry-ginger.png"
    },
    {
      name: "Mint Powder",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Green Chilli Powder",
      image: "/images/products/green-chilli-powder.png"
    },
    {
      name: "Lemon Powder",
      image: "/images/products/lemon-powder.png"
    },
    {
      name: "Apple Powder",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Pomegranate Powder",
      image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Orange Powder",
      image: "https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Mango Powder",
      image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Pineapple Powder",
      image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Banana Powder",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Guava Powder",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Custard Apple Powder",
      image: "https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Litchi Powder",
      image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Cheese Powder",
      image: "https://images.unsplash.com/photo-1486887396153-fa416525c108?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Soya Sauce Powder",
      image: "https://images.unsplash.com/photo-1607338989399-79b1d2452c6f?q=80&w=600&auto=format&fit=crop"
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
            Spray dried Fruits & Vegetables
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sprayDriedProducts.map((prod, idx) => {
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
