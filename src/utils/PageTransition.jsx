import React from "react";
import { motion } from "framer-motion";

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1]
  }
};

export const slideTransition = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
  transition: { duration: 0.4, ease: "easeInOut" }
};

export const fadeTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 }
};

export const scaleTransition = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.2 },
  transition: { duration: 0.3 }
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      {...pageTransition}
      style={{ willChange: 'opacity' }}
    >
      {children}
    </motion.div>
  );
}
