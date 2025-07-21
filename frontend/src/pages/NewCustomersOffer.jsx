import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import graybg from "../assets/gray-bg2.jpg";

import { 
  FiZap, 
  FiGift, 
  FiAward, 
  FiClock, 
  FiPercent,
  FiChevronRight,
  FiCheckCircle,
  FiWifi,
  FiDownload,
  FiStar,
  FiCalendar
} from 'react-icons/fi';


const NewCustomersOffers = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const specialOffers = [
    {
      name: "Fiber Ultra Promo",
      speed: "500 Mbps",
      regularPrice: "899 MAD",
      promoPrice: "449 MAD",
      duration: "First 6 months",
      features: [
        "50% off regular price",
        "Free premium mesh router",
        "No installation fee",
        "3 months of streaming included"
      ]
    },
    {
      name: "Family Bundle",
      speed: "200 Mbps",
      regularPrice: "599 MAD",
      promoPrice: "299 MAD",
      duration: "First year",
      features: [
        "Includes parental controls",
        "2 free WiFi extenders",
        "Family security suite",
        "Priority customer support"
      ]
    },
    {
      name: "Gamer Special",
      speed: "1 Gbps",
      regularPrice: "1299 MAD",
      promoPrice: "899 MAD",
      duration: "First 3 months",
      features: [
        "Low latency optimized",
        "Free gaming router",
        "Cloud storage included",
        "Dedicated support line"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Switching to this fiber service saved me over 1,500 MAD in the first year with their new customer offer!",
      name: "Karim B.",
      location: "Casablanca"
    },
    {
      quote: "The installation was free and the technician arrived right on time. The speed is incredible!",
      name: "Amina T.",
      location: "Rabat"
    },
    {
      quote: "I got 3 months free and a premium router. Best decision I made for my home office.",
      name: "Youssef L.",
      location: "Marrakech"
    }
  ];

  const faqs = [
    {
      question: "Who qualifies as a new customer?",
      answer: "Anyone who hasn't had service with us in the past 12 months qualifies for new customer offers."
    },
    {
      question: "How long do the promotional prices last?",
      answer: "Most offers range from 3-12 months. After the promotional period, standard pricing applies."
    },
    {
      question: "Is there a contract required?",
      answer: "Some offers require a 12-month commitment, but we have no-contract options available."
    },
    {
      question: "Can I combine multiple offers?",
      answer: "Yes! Many of our promotions can be combined for even greater savings."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative h-96 md:h-[500px] flex items-center justify-center text-white bg-gradient-to-b from-teal-600 to-teal-800"
       
        >
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full mb-4">
              <span className="flex items-center">
                <FiStar className="mr-2" /> New Customers Only
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Exclusive Offers</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Limited-time deals with incredible savings just for new customers
            </p>
            <a 
              href="/register" 
              className="inline-flex items-center bg-white text-teal-700 font-bold py-3 px-8 rounded-full hover:bg-stone-100 transition duration-300"
            >
              Claim Your Offer <FiChevronRight className="ml-2" />
            </a>
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="py-16  mx-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Limited-Time Special Offers</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                These exclusive deals are only available for a short time. Don't miss out!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {specialOffers.map((offer, index) => (
                <div 
                  key={index} 
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-teal-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-bold">
                    LIMITED TIME
                  </div>
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-teal-800 mb-3">{offer.name}</h3>
                    <div className="flex items-end mb-4">
                      <span className="lg:text-4xl md:text-3xl text-2xl font-bold text-teal-600">{offer.promoPrice}</span>
                      <span className="text-stone-500 ml-2">/month</span>
                    </div>
                    <div className="flex items-center mb-6">
                      <FiDownload className="w-6 h-6 text-teal-500 mr-2" />
                      <span className="text-lg font-semibold text-teal-800">
                        {offer.speed} Speed
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="line-through text-stone-400">{offer.regularPrice}/month</span>
                      <span className="ml-2 bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm">
                        {offer.duration}
                      </span>
                    </div>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {offer.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-stone-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href="/register" 
                      className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                    >
                      Get This Deal
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Incentives Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-teal-100 " style={{
                  backgroundImage: `url(${graybg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  
                }}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 ">
              <h2 className="text-3xl font-bold text-teal-800 mb-4">New Customer Bonuses</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Sign up today and unlock these special rewards just for new customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 mx-20">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-teal-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <FiGift className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-teal-800">3 Months Free</h3>
                  </div>
                  <p className="text-stone-600 mb-6 flex-grow">
                    Enjoy your first 3 months of service completely free on select plans. No hidden fees.
                  </p>
                  <div className="bg-teal-50 rounded-lg p-3 text-center">
                    <span className="font-semibold text-teal-700">Save up to 2,700 MAD</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-teal-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <FiAward className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-teal-800">Premium Router</h3>
                  </div>
                  <p className="text-stone-600 mb-6 flex-grow">
                    Get our advanced dual-band WiFi router ($200 value) included at no extra cost.
                  </p>
                  <div className="bg-teal-50 rounded-lg p-3 text-center">
                    <span className="font-semibold text-teal-700">FREE equipment</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-teal-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-100 p-3 rounded-full mr-4">
                      <FiPercent className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-bold text-teal-800">Referral Bonus</h3>
                  </div>
                  <p className="text-stone-600 mb-6 flex-grow">
                    Refer a friend and both get 10% off your bill for 6 months when they sign up.
                  </p>
                  <div className="bg-teal-50 rounded-lg p-3 text-center">
                    <span className="font-semibold text-teal-700">Earn rewards</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-5 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <a 
                  href="/register" 
                  className="flex items-center justify-center text-lg md:text-xl"
                >
                  <span>Claim Your Offers Now</span>
                  <FiChevronRight className="w-5 h-5 ml-2 animate-bounce-horizontal" />
                </a>
              </div>
              <p className="mt-5 text-stone-500">
                Limited time offers - available only until <span className="font-semibold">December 31, 2025</span>
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-br from-teal-50 to-teal-100 " >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">What Our New Customers Say</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Don't just take our word for it - hear from happy customers who took advantage of these offers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-20">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="rounded-2xl shadow-lg p-8 bg-white/70 backdrop-blur-md border border-teal-400 p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                      <FiStar className="text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-teal-800">{testimonial.name}</h4>
                      <p className="text-stone-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-stone-700 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-teal-600 mb-4">Frequently Asked Questions</h2>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Get answers to common questions about our new customer offers
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-stone-200"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-stone-50 transition duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    <h3 className="font-semibold text-teal-800">{faq.question}</h3>
                    <FiChevronRight 
                      className={`w-5 h-5 text-teal-600 transition-transform duration-300 ${activeFaq === index ? 'transform rotate-90' : ''}`}
                    />
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-4 pt-2 text-stone-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Last CTA Section */}
        <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Faster Internet?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of happy customers enjoying our exclusive new member offers
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/register" 
                className="bg-white text-teal-700 font-bold py-4 px-8 rounded-full hover:bg-stone-100 transition duration-300 shadow-lg"
              >
                Sign Up Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewCustomersOffers;