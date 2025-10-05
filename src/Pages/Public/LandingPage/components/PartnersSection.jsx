import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaMicrosoft, FaAws, FaFacebook, FaShopify } from "react-icons/fa";

const PartnersSection = () => {
  const partners = [
    { icon: <FaGoogle className="text-6xl" />, name: "Google" },
    { icon: <FaMicrosoft className="text-6xl" />, name: "Microsoft" },
    { icon: <FaAws className="text-6xl" />, name: "AWS" },
    { icon: <FaFacebook className="text-6xl" />, name: "Facebook" },
    { icon: <FaShopify className="text-6xl" />, name: "Shopify" }
  ];

  const certifications = [
    "Google Ads Certified",
    "Facebook Blueprint Certified",
    "AWS Certified Solutions Architect",
    "Microsoft Azure Certified",
    "HubSpot Certified",
    "Salesforce Certified"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Our Partners & Certifications
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">
            Technology Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow text-gray-600 hover:text-purple-600"
              >
                {partner.icon}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">
            Industry Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-purple-100 text-purple-700 rounded-full font-semibold hover:bg-purple-200 transition-colors cursor-pointer"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
