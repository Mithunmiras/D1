import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import BlogSection from "./components/BlogSection";
import ScheduleConsultation from "./components/ScheduleConsultation";
import ContactSection from "./components/ContactSection";
import Dashboard from "./components/Dashboard"; // your admin page
import LogoCarousel from "./components/LogoCarousel";
import ChatBot from "./components/ChatBot";
import BlogDetail from "./components/BlogDetail";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const location = useLocation();

  // Check if current path is dashboard
  const isDashboard = location.pathname === "/admin-digi-123";

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LogoCarousel />

                <Features />
                <AboutSection />
                <BlogSection />
                <ScheduleConsultation />
                <ContactSection />
              </>
            }
          />
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route
            path="/admin-digi-123"
            element={isAdmin ? <Dashboard /> : <Navigate to="/" replace />}
          />
        </Routes>
      </main>

      {/* Render Footer only if NOT on dashboard */}
      {!isDashboard && <Footer />}
    </div>
  );
}
