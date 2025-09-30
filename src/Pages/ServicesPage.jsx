import React from "react";
import { motion } from "framer-motion";
import Features from "../Component/Features";

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Features />
    </motion.div>
  );
}
