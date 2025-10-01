import React from "react";
import { motion } from "framer-motion";
import ContactSection from "../../../Component/ContactSection";
import ScheduleConsultation from "../../../Component/ScheduleConsultation";
import { pageTransition } from "../../../utils/PageTransition";

const Contact = () => {
  return (
    <motion.div
      {...pageTransition}
      className="min-h-screen bg-gray-50"
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactSection />
          <ScheduleConsultation />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;