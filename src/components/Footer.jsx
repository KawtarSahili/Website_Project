import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-teal-400 py-12">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Telcom</h3>
            <p className="text-white">
              Powering seamless communication across the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-white">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-white">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-white">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-white">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-white">Home</a></li>
              <li><a href="#" className="text-white hover:text-white">Features</a></li>
              <li><a href="#" className="text-white hover:text-white">Solutions</a></li>
              <li><a href="#" className="text-white hover:text-white">About Us</a></li>
              <li><a href="#" className="text-white hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white">
              <li className="flex items-center space-x-2">
                <FiMail size={18} />
                <span>telcomcompany@telcom.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone size={18} />
                <span>+212 (5) 12345678</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Boulevard Taddart, Arr 100<br />Rabat</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-white mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex border-2 border-teal-600 rounded-full">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-full focus:outline-none text-white"
              />
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/50 mt-8 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} TelCom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}