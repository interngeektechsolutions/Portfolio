"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO, TechVentures",
    content:
      "Working with Suraj was transformative for our engineering team. His ability to architect scalable solutions while maintaining code quality is unmatched.",
    avatar: "SC",
  },
  {
    id: 2,
    name: "Michael Roberts",
    role: "Founder, StartupX",
    content:
      "I've worked with many engineers, but Suraj stands apart. He thinks strategically about product, UX, and business impact. Our MVP was built in record time.",
    avatar: "MR",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "VP Engineering, FinCorp",
    content:
      "Suraj's expertise in both frontend and backend is rare. He rebuilt our legacy system into a modern platform that improved performance by 300%.",
    avatar: "EW",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section relative" ref={ref}>
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
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            What Leaders <span className="gradient-text">Say About Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Here&apos;s what industry leaders and collaborators have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass-card p-6 sm:p-7 lg:p-10 relative"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-indigo-500/30 absolute top-5 right-5 sm:top-7 sm:right-7" />

              {/* Content */}
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 relative z-10 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm sm:text-base lg:text-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="min-w-0">
                  <div className="text-white font-semibold text-sm sm:text-base lg:text-lg truncate mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm lg:text-base truncate">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
            {["Google", "Microsoft", "Amazon", "Meta", "Netflix", "Stripe"].map(
              (company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.5 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ opacity: 1 }}
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-600 transition-opacity cursor-default"
                >
                  {company}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
