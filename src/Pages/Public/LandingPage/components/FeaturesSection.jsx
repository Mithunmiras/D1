import React from "react";
import { motion } from "framer-motion";
import Features from "../../../../Component/Features";
import { sectionVariants } from "./motionVariants";

const FeaturesSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
      className="features-section"
    >
      <Features />
    </motion.section>
  );
};

export default FeaturesSection;