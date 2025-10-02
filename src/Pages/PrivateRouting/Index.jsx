import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("../../Component/Dashboard"));

const LoadingFallback = () => <div>Loading...</div>;

const PrivateRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
};

export default PrivateRoutes;


