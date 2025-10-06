import React, { useState } from "react";
import { Modal, Input, Rate, Form, message } from "antd";
import { BaseUrl } from "../config";

const { TextArea } = Input;

const ReviewModal = ({ open, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();

      await fetch(`${BaseUrl}/api/review/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      message.success("Thanks for your review!");
      form.resetFields();
      if (onClose) onClose();
    } catch (error) {
      message.error("Failed to submit review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Submit Review"
      open={open}
      onOk={handleSubmit}
      onCancel={onClose}
      okText="Submit"
      confirmLoading={loading}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Your Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: "email", message: "Please enter a valid email" }]}
        >
          <Input placeholder="johndoe@example.com" />
        </Form.Item>

        <Form.Item
          name="mobileNo"
          label="Phone Number"
          rules={[
            {
              pattern: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit phone number",
            },
          ]}
        >
          <Input placeholder="9876543210" />
        </Form.Item>

        <Form.Item
          name="rating"
          label="Rating"
          rules={[{ required: true, message: "Please give a rating" }]}
        >
          <Rate />
        </Form.Item>

        <Form.Item
          name="comment"
          label="Comment"
          rules={[{ required: true, message: "Please write a review" }]}
        >
          <TextArea rows={3} placeholder="Write your review..." />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReviewModal;
