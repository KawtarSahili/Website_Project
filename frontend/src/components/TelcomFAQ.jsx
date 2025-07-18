import { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";

const TelecomFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "SIM Cards & Plans",
      items: [
        { question: "Latest SIM models", answer: "Discover our newest SIM cards with enhanced features and better connectivity." },
        { question: "Exclusive offers", answer: "Special deals available only for our long-term customers." }
      ]
    },
    {
      title: "Service Programs",
      items: [
        { question: "5G coverage", answer: "Check our expanding 5G network coverage across the country." },
        { question: "International roaming", answer: "Affordable packages for staying connected abroad." }
      ]
    },
    {
      title: "Account & Billing",
      items: [
        { question: "Upgrade options", answer: "Flexible plans to upgrade your services as your needs grow." },
        { question: "Payment methods", answer: "Multiple convenient ways to pay your bills." },
        { question: "Data rollover", answer: "Learn how unused data can be carried to the next month." },
        { question: "Contact support", answer: "Reach our customer service team through various channels." }
      ]
    }
  ];

  // Filter FAQs based on search term
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <>
      <Header />
      {/* Hero Section with Local Background Image */}
      <div className="relative ">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url('/faq-bg.jpg')` }}
        ></div>
        
        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Find quick answers to common questions about our telecom services
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto ">
            <input
              type="text"
              placeholder="Search questions or keywords..."
              className="w-full px-6 py-4 border border-teal-300 bg-stone-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-lg placeholder-stone-800/80"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg 
              className="absolute right-4 top-4 h-6 w-6 text-stone-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-stone-700 mb-4">How can we help you today?</h2>
          <p className="text-stone-600">
            Need assistance? <span className="font-bold text-teal-800">All the answers</span> might be right here in our FAQ!
          </p>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="space-y-6">
            {filteredCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-white rounded-xl shadow-md overflow-hidden border border-teal-100">
                <h3 className="bg-teal-600 text-white px-6 py-4 text-xl font-medium">
                  {category.title}
                </h3>
                <div className="divide-y divide-teal-50">
                  {category.items.map((item, itemIndex) => {
                    const index = `${catIndex}-${itemIndex}`;
                    return (
                      <div key={itemIndex} className="px-6 py-4">
                        <button
                          className="flex justify-between items-center w-full text-left focus:outline-none"
                          onClick={() => toggleAccordion(index)}
                        >
                          <span className="text-lg font-medium text-stone-700">{item.question}</span>
                          <svg
                            className={`w-5 h-5 text-stone-600 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'}`}
                        >
                          <p className="text-gray-600 pb-2">{item.answer}</p>
                          {item.question.includes("contact") && (
                            <button className="mt-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors">
                              Contact Support
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-teal-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-teal-800">No results found</h3>
            <p className="mt-2 text-teal-600">Try different search terms or browse our categories above</p>
          </div>
        )}

        <div className="mt-12 p-6 bg-teal-50 rounded-xl text-center">
          <h3 className="text-xl font-medium text-teal-800 mb-3">Still need help?</h3>
          <p className="text-teal-600 mb-4">Our customer support team is available 24/7</p>
          <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium" 
          onClick={() => navigate('/contact')}>
            Contact Support
          </button>
        </div>
      </div>
     
      
      <Footer />
    </>
  );
};

export default TelecomFAQ;