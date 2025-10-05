import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaCog } from "react-icons/fa";

const AboutUsSection = () => {
  const keyPoints = [
    {
      icon: <FaRocket className="text-4xl text-purple-600" />,
      title: "Empowering MSMEs",
      description: "Helping small and medium enterprises thrive in the digital age"
    },
    {
      icon: <FaLightbulb className="text-4xl text-purple-600" />,
      title: "Strategic Vision",
      description: "Forward-thinking solutions that drive sustainable growth"
    },
    {
      icon: <FaCog className="text-4xl text-purple-600" />,
      title: "Comprehensive Solutions",
      description: "End-to-end digital transformation services"
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
          About Digitner Tech Solutions
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
              <video
                className="w-full h-full object-cover"
                poster="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                controls
              >
                <source src="" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
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
};

export default AboutUsSection;
