"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { products } from "../data/products";

interface ProductsProps {
  onProductSelect: (productName: string) => void;
  limit?: number;
}

export default function Products({ onProductSelect, limit }: ProductsProps) {
  const categories = products;

  return (
    <section id="products" className="pt-20 md:pt-28 pb-10 md:pb-14 bg-gray-50 relative">
      <div className="absolute top-0 left-0 w-64 h-64 bg-sky-50/40 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headers */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase">
            Our Specialties
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Processed Product Catalog
          </p>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            Explore our certified range of processed dehydrated ingredients ready for worldwide industrial supply chains.
          </p>
        </div>

        {/* Categories Grid - Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {categories.slice(0, limit).map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-xs hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner wrapper */}
              <Link
                href={`/${cat.slug}`}
                className="h-52 w-full relative overflow-hidden select-none block"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent z-10"></div>
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-6 right-6 z-20">
                  <span className="text-xs font-bold text-sky-300 uppercase tracking-widest block">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 leading-tight tracking-tight group-hover:text-sky-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>
              </Link>

              {/* Card Body Contents */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {cat.desc}
                </p>

                {/* Technical Specifications Labeled Parameter List */}
                <div className="space-y-2 flex-grow">
                  {cat.specs.map((spec, specIdx) => (
                    <div
                      key={specIdx}
                      className="flex justify-between items-start gap-4 text-xs py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-semibold text-gray-400 uppercase tracking-wider shrink-0 mt-0.5">
                        {spec.label}
                      </span>
                      <span className="font-extrabold text-gray-900 text-right leading-tight">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Direct enquiry button hook */}
                <button
                  onClick={() => onProductSelect(cat.title)}
                  className="mt-8 w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-800 hover:bg-brand-primary hover:border-brand-primary hover:text-white py-3.5 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer group/btn"
                >
                  <span>Enquire for Specs</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {limit && categories.length > limit && (
          <div className="flex justify-center mt-14">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-white font-extrabold px-8 py-4 rounded-xl text-base transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer group"
            >
              <span>View All Products</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}


