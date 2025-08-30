import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "../assets/logo-1.png";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo-3.png";
import logo4 from "../assets/logo-4.png";
import logo5 from "../assets/logo-5.png";
import logo6 from "../assets/logo-6.png";
import logo7 from "../assets/logo-7.png";
import logo8 from "../assets/logo-8.png";
import logo9 from "../assets/logo-9.png";
import logo10 from "../assets/logo-10.png";
import logo12 from "../assets/logo-12.png";
import logo13 from "../assets/logo-13.png";
import logo14 from "../assets/logo-14.png";
import logo15 from "../assets/logo-15.png";
import logo16 from "../assets/logo-16.png";
import logo17 from "../assets/logo-17.png";
import logo18 from "../assets/logo-18.png";
import logo19 from "../assets/logo-19.png";
import logo20 from "../assets/logo-20.png";
import logo21 from "../assets/logo-21.png";
import logo22 from "../assets/logo-22.png";
import logo23 from "../assets/logo-23.png";
import logo24 from "../assets/logo-24.png";
import logo25 from "../assets/logo-25.png";
import logo26 from "../assets/logo-26.png";
import logo27 from "../assets/logo-27.png";
// import logo28 from "../assets/logo-28.png";

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
  logo16,
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
            className="h-[5rem] object-contain"
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
