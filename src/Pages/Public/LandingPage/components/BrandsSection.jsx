import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "./motionVariants";
import LogoCarousel from "../../../../Component/LogoCarousel";

const BrandsSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="brands-section"
    >
      <LogoCarousel />
    </motion.section>
  );
};

export default BrandsSection;