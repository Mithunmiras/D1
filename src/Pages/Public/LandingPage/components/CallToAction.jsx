import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "./motionVariants";

const CallToAction = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
      className="cta-section bg-primary-900 text-white py-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Let's work together to create innovative solutions that drive your business forward.
          </p>
          <button className="bg-white text-primary-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default CallToAction;