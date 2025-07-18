import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-teal-800 via-blue-900 to-navy-800"
        style={{
          backgroundSize: "400% 400%",
          animation: "gradientAnimation 15s ease infinite",
        }}
      />

      {/* Fixed Header */}
      <div className="z-20">
        <Header />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-grow">
        <div className="flex items-center justify-center min-h-[calc(100vh-160px)] px-4 py-20 pt-32">
          <div className="w-full max-w-5xl mx-auto bg-black/60 backdrop-blur-lg rounded-2xl border border-white/20 p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Video section */}
              <div className="flex flex-col">
                <div className="mb-4">
                  <h1 className="text-4xl font-bold text-white pl-0">Contactez-nous !</h1>
                  <p className="text-xl text-white pl-0">XXXXX à votre service H24</p>
                </div>
                <div className="flex items-center justify-center h-full">
                  <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full max-h-[500px] object-cover rounded-xl shadow-lg"
                  >
                    <source src="/vid1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Contact form */}
              <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h2>
                <form className="space-y-5">
                  <div>
                    <label className="block text-white/80 mb-2">Nom complet</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                      placeholder="Votre email"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Message</label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                      placeholder="Décrivez votre projet..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                  >
                    Envoyer
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with high z-index */}
      <div className="z-20">
        <Footer />
      </div>
    </div>
  );
}
