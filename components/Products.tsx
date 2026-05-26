"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductsProps {
  onProductSelect: (productName: string) => void;
  limit?: number;
}

export default function Products({ onProductSelect, limit }: ProductsProps) {
  const categories = [
    {
      title: "Dehydrated Garlic",
      subtitle: "Premium Vegetable Crops",
      desc: "Rich, pungent garlic processed with aroma and nutrition fully intact, sourced directly from local agricultural hubs.",
      specs: [
        { label: "Clove/Flakes", value: "8 - 15 MM" },
        { label: "Chopped", value: "3 - 5 MM" },
        { label: "Minced", value: "1 - 3 MM" },
        { label: "Granules", value: "0.5 - 1 MM" },
        { label: "Powder", value: "80 - 100 Mesh" },
        { label: "Color", value: "Brownish" },
        { label: "Packing", value: "20 Kg / 25 Kg" },
        { label: "Quality", value: "A-grade Commercial" },
      ],
      image: "/images/products/garlic-flakes.png",
    },
    {
      title: "Dehydrated White Onion",
      subtitle: "Symmetric Premium Slices",
      desc: "Fresh agricultural white onion dehydrated under highly hygienic controls to retain maximum natural pungency.",
      specs: [
        { label: "Flakes", value: "8 - 15 MM" },
        { label: "Chopped", value: "3 - 5 MM" },
        { label: "Minced", value: "1 - 3 MM" },
        { label: "Granules", value: "0.5 - 1 MM" },
        { label: "Powder", value: "80 - 100 Mesh" },
        { label: "Color", value: "White" },
        { label: "Packing", value: "14 Kg / 20 Kg" },
        { label: "Quality", value: "A-grade Commercial" },
      ],
      image: "/images/products/white-onion-flakes.png",
    },
    {
      title: "Dehydrated Red/Pink Onion",
      subtitle: "Vibrant Local Varieties",
      desc: "Prime Gujarat field red onions processed with highly controlled dehydration technology to secure excellent flavor.",
      specs: [
        { label: "Flakes", value: "8 - 15 MM" },
        { label: "Chopped", value: "3 - 5 MM" },
        { label: "Minced", value: "1 - 3 MM" },
        { label: "Granules", value: "0.5 - 1 MM" },
        { label: "Powder", value: "80 - 100 Mesh" },
        { label: "Color", value: "Red / Pink" },
        { label: "Packing", value: "14 Kg / 20 Kg" },
        { label: "Quality", value: "A-grade Commercial" },
      ],
      image: "/images/products/red-onion-flakes.png",
    },
    {
      title: "Dried Red Chilli",
      subtitle: "Aromatic Hot Spices",
      desc: "Premium, carefully picked sun-dried red chillies and flakes offering strong spicy flavor profiles.",
      specs: [
        { label: "Varieties", value: "Teja, Kashmiri, Guntur, Sannam, Bydagi" },
        { label: "Chilli Flakes", value: "Available" },
        { label: "Chilli Seeds", value: "Available" },
        { label: "Chilli Powder", value: "Available" },
        { label: "Aroma & Heat", value: "Highly Pungent & Spicy" },
        { label: "Quality", value: "Export Grade" },
      ],
      image: "/images/products/red-chilli.png",
    },
    {
      title: "Cumin Seeds",
      subtitle: "Earthys Spices & Seeds",
      desc: "Aromatic, machine-cleaned cumin seeds offering a warm, earthy flavor ideal for global culinary applications.",
      specs: [
        { label: "Seed Length", value: "5 - 6 MM" },
        { label: "Color", value: "Yellowish-brown to warm brown" },
        { label: "Forms Available", value: "Whole Seeds / Fine Powder" },
        { label: "Moisture Content", value: "Low (Safe Long Transit)" },
        { label: "Quality", value: "Pure, Machine Cleaned" },
      ],
      image: "/images/products/cumin-seeds.png",
    },
    {
      title: "Dry Ginger",
      subtitle: "Pungent Botanical Roots",
      desc: "Export-quality dried ginger roots supplying a sharp, spicy, and warm aromatic seasoning powder.",
      specs: [
        { label: "Varieties", value: "Nadia, Rio-de Janeiro" },
        { label: "Color", value: "Light yellow to pale brown" },
        { label: "Forms Available", value: "Flakes / Fine Powder" },
        { label: "Taste & Aroma", value: "Sharp, Spicy & Warm" },
        { label: "Quality", value: "A-grade Clean" },
      ],
      image: "/images/products/dry-ginger.png",
    },
    {
      title: "Turmeric",
      subtitle: "Golden Active Rhizomes",
      desc: "High-curcumin active turmeric processed cleanly to produce a deep golden yellow spice powder.",
      specs: [
        { label: "Varieties", value: "Lakadong, Erode, Sangli, Alleppey" },
        { label: "Curcumin Content", value: "1% - 5% (High Potency)" },
        { label: "Forms Available", value: "Turmeric Finger / Pure Powder" },
        { label: "Color", value: "Deep Golden Yellow" },
        { label: "Quality", value: "High Grade Export" },
      ],
      image: "/images/products/turmeric.png",
    },
    {
      title: "Green Chilli Powder",
      subtitle: "Zesty Green Spices",
      desc: "Vibrant and spicy green chilli powder made from raw crops processed keeping natural hot flavor intact.",
      specs: [
        { label: "Form", value: "Fine Free-Flowing Powder" },
        { label: "Color Profile", value: "Light Green to Deep Green" },
        { label: "Taste & Pungency", value: "Hot, Spicy & Authentic" },
        { label: "Mesh Sizing", value: "60 - 100 Mesh" },
        { label: "Additives", value: "100% Pure & Natural" },
      ],
      image: "/images/products/green-chilli-powder.png",
    },
    {
      title: "Moringa Powder",
      subtitle: "Pure Organic Superfood",
      desc: "Rich green moringa leaves ground under clean settings to retain vitamins, minerals, and color.",
      specs: [
        { label: "Form", value: "Fine, free-flowing Powder" },
        { label: "Color Profile", value: "Bright Green / Vibrant Green" },
        { label: "Mesh Sizing", value: "60 - 100 Mesh" },
        { label: "Nutrient Retention", value: "Cold Processed / Dry Air Dry" },
        { label: "Quality", value: "Superfood Export Grade" },
      ],
      image: "/images/products/moringa-powder.png",
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

        {/* Categories Grid - Symmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {categories.slice(0, limit).map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-xs hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Banner wrapper */}
              <div className="h-52 w-full relative overflow-hidden select-none">
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
                  <h3 className="text-2xl font-bold text-white mt-1 leading-tight tracking-tight">
                    {cat.title}
                  </h3>
                </div>
              </div>

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


