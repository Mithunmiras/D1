import React from 'react';
import { motion } from 'framer-motion';

const CTABanner = ({ data }) => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {data.question}
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-blue-100">
            {data.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-xl"
            >
              {data.buttonText}
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition duration-300"
            >
              {data.secondaryButtonText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
