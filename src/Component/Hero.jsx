import React from "react";
import { FaGraduationCap, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] bg-gradient-to-br from-cyan-400 via-teal-400 to-yellow-400 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Learn & Grow with{" "}
              <span className="text-purple-600">Digitner Academy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white mb-8 leading-relaxed max-w-xl"
            >
              Access expert-led courses, live workshops, and a thriving
              community of entrepreneurs and digital innovators.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition duration-300 flex items-center justify-center gap-2"
              >
                <FaGraduationCap className="text-xl" />
                Join Academy
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-purple-600 transition duration-300 flex items-center justify-center gap-2"
              >
                <FaBook className="text-xl" />
                Explore Resources
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
              <video
                className="w-full h-full object-cover"
                poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                controls
              >
                <source src="" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl"
                >
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-purple-600 border-b-[12px] border-b-transparent ml-1"></div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
