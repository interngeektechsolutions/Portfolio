"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Full-Stack Engineer",
    company: "TechGiant Inc.",
    location: "San Francisco, CA",
    period: "2023 - Present",
    description:
      "Leading development of enterprise-scale applications serving millions of users.",
    achievements: [
      "Reduced system latency by 60%",
      "Led Kubernetes migration, 80% faster deployments",
      "Mentored 5 engineers to senior positions",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "InnovateTech",
    location: "New York, NY",
    period: "2021 - 2023",
    description:
      "Built and scaled multiple SaaS products from concept to launch.",
    achievements: [
      "Launched 3 products with $2M+ ARR",
      "Built real-time features for 50K+ users",
      "CI/CD pipeline reducing bugs by 40%",
    ],
    current: false,
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2021",
    description:
      "Early engineer at a fast-growing startup building the core product.",
    achievements: [
      "Built MVP securing $5M Series A",
      "Grew users from 0 to 10,000 in 6 months",
      "Established coding standards",
    ],
    current: false,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="text-indigo-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 block">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Where I&apos;ve Made <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            A track record of delivering exceptional results at every step.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent lg:-translate-x-1/2" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative mb-8 sm:mb-12 lg:mb-16 ${
                index % 2 === 0 ? "lg:pr-[50%] lg:text-right" : "lg:pl-[50%]"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                  exp.current
                    ? "bg-gradient-to-br from-green-400 to-emerald-500 animate-pulse"
                    : "bg-gradient-to-br from-indigo-500 to-purple-500"
                } left-2.5 sm:left-4 lg:left-1/2 lg:-translate-x-1/2`}
              />

              {/* Content Card */}
              <div
                className={`ml-10 sm:ml-14 lg:ml-0 ${
                  index % 2 === 0 ? "lg:mr-10" : "lg:ml-10"
                }`}
              >
                <div className="glass-card p-5 sm:p-6 lg:p-8">
                  {/* Current Badge */}
                  {exp.current && (
                    <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-medium mb-3 sm:mb-4">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Current Role
                    </span>
                  )}

                  {/* Header */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1.5 sm:mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-indigo-400 font-medium text-sm sm:text-base mb-3 sm:mb-4">
                    {exp.company}
                  </p>

                  {/* Meta */}
                  <div
                    className={`flex flex-wrap gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500 ${index % 2 === 0 ? "lg:justify-end" : ""}`}
                  >
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul
                    className={`space-y-1.5 sm:space-y-2 ${index % 2 === 0 ? "lg:text-right" : ""}`}
                  >
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300 ${
                          index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <ArrowRight
                          size={10}
                          className={`text-indigo-400 flex-shrink-0 sm:w-3 sm:h-3 ${index % 2 === 0 ? "lg:rotate-180" : ""}`}
                        />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
