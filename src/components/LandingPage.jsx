import React from "react";
import Header from "./Header";

export default function LandingPage() {
  return (
    <>
      <Header />

      {/* Hero section */}
      <section className="relative w-full h-screen overflow-hidden pt-16">
        /* Background video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="vid.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Contact info in bottom right */}
          <div className="absolute bottom-4 right-4 z-10 text-white p-3 rounded-md">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w</svg>ww.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>contact@example.com</span>
            </div>
          </div>

          {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            welcome to XXXXXXX
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl">
            At the core of this digital transformation: the network, our legacy and expertise, powering seamless communication across the globe.
          </p>
          <button className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
            Get Started Now
          </button>
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
    </>
  );
}