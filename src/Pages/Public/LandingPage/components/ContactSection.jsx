import React from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "./motionVariants";
import ContactSectionComponent from "../../../../Component/ContactSection";

const ContactSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="contact-section"
    >
      <ContactSectionComponent />
    </motion.section>
  );
};

export default ContactSection;