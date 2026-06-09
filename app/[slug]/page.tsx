import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Package, Sparkles, ShieldCheck, Tag, ArrowRight } from "lucide-react";
import { products } from "../../data/products";
import ProductEnquiryButton from "../../components/ProductEnquiryButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return {
      title: "Product Not Found - Advance Food",
    };
  }

  return {
    title: `${product.title} - Premium Quality Export | Advance Food`,
    description: `Export-quality ${product.title}. ${product.desc} Sourced from Mahuva, Gujarat, supplying global food industries.`,
    openGraph: {
      title: `${product.title} - Premium Quality Export | Advance Food`,
      description: product.desc,
      images: [
        {
          url: product.image,
          alt: product.title,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products (filter current, limit to 3)
  const related = products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50/50 pt-20">
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-brand-primary transition-colors group cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products</span>
        </Link>
      </div>

      {/* Main Product Section */}
      <section className="pt-8 pb-4 md:pt-12 md:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Side: Product Image (Photo) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-4 border border-gray-150 shadow-md select-none overflow-hidden group">
                <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-gray-100 text-brand-dark px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span>Quality Assured</span>
                  </div>
                </div>
              </div>

              {/* Fast Spec Highlights Quick List */}
              <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-xs space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 pb-2">
                  At A Glance
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {product.specs.slice(0, 4).map((spec, specIdx) => (
                    <div key={specIdx} className="space-y-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                        {spec.label}
                      </span>
                      <span className="text-sm font-extrabold text-gray-900 leading-tight block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Product Title & Description */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-brand-primary border border-sky-100 uppercase tracking-widest">
                  {product.subtitle}
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-3 tracking-tight">
                  {product.title}
                </h1>
                <div className="h-1.5 w-20 bg-brand-primary mt-4 rounded-full"></div>
              </div>

              {/* Description & Overview */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800">Product Overview</h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {product.detailedDesc}
                </p>
              </div>

              {/* Key Highlights / Benefits */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-800">Key Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="h-5 w-5 rounded-full bg-emerald-50 border border-emerald-150 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-emerald-500 font-extrabold" />
                      </div>
                      <span className="text-sm text-gray-600 font-semibold">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <ProductEnquiryButton
                  productTitle={product.title}
                  label={`Enquire for ${product.title}`}
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-brand-primary hover:text-brand-primary text-gray-700 font-bold px-6 py-4 rounded-xl text-base transition-all duration-300 cursor-pointer"
                >
                  Contact Sales Team
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-gray-200" />
      </div>

      {/* Specifications Details Section */}
      <section className="pt-12 md:pt-16 pb-4 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
              <Sparkles className="text-brand-primary" size={22} />
              <span>Technical Specifications</span>
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              We processing and grade our inventory under precise benchmarks. Explore the standard technical attributes for this product.
            </p>
          </div>

          <div className="mt-8 max-w-4xl bg-gray-50 rounded-2xl border border-gray-150 overflow-hidden shadow-2xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-100">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-1/3">Parameter</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-2/3">Specification Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.specs.map((spec, specIdx) => (
                  <tr key={specIdx} className="hover:bg-white transition-colors">
                    <td className="px-6 py-3.5 text-xs font-bold text-gray-400 uppercase tracking-wider">{spec.label}</td>
                    <td className="px-6 py-3.5 text-sm font-extrabold text-gray-900">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications & Packaging Dual Section */}
      <section className="pt-6 pb-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Applications Grid */}
            <div className="bg-white rounded-3xl p-8 border border-gray-150 shadow-xs space-y-6">
              <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <Tag className="text-brand-primary" size={20} />
                <span>Primary Applications</span>
              </h3>
              <p className="text-sm text-gray-500">
                This ingredient is standardly utilized across multiple segments of the global food manufacturing and processing sectors:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {product.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold bg-sky-50 text-brand-primary border border-sky-100 shadow-2xs"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Packaging Information Container */}
            <div className="bg-white rounded-3xl p-8 border border-gray-150 shadow-xs space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                  <Package className="text-brand-primary" size={20} />
                  <span>Standard Packaging</span>
                </h3>
                <p className="text-sm text-gray-500">
                  To prevent moisture ingress, oxidation, and ensure aroma preservation during trans-oceanic transit, we package using industrial-grade materials:
                </p>
                <ul className="space-y-3">
                  {product.packaging.map((pack, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-brand-primary shrink-0 mt-2"></div>
                      <span className="text-sm font-semibold text-gray-700">{pack}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center gap-2.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
                <span>Shipping Port: Mundra / Kandla, India</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-white border-t border-gray-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-widest text-brand-primary uppercase">
              Explore More
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Other Related Specialties
            </p>
            <div className="h-1.5 w-12 bg-brand-primary mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((item) => (
              <div
                key={item.slug}
                className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-2xs hover:shadow-lg hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Related product Image */}
                <div className="h-44 w-full relative overflow-hidden select-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent z-10"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-4 right-4 z-20">
                    <span className="text-[10px] font-bold text-sky-300 uppercase tracking-widest block">
                      {item.subtitle}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-0.5 leading-tight tracking-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Related product Body */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4">
                    {item.desc}
                  </p>
                  <Link
                    href={`/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-primary/80 transition-colors group/link cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
