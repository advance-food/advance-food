import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, BookOpen } from "lucide-react";
import { blogs } from "../../../data/blogs";
import ProductEnquiryButton from "../../../components/ProductEnquiryButton";
import ShareWidget from "../../../components/ShareWidget";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  // Get other recent posts (excluding current one)
  const recentPosts = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen pt-20">
      {/* ── Premium Visual Banner Header ── */}
      <section
        className="relative min-h-[30vh] sm:min-h-[35vh] py-10 sm:py-12 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8)), url('${post.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 to-brand-dark/80"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-primary transition-all duration-300 group cursor-pointer bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:shadow-md"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blogs</span>
          </Link>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 mt-6 text-xs sm:text-sm text-gray-300 font-semibold">
            <span className="bg-brand-primary/20 text-sky-300 border border-brand-primary/30 px-3 py-1 rounded-full text-xs uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-gray-500">•</span>
            <span>By Advance Food Team</span>
            <span className="text-gray-500">•</span>
            <span>{post.date}</span>
            <span className="text-gray-500">•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── Main Content Area ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden shadow-xs mb-8 aspect-video select-none border border-gray-100 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="blog-content-rich text-base sm:text-lg text-gray-600 leading-relaxed max-w-none"
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/<table/g, '<div class="overflow-x-auto max-w-full"><table')
                    .replace(/<\/table>/g, '</table></div>'),
                }}
              />
            </div>

            {/* Right Sidebar Column */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              {/* Enquiry Card */}
              <div className="bg-sky-50 border border-sky-100 rounded-3xl p-8 text-center shadow-xs">
                <div className="h-12 w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-4 border border-brand-primary/20">
                  <User className="text-brand-primary w-6 h-6 animate-pulse-none" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  Looking for Bulk Supply?
                </h3>
                <p className="text-sm text-gray-500 mt-2 mb-6 leading-relaxed">
                  We process and export premium dehydrated vegetables and spices customized to your exact mesh sizes and volumes.
                </p>
                <ProductEnquiryButton
                  productTitle={post.title}
                  label="Request a Quote"
                  className="w-full text-sm font-bold shadow-xs py-3.5"
                />
              </div>

              {/* Share Widget */}
              <ShareWidget />

              {/* Recent Posts List */}
              {recentPosts.length > 0 && (
                <div className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 shadow-xs">
                  <h3 className="text-base font-extrabold text-gray-900 border-b border-gray-100 pb-4 mb-5">
                    Recent Insights
                  </h3>
                  <div className="space-y-5">
                    {recentPosts.map((recent) => (
                      <div key={recent.id} className="group flex gap-4 items-start">
                        <Link
                          href={`/blogs/${recent.slug}`}
                          className="h-16 w-16 shrink-0 rounded-xl overflow-hidden bg-gray-100 select-none block border border-gray-100"
                        >
                          <img
                            src={recent.image}
                            alt={recent.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-brand-primary transition-colors line-clamp-2">
                            <Link href={`/blogs/${recent.slug}`}>{recent.title}</Link>
                          </h4>
                          <span className="text-xs font-semibold text-gray-400 mt-1 block">
                            {recent.date}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}
