import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Globe, Clock, Shield } from "react-feather";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "49Dhs/Month",
    title2: "Forfait Réseaux Sociaux",
    description: "Perfect for social media enthusiasts and content creators",
    icon: <Globe size={48} className="text-teal-600" />,
    features: [
      "Unlimited social media access",
      "High-speed browsing",
      "24/7 customer support",
      "Multi-device connectivity",
      "Free installation"
    ]
  },
  {
    title: "99Dhs/Month",
    title2: "Forfait Professionnel",
    description: "Ideal for businesses and remote work professionals",
    icon: <Clock size={48} className="text-teal-600" />,
    features: [
      "Business-grade connectivity",
      "Priority technical support",
      "Advanced security features",
      "Cloud backup included",
      "Dedicated account manager"
    ]
  },
  {
    title: "199Dhs/Month",
    title2: "Forfait Premium",
    description: "Ultimate package for demanding users and enterprises",
    icon: <Shield size={48} className="text-teal-600" />,
    features: [
      "Maximum speed guarantee",
      "Enterprise security suite",
      "24/7 premium support",
      "Custom network solutions",
      "Free equipment upgrade"
    ]
  }
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#e8f5e9] opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-center text-teal-700 mb-2">{service.title}</h3>
        <h4 className="text-xl font-semibold text-center mb-3">{service.title2}</h4>
        <p className="text-gray-600 text-center mb-4">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 ease-out">
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-md transition duration-300 shadow-lg hover:shadow-xl">
            Discover
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function LandingPage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Header />

      {/* Hero section */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden pt-16">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Bienvenue chez XXXXXXX
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl">
            At the core of this digital transformation: the network, our legacy and expertise, powering seamless communication across the globe.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300">
              Get Started Now
            </button>
            <Link 
              to="/auth" 
              className="px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 text-center transform hover:scale-105 transition-transform duration-300"
            >
              Login / Sign Up
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={titleRef}
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-8"
          >
            Venez découvrir nos forfaits incontournables !
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}