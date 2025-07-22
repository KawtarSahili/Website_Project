import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  FiHome,
  FiCheckCircle,
  FiPhone,
  FiDownload,
  FiWifi,
  FiClock,
  FiChevronLeft,
  FiChevronRight,
  FiZap
} from 'react-icons/fi';
import adslHero1 from '../assets/fiber1.png';
import adslHero2 from '../assets/fiber2.png';
import SpotlightCard from "../components/SpotlightCard";

const ADSLPlansPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    {
      image: adslHero1,
      title: "Reliable ADSL Internet",
      description: "Get connected even in areas without fiber coverage.",
      buttonText: "View Plans",
      icon: <FiWifi className="w-8 h-8 md:w-10 md:h-10 mr-3" />
    },
    {
      image: adslHero2,
      title: "Special New Customer Deal",
      description: "Get 50% off your first 3 months when you sign up.",
      buttonText: "Claim Offer",
      icon: <FiZap className="w-8 h-8 md:w-10 md:h-10 mr-3" />
    }
  ];

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

  const [showCoverageTool, setShowCoverageTool] = useState(false);
  const [address, setAddress] = useState('');

  const checkCoverage = (e) => {
    e.preventDefault();
    alert(`Coverage check requested for: ${address}`);
  };

  const adslPlans = [
    {
      name: "ADSL Basic",
      speed: "5 Mbps",
      price: "199 MAD",
      dataLimit: "100 GB",
      features: [
        "Ideal for email and browsing",
        "Includes basic modem",
        "Up to 2 connected devices",
        "Phone line included",
        "99% uptime guarantee"
      ],
      bestFor: "Light users"
    },
    {
      name: "ADSL Standard",
      speed: "10 Mbps",
      price: "299 MAD",
      dataLimit: "200 GB",
      features: [
        "SD video streaming",
        "Advanced modem included",
        "Up to 4 connected devices",
        "Free evening calls",
        "24/7 customer support"
      ],
      bestFor: "Families"
    },
    {
      name: "ADSL Premium",
      speed: "20 Mbps",
      price: "399 MAD",
      dataLimit: "Unlimited",
      features: [
        "HD video streaming",
        "Premium dual-band modem",
        "Connect up to 6 devices",
        "Unlimited weekend calls",
        "Priority technical support"
      ],
      bestFor: "Heavy users"
    }
  ];

  const whyChooseADSL = [
    {
      icon: <FiHome className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />,
      title: "Wide Coverage",
      description: "Available anywhere with phone lines, perfect for rural areas."
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />,
      title: "Proven Reliability",
      description: "Stable connection unaffected by weather or congestion."
    },
    {
      icon: <FiPhone className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />,
      title: "Bundle Savings",
      description: "Combine with landline for additional discounts."
    },
    {
      icon: <FiClock className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />,
      title: "Quick Setup",
      description: "Get connected using existing infrastructure."
    }
  ];

  const faqs = [
    {
      question: "How does ADSL differ from fiber?",
      answer: "ADSL uses telephone lines with slower speeds but wider availability."
    },
    {
      question: "Will my ADSL speed be consistent?",
      answer: "Speeds depend on distance from exchange. We guarantee minimum speeds."
    },
    {
      question: "Can I keep my phone number?",
      answer: "Yes, we can port your existing number at no extra cost."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />

      <main className="flex-grow">
        {/* Carousel */}
        <section className="relative mt-20 md:mt-25">
          <div className="text-center mb-6 md:mb-8 px-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-3 md:mb-4">ADSL Internet Plans</h2>
            <p className="text-base md:text-xl text-stone-600 max-w-md md:max-w-2xl mx-auto">
              Reliable connectivity for every home
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
                    <button
                      onClick={() => setShowCoverageTool(true)}
                      className="bg-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold text-base md:text-lg transition duration-300 hover:bg-stone-100 text-teal-600"
                    >
                      {item.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button onClick={goToPrevSlide} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-teal-800 p-2 sm:p-3 rounded-full transition-all duration-300 z-20">
              <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
            <button onClick={goToNextSlide} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-teal-800 p-2 sm:p-3 rounded-full transition-all duration-300 z-20">
              <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>
          </div>

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

        {/* ADSL Plans */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Our ADSL Internet Plans</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Choose the perfect plan for your needs. All prices include VAT.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-20">
              {adslPlans.map((plan, index) => (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-stone-200 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="p-6 md:p-8">
                    <div className="mb-2 text-sm font-semibold text-teal-600">{plan.bestFor}</div>
                    <h3 className="text-2xl font-bold text-teal-800 mb-3">{plan.name}</h3>
                    <div className="flex items-end mb-4">
                      <span className="text-4xl font-bold text-teal-600">{plan.price}</span>
                      <span className="text-stone-500 ml-2">/month</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <FiDownload className="w-6 h-6 text-teal-500 mr-2" />
                      <div>
                        <span className="font-semibold text-teal-800">{plan.speed}</span>
                        <span className="block text-sm text-stone-500">Download speed</span>
                      </div>
                    </div>
                    <div className="flex items-center mb-6">
                      <FiWifi className="w-6 h-6 text-teal-500 mr-2" />
                      <div>
                        <span className="font-semibold text-teal-800">{plan.dataLimit}</span>
                        <span className="block text-sm text-stone-500">Monthly data</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-stone-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Why Choose ADSL */}
        <section className="py-16 bg-gradient-to-b from-emerald-50 to-stone-50 ">
          <div className="container mx-auto px-4 md:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Why Choose Our ADSL Network?</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                We're committed to providing the best ADSL internet experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
              {whyChooseADSL.map((item, index) => (
                <SpotlightCard 
                  key={index} 
                  className="h-full" 
                  spotlightColor="rgba(0, 168, 107, 0.2)"
                >
                  <div className="bg-white p-6 md:p-8 rounded-xl transition duration-300 h-full">
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

        {/* ADSL vs Fiber */}
        <section className="py-16 bg-gradient-to-b from-stone-50 to-emerald-50 ">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">ADSL vs Fiber: Which is Right for You?</h2>
              <p className="text-stone-600">
                Compare features side-by-side and choose the best option for your needs.
              </p>
            </div>
            <div className="overflow-x-auto rounded-xl shadow-md">
              <table className="w-full text-left border border-stone-200 rounded-xl overflow-hidden">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="py-4 px-6">Feature</th>
                    <th className="py-4 px-6">ADSL</th>
                    <th className="py-4 px-6">Fiber</th>
                  </tr>
                </thead>
                <tbody className="text-stone-700">
                  <tr className="bg-stone-50">
                    <td className="py-4 px-6 font-medium">Speed Range</td>
                    <td className="py-4 px-6">1–20 Mbps</td>
                    <td className="py-4 px-6">50–1000 Mbps</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="py-4 px-6 font-medium">Availability</td>
                    <td className="py-4 px-6">Nationwide</td>
                    <td className="py-4 px-6">Urban areas</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="py-4 px-6 font-medium">Price Range</td>
                    <td className="py-4 px-6">199–399 MAD/month</td>
                    <td className="py-4 px-6">299–1299 MAD/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-stone-200">
                  <details className="group">
                    <summary className="list-none cursor-pointer">
                      <div className="px-6 py-4 flex justify-between items-center hover:bg-stone-50">
                        <h3 className="font-semibold text-teal-800">{faq.question}</h3>
                        <FiChevronRight className="w-5 h-5 text-teal-600 transform group-open:rotate-90 transition-transform" />
                      </div>
                    </summary>
                    <div className="px-6 pb-4 text-stone-600">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </div>
  );
};

export default ADSLPlansPage;





