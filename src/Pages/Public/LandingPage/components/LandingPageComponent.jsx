import React from "react";
import { motion } from "framer-motion";
import { pageTransitionVariant } from "./motionVariants";
import HeroSection from "./HeroSection";
import BrandsSection from "./BrandsSection";
import AboutUsSection from "./AboutUsSection";
import ServicesSection from "./ServicesSection";
import ImpactStatistics from "./ImpactStatistics";
import ClientTestimonials from "./ClientTestimonials";
import PartnersSection from "./PartnersSection";
import OurProcess from "./OurProcess";
import LatestInsights from "./LatestInsights";
import VisionMission from "./VisionMission";
import MeetTheTeam from "./MeetTheTeam";
import ContactFormSection from "./ContactFormSection";
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
      <AboutUsSection />
      <ServicesSection />
      <ImpactStatistics />
      <ClientTestimonials />
      <PartnersSection />
      <OurProcess />
      <LatestInsights />
      <VisionMission />
      <MeetTheTeam />
      <ContactFormSection />
    </motion.div>
  );
};

export default LandingPageComponent;