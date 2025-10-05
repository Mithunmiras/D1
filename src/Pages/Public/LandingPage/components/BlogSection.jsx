import React from "react";
import { motion } from "framer-motion";
import BlogSectionComponent from "../../../../Component/BlogSection";
import { sectionVariants } from "./motionVariants";

const BlogSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={sectionVariants}
      className="blog-section"
    >
      <BlogSectionComponent />
    </motion.section>
  );
};

export default BlogSection;