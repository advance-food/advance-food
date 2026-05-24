"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ProductsProps {
  onProductSelect: (productName: string) => void;
}

export default function Products({ onProductSelect }: ProductsProps) {
  const categories = [
    {
      title: "Dehydrated Garlic",
      subtitle: "Processed Premium Quality",
      desc: "Rich, pungent garlic cloves carefully peeled, dried, and graded into standard international cuts.",
      items: [
        "Garlic Flakes / Kibbled",
        "Garlic Chopped (1-3 mm)",
        "Garlic Minced (0.5-1.5 mm)",
        "Garlic Granules (40-80 mesh)",
        "Garlic Powder (100 mesh)",
      ],
      image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Dehydrated Onion",
      subtitle: "White, Red & Pink Varieties",
      desc: "Freshly harvested field onions processed under hygienic standard environments to preserve natural aroma.",
      items: [
        "Onion Flakes / Kibbled",
        "Onion Chopped (1-3 mm)",
        "Onion Minced (0.5-1.5 mm)",
        "Onion Granules (40-80 mesh)",
        "Onion Powder (100 mesh)",
      ],
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "Specialty Powders",
      subtitle: "Natural Spray-Dried Extracts",
      desc: "Premium spray-dried powders and ground dry herbal spices to enhance taste profiles in culinary foods.",
      items: [
        "Tomato & Tamarind Powder",
        "Lemon & Lime Juice Powder",
        "Amchur (Mango) Powder",
        "Mint & Curry Leaves Powder",
        "Green Chili Powder",
      ],
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-gray-50 relative">
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-primary/10 transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner wrapper */}
              <div className="h-52 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <span className="text-xs font-bold text-sky-200 uppercase tracking-widest block">
                    {cat.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Card Body Contents */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {cat.desc}
                </p>

                {/* Sublist checkmarks list */}
                <div className="flex flex-col gap-3 flex-grow">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-brand-primary shrink-0 mt-0.5" size={17} />
                      <span className="text-sm font-semibold text-gray-700 leading-none">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Direct enquiry button hook */}
                <button
                  onClick={() => onProductSelect(cat.title)}
                  className="mt-8 w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-800 hover:bg-brand-primary hover:border-brand-primary hover:text-white py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer group/btn"
                >
                  <span>Enquire for Specs</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
