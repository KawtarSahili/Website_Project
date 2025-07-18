import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Wifi, Zap, Shield, Star } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroPlans = [
    {
      id: 1,
      name: "Premium 5G Plan",
      price: 199,
      data: "Unlimited",
      speed: "5G",
      highlight: "Most Popular",
      description: "Experience lightning-fast 5G speeds with unlimited data",
      features: ["Unlimited Data", "5G Speed", "EU Roaming", "Streaming Services"],
      gradient: "from-purple-600 to-blue-600",
      icon: <Zap className="h-8 w-8" />
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 99,
      data: "20GB",
      speed: "4G+",
      highlight: "Best Value",
      description: "Perfect balance of data and affordability",
      features: ["20GB Data", "4G+ Speed", "EU Roaming", "24/7 Support"],
      gradient: "from-teal-600 to-green-600",
      icon: <Wifi className="h-8 w-8" />
    },
    {
      id: 3,
      name: "Secure Business Plan",
      price: 299,
      data: "Unlimited",
      speed: "5G",
      highlight: "Enterprise",
      description: "Advanced security features for business users",
      features: ["Unlimited Data", "5G Speed", "VPN Included", "Priority Support"],
      gradient: "from-orange-600 to-red-600",
      icon: <Shield className="h-8 w-8" />
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroPlans.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroPlans.length) % heroPlans.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-16 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23059669%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-teal-800 mb-4 animate-fade-in">
            Find Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Mobile Plan
            </span>
          </h1>
          <p className="text-xl text-teal-600 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Discover blazing-fast speeds, unlimited data, and unbeatable value with our premium mobile plans
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700">99%</div>
              <div className="text-teal-600">Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700">24/7</div>
              <div className="text-teal-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700">5G</div>
              <div className="text-teal-600">Speed</div>
            </div>
          </div>
        </div>

        {/* Animated Plan Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {heroPlans.map((plan, index) => (
                <div key={plan.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${plan.gradient} p-1 rounded-2xl`}>
                    <div className="bg-white rounded-xl p-8 md:p-12 relative overflow-hidden">
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-50 to-blue-50 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
                            <div className="flex items-center justify-center md:justify-start mb-4">
                              <div className={`bg-gradient-to-r ${plan.gradient} p-3 rounded-full text-white mr-4`}>
                                {plan.icon}
                              </div>
                              <div>
                                <span className="bg-yellow-400 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                                  {plan.highlight}
                                </span>
                              </div>
                            </div>
                            
                            <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
                              {plan.name}
                            </h2>
                            <p className="text-xl text-teal-600 mb-6">
                              {plan.description}
                            </p>
                            
                            <div className="flex items-center justify-center md:justify-start space-x-6 mb-6">
                              <div className="text-center">
                                <div className="text-4xl font-bold text-teal-700">{plan.price}Dhs</div>
                                <div className="text-sm text-teal-600">per month</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-teal-700">{plan.data}</div>
                                <div className="text-sm text-teal-600">data</div>
                              </div>
                              <div className="text-center">
                                <div className="text-2xl font-bold text-teal-700">{plan.speed}</div>
                                <div className="text-sm text-teal-600">speed</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex-1 max-w-md">
                            <div className="bg-teal-50 rounded-xl p-6">
                              <h3 className="text-lg font-semibold text-teal-800 mb-4">Plan Features</h3>
                              <ul className="space-y-3">
                                {plan.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center">
                                    <div className="bg-teal-600 rounded-full p-1 mr-3">
                                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                    <span className="text-teal-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <button className={`w-full mt-6 bg-gradient-to-r ${plan.gradient} text-white font-semibold py-3 px-6 rounded-full hover:scale-105 transition-transform`}>
                                Choose This Plan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-teal-700 p-2 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-teal-700 p-2 rounded-full shadow-lg transition-all hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {heroPlans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-teal-600 w-8' : 'bg-teal-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-teal-200">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="text-teal-700 font-semibold">Rated #1 Mobile Provider</span>
            </div>
            <p className="text-teal-600 mb-6">
              Join over 2 million satisfied customers who trust us for their mobile connectivity needs
            </p>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg">
              View All Plans Below
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;