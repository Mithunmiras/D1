import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from "./layouts/Index";
import PublicIndex from "./Pages/Public/Index";
import PrivateRoutingIndex from "./Pages/PrivateRouting/Index";
import BlogDetail from "./Component/BlogDetail";
import ServicesPage from "./Pages/ServicesPage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import PageTransition from "./utils/PageTransition";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const location = useLocation();

  const isDashboard = location.pathname === "/admin-digitner";

  return (
    <Layout>
      <PageTransition pathname={location.pathname}>
        <Routes>
          <Route path="/" element={<PublicIndex />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route
            path="/admin-digitner"
            element={isAdmin ? <PrivateRoutingIndex /> : <Navigate to="/" replace />}
          />
        </Routes>
      </PageTransition>
    </Layout>
  );
}
