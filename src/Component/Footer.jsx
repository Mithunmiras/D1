import React from "react";
import { motion } from "framer-motion";
import logo from "/mainLogo2.png";

const Footer = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-[#0F1628] text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="text-2xl font-bold mb-4">
              <img src={logo} alt="Logo" className="w-40 h-15 mr-2" />
            </div>
            <p className="text-gray-400 mb-4">
              Your Partner for Digital Growth
            </p>
            <div className="flex space-x-4">
              {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
                (icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ scale: 1.2, color: "#fff" }}
                    className="text-gray-400 hover:text-white transition duration-300"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="columns-2 space-y-2 text-gray-400">
              {[
                "Digital Strategy",
                "Business Consulting",
                "Website Development",
                "Ecommerce Solutions",
                "Mobile Development",
                "CRM Development",
                "Digital Marketing & Logo Creation",
                "Lead Generation",
                "Thought Leadership",
                "Brand Messaging",
                "Content Storytelling",
                "Brochure & Catalogue Design",
              ].map((service, idx) => (
                <li key={idx}>
                  <motion.a
                    href="#services"
                    className="hover:text-white relative inline-block"
                    whileHover={{ x: 3 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#blog" },
                { label: "Contact", href: "#contact" },
                { label: "Schedule Appointment", href: "#appointment" },
              ].map((link, idx) => (
                <li key={idx}>
                  <motion.a
                    href={link.href}
                    className="hover:text-white relative inline-block"
                    whileHover={{ x: 3 }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <i className="fas fa-phone mr-2"></i>
                <a
                  href="tel:7540082155"
                  className="hover:text-white transition duration-300"
                >
                  +91-7540082155
                </a>
              </li>
              <li>
                <i className="fas fa-envelope mr-2"></i>
                <a
                  href="mailto:info@digitner.com"
                  className="hover:text-white transition duration-300"
                >
                  info@digitner.com
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; 2024 Digitner. All rights reserved. | Your Digital Solutions
            Partner
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
