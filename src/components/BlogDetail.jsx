import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BaseUrl } from "../config";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`${BaseUrl}/api/blog/${id}`);
        if (!res.ok) throw new Error("Blog not found");
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <section className="py-20 bg-white flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12  border-b-4 border-blue-600"></div>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="py-20 bg-white text-center">
        <p>Blog not found</p>
        <Link to="/" className="text-blue-600 underline">
          Back to Blogs
        </Link>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Card Style */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Gradient Header */}
          <div
            className="h-64"
            style={{
              background: `linear-gradient(to bottom right, ${
                blog.gradientColors?.start || "#4f46e5"
              }, ${blog.gradientColors?.end || "#9333ea"})`,
            }}
          ></div>

          {/* Blog Content */}
          <div className="p-8">
            <div className="flex items-center mb-4 text-sm text-gray-500">
              <span>
                {blog.createdAt
                  ? new Date(blog.createdAt).toLocaleDateString()
                  : "Date not available"}
              </span>
              {blog.category?.name && (
                <>
                  <span className="mx-2">•</span>
                  <span className="text-blue-600">{blog.category.name}</span>
                </>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {blog.title}
            </h1>

            <p className="text-lg text-gray-600 mb-6">{blog.description}</p>

            <div className="prose max-w-none text-gray-800">
              {/* Render full content */}
              {blog.content || "No additional content available."}
            </div>

            {/* Back Button */}
            <div className="mt-10">
              <Link
                to="/"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                ← Back to Blogs
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
