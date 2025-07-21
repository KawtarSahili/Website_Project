import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaGraduationCap, FaWifi, FaMobileAlt, FaPercentage, FaCalendarAlt, FaUsers} from 'react-icons/fa';
import { FiCheckCircle} from 'react-icons/fi';

const StudentsOffer = () => {
  const studentOffers = [
    {
      id: 1,
      title: "Campus Unlimited",
      description: "Unlimited data, calls and texts on campus with special student pricing",
      price: "199 MAD/month",
      features: [
        "100GB high-speed data",
        "Unlimited calls & texts",
        "Free access to campus WiFi hotspots",
        "24/7 student support"
      ],
      icon: <FaGraduationCap className="text-teal-600" size={40} />,
      popular: true
    },
    {
      id: 2,
      title: "Study Bundle",
      description: "Perfect for online learning with extra data for video lectures",
      price: "249 MAD/month",
      features: [
        "150GB high-speed data",
        "Unlimited educational apps",
        "Free cloud storage (50GB)",
        "Discount on tablets"
      ],
      icon: <FaWifi className="text-teal-600" size={40} />
    },
    {
      id: 3,
      title: "Student Plus",
      description: "Premium package with international calling for students abroad",
      price: "299 MAD/month",
      features: [
        "200GB high-speed data",
        "100 international minutes",
        "Free roaming in 50 countries",
        "Priority customer service"
      ],
      icon: <FaMobileAlt className="text-teal-600" size={40} />
    }
  ];

  const studentBenefits = [
    {
      title: "Exclusive Discounts",
      description: "Up to 30% off on all our services with valid student ID",
      icon: <FaPercentage className="text-teal-600" size={30} />
    },
    {
      title: "Flexible Plans",
      description: "Change or pause your plan during semester breaks",
      icon: <FaCalendarAlt className="text-teal-600" size={30} />
    },
    {
      title: "Group Deals",
      description: "Special rates for student groups or campus organizations",
      icon: <FaUsers className="text-teal-600" size={30} />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-teal-600 to-teal-800 text-white py-30 text-center">
          <div className="max-w-5xl mx-auto  px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Exclusive Offers</h1>
            <p className="text-xl md:text-2xl mb-6">
              Stay connected during your studies with plans designed just for students
            </p>
            <button className="bg-white text-teal-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Verify Student Status
            </button>
          </div>
        </section>

        <section className="py-16 mx-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">Student Plans</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
                Choose the plan that fits your student lifestyle and budget.
            </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {studentOffers.map((offer) => (
                <div 
                key={offer.id} 
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-teal-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                
                <div className="p-6 md:p-8 h-full flex flex-col">
                    <div className="flex justify-center mb-4">{offer.icon}</div>
                    <h3 className="text-2xl font-bold text-teal-800 mb-3">{offer.title}</h3>
                    <div className="flex items-end mb-4">
                    <span className="lg:text-4xl md:text-3xl text-2xl font-bold text-teal-600">{offer.price}</span>
                    </div>
                    <p className="text-stone-600 mb-6">{offer.description}</p>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                    {offer.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                        <FiCheckCircle className="w-5 h-5 text-teal-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-stone-700">{feature}</span>
                        </li>
                    ))}
                    </ul>
                    
                    <a 
                    href="/register" 
                    className="w-full py-3 font-semibold rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white">
        
                    Select Plan
                    </a>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

        <section className="py-16 mx-20 bg-stone-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-600 mb-4">Why Choose Our Student Plans?</h2>
            <p className="text-stone-600 max-w-xl mx-auto">
                We understand students have unique needs. That's why we've designed these special benefits just for you.
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentBenefits.map((benefit, index) => (
                <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-teal-400"
                >
                <div className="flex justify-center mb-4 text-teal-600">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-center text-teal-800 mb-3">{benefit.title}</h4>
                <p className="text-center text-stone-600">{benefit.description}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

        <section className="py-16 bg-teal-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white p-8 rounded-xl shadow-md md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:w-2/3">
                <h3 className="text-2xl font-semibold text-stone-800 mb-2">Ready to Get Your Student Discount?</h3>
                <p className="text-stone-600">
                  Verify your student status now to unlock exclusive savings on our telecom services. It only takes a few minutes.
                </p>
              </div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-md transition">
                Start Verification
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudentsOffer;
