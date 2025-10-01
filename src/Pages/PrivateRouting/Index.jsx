import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LogoLoader from "../../Component/LogoLoader";

const Dashboard = lazy(() => import("../../Component/Dashboard"));

const LoadingFallback = () => <LogoLoader />;

const PrivateRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default PrivateRoutes;


