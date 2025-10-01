import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabs, content, titleDesc, title } from "../config/servicesData";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("digital-strategy");

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {titleDesc}
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
              }}
              className={`cursor-pointer p-4 rounded-lg text-center transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div
                className={`flex justify-center items-center text-2xl mb-2 ${
                  activeTab === tab.id ? "text-white" : "text-blue-600"
                }`}
              >
                {tab.icon}
              </div>
              <p className="font-semibold">{tab.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Content Box */}
        <motion.div
          className="bg-gray-50 p-8 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {content[activeTab] ? (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  {content[activeTab].title}
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* What We Do */}
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-3">Features</h4>
                      <ul className="space-y-2 text-gray-600">
                        {content[activeTab].features.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                </div>
              </motion.div>
            ) : (
              <p>Select a service to see details.</p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
