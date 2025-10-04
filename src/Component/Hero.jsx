import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaBook, FaRocket, FaPhoneAlt, FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    id: 1,
    title: "Learn & Grow with Digitner",
    highlightedWord: "Academy",
    description: "Access expert-led courses, live workshops, and a thriving community of entrepreneurs and digital innovators.",
    primaryButton: { text: "Join Academy", icon: FaGraduationCap },
    secondaryButton: { text: "Explore Resources", icon: FaBook },
    gradient: "from-cyan-400 via-teal-400 to-yellow-400",
    videoPoster: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    videoUrl: "",
    playButtonColor: "teal-600"
  },
  {
    id: 2,
    title: "Empower Your MSME with Digital",
    highlightedWord: "Transformation",
    description: "Join over 1 million MSMEs transforming their businesses with our end-to-end digital solutions, automation, and AI-powered tools.",
    primaryButton: { text: "Start Your Transformation", icon: FaRocket },
    secondaryButton: { text: "Watch Demo", icon: FaPlay },
    gradient: "from-blue-600 via-purple-600 to-blue-800",
    videoPoster: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    videoUrl: "",
    playButtonColor: "blue-600"
  },
  {
    id: 3,
    title: "Automate Your Growth",
    highlightedWord: "Marketing",
    description: "Scale your business with intelligent automation, AI-powered insights, and data-driven marketing strategies.",
    primaryButton: { text: "Boost Your Growth", icon: FaRocket },
    secondaryButton: { text: "Strategy Call", icon: FaPhoneAlt },
    gradient: "from-green-600 via-emerald-600 to-teal-700",
    videoPoster: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    videoUrl: "",
    playButtonColor: "green-600"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];
  const PrimaryIcon = slide.primaryButton.icon;
  const SecondaryIcon = slide.secondaryButton.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={currentSlide}
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative min-h-[600px] bg-gradient-to-br ${slide.gradient} overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {slide.title}{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  {slide.highlightedWord}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/90 mb-8 leading-relaxed max-w-xl"
              >
                {slide.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300 flex items-center justify-center gap-2"
                >
                  <PrimaryIcon className="text-xl" />
                  {slide.primaryButton.text}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition duration-300 flex items-center justify-center gap-2"
                >
                  <SecondaryIcon className="text-xl" />
                  {slide.secondaryButton.text}
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              key={`video-${currentSlide}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
                <video
                  key={slide.id}
                  className="w-full h-full object-cover"
                  poster={slide.videoPoster}
                  controls
                >
                  <source src={slide.videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl pointer-events-auto cursor-pointer"
                  >
                    <div className={`w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-${slide.playButtonColor} border-b-[12px] border-b-transparent ml-1`}></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
