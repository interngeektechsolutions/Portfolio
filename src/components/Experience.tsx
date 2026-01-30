"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase, ChevronRight } from "lucide-react";

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
    color: "from-emerald-500 to-green-500",
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
    color: "from-violet-500 to-purple-500",
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
    color: "from-indigo-500 to-blue-500",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="section relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
          >
            <Briefcase size={14} className="text-violet-400" />
            <span className="text-sm text-violet-400 font-medium">
              Career Journey
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Where I&apos;ve Made{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            A track record of delivering exceptional results at every step of my
            career.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500 via-purple-500 to-indigo-500 opacity-30" />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-b from-violet-500 via-purple-500 to-indigo-500 origin-top"
              />
            </div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className={`relative flex items-center mb-20 xl:mb-24 last:mb-0 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`relative w-5 h-5 rounded-full bg-gradient-to-br ${exp.color}`}
                  >
                    {exp.current && (
                      <div className="absolute -inset-2 rounded-full bg-emerald-500/30 animate-ping" />
                    )}
                    <div className="absolute inset-1 rounded-full bg-black" />
                    <div
                      className={`absolute inset-1.5 rounded-full bg-gradient-to-br ${exp.color}`}
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`w-[calc(50%-3rem)] ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  <div className="group relative">
                    {/* Card Glow */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                    />

                    <div className="relative p-6 sm:p-8 xl:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                      {/* Current Badge */}
                      {exp.current && (
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 ${index % 2 === 0 ? "ml-auto" : ""}`}
                        >
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                          </span>
                          <span className="text-xs text-emerald-400 font-medium">
                            Current Role
                          </span>
                        </div>
                      )}

                      {/* Period */}
                      <div
                        className={`flex items-center gap-2 text-sm text-gray-500 mb-3 ${index % 2 === 0 ? "justify-end" : ""}`}
                      >
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl xl:text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p
                        className={`text-base font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-3`}
                      >
                        {exp.company}
                      </p>

                      {/* Location */}
                      <div
                        className={`flex items-center gap-2 text-sm text-gray-500 mb-4 ${index % 2 === 0 ? "justify-end" : ""}`}
                      >
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-5">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div
                            key={i}
                            className={`flex items-center gap-2 text-sm text-gray-300 ${
                              index % 2 === 0 ? "flex-row-reverse" : ""
                            }`}
                          >
                            <ChevronRight
                              size={14}
                              className={`text-violet-400 flex-shrink-0 ${index % 2 === 0 ? "rotate-180" : ""}`}
                            />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile & Tablet Timeline */}
          <div className="lg:hidden relative">
            {/* Left Line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-[2px]">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500 via-purple-500 to-indigo-500 opacity-30" />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-b from-violet-500 via-purple-500 to-indigo-500 origin-top"
              />
            </div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative pl-12 sm:pl-16 mb-10 sm:mb-14 md:mb-16 last:mb-0"
              >
                {/* Timeline Node */}
                <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-6">
                  <div
                    className={`relative w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${exp.color}`}
                  >
                    {exp.current && (
                      <div className="absolute -inset-1.5 sm:-inset-2 rounded-full bg-emerald-500/30 animate-ping" />
                    )}
                    <div className="absolute inset-0.5 sm:inset-1 rounded-full bg-black" />
                    <div
                      className={`absolute inset-1 sm:inset-1.5 rounded-full bg-gradient-to-br ${exp.color}`}
                    />
                  </div>
                </div>

                {/* Connector Line */}
                <div className="absolute left-[22px] sm:left-[30px] top-7 w-6 sm:w-8 h-[2px] bg-gradient-to-r from-violet-500/50 to-transparent" />

                {/* Content Card */}
                <div className="group relative">
                  {/* Card Glow */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`}
                  />

                  <div className="relative p-5 sm:p-7 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all duration-300">
                    {/* Top Row */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                      {/* Current Badge */}
                      {exp.current && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-emerald-500" />
                          </span>
                          <span className="text-[10px] sm:text-xs text-emerald-400 font-medium">
                            Current
                          </span>
                        </div>
                      )}

                      {/* Period */}
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                        <Calendar
                          size={12}
                          className="sm:w-[14px] sm:h-[14px]"
                        />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p
                      className={`text-sm sm:text-base font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}
                    >
                      {exp.company}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500 mb-4">
                      <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
                      <span>{exp.location}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
                        >
                          <ChevronRight
                            size={12}
                            className="text-violet-400 flex-shrink-0 mt-0.5 sm:w-[14px] sm:h-[14px]"
                          />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
