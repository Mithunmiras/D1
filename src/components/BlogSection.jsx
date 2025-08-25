import { useEffect, useState } from "react";
import { blogSection } from "../data/blogData";
import { BaseUrl } from "../config";
import { motion } from "framer-motion";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const res = await fetch(`${BaseUrl}/api/blog?active=true`);
        const data = await res.json();
        setBlogs(data || []);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogData();
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>Loading blogs...</p>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>No blogs available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            {blogSection.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {blogSection.subheading}
          </motion.p>
        </div>

        {/* Blog Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {blogs.map((post) => (
            <motion.article
              key={post.id || post.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
              }}
              transition={{ duration: 0.4 }}
              className="blog-card bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Gradient background with pulse */}
              <motion.div
                className="h-48"
                style={{
                  background: `linear-gradient(to bottom right, ${post.gradientColors.start}, ${post.gradientColors.end})`,
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              ></motion.div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                  <span className="mx-2">•</span>
                  <a
                    href={post.category.link}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {post.category.name}
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href={`/blog/${post._id}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
