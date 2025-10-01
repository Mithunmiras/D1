import React from "react";
import LandingPageComponent from "./components/LandingPageComponent";
import { useLandingPage } from "./hooks/useLandingPage";
import LogoLoader from "../../../Component/LogoLoader";

const LandingPage = () => {
  const { isLoading } = useLandingPage();

  return (
    <>
      {isLoading ? (
        <LogoLoader />
      ) : (
        <LandingPageComponent />
      )}
    </>
  );
};

export default LandingPage;