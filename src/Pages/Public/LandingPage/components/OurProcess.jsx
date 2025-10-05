import React from "react";
import { motion } from "framer-motion";

const OurProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery",
      description: "We analyze your business needs, challenges, and goals to create a tailored strategy."
    },
    {
      number: 2,
      title: "Strategy",
      description: "Our experts develop a comprehensive roadmap aligned with your objectives."
    },
    {
      number: 3,
      title: "Implementation",
      description: "We execute the plan with precision, keeping you informed at every step."
    },
    {
      number: 4,
      title: "Launch",
      description: "Your solution goes live with ongoing support and optimization for success."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Our Process
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-purple-200">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-purple-600"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto"
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
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

export default OurProcess;
