import React, { useState, useEffect } from "react";


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

  // Close mobile menu on window resize > lg breakpoint (optional but nice)
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
        scrolled ? "bg-teal-700/80 backdrop-blur-md shadow-md": "bg-transparent"
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

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-xl font-medium text-white transition-all duration-200 hover:text-teal-200 focus:text-teal-300"
              >
                {item}
              </a>
            ))}

            <a
              href="#"
              role="button"
              className="items-center justify-center px-4 py-3 ml-10 text-xl font-semibold text-white transition-all duration-200 bg-teal-700 border border-transparent rounded-md hover:bg-teal-800 focus:bg-teal-900"
            >
              Get started now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex p-2 text-black rounded-md lg:hidden  transition-all duration-200"
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
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)} // close menu on click
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="px-6 mt-6">
              <a
                href="#"
                role="button"
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-teal-700 border border-transparent rounded-md items-center hover:bg-teal-600 focus:bg-blue-900"
                onClick={() => setMobileMenuOpen(false)} // close menu on click
              >
                Get started now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
