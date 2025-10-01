import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { logoWebsites } from "../config/logoWebsites";

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

const logos = [
  { src: logo1, name: "Logo-1.png" },
  { src: logo2, name: "Logo-2.png" },
  { src: logo3, name: "Logo-3.png" },
  { src: logo4, name: "Logo-4.png" },
  { src: logo5, name: "Logo-5.png" },
  { src: logo6, name: "Logo-6.png" },
  { src: logo7, name: "Logo-7.png" },
  { src: logo8, name: "Logo-8.png" },
  { src: logo9, name: "Logo-9.png" },
  { src: logo10, name: "Logo-10.png" },
  { src: logo12, name: "Logo-12.png" },
  { src: logo13, name: "Logo-13.png" },
  { src: logo14, name: "Logo-14.png" },
  { src: logo15, name: "Logo-15.png" },
  { src: logo16, name: "Logo-16.png" },
  { src: logo17, name: "Logo-17.png" },
  { src: logo18, name: "Logo-18.png" },
  { src: logo19, name: "Logo-19.png" },
  { src: logo20, name: "Logo-20.png" },
  { src: logo21, name: "Logo-21.png" },
  { src: logo22, name: "Logo-22.png" },
  { src: logo23, name: "Logo-23.png" },
  { src: logo24, name: "Logo-24.png" },
  { src: logo25, name: "Logo-25.png" },
  { src: logo26, name: "Logo-26.png" },
  { src: logo27, name: "Logo-27.png" },
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

  const handleLogoClick = (logoName) => {
    const website = logoWebsites[logoName];
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-white py-6">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-2">
            <img
              src={logo.src}
              alt={`Logo ${index + 1}`}
              className="h-[5rem] object-contain cursor-pointer transition-transform duration-300 hover:scale-110"
              loading="lazy"
              draggable={false}
              onClick={() => handleLogoClick(logo.name)}
              onError={(e) => {
                e.currentTarget.style.visibility = "hidden";
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
