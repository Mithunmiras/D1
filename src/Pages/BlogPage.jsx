import React from "react";
import { motion } from "framer-motion";
import BlogSection from "../Component/BlogSection";

export default function BlogPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <BlogSection />
    </motion.div>
  );
}
