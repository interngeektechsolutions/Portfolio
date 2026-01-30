"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Target,
  Lightbulb,
  Trophy,
  Download,
  ExternalLink,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    color: "from-orange-500 to-amber-500",
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "VS Code", "Linux", "GraphQL"],
    color: "from-purple-500 to-pink-500",
  },
];

const traits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "High-quality solutions at exceptional speed.",
    color: "text-yellow-400",
  },
  {
    icon: Target,
    title: "Precision Focused",
    description: "Every line of code is intentional.",
    color: "text-red-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation Driven",
    description: "Building for the future, not just today.",
    color: "text-cyan-400",
  },
  {
    icon: Trophy,
    title: "Results Oriented",
    description: "Impact over output, always.",
    color: "text-amber-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="section relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="text-indigo-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            More Than Just a <span className="gradient-text">Developer</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            I&apos;m a craftsman of digital experiences, an architect of
            scalable systems, and a relentless pursuer of excellence.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                The Mindset
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I don&apos;t just write code—I engineer solutions that push
                  boundaries. Every project I touch becomes a testament to
                  what&apos;s possible when passion meets precision.
                </p>
                <p>
                  With over 5 years of building for startups and enterprises
                  alike, I&apos;ve developed an instinct for identifying what
                  makes products exceptional.
                </p>
                <p>
                  My approach?{" "}
                  <span className="text-white font-semibold">
                    Think different. Build better. Ship faster.
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8">
                <motion.a
                  href="/resume.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6"
                >
                  <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
                  Download Resume
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary text-sm sm:text-base py-2.5 sm:py-3 px-5 sm:px-6"
                >
                  <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                  Get in Touch
                </motion.a>
              </div>
            </div>

            {/* Traits Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6"
            >
              {traits.map((trait) => (
                <motion.div
                  key={trait.title}
                  variants={itemVariants}
                  className="glass-card p-5 sm:p-6 lg:p-7"
                >
                  <trait.icon
                    className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 ${trait.color} mb-3 sm:mb-4`}
                  />
                  <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-2.5">
                    {trait.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-relaxed">
                    {trait.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-8">
              Arsenal of Skills
            </h3>

            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + groupIndex * 0.1 }}
                className="glass-card p-5 sm:p-6 lg:p-8"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`}
                  />
                  <h4 className="text-xs sm:text-sm uppercase tracking-widest text-indigo-400">
                    {skillGroup.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillGroup.items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(99, 102, 241, 0.15)",
                      }}
                      className="px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full bg-white/5 text-gray-300 text-xs sm:text-sm lg:text-base border border-white/10 hover:border-indigo-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Experience Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="gradient-border p-5 sm:p-7 lg:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg">
                    Currently
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Senior Full-Stack Engineer
                  </p>
                </div>
                <div className="sm:text-right">
                  <div className="text-indigo-400 font-bold text-sm sm:text-base">
                    Open to Work
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Remote Worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
