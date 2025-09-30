import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from "/Logo-1.png";
import logo2 from "/Logo-2.png";
import logo3 from "/Logo-3.png";
import logo4 from "/Logo-4.png";
import logo5 from "/Logo-5.png";
import logo6 from "/Logo-6.png";
import logo7 from "/Logo-7.png";
import logo8 from "/Logo-8.png";
import logo9 from "/Logo-9.png";
import logo10 from "/Logo-10.png";
import logo12 from "/Logo-12.png";
import logo13 from "/Logo-13.png";
import logo14 from "/Logo-14.png";
import logo15 from "/Logo-15.png";
import logo16 from "/Logo-16.png";
import logo17 from "/Logo-17.png";
import logo18 from "/Logo-18.png";
import logo19 from "/Logo-19.png";
import logo20 from "/Logo-20.png";
import logo21 from "/Logo-21.png";
import logo22 from "/Logo-22.png";
import logo23 from "/Logo-23.png";
import logo24 from "/Logo-24.png";
import logo25 from "/Logo-25.png";
import logo26 from "/Logo-26.png";
import logo27 from "/Logo-27.png";

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
