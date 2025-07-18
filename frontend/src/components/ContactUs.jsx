import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import Header from './Header';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <>
      <Header />

      {/* Hero Section with negative margin for card overlap */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 py-30 w-full text-white text-center pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 pb-10">
          <h2 className="lg:text-4xl text-3xl font-bold mb-3">Contact Us</h2>
          <p className="text-teal-100 lg:text-2xl">Our TelCom team is available to answer your questions</p>
        </div>
      </section>

      {/* Contact Methods Grid with negative margin to overlap hero */}
      <section className="relative z-10 -mt-16 md:-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Call */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-100">
              <div className="bg-teal-100/50 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Phone className="text-teal-600" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-stone-800">Call Us</h3>
              <p className="text-stone-600 text-sm mb-2">24/7 customer service</p>
              <a href="tel:+212612345678" className="text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors">
                +212 6 12 34 56 78
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-100">
              <div className="bg-green-100/50 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <FaWhatsapp className="text-green-600" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-stone-800">WhatsApp</h3>
              <p className="text-stone-600 text-sm mb-2">Instant assistance</p>
              <a 
                href="https://wa.me/212612345678" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
              >
                Chat with us
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-100">
              <div className="bg-blue-100/50 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Mail className="text-blue-600" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-stone-800">Email</h3>
              <p className="text-stone-600 text-sm mb-2">Send us your questions</p>
              <a 
                href="mailto:support@TelCom.ma" 
                className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
              >
                support@TelCom.ma
              </a>
            </div>

            {/* Visit */}
            <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-stone-100">
              <div className="bg-amber-100/50 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <MapPin className="text-amber-600" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-stone-800">Visit Us</h3>
              <p className="text-stone-600 text-sm mb-2">Our TelCom agencies</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors"
              >
                Find an agency
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="lg:text-3xl text-2xl font-bold text-teal-700 mb-2">TelCom Contact Form</h2>
            <p className="text-stone-600 max-w-xl mx-auto text-xl">
              Fill out this form and our TelCom team will respond as soon as possible.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left side image - made bigger */}
            <div className="w-full lg:w-[55%] flex items-center justify-center">
              <img
                src="/faq-icon.png"
                alt="Contact TelCom"
                className="w-full max-w-xl mx-auto rounded-xl  object-cover"
                style={{ minHeight: "500px" }}
              />
            </div>

            {/* Contact form - made smaller */}
            <div className="w-full lg:w-[45%] bg-white rounded-xl shadow-lg p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-sm"
                  >
                    <option value="">Select</option>
                    <option value="madame">Mrs</option>
                    <option value="monsieur">Mr</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    required
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    required
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">
                    Are you a TelCom customer? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="customer"
                        value="yes"
                        className="form-radio text-teal-600 focus:ring-teal-400 h-4 w-4"
                      />
                      <span className="ml-2 text-sm">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="customer"
                        value="no"
                        className="form-radio text-teal-600 focus:ring-teal-400 h-4 w-4"
                      />
                      <span className="ml-2 text-sm">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1">
                    Describe your need <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe your request in detail..."
                    required
                    className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-sm"
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-teal-600 focus:ring-teal-400 rounded h-4 w-4"
                    />
                    <span className="ml-2 text-stone-700 text-sm">
                      I wish to receive information about TelCom offers and services
                    </span>
                  </label>
                  
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      required
                      className="form-checkbox text-teal-600 focus:ring-teal-400 rounded h-4 w-4"
                    />
                    <span className="ml-2 text-stone-700 text-sm">
                      I accept the terms of service <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                <div className="text-xs text-stone-500">
                  <p>* Required fields</p>
                  <p className="mt-1">
                    In accordance with law 09-08, you have the right to access, rectify and oppose the processing of your personal data.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md mt-3 text-sm"
                >
                  Send
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;