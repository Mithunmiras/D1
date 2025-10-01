import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, title, title1, titleDesc } from "../config/navigation";
import logo from "/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">
              <img src={logo} alt="Logo" className="w-40 h-15 mr-2" />
            </div>
            <span className="ml-3 text-sm text-gray-600">{titleDesc}</span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ id, label }) => {
              if (isHomePage) {
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                  >
                    {label}
                  </a>
                );
              } else {
                const pageMap = {
                  services: "/services",
                  about: "/about",
                  blog: "/blog",
                  contact: "/contact",
                };
                return (
                  <Link
                    key={id}
                    to={pageMap[id] || "/"}
                    className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                  >
                    {label}
                  </Link>
                );
              }
            })}
            <a
              href={isHomePage ? "#appointment" : "/#appointment"}
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
