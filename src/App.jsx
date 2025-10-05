import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./layouts/Index";
import PageTransition from "./utils/PageTransition";
import Preloader from "./Component/Preloader";

const PublicRoutes = lazy(() => import("./Pages/Public/Index"));
const PrivateRoutes = lazy(() => import("./Pages/PrivateRouting/Index"));
const BlogDetail = lazy(() => import("./Component/BlogDetail"));
const PageNotFound = lazy(() => import("./Pages/PageNotFound/index"));

export default function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <Preloader />}
      <Layout>
        <PageTransition pathname={location.pathname}>
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/*" element={<PublicRoutes />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route
                path="/admin-digitner/*"
                element={isAdmin ? <PrivateRoutes /> : <Navigate to="/" replace />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </PageTransition>
      </Layout>
    </>
  );
}
