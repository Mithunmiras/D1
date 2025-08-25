import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.webp";
import logo7 from "../assets/logo7.webp";
import logo8 from "../assets/logo8.jpeg";
import logo9 from "../assets/logo9.webp";
import logo10 from "../assets/logo10.png";
import logo12 from "../assets/logo12.webp";
import logo13 from "../assets/logo13.webp";
import logo14 from "../assets/logo14.webp";
import logo15 from "../assets/logo15.webp";
import logo17 from "../assets/logo17.webp";
import logo18 from "../assets/logo18.webp";
import logo19 from "../assets/logo19.webp";
import logo20 from "../assets/logo20.webp";
import logo21 from "../assets/logo21.webp";
import logo22 from "../assets/logo22.webp";
import logo23 from "../assets/logo23.webp";
import logo24 from "../assets/logo24.webp";
import logo25 from "../assets/logo25.webp";
import logo26 from "../assets/logo26.webp";
import logo27 from "../assets/logo27.webp";
import logo28 from "../assets/logo28.webp";
import logo29 from "../assets/logo29.png";
import logo31 from "../assets/logo31.jpeg";

// ✅ Use the imported images, not static string paths
const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo12,
  logo13,
  logo14,
  logo15,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
  logo26,
  logo27,
  logo28,
  logo29,
  logo31,
];

export default function LogoCarousel() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-6">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          // <div key={index} className="flex justify-center items-center mr-5">
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="h-16 object-contain"
            loading="lazy"
            draggable={false}
            onError={(e) => {
              e.currentTarget.style.visibility = "hidden";
            }}
            style={{ marginRight: "20px" }}
          />
          // </div>
        ))}
      </Slider>
    </div>
  );
}
