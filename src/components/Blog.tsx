"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, Clock, ArrowRight, Tag, TrendingUp } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: What I Learned Building at Scale",
    excerpt:
      "After shipping products used by millions, here are the patterns and practices that actually matter.",
    date: "Jan 25, 2026",
    readTime: "8 min",
    category: "Engineering",
    tags: ["Web Development", "Architecture", "Best Practices"],
    featured: true,
    views: "12.5K",
  },
  {
    id: 2,
    title: "Microservices vs Monolith: The Honest Truth",
    excerpt:
      "Breaking down the real trade-offs after migrating enterprise systems both ways.",
    date: "Jan 18, 2026",
    readTime: "12 min",
    category: "Architecture",
    tags: ["Microservices", "System Design", "DevOps"],
    featured: true,
    views: "8.2K",
  },
  {
    id: 3,
    title: "Building a Real-Time Analytics Platform",
    excerpt:
      "Technical breakdown of processing billions of events with sub-millisecond latency.",
    date: "Jan 10, 2026",
    readTime: "15 min",
    category: "Tutorial",
    tags: ["Real-time", "Data Engineering", "PostgreSQL"],
    featured: false,
    views: "6.8K",
  },
  {
    id: 4,
    title: "The Mental Models That Made Me a 10x Engineer",
    excerpt:
      "It's not about typing faster. Here are the frameworks I use to solve complex problems.",
    date: "Jan 5, 2026",
    readTime: "10 min",
    category: "Career",
    tags: ["Productivity", "Career", "Growth"],
    featured: false,
    views: "15.3K",
  },
  {
    id: 5,
    title: "Mastering TypeScript: Advanced Patterns",
    excerpt:
      "Type-level programming, conditional types, and patterns for bulletproof code.",
    date: "Dec 28, 2025",
    readTime: "14 min",
    category: "Tutorial",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    featured: false,
    views: "9.1K",
  },
  {
    id: 6,
    title: "Why I Switched from React to Next.js",
    excerpt:
      "The productivity gains and developer experience that changed how I build.",
    date: "Dec 20, 2025",
    readTime: "7 min",
    category: "Opinion",
    tags: ["React", "Next.js", "Frontend"],
    featured: false,
    views: "11.7K",
  },
];

const categories = [
  "All",
  "Engineering",
  "Architecture",
  "Tutorial",
  "Career",
  "Opinion",
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <section id="blog" className="section relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="text-indigo-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 block">
            Insights & Ideas
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Thoughts on <span className="gradient-text">Building Better</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Sharing lessons learned from building products at scale.
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="glass-card p-5 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden group">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] sm:text-xs font-medium">
                      Featured
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
                      <TrendingUp
                        size={12}
                        className="sm:w-[14px] sm:h-[14px]"
                      />
                      {featuredPost.views} views
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:text-indigo-400 transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <span className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-xs sm:text-sm">
                      <Calendar size={14} className="sm:w-4 sm:h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5 sm:gap-2 text-gray-500 text-xs sm:text-sm">
                      <Clock size={14} className="sm:w-4 sm:h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3"
                  >
                    Read Article{" "}
                    <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </motion.button>
                </div>

                <div className="hidden lg:block">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-7xl lg:text-8xl font-bold text-white/10">
                      01
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                  : "glass text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredPosts.slice(0, 6).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-card p-4 sm:p-5 lg:p-6 group cursor-pointer"
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/5 text-indigo-400 text-[10px] sm:text-xs font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-gray-500 text-[10px] sm:text-xs">
                  <TrendingUp size={10} className="sm:w-3 sm:h-3" />
                  {post.views}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-indigo-400 transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 text-[10px] sm:text-xs text-gray-500"
                  >
                    <Tag size={8} className="sm:w-[10px] sm:h-[10px]" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} className="sm:w-3 sm:h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={10} className="sm:w-3 sm:h-3" />
                    {post.readTime}
                  </span>
                </div>

                <ArrowRight
                  size={14}
                  className="text-gray-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all sm:w-4 sm:h-4"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
          >
            View All Articles{" "}
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
