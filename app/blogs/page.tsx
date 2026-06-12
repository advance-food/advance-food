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
    <section className="bg-white min-h-screen">
      {/* ── Page Hero Banner ── */}
      <div className="bg-brand-dark text-white relative overflow-hidden py-20 md:py-28">
        {/* Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="text-sm font-bold tracking-widest text-brand-primary uppercase inline-flex items-center gap-2 mb-4 bg-brand-primary/10 px-4 py-1.5 rounded-full">
            <BookOpen size={14} /> Knowledge Hub
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Blogs & <span className="text-brand-primary">Industry Insights</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            Stay updated with expert perspectives, technical preservation research, and global trade guidelines in the dehydrated food sector.
          </p>
        </div>
      </div>

      {/* ── Filters & Content Area ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Search & Category Pills bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
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
    </section>
  );
}
