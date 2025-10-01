import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = ({ data }) => {
  return (
    <section id="process-section" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {data.headline}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-blue-700 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-4 gap-8 relative">
              {data.steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative inline-block mb-6">
                    <div className="bg-white border-4 border-gradient-to-r from-purple-600 to-blue-600 rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow-lg relative z-10">
                      {step.icon}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-30"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-8">
          {data.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-20"
            >
              <div className="absolute left-0 top-0">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
                  {step.icon}
                </div>
              </div>

              {index < data.steps.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 transform -translate-x-1/2"></div>
              )}

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
