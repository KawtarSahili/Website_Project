import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SpotlightCard from "../components/SpotlightCard";
import ScrollFloat from "../components/ScrollFloat";
import { ChevronLeft, ChevronRight, Check, Zap, DollarSign, Shield, Globe, Rocket, Phone, Mail } from "lucide-react";

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Ultra-Fast 5G Network",
      description: "Experience blazing fast speeds with our next-generation 5G coverage",
      ctaText: "Discover Plans",
      bgImage: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ctaLink: "/mobile-plans"
    },
    {
      title: "Unlimited Data Plans",
      description: "Stream, game and browse without limits with our data packages",
      ctaText: "View Offers",
      bgImage: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ctaLink: "/offers"
    },
    {
      title: "Family Bundle Deals",
      description: "Save up to 30% when you connect your whole family",
      ctaText: "Join Now",
      bgImage: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ctaLink: "/family-plans"
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

  const benefits = [
    {
      icon: "⚡",
      title: "99.9% Uptime",
      description: "Guaranteed network availability",
      color: "text-yellow-500"
    },
    {
      icon: "💰",
      title: "No Hidden Fees",
      description: "Transparent pricing",
      color: "text-green-500"
    },
    {
      icon: "🛡️",
      title: "24/7 Support",
      description: "Always available help",
      color: "text-blue-500"
    },
    {
      icon: "🌐",
      title: "Global Coverage",
      description: "200+ countries",
      color: "text-purple-500"
    },
    {
      icon: "🚀",
      title: "5G Ready",
      description: "Future-proof speeds",
      color: "text-red-500"
    }
  ];

  const testimonials = [
    {
      initial: "A",
      name: "Aymane Saber",
      role: "Business Owner",
      quote: "The 5G speeds are incredible! My business operations have never been smoother. Customer service is top-notch too."
    },
    {
      initial: "J",
      name: "Jamila chouhe",
      role: "Tech Professional",
      quote: "Switched from another provider and couldn't be happier. The family plan saves us hundreds every year!"
    },
    {
      initial: "A",
      name: "Ahmed Radoui",
      role: "Content Creator",
      quote: "Perfect for streaming and uploading content. The unlimited data plan is exactly what I needed for my work."
    }
  ];

  const enterpriseSolutions = [
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Enterprise Security",
      subtitle: "Advanced Protection",
      features: [
        "End-to-end encryption",
        "VPN integration",
        "24/7 security monitoring",
        "Compliance ready"
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "Global Connectivity",
      subtitle: "Worldwide Coverage",
      features: [
        "200+ countries coverage",
        "Roaming partnerships",
        "International calling plans",
        "Multi-region support"
      ]
    }
  ];

  const faqs = [
    {
      question: "What makes your 5G network different?",
      answer: "Our 5G network uses the latest technology with ultra-low latency and speeds up to 2Gbps. We've invested heavily in infrastructure to ensure consistent performance across all coverage areas."
    },
    {
      question: "Can I keep my current phone number?",
      answer: "Yes! We offer free number porting from any carrier. The process typically takes 1-2 business days and we'll handle everything for you."
    },
    {
      question: "What's included in the family plans?",
      answer: "Family plans include shared data pools, free calls between family members, parental controls, and significant savings compared to individual plans. Each line gets full access to our 5G network."
    },
    {
      question: "Is there a contract requirement?",
      answer: "We offer both contract and no-contract options. Our no-contract plans give you the flexibility to change or cancel anytime, while contract plans offer additional savings and device financing options."
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
                    onClick={() => navigate(slides[currentSlide].ctaLink)}
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
      <section className="bg-gray-100 relative py-10">
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
            {benefits.map((benefit, index) => (
              <SpotlightCard key={index} className="h-full" spotlightColor="rgba(0, 168, 107, 0.2)">
                <div className="p-6 h-full flex flex-col">
                  <div className={`text-4xl mb-3 ${benefit.color}`}>{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide 5G Coverage Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nationwide 5G Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience lightning-fast connectivity across the country with our expanding 5G network
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">95% Coverage</h3>
                    <p className="text-gray-600">Nationwide reach</p>
                  </div>
                </div>
                <p className="text-gray-700">Our network covers 95% of the population with reliable 5G connectivity in major cities and expanding rural areas.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Ultra-Fast Speeds</h3>
                    <p className="text-gray-600">Up to 2Gbps</p>
                  </div>
                </div>
                <p className="text-gray-700">Download movies in seconds, stream 4K content seamlessly, and enjoy lag-free gaming with our premium 5G speeds.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Secure Network</h3>
                    <p className="text-gray-600">Enterprise-grade security</p>
                  </div>
                </div>
                <p className="text-gray-700">Your data is protected with military-grade encryption and advanced security protocols across our entire network.</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-teal-200 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Next-Gen Technology</h3>
                  <p className="text-gray-700">Built for the future of connectivity</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who trust us for their connectivity needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.initial}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful connectivity solutions designed for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl p-8 border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                    <p className="text-emerald-600 font-medium">{solution.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-5 h-5 text-emerald-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 via-teal-400 via-teal-400 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Millions
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our numbers speak for themselves - join the growing community of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">5M+</div>
              <div className="text-white/80 text-lg">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80 text-lg">Network Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">200+</div>
              <div className="text-white/80 text-lg">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-lg">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-emerald-100 overflow-hidden">
                <div className="p-6 border-b border-emerald-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 via-teal-00 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Connected with Updates
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest news about network upgrades, new features, and exclusive offers delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:ring-4 focus:ring-white/30 focus:outline-none text-gray-900"
            />
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all shadow-lg">
              Subscribe
            </button>
          </div>
          
          <p className="text-white/70 text-sm mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}