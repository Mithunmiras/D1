import React, { useEffect, useState } from "react";
import BlogManager from "./BlogManager";
import { BaseUrl } from "../config";

const Dashboard = () => {
  const [consultations, setConsultations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loadingConsultations, setLoadingConsultations] = useState(false);
  const [loadingContacts, setLoadingContacts] = useState(false);
  const [errorConsultations, setErrorConsultations] = useState(null);
  const [errorContacts, setErrorContacts] = useState(null);
  const [activeTab, setActiveTab] = useState("consultations"); // new state for tabs
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [errorReviews, setErrorReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoadingReviews(true);
      setErrorReviews(null);
      try {
        const res = await fetch(`${BaseUrl}/api/review/list`);
        if (!res.ok) throw new Error("Failed to fetch reviews");
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        setErrorReviews(err.message);
      } finally {
        setLoadingReviews(false);
      }
    };
    fetchReviews();
  }, []);

  // Fetch consultations
  useEffect(() => {
    const fetchConsultations = async () => {
      setLoadingConsultations(true);
      setErrorConsultations(null);
      try {
        const res = await fetch(`${BaseUrl}/api/schedule`);
        if (!res.ok) throw new Error("Failed to fetch consultations");
        const data = await res.json();
        setConsultations(data);
      } catch (err) {
        setErrorConsultations(err.message);
      } finally {
        setLoadingConsultations(false);
      }
    };
    fetchConsultations();
  }, []);

  // Fetch contacts
  useEffect(() => {
    const fetchContacts = async () => {
      setLoadingContacts(true);
      setErrorContacts(null);
      try {
        const res = await fetch(`${BaseUrl}/api/contact`);
        if (!res.ok) throw new Error("Failed to fetch contacts");
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        setErrorContacts(err.message);
      } finally {
        setLoadingContacts(false);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Tabs */}
      <div className="mb-8 border-b border-gray-300">
        <nav className="flex space-x-4" aria-label="Tabs">
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "consultations"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("consultations")}
          >
            Consultations
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "contacts"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("contacts")}
          >
            Contacts
          </button>

          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "blog"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("blog")}
          >
            Blog
          </button>
          <button
            className={`px-4 py-2 font-medium ${
              activeTab === "reviews"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === "consultations" && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Scheduled Consultations
          </h2>
          {loadingConsultations && <p>Loading consultations...</p>}
          {errorConsultations && (
            <p className="text-red-600">Error: {errorConsultations}</p>
          )}
          {!loadingConsultations &&
            !errorConsultations &&
            consultations.length === 0 && <p>No consultations found.</p>}
          {consultations.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="py-3 px-4 border-b">Name</th>
                    <th className="py-3 px-4 border-b">Email</th>
                    <th className="py-3 px-4 border-b">Phone</th>
                    <th className="py-3 px-4 border-b">Company</th>
                    <th className="py-3 px-4 border-b">Service</th>
                    <th className="py-3 px-4 border-b">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {consultations.map((item) => (
                    <tr key={item._id} className="border-t hover:bg-gray-50">
                      <td className="py-2 px-4">
                        {item.firstName} {item.lastName}
                      </td>
                      <td className="py-2 px-4">{item.email}</td>
                      <td className="py-2 px-4">{item.phone || "N/A"}</td>
                      <td className="py-2 px-4">{item.company || "N/A"}</td>
                      <td className="py-2 px-4">{item.service || "N/A"}</td>
                      <td className="py-2 px-4">{item.message || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {activeTab === "blog" && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Blog Management</h2>
          <BlogManager />
        </section>
      )}

      {activeTab === "contacts" && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Contact Form Submissions
          </h2>
          {loadingContacts && <p>Loading contacts...</p>}
          {errorContacts && (
            <p className="text-red-600">Error: {errorContacts}</p>
          )}
          {!loadingContacts && !errorContacts && contacts.length === 0 && (
            <p>No contact submissions found.</p>
          )}
          {contacts.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="py-3 px-4 border-b">Name</th>
                    <th className="py-3 px-4 border-b">Email</th>
                    <th className="py-3 px-4 border-b">Subject</th>
                    <th className="py-3 px-4 border-b">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((item) => (
                    <tr key={item._id} className="border-t hover:bg-gray-50">
                      <td className="py-2 px-4">{item.name}</td>
                      <td className="py-2 px-4">{item.email}</td>
                      <td className="py-2 px-4">{item.subject || "N/A"}</td>
                      <td className="py-2 px-4">{item.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {activeTab === "reviews" && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          {loadingReviews && <p>Loading reviews...</p>}
          {errorReviews && (
            <p className="text-red-600">Error: {errorReviews}</p>
          )}
          {!loadingReviews && !errorReviews && reviews.length === 0 && (
            <p>No reviews found.</p>
          )}
          {reviews.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="py-3 px-4 border-b">Name</th>
                    <th className="py-3 px-4 border-b">Email</th>
                    <th className="py-3 px-4 border-b">Mobile</th>
                    <th className="py-3 px-4 border-b">Rating</th>
                    <th className="py-3 px-4 border-b">Comment</th>
                    <th className="py-3 px-4 border-b">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr key={review._id} className="border-t hover:bg-gray-50">
                      <td className="py-2 px-4">{review.name}</td>
                      <td className="py-2 px-4">{review.email || "N/A"}</td>
                      <td className="py-2 px-4">{review.mobileNo || "N/A"}</td>
                      <td className="py-2 px-4">{review.rating} ⭐</td>
                      <td className="py-2 px-4">{review.comment}</td>
                      <td className="py-2 px-4">
                        {new Date(review.createdAt * 1000).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Dashboard;
