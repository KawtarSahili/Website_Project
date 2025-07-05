import React, { useState, useEffect } from "react";
import { FiPhone, FiMail } from "react-icons/fi";



// Then use <TopBar /> in your Header component

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = ["Features", "Solutions", "About Us", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-teal-700/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" aria-label="Home" className="flex">
              <img
                className="w-auto h-20 lg:h-30"
                src="/logo.png"
                alt="Logo"
              />
            </a>
          </div>

          {/* Desktop menu - Reduced spacing */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-lg font-medium text-white transition-all duration-200 hover:text-teal-200 focus:text-teal-300 px-2 py-1"
              >
                {item}
              </a>
            ))}
            
            {/* Search bar with reduced left margin */}
            <form className="ml-2" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                placeholder="Search..."
                className="w-72 px-4 py-1.5 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              />
            </form>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex p-2 text-black rounded-md lg:hidden transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg
              className={`${mobileMenuOpen ? "hidden" : "block"} w-6 h-6 text-white`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden={!mobileMenuOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>

            {/* Close icon */}
            <svg
              className={`${mobileMenuOpen ? "block" : "hidden"} w-6 h-6 text-white`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden={mobileMenuOpen}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            {/* Search bar (mobile) */}
            <form className="px-4 mb-3" role="search" onSubmit={(e) => e.preventDefault()}>
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm"
              />
            </form>
            <div className="flow-root">
              <div className="flex flex-col px-4 -my-1 space-y-0.5">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="inline-flex py-1.5 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 px-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}