import React, { useState, Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./layouts/Index";
import PageTransition from "./utils/PageTransition";

// Lazy load components
const PublicRoutes = lazy(() => import("./Pages/Public/Index"));
const PrivateRoutes = lazy(() => import("./Pages/PrivateRouting/Index"));
const BlogDetail = lazy(() => import("./Component/BlogDetail"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound/index"));

// Loading component
const LoadingFallback = () => <div>Loading...</div>;

export default function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const location = useLocation();

  return (
    <Layout>
      <PageTransition pathname={location.pathname}>
        <Suspense fallback={null}>
          <Routes>
            {/* Public Routes */}
            <Route path="/*" element={<PublicRoutes />} />

            {/* Blog Detail Route */}
            <Route path="/blog/:id" element={<BlogDetail />} />

            {/* Admin Routes */}
            <Route
              path="/admin-digitner/*"
              element={isAdmin ? <PrivateRoutes /> : <Navigate to="/" replace />}
            />

            {/* 404 Route */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </Layout>
  );
}
