"use client";

import React from "react";
import Link from "next/link";

export default function MainProducts() {
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
            At <span className="font-semibold text-gray-900">Advance Food</span>, we offer premium dehydrated vegetables, spices, spray dried fruits & vegetables, herbs, and blended spices. Processed under strict quality control, our products retain their natural taste, aroma, and long shelf life.
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

            return (
              <Link
                key={idx}
                href={href}
                className="flex flex-col items-center group cursor-pointer transition-all duration-300 p-4 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 block"
              >
                {/* Circular Icon Wrapper */}
                <div className="relative flex items-center justify-center overflow-hidden rounded-full w-32 h-32 sm:w-40 sm:h-40">
                  <img
                    src={cat.imageSrc}
                    alt={cat.name}
                    className={`w-full h-full object-contain mix-blend-multiply transition-all duration-500 group-hover:rotate-2 ${cat.imageClass}`}
                  />
                </div>
                
                {/* Product Label */}
                <h4 className="mt-2 text-sm sm:text-base font-bold text-gray-800 text-center tracking-tight group-hover:text-brand-primary transition-colors duration-300 min-h-[40px] flex items-center justify-center">
                  {cat.name}
                </h4>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
