import React from "react";
import { Globe, Truck, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Globe className="text-brand-primary w-8 h-8" />,
      title: "Global Export Reach",
      desc: "Operating a deep distribution ecosystem connecting Indian agricultural farmers directly with major international food buyers in over 11+ countries. We handle all global customs standards seamlessly.",
    },
    {
      icon: <Truck className="text-brand-primary w-8 h-8" />,
      title: "Reliable Fast Logistics",
      desc: "Our strategic processing center located in Mahuva, Gujarat, offers premium direct logistics access to key marine shipping hubs. Guaranteed on-time dispatch and optimized container loading.",
    },
    {
      icon: <ShieldCheck className="text-brand-primary w-8 h-8" />,
      title: "Premium Food Quality",
      desc: "Stringent quality controls govern our drying operations. Every crop batch undergoes intensive analysis to conform with international biological and food safety certifications.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      {/* Decorative vector shape background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sky-50/40 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Headers */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase">
            Core Values
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2">
            Why Choose Advance Food?
          </p>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-xl mx-auto">
            Connecting premium agricultural processing with trusted international delivery networks to power your supply chain.
          </p>
        </div>

        {/* Feature Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-150 shadow-xs hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Icon Holder */}
              <div className="h-16 w-16 rounded-xl bg-sky-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
