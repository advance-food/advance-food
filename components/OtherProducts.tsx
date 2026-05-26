"use client";

import React from "react";
import {
  Flame,
  Citrus,
  Droplet,
  Heart,
  Eye,
  Sparkles,
  Leaf,
  Trees,
  Thermometer,
  Sun,
  CookingPot,
  Clover,
  Wind,
  Sprout,
  Shield,
  Grape,
  GlassWater,
  Flower,
  Scale,
  Dumbbell,
} from "lucide-react";

interface OtherProductsProps {
  onProductSelect: (productName: string) => void;
}

export default function OtherProducts({ onProductSelect }: OtherProductsProps) {
  const otherProducts = [
    { name: "Dehy./Fried/Coated Onion", icon: Flame },
    { name: "Lemon Powder", icon: Citrus },
    { name: "Tamarind Powder", icon: Droplet },
    { name: "Beet Root Flakes/Powder", icon: Heart },
    { name: "Carrot Flakes/Powder", icon: Eye },
    { name: "Fennel (Saunf) Powder", icon: Sparkles },
    { name: "Coriander (Dhania) Leaves/Powder", icon: Leaf },
    { name: "Fenugreek (Methi) Powder", icon: Trees },
    { name: "Ajwain (Carom) Seeds/Powder", icon: Thermometer },
    { name: "Aamchur/Mango Powder", icon: Sun },
    { name: "Oregano Seasoning Green/Red", icon: CookingPot },
    { name: "Kasuri Methi Leaves/Powder", icon: Clover },
    { name: "Mint Leaves Powder", icon: Wind },
    { name: "Spinach (Palak) Powder", icon: Sprout },
    { name: "Neem Powder", icon: Shield },
    { name: "Amla (Gooseberry) Powder", icon: Grape },
    { name: "Isabgol (Psyllium Husk/Powder)", icon: GlassWater },
    { name: "Tulsi (Holy Basil) Powder", icon: Flower },
    { name: "Triphala Powder", icon: Scale },
    { name: "Ashwagandha Powder", icon: Dumbbell },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge & Headers */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-sky-50 text-brand-primary border border-sky-100 uppercase tracking-wider">
            More Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
            Other Products <span className="text-brand-primary">We Offer</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-base text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            We also manufacture and export a wide range of herbs, powders, and specialty ingredients.
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {otherProducts.map((product, idx) => {
            const IconComponent = product.icon;
            return (
              <div
                key={idx}
                onClick={() => onProductSelect(product.name)}
                className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-xs hover:shadow-lg hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                {/* Icon Circle Wrapper */}
                <div className="h-14 w-14 rounded-full bg-sky-50 text-brand-primary flex items-center justify-center mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <IconComponent size={24} className="transition-transform group-hover:scale-110 duration-300" />
                </div>
                {/* Product Name */}
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-brand-primary transition-colors duration-300 leading-snug">
                  {product.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
