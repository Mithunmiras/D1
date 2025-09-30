import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Layout from "./layouts/Index";
import PublicIndex from "./Pages/Public/Index";
import PrivateRoutingIndex from "./Pages/PrivateRouting/Index";
import BlogDetail from "./Component/BlogDetail";
import ChatBot from "./Component/ChatBot";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const location = useLocation();

  const isDashboard = location.pathname === "/admin-digitner";

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PublicIndex />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route
          path="/admin-digitner"
          element={isAdmin ? <PrivateRoutingIndex /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Layout>
  );
}
