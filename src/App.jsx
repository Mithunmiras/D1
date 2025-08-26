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
import FloatingBtn from "./components/FloatingBtn";

export default function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const location = useLocation();

  // Check if current path is admin dashboard
  const isDashboard = location.pathname === "/admin-digitner";

  return (
    <div className="min-h-screen flex flex-col">
      {!isDashboard && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FloatingBtn />
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
            path="/admin-digitner"
            element={isAdmin ? <Dashboard /> : <Navigate to="/" replace />}
          />
        </Routes>
      </main>

      {!isDashboard && <Footer />}
    </div>
  );
}
