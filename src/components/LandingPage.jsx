import React from "react";
import { Link } from "react-router-dom"; // 👈 Import Link from react-router-dom
import Header from "./Header";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <>
      <Header />

      {/* Hero section */}
      <section className="relative w-full h-screen overflow-hidden pt-16">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="vid.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Bienvenue chez XXXXXXX
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl">
            At the core of this digital transformation: the network, our legacy and expertise, powering seamless communication across the globe.
          </p>
          
          <div className="mt-8 flex gap-4"> {/* 👈 Wrap buttons in a flex container */}
            <button className="px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
              Get Started Now
            </button>
            
            {/* 👇 New Login/Signup button */}
            <Link 
              to="/auth" 
              className="px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Some filler content to enable scrolling */}
      <main className="max-w-4xl mx-auto px-4 py-20 space-y-6">
        {[...Array(8)].map((_, i) => (
          <p key={i} className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, nisl nec egestas faucibus, ligula nisi scelerisque
            dolor, a placerat odio eros sit amet elit. Curabitur at purus nec
            massa fringilla sollicitudin. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Suspendisse potenti.
          </p>
        ))}
      </main>

      <Footer />
    </>
  );
}