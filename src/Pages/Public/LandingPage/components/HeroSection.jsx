import React from "react";
import { motion } from "framer-motion";
import Hero from "../../../../Component/Hero";
import { sectionVariants } from "./motionVariants";

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="hero-section"
    >
      <Hero />
    </motion.section>
  );
};

export default HeroSection;