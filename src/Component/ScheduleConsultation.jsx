import React, { useState } from "react";
import { motion } from "framer-motion";
import { Form, Input, Select, Button, message } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined, BankOutlined } from "@ant-design/icons";
import { BaseUrl } from "../config";

const { Option } = Select;
const { TextArea } = Input;

const ScheduleConsultation = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const res = await fetch(`${BaseUrl}/api/schedule`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await res.json();

      if (res.ok) {
        message.success(result.message || "Consultation scheduled successfully!");
        form.resetFields();
      } else {
        message.error(result.message || "Failed to schedule consultation");
      }
    } catch (error) {
      message.error("Failed to schedule consultation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
          >
            Schedule a Consultation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
          >
            Ready to transform your business? Book a free consultation with our
            digital experts to discuss your project and goals.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10"
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            autoComplete="off"
            requiredMark="optional"
            size="large"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: "Please enter your first name" }]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="John"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: "Please enter your last name" }]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Doe"
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
                  placeholder="john.doe@example.com"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
              >
                <Input
                  prefix={<PhoneOutlined className="text-gray-400" />}
                  placeholder="+1 (555) 000-0000"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="company"
                label="Company Name"
              >
                <Input
                  prefix={<BankOutlined className="text-gray-400" />}
                  placeholder="Your Company"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="service"
                label="Service Interest"
              >
                <Select
                  placeholder="Select a service"
                  className="rounded-lg"
                  allowClear
                >
                  <Option value="digital-strategy">Digital Strategy</Option>
                  <Option value="web-development">Website Development</Option>
                  <Option value="digital-marketing">Digital Marketing</Option>
                  <Option value="mobile-development">Mobile Development</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </div>

            <Form.Item
              name="message"
              label="Project Details"
              className="mb-6"
            >
              <TextArea
                rows={4}
                placeholder="Tell us about your project requirements and goals..."
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
                  {loading ? "Scheduling..." : "Schedule Consultation"}
                </Button>
              </motion.div>
            </Form.Item>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleConsultation;
