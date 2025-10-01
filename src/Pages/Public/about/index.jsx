import React from "react";
import { motion } from "framer-motion";
import AboutSection from "../../../Component/AboutSection";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <AboutSection />
    </motion.div>
  );
};

export default About;