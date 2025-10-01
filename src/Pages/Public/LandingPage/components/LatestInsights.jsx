import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestInsights = () => {
  const blogPosts = [
    {
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
      date: "March 15, 2025",
      title: "The Future of Digital Transformation",
      excerpt: "Discover how emerging technologies are reshaping the business landscape and what it means for your organization.",
      id: 1
    },
    {
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
      date: "March 10, 2025",
      title: "Marketing Automation Best Practices",
      excerpt: "Learn how to leverage automation tools to scale your marketing efforts and drive better results.",
      id: 2
    },
    {
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      date: "March 5, 2025",
      title: "Building a Digital-First Culture",
      excerpt: "Explore strategies for creating a workplace culture that embraces digital innovation and continuous learning.",
      id: 3
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Latest Insights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-purple-600 font-semibold mb-3">
                  {post.date}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Read More
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
