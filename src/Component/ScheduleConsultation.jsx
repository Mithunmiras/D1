import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BaseUrl } from "../config";

const ScheduleConsultation = () => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      company: e.target.company.value,
      service: e.target.service.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(`${BaseUrl}/api/schedule`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("res: ", res);

      const result = await res.json();
      console.log("result: ", result);

      if (res.ok) {
        setToast({ type: "success", message: result.message });
        e.target.reset();
      } else {
        setToast({
          type: "error",
          message: result.message || "Failed to schedule",
        });
      }
    } catch {
      setToast({ type: "error", message: "Failed to schedule" });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <section id="appointment" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Schedule a Consultation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Ready to transform your business? Book a free consultation with our
            digital experts to discuss your project and goals.
          </motion.p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <motion.form
            className="grid md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              {
                id: "firstName",
                label: "First Name *",
                type: "text",
                required: true,
              },
              {
                id: "lastName",
                label: "Last Name *",
                type: "text",
                required: true,
              },
              { id: "email", label: "Email *", type: "email", required: true },
              { id: "phone", label: "Phone Number", type: "tel" },
              { id: "company", label: "Company Name", type: "text" },
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </motion.div>
            ))}

            {/* Service Dropdown */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a service</option>
                <option value="digital-strategy">Digital Strategy</option>
                <option value="web-development">Website Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="mobile-development">Mobile Development</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            {/* Message Box */}
            <motion.div
              className="md:col-span-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your project requirements and goals..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="md:col-span-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
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
                      : "bg-blue-600 hover:bg-blue-700"
                  }
                  text-white
                `}
              >
                {loading ? "Scheduling..." : "Schedule Consultation"}
              </motion.button>
            </motion.div>
          </motion.form>

          {/* Toast Message */}
          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`mt-6 p-4 rounded ${
                  toast.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
                role="alert"
              >
                {toast.message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleConsultation;
