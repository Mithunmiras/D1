import React from "react";
import { motion } from "framer-motion";
import ContactSection from "../Component/ContactSection";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <ContactSection />
    </motion.div>
  );
}
