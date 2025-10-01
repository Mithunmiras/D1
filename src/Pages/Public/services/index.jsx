import React from "react";
import { motion } from "framer-motion";
import Features from "../../../Component/Features";
import { pageTransition } from "../../../utils/PageTransition";

const Services = () => {
  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen bg-gray-50"
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <Features />
      </div>
    </motion.div>
  );
};

export default Services;