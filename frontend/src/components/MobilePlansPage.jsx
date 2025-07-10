import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import HeroSection from './HeroSection.jsx';
import { Search, ShoppingBag } from 'lucide-react';

const MobilePlansPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: 49,
      data: "5GB",
      calls: "Unlimited",
      sms: "Unlimited",
      speed: "4G",
      contract: "No contract",
      features: ["5GB data", "Unlimited calls", "Unlimited SMS", "4G speed"],
      description: "Perfect for light users who mainly need calls and texts."
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 99,
      data: "20GB",
      calls: "Unlimited",
      sms: "Unlimited",
      speed: "4G+",
      contract: "12 months",
      features: ["20GB data", "Unlimited calls", "Unlimited SMS", "4G+ speed", "EU roaming"],
      description: "Great balance for regular users with moderate data needs."
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 199,
      data: "Unlimited",
      calls: "Unlimited",
      sms: "Unlimited",
      speed: "5G",
      contract: "12 months",
      features: ["Unlimited data", "Unlimited calls", "Unlimited SMS", "5G speed", "EU roaming", "Streaming services"],
      description: "For heavy users who want the best experience with no limits."
    },
    {
      id: 4,
      name: "Student Plan",
      price: 149,
      data: "15GB",
      calls: "Unlimited",
      sms: "Unlimited",
      speed: "4G",
      contract: "No contract",
      features: ["15GB data", "Unlimited calls", "Unlimited SMS", "Student discount", "Flexible"],
      description: "Special offer for students with great value."
    }
  ];

  const filteredPlans = plans.filter(plan => {
    const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plan.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'low' && plan.price < 100) ||
                        (priceFilter === 'medium' && plan.price >= 100 && plan.price < 200) ||
                        (priceFilter === 'high' && plan.price >= 200);
    
    return matchesSearch && matchesPrice;
  });

  const addToCart = (plan) => {
    console.log(`Added ${plan.name} to cart`);
    alert(`${plan.name} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onLoginClick={() => console.log("Login clicked")} />
      
      {/* Hero Section */}
      <HeroSection />
      
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-700 mb-4">All Mobile Plans</h2>
          <p className="text-xl text-teal-600 max-w-2xl mx-auto">
            Compare all our plans and find the perfect match for your needs
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl mb-8 shadow-lg border border-teal-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search plans..."
                  className="w-full bg-white border border-teal-300 rounded-full px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 text-teal-500" size={20} />
              </div>
            </div>
            <select
              className="bg-white border border-teal-300 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-teal-700 min-w-[200px]"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="low">Under 100Dhs</option>
              <option value="medium">100Dhs - 200Dhs</option>
              <option value="high">Over 200Dhs</option>
            </select>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-teal-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 pb-16">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 border-b border-teal-200">
                <h3 className="text-xl font-bold text-teal-800 mb-2">{plan.name}</h3>
                <p className="text-teal-600">{plan.description}</p>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-4xl font-bold text-teal-700">
                    {plan.price}
                    <span className="text-lg font-normal text-teal-600">Dhs</span>
                  </div>
                  <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    {plan.contract}
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <p className="text-sm text-teal-600">Data</p>
                      <p className="font-semibold text-teal-800">{plan.data}</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <p className="text-sm text-teal-600">Speed</p>
                      <p className="font-semibold text-teal-800">{plan.speed}</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <p className="text-sm text-teal-600">Calls</p>
                      <p className="font-semibold text-teal-800">{plan.calls}</p>
                    </div>
                    <div className="bg-teal-50 p-3 rounded-lg">
                      <p className="text-sm text-teal-600">SMS</p>
                      <p className="font-semibold text-teal-800">{plan.sms}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-teal-600 rounded-full p-1 mr-3 mt-0.5">
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-teal-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
                <button
                  onClick={() => addToCart(plan)}
                  className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <ShoppingBag className="mr-2" size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MobilePlansPage;