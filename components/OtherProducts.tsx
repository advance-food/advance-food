"use client";

import React from "react";
import {
  Flame,
  Sprout,
  Sparkles,
  CookingPot,
  Activity,
  ChevronRight
} from "lucide-react";

interface OtherProductsProps {
  onProductSelect: (productName: string) => void;
}

export default function OtherProducts({ onProductSelect }: OtherProductsProps) {
  const groups = [
    {
      title: "Dehydrated Products",
      icon: Flame,
      color: "text-amber-500 bg-amber-50 border-amber-100",
      accentColor: "group-hover:border-amber-400 group-hover:text-amber-600",
      products: [
        "Dehydrated Garlic Powder",
        "Dehydrated White Onion Powder",
        "Dehydrated Red Onion Powder",
        "Dehydrated Pink Onion Powder",
        "Fresh Fried Pink Onion",
        "Dehydrated Fried Onion",
        "Coated Fried Onion",
        "Dehy. Ginger Powder",
        "Dehy. Aamchur (Mango) Powder",
        "Dehy. Beet Root Powder",
        "Dehy. Carrot Powder",
        "Dehy. Potato Powder",
        "Dehy. Chives Powder"
      ]
    },
    {
      title: "Spices & Seeds",
      icon: Sprout,
      color: "text-emerald-500 bg-emerald-50 border-emerald-100",
      accentColor: "group-hover:border-emerald-400 group-hover:text-emerald-600",
      products: [
        "Cumin seeds (JEERA)",
        "Coriander Seeds (Dhaniya)",
        "Fenugreek Seeds (Methidana)",
        "Ajwain Seeds (Ajmo)",
        "Fennel Seeds (Variyali)"
      ]
    },
    {
      title: "Spray Dried Powders",
      icon: Sparkles,
      color: "text-sky-500 bg-sky-50 border-sky-100",
      accentColor: "group-hover:border-sky-400 group-hover:text-sky-600",
      products: [
        "Tomato Powder",
        "Lemon Powder (Limbu)",
        "Tamrind Powder (Imali)"
      ]
    },
    {
      title: "Specialty & Seasonings",
      icon: CookingPot,
      color: "text-purple-500 bg-purple-50 border-purple-100",
      accentColor: "group-hover:border-purple-400 group-hover:text-purple-600",
      products: [
        "Red Chilli Flakes/Powder (Guntur, Bydgi, Kashmiri)",
        "Turmeric Finger/Powder",
        "Green Chilli Powder",
        "Kasuri methi Leaves/Powder",
        "Curry Leaves/Powder",
        "Mint Leaves/Powder (Fudina)",
        "Spinach Powder (Palak)",
        "Oregano Seasoning"
      ]
    },
    {
      title: "Herbal Powders",
      icon: Activity,
      color: "text-rose-500 bg-rose-50 border-rose-100",
      accentColor: "group-hover:border-rose-400 group-hover:text-rose-600",
      products: [
        "Amla Powder",
        "Tulsi Powder",
        "Neem Powder",
        "Ashwagandha Powder",
        "Triphala Powder",
        "Isabgol Powder"
      ]
    }
  ];

  return (
    <section className="pt-10 pb-20 bg-gray-50 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-50/40 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-50/20 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-extrabold bg-sky-50 text-brand-primary border border-sky-100 uppercase tracking-widest">
            Extended Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
            Our Specialty <span className="text-brand-primary">Product Groups</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            In addition to our primary specialties, we manufacture, process, and supply a highly diverse range of custom agricultural ingredients globally.
          </p>
        </div>

        {/* Sectional Category Rows - Completely avoids height discrepancy */}
        <div className="space-y-6">
          {groups.map((group, groupIdx) => {
            const IconComponent = group.icon;
            return (
              <div
                key={groupIdx}
                className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                {/* Left side: Category Profile */}
                <div className="flex items-center gap-4 lg:w-72 shrink-0">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center border ${group.color} shadow-2xs`}>
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-gray-800 tracking-tight group-hover:text-brand-primary transition-colors duration-300">
                      {group.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-semibold mt-0.5">
                      {group.products.length} Items Available
                    </p>
                  </div>
                </div>

                {/* Right side: Modern interactive flex chips */}
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-3">
                    {group.products.map((prod, prodIdx) => (
                      <button
                        key={prodIdx}
                        onClick={() => onProductSelect(prod)}
                        className={`inline-flex items-center gap-2 bg-gray-50/50 hover:bg-white border border-gray-150 hover:border-brand-primary/30 text-gray-700 hover:text-brand-primary font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group/chip`}
                      >
                        <span>{prod}</span>
                        <ChevronRight
                          size={14}
                          className="text-gray-400 group-hover/chip:text-brand-primary transition-colors"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
