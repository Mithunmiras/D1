import React, { useState } from "react";
import { motion } from "framer-motion";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, MailOutlined, MessageOutlined } from "@ant-design/icons";
import { BaseUrl } from "../config";

const { TextArea } = Input;

const ContactSection = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);

    const data = {
      contactName: values.name,
      contactEmail: values.email,
      contactSubject: values.subject,
      contactMessage: values.message,
    };

    try {
      const res = await fetch(`${BaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        message.success(result.message || "Message sent successfully!");
        form.resetFields();
      } else {
        message.error(result.message || "Failed to send message");
      }
    } catch (err) {
      message.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
          >
            Ready to start your digital transformation journey? Contact us today
            to discuss your project requirements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
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
                  icon: "fas fa-envelope text-blue-600",
                  bg: "bg-blue-100",
                  title: "Email",
                  link: "mailto:info@digitner.com",
                  text: "info@digitner.com",
                  color: "hover:text-blue-600",
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
                      className={`text-gray-600 ${item.color} transition-colors`}
                    >
                      {item.text}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Business Hours</h4>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                autoComplete="off"
                requiredMark="optional"
                size="large"
              >
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: "Please enter your name" }]}
                >
                  <Input
                    prefix={<UserOutlined className="text-gray-400" />}
                    placeholder="Your full name"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" }
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className="text-gray-400" />}
                    placeholder="your.email@example.com"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label="Subject"
                >
                  <Input
                    prefix={<MessageOutlined className="text-gray-400" />}
                    placeholder="What is this about?"
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: "Please enter your message" }]}
                >
                  <TextArea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="rounded-lg"
                  />
                </Form.Item>

                <Form.Item className="mb-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      block
                      className="h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </Form.Item>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
