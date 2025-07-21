import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FiZap, FiClock, FiShield, FiHeadphones, FiWifi, FiDownload, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import fiber1 from '../assets/fiber1.png';
import fiber2 from '../assets/fiber2.png';
import SpotlightCard from "../components/SpotlightCard";

const FiberPlansPage = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample plans data in MAD currency
  const fiberPlans = [
    {
      name: "Fiber Start",
      speed: "50 Mbps",
      price: "299 MAD",
      features: [
        "Unlimited data usage with no throttling",
        "Basic installation included",
        "Email and ticket support",
        "Connect up to 2 devices simultaneously",
        "99% network reliability guarantee"
      ]
    },
    {
      name: "Fiber Basic",
      speed: "100 Mbps",
      price: "399 MAD",
      features: [
        "Unlimited high-speed data",
        "Free professional installation",
        "24/7 customer support",
        "Connect up to 5 devices",
        "Basic WiFi router included"
      ]
    },
    {
      name: "Fiber Pro",
      speed: "200 Mbps",
      price: "599 MAD",
      features: [
        "Ultra-fast unlimited data",
        "Advanced dual-band router",
        "Priority technical support",
        "Connect up to 10 devices",
        "Parental controls included"
      ]
    },
    {
      name: "Fiber Ultra",
      speed: "500 Mbps",
      price: "899 MAD",
      features: [
        "Blazing fast fiber connection",
        "Premium mesh router system",
        "VIP customer service line",
        "Connect up to 15 devices",
        "Advanced security features"
      ]
    },
    {
      name: "Fiber Max",
      speed: "1 Gbps",
      price: "1299 MAD",
      features: [
        "Our fastest residential speed",
        "Enterprise-grade equipment",
        "Dedicated account manager",
        "Unlimited connected devices",
        "Whole-home coverage guarantee"
      ]
    }
  ];

  // Updated carouselItems with image URLs
  const carouselItems = [
    {
      image: fiber1,
      title: "Supercharge Your Internet",
      description: "Get our fastest fiber speeds with unlimited data and premium support.",
      buttonText: "Discover Offers",
      icon: <FiZap className="w-8 h-8 md:w-10 md:h-10 mr-3" />
    },
    {
      image: fiber2,
      title: "3 Months Free",
      description: "Sign up for our Fiber Pro plan and get your first 3 months on us!",
      buttonText: "Claim Offer",
      icon: <FiWifi className="w-8 h-8 md:w-10 md:h-10 mr-3" />
    }
  ];

  const whyChooseUs = [
    {
      icon: <FiZap className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />,
      title: "Blazing Fast Speeds",
      description: "Experience seamless streaming, gaming, and browsing with our ultra-fast fiber network."
    },
    {
      icon: <FiClock className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />,
      title: "99.9% Uptime",
      description: "Reliable connection you can count on with our industry-leading uptime."
    },
    {
      icon: <FiShield className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />,
      title: "Secure Connection",
      description: "Advanced security features to keep your data safe and private."
    },
    {
      icon: <FiHeadphones className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />,
      title: "24/7 Support",
      description: "Our expert team is always available to assist you with any issues."
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      {/* Header Component */}
      <Header />

      <main className="flex-grow">
        {/* Updated Carousel Section with Images */}
        <section className="relative mt-20 md:mt-25">
          <div className="text-center mb-6 md:mb-8 px-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-3 md:mb-4">Find the Ideal Fiber Plan</h2>
            <p className="text-base md:text-xl text-stone-600 max-w-md md:max-w-2xl mx-auto">
              Blazing speeds, unbeatable value, total reliability.
            </p>
          </div>
          
          <div className="carousel-container h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden relative mx-4 sm:mx-6 md:mx-8 lg:mx-20 xl:mx-30 rounded-xl">
            {carouselItems.map((item, index) => (
              <div 
                key={index}
                className={`absolute inset-0 flex items-center transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >                
                <div className="container mx-auto px-15 md:px-25 lg:px-30 relative z-10">
                  <div className="max-w-2xl text-white">
                    <div className="flex items-center mb-3 md:mb-4">
                      {item.icon}
                      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{item.title}</h1>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8">{item.description}</p>
                    <button className="bg-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold text-base md:text-lg transition duration-300 hover:bg-stone-100 text-teal-600">
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Carousel Arrows */}
            <button 
              onClick={goToPrevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-teal-800 p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
            >
              <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={goToNextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-teal-800 p-2 sm:p-3 rounded-full transition-all duration-300 z-20"
            >
              <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
            {carouselItems.map((_, index) => (
              <button 
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-4 sm:w-6' : 'bg-white/30'}`}
              />
            ))}
          </div>
        </section>

        {/* Fiber Plans Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Our Fiber Internet Plans</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">Choose the perfect plan for your needs. All plans include unlimited data and no hidden fees.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-20">
              {fiberPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <div>
                      <h3 className="text-2xl font-bold text-teal-800 mb-3">{plan.name}</h3>
                      <div className="flex items-end mb-6">
                        <span className="text-4xl font-bold text-teal-600">{plan.price}</span>
                        <span className="text-stone-500 ml-2">/month</span>
                      </div>
                      <div className="mb-6 flex items-center">
                        <FiDownload className="w-6 h-6 text-teal-500 mr-2" />
                        <span className="text-lg font-semibold text-teal-800">
                          {plan.speed} Download Speed
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-stone-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4 md:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Why Choose Our Fiber Network?</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">We're committed to providing the best fiber internet experience for our customers.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
              {whyChooseUs.map((item, index) => (
                <SpotlightCard 
                  key={index} 
                  className="h-full" 
                  spotlightColor="rgba(0, 168, 107, 0.2)"
                >
                  <div className="bg-white p-6 md:p-8 rounded-xl  transition duration-300 h-full">
                    <div className="mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-stone-800 mb-3">{item.title}</h3>
                    <p className="text-stone-600">{item.description}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
            
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default FiberPlansPage;