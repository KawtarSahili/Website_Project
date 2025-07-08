import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

// Import your background images
import bg1 from "../assets/carousel1.jpg";
import bg2 from "../assets/carousel2.jpg";
import bg3 from "../assets/carousel3.jpg";

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Ultra-Fast 5G Network",
      description: "Experience blazing fast speeds with our next-generation 5G coverage",
      ctaText: "Discover Plans",
      bgImage: bg1
    },
    {
      title: "Unlimited Data Plans",
      description: "Stream, game and browse without limits with our data packages",
      ctaText: "View Offers",
      bgImage: bg2
    },
    {
      title: "Family Bundle Deals",
      description: "Save up to 30% when you connect your whole family",
      ctaText: "Join Now",
      bgImage: bg3
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Header />

      {/* Hero Section with Gradient Background */}
      <section className="relative w-full py-16 bg-teal-100">
        <div className="mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          {/* Carousel Container */}
          <div className="relative h-110 mx-8 rounded-xl overflow-hidden shadow-xl">
            {/* Slides with Image Backgrounds */}
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.bgImage})` }}
                >

                </div>
                
                {/* Content */}
                <div className="relative h-full flex items-center justify-start ml-16">
                  <div className="px-8 py-12 max-w-2xl ">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-white mb-8">
                      {slide.description}
                    </p>
                    <button className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                      {slide.ctaText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all z-10"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition-all z-10"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your content */}
      <main className="max-w-4xl mx-auto px-4 py-20 space-y-6">
        {[...Array(8)].map((_, i) => (
          <p key={i} className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, nisl nec egestas faucibus, ligula nisi scelerisque
            dolor, a placerat odio eros sit amet elit. Curabitur at purus nec
            massa fringilla sollicitudin.
          </p>
        ))}
      </main>

      <Footer />
    </>
  );
}