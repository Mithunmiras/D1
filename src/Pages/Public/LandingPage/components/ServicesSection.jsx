import React from "react";
import { motion } from "framer-motion";
import { FaDigitalTachograph, FaRocket, FaGraduationCap, FaChartLine } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaDigitalTachograph className="text-5xl text-purple-600" />,
      title: "Digital Transformation Solutions",
      items: [
        "Cloud Migration",
        "Process Automation",
        "Digital Strategy Consulting",
        "Legacy System Modernization"
      ]
    },
    {
      icon: <FaRocket className="text-5xl text-purple-600" />,
      title: "Growth Marketing & Automation",
      items: [
        "SEO & Content Marketing",
        "Social Media Management",
        "Marketing Automation",
        "Performance Analytics"
      ]
    },
    {
      icon: <FaGraduationCap className="text-5xl text-purple-600" />,
      title: "Digitner Academy",
      items: [
        "Expert-Led Courses",
        "Live Workshops",
        "Certification Programs",
        "Community Access"
      ]
    },
    {
      icon: <FaChartLine className="text-5xl text-purple-600" />,
      title: "DDCAS - Digital Coach Accelerator Suite",
      items: [
        "Business Coaching",
        "Growth Strategy",
        "Performance Tracking",
        "Personalized Roadmap"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600">
            Tailored for modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="text-purple-600 mr-2">•</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
