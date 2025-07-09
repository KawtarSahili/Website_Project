import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
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
                        (priceFilter === 'low' && plan.price < 15) ||
                        (priceFilter === 'medium' && plan.price >= 15 && plan.price < 25) ||
                        (priceFilter === 'high' && plan.price >= 25);
    
    return matchesSearch && matchesPrice;
  });

  const addToCart = (plan) => {
    // Here you would typically connect to your cart state/context
    console.log(`Added ${plan.name} to cart`);
    alert(`${plan.name} added to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onLoginClick={() => console.log("Login clicked")} />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold text-teal-700 mb-8">Mobile Plans</h1>
        
        {/* Search and Filter Section */}
        <div className="bg-teal-700/10 p-6 rounded-lg mb-8 backdrop-blur-sm border border-teal-700/20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search plans..."
                  className="w-full bg-white/90 border border-teal-700/20 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-teal-700/80" size={18} />
              </div>
            </div>
            <select
              className="bg-white/90 border border-teal-700/20 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 text-teal-700"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="low">Under 50Dhs</option>
              <option value="medium">50Dhs - 150Dhs</option>
              <option value="high">Over 200Dhs</option>
            </select>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => (
            <div key={plan.id} className=" relative bg-white rounded-xl shadow-md overflow-hidden border border-teal-700/20 hover:shadow-lg transition-shadow pb-16">
              <div className="bg-teal-700/10 p-4 border-b border-teal-700/20">
                <h2 className="text-xl font-bold text-teal-700">{plan.name}</h2>
                <p className="text-teal-600">{plan.description}</p>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-teal-700">{plan.price.toFixed(2)}Dhs</span>
                  <span className="bg-teal-700/10 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                    {plan.contract}
                  </span>
                </div>
                
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Data</p>
                      <p className="font-medium">{plan.data}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Speed</p>
                      <p className="font-medium">{plan.speed}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Calls</p>
                      <p className="font-medium">{plan.calls}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">SMS</p>
                      <p className="font-medium">{plan.sms}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-teal-700/20">
    <button
      onClick={() => addToCart(plan)}
      className="w-full bg-teal-700 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-full transition flex items-center justify-center"
    >
      <ShoppingBag className="mr-2" size={18} />
      Add to Cart
    </button>
  </div>
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