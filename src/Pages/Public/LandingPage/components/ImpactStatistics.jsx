import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaBuilding, FaChartLine, FaUserGraduate, FaStar } from "react-icons/fa";

const ImpactStatistics = () => {
  const stats = [
    {
      icon: <FaBuilding className="text-6xl text-purple-600" />,
      value: 3700,
      suffix: "+",
      label: "MSMEs Transformed"
    },
    {
      icon: <FaChartLine className="text-6xl text-purple-600" />,
      value: 92,
      suffix: "%",
      label: "Average Growth"
    },
    {
      icon: <FaUserGraduate className="text-6xl text-purple-600" />,
      value: 18500,
      suffix: "+",
      label: "Academy Students"
    },
    {
      icon: <FaStar className="text-6xl text-purple-600" />,
      value: 36,
      suffix: "+",
      label: "Client Satisfaction"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold mb-2">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="text-lg text-white/90">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatistics;
