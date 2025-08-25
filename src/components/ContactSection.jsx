import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BaseUrl } from "../config";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setToast(null);

    const data = {
      contactName: e.target.contactName.value,
      contactEmail: e.target.contactEmail.value,
      contactSubject: e.target.contactSubject.value,
      contactMessage: e.target.contactMessage.value,
    };

    try {
      const res = await fetch(`${BaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setToast({
          type: "success",
          message: result.message || "Message sent!",
        });
        e.target.reset();
      } else {
        setToast({
          type: "error",
          message: result.message || "Failed to send message",
        });
      }
    } catch (err) {
      setToast({ type: "error", message: "Failed to send message" });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Ready to start your digital transformation journey? Contact us today
            to discuss your project requirements.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {[
                {
                  icon: "fas fa-phone text-blue-600",
                  bg: "bg-blue-100",
                  title: "Phone",
                  link: "tel:7540082155",
                  text: "+91-7540082155",
                  color: "hover:text-blue-600",
                },
                {
                  icon: "fab fa-whatsapp text-green-600",
                  bg: "bg-green-100",
                  title: "WhatsApp",
                  link: "https://wa.me/7540082155",
                  text: "+91-7540082155",
                  color: "hover:text-green-600",
                },
                {
                  icon: "fas fa-envelope text-purple-600",
                  bg: "bg-purple-100",
                  title: "Email",
                  link: "mailto:info@digitner.com",
                  text: "info@digitner.com",
                  color: "hover:text-purple-600",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`${item.bg} p-3 rounded-lg mr-4`}>
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <a
                      href={item.link}
                      className={`text-gray-600 ${item.color}`}
                    >
                      {item.text}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <div className="text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <motion.form
                className="space-y-6"
                onSubmit={handleSubmit}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                {[
                  {
                    id: "contactName",
                    label: "Name *",
                    type: "text",
                    required: true,
                  },
                  {
                    id: "contactEmail",
                    label: "Email *",
                    type: "email",
                    required: true,
                  },
                  { id: "contactSubject", label: "Subject", type: "text" },
                ].map((field) => (
                  <motion.div
                    key={field.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </motion.div>
                ))}

                {/* Message */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <label
                    htmlFor="contactMessage"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contactMessage"
                    name="contactMessage"
                    rows="5"
                    required
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                               focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={
                    !loading
                      ? {
                          scale: 1.05,
                          boxShadow: "0px 8px 20px rgba(59,130,246,0.5)",
                        }
                      : {}
                  }
                  whileTap={!loading ? { scale: 0.95 } : {}}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300
                    ${
                      loading
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>

              {/* Toast */}
              <AnimatePresence>
                {toast && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className={`mt-4 p-4 rounded ${
                      toast.type === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                    role="alert"
                  >
                    {toast.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
