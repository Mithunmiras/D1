import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Our Vision & Mission
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-10 text-white shadow-2xl"
          >
            <div className="flex justify-center mb-6">
              <FaEye className="text-6xl" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center">
              Our Vision
            </h3>
            <p className="text-lg leading-relaxed text-white/90">
              To become the leading catalyst for digital transformation in India, empowering
              every MSME to harness the full potential of digital technologies. We envision a
              future where businesses of all sizes thrive in the digital economy, creating
              sustainable growth and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl p-10 text-white shadow-2xl"
          >
            <div className="flex justify-center mb-6">
              <FaBullseye className="text-6xl" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed text-white/90">
              To deliver comprehensive, accessible, and innovative digital solutions that
              transform businesses. We are committed to providing world-class education,
              strategic consulting, and cutting-edge technology solutions that enable our
              clients to achieve measurable success and sustainable growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
