import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, title, title1, titleDesc } from "../config/navigation";
import { servicesDropdownMenu } from "../config/servicesPageData";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">
              <img src={logo} alt="Logo" className="w-40 h-15 mr-2" />
            </div>
            <span className="ml-3 text-sm text-gray-600 hidden lg:block">{titleDesc}</span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ id, label }) => {
              if (id === 'services') {
                return (
                  <div
                    key={id}
                    className="relative group"
                  >
                    <button className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300 flex items-center">
                      {label}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {servicesDropdownMenu.map((item) => (
                        <Link
                          key={item.id}
                          to={item.path}
                          className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition duration-300"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (isHomePage) {
                if (id === 'academy') {
                  return (
                    <Link
                      key={id}
                      to="/academy"
                      className="nav-link text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                    >
                      {label}
                    </Link>
                  );
                }
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
                  about: "/about",
                  blog: "/blog",
                  contact: "/contact",
                  academy: "/academy",
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
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition duration-300 shadow-lg"
            >
              Schedule Appointment
            </a>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map(({ id, label }) => {
                if (id === 'services') {
                  return (
                    <div key={id}>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="w-full text-left text-gray-700 hover:text-blue-600 font-medium transition duration-300 flex items-center justify-between"
                      >
                        {label}
                        <FaChevronDown className={`text-xs transition-transform ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isServicesDropdownOpen && (
                        <div className="mt-2 ml-4 space-y-2">
                          {servicesDropdownMenu.map((item) => (
                            <Link
                              key={item.id}
                              to={item.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-gray-600 hover:text-blue-600 text-sm py-2"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                if (isHomePage) {
                  if (id === 'academy') {
                    return (
                      <Link
                        key={id}
                        to="/academy"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                      >
                        {label}
                      </Link>
                    );
                  }
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                    >
                      {label}
                    </a>
                  );
                } else {
                  const pageMap = {
                    about: "/about",
                    blog: "/blog",
                    contact: "/contact",
                    academy: "/academy",
                  };
                  return (
                    <Link
                      key={id}
                      to={pageMap[id] || "/"}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
                    >
                      {label}
                    </Link>
                  );
                }
              })}
              <a
                href={isHomePage ? "#appointment" : "/#appointment"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition duration-300 shadow-lg text-center"
              >
                Schedule Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
