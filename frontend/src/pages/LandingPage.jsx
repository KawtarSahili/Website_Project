import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthForm from "../components/AuthForm";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import graybg from "../assets/gray-bg.jpg";
import SpotlightCard from "../components/SpotlightCard";
import ScrollFloat from "../components/ScrollFloat";

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Ultra-Fast 5G Network",
      description: "Experience blazing fast speeds with our next-generation 5G coverage",
      ctaText: "Discover Plans",
      bgImage: bg1,
      ctaLink: "/mobile-plans" // Different link for first slide
    },
    {
      title: "Unlimited Data Plans",
      description: "Stream, game and browse without limits with our data packages",
      ctaText: "View Offers",
      bgImage: bg2,
      ctaLink: "/offers" // Different link for second slide
    },
    {
      title: "Family Bundle Deals",
      description: "Save up to 30% when you connect your whole family",
      ctaText: "Join Now",
      bgImage: bg3,
      ctaLink: "/family-plans" // Different link for third slide
    }
  ];

  const services = [
    {
      title: "49Dhs/mois",
      features: [
        "Up to 5 lines included",
        "Shared data pool (50GB+)",
        "20% savings vs individual plans",
        "Parental controls included",
        "Free intra-family calls"
      ],
      link: "/mobile-plans"     
    },
    {
      title: "99Dhs/mois",
      features: [
        "Up to 5 lines included",
        "Shared data pool (100GB+)",
        "30% savings vs individual plans",
        "Parental controls included",
        "Free intra-family calls"
      ],
      link: "/mobile-plans"     
    },
    {
      title: "199Dhs/mois",
      features: [
        "Up to 5 lines included",
        "Unlimited data",
        "40% savings vs individual plans",
        "Premium parental controls",
        "Free intra-family calls"
      ],
      link: "/mobile-plans"     
    },
  ];

  const handleLoginClick = () => {
    setShowAuthModal(true);
  };

  const closeModal = () => {
    setShowAuthModal(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <Header onLoginClick={handleLoginClick} />
      
      {showAuthModal && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 z-[1000] flex justify-center items-center p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white rounded-full p-2 z-50 shadow-lg hover:bg-gray-200"
            >
            </button>
            <AuthForm onClose={closeModal} />
          </div>
        </div>
      )}


      <section className="relative w-full pb-14 pt-16">
        <div className="mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="relative h-110 mx-8 rounded-xl overflow-hidden shadow-xl">
<div className="absolute inset-0 transition-opacity duration-1000">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
  ></div>
  <div className="relative h-full flex items-center justify-start ml-16">
    <div className="px-8 py-12 max-w-2xl">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {slides[currentSlide].title}
      </h1>
      <p className="text-xl text-white mb-8">
        {slides[currentSlide].description}
      </p>
      <button 
        onClick={() => navigate(slides[currentSlide].ctaLink)} // Now works correctly!
        className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
      >
        {slides[currentSlide].ctaText}
      </button>
    </div>
  </div>
</div>


            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 bg-opacity-30 text-teal-800 p-2 rounded-full hover:bg-opacity-50 transition-all z-10"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 bg-opacity-30 text-teal-800 p-2 rounded-full hover:bg-opacity-50 transition-all z-10"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

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

      {/* Services Section */}
      <section className="bg-white relative py-10"
        style={{
          backgroundImage: `url(${graybg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-2xl lg:text-3xl text-teal-700 font-bold mb-4">Our mobile plans</h1> 
            
            <ScrollFloat
              animationDuration={0.6}
              stagger={0.01}
              scrollStart="top 80%"
              scrollEnd="top 50%"
              as="p"
              textClassName="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover the comprehensive range of services designed to keep you connected
            </ScrollFloat>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <SpotlightCard 
                key={index}
                className="custom-spotlight-card hover:-translate-y-1 transition-transform duration-300" 
                spotlightColor="rgba(0, 168, 107, 0.3)"
              >
                <div className="flex flex-col h-full p-6">
                  <div className="mb-4 flex items-center">
                    <ScrollFloat
                      animationDuration={0.5}
                      scrollStart="top 90%"
                      scrollEnd="top 70%"
                      as="h3"
                      textClassName="text-2xl md:text-3xl font-bold text-teal-600"
                      stagger={0.02}
                    >
                      {service.title}
                    </ScrollFloat>
                  </div>
                  
                  <ul className="space-y-3 flex-grow mb-4">
                    {service.features.map((feature, i) => (
                      <li 
                        key={i} 
                        className="flex items-start"
                      >
                        <svg 
                          className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => navigate(service.link)}
                    className="mt-auto px-4 py-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-lg hover:opacity-90 transition-all self-start shadow-md hover:shadow-emerald-100"
                  >
                    Learn more →
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-16">
            <ScrollFloat
              animationDuration={0.8}
              ease="power3.out"
              scrollStart="top 85%"
              scrollEnd="top 60%"
              containerClassName="mb-6"
              textClassName="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Why Choose Us?
            </ScrollFloat>
            
            <ScrollFloat
              animationDuration={0.6}
              stagger={0.01}
              scrollStart="top 80%"
              scrollEnd="top 50%"
              as="p"
              textClassName="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover the benefits of choosing our telecom services
            </ScrollFloat>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Card 1 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(0, 168, 107, 0.2)">
              <div className="p-6 h-full flex flex-col">
                <div className="text-4xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">99.9% Uptime</h3>
                <p className="text-gray-600">
                  Guaranteed network availability
                </p>
              </div>
            </SpotlightCard>

            {/* Card 2 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(0, 168, 107, 0.2)">
              <div className="p-6 h-full flex flex-col">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Hidden Fees</h3>
                <p className="text-gray-600">
                  Transparent pricing
                </p>
              </div>
            </SpotlightCard>

            {/* Card 3 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(0, 168, 107, 0.2)">
              <div className="p-6 h-full flex flex-col">
                <div className="text-4xl mb-3">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Always available help
                </p>
              </div>
            </SpotlightCard>

            {/* Card 4 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(0, 168, 107, 0.2)">
              <div className="p-6 h-full flex flex-col">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Coverage</h3>
                <p className="text-gray-600">
                  200+ countries
                </p>
              </div>
            </SpotlightCard>

            {/* Card 5 */}
            <SpotlightCard className="h-full" spotlightColor="rgba(0, 168, 107, 0.2)">
              <div className="p-6 h-full flex flex-col">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5G Ready</h3>
                <p className="text-gray-600">
                  Future-proof speeds
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}