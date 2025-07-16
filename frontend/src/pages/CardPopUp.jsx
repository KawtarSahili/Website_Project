import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import internet from '../assets/internet.png';
import dual from '../assets/dual.png';
import ty from '../assets/tiktok-youtube.png';
import socials from '../assets/socials.png';
import popupbg from '../assets/popup-bg.png';
import roaming from '../assets/roaming.png';
import graybg2 from '../assets/gray-bg2.jpg';
import popupbg2 from '../assets/popupbg5.jpg';

const offers = [
  {
    id: 1,
    name: '4G Internet Recharge',
    slug: 'internet-4g',
    image: internet,

  },
  {
    id: 2,
    name: 'TikTok + YouTube Recharge',
    slug: 'tiktok-youtube',
    image: ty,

  },
  {
    id: 3,
    name: 'Calls & SMS Recharge',
    slug: 'calls-sms',
    image: dual,

  },
  {
    id: 4,
    name: 'Social Media Recharge',
    slug: 'social-media',
    image: socials,

  },
  {
    id: 5,
    name: 'Roaming Recharge',
    slug: 'roaming',
    image: roaming,

  },
];

const CardPopUp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Main banner with background image */}
      <div className="relative h-80 bg-cover bg-center" style={{ 
                backgroundImage: `url(${popupbg2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
               }}>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center pt-10 px-4">
                <h2 className="text-2xl lg:text-4xl font-semibold leading-snug mb-2">
                    Quick top-up, no stress.
                </h2>
                <p className="text-lg md:text-2xl text-teal-200 font-medium">
                    More data, more laughs, more everything.
                </p>
        </div>

      </div>

      {/* Minimal subtitle */}
      <div className="bg-white py-3 shadow-sm">
        <p className="text-center text-gray-600 text-sm font-medium">
          Mobile Plans • No commitment • Instant activation
        </p>
      </div>

      {/* Existing main content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-3xl font-bold text-center text-teal-800 mb-10">
          Choose Your Top-Up Offer
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-25 mx-4">
          {offers.map((offer) => (
            <Link
              key={offer.id}
              to={`/recharge/${offer.slug}`}
              className="group relative block overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url(${offer.image})` }}
              ></div>

             

              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-teal-700 transition">
                  {offer.name}
                </h2>
                <button className="mt-4 text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full font-semibold transition">
                  SELECT
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CardPopUp;