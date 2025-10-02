import React from "react";
import { motion } from "framer-motion";

// Default page transition animation
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: "easeInOut" }
};

// Slide transition animation
export const slideTransition = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.4, ease: "easeInOut" }
};

// Fade transition animation
export const fadeTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
};

// Scale transition animation
export const scaleTransition = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.2 },
  transition: { duration: 0.3 }
};

export default function PageTransition({ children }) {
  return (
    <motion.div {...pageTransition}>
      {children}
    </motion.div>
  );
}
