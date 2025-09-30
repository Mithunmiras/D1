import React, { useState } from "react";
import { navLinks, title, title1, titleDesc } from "../data/navLinks"; // adjust the path as needed
import logo from "/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">
              <img src={logo} alt="Logo" className="w-40 h-15 mr-2" />
            </div>
            <span className="ml-3 text-sm text-gray-600">{titleDesc}</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="nav-link text-gray-700 hover:text-blue-600 font-medium"
              >
                {label}
              </a>
            ))}
            <a
              href="#appointment"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
