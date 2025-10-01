import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LogoLoader from "../../Component/LogoLoader";

// Lazy load components
const LandingPage = lazy(() => import("./LandingPage"));
const About = lazy(() => import("./about"));
const Contact = lazy(() => import("./contact"));
const Services = lazy(() => import("./services"));
const Blog = lazy(() => import("./blog"));
const PageNotFound = lazy(() => import("../PageNotFound/index"));

// Loading component
const LoadingFallback = () => <LogoLoader />;

const PublicRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default PublicRoutes;


