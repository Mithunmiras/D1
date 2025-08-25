import React, { useEffect, useState } from "react";
import { BaseUrl } from "../config";
import { FaFilter } from "react-icons/fa";

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState(true); // "", "true", "false"
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: { name: "", link: "" },
    readMoreLink: "",
    gradientColors: { start: "", end: "" },
    active: true,
  });
  const [editId, setEditId] = useState(null);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const query = activeFilter ? `?active=${activeFilter}` : "";
      const res = await fetch(`${BaseUrl}/api/blog${query}`);
      if (!res.ok) throw new Error("Failed to fetch blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [activeFilter]); // refetch when filter changes

  // Handle Create / Edit submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editId ? "PUT" : "POST";
      const url = editId
        ? `${BaseUrl}/api/blog/${editId}`
        : `${BaseUrl}/api/blog/create`;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to save blog");

      await fetchBlogs();
      setShowForm(false);
      setEditId(null);
      resetForm();
    } catch (err) {
      console.error("Error saving blog:", err);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      category: { name: "", link: "" },
      readMoreLink: "",
      gradientColors: { start: "", end: "" },
      active: true,
    });
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const res = await fetch(`${BaseUrl}/api/blog/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Failed to delete blog");
        await fetchBlogs();
      } catch (err) {
        console.error("Error deleting blog:", err);
      }
    }
  };

  // Handle edit click
  const handleEdit = (blog) => {
    setEditId(blog._id);
    setFormData(blog);
    setShowForm(true);
  };

  return (
    <div className="flex">
      {/* Table List */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Blog List</h2>
          <div className="flex items-center gap-4">
            <FaFilter className="text-gray-600" />
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">All</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                resetForm();
                setEditId(null);
                setShowForm(true);
              }}
            >
              + Create Blog
            </button>
          </div>
        </div>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Active</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td className="p-2 border">{blog.title}</td>
                <td className="p-2 border">{blog.category?.name}</td>
                <td className="p-2 border">{blog.active ? "Yes" : "No"}</td>
                <td className="p-2 border">
                  <button
                    className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
                    onClick={() => handleEdit(blog)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Side Form */}
      {showForm && (
        <div className="w-1/3 bg-white border-l p-4 fixed right-0 top-0 h-full shadow-lg overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">
            {editId ? "Edit Blog" : "Create Blog"}
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              className="w-full border p-2 mb-2"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Description"
              className="w-full border p-2 mb-2"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
            ></textarea>
            <input
              type="text"
              placeholder="Category Name"
              className="w-full border p-2 mb-2"
              value={formData.category.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: { ...formData.category, name: e.target.value },
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Category Link"
              className="w-full border p-2 mb-2"
              value={formData.category.link}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: { ...formData.category, link: e.target.value },
                })
              }
              required
            />
            <input
              type="text"
              placeholder="Read More Link"
              className="w-full border p-2 mb-2"
              value={formData.readMoreLink}
              onChange={(e) =>
                setFormData({ ...formData, readMoreLink: e.target.value })
              }
              required
            />
            <input
              type="color"
              value={formData.gradientColors.start}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  gradientColors: {
                    ...formData.gradientColors,
                    start: e.target.value,
                  },
                })
              }
              className="w-full p-1 mb-2"
            />
            <input
              type="color"
              value={formData.gradientColors.end}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  gradientColors: {
                    ...formData.gradientColors,
                    end: e.target.value,
                  },
                })
              }
              className="w-full p-1 mb-2"
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={formData.active}
                onChange={(e) =>
                  setFormData({ ...formData, active: e.target.checked })
                }
                className="mr-2"
              />
              <label>Active</label>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {editId ? "Update" : "Create"}
              </button>
              <button
                type="button"
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
