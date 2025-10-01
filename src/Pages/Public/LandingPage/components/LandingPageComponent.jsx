import React from "react";
import { motion } from "framer-motion";
import { pageTransitionVariant } from "./motionVariants";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import BrandsSection from "./BrandsSection";
import AboutSection from "./AboutSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import CallToAction from "./CallToAction";
import FloatingBtn from "../../../../Component/FloatingBtn";

const LandingPageComponent = () => {
  return (
    <motion.div
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="landing-page-wrapper"
    >
      <FloatingBtn />
      <HeroSection />
      <BrandsSection />
      <FeaturesSection />
      <AboutSection />
      <BlogSection />
      <CallToAction />
      <ContactSection />
    </motion.div>
  );
};

export default LandingPageComponent;