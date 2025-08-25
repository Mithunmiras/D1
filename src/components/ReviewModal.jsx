import React, { useState } from "react";
import { Modal, Input, Rate, Form, message } from "antd";
import { BaseUrl } from "../config";

const { TextArea } = Input;

const ReviewModal = ({ open, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleSubmit = async () => {
    try {
      setLoading(true); // start loading
      const values = await form.validateFields();

      // ✅ Send review to backend API
      await fetch(`${BaseUrl}/api/review/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      message.success("Thanks for your review! 🎉"); // success toast
      form.resetFields();
      if (onClose) onClose(); // close modal
    } catch (error) {
      console.error("Validation Failed:", error);
      message.error("Failed to submit review. Please try again.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <Modal
      title="Submit Review"
      open={open} // 👈 controlled by parent
      onOk={handleSubmit}
      onCancel={onClose}
      okText="Submit"
      confirmLoading={loading} // ✅ show loading spinner
    >
      <Form form={form} layout="vertical">
        {/* Name (Required) */}
        <Form.Item
          name="name"
          label="Your Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>

        {/* Email (Optional) */}
        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: "email", message: "Please enter a valid email" }]}
        >
          <Input placeholder="johndoe@example.com" />
        </Form.Item>

        {/* Phone (Optional) */}
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

        {/* Rating (Required) */}
        <Form.Item
          name="rating"
          label="Rating"
          rules={[{ required: true, message: "Please give a rating" }]}
        >
          <Rate />
        </Form.Item>

        {/* Comment (Required) */}
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
