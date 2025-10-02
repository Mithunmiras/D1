import { useState, useEffect } from 'react';

export const useLandingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [heroData, setHeroData] = useState({
    title: "Transform Your Digital Presence",
    subtitle: "We help businesses grow by creating stunning websites and powerful digital solutions.",
    buttonText: "Get Started"
  });
  const [brandsData, setBrandsData] = useState([]);

  useEffect(() => {
    const initializeLandingPage = async () => {
      try {
        // Initialize data without loading delay
        setBrandsData([
          // Your brands data
        ]);
      } catch (error) {
        console.error('Error initializing landing page:', error);
      }
    };

    initializeLandingPage();
  }, []);

  return {
    isLoading,
    heroData,
    brandsData
  };
};