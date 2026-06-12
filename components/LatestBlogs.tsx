"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { blogs } from "../data/blogs";

export default function LatestBlogs() {
  // Take the 3 latest blogs
  const latestPosts = blogs.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-50/30 rounded-full filter blur-3xl -z-10 transform -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-50/20 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-primary uppercase block mb-2">
            News & Insights
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Latest From Our <span className="text-brand-primary">Blogs</span>
          </h2>
          <div className="h-1.5 w-16 bg-brand-primary mx-auto mt-4 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 mt-6 leading-relaxed">
            Stay informed with the latest updates, research, regulatory standards, and market insights from the agricultural food dehydration industry.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-150 shadow-xs hover:shadow-xl hover:border-brand-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Featured Image */}
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

              {/* Card Contents */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Meta details */}
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

                {/* Read Link */}
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

        {/* View All CTA Button */}
        <div className="flex justify-center mt-14">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/95 text-white font-extrabold px-8 py-4 rounded-xl text-base transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer group"
          >
            <span>Explore All Blogs</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
