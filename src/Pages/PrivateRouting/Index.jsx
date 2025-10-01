import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LogoLoader from "../../Component/LogoLoader";

// Lazy load components
const Dashboard = lazy(() => import("./layouts"));
const BannerMedia = lazy(() => import("./BannerMedia"));
const ClientLogo = lazy(() => import("./ClientLogo"));
const Contact = lazy(() => import("./contact"));
const HomeMedia = lazy(() => import("./HomeMedia"));
const Partner = lazy(() => import("./Partner"));
const Review = lazy(() => import("./review"));
const Service = lazy(() => import("./service"));

// Loading component
const LoadingFallback = () => <LogoLoader />;

const PrivateRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="banner-media" element={<BannerMedia />} />
          <Route path="client-logo" element={<ClientLogo />} />
          <Route path="contact" element={<Contact />} />
          <Route path="home-media" element={<HomeMedia />} />
          <Route path="partner" element={<Partner />} />
          <Route path="review" element={<Review />} />
          <Route path="service" element={<Service />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default PrivateRoutes;


