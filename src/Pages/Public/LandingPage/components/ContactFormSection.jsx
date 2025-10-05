import React, { useState } from "react";
import { motion } from "framer-motion";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, MailOutlined, BankOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const ContactFormSection = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);

    setTimeout(() => {
      message.success("Thank you for your message! We'll get back to you soon.");
      setLoading(false);
      form.resetFields();
    }, 1000);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-gray-900"
        >
          Share Your Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg px-4"
        >
          We'd love to hear from you. Let's start a conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl"
        >
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
              name="company"
              label="Company"
            >
              <Input
                prefix={<BankOutlined className="text-gray-400" />}
                placeholder="Your company name"
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
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <TextArea
                rows={6}
                placeholder="Tell us about your project or inquiry..."
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
                  className="h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </Form.Item>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
