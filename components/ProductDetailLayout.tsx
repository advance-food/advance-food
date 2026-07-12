import React from "react";
import Link from "next/link";
import { ArrowLeft, Check, Package, ShieldCheck, Tag, ArrowRight, ChevronRight, CheckCircle2, FileText, Settings, Star } from "lucide-react";
import ProductEnquiryButton from "./ProductEnquiryButton";
import { Product } from "../data/products";

interface ProductDetailLayoutProps {
  product: Product;
  backUrl: string;
  backLabel: string;
}

export default function ProductDetailLayout({ product, backUrl, backLabel }: ProductDetailLayoutProps) {
  // Helper to determine if a string is a section header (from the PDF parsing)
  const isHeader = (text: string) => {
    const t = text.trim();
    if (t.endsWith(':')) return true;
    const knownHeaders = [
      "Product Features",
      "Quality Assurance",
      "Available documents:",
      "Available Documents:",
      "Applications",
      "Packaging Options",
      "Packaging materials:",
      "Packaging materials",
      "Available in:"
    ];
    if (knownHeaders.includes(t)) return true;
    
    // Catch-all for "Our premium X are widely used in:"
    if (t.toLowerCase().includes("widely used in")) return true;

    return false;
  };

  const renderList = (items: string[]) => {
    return (
      <div className="space-y-4">
        {items.map((item, idx) => {
          if (isHeader(item)) {
            return (
              <h4 key={idx} className="text-lg font-bold text-gray-900 mt-6 mb-2 first:mt-0 flex items-center gap-2">
                <ChevronRight size={18} className="text-brand-primary" />
                {item}
              </h4>
            );
          }
          return (
            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-primary/20 transition-all duration-300">
              <div className="mt-1 shrink-0">
                <CheckCircle2 size={18} className="text-emerald-500" />
              </div>
              <span className="text-sm text-gray-700 font-medium leading-relaxed">{item}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-24 pb-20 font-sans">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href={backUrl}
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-primary transition-all duration-300 group cursor-pointer bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-200 hover:shadow-md"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>{backLabel}</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Image and Sticky Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Image Bento Box */}
              <div className="bg-white rounded-[2rem] p-4 border border-gray-100 shadow-xl shadow-gray-200/50 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="relative h-[400px] w-full rounded-[1.5rem] overflow-hidden bg-gray-50/50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-white text-brand-dark px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 shadow-lg shadow-black/5 transform group-hover:scale-105 transition-transform duration-300">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    <span className="tracking-widest uppercase text-[10px]">Export Quality</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-lg shadow-gray-200/30 flex flex-col gap-4">
                <ProductEnquiryButton
                  productTitle={product.title}
                  label={`Enquire for ${product.title}`}
                />
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 hover:border-brand-primary hover:text-brand-primary text-gray-700 font-bold px-8 py-4 rounded-2xl text-base transition-all duration-300 group"
                >
                  Contact Sales
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Specs */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Header Box */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-lg shadow-gray-200/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              <div className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black bg-brand-primary/10 text-brand-primary uppercase tracking-widest">
                    {product.subtitle}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                    {product.title}
                  </h1>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed font-medium">
                    {product.desc}
                  </p>
                  <p className="text-base text-gray-500 leading-relaxed mt-4">
                    {product.detailedDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Specifications Bento */}
            {product.specs.length > 0 && (
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-slate-900/20 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
                    <Settings className="text-sky-400" size={24} />
                    Specifications & Grades
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/20 transition-colors duration-300">
                        <span className="block text-xs font-bold text-sky-300 uppercase tracking-widest mb-2">
                          {spec.label}
                        </span>
                        <span className="block text-sm font-bold text-white leading-tight">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Features & Quality */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-lg shadow-gray-200/40">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8">
                <Star className="text-brand-primary" size={24} />
                Features & Quality Assurance
              </h3>
              {renderList(product.keyBenefits)}
            </div>

            {/* Packaging Bento */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50/30 rounded-[2rem] p-8 md:p-10 border border-emerald-100 shadow-lg shadow-emerald-100/50">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8">
                <Package className="text-emerald-600" size={24} />
                Packaging Options
              </h3>
              {renderList(product.packaging)}
            </div>

            {/* Applications Bento */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-lg shadow-gray-200/40">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-8">
                <FileText className="text-brand-primary" size={24} />
                Applications
              </h3>
              {renderList(product.applications)}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
