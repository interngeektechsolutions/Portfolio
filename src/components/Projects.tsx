"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight, Star, Layers } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "NexusAI Platform",
    description:
      "Enterprise-grade AI platform processing 10M+ requests daily with real-time analytics.",
    tags: ["Next.js", "Python", "Kubernetes", "TensorFlow", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    stats: { users: "50K+", requests: "10M/day", uptime: "99.99%" },
    color: "from-indigo-600 to-purple-600",
  },
  {
    id: 2,
    title: "FinFlow Pro",
    description:
      "Real-time financial analytics dashboard serving Fortune 500 companies.",
    tags: ["React", "Go", "PostgreSQL", "WebSocket", "AWS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    stats: { clients: "200+", transactions: "1B+", latency: "<1ms" },
    color: "from-emerald-600 to-cyan-600",
  },
  {
    id: 3,
    title: "CloudSync Engine",
    description:
      "Distributed file sync system handling petabytes of data globally.",
    tags: ["Node.js", "Rust", "gRPC", "Docker", "Terraform"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    stats: { storage: "5PB+", users: "100K+", regions: "15" },
    color: "from-orange-600 to-red-600",
  },
  {
    id: 4,
    title: "DevMetrics Hub",
    description:
      "AI-powered developer productivity platform with code reviews.",
    tags: ["TypeScript", "GraphQL", "MongoDB", "OpenAI", "Vercel"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
    stats: { repos: "10K+", reviews: "500K+", teams: "1K+" },
    color: "from-pink-600 to-purple-600",
  },
];

const categories = ["All", "Featured", "Full-Stack", "AI/ML", "Open Source"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "Featured"
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <section id="projects" className="section relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="text-indigo-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 block">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Projects That{" "}
            <span className="gradient-text">Define Excellence</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Each project is a carefully crafted solution that pushes the
            boundaries of what&apos;s possible.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 lg:mb-16 px-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                  : "glass text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative glass-card overflow-hidden"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] sm:text-xs font-medium">
                  <Star size={10} className="sm:w-3 sm:h-3" />
                  Featured
                </div>
              )}

              {/* Image/Gradient Header */}
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <motion.div
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}
                >
                  <Layers className="w-12 h-12 sm:w-16 sm:h-16 text-white/20" />
                </motion.div>

                {/* Project Initial */}
                <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-6 z-20">
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/90">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7 lg:p-9">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-indigo-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-5 sm:mb-7 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-5 sm:mb-7 p-4 sm:p-5 lg:p-6 rounded-xl bg-white/5">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center py-1">
                      <div className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1">
                        {value}
                      </div>
                      <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500 uppercase tracking-wide">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5 lg:gap-3 mb-5 sm:mb-7">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs lg:text-sm bg-white/5 text-gray-400 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs bg-white/5 text-gray-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 sm:gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs sm:text-sm font-medium"
                  >
                    View Live{" "}
                    <ExternalLink
                      size={12}
                      className="sm:w-[14px] sm:h-[14px]"
                    />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10 sm:mt-12 lg:mt-16"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
          >
            View All Projects on GitHub{" "}
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
