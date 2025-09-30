import React from "react";
import FloatingBtn from "../../Component/FloatingBtn";
import Hero from "../../Component/Hero";
import LogoCarousel from "../../Component/LogoCarousel";
import Features from "../../Component/Features";
import AboutSection from "../../Component/AboutSection";
import BlogSection from "../../Component/BlogSection";
import ScheduleConsultation from "../../Component/ScheduleConsultation";
import ContactSection from "../../Component/ContactSection";

export default function PublicIndex() {
  return (
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
  );
}


