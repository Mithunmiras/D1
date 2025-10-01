import React from "react";
import { motion } from "framer-motion";
import BlogSection from "../../../Component/BlogSection";
import { pageTransition } from "../../../utils/PageTransition";

const Blog = () => {
  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen bg-gray-50"
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
        <BlogSection />
      </div>
    </motion.div>
  );
};

export default Blog;