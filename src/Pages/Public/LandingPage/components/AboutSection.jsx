import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "./motionVariants";
import AboutSectionComponent from "../../../../Component/AboutSection";

const AboutSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
      className="about-section"
    >
      <AboutSectionComponent />
    </motion.section>
  );
};

export default AboutSection;