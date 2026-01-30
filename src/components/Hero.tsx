"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Sparkles,
  Code2,
  Rocket,
  Terminal,
  Cpu,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Success Rate" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid px-4 sm:px-6 lg:px-8 py-20 md:py-0">
      {/* Animated Orbs - Responsive sizes */}
      <div className="hero-orb w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-indigo-600 -top-20 -right-20 md:-top-40 md:-right-40" />
      <div className="hero-orb w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-purple-600 bottom-10 -left-20 md:bottom-20 md:-left-40" />
      <div className="hero-orb w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] bg-cyan-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      {/* Floating Elements - Hidden on mobile */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-[10%] hidden lg:block"
      >
        <div className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl">
          <Code2 className="w-6 h-6 md:w-8 md:h-8 text-indigo-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-[10%] hidden lg:block"
      >
        <div className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl">
          <Rocket className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          delay: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 left-[8%] hidden lg:block"
      >
        <div className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl">
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="absolute bottom-40 right-[12%] hidden xl:block"
      >
        <div className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl">
          <Terminal className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          delay: 1.5,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-[5%] hidden xl:block"
      >
        <div className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl">
          <Cpu className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass mb-6 sm:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs sm:text-sm text-gray-300">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-[1.1]"
        >
          <span className="text-white block sm:inline">I Build</span>{" "}
          <span className="gradient-text text-glow block sm:inline">
            Digital Excellence
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 px-2"
        >
          Full-Stack Engineer crafting{" "}
          <span className="text-white font-medium">world-class</span>{" "}
          applications.
          <br className="hidden sm:block" />
          <span className="hidden sm:inline">
            Transforming complex problems into{" "}
          </span>
          <span className="sm:hidden">Transforming ideas into </span>
          <span className="text-indigo-400 font-medium">elegant solutions</span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            Know More
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="text-center p-3 sm:p-4 rounded-2xl glass-card"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 sm:gap-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown size={16} className="sm:w-5 sm:h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
