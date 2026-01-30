"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Loader2,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-black/50 pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="text-indigo-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Ready to bring your vision to life? I&apos;m always excited to work
            on ambitious projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-5 sm:p-6 md:p-8 lg:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CheckCircle
                      size={32}
                      className="text-white sm:w-10 sm:h-10"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
                    Thank you for reaching out. I&apos;ll get back to you within
                    24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm sm:text-base"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field"
                    >
                      <option value="" className="bg-gray-900">
                        Select a subject
                      </option>
                      <option value="project" className="bg-gray-900">
                        Project Inquiry
                      </option>
                      <option value="consulting" className="bg-gray-900">
                        Consulting
                      </option>
                      <option value="collaboration" className="bg-gray-900">
                        Collaboration
                      </option>
                      <option value="job" className="bg-gray-900">
                        Job Opportunity
                      </option>
                      <option value="other" className="bg-gray-900">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-white text-sm sm:text-base font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/25"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2
                          size={18}
                          className="animate-spin sm:w-5 sm:h-5"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Quick Connect */}
            <div className="glass-card p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
                <Sparkles className="text-indigo-400" size={20} />
                Quick Connect
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <motion.a
                  href="mailto:hello@example.com"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-gray-500">
                      Email
                    </div>
                    <div className="text-white text-sm sm:text-base group-hover:text-indigo-400 transition-colors truncate">
                      hello@example.com
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+1234567890"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-gray-500">
                      Phone
                    </div>
                    <div className="text-white text-sm sm:text-base group-hover:text-indigo-400 transition-colors">
                      +1 (234) 567-890
                    </div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-gray-500">
                      Location
                    </div>
                    <div className="text-white text-sm sm:text-base">
                      San Francisco, CA (Remote)
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Availability */}
            <div className="gradient-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 mt-1.5 sm:mt-2 animate-pulse flex-shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-base sm:text-lg mb-1.5 sm:mb-2">
                    Available for Work
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    I&apos;m currently open to new opportunities, freelance
                    projects, and consulting. Response time: within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="glass-card p-5 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <MessageSquare className="text-indigo-400" size={20} />
                <h4 className="text-white font-bold text-sm sm:text-base">
                  Fun Fact
                </h4>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                I&apos;ve written over 500,000 lines of production code and
                drunk approximately 2,000 cups of coffee while doing it. ☕
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
