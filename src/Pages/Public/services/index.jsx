import React from "react";
import ServicesHero from "./components/ServicesHero";
import CoreServices from "./components/CoreServices";
import SaaSProducts from "./components/SaaSProducts";
import ProcessSection from "./components/ProcessSection";
import CTABanner from "./components/CTABanner";
import { servicePageData } from "../../../config/servicesPageData";

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero data={servicePageData.hero} />
      <CoreServices data={servicePageData.coreServices} />
      <SaaSProducts data={servicePageData.saasProducts} />
      <ProcessSection data={servicePageData.process} />
      <CTABanner data={servicePageData.cta} />
    </div>
  );
};

export default Services;