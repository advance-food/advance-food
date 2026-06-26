"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { blogs } from "../../data/blogs";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    const allCats = blogs.map((post) => post.category);
    return ["All", ...Array.from(new Set(allCats))];
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="bg-white min-h-screen pt-20">
      {/* Premium Visual Banner Header */}
      <section
        className="relative h-[40vh] sm:h-[45vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1920&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 to-brand-dark/80"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
            Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Blogs & Industry Insights
          </h1>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
        </div>
      </section>

      {/* ── Filters & Content Area ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Search & Category Pills bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          {/* Category Filters */}
          <div className="flex overflow-x-auto whitespace-nowrap gap-2.5 pb-3 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/25"
                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-brand-primary focus:bg-white focus:ring-1 focus:ring-brand-primary transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-2xs hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Image */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="h-48 sm:h-52 w-full relative overflow-hidden select-none block"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 z-20 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-brand-primary shadow-xs uppercase tracking-wider">
                    {post.category}
                  </span>
                </Link>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-gray-300" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-gray-300" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight group-hover:text-brand-primary transition-colors duration-300 line-clamp-2 mb-3">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {post.description}
                  </p>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-primary hover:text-sky-600 transition-colors cursor-pointer group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-500 text-base font-semibold">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-sm font-bold text-brand-primary hover:underline cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
