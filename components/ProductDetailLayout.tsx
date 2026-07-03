import React from "react";
import Link from "next/link";
import { ArrowLeft, Check, Package, Sparkles, ShieldCheck, Tag, ArrowRight } from "lucide-react";
import ProductEnquiryButton from "./ProductEnquiryButton";
import { Product } from "../data/products";

interface ProductDetailLayoutProps {
  product: Product;
  backUrl: string;
  backLabel: string;
}

export default function ProductDetailLayout({ product, backUrl, backLabel }: ProductDetailLayoutProps) {
  const sizeSpecs = product.specs.filter(s => s.value.includes('MM') || s.value.includes('Mesh') || s.label.includes('Flakes') || s.label.includes('Clove'));
  const otherSpecs = product.specs.filter(s => !(s.value.includes('MM') || s.value.includes('Mesh') || s.label.includes('Flakes') || s.label.includes('Clove')));

  return (
    <main className="min-h-screen bg-gray-50/30 pt-24 pb-12 font-sans">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href={backUrl}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-primary transition-all duration-300 group cursor-pointer bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>{backLabel}</span>
        </Link>
      </div>

      {/* Main Product Section */}
      <section className="pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Mobile Title (shows only on small screens) */}
          <div className="lg:hidden mb-8 space-y-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase tracking-widest shadow-sm">
              {product.subtitle}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 tracking-tight leading-tight pb-2">
              {product.title}
            </h1>
            <div className="h-2 w-24 bg-gradient-to-r from-brand-primary to-brand-primary/40 rounded-full"></div>
          </div>

          {/* Top Grid: Image & Title + Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Side: Product Image (Photo) */}
            <div className="lg:col-span-5 h-full">
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-xl shadow-gray-200/50 select-none group relative h-full">
                <div className="relative h-full w-full bg-gray-50 flex items-center justify-center min-h-[300px]">
                  <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-0"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-xl border border-gray-100 text-brand-dark px-4 py-1.5 rounded-full text-xs font-black flex items-center gap-2 shadow-lg z-30 transform group-hover:scale-105 transition-transform duration-300">
                    <ShieldCheck size={16} className="text-emerald-500" />
                    <span className="tracking-widest uppercase text-[10px]">Export Quality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Product Title & Description */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Desktop Title */}
              <div className="hidden lg:block space-y-4">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black bg-brand-primary/10 text-brand-primary border border-brand-primary/20 uppercase tracking-widest shadow-sm">
                  {product.subtitle}
                </span>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 tracking-tight leading-tight pb-2">
                  {product.title}
                </h1>
                <div className="h-2 w-24 bg-gradient-to-r from-brand-primary to-brand-primary/40 rounded-full"></div>
              </div>

              {/* Description & Overview */}
              <div className="bg-white p-8 rounded-3xl border border-gray-150 shadow-md shadow-gray-100/50 space-y-4 flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Sparkles className="text-brand-primary" size={20} />
                  Product Overview
                </h3>
                <p className="text-base text-gray-600 leading-relaxed font-medium">
                  {product.detailedDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Grid: At a Glance & Sizes etc. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
            
            {/* Left Side: At a Glance */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              {/* Fast Spec Highlights Quick List */}
              {otherSpecs.length > 0 && (
                <div className="bg-white rounded-3xl p-8 border border-gray-150 shadow-lg shadow-gray-100/50 space-y-5">
                  <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest border-b-2 border-brand-primary/20 pb-3 inline-block">
                    At A Glance
                  </h4>
                  <div className="grid grid-cols-2 gap-6">
                    {otherSpecs.slice(0, 4).map((spec, specIdx) => (
                      <div key={specIdx} className="space-y-1.5 bg-gray-50/50 p-3 rounded-2xl border border-gray-100">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                          {spec.label}
                        </span>
                        <span className="text-sm font-extrabold text-gray-900 leading-tight block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Sizes, Highlights & Buttons */}
            <div className="lg:col-span-7 space-y-10">

              {/* Available Sizes / Cuts */}
              {(() => {
                if (sizeSpecs.length === 0) return null;
                return (
                  <div className="bg-gradient-to-br from-sky-50 to-white p-8 rounded-3xl border border-sky-100 shadow-md shadow-sky-100/50 space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Tag className="text-sky-500" size={20} />
                      Available Sizes & Cuts
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {sizeSpecs.map((spec, idx) => (
                        <div key={idx} className="bg-white border border-sky-100 rounded-2xl p-4 flex flex-col justify-center items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-sky-300 transition-all duration-300 cursor-default group">
                          <span className="text-[10px] text-gray-400 font-bold uppercase mb-1 tracking-widest group-hover:text-sky-500 transition-colors">{spec.label}</span>
                          <span className="text-sm font-black text-gray-800">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Key Highlights / Benefits */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 px-2">Key Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="bg-white border border-gray-150 p-4 rounded-2xl shadow-sm flex items-start gap-3 hover:shadow-md hover:border-emerald-200 transition-all duration-300">
                      <div className="h-8 w-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                        <Check size={16} className="text-emerald-500 font-extrabold" />
                      </div>
                      <span className="text-sm text-gray-700 font-semibold leading-snug mt-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap gap-4 items-center">
                <div className="transform hover:scale-105 transition-transform duration-300">
                  <ProductEnquiryButton
                    productTitle={product.title}
                    label={`Enquire for ${product.title}`}
                  />
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-brand-primary hover:text-brand-primary text-gray-700 font-bold px-8 py-4 rounded-2xl text-base shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  Contact Sales
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </div>

      {/* Specifications Details Section */}
      <section className="pb-12 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Technical Specifications
            </h2>
            <p className="text-base text-gray-500 mt-2 font-medium">
              We strictly process and grade our inventory under precise benchmarks. Explore the standard technical attributes for this product.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xl shadow-gray-200/40">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 border-b border-gray-200">
                  <th className="px-8 py-5 text-xs font-black text-gray-500 uppercase tracking-widest w-1/3">Parameter</th>
                  <th className="px-8 py-5 text-xs font-black text-gray-500 uppercase tracking-widest w-2/3">Specification Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {otherSpecs.map((spec, specIdx) => (
                  <tr key={specIdx} className="hover:bg-sky-50/30 transition-colors duration-200 group">
                    <td className="px-8 py-5 text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-primary transition-colors">{spec.label}</td>
                    <td className="px-8 py-5 text-sm font-extrabold text-gray-900">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications & Packaging Dual Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Applications Grid */}
            <div className="bg-gradient-to-br from-brand-primary/5 to-white rounded-3xl p-8 sm:p-10 border border-brand-primary/10 shadow-lg shadow-brand-primary/5 space-y-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
                <div className="p-2 bg-brand-primary/10 rounded-xl">
                  <Tag className="text-brand-primary" size={24} />
                </div>
                Primary Applications
              </h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                This ingredient is standardly utilized across multiple segments of the global food manufacturing and processing sectors:
              </p>
              <div className="flex flex-wrap gap-3">
                {product.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold bg-white text-gray-800 border border-gray-200 shadow-sm hover:border-brand-primary hover:text-brand-primary transition-colors duration-300 cursor-default"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Packaging Information Container */}
            <div className="bg-gradient-to-bl from-sky-50 to-white rounded-3xl p-8 sm:p-10 border border-sky-100 shadow-lg shadow-sky-50 space-y-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100/50 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-sky-200/50 transition-colors duration-700"></div>
              
              <div className="space-y-6 relative z-10">
                <h3 className="text-2xl font-extrabold text-gray-900 flex items-center gap-3">
                  <div className="p-2 bg-sky-100 rounded-xl">
                    <Package className="text-sky-600" size={24} />
                  </div>
                  Standard Packaging
                </h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  To prevent moisture ingress, oxidation, and ensure aroma preservation during trans-oceanic transit, we package using industrial-grade materials:
                </p>
                <ul className="space-y-4">
                  {product.packaging.map((pack, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-sky-50 shadow-sm">
                      <div className="h-6 w-6 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
                        <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-700 leading-snug">{pack}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-sky-100 flex items-center gap-3 text-xs font-black text-gray-500 uppercase tracking-widest relative z-10">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span>Shipping Port: Mundra / Kandla, India</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
